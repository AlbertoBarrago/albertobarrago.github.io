import{a as R,t as X}from"../chunks/disclose-version.CQ4WaCTx.js";import{i as Q}from"../chunks/legacy.3JIE_7zh.js";import{T as U,b as W,h as y,L as N,M as Z,G as q,B as ee,R as $,W as ae,X as H,K as S,c as T,N as te,Y as L,Z as j,a as z,_ as re,D as O,$ as se,a0 as le,Q as ne,a1 as ie,d as oe,C as fe,a2 as ve,a3 as V,a4 as ce,a5 as ue,a6 as de,I as pe,p as he,t as Y,e as _e,a7 as be,s as I,g as w,r as C,a8 as ge,a9 as me,m as G}from"../chunks/runtime.nBjwh4wX.js";import{s as Ae}from"../chunks/render.3UHJUi5x.js";import{o as xe}from"../chunks/index-client.CnrvGyil.js";function ye(l,e){return e}function Ee(l,e,a,f){for(var u=[],o=e.length,i=0;i<o;i++)le(e[i].e,u,!0);var h=o>0&&u.length===0&&a!==null;if(h){var d=a.parentNode;ne(d),d.append(a),f.clear(),A(l,e[0].prev,e[o-1].next)}ie(u,()=>{for(var v=0;v<o;v++){var p=e[v];h||(f.delete(p.k),A(l,p.prev,p.next)),oe(p.e,!h)}})}function Te(l,e,a,f,u,o=null){var i=l,h={flags:e,items:new Map,first:null};{var d=l;i=y?N(q(d)):d.appendChild(U())}y&&Z();var v=null,p=!1;W(()=>{var t=a(),c=ee(t)?t:t==null?[]:$(t),r=c.length;if(p&&r===0)return;p=r===0;let s=!1;if(y){var _=i.data===ae;_!==(r===0)&&(i=H(),N(i),S(!1),s=!0)}if(y){for(var x=null,g,n=0;n<r;n++){if(T.nodeType===8&&T.data===te){i=T,s=!0,S(!1);break}var b=c[n],k=f(b,n);g=F(T,h,x,null,b,k,n,u,e),h.items.set(k,g),x=g}r>0&&N(H())}if(!y){var E=fe;Ce(c,h,i,u,e,(E.f&L)!==0,f)}o!==null&&(r===0?v?j(v):v=z(()=>o(i)):v!==null&&re(v,()=>{v=null})),s&&S(!0)}),y&&(i=T)}function Ce(l,e,a,f,u,o,i,h){var d=l.length,v=e.items,p=e.first,t=p,c,r=null,s=[],_=[],x,g,n,b;for(b=0;b<d;b+=1){if(x=l[b],g=i(x,b),n=v.get(g),n===void 0){var k=t?t.e.nodes_start:a;r=F(k,e,r,r===null?e.first:r.next,x,g,b,f,u),v.set(g,r),s=[],_=[],t=r.next;continue}if(ke(n,x,b),n.e.f&L&&j(n.e),n!==t){if(c!==void 0&&c.has(n)){if(s.length<_.length){var E=_[0],m;r=E.prev;var D=s[0],B=s[s.length-1];for(m=0;m<s.length;m+=1)P(s[m],E,a);for(m=0;m<_.length;m+=1)c.delete(_[m]);A(e,D.prev,B.next),A(e,r,D),A(e,B,E),t=E,r=B,b-=1,s=[],_=[]}else c.delete(n),P(n,t,a),A(e,n.prev,n.next),A(e,n,r===null?e.first:r.next),A(e,r,n),r=n;continue}for(s=[],_=[];t!==null&&t.k!==g;)(o||!(t.e.f&L))&&(c??(c=new Set)).add(t),_.push(t),t=t.next;if(t===null)continue;n=t}s.push(n),r=n,t=n.next}if(t!==null||c!==void 0){for(var M=c===void 0?[]:$(c);t!==null;)(o||!(t.e.f&L))&&M.push(t),t=t.next;var J=M.length;if(J>0){var K=d===0?a:null;Ee(e,M,K,v)}}O.first=e.first&&e.first.e,O.last=r&&r.e}function ke(l,e,a,f){se(l.v,e),l.i=a}function F(l,e,a,f,u,o,i,h,d,v){var p=(d&ue)!==0,t=(d&de)===0,c=p?t?ve(u):V(u):u,r=d&ce?V(i):i,s={i:r,v:c,k:o,a:null,e:null,prev:a,next:f};try{return s.e=z(()=>h(l,c,r),y),s.e.prev=a&&a.e,s.e.next=f&&f.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),f!==null&&(f.prev=s,f.e.prev=s.e),s}finally{}}function P(l,e,a){for(var f=l.next?l.next.e.nodes_start:a,u=e?e.e.nodes_start:a,o=l.e.nodes_start;o!==f;){var i=pe(o);u.before(o),o=i}}function A(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Ie(l,e,a){if(a){if(l.classList.contains(e))return;l.classList.add(e)}else{if(!l.classList.contains(e))return;l.classList.remove(e)}}const we=!0,He=Object.freeze(Object.defineProperty({__proto__:null,prerender:we},Symbol.toStringTag,{value:"Module"}));var Le=X('<span class="skill-tag svelte-1ef9e0b"> </span>'),Be=X(`<main class="container svelte-1ef9e0b"><div id="particles-js" class="svelte-1ef9e0b"></div> <section class="hero svelte-1ef9e0b"><div class="content svelte-1ef9e0b"><img src="https://github.com/albertobarrago.png" alt="Alberto Barrago" class="profile-image svelte-1ef9e0b"> <h1 class="svelte-1ef9e0b"></h1> <h2 class="svelte-1ef9e0b"></h2> <p class="tagline svelte-1ef9e0b">Building digital experiences that matter</p> <div class="skills svelte-1ef9e0b"></div> <div class="cta svelte-1ef9e0b"><a href="https://github.com/AlbertoBarrago?tab=repositories" target="_blank" class="btn primary svelte-1ef9e0b">View Projects</a> <a href="mailto:albertobarrago@gmail.com?subject=Let's%20Collaborate&amp;body=Hi%20Alberto%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0ABest%20regards%2C%0AYour%20Name" class="btn secondary svelte-1ef9e0b">Get in Touch</a></div></div></section></main>`);function Oe(l,e){he(e,!1);let a="Alberto Barrago",f="Senior Developer",u=["Frontend Development","Backend Architecture","Cloud Solutions","Team Leadership"],o=me(!1);xe(()=>{be(o,!0),particlesJS.load("particles-js","./particles-config.json")}),Q();var i=Be(),h=I(w(i),2),d=w(h),v=I(w(d),2);v.textContent=a;var p=I(v,2);p.textContent=f;var t=I(p,4);Te(t,5,()=>u,ye,(c,r)=>{var s=Le(),_=w(s,!0);C(s),Y(()=>Ae(_,G(r))),R(c,s)}),C(t),ge(2),C(d),C(h),C(i),Y(()=>Ie(d,"visible",G(o))),R(l,i),_e()}export{Oe as component,He as universal};