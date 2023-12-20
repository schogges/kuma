package server

import (
	"context"
	"sync"

	envoy_core "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	envoy_sd "github.com/envoyproxy/go-control-plane/envoy/service/discovery/v3"
	envoy_xds "github.com/envoyproxy/go-control-plane/pkg/server/v3"
	"github.com/go-logr/logr"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/structpb"

	system_proto "github.com/kumahq/kuma/api/system/v1alpha1"
	"github.com/kumahq/kuma/pkg/core"
	"github.com/kumahq/kuma/pkg/core/resources/model"
	core_runtime "github.com/kumahq/kuma/pkg/core/runtime"
	"github.com/kumahq/kuma/pkg/kds"
	kds_server "github.com/kumahq/kuma/pkg/kds/server"
	"github.com/kumahq/kuma/pkg/kds/util"
	util_proto "github.com/kumahq/kuma/pkg/util/proto"
	util_xds_v3 "github.com/kumahq/kuma/pkg/util/xds/v3"
	kuma_version "github.com/kumahq/kuma/pkg/version"
)

type StatusTracker interface {
	envoy_xds.Callbacks
	GetStatusAccessor(streamID int64) (StatusAccessor, bool)
}

type StatusAccessor interface {
	GetStatus() (string, *system_proto.KDSSubscription)
}

type ZoneInsightSinkFactoryFunc = func(StatusAccessor, logr.Logger) kds_server.ZoneInsightSink

func NewStatusTracker(runtimeInfo core_runtime.RuntimeInfo,
	createStatusSink ZoneInsightSinkFactoryFunc, log logr.Logger,
) StatusTracker {
	return &statusTracker{
		runtimeInfo:      runtimeInfo,
		createStatusSink: createStatusSink,
		streams:          make(map[int64]*streamState),
		log:              log,
	}
}

var _ StatusTracker = &statusTracker{}

type statusTracker struct {
	util_xds_v3.NoopCallbacks
	runtimeInfo      core_runtime.RuntimeInfo
	createStatusSink ZoneInsightSinkFactoryFunc
	mu               sync.RWMutex // protects access to the fields below
	streams          map[int64]*streamState
	log              logr.Logger
}

type streamState struct {
	stop         chan struct{} // is used for stopping a goroutine that flushes Dataplane status periodically
	mu           sync.RWMutex  // protects access to the fields below
	zone         string
	subscription *system_proto.KDSSubscription
	ctx          context.Context
}

// OnDeltaStreamOpen is called once an xDS stream is open with a stream ID and the type URL (or "" for ADS).
// Returning an error will end processing and close the stream. OnDeltaStreamClosed will still be called.
func (c *statusTracker) OnDeltaStreamOpen(ctx context.Context, streamID int64, typ string) error {
	c.mu.Lock() // write access to the map of all ADS streams
	defer c.mu.Unlock()

	// initialize subscription
	now := core.Now()
	subscription := &system_proto.KDSSubscription{
		Id:               core.NewUUID(),
		GlobalInstanceId: c.runtimeInfo.GetInstanceId(),
		ConnectTime:      util_proto.MustTimestampProto(now),
		Status:           system_proto.NewSubscriptionStatus(now),
		Version:          system_proto.NewVersion(),
	}
	// initialize state per ADS stream
	state := &streamState{
		ctx:          ctx,
		stop:         make(chan struct{}),
		subscription: subscription,
	}
	// save
	c.streams[streamID] = state

	c.log.V(1).Info("OnDeltaStreamOpen", "context", ctx, "streamid", streamID, "type", typ, "subscription", subscription)
	return nil
}

// OnDeltaStreamClosed is called immediately prior to closing an xDS stream with a stream ID.
func (c *statusTracker) OnDeltaStreamClosed(streamID int64, _ *envoy_core.Node) {
	c.mu.Lock() // write access to the map of all ADS streams
	defer c.mu.Unlock()

	state := c.streams[streamID]
	if state == nil {
		c.log.Info("[WARNING] OnDeltaStreamClosed but no state in the status_tracker", "streamid", streamID)
		return
	}

	delete(c.streams, streamID)

	// finilize subscription
	state.mu.Lock() // write access to the per Dataplane info
	subscription := state.subscription
	subscription.DisconnectTime = util_proto.MustTimestampProto(core.Now())
	state.mu.Unlock()

	// trigger final flush
	state.Close()

	c.log.V(1).Info("OnDeltaStreamClosed", "streamid", streamID, "subscription", subscription)
}

// OnStreamDeltaRequest is called once a request is received on a stream.
// Returning an error will end processing and close the stream. OnDeltaStreamClosed will still be called.
func (c *statusTracker) OnStreamDeltaRequest(streamID int64, req *envoy_sd.DeltaDiscoveryRequest) error {
	c.mu.RLock() // read access to the map of all ADS streams
	defer c.mu.RUnlock()

	state := c.streams[streamID]

	state.mu.Lock() // write access to the per Dataplane info
	defer state.mu.Unlock()

	// infer zone
	if state.zone == "" {
		state.zone = req.Node.Id
		if err := readVersion(req.Node.GetMetadata(), state.subscription.Version); err != nil {
			c.log.Error(err, "failed to extract version out of the Envoy metadata", "streamid", streamID, "metadata", req.Node.GetMetadata())
		}
		go c.createStatusSink(state, c.log).Start(state.ctx, state.stop)
	}

	// update Dataplane status
	subscription := state.subscription
	if req.ResponseNonce != "" {
		subscription.Status.LastUpdateTime = util_proto.MustTimestampProto(core.Now())
		if req.ErrorDetail != nil {
			subscription.Status.Total.ResponsesRejected++
			util.StatsOf(subscription.Status, model.ResourceType(req.TypeUrl)).ResponsesRejected++
		} else {
			subscription.Status.Total.ResponsesAcknowledged++
			util.StatsOf(subscription.Status, model.ResourceType(req.TypeUrl)).ResponsesAcknowledged++
		}
	}
	if subscription.Config == "" && req.Node.Metadata != nil && req.Node.Metadata.Fields[kds.MetadataFieldConfig] != nil {
		subscription.Config = req.Node.Metadata.Fields[kds.MetadataFieldConfig].GetStringValue()
	}

	c.log.V(1).Info("OnStreamDeltaRequest", "streamid", streamID, "request", req, "subscription", subscription)
	return nil
}

// OnStreamDeltaResponse is called immediately prior to sending a response on a stream.
func (c *statusTracker) OnStreamDeltaResponse(streamID int64, req *envoy_sd.DeltaDiscoveryRequest, resp *envoy_sd.DeltaDiscoveryResponse) {
	c.mu.RLock() // read access to the map of all ADS streams
	defer c.mu.RUnlock()

	state := c.streams[streamID]

	state.mu.Lock() // write access to the per Dataplane info
	defer state.mu.Unlock()

	// update Dataplane status
	subscription := state.subscription
	subscription.Status.LastUpdateTime = util_proto.MustTimestampProto(core.Now())
	subscription.Status.Total.ResponsesSent++
	util.StatsOf(subscription.Status, model.ResourceType(req.TypeUrl)).ResponsesSent++

	c.log.V(1).Info("OnStreamDeltaResponse", "streamid", streamID, "request", req, "response", resp, "subscription", subscription)
}

func (c *statusTracker) GetStatusAccessor(streamID int64) (StatusAccessor, bool) {
	state, ok := c.streams[streamID]
	return state, ok
}

var _ StatusAccessor = &streamState{}

func (s *streamState) GetStatus() (string, *system_proto.KDSSubscription) {
	s.mu.RLock() // read access to the per Dataplane info
	defer s.mu.RUnlock()
	return s.zone, proto.Clone(s.subscription).(*system_proto.KDSSubscription)
}

func (s *streamState) Close() {
	close(s.stop)
}

func readVersion(metadata *structpb.Struct, version *system_proto.Version) error {
	if metadata == nil {
		return nil
	}
	rawVersion := metadata.Fields[kds.MetadataFieldVersion].GetStructValue()
	if rawVersion != nil {
		err := util_proto.ToTyped(rawVersion, version)
		if err != nil {
			return err
		}
		version.KumaCp.KumaCpGlobalCompatible = kuma_version.DeploymentVersionCompatible(kuma_version.Build.Version, version.KumaCp.GetVersion())
	}
	return nil
}
