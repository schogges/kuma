import{d as k,g as B,y as S,o as t,i as p,w as f,S as q,n as l,k as n,aa as F,aI as T,l as o,F as y,p as u,H as s,I as V,m as v,aL as h}from"./index-28451437.js";const C=["data-testid"],I={key:1},D=k({__name:"DeleteResourceModal",props:{actionButtonText:{type:String,required:!1,default:"Yes, delete"},confirmationText:{type:String,required:!1,default:""},deleteFunction:{type:Function,required:!0},isVisible:{type:Boolean,required:!0},title:{type:String,required:!1,default:"Delete"}},emits:["cancel","delete"],setup(_,{emit:x}){const{t:c}=B(),a=_,d=x,e=S(null);async function b(){e.value=null;try{await a.deleteFunction(),d("delete")}catch(r){r instanceof Error?e.value=r:console.error(r)}}return(r,m)=>(t(),p(n(h),{"action-button-text":a.actionButtonText,"confirmation-text":a.confirmationText,"is-visible":a.isVisible,title:a.title,type:"danger",onCanceled:m[0]||(m[0]=i=>d("cancel")),onProceed:b},{"body-content":f(()=>[q(r.$slots,"body-content"),l(),e.value!==null?(t(),p(n(F),{key:0,class:"mt-4",appearance:"danger","is-dismissible":""},{alertMessage:f(()=>[e.value instanceof n(T)?(t(),o(y,{key:0},[u("p",null,s(n(c)("common.error_state.api_error",{status:e.value.status,title:e.value.detail})),1),l(),e.value.invalidParameters.length>0?(t(),o("ul",{key:0,"data-testid":`error-${e.value.status}`},[(t(!0),o(y,null,V(e.value.invalidParameters,(i,g)=>(t(),o("li",{key:g},[u("b",null,[u("code",null,s(i.field),1)]),l(": "+s(i.reason),1)]))),128))],8,C)):v("",!0)],64)):(t(),o("p",I,s(n(c)("common.error_state.default_error")),1))]),_:1})):v("",!0)]),_:3},8,["action-button-text","confirmation-text","is-visible","title"]))}});export{D as _};