import{a as S,t as Y}from"../chunks/disclose-version.BfeiJZKn.js";import{i as U}from"../chunks/legacy.BR-clfff.js";import{T as Z,b as q,h as E,L as D,M as ee,G as te,B as ae,R as G,W as re,X as z,K as L,c as C,N as se,Y as I,Z as K,a as W,_ as ne,D as F,$ as ie,a0 as le,Q as oe,a1 as ce,d as ve,C as fe,a2 as ue,a3 as H,a4 as pe,a5 as de,a6 as ge,I as he,a7 as _e,a8 as me,p as be,e as ye,s as y,g as T,r as w,t as ke,m as Ee}from"../chunks/runtime.DBlyLp_i.js";import{d as xe,s as we}from"../chunks/render.Bb7b9Dq5.js";import{o as Ae}from"../chunks/index-client.CjYCXSLH.js";function Te(a,e){return e}function Ce(a,e,t,n){for(var o=[],c=e.length,v=0;v<c;v++)le(e[v].e,o,!0);var h=c>0&&o.length===0&&t!==null;if(h){var d=t.parentNode;oe(d),d.append(t),n.clear(),x(a,e[0].prev,e[c-1].next)}ce(o,()=>{for(var f=0;f<c;f++){var g=e[f];h||(n.delete(g.k),x(a,g.prev,g.next)),ve(g.e,!h)}})}function je(a,e,t,n,o,c=null){var v=a,h={flags:e,items:new Map,first:null};{var d=a;v=E?D(te(d)):d.appendChild(Z())}E&&ee();var f=null,g=!1;q(()=>{var r=t(),p=ae(r)?r:r==null?[]:G(r),s=p.length;if(g&&s===0)return;g=s===0;let i=!1;if(E){var u=v.data===re;u!==(s===0)&&(v=z(),D(v),L(!1),i=!0)}if(E){for(var b=null,_,l=0;l<s;l++){if(C.nodeType===8&&C.data===se){v=C,i=!0,L(!1);break}var m=p[l],j=n(m,l);_=X(C,h,b,null,m,j,l,o,e),h.items.set(j,_),b=_}s>0&&D(z())}if(!E){var A=fe;Ie(p,h,v,o,e,(A.f&I)!==0,n)}c!==null&&(s===0?f?K(f):f=W(()=>c(v)):f!==null&&ne(f,()=>{f=null})),i&&L(!0)}),E&&(v=C)}function Ie(a,e,t,n,o,c,v,h){var d=a.length,f=e.items,g=e.first,r=g,p,s=null,i=[],u=[],b,_,l,m;for(m=0;m<d;m+=1){if(b=a[m],_=v(b,m),l=f.get(_),l===void 0){var j=r?r.e.nodes_start:t;s=X(j,e,s,s===null?e.first:s.next,b,_,m,n,o),f.set(_,s),i=[],u=[],r=s.next;continue}if(Ne(l,b,m),l.e.f&I&&K(l.e),l!==r){if(p!==void 0&&p.has(l)){if(i.length<u.length){var A=u[0],k;s=A.prev;var R=i[0],N=i[i.length-1];for(k=0;k<i.length;k+=1)$(i[k],A,t);for(k=0;k<u.length;k+=1)p.delete(u[k]);x(e,R.prev,N.next),x(e,s,R),x(e,N,A),r=A,s=N,m-=1,i=[],u=[]}else p.delete(l),$(l,r,t),x(e,l.prev,l.next),x(e,l,s===null?e.first:s.next),x(e,s,l),s=l;continue}for(i=[],u=[];r!==null&&r.k!==_;)(c||!(r.e.f&I))&&(p??(p=new Set)).add(r),u.push(r),r=r.next;if(r===null)continue;l=r}i.push(l),s=l,r=l.next}if(r!==null||p!==void 0){for(var M=p===void 0?[]:G(p);r!==null;)(c||!(r.e.f&I))&&M.push(r),r=r.next;var J=M.length;if(J>0){var Q=d===0?t:null;Ce(e,M,Q,f)}}F.first=e.first&&e.first.e,F.last=s&&s.e}function Ne(a,e,t,n){ie(a.v,e),a.i=t}function X(a,e,t,n,o,c,v,h,d,f){var g=(d&de)!==0,r=(d&ge)===0,p=g?r?ue(o):H(o):o,s=d&pe?H(v):v,i={i:s,v:p,k:c,a:null,e:null,prev:t,next:n};try{return i.e=W(()=>h(a,p,s),E),i.e.prev=t&&t.e,i.e.next=n&&n.e,t===null?e.first=i:(t.next=i,t.e.next=i.e),n!==null&&(n.prev=i,n.e.prev=i.e),i}finally{}}function $(a,e,t){for(var n=a.next?a.next.e.nodes_start:t,o=e?e.e.nodes_start:t,c=a.e.nodes_start;c!==n;){var v=he(c);o.before(c),c=v}}function x(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function O(a,e,t,n){var o=a.__attributes??(a.__attributes={});E&&(o[e]=a.getAttribute(e),a.nodeName==="LINK")||o[e]!==(o[e]=t)&&(t==null?a.removeAttribute(e):typeof t!="string"&&Me(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var V=new Map;function Me(a){var e=V.get(a.nodeName);if(e)return e;V.set(a.nodeName,e=[]);for(var t,n=a,o=Element.prototype;o!==n;){t=me(n);for(var c in t)t[c].set&&e.push(c);n=_e(n)}return e}function De(a,e,t){{if(a.classList.contains(e))return;a.classList.add(e)}}const Le=!0,tt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"})),Be="albz-webzcards",Re="1.3.1",Se="module",ze={dev:"vite dev",build:"vite build",preview:"vite preview",check:"svelte-kit sync && svelte-check --tsconfig ./jsconfig.json","check:watch":"svelte-kit sync && svelte-check --tsconfig ./jsconfig.json --watch",deploy:"npm run version:patch && npm run build && touch build/.nojekyll && gh-pages -d build -t true","version:patch":"npm version patch && git push && git push --tags","version:minor":"npm version minor && git push && git push --tags","version:major":"npm version major && git push && git push --tags"},Fe={"@sveltejs/adapter-auto":"^3.0.0","@sveltejs/adapter-static":"^3.0.6","@sveltejs/kit":"^2.9.0","@sveltejs/vite-plugin-svelte":"^5.0.0","gh-pages":"^6.2.0",svelte:"^5.0.0","svelte-check":"^4.0.0",typescript:"^5.0.0",vite:"^6.0.0"},He={name:Be,private:!0,version:Re,type:Se,scripts:ze,devDependencies:Fe};let $e="alBz",Oe="Fullstack DevLover",P="cv_2025_eng_albz.pdf",Ve="https://github.com/AlbertoBarrago?tab=repositories&catx=736&caty=799&catdx=1208&catdy=890&type=public",Pe="Building digital experiences that matter",Ye=["Team Leadership","Cloud Solutions","Frontend Development","Backend Architecture"],Ge=He.version,Ke="albertobarrago@gmail.com";const We=`mailto:${Ke}`,B=()=>{const a=document.createElement("a");a.href=P,a.download=P,a.dispatchEvent(new MouseEvent("click"))};var Xe=Y('<span class="skill-tag"> </span>'),Je=Y(`<main class="container"><div id="particles-js"></div> <section class="hero"><div class="content"><img src="https://github.com/albertobarrago.png" alt="alBz (Alberto Barrago)" class="profile-image"> <h1></h1> <h2></h2> <p class="tagline"></p> <div class="skills"></div> <button class="btn cta_download">Download CV</button> <div class="cta"><a target="_blank" class="btn primary">View
                    Projects</a> <a class="btn secondary">Get in Touch</a></div></div> <footer><small></small></footer></section></main>`);function at(a,e){be(e,!1),Ae(()=>{particlesJS.load("particles-js","./particles-config.json");const u=document.createElement("script");u.src="/oneko.js",u.async=!0,document.body.appendChild(u),console.log("%c🚀 Portfolio loaded!","background: #FF1E1E; color: white; padding: 8px; border-radius: 4px; font-weight: bold;"),console.log("%c👋 Welcome to my interactive space","color: #1E90FF; font-size: 14px; font-weight: bold;")}),U();var t=Je(),n=y(T(t),2),o=T(n);De(o,"visible");var c=y(T(o),2);c.textContent=$e;var v=y(c,2);v.textContent=Oe;var h=y(v,2);h.textContent=Pe;var d=y(h,2);je(d,5,()=>Ye,Te,(u,b)=>{var _=Xe(),l=T(_,!0);w(_),ke(()=>we(l,Ee(b))),S(u,_)}),w(d);var f=y(d,2);f.__click=function(...u){B==null||B.apply(this,u)};var g=y(f,2),r=T(g);O(r,"href",Ve);var p=y(r,2);O(p,"href",We),w(g),w(o);var s=y(o,2),i=T(s);i.textContent=Ge,w(s),w(n),w(t),S(a,t),ye()}xe(["click"]);export{at as component,tt as universal};
