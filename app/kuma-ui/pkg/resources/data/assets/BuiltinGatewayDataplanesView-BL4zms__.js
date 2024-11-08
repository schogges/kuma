import{d as $,e as l,o as i,m as d,w as s,a as n,k as y,b as o,A as E,t as c,c as p,H as _,S as I,p as u,E as L,q as N}from"./index-BWlxH9e6.js";import{F as R}from"./FilterBar-vnHVz75G.js";import{S as X}from"./SummaryView-laRzuabX.js";const q={class:"stack"},P={key:0},T={key:1},F=$({__name:"BuiltinGatewayDataplanesView",setup(G){return(K,j)=>{const g=l("XAction"),z=l("XIcon"),v=l("XActionGroup"),w=l("RouterView"),C=l("DataCollection"),b=l("DataLoader"),V=l("KCard"),x=l("DataSource"),S=l("AppView"),A=l("RouteView");return i(),d(A,{name:"builtin-gateway-dataplanes-view",params:{mesh:"",gateway:"",listener:"",page:1,size:50,s:"",dataPlane:""}},{default:s(({can:k,route:a,t:m,me:r})=>[n(S,null,{default:s(()=>[n(x,{src:`/meshes/${a.params.mesh}/mesh-gateways/${a.params.gateway}`},{default:s(({data:f,error:B})=>[y("div",q,[n(V,null,{default:s(()=>[y("search",null,[n(R,{class:"data-plane-proxy-filter",placeholder:"name:dataplane-name",query:a.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...k("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:t=>a.update({...Object.fromEntries(t.entries())})},null,8,["query","fields","onChange"])]),o(),n(b,{src:f===void 0?"":`/meshes/${a.params.mesh}/dataplanes/for/service-insight/${f.selectors[0].match["kuma.io/service"]}?page=${a.params.page}&size=${a.params.size}&search=${a.params.s}`,data:[f],errors:[B]},{loadable:s(({data:t})=>[n(C,{type:"data-planes",items:(t==null?void 0:t.items)??[void 0],total:t==null?void 0:t.total,page:a.params.page,"page-size":a.params.size,onChange:a.update},{default:s(()=>[n(E,{class:"data-plane-collection","data-testid":"data-plane-collection",headers:[{...r.get("headers.name"),label:"Name",key:"name"},{...r.get("headers.namespace"),label:"Namespace",key:"namespace"},...k("use zones")?[{...r.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...r.get("headers.certificate"),label:"Certificate Info",key:"certificate"},{...r.get("headers.status"),label:"Status",key:"status"},{...r.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{...r.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:t==null?void 0:t.items,"is-selected-row":e=>e.name===a.params.dataPlane,onResize:r.set},{namespace:s(({row:e})=>[o(c(e.namespace),1)]),name:s(({row:e})=>[n(g,{"data-action":"",class:"name-link",title:e.name,to:{name:"builtin-gateway-data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.id},query:{page:a.params.page,size:a.params.size,s:a.params.s}}},{default:s(()=>[o(c(e.name),1)]),_:2},1032,["title","to"])]),zone:s(({row:e})=>[e.zone?(i(),d(g,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:s(()=>[o(c(e.zone),1)]),_:2},1032,["to"])):(i(),p(_,{key:1},[o(c(m("common.collection.none")),1)],64))]),certificate:s(({row:e})=>{var h;return[(h=e.dataplaneInsight.mTLS)!=null&&h.certificateExpirationTime?(i(),p(_,{key:0},[o(c(m("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(i(),p(_,{key:1},[o(c(m("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:s(({row:e})=>[n(I,{status:e.status},null,8,["status"])]),warnings:s(({row:e})=>[e.isCertExpired||e.warnings.length>0?(i(),d(z,{key:0,class:"mr-1",name:"warning"},{default:s(()=>[y("ul",null,[e.warnings.length>0?(i(),p("li",P,c(m("data-planes.components.data-plane-list.version_mismatch")),1)):u("",!0),o(),e.isCertExpired?(i(),p("li",T,c(m("data-planes.components.data-plane-list.cert_expired")),1)):u("",!0)])]),_:2},1024)):(i(),p(_,{key:1},[o(c(m("common.collection.none")),1)],64))]),actions:s(({row:e})=>[n(v,null,{default:s(()=>[n(g,{to:{name:"data-plane-detail-view",params:{dataPlane:e.id}}},{default:s(()=>[o(c(m("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),o(),a.params.dataPlane?(i(),d(w,{key:0},{default:s(e=>[n(X,{onClose:h=>a.replace({name:a.name,params:{mesh:a.params.mesh},query:{page:a.params.page,size:a.params.size,s:a.params.s}})},{default:s(()=>[typeof t<"u"?(i(),d(L(e.Component),{key:0,items:t.items},null,8,["items"])):u("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):u("",!0)]),_:2},1032,["items","total","page","page-size","onChange"])]),_:2},1032,["src","data","errors"])]),_:2},1024)])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),Z=N(F,[["__scopeId","data-v-07564e01"]]);export{Z as default};