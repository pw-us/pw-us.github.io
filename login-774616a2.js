import{S as s,i as a,s as t,e,a as o,c as n,d as r,f as u,k as c,l as i,p as l,n as d,h as p,r as f,m,u as h,q as w,o as b,B as k,v as y}from"./main-077abd67.js";import{b as v,f as g,c as j,s as q}from"./index-ee02dc57.js";function x(s){let a,t,m,h,w,b;return{c(){a=e("form"),t=e("div"),m=e("input"),h=o(),n(m,"type","password"),n(m,"class","form-control"),n(m,"placeholder","Masukkan password"),m.required=!0,n(t,"class","form-group"),document.title="Login"},m(e,o){r(e,a,o),u(a,t),u(t,m),s[3](m),c(m,s[0]),r(e,h,o),w||(b=[i(m,"input",s[4]),i(a,"submit",l(s[2]))],w=!0)},p(s,[a]){1&a&&m.value!==s[0]&&c(m,s[0])},i:d,o:d,d(t){t&&p(a),s[3](null),t&&p(h),w=!1,f(b)}}}function S(s,a,t){let e,o;m(s,w,s=>t(5,e=s)),m(s,b,s=>t(6,o=s));let n,r="";h(()=>n.focus());return[r,n,async()=>{let s=new FormData;s.append("sql",v(`\n\t select count(*) as banyak\n\t from database_${g}\n\t where password = "${j(r)}"\n\t`));let a=await fetch(q,{method:"post",body:s}).then(s=>s.json());a=await a,a[0].banyak>0?(localStorage.setItem("password",r),k(w,e=!0,e),o("/")):t(0,r="")},function(s){y[s?"unshift":"push"](()=>{n=s,t(1,n)})},function(){r=this.value,t(0,r)}]}export default class extends s{constructor(s){super(),a(this,s,S,x,t,{})}}