import{a as O,t as J}from"../chunks/disclose-version.CxUW2y-t.js";import{i as q}from"../chunks/legacy.CoFsy4In.js";import{T as ee,b as ae,h as w,L as H,M as te,G as re,B as se,R as Q,W as ne,X as z,K as V,c as M,N as ie,Y as B,Z as U,a as W,_ as le,D as Y,$ as oe,a0 as ce,Q as fe,a1 as ve,d as ue,C as de,a2 as pe,a3 as $,a4 as _e,a5 as he,a6 as ge,I as me,a7 as be,a8 as Ee,p as ye,t as F,e as ke,a9 as xe,s as x,g as N,r as T,aa as we,m as G}from"../chunks/runtime.Dx16Mu-e.js";import{d as Ae,s as Ce}from"../chunks/render.j4DQIzPf.js";import{o as Te}from"../chunks/index-client.RTdWl4kE.js";function Ie(t,e){return e}function Ne(t,e,a,l){for(var o=[],c=e.length,f=0;f<c;f++)ce(e[f].e,o,!0);var g=c>0&&o.length===0&&a!==null;if(g){var _=a.parentNode;fe(_),_.append(a),l.clear(),A(t,e[0].prev,e[c-1].next)}ve(o,()=>{for(var v=0;v<c;v++){var h=e[v];g||(l.delete(h.k),A(t,h.prev,h.next)),ue(h.e,!g)}})}function Le(t,e,a,l,o,c=null){var f=t,g={flags:e,items:new Map,first:null};{var _=t;f=w?H(re(_)):_.appendChild(ee())}w&&te();var v=null,h=!1;ae(()=>{var r=a(),u=se(r)?r:r==null?[]:Q(r),s=u.length;if(h&&s===0)return;h=s===0;let n=!1;if(w){var d=f.data===ne;d!==(s===0)&&(f=z(),H(f),V(!1),n=!0)}if(w){for(var y=null,m,i=0;i<s;i++){if(M.nodeType===8&&M.data===ie){f=M,n=!0,V(!1);break}var p=u[i],C=l(p,i);m=Z(M,g,y,null,p,C,i,o,e),g.items.set(C,m),y=m}s>0&&H(z())}if(!w){var k=de;Me(u,g,f,o,e,(k.f&B)!==0,l)}c!==null&&(s===0?v?U(v):v=W(()=>c(f)):v!==null&&le(v,()=>{v=null})),n&&V(!0)}),w&&(f=M)}function Me(t,e,a,l,o,c,f,g){var _=t.length,v=e.items,h=e.first,r=h,u,s=null,n=[],d=[],y,m,i,p;for(p=0;p<_;p+=1){if(y=t[p],m=f(y,p),i=v.get(m),i===void 0){var C=r?r.e.nodes_start:a;s=Z(C,e,s,s===null?e.first:s.next,y,m,p,l,o),v.set(m,s),n=[],d=[],r=s.next;continue}if(Se(i,y,p),i.e.f&B&&U(i.e),i!==r){if(u!==void 0&&u.has(i)){if(n.length<d.length){var k=d[0],b;s=k.prev;var S=n[0],I=n[n.length-1];for(b=0;b<n.length;b+=1)K(n[b],k,a);for(b=0;b<d.length;b+=1)u.delete(d[b]);A(e,S.prev,I.next),A(e,s,S),A(e,I,k),r=k,s=I,p-=1,n=[],d=[]}else u.delete(i),K(i,r,a),A(e,i.prev,i.next),A(e,i,s===null?e.first:s.next),A(e,s,i),s=i;continue}for(n=[],d=[];r!==null&&r.k!==m;)(c||!(r.e.f&B))&&(u??(u=new Set)).add(r),d.push(r),r=r.next;if(r===null)continue;i=r}n.push(i),s=i,r=i.next}if(r!==null||u!==void 0){for(var L=u===void 0?[]:Q(u);r!==null;)(c||!(r.e.f&B))&&L.push(r),r=r.next;var E=L.length;if(E>0){var D=_===0?a:null;Ne(e,L,D,v)}}Y.first=e.first&&e.first.e,Y.last=s&&s.e}function Se(t,e,a,l){oe(t.v,e),t.i=a}function Z(t,e,a,l,o,c,f,g,_,v){var h=(_&he)!==0,r=(_&ge)===0,u=h?r?pe(o):$(o):o,s=_&_e?$(f):f,n={i:s,v:u,k:c,a:null,e:null,prev:a,next:l};try{return n.e=W(()=>g(t,u,s),w),n.e.prev=a&&a.e,n.e.next=l&&l.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),l!==null&&(l.prev=n,l.e.prev=n.e),n}finally{}}function K(t,e,a){for(var l=t.next?t.next.e.nodes_start:a,o=e?e.e.nodes_start:a,c=t.e.nodes_start;c!==l;){var f=me(c);o.before(c),c=f}}function A(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function P(t,e,a,l){var o=t.__attributes??(t.__attributes={});w&&(o[e]=t.getAttribute(e),t.nodeName==="LINK")||o[e]!==(o[e]=a)&&(a==null?t.removeAttribute(e):typeof a!="string"&&Be(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var X=new Map;function Be(t){var e=X.get(t.nodeName);if(e)return e;X.set(t.nodeName,e=[]);for(var a,l=t,o=Element.prototype;o!==l;){a=Ee(l);for(var c in a)a[c].set&&e.push(c);l=be(l)}return e}function De(t,e,a){if(a){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}const Re=!0,Ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:Re},Symbol.toStringTag,{value:"Module"}));var He=J('<span class="skill-tag"> </span>'),Ve=J(`<main class="container"><div id="particles-js"></div> <section class="hero"><div class="content"><img src="https://github.com/albertobarrago.png" alt="alBz (Alberto Barrago)" class="profile-image"> <h1></h1> <h2></h2> <p class="tagline"></p> <div class="skills"></div> <button class="btn cta_download">Download CV</button> <div class="cta"><a target="_blank" class="btn primary">View
                    Projects</a> <a class="btn secondary">Get in Touch</a></div></div> <footer><small></small></footer></section></main>`);function Ke(t,e){ye(e,!1);let a="alBz",l="Senior Fullstack Developer",o="albertobarrago_cv_2024.pdf",c="https://github.com/AlbertoBarrago?tab=repositories",f="Building digital experiences that matter",g=["Frontend Development","Backend Architecture","Cloud Solutions","Team Leadership"],_="v1.2.0",v="albertobarrago@gmail.com",h=we(!1);const r=()=>{const E=document.createElement("a");E.href=o,E.download=o,E.dispatchEvent(new MouseEvent("click"))},u=`mailto:${v}`;Te(()=>{xe(h,!0),particlesJS.load("particles-js","./particles-config.json");const E=document.createElement("script");E.src="/oneko.js",E.async=!0,document.body.appendChild(E)}),q();var s=Ve(),n=x(N(s),2),d=N(n),y=x(N(d),2);y.textContent=a;var m=x(y,2);m.textContent=l;var i=x(m,2);i.textContent=f;var p=x(i,2);Le(p,5,()=>g,Ie,(E,D)=>{var R=He(),j=N(R,!0);T(R),F(()=>Ce(j,G(D))),O(E,R)}),T(p);var C=x(p,2);C.__click=r;var k=x(C,2),b=N(k);P(b,"href",c);var S=x(b,2);P(S,"href",u),T(k),T(d);var I=x(d,2),L=N(I);L.textContent=_,T(I),T(n),T(s),F(()=>De(d,"visible",G(h))),O(t,s),ke()}Ae(["click"]);export{Ke as component,Ge as universal};
