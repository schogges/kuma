import{d as v,L as D,f,o as s,j as w,l as r,D as n,i as a,h as e,H as x,q as g,ac as y,g as l,w as _,C as $,A as T,p as h,E as V,s as B,m as M,_ as I}from"./index-cf0727dc.js";const R={class:"date-status"},S=v({__name:"ResourceDateStatus",props:{creationTime:{},modificationTime:{}},setup(u){const i=u,{t:o,formatIsoDate:d}=D(),p=f(()=>d(i.creationTime)),c=f(()=>d(i.modificationTime));return(t,m)=>(s(),w("span",R,[r(n(a(o)("common.detail.created"))+": "+n(p.value)+" ",1),e(a(x),{icon:"arrowRight"}),r(" "+n(a(o)("common.detail.modified"))+": "+n(c.value),1)]))}});const C=g(S,[["__scopeId","data-v-5d50f5d4"]]),N={key:2,class:"stack","data-testid":"detail-view-details"},A={class:"date-status-wrapper"},E=v({__name:"MeshDetailView",setup(u){const{t:i}=D(),o=y();return(d,p)=>(s(),l(I,{name:"mesh-overview-view"},{default:_(({route:c})=>[e($,{title:a(i)("meshes.routes.overview.title")},null,8,["title"]),r(),e(T,null,{default:_(()=>[e(h,{src:`/meshes/${c.params.mesh}`},{default:_(({data:t,error:m})=>[e(h,{src:`/mesh-insights/${c.params.mesh}`},{default:_(({data:k})=>[m?(s(),l(V,{key:0,error:m},null,8,["error"])):t===void 0?(s(),l(B,{key:1})):(s(),w("div",N,[e(a(o),{mesh:t,"mesh-insight":k},null,8,["mesh","mesh-insight"]),r(),M("div",A,[e(C,{"creation-time":t.creationTime,"modification-time":t.modificationTime},null,8,["creation-time","modification-time"])])]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:1}))}});const q=g(E,[["__scopeId","data-v-5343c620"]]);export{q as default};
