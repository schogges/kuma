import{d as g,s as x,i as A,V as R,r as t,o as a,m as o,w as s,k as _,e as c,b as r,c as v,L as h,M as L,l as y,n as B,t as M,p as N,E as T}from"./index-B3PYX6oN.js";const X={class:"stack"},D=["innerHTML"],H=g({__name:"ServiceListTabsView",props:{mesh:{}},setup(w){const i=w,l=x(),u=A();return R(()=>l.currentRoute.value.name,m=>{m==="service-list-tabs-view"&&l.replace(u("use service-insights",i.mesh)?{name:"service-list-view"}:{name:"mesh-service-list-view"})},{immediate:!0}),(m,E)=>{const f=t("XAction"),V=t("XActionGroup"),k=t("RouterView"),C=t("AppView"),b=t("RouteView");return a(),o(b,{name:"service-list-tabs-view",params:{mesh:""}},{default:s(({route:n,t:p})=>[_("div",X,[_("div",{innerHTML:p("services.routes.items.intro",{},{defaultMessage:""})},null,8,D),c(),r(C,null,{actions:s(()=>[r(V,{expanded:!0},{default:s(()=>[(a(!0),v(h,null,L(n.children,({name:e})=>{var d;return a(),v(h,{key:e},[!y(u)("use service-insights",i.mesh)&&["service-list-view","external-service-list-view"].includes(e)?N("",!0):(a(),o(f,{key:0,class:B({active:((d=n.child())==null?void 0:d.name)===e}),to:{name:e,params:{mesh:n.params.mesh}},"data-testid":`${e}-sub-tab`},{default:s(()=>[c(M(p(`services.routes.items.navigation.${e}`)),1)]),_:2},1032,["class","to","data-testid"]))],64)}),128))]),_:2},1024)]),default:s(()=>[c(),r(k,null,{default:s(({Component:e})=>[(a(),o(T(e),{mesh:i.mesh},null,8,["mesh"]))]),_:1})]),_:2},1024)])]),_:1})}}});export{H as default};
