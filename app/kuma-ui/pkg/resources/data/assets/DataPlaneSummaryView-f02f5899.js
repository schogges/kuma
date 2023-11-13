import{d as V,l as O,R as S,a as _,o,c as r,e as i,w as t,f as e,t as n,q as a,p as d,b as v,a7 as R,K as C,v as B,a6 as m,F as u,_ as D,y as L,B as N,C as E,a9 as K}from"./index-8e773b6e.js";import{_ as $}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-4db58b3b.js";import{S as A}from"./StatusBadge-73faaa00.js";import{T as P}from"./TagList-1baeb56e.js";import{a as U,d as z,b as F}from"./dataplane-0a086c06.js";const j={class:"stack"},q={class:"status-with-reason"},W=V({__name:"DataPlaneSummary",props:{dataplaneOverview:{}},setup(p){const{t:s,formatIsoDate:y}=O(),l=p,f=S(()=>U(l.dataplaneOverview.dataplane,l.dataplaneOverview.dataplaneInsight)),I=S(()=>z(l.dataplaneOverview.dataplane)),h=S(()=>F(l.dataplaneOverview.dataplaneInsight)),g=S(()=>{var k;const c=((k=l.dataplaneOverview.dataplaneInsight)==null?void 0:k.subscriptions)??[];if(c.length===0)return null;const w=c[c.length-1];return y(w.status.lastUpdateTime)});return(c,w)=>{const k=_("KTooltip");return o(),r("div",j,[i(m,null,{title:t(()=>[e(n(a(s)("http.api.property.status")),1)]),body:t(()=>[d("div",q,[i(A,{status:f.value.status},null,8,["status"]),e(),f.value.reason.length>0?(o(),v(k,{key:0,label:f.value.reason.join(", "),class:"reason-tooltip","position-fixed":""},{default:t(()=>[i(a(R),{size:a(C),"hide-title":""},null,8,["size"])]),_:1},8,["label"])):B("",!0)])]),_:1}),e(),i(m,null,{title:t(()=>[e(n(a(s)("http.api.property.tags")),1)]),body:t(()=>[I.value.length>0?(o(),v(P,{key:0,tags:I.value},null,8,["tags"])):(o(),r(u,{key:1},[e(n(a(s)("common.detail.none")),1)],64))]),_:1}),e(),i(m,null,{title:t(()=>[e(n(a(s)("http.api.property.dependencies")),1)]),body:t(()=>[h.value!==null?(o(),v(P,{key:0,tags:h.value},null,8,["tags"])):(o(),r(u,{key:1},[e(n(a(s)("common.detail.none")),1)],64))]),_:1}),e(),i(m,null,{title:t(()=>[e(n(a(s)("data-planes.routes.item.last_updated")),1)]),body:t(()=>[g.value?(o(),r(u,{key:0},[e(n(g.value),1)],64)):(o(),r(u,{key:1},[e(n(a(s)("common.detail.none")),1)],64))]),_:1}),e(),i(m,null,{title:t(()=>[e(n(a(s)("data-planes.routes.item.certificate_info")),1)]),body:t(()=>{var T,b,x;return[(b=(T=l.dataplaneOverview.dataplaneInsight)==null?void 0:T.mTLS)!=null&&b.certificateExpirationTime?(o(),r(u,{key:0},[e(n(a(y)((x=l.dataplaneOverview.dataplaneInsight)==null?void 0:x.mTLS.certificateExpirationTime)),1)],64)):(o(),r(u,{key:1},[e(n(a(s)("data-planes.routes.item.no_certificate")),1)],64))]}),_:1})])}}});const Z=D(W,[["__scopeId","data-v-cdf3b188"]]),G=p=>(N("data-v-cf92f4d0"),p=p(),E(),p),H={class:"summary-title-wrapper"},J=G(()=>d("img",{"aria-hidden":"true",src:K},null,-1)),M={class:"summary-title"},Q={key:1,class:"stack"},X=V({__name:"DataPlaneSummaryView",props:{name:{},dataplaneOverview:{default:void 0}},setup(p){const{t:s}=O(),y=L(),l=p;return(f,I)=>{const h=_("RouteTitle"),g=_("RouterLink"),c=_("AppView"),w=_("RouteView");return o(),v(w,{name:a(y).name},{default:t(()=>[i(c,null,{title:t(()=>[d("div",H,[J,e(),d("h2",M,[i(g,{to:{name:"data-plane-detail-view",params:{dataPlane:l.name}}},{default:t(()=>[i(h,{title:a(s)("data-planes.routes.item.title",{name:l.name}),render:!0},null,8,["title"])]),_:1},8,["to"])])])]),default:t(()=>[e(),l.dataplaneOverview===void 0?(o(),v($,{key:0},{message:t(()=>[d("p",null,n(a(s)("common.collection.summary.empty_message",{type:"Data Plane Proxy"})),1)]),default:t(()=>[e(n(a(s)("common.collection.summary.empty_title",{type:"Data Plane Proxy"}))+" ",1)]),_:1})):(o(),r("div",Q,[d("div",null,[d("h3",null,n(a(s)("data-planes.routes.item.overview")),1),e(),i(Z,{class:"mt-4","dataplane-overview":l.dataplaneOverview},null,8,["dataplane-overview"])])]))]),_:1})]),_:1},8,["name"])}}});const ne=D(X,[["__scopeId","data-v-cf92f4d0"]]);export{ne as default};