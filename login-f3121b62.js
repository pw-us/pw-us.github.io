import{S as s,i as a,s as t,e as o,a as e,f as n,b as r,c,j as u,l as i,p as l,n as p,g as f,r as m,k as d,q as b,o as h,m as w,A as j,u as k}from"./main-c8e3d55f.js";import{a as y,s as g}from"./api-80ecb004.js";import{c as q}from"./tools-c085b23f.js";function v(s){let a,t,d,b,h,w;return{c(){a=o("form"),t=o("div"),d=o("input"),b=e(),n(d,"type","password"),n(d,"class","form-control"),n(d,"placeholder","Masukkan password"),d.required=!0,n(t,"class","form-group"),document.title="Login"},m(o,e){r(o,a,e),c(a,t),c(t,d),s[3](d),u(d,s[0]),r(o,b,e),h||(w=[i(d,"input",s[4]),i(a,"submit",l(s[2]))],h=!0)},p(s,[a]){1&a&&d.value!==s[0]&&u(d,s[0])},i:p,o:p,d(t){t&&f(a),s[3](null),t&&f(b),h=!1,m(w)}}}function x(s,a,t){let o,e;d(s,h,s=>t(5,o=s)),d(s,w,s=>t(6,e=s));let n,r="";b(()=>n.focus());return[r,n,async()=>{let s=new FormData;s.append("sql",btoa(btoa(`\n\t select count(*) as banyak\n\t from database_${y}\n\t where password = "${q(r)}"\n\t`)));let a=await fetch(g,{method:"post",body:s}).then(s=>s.json());a=await a,a[0].banyak>0?(localStorage.setItem("password",r),j(h,o=!0,o),e("/")):t(0,r="")},function(s){k[s?"unshift":"push"](()=>{n=s,t(1,n)})},function(){r=this.value,t(0,r)}]}export default class extends s{constructor(s){super(),a(this,s,x,v,t,{})}}
