import{d as b,a as o,o as a,b as i,w as e,e as t,m as v,W as w,f as c,E as V,A as k,c as x,F as R,X as y,G as B,t as C,D}from"./index-CasyeFB_.js";import{_ as $}from"./NavTabs.vue_vue_type_script_setup_true_lang-DIci4670.js";const E=b({__name:"ZoneIngressDetailTabsView",setup(h){return(I,T)=>{const _=o("RouteTitle"),p=o("RouterLink"),d=o("RouterView"),z=o("DataSource"),f=o("AppView"),g=o("RouteView");return a(),i(g,{name:"zone-ingress-detail-tabs-view",params:{zone:"",zoneIngress:""}},{default:e(({route:s,t:r})=>[t(f,{breadcrumbs:[{to:{name:"zone-cp-list-view"},text:r("zone-cps.routes.item.breadcrumbs")},{to:{name:"zone-ingress-list-view",params:{zone:s.params.zone}},text:r("zone-ingresses.routes.item.breadcrumbs")}]},{title:e(()=>[v("h1",null,[t(w,{text:s.params.zoneIngress},{default:e(()=>[t(_,{title:r("zone-ingresses.routes.item.title",{name:s.params.zoneIngress})},null,8,["title"])]),_:2},1032,["text"])])]),default:e(()=>[c(),t(z,{src:`/zone-ingress-overviews/${s.params.zoneIngress}`},{default:e(({data:m,error:l})=>{var u;return[l!==void 0?(a(),i(V,{key:0,error:l},null,8,["error"])):m===void 0?(a(),i(k,{key:1})):(a(),x(R,{key:2},[t($,{"active-route-name":(u=s.active)==null?void 0:u.name,"data-testid":"zone-ingress-tabs"},y({_:2},[B(s.children,({name:n})=>({name:`${n}`,fn:e(()=>[t(p,{to:{name:n},"data-testid":`${n}-tab`},{default:e(()=>[c(C(r(`zone-ingresses.routes.item.navigation.${n}`)),1)]),_:2},1032,["to","data-testid"])])}))]),1032,["active-route-name"]),c(),t(d,null,{default:e(n=>[(a(),i(D(n.Component),{data:m},null,8,["data"]))]),_:2},1024)],64))]}),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{E as default};
