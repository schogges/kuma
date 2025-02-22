package v1alpha1

import (
	common_api "github.com/kumahq/kuma/api/common/v1alpha1"
	"github.com/kumahq/kuma/pkg/core/resources/apis/mesh"
	"github.com/kumahq/kuma/pkg/core/validators"
	"github.com/kumahq/kuma/pkg/plugins/policies/core/rules/inbound"
	"github.com/kumahq/kuma/pkg/util/pointer"
)

func (r *MeshTrafficPermissionResource) validate() error {
	var verr validators.ValidationError
	path := validators.RootedAt("spec")
	verr.AddErrorAt(path.Field("targetRef"), r.validateTop(r.Spec.TargetRef, inbound.AffectsInbounds(r.Spec)))
	if len(pointer.Deref(r.Spec.From)) == 0 {
		verr.AddViolationAt(path.Field("from"), "needs at least one item")
	}
	verr.AddErrorAt(path, validateFrom(pointer.Deref(r.Spec.From)))
	return verr.OrNil()
}

func (r *MeshTrafficPermissionResource) validateTop(targetRef *common_api.TargetRef, isInboundPolicy bool) validators.ValidationError {
	if targetRef == nil {
		return validators.ValidationError{}
	}
	targetRefErr := mesh.ValidateTargetRef(*targetRef, &mesh.ValidateTargetRefOpts{
		SupportedKinds: []common_api.TargetRefKind{
			common_api.Mesh,
			common_api.MeshSubset,
			common_api.MeshService,
			common_api.MeshServiceSubset,
			common_api.Dataplane,
		},
		IsInboundPolicy: isInboundPolicy,
	})
	return targetRefErr
}

func validateFrom(from []From) validators.ValidationError {
	var verr validators.ValidationError
	for idx, fromItem := range from {
		path := validators.RootedAt("from").Index(idx)
		verr.AddErrorAt(path.Field("targetRef"), mesh.ValidateTargetRef(fromItem.GetTargetRef(), &mesh.ValidateTargetRefOpts{
			SupportedKinds: []common_api.TargetRefKind{
				common_api.Mesh,
				common_api.MeshSubset,
				common_api.MeshService,
				common_api.MeshServiceSubset,
			},
		}))

		defaultField := path.Field("default")
		verr.AddErrorAt(defaultField, validateDefault(fromItem.Default))
	}
	return verr
}

func validateDefault(conf Conf) validators.ValidationError {
	var verr validators.ValidationError
	if len(pointer.Deref(conf.Action)) == 0 {
		verr.AddViolation("action", validators.MustBeDefined)
	}
	return verr
}
