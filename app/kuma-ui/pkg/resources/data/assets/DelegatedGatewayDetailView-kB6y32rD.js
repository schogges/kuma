import{d as S,e as c,o as l,m as p,w as a,a as o,k as u,R as z,b as n,t as i,S as v,a1 as $,c as d,H as g,U as R,p as h,A as E,E as B,q as I}from"./index-COT-_p62.js";import{F as L}from"./FilterBar-Dq3XUXeG.js";import{S as N}from"./SummaryView-BaqCyaq5.js";const X={class:"stack"},q={class:"columns"},T={key:0},G={key:1},F=S({__name:"DelegatedGatewayDetailView",setup(K){return(j,H)=>{const f=c("KCard"),k=c("DataLoader"),y=c("XAction"),C=c("XIcon"),b=c("XActionGroup"),x=c("RouterView"),V=c("DataCollection"),A=c("AppView"),P=c("RouteView");return l(),p(P,{name:"delegated-gateway-detail-view",params:{mesh:"",service:"",page:1,size:50,s:"",dataPlane:""}},{default:a(({can:w,route:s,t:r,me:m})=>[o(A,null,{default:a(()=>[u("div",X,[o(k,{src:`/meshes/${s.params.mesh}/service-insights/${s.params.service}`},{default:a(({data:t})=>[t?(l(),p(f,{key:0},{default:a(()=>{var e,_;return[u("div",q,[o(z,null,{title:a(()=>[n(i(r("http.api.property.status")),1)]),body:a(()=>[o(v,{status:t.status},null,8,["status"])]),_:2},1024),n(),o(z,null,{title:a(()=>[n(i(r("http.api.property.address")),1)]),body:a(()=>[t.addressPort?(l(),p($,{key:0,text:t.addressPort},null,8,["text"])):(l(),d(g,{key:1},[n(i(r("common.detail.none")),1)],64))]),_:2},1024),n(),o(R,{online:((e=t.dataplanes)==null?void 0:e.online)??0,total:((_=t.dataplanes)==null?void 0:_.total)??0},{title:a(()=>[n(i(r("http.api.property.dataPlaneProxies")),1)]),_:2},1032,["online","total"])])]}),_:2},1024)):h("",!0)]),_:2},1032,["src"]),n(),u("div",null,[u("h3",null,i(r("delegated-gateways.detail.data_plane_proxies")),1),n(),o(f,{class:"mt-4"},{default:a(()=>[u("search",null,[o(L,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:s.params.s,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...w("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onChange:t=>s.update({...Object.fromEntries(t.entries())})},null,8,["query","fields","onChange"])]),n(),o(k,{src:`/meshes/${s.params.mesh}/dataplanes/for/service-insight/${s.params.service}?page=${s.params.page}&size=${s.params.size}&search=${s.params.s}`},{loadable:a(({data:t})=>[o(V,{type:"data-planes",items:(t==null?void 0:t.items)??[void 0],page:s.params.page,"page-size":s.params.size,total:t==null?void 0:t.total,onChange:s.update},{default:a(()=>[o(E,{class:"data-plane-collection","data-testid":"data-plane-collection",headers:[{...m.get("headers.name"),label:"Name",key:"name"},{...m.get("headers.namespace"),label:"Namespace",key:"namespace"},...w("use zones")?[{...m.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...m.get("headers.certificate"),label:"Certificate Info",key:"certificate"},{...m.get("headers.status"),label:"Status",key:"status"},{...m.get("headers.warnings"),label:"Warnings",key:"warnings",hideLabel:!0},{...m.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:t==null?void 0:t.items,"is-selected-row":e=>e.name===s.params.dataPlane,onResize:m.set},{name:a(({row:e})=>[o(y,{"data-action":"",class:"name-link",to:{name:"delegated-gateway-data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.id},query:{page:s.params.page,size:s.params.size,s:s.params.s}}},{default:a(()=>[n(i(e.name),1)]),_:2},1032,["to"])]),namespace:a(({row:e})=>[n(i(e.namespace),1)]),zone:a(({row:e})=>[e.zone?(l(),p(y,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:a(()=>[n(i(e.zone),1)]),_:2},1032,["to"])):(l(),d(g,{key:1},[n(i(r("common.collection.none")),1)],64))]),certificate:a(({row:e})=>{var _;return[(_=e.dataplaneInsight.mTLS)!=null&&_.certificateExpirationTime?(l(),d(g,{key:0},[n(i(r("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(l(),d(g,{key:1},[n(i(r("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:a(({row:e})=>[o(v,{status:e.status},null,8,["status"])]),warnings:a(({row:e})=>[e.isCertExpired||e.warnings.length>0?(l(),p(C,{key:0,class:"mr-1",name:"warning"},{default:a(()=>[u("ul",null,[e.warnings.length>0?(l(),d("li",T,i(r("data-planes.components.data-plane-list.version_mismatch")),1)):h("",!0),n(),e.isCertExpired?(l(),d("li",G,i(r("data-planes.components.data-plane-list.cert_expired")),1)):h("",!0)])]),_:2},1024)):(l(),d(g,{key:1},[n(i(r("common.collection.none")),1)],64))]),actions:a(({row:e})=>[o(b,null,{default:a(()=>[o(y,{to:{name:"data-plane-detail-view",params:{dataPlane:e.id}}},{default:a(()=>[n(i(r("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),n(),s.params.dataPlane?(l(),p(x,{key:0},{default:a(e=>[o(N,{onClose:_=>s.replace({name:s.name,params:{mesh:s.params.mesh},query:{page:s.params.page,size:s.params.size,s:s.params.s}})},{default:a(()=>[typeof t<"u"?(l(),p(B(e.Component),{key:0,items:t.items},null,8,["items"])):h("",!0)]),_:2},1032,["onClose"])]),_:2},1024)):h("",!0)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)])])]),_:2},1024)]),_:1})}}}),Z=I(F,[["__scopeId","data-v-b42bf862"]]);export{Z as default};
