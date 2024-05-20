import{d as b,a as l,o as n,b as m,w as a,e as t,$ as z,T as h,f as c,t as p,c as x,F as C,p as y,O as V,K as v,q as B,_ as S}from"./index-Dlb3STpa.js";import{A as L}from"./AppCollection-DFkcV_Z2.js";const N=b({__name:"BuiltinGatewayListView",setup(A){return(D,I)=>{const r=l("RouterLink"),g=l("KCard"),k=l("AppView"),_=l("DataSource"),w=l("RouteView");return n(),m(_,{src:"/me"},{default:a(({data:d})=>[d?(n(),m(w,{key:0,name:"builtin-gateway-list-view",params:{page:1,size:d.pageSize,mesh:"",gateway:""}},{default:a(({route:s,t:i,can:f})=>[t(_,{src:`/meshes/${s.params.mesh}/mesh-gateways?page=${s.params.page}&size=${s.params.size}`},{default:a(({data:o,error:u})=>[t(k,null,{default:a(()=>[t(g,null,{default:a(()=>[u!==void 0?(n(),m(z,{key:0,error:u},null,8,["error"])):(n(),m(L,{key:1,class:"builtin-gateway-collection","data-testid":"builtin-gateway-collection","empty-state-message":i("common.emptyState.message",{type:"Built-in Gateways"}),"empty-state-cta-to":i("builtin-gateways.href.docs"),"empty-state-cta-text":i("common.documentation"),headers:[{label:"Name",key:"name"},...f("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Details",key:"details",hideLabel:!0}],"page-number":s.params.page,"page-size":s.params.size,total:o==null?void 0:o.total,items:o==null?void 0:o.items,error:u,onChange:s.update},{name:a(({row:e})=>[t(h,{text:e.name},{default:a(()=>[t(r,{to:{name:"builtin-gateway-detail-view",params:{mesh:e.mesh,gateway:e.name}}},{default:a(()=>[c(p(e.name),1)]),_:2},1032,["to"])]),_:2},1032,["text"])]),zone:a(({row:e})=>[e.labels&&e.labels["kuma.io/origin"]==="zone"&&e.labels["kuma.io/zone"]?(n(),m(r,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.labels["kuma.io/zone"]}}},{default:a(()=>[c(p(e.labels["kuma.io/zone"]),1)]),_:2},1032,["to"])):(n(),x(C,{key:1},[c(p(i("common.detail.none")),1)],64))]),details:a(({row:e})=>[t(r,{class:"details-link","data-testid":"details-link",to:{name:"builtin-gateway-detail-view",params:{mesh:e.mesh,gateway:e.name}}},{default:a(()=>[c(p(i("common.collection.details_link"))+" ",1),t(y(V),{decorative:"",size:y(v)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["empty-state-message","empty-state-cta-to","empty-state-cta-text","headers","page-number","page-size","total","items","error","onChange"]))]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["params"])):B("",!0)]),_:1})}}}),$=S(N,[["__scopeId","data-v-52ef9cc0"]]);export{$ as default};
