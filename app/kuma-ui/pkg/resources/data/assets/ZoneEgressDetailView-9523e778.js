import{d as g,u as k,q as n,o as e,a as t,w as m,h as i,b as c,g as w,k as z,e as E}from"./index-a5906eae.js";import{_ as b}from"./ZoneEgressDetails.vue_vue_type_script_setup_true_lang-9312e782.js";import{h,j as y,i as $,f as x,_ as B}from"./RouteView.vue_vue_type_script_setup_true_lang-c0a5e54a.js";import{_ as V}from"./RouteTitle.vue_vue_type_script_setup_true_lang-2dc2aa37.js";import{_ as N}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-e1dfd3a9.js";import{E as A}from"./ErrorBlock-c977645b.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-59216424.js";import"./kongponents.es-e59adee0.js";import"./DefinitionListItem-0d836b9f.js";import"./EnvoyData-d270adcf.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-125afdd1.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-4c725a38.js";import"./TabsWidget-64ce872f.js";import"./QueryParameter-70743f73.js";import"./TextWithCopyButton-3db8be12.js";const C={class:"zone-details"},D={key:3,class:"kcard-border","data-testid":"detail-view-details"},S=g({__name:"ZoneEgressDetailView",setup(O){const _=h(),f=k(),{t:l}=y(),s=n(null),o=n(!0),r=n(null);p();function p(){d()}async function d(){o.value=!0,r.value=null;const u=f.params.zoneEgress;try{s.value=await _.getZoneEgressOverview({name:u})}catch(a){s.value=null,a instanceof Error?r.value=a:console.error(a)}finally{o.value=!1}}return(u,a)=>(e(),t(B,null,{default:m(({route:v})=>[i(V,{title:c(l)("zone-egresses.routes.item.title",{name:v.params.zoneEgress})},null,8,["title"]),w(),i(x,{breadcrumbs:[{to:{name:"zone-egress-list-view"},text:c(l)("zone-egresses.routes.item.breadcrumbs")}]},{default:m(()=>[z("div",C,[o.value?(e(),t($,{key:0})):r.value!==null?(e(),t(A,{key:1,error:r.value},null,8,["error"])):s.value===null?(e(),t(N,{key:2})):(e(),E("div",D,[i(b,{"zone-egress-overview":s.value},null,8,["zone-egress-overview"])]))])]),_:1},8,["breadcrumbs"])]),_:1}))}});export{S as default};