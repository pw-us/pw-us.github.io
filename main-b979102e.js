function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(t){let e;return a(t,t=>e=t)(),e}function l(t,e,n){t.$$.on_destroy.push(a(e,n))}function u(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,e,n,o,r,i,s){const a=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,i);if(a){const r=f(e,n,o,s);t.p(r,a)}}function p(t,e,n=e){return t.set(n),e}function h(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function b(){return w(" ")}function _(){return w("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t){return function(e){return e.preventDefault(),t.call(this,e)}}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function O(t,e){t.value=null==e?"":e}class j{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=$(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)m(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(g)}}let E;function L(t){E=t}function S(){if(!E)throw new Error("Function called outside component initialization");return E}function I(t){S().$$.on_mount.push(t)}function D(t,e){S().$$.context.set(t,e)}function M(t){return S().$$.context.get(t)}const R=[],A=[],N=[],F=[],T=Promise.resolve();let q=!1;function C(){q||(q=!0,T.then(U))}function B(t){N.push(t)}let H=!1;const K=new Set;function U(){if(!H){H=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];L(e),z(e.$$)}for(L(null),R.length=0;A.length;)A.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];K.has(e)||(K.add(e),e())}N.length=0}while(R.length);for(;F.length;)F.pop()();q=!1,H=!1,K.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const J=new Set;let W;function G(){W={r:0,c:[],p:W}}function Q(){W.r||r(W.c),W=W.p}function V(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Z(t,e,n,o){if(t&&t.o){if(J.has(t))return;J.add(t),W.c.push(()=>{J.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function X(t,e){t.d(1),e.delete(t.key)}function Y(t,e){Z(t,1,1,()=>{e.delete(t.key)})}function tt(t,e,n,o,r,i,s,a,c,l,u,f){let d=t.length,p=i.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=p;h--;){const t=f(r,i,h),a=n(t);let c=s.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,g[h]=c),a in m&&$.set(a,Math.abs(h-m[a]))}const w=new Set,b=new Set;function _(t){V(t,1),t.m(a,u),s.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=g[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,p--):y.has(r)?!s.has(o)||w.has(o)?_(e):b.has(r)?d--:$.get(o)>$.get(r)?(b.add(o),_(e)):(w.add(r),d--):(c(n,s),d--)}for(;d--;){const e=t[d];y.has(e.key)||c(e,s)}for(;p;)_(g[p-1]);return g}function et(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],a=e[i];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[i]=a}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function nt(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function rt(t,e,o){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=t.$$;s&&s.m(e,o),B(()=>{const e=a.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(B)}function it(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(e,n,i,s,a,c,l=[-1]){const u=E;L(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(R.push(t),C(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();n.intro&&V(e.$$.fragment),rt(e,n.target,n.anchor),U()}L(u)}class at{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=[];function lt(e,n=t){let o;const r=[];function i(t){if(s(e,t)&&(e=t,o)){const t=!ct.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),ct.push(n,e)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,a=t){const c=[s,a];return r.push(c),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function ut(e,n,o){const s=!Array.isArray(e),c=s?[e]:e,l=n.length<2;return{subscribe:lt(o,e=>{let o=!1;const u=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=n(s?u[0]:u,e);l?e(o):d=i(o)?o:t},h=c.map((t,e)=>a(t,t=>{u[e]=t,f&=~(1<<e),o&&p()},()=>{f|=1<<e}));return o=!0,p(),function(){r(h),d()}}).subscribe}}var ft={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce((t,[e,n])=>(t[e]=n,t),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()},urlTransform:{apply:t=>t,remove:t=>t},useHash:!1};const dt=RegExp(/\:([^/()]+)/g);function pt(t){if(navigator.userAgent.includes("jsdom"))return!1;ht(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(t.substring(1))){const e=document.querySelector(t);e&&e.scrollIntoView()}}}()}function ht(t){t&&t.scrollTo&&"scroll-lock"!==t.dataset.routify&&"lock"!==t.dataset["routify-scroll"]&&(t.style["scroll-behavior"]="auto",t.scrollTo({top:0,behavior:"auto"}),t.style["scroll-behavior"]="",ht(t.parentElement))}const mt=t=>{const e=[];let n;for(;n=dt.exec(t);)e.push(n[1]);return e};let gt=!1;function yt(){const t=function(){const t=window.location.search.match(/__routify_path=([^&]+)/),e=window.location.search.match(/__routify_prefetch=\d+/);window.routify=window.routify||{},window.routify.prefetched=!!e;return t&&t[1].replace(/[#?].+/,"")}();return t||(ft.useHash?window.location.hash.replace(/#/,""):window.location.pathname)}window.routify=window.routify||{};const $t=lt(null),wt=lt([]);wt.subscribe(t=>window.routify.routes=t);let bt=lt({component:{params:{}}});const _t=lt(null);function xt(t){t=ft.urlTransform.remove(t);const e=c(wt),n=e.find(e=>t===e.meta.name)||e.find(e=>t.match(e.regex));if(!n)throw new Error(`Route could not be found for "${t}".`);const o=t;if(ft.queryHandler&&(n.params=ft.queryHandler.parse(window.location.search)),n.paramKeys){const t=function(t){const e=[];return t.forEach(t=>{e[t.path.split("/").filter(Boolean).length-1]=t}),e}(n.layouts),e=o.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])})(n.path).forEach((o,r)=>{o&&(n.params[o]=e[r],t[r]?t[r].param={[o]:e[r]}:n.param={[o]:e[r]})})}return n.leftover=t.replace(new RegExp(n.regex),""),n}function vt(t,e,n){const o=t.slice();return o[1]=e[n],o}function Pt(t,e){let n,o;return{key:t,first:null,c(){n=$("iframe"),n.src!==(o=e[1].url)&&P(n,"src",o),P(n,"frameborder","0"),P(n,"title","routify prefetcher"),this.first=n},m(t,e){m(t,n,e)},p(t,e){1&e&&n.src!==(o=t[1].url)&&P(n,"src",o)},d(t){t&&g(n)}}}function kt(e){let n,o=[],r=new Map,i=e[0];const s=t=>t[1].options.prefetch;for(let t=0;t<i.length;t+=1){let n=vt(e,i,t),a=s(n);r.set(a,o[t]=Pt(a,n))}return{c(){n=$("div");for(let t=0;t<o.length;t+=1)o[t].c();var t,e,r;P(n,"id","__routify_iframes"),t="display",e="none",n.style.setProperty(t,e,r?"important":"")},m(t,e){m(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){const i=t[0];o=tt(o,e,s,1,t,i,r,n,X,Pt,null,vt)}},i:t,o:t,d(t){t&&g(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}const Ot=lt([]),jt=ut(Ot,t=>t.slice(0,2));function Et(t){const e=t.data?t.data.prefetchId:t;if(!e)return null;const n=c(Ot).find(t=>t&&t.options.prefetch==e);if(n){const{gracePeriod:t}=n.options,o=new Promise(e=>setTimeout(e,t)),r=new Promise(e=>{window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,t+1e3)});Promise.all([o,r]).then(()=>{Ot.update(t=>t.filter(t=>t.options.prefetch!=e))})}}function Lt(t,e,n){let o;return l(t,jt,t=>n(0,o=t)),[o]}jt.subscribe(t=>t.forEach(({options:t})=>{setTimeout(()=>Et(t.prefetch),t.timeout)})),addEventListener("message",Et,!1);class St extends at{constructor(t){super(),st(this,t,Lt,kt,s,{})}}function It(){return M("routify")||bt}const Dt={_hooks:[],subscribe:Rt},Mt={_hooks:[],subscribe:Rt};function Rt(t){const e=this._hooks,n=e.length;return t(t=>{e[n]=t}),()=>delete e[n]}const At={subscribe:t=>ut([It(),$t,wt],t=>function(t,e,n){return function(o,r,i){const{component:s}=t;let a=o&&o.nodeType&&o;a&&(o=o.getAttribute("href")),o=u(o);const c=n.find(t=>[t.shortPath||"/",t.path].includes(o));if(c&&"proximity"===c.meta.preload&&window.requestIdleCallback){const t=routify.appLoaded?0:1500;setTimeout(()=>{window.requestIdleCallback(()=>c.api.preload())},t)}i&&!1!==i.strict||(o=o.replace(/index$/,""));let l=f(o,r);return a?(a.href=l,{update(t){a.href=f(o,t)}}):ft.urlTransform.apply(l);function u(t){if(t)if(t.match(/^\.\.?\//)){let[,e,n]=t.match(/^([\.\/]+)(.*)/),o=s.path.replace(/\/$/,"");const r=e.match(/\.\.\//g)||[];s.isPage&&r.push(null),r.forEach(()=>o=o.replace(/\/[^\/]+\/?$/,"")),t=(t=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(t.match(/^\//));else{const e=n.find(e=>e.meta.name===t);e&&(t=e.shortPath)}else t=s.shortPath;return t}function f(t,e){const n=d(t,e);return ft.useHash?"#"+n:n}function d(t,n){const o=Object.assign({},e.params,s.params,n);let r=t;for(const[t,e]of Object.entries(o))r=r.replace(":"+t,e);return(r+function(t,e){if(!ft.queryHandler)return"";const n=mt(t),o={};e&&Object.entries(e).forEach(([t,e])=>{n.includes(t)||(o[t]=e)});return ft.queryHandler.stringify(o)}(t,n)).replace(/\?$/,"")}}}(...t)).subscribe(t)};const Nt={subscribe:t=>ut(At,t=>function(e,n,o,r){const i=t(e,n);o?M("routifyupdatepage")(i,r):history.pushState({},null,i)}).subscribe(t)},Ft={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(Ft.getLongest(Ft.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){Ft.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){Ft.writeMeta("og:"+t,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=c($t).path;return n[Object.keys(t[e]).filter(t=>o.includes(t)).sort((t,e)=>e.length-t.length)[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:s}=Tt.services[r]||Tt.services.plain,a=document.querySelector(`meta[${i}='${t}']`);a&&a.remove();const c=document.createElement("meta");c.setAttribute(i,t),c.setAttribute(s,e),c.setAttribute("data-origin","routify"),n.appendChild(c)},set(t,e){Ft.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=Ft.getOrigin();Ft.templates[t]=Ft.templates[t]||{},Ft.templates[t][n]=e},update(){Object.keys(Ft.props).forEach(t=>{let e=Ft.getLongest(Ft.props,t);Ft.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})})},batchedUpdate(){Ft._pendingUpdate||(Ft._pendingUpdate=!0,setTimeout(()=>{Ft._pendingUpdate=!1,this.update()}))},_updateQueued:!1,getOrigin(){const t=It();return t&&c(t).path||"/"},_pendingUpdate:!1},Tt=new Proxy(Ft,{set(t,e,n,o){const{props:r,getOrigin:i}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][i()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});!function(){const t=lt(!0);Mt.subscribe(e=>e(e=>t.set(!0)||!0)),Dt.subscribe(e=>e(e=>t.set(!1)))}();function qt(t,e,n){const o=t.slice();return o[20]=e[n].component,o[21]=e[n].componentFile,o}function Ct(t,e,n){const o=t.slice();return o[20]=e[n].component,o[21]=e[n].componentFile,o}function Bt(t){let e,n,o,r;const i=[Kt,Ht],s=[];function a(t,e){return!1===t[5].component.isLayout?0:t[4].length?1:-1}return~(e=a(t))&&(n=s[e]=i[e](t)),{c(){n&&n.c(),o=_()},m(t,n){~e&&s[e].m(t,n),m(t,o,n),r=!0},p(t,r){let c=e;e=a(t),e===c?~e&&s[e].p(t,r):(n&&(G(),Z(s[c],1,1,()=>{s[c]=null}),Q()),~e?(n=s[e],n||(n=s[e]=i[e](t),n.c()),V(n,1),n.m(o.parentNode,o)):n=null)},i(t){r||(V(n),r=!0)},o(t){Z(n),r=!1},d(t){~e&&s[e].d(t),t&&g(o)}}}function Ht(t){let e,n,o=[],r=new Map,i=[t[5]];const s=t=>t[20].path;for(let e=0;e<1;e+=1){let n=qt(t,i,e),a=s(n);r.set(a,o[e]=zt(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=_()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);m(t,e,r),n=!0},p(t,n){if(201326655&n){const i=[t[5]];G(),o=tt(o,n,s,1,t,i,r,e.parentNode,Y,zt,e,qt),Q()}},i(t){if(!n){for(let t=0;t<1;t+=1)V(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)Z(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&g(e)}}}function Kt(t){let e,n,o=[],r=new Map,i=[t[5]];const s=t=>function({meta:t,path:e,param:n,params:o}){return JSON.stringify({path:e,param:(t["param-is-page"]||t["slug-is-page"])&&n,queryParams:t["query-params-is-page"]&&o})}(t[20]);for(let e=0;e<1;e+=1){let n=Ct(t,i,e),a=s(n);r.set(a,o[e]=Jt(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=_()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);m(t,e,r),n=!0},p(t,n){if(45&n){const i=[t[5]];G(),o=tt(o,n,s,1,t,i,r,e.parentNode,Y,Jt,e,Ct),Q()}},i(t){if(!n){for(let t=0;t<1;t+=1)V(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)Z(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&g(e)}}}function Ut(t){let e,n,o;return e=new Qt({props:{nodes:[...t[4]],Decorator:void 0!==t[27]?t[27]:t[1],childOfDecorator:t[3].isDecorator,scoped:{...t[0],...t[26]}}}),{c(){ot(e.$$.fragment),n=b()},m(t,r){rt(e,t,r),m(t,n,r),o=!0},p(t,n){const o={};16&n&&(o.nodes=[...t[4]]),134217730&n&&(o.Decorator=void 0!==t[27]?t[27]:t[1]),8&n&&(o.childOfDecorator=t[3].isDecorator),67108865&n&&(o.scoped={...t[0],...t[26]}),e.$set(o)},i(t){o||(V(e.$$.fragment,t),o=!0)},o(t){Z(e.$$.fragment,t),o=!1},d(t){it(e,t),t&&g(n)}}}function zt(t,n){let o,r,i,s;const a=[{scoped:n[0]},{scopedSync:n[2]},n[3].param||{}];var c=n[21];function l(t){let n={$$slots:{default:[Ut,({scoped:t,decorator:e})=>({26:t,27:e}),({scoped:t,decorator:e})=>(t?67108864:0)|(e?134217728:0)]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return c&&(r=new c(l(n))),{key:t,first:null,c(){o=_(),r&&ot(r.$$.fragment),i=_(),this.first=o},m(t,e){m(t,o,e),r&&rt(r,t,e),m(t,i,e),s=!0},p(t,e){const n=13&e?et(a,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},8&e&&nt(t[3].param||{})]):{};if(469762075&e&&(n.$$scope={dirty:e,ctx:t}),c!==(c=t[21])){if(r){G();const t=r;Z(t.$$.fragment,1,0,()=>{it(t,1)}),Q()}c?(r=new c(l(t)),ot(r.$$.fragment),V(r.$$.fragment,1),rt(r,i.parentNode,i)):r=null}else c&&r.$set(n)},i(t){s||(r&&V(r.$$.fragment,t),s=!0)},o(t){r&&Z(r.$$.fragment,t),s=!1},d(t){t&&g(o),t&&g(i),r&&it(r,t)}}}function Jt(t,n){let o,r,i,s;const a=[{scoped:n[0]},{scopedSync:n[2]},n[3].param||{}];var c=n[21];function l(t){let n={};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return c&&(r=new c(l())),{key:t,first:null,c(){o=_(),r&&ot(r.$$.fragment),i=_(),this.first=o},m(t,e){m(t,o,e),r&&rt(r,t,e),m(t,i,e),s=!0},p(t,e){const n=13&e?et(a,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},8&e&&nt(t[3].param||{})]):{};if(c!==(c=t[21])){if(r){G();const t=r;Z(t.$$.fragment,1,0,()=>{it(t,1)}),Q()}c?(r=new c(l()),ot(r.$$.fragment),V(r.$$.fragment,1),rt(r,i.parentNode,i)):r=null}else c&&r.$set(n)},i(t){s||(r&&V(r.$$.fragment,t),s=!0)},o(t){r&&Z(r.$$.fragment,t),s=!1},d(t){t&&g(o),t&&g(i),r&&it(r,t)}}}function Wt(e){let n,o,r,s,a,c,l=e[5]&&Bt(e);return{c(){l&&l.c(),n=b(),o=$("span")},m(u,f){var d;l&&l.m(u,f),m(u,n,f),m(u,o,f),s=!0,a||(d=r=e[8].call(null,o),c=d&&i(d.destroy)?d.destroy:t,a=!0)},p(t,[e]){t[5]?l?(l.p(t,e),32&e&&V(l,1)):(l=Bt(t),l.c(),V(l,1),l.m(n.parentNode,n)):l&&(G(),Z(l,1,1,()=>{l=null}),Q())},i(t){s||(V(l),s=!0)},o(t){Z(l),s=!1},d(t){l&&l.d(t),t&&g(n),t&&g(o),a=!1,c()}}}function Gt(t,e,n){let o,r,i;l(t,$t,t=>n(16,r=t));let{nodes:s=[]}=e,{scoped:a={}}=e,{Decorator:c=null}=e,{childOfDecorator:u=!1}=e,{isRoot:f=!1}=e,d={},p=!1,h=null,m=[];const g=lt(null);l(t,g,t=>n(5,i=t));const y=M("routify");let $;l(t,y,t=>n(15,o=t));function w(t){n(2,d={...a}),0===m.length&&async function(){await(C(),T),pt($);const t=i.component.path===r.path;!window.routify.stopAutoReady&&t&&async function({page:t,metatags:e,afterPageLoad:n}){const{path:o}=t,r=window.location.search.match(/__routify_prefetch=(\d+)/),i=r&&r[1];for(const e of n._hooks)e&&await e(t.api);e.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:o,prefetchId:i},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:i.component,metatags:Tt,afterPageLoad:Dt})}();const e={layout:h.isLayout&&h||b&&b.layout,component:h,route:r,componentFile:t,parentNode:$||b&&b.parentNode};g.set(e),f&&bt.set(e)}let b;return p=c&&!u,D("routify",g),t.$$set=t=>{"nodes"in t&&n(9,s=t.nodes),"scoped"in t&&n(0,a=t.scoped),"Decorator"in t&&n(1,c=t.Decorator),"childOfDecorator"in t&&n(10,u=t.childOfDecorator),"isRoot"in t&&n(11,f=t.isRoot)},t.$$.update=()=>{if(32768&t.$$.dirty&&(b=o),4610&t.$$.dirty&&p){const t={component:()=>c,path:s[0].path+"__decorator",isDecorator:!0};n(9,s=[t,...s])}512&t.$$.dirty&&n(3,[h,...m]=s,h,(n(4,m),n(9,s),n(12,p),n(1,c))),8&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then(w):w(e)}(h)},[a,c,d,h,m,i,g,y,t=>$=t.parentNode,s,u,f]}class Qt extends at{constructor(t){super(),st(this,t,Gt,Wt,s,{nodes:9,scoped:0,Decorator:1,childOfDecorator:10,isRoot:11})}}function Vt(t,e){let n=!1;async function o(t,o){const r=xt(t||yt()),i=[...(o&&xt(yt())||r).layouts,r];n&&delete n.last,r.last=n,n=r,t||_t.set(r),$t.set(r),await r.api.preload(),e(i)}const r=function(t){["pushState","replaceState"].forEach(t=>{const e=history[t];history[t]=async function(n={},o,r){const{id:i,path:s,params:a}=c($t);n={id:i,path:s,params:a,...n};const l=new Event(t.toLowerCase());if(Object.assign(l,{state:n,title:o,url:r}),await Xt(l))return e.apply(this,[n,o,r]),dispatchEvent(l)}});let e=!1;const n={click:Zt,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await Xt(n)?t():(e=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach(t=>addEventListener(...t));return()=>{Object.entries(n).forEach(t=>removeEventListener(...t))}}(o);return{updatePage:o,destroy:r}}function Zt(t){const e=t.target.closest("a"),n=e&&e.getAttribute("href");t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented||n&&!e.target&&e.host===location.host&&(t.preventDefault(),history.pushState({},"",n))}async function Xt(t){const e=c($t);for(const n of Mt._hooks.filter(Boolean)){if(!await n(t,e))return!1}return!0}function Yt(t){let e,n;return e=new Qt({props:{nodes:t[0],isRoot:!0}}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.nodes=t[0]),e.$set(o)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function te(t){let e,n,o,r=t[0]&&null!==t[1]&&Yt(t);return n=new St({}),{c(){r&&r.c(),e=b(),ot(n.$$.fragment)},m(t,i){r&&r.m(t,i),m(t,e,i),rt(n,t,i),o=!0},p(t,[n]){t[0]&&null!==t[1]?r?(r.p(t,n),3&n&&V(r,1)):(r=Yt(t),r.c(),V(r,1),r.m(e.parentNode,e)):r&&(G(),Z(r,1,1,()=>{r=null}),Q())},i(t){o||(V(r),V(n.$$.fragment,t),o=!0)},o(t){Z(r),Z(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&g(e),it(n,t)}}}function ee(t,e,n){let o;l(t,$t,t=>n(1,o=t));let r,i,{routes:s}=e,{config:a={}}=e;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(ft,a),function(){if(gt)return;const t=console.warn;console.warn=function(e,...n){if(!["was created with unknown prop 'scoped'","was created with unknown prop 'scopedSync'"].find(t=>e.includes(t)))return t(e,...n)},gt=!0}();D("routifyupdatepage",(...t)=>i&&i.updatePage(...t));const c=t=>n(0,r=t),u=()=>{i&&(i.destroy(),i=null)};let f=null;var d;return d=u,S().$$.on_destroy.push(d),t.$$set=t=>{"routes"in t&&n(2,s=t.routes),"config"in t&&n(3,a=t.config)},t.$$.update=()=>{4&t.$$.dirty&&s&&(clearTimeout(f),f=setTimeout(()=>{u(),i=Vt(0,c),wt.set(s),i.updatePage()}))},[r,o,s,a]}class ne extends at{constructor(t){super(),st(this,t,ee,te,s,{routes:2,config:3})}}function oe(t){const e=async function(e){return await re(t,{file:e.tree,state:{treePayload:e},scope:{}})};return e.sync=function(e){return ie(t,{file:e.tree,state:{treePayload:e},scope:{}})},e}async function re(t,e){const n=await t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=await Promise.all(o.children.map(async n=>re(t,{state:e.state,scope:se(e.scope||{}),parent:e.file,file:await n})));o.children=n.filter(Boolean)}return o}function ie(t,e){const n=t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=o.children.map(n=>ie(t,{state:e.state,scope:se(e.scope||{}),parent:e.file,file:n}));o.children=n.filter(Boolean)}return o}function se(t){return JSON.parse(JSON.stringify(t))}const ae=oe(({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return"^"+((t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(dt,"([^/]+)")+n)})(t.path,t.isFallback))}),ce=oe(({file:t})=>{t.paramKeys=mt(t.path)}),le=oe(({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path}),ue=oe(({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map(t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C").join(""))(t)}),fe=oe(({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map(t=>({isMeta:!0,...t,meta:t}))))}),de=oe(t=>{const{file:e}=t,{isFallback:n,meta:o}=e,r=e.path.match("/:"),i=e.path.endsWith("/index"),s=o.index||0===o.index,a=!1===o.index;e.isIndexable=s||!n&&!r&&!i&&!a,e.isNonIndexable=!e.isIndexable}),pe=oe(({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>me(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>me(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>he(e)})});function he(t,e=[]){return t&&(e.unshift(t),he(t.parent,e)),e}function me(t,e){if(!t.root){const n=t.parent.children.filter(t=>t.isIndexable),o=n.indexOf(t);return n[o+e]}}const ge=oe(({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t})}),ye=oe(({file:t,scope:e})=>{function n(t){const{parent:e}=t,o=e&&e.component&&e,r=o&&o.isReset,i=e&&!r&&n(e)||[];return o&&i.push(o),i}Object.defineProperty(t,"layouts",{get:()=>n(t)})}),$e=oe(({file:t})=>{const e=t.root?function(){}:t.children?(t.isPage,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)});var we=Object.freeze({__proto__:null,setRegex:ae,setParamKeys:ce,setShortPath:le,setRank:ue,addMetaChildren:fe,setIsIndexable:de,assignRelations:pe,assignIndex:ge,assignLayout:ye,createFlatList:t=>{oe(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(t),t.routes.sort((t,e)=>t.ranking>=e.ranking?-1:1)},setPrototype:$e});const be={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function _e(t){return Object.entries(be).forEach(([e,n])=>{void 0===t[e]&&(t[e]=n)}),t.children&&(t.children=t.children.map(_e)),t}const xe=oe(({file:t})=>{t.api=new ve(t)});class ve{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return Pe(this,1)}get prev(){return Pe(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file].map(t=>t.component());await Promise.all(t)}get component(){return this.__file.component?this.__file.component():!!this.__file.index&&this.__file.index.component()}}function Pe(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const ke={...we,restoreDefaults:({tree:t})=>_e(t),assignAPI:xe};const Oe={root:!0,children:[{isPage:!0,path:"/:slug",id:"__slug",component:()=>import("./[slug]-5dd10dc2.js").then(t=>t.default)},{isDir:!0,children:[{isDir:!0,ext:"",children:[{isPage:!0,path:"/admin/edit/:slug",id:"_admin_edit__slug",component:()=>import("./[slug]-ea432957.js").then(t=>t.default)}],path:"/admin/edit"},{isPage:!0,path:"/admin/tulis",id:"_admin_tulis",component:()=>import("./tulis-0220a6d2.js").then(t=>t.default)}],isLayout:!0,path:"/admin",id:"_admin__layout",component:()=>import("./_layout-72e9f292.js").then(t=>t.default)},{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>import("./index-cd120b1b.js").then(t=>t.default)},{isPage:!0,path:"/login",id:"_login",component:()=>import("./login-e4cd2778.js").then(t=>t.default)}],isLayout:!0,path:"/",id:"__layout",component:()=>import("./_layout-4017a011.js").then(t=>t.default)},{tree:je,routes:Ee}=function(t){const e=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(ke[t].sync||ke[t])(n)}return n}(Oe),Le=lt(!1),Se=lt(!1);function Ie(e){let n;return{c(){n=$("div"),n.innerHTML='<div class="indeterminate svelte-5dfftr"></div>',P(n,"class","progress-loading svelte-5dfftr")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class De extends at{constructor(t){super(),st(this,t,null,Ie,s,{})}}function Me(t){let e,n;return e=new De({}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function Re(t){let e,n,o,r=t[0]&&Me();return n=new ne({props:{routes:Ee}}),{c(){r&&r.c(),e=b(),ot(n.$$.fragment)},m(t,i){r&&r.m(t,i),m(t,e,i),rt(n,t,i),o=!0},p(t,[n]){t[0]?r?1&n&&V(r,1):(r=Me(),r.c(),V(r,1),r.m(e.parentNode,e)):r&&(G(),Z(r,1,1,()=>{r=null}),Q())},i(t){o||(V(r),V(n.$$.fragment,t),o=!0)},o(t){Z(r),Z(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&g(e),it(n,t)}}}function Ae(t,e,n){let o;l(t,Le,t=>n(0,o=t));let r=0;const i=()=>{r=.01*window.innerHeight,document.documentElement.style.setProperty("--vh",r+"px")};return i(),window.addEventListener("resize",i),[o]}const Ne=new class extends at{constructor(t){super(),st(this,t,Ae,Re,s,{})}}({target:document.body,props:{name:"world"}});"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose(()=>{Ne.$destroy()}),"undefined"!=typeof module&&module.hot.accept());export{p as A,Ne as B,j as H,at as S,b as a,_ as b,m as c,h as d,$ as e,k as f,g,P as h,st as i,l as j,Nt as k,x as l,Se as m,t as n,y as o,v as p,O as q,r,s,w as t,I as u,A as v,u as w,d as x,V as y,Z as z};