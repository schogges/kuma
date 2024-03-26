import{aa as Y,ab as te,d as ne,ac as re,C as ie,o as Z,c as W,r as K,q as se,f as oe,e as le,X as ue,w as de,p as ce,ad as ge,_ as pe}from"./index-CasyeFB_.js";var V={exports:{}};(function(m){var E=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(u){var g=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,b=0,c={},s={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof p?new p(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++b}),a.__id},clone:function a(e,t){t=t||{};var r,i;switch(s.util.type(e)){case"Object":if(i=s.util.objId(e),t[i])return t[i];r={},t[i]=r;for(var l in e)e.hasOwnProperty(l)&&(r[l]=a(e[l],t));return r;case"Array":return i=s.util.objId(e),t[i]?t[i]:(r=[],t[i]=r,e.forEach(function(d,o){r[o]=a(d,t)}),r);default:return e}},getLanguage:function(a){for(;a;){var e=g.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(g,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var r="no-"+e;a;){var i=a.classList;if(i.contains(e))return!0;if(i.contains(r))return!1;a=a.parentElement}return!!t}},languages:{plain:c,plaintext:c,text:c,txt:c,extend:function(a,e){var t=s.util.clone(s.languages[a]);for(var r in e)t[r]=e[r];return t},insertBefore:function(a,e,t,r){r=r||s.languages;var i=r[a],l={};for(var d in i)if(i.hasOwnProperty(d)){if(d==e)for(var o in t)t.hasOwnProperty(o)&&(l[o]=t[o]);t.hasOwnProperty(d)||(l[d]=i[d])}var h=r[a];return r[a]=l,s.languages.DFS(s.languages,function(y,F){F===h&&y!=a&&(this[y]=l)}),l},DFS:function a(e,t,r,i){i=i||{};var l=s.util.objId;for(var d in e)if(e.hasOwnProperty(d)){t.call(e,d,e[d],r||d);var o=e[d],h=s.util.type(o);h==="Object"&&!i[l(o)]?(i[l(o)]=!0,a(o,t,null,i)):h==="Array"&&!i[l(o)]&&(i[l(o)]=!0,a(o,t,d,i))}}},plugins:{},highlightAll:function(a,e){s.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var r={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),s.hooks.run("before-all-elements-highlight",r);for(var i=0,l;l=r.elements[i++];)s.highlightElement(l,e===!0,r.callback)},highlightElement:function(a,e,t){var r=s.util.getLanguage(a),i=s.languages[r];s.util.setLanguage(a,r);var l=a.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(l,r);var d=a.textContent,o={element:a,language:r,grammar:i,code:d};function h(F){o.highlightedCode=F,s.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,s.hooks.run("after-highlight",o),s.hooks.run("complete",o),t&&t.call(o.element)}if(s.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){s.hooks.run("complete",o),t&&t.call(o.element);return}if(s.hooks.run("before-highlight",o),!o.grammar){h(s.util.encode(o.code));return}if(e&&u.Worker){var y=new Worker(s.filename);y.onmessage=function(F){h(F.data)},y.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else h(s.highlight(o.code,o.grammar,o.language))},highlight:function(a,e,t){var r={code:a,grammar:e,language:t};if(s.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=s.tokenize(r.code,r.grammar),s.hooks.run("after-tokenize",r),p.stringify(s.util.encode(r.tokens),r.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var r in t)e[r]=t[r];delete e.rest}var i=new O;return I(i,i.head,a),T(a,i,e,i.head,0),C(i)},hooks:{all:{},add:function(a,e){var t=s.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=s.hooks.all[a];if(!(!t||!t.length))for(var r=0,i;i=t[r++];)i(e)}},Token:p};u.Prism=s;function p(a,e,t,r){this.type=a,this.content=e,this.alias=t,this.length=(r||"").length|0}p.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(h){r+=a(h,t)}),r}var i={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),s.hooks.run("wrap",i);var d="";for(var o in i.attributes)d+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+d+">"+i.content+"</"+i.tag+">"};function w(a,e,t,r){a.lastIndex=e;var i=a.exec(t);if(i&&r&&i[1]){var l=i[1].length;i.index+=l,i[0]=i[0].slice(l)}return i}function T(a,e,t,r,i,l){for(var d in t)if(!(!t.hasOwnProperty(d)||!t[d])){var o=t[d];o=Array.isArray(o)?o:[o];for(var h=0;h<o.length;++h){if(l&&l.cause==d+","+h)return;var y=o[h],F=y.inside,z=!!y.lookbehind,q=!!y.greedy,J=y.alias;if(q&&!y.pattern.global){var Q=y.pattern.toString().match(/[imsuy]*$/)[0];y.pattern=RegExp(y.pattern.source,Q+"g")}for(var j=y.pattern||y,A=r.next,k=i;A!==e.tail&&!(l&&k>=l.reach);k+=A.value.length,A=A.next){var $=A.value;if(e.length>a.length)return;if(!($ instanceof p)){var P=1,x;if(q){if(x=w(j,k,a,z),!x||x.index>=a.length)break;var D=x.index,ee=x.index+x[0].length,_=k;for(_+=A.value.length;D>=_;)A=A.next,_+=A.value.length;if(_-=A.value.length,k=_,A.value instanceof p)continue;for(var R=A;R!==e.tail&&(_<ee||typeof R.value=="string");R=R.next)P++,_+=R.value.length;P--,$=a.slice(k,_),x.index-=k}else if(x=w(j,0,$,z),!x)continue;var D=x.index,L=x[0],H=$.slice(0,D),X=$.slice(D+L.length),G=k+$.length;l&&G>l.reach&&(l.reach=G);var N=A.prev;H&&(N=I(e,N,H),k+=H.length),M(e,N,P);var ae=new p(d,F?s.tokenize(L,F):L,J,L);if(A=I(e,N,ae),X&&I(e,A,X),P>1){var B={cause:d+","+h,reach:G};T(a,e,t,A.prev,k,B),l&&B.reach>l.reach&&(l.reach=B.reach)}}}}}}function O(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function I(a,e,t){var r=e.next,i={value:t,prev:e,next:r};return e.next=i,r.prev=i,a.length++,i}function M(a,e,t){for(var r=e.next,i=0;i<t&&r!==a.tail;i++)r=r.next;e.next=r,r.prev=e,a.length-=i}function C(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!u.document)return u.addEventListener&&(s.disableWorkerMessageHandler||u.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,r=e.code,i=e.immediateClose;u.postMessage(s.highlight(r,s.languages[t],t)),i&&u.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function f(){s.manual||s.highlightAll()}if(!s.manual){var S=document.readyState;S==="loading"||S==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return s}(E);m.exports&&(m.exports=n),typeof Y<"u"&&(Y.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(u){u.type==="entity"&&(u.attributes.title=u.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(g,b){var c={};c["language-"+b]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[b]},c.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:c}};s["language-"+b]={pattern:/[\s\S]+/,inside:n.languages[b]};var p={};p[g]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return g}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(u,g){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+u+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[g,"language-"+g],inside:n.languages[g]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(u){var g=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;u.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+g.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+g.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+g.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+g.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:g,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},u.languages.css.atrule.inside.rest=u.languages.css;var b=u.languages.markup;b&&(b.tag.addInlined("style","css"),b.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var u="Loading…",g=function(v,f){return"✖ Error "+v+" while fetching file: "+f},b="✖ Error: File does not exist or is empty",c={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",p="loading",w="loaded",T="failed",O="pre[data-src]:not(["+s+'="'+w+'"]):not(['+s+'="'+p+'"])';function I(v,f,S){var a=new XMLHttpRequest;a.open("GET",v,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?f(a.responseText):a.status>=400?S(g(a.status,a.statusText)):S(b))},a.send(null)}function M(v){var f=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(f){var S=Number(f[1]),a=f[2],e=f[3];return a?e?[S,Number(e)]:[S,void 0]:[S,S]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+O}),n.hooks.add("before-sanity-check",function(v){var f=v.element;if(f.matches(O)){v.code="",f.setAttribute(s,p);var S=f.appendChild(document.createElement("CODE"));S.textContent=u;var a=f.getAttribute("data-src"),e=v.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=c[t]||t}n.util.setLanguage(S,e),n.util.setLanguage(f,e);var r=n.plugins.autoloader;r&&r.loadLanguages(e),I(a,function(i){f.setAttribute(s,w);var l=M(f.getAttribute("data-range"));if(l){var d=i.split(/\r\n?|\n/g),o=l[0],h=l[1]==null?d.length:l[1];o<0&&(o+=d.length),o=Math.max(0,Math.min(o-1,d.length)),h<0&&(h+=d.length),h=Math.max(0,Math.min(h,d.length)),i=d.slice(o,h).join(`
`),f.hasAttribute("data-start")||f.setAttribute("data-start",String(o+1))}S.textContent=i,n.highlightElement(S)},function(i){f.setAttribute(s,T),S.textContent=i})}}),n.plugins.fileHighlight={highlight:function(f){for(var S=(f||document).querySelectorAll(O),a=0,e;e=S[a++];)n.highlightElement(e)}};var C=!1;n.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(V);var fe=V.exports;const U=te(fe);(function(m){var E="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},u={bash:n,environment:{pattern:RegExp("\\$"+E),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+E),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};m.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+E),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:u},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:u},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:u.entity}}],environment:{pattern:RegExp("\\$?"+E),alias:"constant"},variable:u.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=m.languages.bash;for(var g=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],b=u.variable[1].inside,c=0;c<g.length;c++)b[g[c]]=m.languages.bash[g[c]];m.languages.sh=m.languages.bash,m.languages.shell=m.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;(function(m){var E=/[*&][^\s[\]{},]+/,n=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,u="(?:"+n.source+"(?:[ 	]+"+E.source+")?|"+E.source+"(?:[ 	]+"+n.source+")?)",g="(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ 	]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g,function(){return"[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"}),b=`"(?:[^"\\\\\r
]|\\\\.)*"|'(?:[^'\\\\\r
]|\\\\.)*'`;function c(s,p){p=(p||"").replace(/m/g,"")+"m";var w=`([:\\-,[{]\\s*(?:\\s<<prop>>[ 	]+)?)(?:<<value>>)(?=[ 	]*(?:$|,|\\]|\\}|(?:[\r
]\\s*)?#))`.replace(/<<prop>>/g,function(){return u}).replace(/<<value>>/g,function(){return s});return RegExp(w,p)}m.languages.yaml={scalar:{pattern:RegExp(`([\\-:]\\s*(?:\\s<<prop>>[ 	]+)?[|>])[ 	]*(?:((?:\r?
|\r)[ 	]+)\\S[^\r
]*(?:\\2[^\r
]+)*)`.replace(/<<prop>>/g,function(){return u})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(`((?:^|[:\\-,[{\r
?])[ 	]*(?:<<prop>>[ 	]+)?)<<key>>(?=\\s*:\\s)`.replace(/<<prop>>/g,function(){return u}).replace(/<<key>>/g,function(){return"(?:"+g+"|"+b+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:c("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ 	]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ 	]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:c("false|true","i"),lookbehind:!0,alias:"important"},null:{pattern:c("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:c(b),lookbehind:!0,greedy:!0},number:{pattern:c("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:n,important:E,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},m.languages.yml=m.languages.yaml})(Prism);U.manual=!0;function he(m,E,n,u){U.languages[u]||console.warn(`Prism: the language “${u}” isn’t enabled.`),m.classList.contains(`language-${u}`)||m.classList.add(`language-${u}`),E.innerHTML=n,U.highlightElement(E)}const me={class:"code-block"},be={key:0,class:"toolbar"},ve=ne({__name:"CodeBlock",props:{id:{default:()=>re("code-block")},code:{},language:{},isSearchable:{type:Boolean,default:!1},showCopyButton:{type:Boolean,default:!0},codeMaxHeight:{default:void 0},query:{default:""},isFilterMode:{type:Boolean,default:!1},isRegExpMode:{type:Boolean,default:!1}},emits:["query-change","filter-mode-change","reg-exp-mode-change"],setup(m,{emit:E}){const n=m,u=E,g=ie(!1);async function b({preElement:c,codeElement:s,language:p,code:w}){g.value=!0;const T=w.replaceAll(/</g,"&lt;").replaceAll(/>/g,"&gt;");he(c,s,T,p),g.value=!1}return(c,s)=>(Z(),W("div",me,[c.$slots["primary-actions"]?(Z(),W("div",be,[K(c.$slots,"primary-actions",{},void 0,!0)])):se("",!0),oe(),le(ce(ge),{id:c.id,class:"code","max-height":n.codeMaxHeight,code:n.code,language:c.language,"initial-filter-mode":n.isFilterMode,"initial-reg-exp-mode":n.isRegExpMode,"is-processing":g.value,"is-searchable":c.isSearchable,"show-copy-button":c.showCopyButton,query:n.query,theme:"dark",onCodeBlockRender:b,onQueryChange:s[0]||(s[0]=p=>u("query-change",p)),onFilterModeChange:s[1]||(s[1]=p=>u("filter-mode-change",p)),onRegExpModeChange:s[2]||(s[2]=p=>u("reg-exp-mode-change",p))},ue({_:2},[c.$slots["secondary-actions"]?{name:"secondary-actions",fn:de(()=>[K(c.$slots,"secondary-actions",{},void 0,!0)]),key:"0"}:void 0]),1032,["id","max-height","code","language","initial-filter-mode","initial-reg-exp-mode","is-processing","is-searchable","show-copy-button","query"])]))}}),ye=pe(ve,[["__scopeId","data-v-33448782"]]);export{ye as C};
