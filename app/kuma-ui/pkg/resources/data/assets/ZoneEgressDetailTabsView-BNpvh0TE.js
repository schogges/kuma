import{d as x,e as t,o as i,m as p,w as e,a as o,c as D,$ as C,p as R,b as m,Q as T,J as E,t as $,E as k}from"./index-C_eW3RRu.js";const A={key:0},y=x({__name:"ZoneEgressDetailTabsView",setup(S){return(X,c)=>{const _=t("RouteTitle"),d=t("XAction"),u=t("XTabs"),z=t("RouterView"),b=t("DataLoader"),f=t("AppView"),w=t("DataSource"),g=t("RouteView");return i(),p(g,{name:"zone-egress-detail-tabs-view",params:{zone:"",zoneEgress:""}},{default:e(({route:s,can:V,t:n})=>[o(w,{src:`/zone-egress-overviews/${s.params.zoneEgress}`},{default:e(({data:a,error:v})=>[o(f,{docs:n("zone-ingresses.href.docs"),breadcrumbs:[...V("use zones")?[{to:{name:"zone-cp-list-view"},text:n("zone-cps.routes.item.breadcrumbs")},{to:{name:"zone-cp-detail-view",params:{zone:s.params.zone}},text:s.params.zone}]:[],{to:{name:"zone-egress-list-view",params:{zone:s.params.zone}},text:n("zone-egresses.routes.item.breadcrumbs")}]},{title:e(()=>[a?(i(),D("h1",A,[o(C,{text:a.name},{default:e(()=>[o(_,{title:n("zone-egresses.routes.item.title",{name:a.name})},null,8,["title"])]),_:2},1032,["text"])])):R("",!0)]),default:e(()=>[c[1]||(c[1]=m()),o(b,{data:[a],errors:[v]},{default:e(()=>{var l;return[o(u,{selected:(l=s.child())==null?void 0:l.name},T({_:2},[E(s.children,({name:r})=>({name:`${r}-tab`,fn:e(()=>[o(d,{to:{name:r}},{default:e(()=>[m($(n(`zone-egresses.routes.item.navigation.${r}`)),1)]),_:2},1032,["to"])])}))]),1032,["selected"]),c[0]||(c[0]=m()),o(z,null,{default:e(r=>[(i(),p(k(r.Component),{data:a},null,8,["data"]))]),_:2},1024)]}),_:2},1032,["data","errors"])]),_:2},1032,["docs","breadcrumbs"])]),_:2},1032,["src"])]),_:1})}}});export{y as default};