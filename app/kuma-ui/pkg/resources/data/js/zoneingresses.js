(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zoneingresses"],{"1d10":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-frame"},[t._t("default")],2)},r=[],s={name:"FrameSkeleton"},i=s,o=(n("a948"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"666bca0e",null);e["a"]=c.exports},"3f31":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("KEmptyState",{scopedSlots:t._u([{key:"title",fn:function(){return[n("KIcon",{staticClass:"kong-icon--centered",attrs:{icon:"dangerCircle",size:"42"}}),t._v(" "+t._s(t.productName)+" is running in Standalone mode. ")]},proxy:!0},{key:"message",fn:function(){return[n("p",[t._v(" To access this page, you must be running in "),n("strong",[t._v("Multi-Zone")]),t._v(" mode. ")])]},proxy:!0},{key:"cta",fn:function(){return[n("KButton",{attrs:{to:"https://kuma.io/docs/"+t.version+"/documentation/deployments/",target:"_blank",appearance:"primary"}},[t._v(" Learn More ")])]},proxy:!0}])})},r=[],s=n("f3f3"),i=n("2f62"),o=n("c6ec"),c={name:"MultizoneInfo",data:function(){return{productName:o["j"]}},computed:Object(s["a"])({},Object(i["c"])({version:"config/getVersion"}))},u=c,l=n("2877"),d=Object(l["a"])(u,a,r,!1,null,null,null);e["a"]=d.exports},"4bba":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zoneingresses"},[!1===t.multicluster?n("MultizoneInfo"):n("FrameSkeleton",[n("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"table-data":t.tableData,"table-data-is-empty":t.isEmpty,next:t.next},on:{tableAction:t.tableAction,loadData:function(e){return t.loadData(e)}},scopedSlots:t._u([{key:"additionalControls",fn:function(){return[t.$route.query.ns?n("KButton",{staticClass:"back-button",attrs:{appearance:"primary",size:"small",to:{name:"zoneingresses"}}},[n("span",{staticClass:"custom-control-icon"},[t._v(" ← ")]),t._v(" View All ")]):t._e()]},proxy:!0}])}),!1===t.isEmpty?n("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"},scopedSlots:t._u([{key:"tabHeader",fn:function(){return[n("div",[n("h3",[t._v(" Zone Ingress: "+t._s(t.entity.name))])]),n("div",[n("EntityURLControl",{attrs:{name:t.entity.name}})],1)]},proxy:!0},{key:"overview",fn:function(){return[n("LabelList",[n("div",[n("ul",t._l(t.entity,(function(e,a){return n("li",{key:a},[n("h4",[t._v(" "+t._s(a)+" ")]),n("p",[t._v(" "+t._s(e)+" ")])])})),0)])])]},proxy:!0},{key:"insights",fn:function(){return[n("KCard",{attrs:{"border-variant":"noBorder"},scopedSlots:t._u([{key:"body",fn:function(){return[n("Accordion",{attrs:{"initially-open":0}},t._l(t.subscriptionsReversed,(function(e,a){return n("AccordionItem",{key:a,scopedSlots:t._u([{key:"accordion-header",fn:function(){return[n("SubscriptionHeader",{attrs:{details:e}})]},proxy:!0},{key:"accordion-content",fn:function(){return[n("SubscriptionDetails",{attrs:{details:e,"is-discovery-subscription":""}})]},proxy:!0}],null,!0)})})),1)]},proxy:!0}],null,!1,2672485894)})]},proxy:!0},{key:"xds-configuration",fn:function(){return[n("XdsConfiguration",{attrs:{"zone-ingress-name":t.entity.name}})]},proxy:!0},{key:"envoy-stats",fn:function(){return[n("EnvoyStats",{attrs:{"zone-ingress-name":t.entity.name}})]},proxy:!0},{key:"envoy-clusters",fn:function(){return[n("EnvoyClusters",{attrs:{"zone-ingress-name":t.entity.name}})]},proxy:!0}],null,!1,353422347)}):t._e()],1)],1)},r=[],s=(n("7db0"),n("a630"),n("d81d"),n("b0c0"),n("3ca3"),n("96cf"),n("c964")),i=n("f3f3"),o=n("9b02"),c=n.n(o),u=n("2f62"),l=n("1d3a"),d=n("bc1e"),f=n("0f82"),p=n("1d10"),y=n("2778"),m=n("6663"),b=n("251b"),v=n("0ada"),g=n("2357"),h=n("dbf3"),_=n("c6ec"),k=n("520d"),x=n("3ddf"),E=n("f09b"),S=n("d4aa"),w=n("0b6d"),I=n("c8b4"),z=n("3f31"),O={name:"ZoneIngresses",components:{EnvoyClusters:S["a"],EnvoyStats:E["a"],FrameSkeleton:p["a"],DataOverview:y["a"],Tabs:b["a"],LabelList:v["a"],Accordion:k["a"],AccordionItem:x["a"],SubscriptionDetails:w["a"],SubscriptionHeader:I["a"],MultizoneInfo:z["a"],EntityURLControl:m["a"],XdsConfiguration:g["a"]},metaInfo:{title:"ZoneIngresses"},data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,empty_state:{title:"No Data",message:"There are no Zone Ingresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Ingress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:_["g"],next:null,subscriptionsReversed:[]}},computed:Object(i["a"])({},Object(u["c"])({multicluster:"config/getMulticlusterStatus"})),watch:{$route:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.multicluster&&this.loadData()},tableAction:function(t){var e=t;this.getEntity(e)},loadData:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,s,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:"0",e.isLoading=!0,e.isEmpty=!1,r=e.$route.query.ns||null,n.prev=4,n.next=7,Object(l["a"])({getAllEntities:f["a"].getAllZoneIngressOverviews.bind(f["a"]),getSingleEntity:f["a"].getZoneIngressOverview.bind(f["a"]),size:e.pageSize,offset:a,query:r});case 7:s=n.sent,o=s.data,c=s.next,e.next=c,o.length?(e.isEmpty=!1,e.rawData=o,e.getEntity({name:o[0].name}),e.tableData.data=o.map((function(t){var e=t.zoneIngressInsight,n=void 0===e?{}:e;return Object(i["a"])(Object(i["a"])({},t),Object(h["m"])(n))}))):(e.tableData.data=[],e.isEmpty=!0),n.next=19;break;case 14:n.prev=14,n.t0=n["catch"](4),e.hasError=!0,e.isEmpty=!0,console.error(n.t0);case 19:return n.prev=19,e.isLoading=!1,n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[4,14,19,22]])})))()},getEntity:function(t){var e=["type","name"],n=this.rawData.find((function(e){return e.name===t.name})),a=c()(n,"zoneIngressInsight.subscriptions",[]);this.subscriptionsReversed=Array.from(a).reverse(),this.entity=Object(d["d"])(n,e)}}},D=O,C=n("2877"),j=Object(C["a"])(D,a,r,!1,null,null,null);e["default"]=j.exports},a948:function(t,e,n){"use strict";n("f9f3")},f9f3:function(t,e,n){}}]);