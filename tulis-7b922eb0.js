import{S as t,i as e,s as a,e as s,d as l,h as n,a as i,c as o,f as u,k as r,l as c,p as d,n as f,j as p,r as m,m as b,u as h,o as v,v as g}from"./main-87be15f1.js";import{d as w,s as _,b as y,e as $,c as j,t as x}from"./index-dd6f3340.js";function q(t,e,a){const s=t.slice();return s[13]=e[a],s}function L(t){let e,a;return{c(){e=s("option"),e.__value=a=t[13].label,e.value=e.__value},m(t,a){l(t,e,a)},p(t,s){16&s&&a!==(a=t[13].label)&&(e.__value=a,e.value=e.__value)},d(t){t&&n(e)}}}function D(t){let e,a,b,h,v,g,w,_,y,$,j,x,D,F,H,T,k=t[4],z=[];for(let e=0;e<k.length;e+=1)z[e]=L(q(t,k,e));return{c(){e=s("form"),a=s("div"),b=s("input"),h=i(),v=s("div"),g=s("input"),w=i(),_=s("datalist");for(let t=0;t<z.length;t+=1)z[t].c();y=i(),$=s("div"),j=s("textarea"),x=i(),D=s("div"),D.innerHTML='<input type="submit" value="Publish" class="btn btn-success"/>',F=i(),o(b,"class","form-control"),b.required=!0,o(b,"placeholder","Judul"),o(a,"class","mb-3"),o(g,"class","form-control"),g.required=!0,o(g,"placeholder","Label"),o(g,"list","label"),o(v,"class","mb-3"),o(_,"id","label"),o(j,"class","form-control"),o(j,"placeholder","Isi"),o($,"class","mb-3"),o(D,"class","mb-3"),document.title="Tulis"},m(s,n){l(s,e,n),u(e,a),u(a,b),r(b,t[1]),u(e,h),u(e,v),u(v,g),r(g,t[2]),u(e,w),u(e,_);for(let t=0;t<z.length;t+=1)z[t].m(_,null);u(e,y),u(e,$),u($,j),t[8](j),r(j,t[3]),u(e,x),u(e,D),l(s,F,n),H||(T=[c(b,"input",t[6]),c(g,"input",t[7]),c(j,"input",t[9]),c(e,"submit",d(t[5]))],H=!0)},p(t,[e]){if(2&e&&b.value!==t[1]&&r(b,t[1]),4&e&&g.value!==t[2]&&r(g,t[2]),16&e){let a;for(k=t[4],a=0;a<k.length;a+=1){const s=q(t,k,a);z[a]?z[a].p(s,e):(z[a]=L(s),z[a].c(),z[a].m(_,null))}for(;a<z.length;a+=1)z[a].d(1);z.length=k.length}8&e&&r(j,t[3])},i:f,o:f,d(a){a&&n(e),p(z,a),t[8](null),a&&n(F),H=!1,m(T)}}}function F(t,e,a){let s,l;b(t,v,t=>a(10,s=t));let[n,i,o,u]=["","","",[]];h(()=>(()=>{const t=()=>a(0,l.style.height=window.innerHeight-250+"px",l);t(),window.addEventListener("resize",t)})());(async()=>{const t=new FormData;t.append("sql",btoa(btoa(`\n\t\t\tselect distinct label\n\t\t\tfrom database_${w}\n\t\t\torder by label\n\t\t`)));let e=await fetch(_,{method:"post",body:t}).then(t=>t.json());e=await e,a(4,u=e)})();return[l,n,i,o,u,async()=>{const t=new FormData;t.append("sql",y(`\n\t\t\tinsert into database_${w} (slug, judul, tanggal, isi, label)\n\t\t\tvalues ("${$(n)}", "${j(n)}", "${x()}", "${j(o)}", "${j(i).toLowerCase().replace(/ /g,"-")}")\n\t\t`));let e=await fetch(_,{method:"post",body:t});e=await e,e&&s("/admin/edit/"+$(n))},function(){n=this.value,a(1,n)},function(){i=this.value,a(2,i)},function(t){g[t?"unshift":"push"](()=>{l=t,a(0,l)})},function(){o=this.value,a(3,o)}]}export default class extends t{constructor(t){super(),e(this,t,F,D,a,{})}}
