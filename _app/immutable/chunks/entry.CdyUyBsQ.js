var Kt=t=>{throw TypeError(t)};var Oe=(t,e,n)=>e.has(t)||Kt("Cannot "+n);var b=(t,e,n)=>(Oe(t,e,"read from private field"),n?n.call(t):e.get(t)),L=(t,e,n)=>e.has(t)?Kt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{n as Et,az as Ne,ay as P,m as C,ad as O,ax as je}from"./runtime.DBlyLp_i.js";import{o as zt}from"./index-client.CjYCXSLH.js";new URL("sveltekit-internal://");function $e(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function De(t){return t.split("%25").map(decodeURI).join("%25")}function Fe(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Rt({href:t}){return t.split("#")[0]}const Ve=["href","pathname","search","toString","toJSON"];function Be(t,e,n){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(n(s),a[o](s));e();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of Ve)Object.defineProperty(r,a,{get(){return e(),t[a]},enumerable:!0,configurable:!0});return r}const qe="/__data.json",Ge=".html__data.json";function Me(t){return t.endsWith(".html")?t.replace(/\.html$/,Ge):t.replace(/\/$/,"")+qe}function He(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Ke(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const ce=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&z.delete(Ct(t)),ce(t,e));const z=new Map;function ze(t,e){const n=Ct(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&z.set(n,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ke(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,e)}function We(t,e,n){if(z.size>0){const r=Ct(t,n),a=z.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);z.delete(r)}}return window.fetch(e,n)}function Ct(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${He(...a)}"]`}return r}const Ye=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Je(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ze(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return e.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return It(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return It(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Ye.exec(c),[,h,y,u,g]=d;return e.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return It(c)}).join("")}).join("")}/?$`),params:e}}function Xe(t){return!/^\([^)]+\)$/.test(t)}function Ze(t){return t.slice(1).split("/").filter(Xe)}function Qe(t,e,n){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<e.length;s+=1){const c=e[s];let l=a[s-i];if(c.chained&&c.rest&&i&&(l=a.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=e[s+1],h=a[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function It(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function tn({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Je(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return Qe(f,y,r)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function le(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Wt(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}const V=[];function Ot(t,e=Et){let n=null;const r=new Set;function a(s){if(Ne(t,s)&&(t=s,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,t);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function o(s){a(s(t))}function i(s,c=Et){const l=[s,c];return r.add(l),r.size===1&&(n=e(a,o)||Et),s(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:i}}var re;const x=((re=globalThis.__sveltekit_e1bxap)==null?void 0:re.base)??"";var ae;const en=((ae=globalThis.__sveltekit_e1bxap)==null?void 0:ae.assets)??x,nn="1737551354885",fe="sveltekit:snapshot",ue="sveltekit:scroll",de="sveltekit:states",rn="sveltekit:pageurl",G="sveltekit:history",Y="sveltekit:navigation",ut={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},lt=location.origin;function he(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Nt(){return{x:pageXOffset,y:pageYOffset}}function B(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const Yt={...ut,"":ut.hover};function pe(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ge(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=pe(t)}}function xt(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!r||wt(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(n==null?void 0:n.origin)===lt&&t.hasAttribute("download");return{url:n,external:a,target:r,download:o}}function dt(t){let e=null,n=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=B(s,"preload-code")),a===null&&(a=B(s,"preload-data")),e===null&&(e=B(s,"keepfocus")),n===null&&(n=B(s,"noscroll")),o===null&&(o=B(s,"reload")),i===null&&(i=B(s,"replacestate")),s=pe(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Yt[r??"off"],preload_data:Yt[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(o),replace_state:c(i)}}function Jt(t){const e=Ot(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function o(i){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}const me={v:()=>{}};function an(){const{set:t,subscribe:e}=Ot(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${en}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==nn;return i&&(t(!0),me.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function wt(t,e){return t.origin!==lt||!t.pathname.startsWith(e)}function Xt(t){const e=sn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const on="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function sn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=on.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const cn=-1,ln=-2,fn=-3,un=-4,dn=-5,hn=-6;function pn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(o,i=!1){if(o===cn)return;if(o===fn)return NaN;if(o===un)return 1/0;if(o===dn)return-1/0;if(o===hn)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=n[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=e==null?void 0:e[c];if(l)return r[o]=l(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<s.length;u+=1)d.add(a(s[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<s.length;u+=2)h.set(a(s[u]),a(s[u+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=a(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=Xt(g),p=new u(f);r[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Xt(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==ln&&(c[l]=a(d))}}else{const c={};r[o]=c;for(const l in s){const d=s[l];c[l]=a(d)}}return r[o]}return a(0)}const ye=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ye];const gn=new Set([...ye]);[...gn];function mn(t){return t.filter(e=>e!=null)}class vt{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class _e{constructor(e,n){this.status=e,this.location=n}}class jt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const yn="x-sveltekit-invalidated",_n="x-sveltekit-trailing-slash";function ht(t){return t instanceof vt||t instanceof jt?t.status:500}function wn(t){return t instanceof jt?t.text:"Internal Error"}let A,J,Ut;const vn=zt.toString().includes("$$")||/function \w+\(\) \{\}/.test(zt.toString());var Q,tt,et,nt,rt,at,ot,st,oe,it,se,ct,ie;vn?(A={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},J={current:null},Ut={current:!1}):(A=new(oe=class{constructor(){L(this,Q,P({}));L(this,tt,P(null));L(this,et,P(null));L(this,nt,P({}));L(this,rt,P({id:null}));L(this,at,P({}));L(this,ot,P(-1));L(this,st,P(new URL("https://example.com")))}get data(){return C(b(this,Q))}set data(e){O(b(this,Q),e)}get form(){return C(b(this,tt))}set form(e){O(b(this,tt),e)}get error(){return C(b(this,et))}set error(e){O(b(this,et),e)}get params(){return C(b(this,nt))}set params(e){O(b(this,nt),e)}get route(){return C(b(this,rt))}set route(e){O(b(this,rt),e)}get state(){return C(b(this,at))}set state(e){O(b(this,at),e)}get status(){return C(b(this,ot))}set status(e){O(b(this,ot),e)}get url(){return C(b(this,st))}set url(e){O(b(this,st),e)}},Q=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,oe),J=new(se=class{constructor(){L(this,it,P(null))}get current(){return C(b(this,it))}set current(e){O(b(this,it),e)}},it=new WeakMap,se),Ut=new(ie=class{constructor(){L(this,ct,P(!1))}get current(){return C(b(this,ct))}set current(e){O(b(this,ct),e)}},ct=new WeakMap,ie),me.v=()=>Ut.current=!0);function bn(t){Object.assign(A,t)}const An=new Set(["icon","shortcut icon","apple-touch-icon"]),D=le(ue)??{},X=le(fe)??{},j={url:Jt({}),page:Jt({}),navigating:Ot(null),updated:an()};function $t(t){D[t]=Nt()}function kn(t,e){let n=t+1;for(;D[n];)delete D[n],n+=1;for(n=e+1;X[n];)delete X[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function we(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function Zt(){}let bt,Lt,pt,N,Pt,F;const ve=[],gt=[];let U=null;const be=[],Sn=[];let q=[],_={branch:[],error:null,url:null},Dt=!1,mt=!1,Qt=!0,Z=!1,K=!1,Ae=!1,Ft=!1,Vt,I,T,yt;const W=new Set;async function Vn(t,e,n){var a,o,i,s;document.URL!==location.href&&(location.href=location.href),F=t,await((o=(a=t.hooks).init)==null?void 0:o.call(a)),bt=tn(t),N=document.documentElement,Pt=e,Lt=t.nodes[0],pt=t.nodes[1],Lt(),pt(),I=(i=history.state)==null?void 0:i[G],T=(s=history.state)==null?void 0:s[Y],I||(I=T=Date.now(),history.replaceState({...history.state,[G]:I,[Y]:T},""));const r=D[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Pn(Pt,n):xn(location.href,{replaceState:!0}),Ln()}function En(){ve.length=0,Ft=!1}function ke(t){gt.some(e=>e==null?void 0:e.snapshot)&&(X[t]=gt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Se(t){var e;(e=X[t])==null||e.forEach((n,r)=>{var a,o;(o=(a=gt[r])==null?void 0:a.snapshot)==null||o.restore(n)})}function te(){$t(I),Wt(ue,D),ke(T),Wt(fe,X)}async function Ee(t,e,n,r){return ft({type:"goto",url:he(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Ft=!0)}})}async function Rn(t){if(t.id!==(U==null?void 0:U.id)){const e={};W.add(e),U={id:t.id,token:e,promise:Ie({...t,preload:e}).then(n=>(W.delete(e),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function Tt(t){const e=bt.find(n=>n.exec(Ue(t)));e&&await Promise.all([...e.layouts,e.leaf].map(n=>n==null?void 0:n[1]()))}function Re(t,e,n){var o;_=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(A,t.props.page),Vt=new F.root({target:e,props:{...t.props,stores:j,components:gt},hydrate:n,sync:!1}),Se(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};q.forEach(i=>i(a)),mt=!0}function _t({url:t,params:e,branch:n,status:r,error:a,route:o,form:i}){let s="never";if(x&&(t.pathname===x||t.pathname===x+"/"))s="always";else for(const u of n)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=$e(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:o},props:{constructors:mn(n).map(u=>u.node.component),page:A}};i!==void 0&&(c.props.form=i);let l={},d=!A,h=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const g=n[u],f=_.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!_.url||t.href!==_.url.href||_.error!==a||i!==void 0&&i!==A.form||d)&&(c.props.page={error:a,params:e,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:A.data}),c}async function Bt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,n);c.dependencies.add(k)}};const g={route:new Proxy(a,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(r,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Be(n,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const E=new URL(k,n);return s&&u(E.href),E.origin===n.origin&&(k=E.href.slice(n.origin.length)),mt?We(k,E.href,p):ze(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),e()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function ee(t,e,n,r,a,o){if(Ft)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==_.params[i])return!0;for(const i of a.dependencies)if(ve.some(s=>s(new URL(i))))return!0;return!1}function qt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function In(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),o=e.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&n.delete(r)}return n}function ne({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:A,constructors:[]}}}async function Ie({id:t,invalidating:e,url:n,params:r,route:a,preload:o}){if((U==null?void 0:U.id)===t)return W.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=a,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?t!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=In(_.url,n);let g=!1;const f=l.map((m,v)=>{var $;const S=_.branch[v],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||ee(g,y,h,u,($=S.server)==null?void 0:$.uses,r));return R&&(g=!0),R});if(f.some(Boolean)){try{d=await Le(n,f)}catch(m){const v=await M(m,{url:n,params:r,route:{id:t}});return W.has(o)?ne({error:v,url:n,params:r,route:a}):At({status:ht(m),error:v,url:n,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let k=!1;const E=l.map(async(m,v)=>{var kt;if(!m)return;const S=_.branch[v],R=p==null?void 0:p[v];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!ee(k,y,h,u,(kt=S.universal)==null?void 0:kt.uses,r))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Bt({loader:m[1],url:n,params:r,route:a,parent:async()=>{var Ht;const Mt={};for(let St=0;St<v;St+=1)Object.assign(Mt,(Ht=await E[St])==null?void 0:Ht.data);return Mt},server_data_node:qt(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const w=[];for(let m=0;m<l.length;m+=1)if(l[m])try{w.push(await E[m])}catch(v){if(v instanceof _e)return{type:"redirect",location:v.location};if(W.has(o))return ne({error:await M(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let S=ht(v),R;if(p!=null&&p.includes(v))S=v.status??S,R=v.error;else if(v instanceof vt)R=v.body;else{if(await j.updated.check())return await we(),await H(n);R=await M(v,{params:r,url:n,route:{id:a.id}})}const $=await Un(m,w,i);return $?_t({url:n,params:r,branch:w.slice(0,$.idx).concat($.node),status:S,error:R,route:a}):await xe(n,{id:a.id},R,S)}else w.push(void 0);return _t({url:n,params:r,branch:w,status:200,error:null,route:a,form:e?void 0:null})}async function Un(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function At({status:t,error:e,url:n,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const l=await Le(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(n.origin!==lt||n.pathname!==location.pathname||Dt)&&await H(n)}const s=await Bt({loader:Lt,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:qt(o)}),c={node:await pt(),loader:pt,universal:null,server:null,data:null};return _t({url:n,params:a,branch:[s,c],status:t,error:e,route:null})}function Gt(t,e){if(!t||wt(t,x))return;let n;try{n=F.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=Ue(n);for(const a of bt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:e,route:a,params:Fe(o),url:t}}}function Ue(t){return De(t.slice(x.length)||"/")}function Te({url:t,type:e,intent:n,delta:r}){let a=!1;const o=Ce(_,n,t,e);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Z||be.forEach(s=>s(i)),a?null:o}async function ft({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Zt,block:d=Zt}){const h=Gt(e,!1),y=Te({url:e,type:t,delta:n==null?void 0:n.delta,intent:h});if(!y){d();return}const u=I,g=T;l(),Z=!0,mt&&j.navigating.set(J.current=y.navigation),yt=c;let f=h&&await Ie(h);if(!f){if(wt(e,x))return await H(e);f=await xe(e,{id:null},await M(new jt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(h==null?void 0:h.url)||e,yt!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await At({status:500,error:await M(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return Ee(new URL(f.location,e).href,{},s+1,c),!1;else f.props.page.status>=400&&await j.updated.check()&&(await we(),await H(e));if(En(),$t(u),ke(g),f.props.page.url.pathname!==e.pathname&&(e.pathname=f.props.page.url.pathname),i=n?n.state:i,!n){const w=o?0:1,m={[G]:I+=w,[Y]:T+=w,[de]:i};(o?history.replaceState:history.pushState).call(history,m,"",e),o||kn(I,T)}if(U=null,f.props.page.state=i,mt){_=f.state,f.props.page&&(f.props.page.url=e);const w=(await Promise.all(Sn.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){q=q.filter(v=>!w.includes(v))};w.push(m),q.push(...w)}Vt.$set(f.props),bn(f.props.page),Ae=!0}else Re(f,Pt,!1);const{activeElement:p}=document;await je();const k=n?n.scroll:a?Nt():null;if(Qt){const w=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));k?scrollTo(k.x,k.y):w?w.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!r&&!E&&Cn(),Qt=!0,f.props.page&&Object.assign(A,f.props.page),Z=!1,t==="popstate"&&Se(T),y.fulfil(void 0),q.forEach(w=>w(y.navigation)),j.navigating.set(J.current=null)}async function xe(t,e,n,r){return t.origin===lt&&t.pathname===location.pathname&&!Dt?await At({status:r,error:n,url:t,route:e}):await H(t)}function Tn(){let t;N.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function e(o){o.defaultPrevented||r(o.composedPath()[0],1)}N.addEventListener("mousedown",e),N.addEventListener("touchstart",e,{passive:!0});const n=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(Tt(i.target.href),n.unobserve(i.target))},{threshold:0});function r(o,i){const s=ge(o,N);if(!s)return;const{url:c,external:l,download:d}=xt(s,x);if(l||d)return;const h=dt(s),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=Gt(c,!1);u&&Rn(u)}else i<=h.preload_code&&Tt(c.pathname)}function a(){n.disconnect();for(const o of N.querySelectorAll("a")){const{url:i,external:s,download:c}=xt(o,x);if(s||c)continue;const l=dt(o);l.reload||(l.preload_code===ut.viewport&&n.observe(o),l.preload_code===ut.eager&&Tt(i.pathname))}}q.push(a),a()}function M(t,e){if(t instanceof vt)return t.body;const n=ht(t),r=wn(t);return F.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function xn(t,e={}){return t=he(t),t.origin!==lt?Promise.reject(new Error("goto: invalid URL")):Ee(t,e,0)}function Ln(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(te(),!Z){const a=Ce(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};be.forEach(i=>i(o))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&te()}),(e=navigator.connection)!=null&&e.saveData||Tn(),N.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=ge(n.composedPath()[0],N);if(!r)return;const{url:a,external:o,target:i,download:s}=xt(r,x);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=dt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;const[d,h]=a.href.split("#"),y=d===Rt(location);if(o||c.reload&&(!y||!h)){Te({url:a,type:"link"})?Z=!0:n.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(n.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(K=!0,$t(I),t(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),ft({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),N.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(wt(s,x))return;const c=n.target,l=dt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),ft({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(yt={},a===I)return;const o=D[a],i=n.state[de]??{},s=new URL(n.state[rn]??location.href),c=n.state[Y],l=Rt(location)===Rt(_.url);if(c===T&&(Ae||l)){t(s),D[I]=Nt(),o&&scrollTo(o.x,o.y),i!==A.state&&(A.state=i,Vt.$set({page:A})),I=a;return}const h=a-I;await ft({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=a,T=c},block:()=>{history.go(-h)},nav_token:yt})}else if(!K){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[G]:++I,[Y]:T},"",location.href))});for(const n of document.querySelectorAll("link"))An.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&j.navigating.set(J.current=null)});function t(n){_.url=A.url=n,j.page.set({data:A.data,error:A.error,form:A.form,params:A.params,route:A.route,state:A.state,status:A.status,url:n}),j.page.notify()}}async function Pn(t,{status:e=200,error:n,node_ids:r,params:a,route:o,data:i,form:s}){Dt=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Gt(c,!1)||{});let l,d=!0;try{const h=r.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=Pe(p.uses)),Bt({loader:F.nodes[g],url:c,params:a,route:o,parent:async()=>{const k={};for(let E=0;E<f;E+=1)Object.assign(k,(await h[E]).data);return k},server_data_node:qt(p)})}),y=await Promise.all(h),u=bt.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=_t({url:c,params:a,branch:y,status:e,error:n,form:s,route:u??null})}catch(h){if(h instanceof _e){await H(new URL(h.location,location.href));return}l=await At({status:ht(h),error:await M(h,{url:c,params:a,route:o}),url:c,route:o}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),Re(l,t,d)}async function Le(t,e){var a;const n=new URL(t);n.pathname=Me(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(_n,"1"),n.searchParams.append(yn,e.map(o=>o?"1":"0").join(""));const r=await ce(n.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new vt(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function l(y){return pn(y,{...F.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=Pe(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:E}=f,w=i.get(p);i.delete(p),E?w.reject(l(E)):w.fulfil(l(k))}}}})}function Pe(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Cn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function Ce(t,e,n,r){var c,l;let a,o;const i=new Promise((d,h)=>{a=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:o}}export{Vn as a,A as p,j as s,Ut as u};
