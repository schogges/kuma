import{d as v,l as f,a as c,o as _,b as r,w as e,e as l,p as s,f as t,q as n,t as m,c as w,a0 as d,B as g,C as I,a1 as V,_ as k}from"./index-8e773b6e.js";import{_ as x}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-4db58b3b.js";const S=i=>(g("data-v-2caa54b3"),i=i(),I(),i),B={class:"summary-title-wrapper"},R=S(()=>s("img",{"aria-hidden":"true",src:V},null,-1)),M={class:"summary-title"},T={key:1,class:"stack"},b={class:"mt-4 stack"},C=v({__name:"MeshSummaryView",props:{name:{},meshInsight:{default:void 0}},setup(i){const{t:a}=f(),o=i;return(N,A)=>{const p=c("RouteTitle"),u=c("RouterLink"),h=c("AppView"),y=c("RouteView");return _(),r(y,{name:"mesh-summary-view"},{default:e(()=>[l(h,null,{title:e(()=>[s("div",B,[R,t(),s("h2",M,[l(u,{to:{name:"mesh-detail-view",params:{mesh:o.name}}},{default:e(()=>[l(p,{title:n(a)("meshes.routes.item.title",{name:o.name}),render:!0},null,8,["title"])]),_:1},8,["to"])])])]),default:e(()=>[t(),o.meshInsight===void 0?(_(),r(x,{key:0},{message:e(()=>[s("p",null,m(n(a)("common.collection.summary.empty_message",{type:"Mesh"})),1)]),default:e(()=>[t(m(n(a)("common.collection.summary.empty_title",{type:"Mesh"}))+" ",1)]),_:1})):(_(),w("div",T,[s("div",null,[s("h3",null,m(n(a)("meshes.routes.item.overview")),1),t(),s("div",b,[l(d,{total:o.meshInsight.services.total??0,"data-testid":"services-status"},{title:e(()=>[t(m(n(a)("meshes.detail.services")),1)]),_:1},8,["total"]),t(),l(d,{online:o.meshInsight.dataplanesByType.standard.online??0,total:o.meshInsight.dataplanesByType.standard.total??0,"data-testid":"data-plane-proxies-status"},{title:e(()=>[t(m(n(a)("meshes.detail.data_plane_proxies")),1)]),_:1},8,["online","total"])])])]))]),_:1})]),_:1})}}});const D=k(C,[["__scopeId","data-v-2caa54b3"]]);export{D as default};