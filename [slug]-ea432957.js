import{S as t,i as e,s as a,b as s,c as n,e as l,t as o,h as i,d as u,l as c,f as r,g as d,o as b,a as m,q as p,p as f,n as h,r as g,u as w,v}from"./main-b979102e.js";import{b as $,s as y}from"./api-ad30823f.js";import{c as j}from"./tools-c085b23f.js";function q(t,e,a){const s=t.slice();return s[15]=e[a],s}function x(t){let e,a=t[4],l=[];for(let e=0;e<a.length;e+=1)l[e]=D(q(t,a,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=s()},m(t,a){for(let e=0;e<l.length;e+=1)l[e].m(t,a);n(t,e,a)},p(t,s){if(20&s){let n;for(a=t[4],n=0;n<a.length;n+=1){const o=q(t,a,n);l[n]?l[n].p(o,s):(l[n]=D(o),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},d(t){b(l,t),t&&d(e)}}}function D(t){let e,a,s,b,m=t[15].label+"";function p(...e){return t[9](t[15],...e)}return{c(){e=l("div"),a=o(m),i(e,"class","btn btn-light me-2 mb-2")},m(t,l){n(t,e,l),u(e,a),s||(b=c(e,"click",p),s=!0)},p(e,s){t=e,16&s&&m!==(m=t[15].label+"")&&r(a,m)},d(t){t&&d(e),s=!1,b()}}}function E(t){let e,a,s,o,r,b,w,v,$,y,j,q,D,E,F,L,_,H=t[4]&&x(t);return document.title=F="Edit "+t[1],{c(){e=l("form"),a=l("div"),s=l("input"),o=m(),r=l("div"),b=l("input"),w=m(),v=l("div"),H&&H.c(),$=m(),y=l("div"),j=l("textarea"),q=m(),D=l("div"),D.innerHTML='<input type="submit" value="Ubah" class="btn btn-success"/>',E=m(),i(s,"class","form-control"),s.required=!0,i(s,"placeholder","Judul"),i(a,"class","mb-3"),i(b,"class","form-control"),b.required=!0,i(b,"placeholder","Label"),i(r,"class","mb-3"),i(v,"class","mb-1"),i(j,"class","form-control"),i(j,"placeholder","Isi"),i(y,"class","mb-3"),i(D,"class","mb-3")},m(l,i){n(l,e,i),u(e,a),u(a,s),p(s,t[1]),u(e,o),u(e,r),u(r,b),p(b,t[2]),u(e,w),u(e,v),H&&H.m(v,null),u(e,$),u(e,y),u(y,j),t[10](j),p(j,t[3]),u(e,q),u(e,D),n(l,E,i),L||(_=[c(s,"input",t[7]),c(b,"input",t[8]),c(j,"input",t[11]),c(e,"submit",f(t[5]))],L=!0)},p(t,[e]){2&e&&s.value!==t[1]&&p(s,t[1]),4&e&&b.value!==t[2]&&p(b,t[2]),t[4]?H?H.p(t,e):(H=x(t),H.c(),H.m(v,null)):H&&(H.d(1),H=null),8&e&&p(j,t[3]),2&e&&F!==(F="Edit "+t[1])&&(document.title=F)},i:h,o:h,d(a){a&&d(e),H&&H.d(),t[10](null),a&&d(E),L=!1,g(_)}}}function F(t,e,a){let s,{slug:n}=e,[l,o,i,u]=["","","",[]];w(()=>(()=>{const t=()=>a(0,s.style.height=window.innerHeight-140+"px",s);t(),window.addEventListener("resize",t)})());(async()=>{const t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\tselect distinct label\n\t\t\tfrom database_${$}\n\t\t\torder by label\n\t\t`)));let e=await fetch(y,{method:"post",body:t}).then(t=>t.json());e=await e,a(4,u=e)})();(async()=>{const t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\tselect judul, label, isi\n\t\t\tfrom database_${$}\n\t\t\twhere slug = '${n}'\n\t\t`)));let e=await fetch(y,{method:"post",body:t}).then(t=>t.json());e=await e,a(1,l=e[0].judul),a(2,o=e[0].label),a(3,i=e[0].isi)})();return t.$$set=t=>{"slug"in t&&a(6,n=t.slug)},[s,l,o,i,u,async()=>{const t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\tupdate database_${$}\n\t\t\tset\n\t\t\t\tjudul = '${j(l)}',\n\t\t\t\tlabel = '${j(o)}',\n\t\t\t\tisi = '${j(i)}'\n\t\t\twhere slug = '${n}'\n\t\t`)));let e=await fetch(y,{method:"post",body:t});e=await e,e&&alert("Sudah diupdate")},n,function(){l=this.value,a(1,l)},function(){o=this.value,a(2,o)},t=>a(2,o=t.label),function(t){v[t?"unshift":"push"](()=>{s=t,a(0,s)})},function(){i=this.value,a(3,i)}]}export default class extends t{constructor(t){super(),e(this,t,F,E,a,{slug:6})}}