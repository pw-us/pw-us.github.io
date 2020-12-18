function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(t){let e;return a(t,t=>e=t)(),e}function l(t,e,n){t.$$.on_destroy.push(a(e,n))}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function m(){return d("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let y;function $(t){y=t}function w(){if(!y)throw new Error("Function called outside component initialization");return y}function b(t,e){w().$$.context.set(t,e)}function _(t){return w().$$.context.get(t)}const x=[],v=[],k=[],P=[],O=Promise.resolve();let E=!1;function S(){E||(E=!0,O.then(I))}function j(t){k.push(t)}let L=!1;const R=new Set;function I(){if(!L){L=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];$(e),F(e.$$)}for($(null),x.length=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];R.has(e)||(R.add(e),e())}k.length=0}while(x.length);for(;P.length;)P.pop()();E=!1,L=!1,R.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const M=new Set;let D;function N(){D={r:0,c:[],p:D}}function A(){D.r||r(D.c),D=D.p}function T(t,e){t&&t.i&&(M.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),D.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function B(t,e){t.d(1),e.delete(t.key)}function C(t,e){q(t,1,1,()=>{e.delete(t.key)})}function K(t,e,n,o,r,i,s,a,c,l,u,f){let p=t.length,d=i.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=d;h--;){const t=f(r,i,h),a=n(t);let c=s.get(a);c?o&&c.p(t,e):(c=l(a,t),c.c()),y.set(a,g[h]=c),a in m&&$.set(a,Math.abs(h-m[a]))}const w=new Set,b=new Set;function _(t){T(t,1),t.m(a,u),s.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],o=e.key,r=n.key;e===n?(u=e.first,p--,d--):y.has(r)?!s.has(o)||w.has(o)?_(e):b.has(r)?p--:$.get(o)>$.get(r)?(b.add(o),_(e)):(w.add(r),p--):(c(n,s),p--)}for(;p--;){const e=t[p];y.has(e.key)||c(e,s)}for(;d;)_(g[d-1]);return g}function U(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],a=e[i];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[i]=a}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function J(t,e,o){const{fragment:s,on_mount:a,on_destroy:c,after_update:l}=t.$$;s&&s.m(e,o),j(()=>{const e=a.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(j)}function W(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,n,i,s,a,c,l=[-1]){const u=y;$(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=i?i(e,p,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),S(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],d.update(),h=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&T(e.$$.fragment),J(e,n.target,n.anchor),I()}$(u)}class Q{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const V=[];function Z(e,n=t){let o;const r=[];function i(t){if(s(e,t)&&(e=t,o)){const t=!V.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),V.push(n,e)}if(t){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,a=t){const c=[s,a];return r.push(c),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}var X={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce((t,[e,n])=>(t[e]=n,t),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()},urlTransform:{apply:t=>t,remove:t=>t},useHash:!1};const Y=RegExp(/\:([^/()]+)/g);function tt(t){if(navigator.userAgent.includes("jsdom"))return!1;et(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(t.substring(1))){const e=document.querySelector(t);e&&e.scrollIntoView()}}}()}function et(t){t&&t.scrollTo&&"scroll-lock"!==t.dataset.routify&&"lock"!==t.dataset["routify-scroll"]&&(t.style["scroll-behavior"]="auto",t.scrollTo({top:0,behavior:"auto"}),t.style["scroll-behavior"]="",et(t.parentElement))}let nt=!1;function ot(){const t=function(){const t=window.location.search.match(/__routify_path=([^&]+)/),e=window.location.search.match(/__routify_prefetch=\d+/);window.routify=window.routify||{},window.routify.prefetched=!!e;return t&&t[1].replace(/[#?].+/,"")}();return t||(X.useHash?window.location.hash.replace(/#/,""):window.location.pathname)}window.routify=window.routify||{};const rt=Z(null),it=Z([]);it.subscribe(t=>window.routify.routes=t);let st=Z({component:{params:{}}});const at=Z(null);function ct(t){t=X.urlTransform.remove(t);const e=c(it),n=e.find(e=>t===e.meta.name)||e.find(e=>t.match(e.regex));if(!n)throw new Error(`Route could not be found for "${t}".`);const o=t;if(X.queryHandler&&(n.params=X.queryHandler.parse(window.location.search)),n.paramKeys){const t=function(t){const e=[];return t.forEach(t=>{e[t.path.split("/").filter(Boolean).length-1]=t}),e}(n.layouts),e=o.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])})(n.path).forEach((o,r)=>{o&&(n.params[o]=e[r],t[r]?t[r].param={[o]:e[r]}:n.param={[o]:e[r]})})}return n.leftover=t.replace(new RegExp(n.regex),""),n}function lt(t,e,n){const o=t.slice();return o[1]=e[n],o}function ut(t,e){let n,o;return{key:t,first:null,c(){n=p("iframe"),n.src!==(o=e[1].url)&&g(n,"src",o),g(n,"frameborder","0"),g(n,"title","routify prefetcher"),this.first=n},m(t,e){u(t,n,e)},p(t,e){1&e&&n.src!==(o=t[1].url)&&g(n,"src",o)},d(t){t&&f(n)}}}function ft(e){let n,o=[],r=new Map,i=e[0];const s=t=>t[1].options.prefetch;for(let t=0;t<i.length;t+=1){let n=lt(e,i,t),a=s(n);r.set(a,o[t]=ut(a,n))}return{c(){n=p("div");for(let t=0;t<o.length;t+=1)o[t].c();var t,e,r;g(n,"id","__routify_iframes"),t="display",e="none",n.style.setProperty(t,e,r?"important":"")},m(t,e){u(t,n,e);for(let t=0;t<o.length;t+=1)o[t].m(n,null)},p(t,[e]){if(1&e){const i=t[0];o=K(o,e,s,1,t,i,r,n,B,ut,null,lt)}},i:t,o:t,d(t){t&&f(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}const pt=Z([]),dt=function(e,n,o){const s=!Array.isArray(e),c=s?[e]:e,l=n.length<2;return{subscribe:Z(o,e=>{let o=!1;const u=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=n(s?u[0]:u,e);l?e(o):p=i(o)?o:t},h=c.map((t,e)=>a(t,t=>{u[e]=t,f&=~(1<<e),o&&d()},()=>{f|=1<<e}));return o=!0,d(),function(){r(h),p()}}).subscribe}}(pt,t=>t.slice(0,2));function ht(t){const e=t.data?t.data.prefetchId:t;if(!e)return null;const n=c(pt).find(t=>t&&t.options.prefetch==e);if(n){const{gracePeriod:t}=n.options,o=new Promise(e=>setTimeout(e,t)),r=new Promise(e=>{window.requestIdleCallback?window.requestIdleCallback(e):setTimeout(e,t+1e3)});Promise.all([o,r]).then(()=>{pt.update(t=>t.filter(t=>t.options.prefetch!=e))})}}function mt(t,e,n){let o;return l(t,dt,t=>n(0,o=t)),[o]}dt.subscribe(t=>t.forEach(({options:t})=>{setTimeout(()=>ht(t.prefetch),t.timeout)})),addEventListener("message",ht,!1);class gt extends Q{constructor(t){super(),G(this,t,mt,ft,s,{})}}const yt={_hooks:[],subscribe:wt},$t={_hooks:[],subscribe:wt};function wt(t){const e=this._hooks,n=e.length;return t(t=>{e[n]=t}),()=>delete e[n]}const bt={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(bt.getLongest(bt.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){bt.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){bt.writeMeta("og:"+t,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=c(rt).path;return n[Object.keys(t[e]).filter(t=>o.includes(t)).sort((t,e)=>e.length-t.length)[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:s}=_t.services[r]||_t.services.plain,a=document.querySelector(`meta[${i}='${t}']`);a&&a.remove();const c=document.createElement("meta");c.setAttribute(i,t),c.setAttribute(s,e),c.setAttribute("data-origin","routify"),n.appendChild(c)},set(t,e){bt.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=bt.getOrigin();bt.templates[t]=bt.templates[t]||{},bt.templates[t][n]=e},update(){Object.keys(bt.props).forEach(t=>{let e=bt.getLongest(bt.props,t);bt.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})})},batchedUpdate(){bt._pendingUpdate||(bt._pendingUpdate=!0,setTimeout(()=>{bt._pendingUpdate=!1,this.update()}))},_updateQueued:!1,getOrigin(){const t=_("routify")||st;return t&&c(t).path||"/"},_pendingUpdate:!1},_t=new Proxy(bt,{set(t,e,n,o){const{props:r,getOrigin:i}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][i()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});!function(){const t=Z(!0);$t.subscribe(e=>e(e=>t.set(!0)||!0)),yt.subscribe(e=>e(e=>t.set(!1)))}();function xt(t,e,n){const o=t.slice();return o[20]=e[n].component,o[21]=e[n].componentFile,o}function vt(t,e,n){const o=t.slice();return o[20]=e[n].component,o[21]=e[n].componentFile,o}function kt(t){let e,n,o,r;const i=[Ot,Pt],s=[];function a(t,e){return!1===t[5].component.isLayout?0:t[4].length?1:-1}return~(e=a(t))&&(n=s[e]=i[e](t)),{c(){n&&n.c(),o=m()},m(t,n){~e&&s[e].m(t,n),u(t,o,n),r=!0},p(t,r){let c=e;e=a(t),e===c?~e&&s[e].p(t,r):(n&&(N(),q(s[c],1,1,()=>{s[c]=null}),A()),~e?(n=s[e],n||(n=s[e]=i[e](t),n.c()),T(n,1),n.m(o.parentNode,o)):n=null)},i(t){r||(T(n),r=!0)},o(t){q(n),r=!1},d(t){~e&&s[e].d(t),t&&f(o)}}}function Pt(t){let e,n,o=[],r=new Map,i=[t[5]];const s=t=>t[20].path;for(let e=0;e<1;e+=1){let n=xt(t,i,e),a=s(n);r.set(a,o[e]=St(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=m()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);u(t,e,r),n=!0},p(t,n){if(201326655&n){const i=[t[5]];N(),o=K(o,n,s,1,t,i,r,e.parentNode,C,St,e,xt),A()}},i(t){if(!n){for(let t=0;t<1;t+=1)T(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)q(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&f(e)}}}function Ot(t){let e,n,o=[],r=new Map,i=[t[5]];const s=t=>function({meta:t,path:e,param:n,params:o}){return JSON.stringify({path:e,param:(t["param-is-page"]||t["slug-is-page"])&&n,queryParams:t["query-params-is-page"]&&o})}(t[20]);for(let e=0;e<1;e+=1){let n=vt(t,i,e),a=s(n);r.set(a,o[e]=jt(a,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=m()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);u(t,e,r),n=!0},p(t,n){if(45&n){const i=[t[5]];N(),o=K(o,n,s,1,t,i,r,e.parentNode,C,jt,e,vt),A()}},i(t){if(!n){for(let t=0;t<1;t+=1)T(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)q(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&f(e)}}}function Et(t){let e,n,o;return e=new It({props:{nodes:[...t[4]],Decorator:void 0!==t[27]?t[27]:t[1],childOfDecorator:t[3].isDecorator,scoped:{...t[0],...t[26]}}}),{c(){z(e.$$.fragment),n=h()},m(t,r){J(e,t,r),u(t,n,r),o=!0},p(t,n){const o={};16&n&&(o.nodes=[...t[4]]),134217730&n&&(o.Decorator=void 0!==t[27]?t[27]:t[1]),8&n&&(o.childOfDecorator=t[3].isDecorator),67108865&n&&(o.scoped={...t[0],...t[26]}),e.$set(o)},i(t){o||(T(e.$$.fragment,t),o=!0)},o(t){q(e.$$.fragment,t),o=!1},d(t){W(e,t),t&&f(n)}}}function St(t,n){let o,r,i,s;const a=[{scoped:n[0]},{scopedSync:n[2]},n[3].param||{}];var c=n[21];function l(t){let n={$$slots:{default:[Et,({scoped:t,decorator:e})=>({26:t,27:e}),({scoped:t,decorator:e})=>(t?67108864:0)|(e?134217728:0)]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return c&&(r=new c(l(n))),{key:t,first:null,c(){o=m(),r&&z(r.$$.fragment),i=m(),this.first=o},m(t,e){u(t,o,e),r&&J(r,t,e),u(t,i,e),s=!0},p(t,e){const n=13&e?U(a,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},8&e&&H(t[3].param||{})]):{};if(469762075&e&&(n.$$scope={dirty:e,ctx:t}),c!==(c=t[21])){if(r){N();const t=r;q(t.$$.fragment,1,0,()=>{W(t,1)}),A()}c?(r=new c(l(t)),z(r.$$.fragment),T(r.$$.fragment,1),J(r,i.parentNode,i)):r=null}else c&&r.$set(n)},i(t){s||(r&&T(r.$$.fragment,t),s=!0)},o(t){r&&q(r.$$.fragment,t),s=!1},d(t){t&&f(o),t&&f(i),r&&W(r,t)}}}function jt(t,n){let o,r,i,s;const a=[{scoped:n[0]},{scopedSync:n[2]},n[3].param||{}];var c=n[21];function l(t){let n={};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return c&&(r=new c(l())),{key:t,first:null,c(){o=m(),r&&z(r.$$.fragment),i=m(),this.first=o},m(t,e){u(t,o,e),r&&J(r,t,e),u(t,i,e),s=!0},p(t,e){const n=13&e?U(a,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},8&e&&H(t[3].param||{})]):{};if(c!==(c=t[21])){if(r){N();const t=r;q(t.$$.fragment,1,0,()=>{W(t,1)}),A()}c?(r=new c(l()),z(r.$$.fragment),T(r.$$.fragment,1),J(r,i.parentNode,i)):r=null}else c&&r.$set(n)},i(t){s||(r&&T(r.$$.fragment,t),s=!0)},o(t){r&&q(r.$$.fragment,t),s=!1},d(t){t&&f(o),t&&f(i),r&&W(r,t)}}}function Lt(e){let n,o,r,s,a,c,l=e[5]&&kt(e);return{c(){l&&l.c(),n=h(),o=p("span")},m(f,p){var d;l&&l.m(f,p),u(f,n,p),u(f,o,p),s=!0,a||(d=r=e[8].call(null,o),c=d&&i(d.destroy)?d.destroy:t,a=!0)},p(t,[e]){t[5]?l?(l.p(t,e),32&e&&T(l,1)):(l=kt(t),l.c(),T(l,1),l.m(n.parentNode,n)):l&&(N(),q(l,1,1,()=>{l=null}),A())},i(t){s||(T(l),s=!0)},o(t){q(l),s=!1},d(t){l&&l.d(t),t&&f(n),t&&f(o),a=!1,c()}}}function Rt(t,e,n){let o,r,i;l(t,rt,t=>n(16,r=t));let{nodes:s=[]}=e,{scoped:a={}}=e,{Decorator:c=null}=e,{childOfDecorator:u=!1}=e,{isRoot:f=!1}=e,p={},d=!1,h=null,m=[];const g=Z(null);l(t,g,t=>n(5,i=t));const y=_("routify");let $;l(t,y,t=>n(15,o=t));function w(t){n(2,p={...a}),0===m.length&&async function(){await(S(),O),tt($);const t=i.component.path===r.path;!window.routify.stopAutoReady&&t&&async function({page:t,metatags:e,afterPageLoad:n}){const{path:o}=t,r=window.location.search.match(/__routify_prefetch=(\d+)/),i=r&&r[1];for(const e of n._hooks)e&&await e(t.api);e.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:o,prefetchId:i},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:i.component,metatags:_t,afterPageLoad:yt})}();const e={layout:h.isLayout&&h||x&&x.layout,component:h,route:r,componentFile:t,parentNode:$||x&&x.parentNode};g.set(e),f&&st.set(e)}let x;return d=c&&!u,b("routify",g),t.$$set=t=>{"nodes"in t&&n(9,s=t.nodes),"scoped"in t&&n(0,a=t.scoped),"Decorator"in t&&n(1,c=t.Decorator),"childOfDecorator"in t&&n(10,u=t.childOfDecorator),"isRoot"in t&&n(11,f=t.isRoot)},t.$$.update=()=>{if(32768&t.$$.dirty&&(x=o),4610&t.$$.dirty&&d){const t={component:()=>c,path:s[0].path+"__decorator",isDecorator:!0};n(9,s=[t,...s])}512&t.$$.dirty&&n(3,[h,...m]=s,h,(n(4,m),n(9,s),n(12,d),n(1,c))),8&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then(w):w(e)}(h)},[a,c,p,h,m,i,g,y,t=>$=t.parentNode,s,u,f]}class It extends Q{constructor(t){super(),G(this,t,Rt,Lt,s,{nodes:9,scoped:0,Decorator:1,childOfDecorator:10,isRoot:11})}}function Ft(t,e){let n=!1;async function o(t,o){const r=ct(t||ot()),i=[...(o&&ct(ot())||r).layouts,r];n&&delete n.last,r.last=n,n=r,t||at.set(r),rt.set(r),await r.api.preload(),e(i)}const r=function(t){["pushState","replaceState"].forEach(t=>{const e=history[t];history[t]=async function(n={},o,r){const{id:i,path:s,params:a}=c(rt);n={id:i,path:s,params:a,...n};const l=new Event(t.toLowerCase());if(Object.assign(l,{state:n,title:o,url:r}),await Dt(l))return e.apply(this,[n,o,r]),dispatchEvent(l)}});let e=!1;const n={click:Mt,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await Dt(n)?t():(e=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach(t=>addEventListener(...t));return()=>{Object.entries(n).forEach(t=>removeEventListener(...t))}}(o);return{updatePage:o,destroy:r}}function Mt(t){const e=t.target.closest("a"),n=e&&e.getAttribute("href");t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented||n&&!e.target&&e.host===location.host&&(t.preventDefault(),history.pushState({},"",n))}async function Dt(t){const e=c(rt);for(const n of $t._hooks.filter(Boolean)){if(!await n(t,e))return!1}return!0}function Nt(t){let e,n;return e=new It({props:{nodes:t[0],isRoot:!0}}),{c(){z(e.$$.fragment)},m(t,o){J(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.nodes=t[0]),e.$set(o)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function At(t){let e,n,o,r=t[0]&&null!==t[1]&&Nt(t);return n=new gt({}),{c(){r&&r.c(),e=h(),z(n.$$.fragment)},m(t,i){r&&r.m(t,i),u(t,e,i),J(n,t,i),o=!0},p(t,[n]){t[0]&&null!==t[1]?r?(r.p(t,n),3&n&&T(r,1)):(r=Nt(t),r.c(),T(r,1),r.m(e.parentNode,e)):r&&(N(),q(r,1,1,()=>{r=null}),A())},i(t){o||(T(r),T(n.$$.fragment,t),o=!0)},o(t){q(r),q(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&f(e),W(n,t)}}}function Tt(t,e,n){let o;l(t,rt,t=>n(1,o=t));let r,i,{routes:s}=e,{config:a={}}=e;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(X,a),function(){if(nt)return;const t=console.warn;console.warn=function(e,...n){if(!["was created with unknown prop 'scoped'","was created with unknown prop 'scopedSync'"].find(t=>e.includes(t)))return t(e,...n)},nt=!0}();b("routifyupdatepage",(...t)=>i&&i.updatePage(...t));const c=t=>n(0,r=t),u=()=>{i&&(i.destroy(),i=null)};let f=null;var p;return p=u,w().$$.on_destroy.push(p),t.$$set=t=>{"routes"in t&&n(2,s=t.routes),"config"in t&&n(3,a=t.config)},t.$$.update=()=>{4&t.$$.dirty&&s&&(clearTimeout(f),f=setTimeout(()=>{u(),i=Ft(0,c),it.set(s),i.updatePage()}))},[r,o,s,a]}class qt extends Q{constructor(t){super(),G(this,t,Tt,At,s,{routes:2,config:3})}}function Bt(t){const e=async function(e){return await Ct(t,{file:e.tree,state:{treePayload:e},scope:{}})};return e.sync=function(e){return Kt(t,{file:e.tree,state:{treePayload:e},scope:{}})},e}async function Ct(t,e){const n=await t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=await Promise.all(o.children.map(async n=>Ct(t,{state:e.state,scope:Ut(e.scope||{}),parent:e.file,file:await n})));o.children=n.filter(Boolean)}return o}function Kt(t,e){const n=t(e);if(!1===n)return!1;const o=n||e.file;if(o.children){const n=o.children.map(n=>Kt(t,{state:e.state,scope:Ut(e.scope||{}),parent:e.file,file:n}));o.children=n.filter(Boolean)}return o}function Ut(t){return JSON.parse(JSON.stringify(t))}const Ht=Bt(({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return"^"+((t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(Y,"([^/]+)")+n)})(t.path,t.isFallback))}),zt=Bt(({file:t})=>{t.paramKeys=(t=>{const e=[];let n;for(;n=Y.exec(t);)e.push(n[1]);return e})(t.path)}),Jt=Bt(({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path}),Wt=Bt(({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map(t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C").join(""))(t)}),Gt=Bt(({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map(t=>({isMeta:!0,...t,meta:t}))))}),Qt=Bt(t=>{const{file:e}=t,{isFallback:n,meta:o}=e,r=e.path.match("/:"),i=e.path.endsWith("/index"),s=o.index||0===o.index,a=!1===o.index;e.isIndexable=s||!n&&!r&&!i&&!a,e.isNonIndexable=!e.isIndexable}),Vt=Bt(({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>Xt(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>Xt(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>Zt(e)})});function Zt(t,e=[]){return t&&(e.unshift(t),Zt(t.parent,e)),e}function Xt(t,e){if(!t.root){const n=t.parent.children.filter(t=>t.isIndexable),o=n.indexOf(t);return n[o+e]}}const Yt=Bt(({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t})}),te=Bt(({file:t,scope:e})=>{function n(t){const{parent:e}=t,o=e&&e.component&&e,r=o&&o.isReset,i=e&&!r&&n(e)||[];return o&&i.push(o),i}Object.defineProperty(t,"layouts",{get:()=>n(t)})}),ee=Bt(({file:t})=>{const e=t.root?function(){}:t.children?(t.isPage,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)});var ne=Object.freeze({__proto__:null,setRegex:Ht,setParamKeys:zt,setShortPath:Jt,setRank:Wt,addMetaChildren:Gt,setIsIndexable:Qt,assignRelations:Vt,assignIndex:Yt,assignLayout:te,createFlatList:t=>{Bt(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(t),t.routes.sort((t,e)=>t.ranking>=e.ranking?-1:1)},setPrototype:ee});const oe={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function re(t){return Object.entries(oe).forEach(([e,n])=>{void 0===t[e]&&(t[e]=n)}),t.children&&(t.children=t.children.map(re)),t}const ie=Bt(({file:t})=>{t.api=new se(t)});class se{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return ae(this,1)}get prev(){return ae(this,-1)}async preload(){const t=[...this.__file.layouts,this.__file].map(t=>t.component());await Promise.all(t)}get component(){return this.__file.component?this.__file.component():!!this.__file.index&&this.__file.index.component()}}function ae(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const ce={...ne,restoreDefaults:({tree:t})=>re(t),assignAPI:ie};const le={root:!0,children:[{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>import("./index-ce5046c3.js").then(t=>t.default)}],path:"/"},{tree:ue,routes:fe}=function(t){const e=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(ce[t].sync||ce[t])(n)}return n}(le),pe=Z(!1);function de(e){let n;return{c(){n=p("div"),n.innerHTML='<div class="indeterminate svelte-5dfftr"></div>',g(n,"class","progress-loading svelte-5dfftr")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class he extends Q{constructor(t){super(),G(this,t,null,de,s,{})}}function me(t){let e,n;return e=new he({}),{c(){z(e.$$.fragment)},m(t,o){J(e,t,o),n=!0},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){q(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function ge(t){let e,n,o,r=t[0]&&me();return n=new qt({props:{routes:fe}}),{c(){r&&r.c(),e=h(),z(n.$$.fragment)},m(t,i){r&&r.m(t,i),u(t,e,i),J(n,t,i),o=!0},p(t,[n]){t[0]?r?1&n&&T(r,1):(r=me(),r.c(),T(r,1),r.m(e.parentNode,e)):r&&(N(),q(r,1,1,()=>{r=null}),A())},i(t){o||(T(r),T(n.$$.fragment,t),o=!0)},o(t){q(r),q(n.$$.fragment,t),o=!1},d(t){r&&r.d(t),t&&f(e),W(n,t)}}}function ye(t,e,n){let o;l(t,pe,t=>n(0,o=t));let r=0;const i=()=>{r=.01*window.innerHeight,document.documentElement.style.setProperty("--vh",r+"px")};return i(),window.addEventListener("resize",i),[o]}const $e=new class extends Q{constructor(t){super(),G(this,t,ye,ge,s,{})}}({target:document.body,props:{name:"world"}});"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose(()=>{$e.$destroy()}),"undefined"!=typeof module&&module.hot.accept());export{Q as S,$e as a,G as i,s};