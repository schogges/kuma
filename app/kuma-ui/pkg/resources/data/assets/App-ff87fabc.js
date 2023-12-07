import{_ as R,o as _,c as S,r as f,d as v,a as l,b as d,w as a,e as r,f as e,n as E,h as z,g as M,i as O,j as T,u as B,k as U,l as D,m as I,p as s,t as h,q as o,P,s as H,v as A,x as Y,y as Z,H as x,z as G,A as q}from"./index-ddb38e98.js";import{K as C}from"./index-52545d1d.js";const F=""+new URL("product-logo-7a2ca341.png",import.meta.url).href,j={},J={class:"app-navigator"};function Q(i,n){return _(),S("li",J,[f(i.$slots,"default")])}const L=R(j,[["render",Q]]),W=v({__name:"ControlPlaneNavigator",setup(i){return(n,u)=>{const c=l("RouterLink");return _(),d(L,{"data-testid":"control-planes-navigator"},{default:a(()=>[r(c,{class:E({"is-active":[n.$route.name].concat(n.$route.matched.map(t=>t.name)).some(t=>t==="home")}),to:{name:"home"}},{default:a(()=>[e(`
      Home
    `)]),_:1},8,["class"])]),_:1})}}}),X=v({name:"github-button",props:{href:String,ariaLabel:String,title:String,dataIcon:String,dataColorScheme:String,dataSize:String,dataShowCount:String,dataText:String},render:function(){const i={ref:"_"};for(const n in this.$props)i[z(n)]=this.$props[n];return M("span",[O(this.$slots,"default")?M("a",i,this.$slots.default()):M("a",i)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeUnmount:function(){this.reset()},methods:{paint:function(){const i=this.$el.appendChild(document.createElement("span")),n=this;T(()=>import("./buttons.esm-48f94bc9.js"),[],import.meta.url).then(function(u){u.render(i.appendChild(n.$refs._),function(c){try{i.parentNode.replaceChild(c,i)}catch{}})})},reset:function(){this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}}),ee={class:"upgrade-check"},te={class:"alert-content"},ne=v({__name:"UpgradeCheck",setup(i){const n=B(),u=U(),{t:c}=D(),t=I(""),k=I(!1);g(u("KUMA_VERSION"));const w=(m,p)=>{const y=m.split("."),$=p.split(".");for(let b=0;b<3;b++){const N=Number(y[b]),K=Number($[b]);if(N>K)return 1;if(K>N)return-1}return 0};async function g(m){if(m.match("^[0-9]+.[0-9]+.[0-9]+$")){try{t.value=await n.getLatestVersion()}catch(p){console.error(p);return}if(t.value!==""){const p=w(t.value,m);k.value=p===1}else{const y=new Date,$=new Date("2020-06-03 12:00:00"),b=new Date($.getFullYear(),$.getMonth()+3,$.getDate());k.value=y.getTime()>=b.getTime()}}}return(m,p)=>(_(),S("div",ee,[k.value?(_(),d(o(H),{key:0,"data-testid":"upgrade-check",class:"upgrade-check-alert",appearance:"info",size:"small"},{alertMessage:a(()=>[s("div",te,[s("div",null,h(o(c)("common.product.name"))+` update available
          `,1),e(),s("div",null,[r(o(P),{appearance:"primary",to:o(u)("KUMA_INSTALL_URL")},{default:a(()=>[e(`
              Update
            `)]),_:1},8,["to"])])])]),_:1})):A("",!0)]))}});const ae=R(ne,[["__scopeId","data-v-c1f9a7be"]]),V=i=>(G("data-v-711525d7"),i=i(),q(),i),oe={class:"application-shell"},se={role:"banner"},re={class:"horizontal-list"},ce={class:"upgrade-check-wrapper"},ie={class:"horizontal-list"},le={class:"app-status app-status--mobile"},_e={class:"app-status app-status--desktop"},pe=V(()=>s("span",{class:"visually-hidden"},"Help",-1)),ue=["href"],de=["href"],me=V(()=>s("span",{class:"visually-hidden"},"Diagnostics",-1)),he={class:"app-content-container"},fe={key:0,"aria-label":"Main",class:"app-sidebar"},ve={class:"app-main-content"},ge={class:"app-notifications"},$e=["innerHTML"],ke=v({__name:"ApplicationShell",setup(i){const n=U(),u=Y(),{t:c}=D();return(t,k)=>{const w=l("RouterLink"),g=l("KButton"),m=l("KPop"),p=l("KDropdownItem"),y=l("KDropdown"),$=l("KAlert");return _(),S("div",oe,[s("header",se,[s("div",re,[f(t.$slots,"header",{},()=>[r(w,{to:{name:"home"}},{default:a(()=>[f(t.$slots,"home",{},void 0,!0)]),_:3}),e(),r(o(X),{class:"gh-star",href:"https://github.com/kumahq/kuma","aria-label":"Star kumahq/kuma on GitHub"},{default:a(()=>[e(`
            Star
          `)]),_:1}),e(),s("div",ce,[r(ae)])],!0)]),e(),s("div",ie,[f(t.$slots,"content-info",{},()=>[s("div",le,[r(m,{width:"280"},{content:a(()=>[s("p",null,[e(h(o(c)("common.product.name"))+" ",1),s("b",null,h(o(n)("KUMA_VERSION")),1),e(" on "),s("b",null,h(o(c)(`common.product.environment.${o(n)("KUMA_ENVIRONMENT")}`)),1),e(" ("+h(o(c)(`common.product.mode.${o(n)("KUMA_MODE")}`))+`)
                `,1)])]),default:a(()=>[r(g,{appearance:"tertiary"},{default:a(()=>[e(`
                Info
              `)]),_:1}),e()]),_:1})]),e(),s("p",_e,[e(h(o(c)("common.product.name"))+" ",1),s("b",null,h(o(n)("KUMA_VERSION")),1),e(" on "),s("b",null,h(o(c)(`common.product.environment.${o(n)("KUMA_ENVIRONMENT")}`)),1),e(" ("+h(o(c)(`common.product.mode.${o(n)("KUMA_MODE")}`))+`)
          `,1)]),e(),r(y,{"kpop-attributes":{placement:"bottomEnd"}},{items:a(()=>[r(p,null,{default:a(()=>[s("a",{href:o(c)("common.product.href.docs.index"),target:"_blank",rel:"noopener noreferrer"},`
                  Documentation
                `,8,ue)]),_:1}),e(),r(p,null,{default:a(()=>[s("a",{href:o(n)("KUMA_FEEDBACK_URL"),target:"_blank",rel:"noopener noreferrer"},`
                  Feedback
                `,8,de)]),_:1}),e(),r(p,{item:{to:{name:"onboarding-welcome-view"},label:"Onboarding"}})]),default:a(()=>[r(g,{appearance:"tertiary","icon-only":""},{default:a(()=>[r(o(Z),{size:o(C)},null,8,["size"]),e(),pe]),_:1}),e()]),_:1}),e(),r(g,{to:{name:"diagnostics"},appearance:"tertiary","icon-only":"","data-testid":"nav-item-diagnostics"},{default:a(()=>[r(o(x),{size:o(C),"hide-title":""},null,8,["size"]),e(),me]),_:1})],!0)])]),e(),s("div",he,[t.$slots.navigation?(_(),S("nav",fe,[s("ul",null,[f(t.$slots,"navigation",{},void 0,!0)])])):A("",!0),e(),s("div",ve,[s("div",ge,[f(t.$slots,"notifications",{},void 0,!0)]),e(),f(t.$slots,"notifications",{},()=>[o(u)("use state")?A("",!0):(_(),d($,{key:0,class:"mb-4",appearance:"warning"},{alertMessage:a(()=>[s("ul",null,[s("li",{"data-testid":"warning-GLOBAL_STORE_TYPE_MEMORY",innerHTML:o(c)("common.warnings.GLOBAL_STORE_TYPE_MEMORY")},null,8,$e),e()])]),_:1}))],!0),e(),f(t.$slots,"default",{},void 0,!0)])])])}}});const be=R(ke,[["__scopeId","data-v-711525d7"]]),we=v({__name:"MeshNavigator",setup(i){return(n,u)=>{const c=l("RouterLink");return _(),d(L,{"data-testid":"meshes-navigator"},{default:a(()=>[r(c,{class:E({"is-active":[n.$route.name].concat(n.$route.matched.map(t=>t.name)).some(t=>t==="mesh-index-view")}),to:{name:"mesh-list-view"}},{default:a(()=>[e(`
      Meshes
    `)]),_:1},8,["class"])]),_:1})}}}),ye=v({__name:"ZoneEgressNavigator",setup(i){return(n,u)=>{const c=l("RouterLink");return _(),d(L,{"data-testid":"zone-egresses-navigator"},{default:a(()=>[r(c,{class:E({"is-active":[n.$route.name].concat(n.$route.matched.map(t=>t.name)).some(t=>t==="zone-egress-list-view")}),to:{name:"zone-egress-list-view"}},{default:a(()=>[e(`
      Zone Egresses
    `)]),_:1},8,["class"])]),_:1})}}}),Se=v({__name:"ZoneNavigator",setup(i){return(n,u)=>{const c=l("RouterLink");return _(),d(L,{"data-testid":"zones-navigator"},{default:a(()=>[r(c,{class:E({"is-active":[n.$route.name].concat(n.$route.matched.map(t=>t.name)).some(t=>t==="zone-index-view")}),to:{name:"zone-cp-list-view"}},{default:a(()=>[e(`
      Zones
    `)]),_:1},8,["class"])]),_:1})}}}),Ae=["alt"],Re=v({__name:"App",setup(i){return(n,u)=>{const c=l("RouterView"),t=l("AppView"),k=l("RouteView"),w=l("DataSource");return _(),d(w,{src:"/control-plane/addresses"},{default:a(({data:g})=>[typeof g<"u"?(_(),d(k,{key:0,name:"app",attrs:{class:"kuma-ready"},"data-testid-root":"mesh-app"},{default:a(({t:m,can:p})=>[r(be,{class:"kuma-application"},{home:a(()=>[s("img",{class:"logo",src:F,alt:`${m("common.product.name")} Logo`,"data-testid":"logo"},null,8,Ae)]),navigation:a(()=>[r(W),e(),p("use zones")?(_(),d(Se,{key:0})):(_(),d(ye,{key:1})),e(),r(we)]),default:a(()=>[e(),e(),r(t,null,{default:a(()=>[r(c)]),_:1})]),_:2},1024)]),_:1})):A("",!0)]),_:1})}}});const Me=R(Re,[["__scopeId","data-v-f821200e"]]);export{Me as default};