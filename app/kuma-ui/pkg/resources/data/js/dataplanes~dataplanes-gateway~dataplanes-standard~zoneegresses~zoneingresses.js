(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dataplanes~dataplanes-gateway~dataplanes-standard~zoneegresses~zoneingresses"],{"0788":function(e,t,n){},"0b6d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.details.globalInstanceId||e.details.connectTime||e.details.disconnectTime?n("div",[n("h5",{staticClass:"overview-tertiary-title"},[e._v(" General Information: ")]),n("ul",[e.details.globalInstanceId?n("li",[n("strong",[e._v("Global Instance ID:")]),e._v(" "),n("span",{staticClass:"mono"},[e._v(e._s(e.details.globalInstanceId))])]):e._e(),e.details.controlPlaneInstanceId?n("li",[n("strong",[e._v("Control Plane Instance ID:")]),e._v(" "),n("span",{staticClass:"mono"},[e._v(e._s(e.details.controlPlaneInstanceId))])]):e._e(),e.details.connectTime?n("li",[n("strong",[e._v("Last Connected:")]),e._v(" "+e._s(e._f("readableDate")(e.details.connectTime))+" ")]):e._e(),e.details.disconnectTime?n("li",[n("strong",[e._v("Last Disconnected:")]),e._v(" "+e._s(e._f("readableDate")(e.details.disconnectTime))+" ")]):e._e()])]):e._e(),e.detailsIterator?n("div",[n("ul",{staticClass:"overview-stat-grid"},e._l(e.detailsIterator,(function(t,r){return n("li",{key:r},[n("h6",{staticClass:"overview-tertiary-title"},[e._v(" "+e._s(e._f("humanReadable")(r))+": ")]),n("ul",e._l(t,(function(t,r){return n("li",{key:r},[n("strong",[e._v(e._s(e._f("humanReadable")(r))+":")]),e._v(" "),n("span",{staticClass:"mono"},[e._v(e._s(e._f("formatError")(e._f("formatValue")(t))))])])})),0)])})),0)]):n("KAlert",{staticClass:"mt-4",attrs:{appearance:"info"},scopedSlots:e._u([{key:"alertIcon",fn:function(){return[n("KIcon",{attrs:{icon:"portal"}})]},proxy:!0},{key:"alertMessage",fn:function(){return[e._v(" There are no subscription statistics for "),n("strong",[e._v(e._s(e.details.id))])]},proxy:!0}])})],1)},a=[],s=(n("d3b7"),n("25f0"),n("c9e9")),o=n("bc1e"),i={name:"SubscriptionDetails",filters:{formatValue:function(e){return e?parseInt(e,10).toLocaleString("en").toString():0},readableDate:function(e){return Object(o["f"])(e)},humanReadable:function(e){return Object(o["b"])(e)},formatError:function(e){return"--"===e?"error calculating":e}},props:{details:{type:Object,required:!0},isDiscoverySubscription:{type:Boolean,default:!1}},computed:{detailsIterator:function(){var e;if(this.isDiscoverySubscription){var t=this.details.status,n=(t.lastUpdateTime,t.total,Object(s["a"])(t,["lastUpdateTime","total"]));return n}return null===(e=this.details.status)||void 0===e?void 0:e.stat}}},c=i,l=(n("f426"),n("2877")),u=Object(l["a"])(c,r,a,!1,null,"65d19712",null);t["a"]=u.exports},"0f12":function(e,t,n){},"1a81":function(e,t,n){"use strict";n("31f5")},2357:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("StatusInfo",{attrs:{"has-error":e.hasError,"is-loading":e.isLoading}},[n("KCard",{attrs:{"border-variant":"noBorder"},scopedSlots:e._u([{key:"body",fn:function(){return[n("Prism",{attrs:{id:"xds",language:"json",code:e.xds}})]},proxy:!0},{key:"actions",fn:function(){return[e.xds?n("KClipboardProvider",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.copyToClipboard;return[n("KPop",{attrs:{placement:"bottom"},scopedSlots:e._u([{key:"content",fn:function(){return[n("div",[n("p",[e._v("Config copied to clipboard!")])])]},proxy:!0}],null,!0)},[n("KButton",{attrs:{appearance:"primary"},on:{click:function(){r(e.xds)}}},[e._v(" Copy config to clipboard ")])],1)]}}],null,!1,4263742566)}):e._e()]},proxy:!0}])})],1)},a=[],s=(n("96cf"),n("c964")),o=n("0f82"),i=n("ef9d"),c=n("2ccf"),l=n.n(c),u={name:"XdsConfiguration",components:{StatusInfo:i["a"],Prism:l.a},props:{mesh:{type:String,default:""},dppName:{type:String,default:""},zoneIngressName:{type:String,default:""},zoneEgressName:{type:String,default:""}},data:function(){return{isLoading:!0,hasError:!1}},watch:{dppName:function(){this.fetchXds()},zoneIngressName:function(){this.fetchXds()},zoneEgressName:function(){this.fetchXds()}},mounted:function(){this.fetchXds()},methods:{fetchXds:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasError=!1,e.isLoading=!0,t.prev=2,n={},""===e.mesh||""===e.dppName){t.next=10;break}return t.next=7,o["a"].getDataplaneXds({mesh:e.mesh,dppName:e.dppName});case 7:n=t.sent,t.next=20;break;case 10:if(""===e.zoneIngressName){t.next=16;break}return t.next=13,o["a"].getZoneIngressXds({zoneIngressName:e.zoneIngressName});case 13:n=t.sent,t.next=20;break;case 16:if(""===e.zoneEgressName){t.next=20;break}return t.next=19,o["a"].getZoneEgressXds({zoneEgressName:e.zoneEgressName});case 19:n=t.sent;case 20:e.xds=JSON.stringify(n,null,2),t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](2),console.error(t.t0),e.hasError=!0;case 27:return t.prev=27,e.isLoading=!1,t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[2,23,27,30]])})))()}}},d=u,p=(n("c853"),n("2877")),f=Object(p["a"])(d,r,a,!1,null,"69400600",null);t["a"]=f.exports},2387:function(e,t,n){},"2ee4":function(e,t,n){"use strict";n("0f12")},"31f5":function(e,t,n){},"3ddf":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:e.accordionItemClasses},[n("button",{staticClass:"accordion-item-header",attrs:{"aria-expanded":e.visible},on:{click:e.open}},[e._t("accordion-header")],2),n("transition",{attrs:{name:"accordion"},on:{enter:e.start,"after-enter":e.end,"before-leave":e.start}},[e.visible?n("div",{staticClass:"px-4"},[e._t("accordion-content")],2):e._e()])],1)},a=[],s=(n("caad"),n("c975"),n("a434"),n("2532"),{name:"AccordionItem",inject:["parentAccordion"],data:function(){return{index:null}},computed:{visible:function(){return this.parentAccordion.multipleOpen?this.parentAccordion.active.includes(this.index):this.index===this.parentAccordion.active},accordionItemClasses:function(){return["relative border-b py-2",{active:this.visible}]}},created:function(){this.index=this.parentAccordion.count++},methods:{hideItem:function(){this.parentAccordion.multipleOpen?this.parentAccordion.active.splice(this.parentAccordion.active.indexOf(this.index),1):this.parentAccordion.active=null},showItem:function(){this.parentAccordion.multipleOpen?this.parentAccordion.active.push(this.index):this.parentAccordion.active=this.index},open:function(){this.visible?this.hideItem():this.showItem()},start:function(e){e.style.height="".concat(e.scrollHeight,"px")},end:function(e){e.style.height="auto"}}}),o=s,i=(n("9cd3"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,"6f89660e",null);t["a"]=c.exports},"520d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"accordion"},[e._t("default")],2)},a=[],s=(n("a9e3"),{name:"Accordion",props:{initiallyOpen:{type:[Number,Array],default:null},multipleOpen:{type:Boolean,default:!1}},data:function(){var e;return e=null!==this.initiallyOpen?this.initiallyOpen:this.multipleOpen?[]:null,{parentAccordion:{count:0,active:e,multipleOpen:this.multipleOpen}}},provide:function(){return{parentAccordion:this.parentAccordion}}}),o=s,i=(n("2ee4"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,"790cd898",null);t["a"]=c.exports},6663:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{"data-testid":"entity-url-control"}},[n("KClipboardProvider",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.copyToClipboard;return[n("KPop",{attrs:{placement:"bottom"},scopedSlots:e._u([{key:"content",fn:function(){return[n("div",[n("p",[e._v(e._s(e.confirmationText))])])]},proxy:!0}],null,!0)},[n("KButton",{attrs:{appearance:"secondary",size:"small"},on:{click:function(){r(e.shareUrl)}},scopedSlots:e._u([{key:"icon",fn:function(){return[n("KIcon",{attrs:{"view-box":"0 0 16 16",icon:"externalLink"}})]},proxy:!0}],null,!0)},[e._v(" "+e._s(e.copyButtonText)+" ")])],1)]}}])})],1)},a=[],s=(n("99af"),n("b0c0"),n("ac1f"),n("5319"),{name:"EntityURLControl",props:{name:{type:String,default:""},copyButtonText:{type:String,default:"Copy URL"},confirmationText:{type:String,default:"URL copied to clipboard!"},mesh:{type:String,default:""}},computed:{shareUrl:function(){var e="".concat(window.location.href.replace(window.location.hash,""),"#"),t=this.$router.resolve({name:this.$route.name,params:{mesh:this.mesh},query:{ns:this.name}}).resolved.fullPath;return"".concat(e).concat(t)}}}),o=s,i=n("2877"),c=Object(i["a"])(o,r,a,!1,null,null,null);t["a"]=c.exports},"72c8":function(e,t,n){"use strict";n("0788")},"9cd3":function(e,t,n){"use strict";n("e593")},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),s=n("a691"),o=n("50c4"),i=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),p=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var n,r,u,d,p,f,y=i(this),b=o(y.length),_=a(e,b),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=b-_):(n=x-2,r=h(m(s(t),0),b-_)),b+n-r>g)throw TypeError(v);for(u=c(y,r),d=0;d<r;d++)p=_+d,p in y&&l(u,d,y[p]);if(u.length=r,n<r){for(d=_;d<b-r;d++)p=d+r,f=d+n,p in y?y[f]=y[p]:delete y[f];for(d=b;d>b-r+n;d--)delete y[d-1]}else if(n>r)for(d=b-r;d>_;d--)p=d+r-1,f=d+n-1,p in y?y[f]=y[p]:delete y[f];for(d=0;d<n;d++)y[d+_]=arguments[d+2];return y.length=b-r+n,u}})},c853:function(e,t,n){"use strict";n("2387")},c8b4:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h4",{staticClass:"text-lg font-medium"},[n("span",{staticClass:"color-green-400"},[e._v(" Connect time: "+e._s(e._f("rawReadableDateFilter")(e.details.connectTime))+" ")]),e.details.disconnectTime?n("span",{staticClass:"ml-4 color-red-400"},[e._v(" Disconnect time: "+e._s(e._f("rawReadableDateFilter")(e.details.disconnectTime))+" ")]):e._e()])},a=[],s=n("bc1e"),o={name:"SubscriptionHeader",filters:{rawReadableDateFilter:function(e){return Object(s["i"])(e)}},props:{details:{type:Object,required:!0}}},i=o,c=n("2877"),l=Object(c["a"])(i,r,a,!1,null,null,null);t["a"]=l.exports},d4aa:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("StatusInfo",{attrs:{"has-error":e.hasError,"is-loading":e.isLoading}},[n("KCard",{attrs:{"border-variant":"noBorder"},scopedSlots:e._u([{key:"body",fn:function(){return[n("Prism",{attrs:{id:"clusters",language:"json",code:e.clusters}})]},proxy:!0},{key:"actions",fn:function(){return[e.clusters?n("KClipboardProvider",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.copyToClipboard;return[n("KPop",{attrs:{placement:"bottom"},scopedSlots:e._u([{key:"content",fn:function(){return[n("div",[n("p",[e._v("Config copied to clipboard!")])])]},proxy:!0}],null,!0)},[n("KButton",{attrs:{appearance:"primary"},on:{click:function(){r(e.clusters)}}},[e._v(" Copy config to clipboard ")])],1)]}}],null,!1,3723966576)}):e._e()]},proxy:!0}])})],1)},a=[],s=(n("96cf"),n("c964")),o=n("0f82"),i=n("ef9d"),c=n("2ccf"),l=n.n(c),u={name:"EnvoyClusters",components:{StatusInfo:i["a"],Prism:l.a},props:{mesh:{type:String,default:""},dppName:{type:String,default:""},zoneIngressName:{type:String,default:""},zoneEgressName:{type:String,default:""}},data:function(){return{isLoading:!0,hasError:!1}},watch:{dppName:function(){this.fetchClusters()},zoneIngressName:function(){this.fetchClusters()},zoneEgressName:function(){this.fetchClusters()}},mounted:function(){this.fetchClusters()},methods:{fetchClusters:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasError=!1,e.isLoading=!0,t.prev=2,n="",""===e.mesh||""===e.dppName){t.next=10;break}return t.next=7,o["a"].getDataplaneClusters({mesh:e.mesh,dppName:e.dppName});case 7:n=t.sent,t.next=20;break;case 10:if(""===e.zoneIngressName){t.next=16;break}return t.next=13,o["a"].getZoneIngressClusters({zoneIngressName:e.zoneIngressName});case 13:n=t.sent,t.next=20;break;case 16:if(""===e.zoneEgressName){t.next=20;break}return t.next=19,o["a"].getZoneEgressClusters({zoneEgressName:e.zoneEgressName});case 19:n=t.sent;case 20:e.clusters=n,t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](2),console.error(t.t0),e.hasError=!0;case 27:return t.prev=27,e.isLoading=!1,t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[2,23,27,30]])})))()}}},d=u,p=(n("1a81"),n("2877")),f=Object(p["a"])(d,r,a,!1,null,"7040b5b6",null);t["a"]=f.exports},e593:function(e,t,n){},ef9d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isReady?n("div",[e._t("default")],2):e._e(),e.isLoading?n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1),e._v(" Data Loading... ")]},proxy:!0}],null,!1,3263214496)}):e._e(),e.isEmpty&&!e.isLoading?n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-200)",icon:"warning","secondary-color":"var(--black-75)",size:"42"}})],1),e._v(" There is no data to display. ")]},proxy:!0}],null,!1,1612658095)}):e._e(),e.hasError?n("KEmptyState",{attrs:{"cta-is-hidden":""},scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-200)",icon:"warning","secondary-color":"var(--black-75)",size:"42"}})],1),e._v(" An error has occurred while trying to load this data. ")]},proxy:!0}],null,!1,822917942)}):e._e()],1)},a=[],s={name:"StatusInfo",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},computed:{isReady:function(){return!this.isEmpty&&!this.hasError&&!this.isLoading}}},o=s,i=n("2877"),c=Object(i["a"])(o,r,a,!1,null,null,null);t["a"]=c.exports},efd6:function(e,t,n){},f09b:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("StatusInfo",{attrs:{"has-error":e.hasError,"is-loading":e.isLoading}},[n("KCard",{attrs:{"border-variant":"noBorder"},scopedSlots:e._u([{key:"body",fn:function(){return[n("Prism",{attrs:{id:"stats",language:"json",code:e.stats}})]},proxy:!0},{key:"actions",fn:function(){return[e.stats?n("KClipboardProvider",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.copyToClipboard;return[n("KPop",{attrs:{placement:"bottom"},scopedSlots:e._u([{key:"content",fn:function(){return[n("div",[n("p",[e._v("Config copied to clipboard!")])])]},proxy:!0}],null,!0)},[n("KButton",{attrs:{appearance:"primary"},on:{click:function(){r(e.stats)}}},[e._v(" Copy config to clipboard ")])],1)]}}],null,!1,3925066216)}):e._e()]},proxy:!0}])})],1)},a=[],s=(n("96cf"),n("c964")),o=n("0f82"),i=n("ef9d"),c=n("2ccf"),l=n.n(c),u={name:"EnvoyStats",components:{StatusInfo:i["a"],Prism:l.a},props:{mesh:{type:String,default:""},dppName:{type:String,default:""},zoneIngressName:{type:String,default:""},zoneEgressName:{type:String,default:""}},data:function(){return{isLoading:!0,hasError:!1}},watch:{dppName:function(){this.fetchStats()},zoneIngressName:function(){this.fetchStats()},zoneEgressName:function(){this.fetchStats()}},mounted:function(){this.fetchStats()},methods:{fetchStats:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasError=!1,e.isLoading=!0,t.prev=2,n="",""===e.mesh||""===e.dppName){t.next=10;break}return t.next=7,o["a"].getDataplaneStats({mesh:e.mesh,dppName:e.dppName});case 7:n=t.sent,t.next=20;break;case 10:if(""===e.zoneIngressName){t.next=16;break}return t.next=13,o["a"].getZoneIngressStats({zoneIngressName:e.zoneIngressName});case 13:n=t.sent,t.next=20;break;case 16:if(""===e.zoneEgressName){t.next=20;break}return t.next=19,o["a"].getZoneEgressStats({zoneEgressName:e.zoneEgressName});case 19:n=t.sent;case 20:e.stats=n,t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](2),console.error(t.t0),e.hasError=!0;case 27:return t.prev=27,e.isLoading=!1,t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[2,23,27,30]])})))()}}},d=u,p=(n("72c8"),n("2877")),f=Object(p["a"])(d,r,a,!1,null,"535be8f4",null);t["a"]=f.exports},f426:function(e,t,n){"use strict";n("efd6")}}]);