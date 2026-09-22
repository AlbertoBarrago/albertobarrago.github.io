(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const Qe="4.6.0",et={version:Qe},tt="Alberto Barrago",je="Senior Software Engineer",Me="Cagliari, Italy",De="albertobarrago@gmail.com",Pe="albertobarrago_cv.pdf",nt="Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems.",ot={frontend:["Angular","React","Vanilla JS"],backend:["Node.js","Fastify","FastAPI","Flask","Spring Boot"],apple:["Swift","SwiftUI","SwiftData","AppKit","iOS/macOS"],database:["MongoDB","Oracle","MySQL"],devops:["Docker","GitHub/GitLab CI","Azure DevOps"],tools:["Git","Neovim","tmux","Zed"],ai:["LLM Integration","Prompt Engineering","AI Agents"]},it=[{role:"Tech Leader / Senior Software Engineer",company:"C22 Consulting",period:"2026 - Present",highlight:"Leading React, iOS, and Java architecture across active projects; mentoring developers and evangelizing AI workflows with Claude and MCP"},{role:"Senior Software Engineer / DevOps",company:"Minsait/Indra",period:"2023 - 2025",highlight:"Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time"},{role:"Senior Software Developer",company:"Softfobia",period:"2022 - 2023",highlight:"Led full-stack teams, 20% load time improvement"},{role:"Software Developer",company:"Accenture",period:"2021 - 2022",highlight:"Kafka microservices architecture, Angular 12 apps"},{role:"Software Developer",company:"Sinossi",period:"2016 - 2021",highlight:"Mobile apps for Deutsche Bank, TIM (Fortune 500)"}],at=[{name:"Markasso",description:"A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas.",url:"https://markasso.it",language:"TypeScript (0 deps)",status:"Experimental · Work in progress",focus:"Validating a direct, distraction-free interaction model for visual thinking."},{name:"Iron Doctrine",description:"A real-time strategy game with a deterministic ECS engine, running React + Pixi.js on the client, with lockstep online 1v1 multiplayer.",url:"https://iron-doctrine-omega.vercel.app/",language:"TypeScript (pnpm monorepo)",status:"Experimental · Work in progress",focus:"Deterministic simulation shared across local and networked play, driven by command replay."}],rt=[{name:"Telemaco",description:"A headless browser engine in Rust: real JavaScript, real DOM, native layout and paint, speaking the Chrome DevTools Protocol. No Chromium required.",url:"https://github.com/AlbertoBarrago/telemaco",language:"Rust"},{name:"GitLab Alert",description:"A native macOS menu bar companion for GitLab: merge requests, issues, failed pipelines and background notifications. Built with SwiftPM, no Xcode project.",url:"https://github.com/AlbertoBarrago/gitlab-alert",language:"Swift"},{name:"RSS-Reader",description:"A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat.",url:"https://github.com/AlbertoBarrago/RSS-Reader",language:"Swift"},{name:"Timelog",description:"A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData.",url:"https://github.com/AlbertoBarrago/Timelog",language:"Swift"},{name:"DockDock",description:"A native macOS utility that shows live window previews when you hover over Dock icons.",url:"https://github.com/AlbertoBarrago/DockDock",language:"Swift"},{name:"Sgommello",description:"Break reminder for macOS: a monster breaks your screen until you take a real break.",url:"https://github.com/AlbertoBarrago/Sgommello",language:"Swift"}],st=[{name:"wir",description:"What Is Running - Port and Process Inspector.",install:"brew install AlbertoBarrago/tap/wir",url:"https://github.com/AlbertoBarrago/wir",tap:"AlbertoBarrago/tap"},{name:"jm",description:"Switch between JDKs registered with macOS. Primary shell command: jm.",install:"brew install AlbertoBarrago/tap/jm",url:"https://github.com/AlbertoBarrago/jm",tap:"AlbertoBarrago/tap"},{name:"serval",description:"Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval.",install:"brew install AlbertoBarrago/tap/serval",url:"https://github.com/AlbertoBarrago/serval",tap:"AlbertoBarrago/tap"},{name:"otelma",description:"A local LLM inference runtime, built from scratch in Go for Apple Silicon on top of llama.cpp. Smaller and more didactic than Ollama, with a configurable unified memory budget as an explicit constraint. v0.2.",install:"brew install AlbertoBarrago/tap/otelma",url:"https://github.com/AlbertoBarrago/otelma",tap:"AlbertoBarrago/tap"}],lt=[{category:"Free programming books",items:[{name:"Free Programming Books (IT)",description:"Curated list of free programming books in Italian.",url:"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-it.md"},{name:"Free Programming Books (EN)",description:"The full English-language list of free programming books.",url:"https://github.com/EbookFoundation/free-programming-books"},{name:"The Odin Project",description:"Free, open-source full-stack curriculum (HTML/CSS, JS, Node, Rails).",url:"https://www.theodinproject.com/"},{name:"freeCodeCamp",description:"Free certifications and interactive courses for web development.",url:"https://www.freecodecamp.org/"}]},{category:"Free courses & practice",items:[{name:"Exercism",description:"Free coding exercises and mentoring across 70+ languages.",url:"https://exercism.org/"},{name:"Roadmap.sh",description:"Step-by-step roadmaps and guides for developer roles.",url:"https://roadmap.sh/"},{name:"Khan Academy",description:"Free courses in math, science, and computer programming.",url:"https://www.khanacademy.org/"},{name:"MIT OpenCourseWare",description:"Free lecture notes, exams, and videos from MIT courses.",url:"https://ocw.mit.edu/"}]},{category:"Docs & references",items:[{name:"MDN Web Docs",description:"The definitive reference for web platform technologies.",url:"https://developer.mozilla.org/"},{name:"DevDocs",description:"Fast, offline-capable API documentation browser.",url:"https://devdocs.io/"},{name:"Explain Shell",description:"Paste a shell command to see what each part does.",url:"https://explainshell.com/"},{name:"Regex101",description:"Online regex tester and debugger with live explanation.",url:"https://regex101.com/"}]},{category:"Free tools & perks",items:[{name:"Markasso",description:"My own fast, minimal, keyboard-first whiteboard engine. Marker + Picasso. No framework. No runtime. Just canvas.",url:"https://markasso.it"},{name:"GitHub Student Pack",description:"Free developer tools and credits for students.",url:"https://education.github.com/pack"},{name:"Coolors",description:"Free color palette generator and contrast checker.",url:"https://coolors.co/"},{name:"TinyPNG",description:"Compress PNG/WebP images for the web, free tier.",url:"https://tinypng.com/"}]}],ye={github:"https://github.com/AlbertoBarrago",email:`mailto:${De}`,bsky:"https://bsky.app/profile/albzoser.bsky.social"},Le=et.version,ct=()=>{const e=document.createElement("a");e.href=Pe,e.download=Pe,e.dispatchEvent(new MouseEvent("click"))};function dt(e,n){const t=e.getContext("2d");if(!t)return()=>{};const i=8,o=5,a=32,r=24,p=12,b=40,A=20,k=3,v=12,s=5,_=7,W=4,z=.003,M=["#ff6b6b","#ff6b6b","#ffbd2e","#ffbd2e","#00ff41"],I=1e3/60;let m="waiting",y=0,O=3,L=parseInt(localStorage.getItem("spaceInvadersHigh")||"0",10),B=0,F=0,h=0,S=[],T=[],R=[];function l(){const c=e.width||e.clientWidth||1,g=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const w=e.width/c,J=e.height/g;h=Math.max(0,Math.min(e.width-b,h*w));for(const K of S)K.x*=w,K.y*=J;for(const K of T)K.x*=w,K.y*=J;for(const K of R)K.x*=w,K.y*=J;m!=="playing"&&(h=e.width/2-b/2)}l();const x=new ResizeObserver(l);x.observe(e);const $=()=>e.height-40;let E=1,f=0,j=40;const q=10,V=20;function C(){S=[];const c=i*(a+p)-p,g=(e.width-c)/2;for(let w=0;w<o;w++)for(let J=0;J<i;J++)S.push({x:g+J*(a+p),y:60+w*(r+p),row:w,alive:!0});E=1,f=0,j=40}let H=0;const U={};function Z(c){if(c.key==="Escape"){n();return}(m==="waiting"||m==="gameover"||m==="won")&&c.key==="Enter"&&(m="playing",y=0,O=3,T=[],R=[],h=e.width/2-b/2,C()),U[c.key]=!0,(c.key===" "||c.key==="ArrowLeft"||c.key==="ArrowRight")&&c.preventDefault()}function ce(c){U[c.key]=!1}window.addEventListener("keydown",Z),window.addEventListener("keyup",ce);function me(c){if(m==="playing"){U.ArrowLeft&&h>0&&(h-=s*c),U.ArrowRight&&h<e.width-b&&(h+=s*c),h=Math.max(0,Math.min(e.width-b,h)),H>0&&(H=Math.max(0,H-c)),U[" "]&&H===0&&(T.push({x:h+b/2-k/2,y:$()-v}),H=15);for(let g=T.length-1;g>=0;g--){if(T[g].y-=_*c,T[g].y<0){T.splice(g,1);continue}for(const w of S)if(w.alive&&T[g]&&T[g].x<w.x+a&&T[g].x+k>w.x&&T[g].y<w.y+r&&T[g].y+v>w.y){w.alive=!1,T.splice(g,1),y+=10,y>L&&(L=y,localStorage.setItem("spaceInvadersHigh",String(L)));const J=S.filter(K=>K.alive).length;J>0&&(j=Math.max(4,Math.floor(40*(J/(o*i)))));break}}if(S.every(g=>!g.alive)){m="won";return}if(f+=c,f>=j){f=0;let g=!1;for(const w of S)if(w.alive&&(E>0&&w.x+a+q>e.width-10||E<0&&w.x-q<10)){g=!0;break}if(g){E*=-1;for(const w of S)w.y+=V}else for(const w of S)w.x+=q*E;for(const w of S)if(w.alive&&w.y+r>=$()){m="gameover";return}}for(const g of S.filter(w=>w.alive))Math.random()<z*c&&R.push({x:g.x+a/2-k/2,y:g.y+r});for(let g=R.length-1;g>=0;g--){if(R[g].y+=W*c,R[g].y>e.height){R.splice(g,1);continue}if(R[g].x<h+b&&R[g].x+k>h&&R[g].y<$()+A&&R[g].y+v>$()&&(R.splice(g,1),O--,O<=0)){m="gameover";return}}}}function fe(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),m==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("SPACE INVADERS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Fire = Shoot",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+L,e.width/2,e.height/2+78),t.textAlign="left";return}t.fillStyle="#00bfff",t.beginPath(),t.moveTo(h+b/2,$()),t.lineTo(h,$()+A),t.lineTo(h+b,$()+A),t.closePath(),t.fill();for(const c of S)c.alive&&(t.fillStyle=M[c.row],t.fillRect(c.x+4,c.y,a-8,r-4),t.fillRect(c.x+2,c.y+4,6,4),t.fillRect(c.x+a-8,c.y+4,6,4),t.fillRect(c.x+6,c.y-4,3,6),t.fillRect(c.x+a-9,c.y-4,3,6),t.fillRect(c.x,c.y+r-6,4,6),t.fillRect(c.x+a-4,c.y+r-6,4,6));t.fillStyle="#00ff41";for(const c of T)t.fillRect(c.x,c.y,k,v);t.fillStyle="#ff6b6b";for(const c of R)t.fillRect(c.x,c.y,k,v);t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+y,10,24),t.textAlign="center",t.fillText("HIGH: "+L,e.width/2,24),t.textAlign="right",t.fillText("LIVES: "+"♥".repeat(O),e.width-10,24),t.textAlign="left",m==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+y,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"),m==="won"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("YOU WIN!",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+y,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO PLAY AGAIN",e.width/2,e.height/2+60),t.textAlign="left")}}function ge(c){F===0&&(F=c);const g=Math.min((c-F)/I,3);F=c,me(g),fe(),B=requestAnimationFrame(ge)}return C(),B=requestAnimationFrame(ge),function(){cancelAnimationFrame(B),window.removeEventListener("keydown",Z),window.removeEventListener("keyup",ce),x.disconnect()}}const re=10,le=20,Oe=[{shape:[[1,1,1,1]],color:"#00bfff"},{shape:[[1,1],[1,1]],color:"#ffbd2e"},{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},{shape:[[1,0,0],[1,1,1]],color:"#ff6b6b"},{shape:[[0,0,1],[1,1,1]],color:"#00ff41"},{shape:[[0,1,1],[1,1,0]],color:"#ff6b6b"},{shape:[[1,1,0],[0,1,1]],color:"#00ff41"}];function pt(){const e=[];for(let n=0;n<le;n++)e.push(new Array(re).fill(null));return e}function ht(e,n,t,i){for(let o=0;o<n.length;o++)for(let a=0;a<n[o].length;a++){if(!n[o][a])continue;const r=t+a,p=i+o;if(r<0||r>=re||p>=le||p>=0&&e[p][r])return!0}return!1}function ut(e){const n=e.length,t=e[0].length,i=[];for(let o=0;o<t;o++){i.push([]);for(let a=n-1;a>=0;a--)i[o].push(e[a][o])}return i}function mt(e){let n=0;for(let t=le-1;t>=0;t--)e[t].every(i=>i!==null)&&(e.splice(t,1),e.unshift(new Array(re).fill(null)),n++,t++);return n}function ft(e,n){return e<=0?0:([0,100,300,500,800][e]||800)*n}function gt(e){const n=Math.floor(e/10)+1,t=Math.max(5,45-(n-1)*4);return{level:n,dropInterval:t}}function yt(e,n){const t=e.getContext("2d");if(!t)return()=>{};let i="waiting",o=0,a=1,r=0,p=parseInt(localStorage.getItem("tetrisHigh")||"0",10),b=0,A=0;const k=1e3/60;let v=[],s=null,_=0,W=45;function z(){e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight)}z();const M=new ResizeObserver(z);M.observe(e);function I(){v=pt()}function m(l,x,$){return ht(v,l,x,$)}function y(){const l=Oe[Math.floor(Math.random()*Oe.length)];s={shape:l.shape.map(x=>[...x]),color:l.color,x:Math.floor((re-l.shape[0].length)/2),y:0},m(s.shape,s.x,s.y)&&(i="gameover",s=null)}function O(){if(s){for(let l=0;l<s.shape.length;l++)for(let x=0;x<s.shape[l].length;x++){if(!s.shape[l][x])continue;const $=s.y+l;$>=0&&(v[$][s.x+x]=s.color)}L(),y()}}function L(){const l=mt(v);l>0&&(o+=ft(l,a),r+=l,{level:a,dropInterval:W}=gt(r),o>p&&(p=o,localStorage.setItem("tetrisHigh",String(p))))}const B={};function F(l){if(l.key==="Escape"){n();return}if((i==="waiting"||i==="gameover")&&l.key==="Enter"&&(i="playing",o=0,a=1,r=0,W=45,I(),y()),i!=="playing"||!s){B[l.key]=!0;return}if(l.key==="ArrowLeft")m(s.shape,s.x-1,s.y)||s.x--;else if(l.key==="ArrowRight")m(s.shape,s.x+1,s.y)||s.x++;else if(l.key==="ArrowDown")m(s.shape,s.x,s.y+1)?O():s.y++;else if(l.key==="ArrowUp"||l.key===" "){const x=ut(s.shape);m(x,s.x,s.y)?m(x,s.x-1,s.y)?m(x,s.x+1,s.y)||(s.shape=x,s.x++):(s.shape=x,s.x--):s.shape=x}B[l.key]=!0,["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," "].includes(l.key)&&l.preventDefault()}function h(l){B[l.key]=!1}window.addEventListener("keydown",F),window.addEventListener("keyup",h);function S(l){i!=="playing"||!s||(_+=l,_>=W&&(_=0,m(s.shape,s.x,s.y+1)?O():s.y++))}function T(){if(!t)return;t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height);const l=e.width<520,x=l?20:200,$=l?96:60,E=Math.max(8,Math.min(Math.floor((e.height-$)/le),Math.floor((e.width-x)/re))),f=E*re,j=E*le,q=Math.floor((e.width-f)/2),V=Math.max(l?68:36,Math.floor((e.height-j)/2)+10);if(i==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("TETRIS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Up/Space = Rotate",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+p,e.width/2,e.height/2+78),t.textAlign="left";return}t.strokeStyle="#333",t.lineWidth=2,t.strokeRect(q-1,V-1,f+2,j+2);for(let C=0;C<le;C++)for(let H=0;H<re;H++){const U=q+H*E,Z=V+C*E;v[C][H]?(t.fillStyle=v[C][H],t.fillRect(U+1,Z+1,E-2,E-2)):(t.fillStyle="#111",t.fillRect(U,Z,E,E),t.strokeStyle="#1a1a1a",t.lineWidth=.5,t.strokeRect(U,Z,E,E))}if(s){t.fillStyle=s.color;for(let C=0;C<s.shape.length;C++)for(let H=0;H<s.shape[C].length;H++){if(!s.shape[C][H])continue;const U=q+(s.x+H)*E,Z=V+(s.y+C)*E;t.fillRect(U+1,Z+1,E-2,E-2)}}t.fillStyle="#00ff41",t.font=l?"18px VT323, monospace":"22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+o,10,24),t.fillText("LEVEL: "+a,10,l?46:50),t.textAlign="center",t.fillText("HIGH: "+p,e.width/2,24),t.textAlign="right",t.fillText("LINES: "+r,e.width-10,24),t.textAlign="left",i==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+o+"  Lines: "+r,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left")}function R(l){A===0&&(A=l);const x=Math.min((l-A)/k,3);A=l,S(x),T(),b=requestAnimationFrame(R)}return I(),b=requestAnimationFrame(R),function(){cancelAnimationFrame(b),window.removeEventListener("keydown",F),window.removeEventListener("keyup",h),M.disconnect()}}function bt(e,n){const t=e.getContext("2d");if(!t)return()=>{};const i=12,o=80,a=10,r=5,p=4,b=3.5,A=7,k=1e3/60;let v="waiting",s=0,_=0,W=0,z=0,M=0,I=0,m=0,y=0,O=p,L=p*.5;function B(){const f=e.width||e.clientWidth||1,j=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const q=e.width/f,V=e.height/j;M=Math.max(0,Math.min(e.height-o,M*V)),I=Math.max(0,Math.min(e.height-o,I*V)),m=Math.max(0,Math.min(e.width-a,m*q)),y=Math.max(0,Math.min(e.height-a,y*V)),v!=="playing"&&(M=e.height/2-o/2,I=e.height/2-o/2,m=e.width/2,y=e.height/2)}B();const F=new ResizeObserver(B);F.observe(e);function h(){m=e.width/2,y=e.height/2,O=p*(Math.random()>.5?1:-1),L=(Math.random()*2-1)*p*.5}const S={};function T(f){if(f.key==="Escape"){n();return}(v==="waiting"||v==="gameover")&&f.key==="Enter"&&(v="playing",s=0,_=0,M=e.height/2-o/2,I=e.height/2-o/2,h()),S[f.key]=!0,(f.key==="ArrowUp"||f.key==="ArrowDown")&&f.preventDefault()}function R(f){S[f.key]=!1}window.addEventListener("keydown",T),window.addEventListener("keyup",R);function l(f){if(v!=="playing")return;const j=e.getBoundingClientRect(),q=f.clientY-j.top;M=Math.max(0,Math.min(e.height-o,q-o/2)),f.preventDefault()}e.addEventListener("pointerdown",l),e.addEventListener("pointermove",l);function x(f){if(v!=="playing")return;S.ArrowUp&&M>0&&(M-=r*f),S.ArrowDown&&M<e.height-o&&(M+=r*f),M=Math.max(0,Math.min(e.height-o,M));const j=I+o/2;O>0?j<y-10?I+=b*f:j>y+10&&(I-=b*f):j<e.height/2-5?I+=b*.5*f:j>e.height/2+5&&(I-=b*.5*f),I=Math.max(0,Math.min(e.height-o,I)),m+=O*f,y+=L*f,y<=0&&(y=0,L=Math.abs(L)),y+a>=e.height&&(y=e.height-a,L=-Math.abs(L));const q=20;m<=q+i&&m+a>=q&&y+a>=M&&y<=M+o&&O<0&&(O=Math.abs(O)*1.05,L=((y+a/2-M)/o-.5)*p*2,m=q+i);const V=e.width-20-i;m+a>=V&&m<=V+i&&y+a>=I&&y<=I+o&&O>0&&(O=-Math.abs(O)*1.05,L=((y+a/2-I)/o-.5)*p*2,m=V-a),m<0&&(_++,_>=A?v="gameover":h()),m>e.width&&(s++,s>=A?v="gameover":h())}function $(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),v==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("PONG",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrow Up/Down or Drag = Move",e.width/2,e.height/2+50),t.fillText("First to "+A+" wins | ESC = Exit",e.width/2,e.height/2+78),t.textAlign="left";return}if(t.setLineDash([8,8]),t.strokeStyle="#333",t.lineWidth=2,t.beginPath(),t.moveTo(e.width/2,0),t.lineTo(e.width/2,e.height),t.stroke(),t.setLineDash([]),t.fillStyle="#00ff41",t.fillRect(20,M,i,o),t.fillStyle="#ff6b6b",t.fillRect(e.width-20-i,I,i,o),t.fillStyle="#ffbd2e",t.fillRect(m,y,a,a),t.fillStyle="#00ff41",t.font="48px VT323, monospace",t.textAlign="center",t.fillText(String(s),e.width/2-60,55),t.fillStyle="#ff6b6b",t.fillText(String(_),e.width/2+60,55),t.textAlign="left",t.font="18px VT323, monospace",t.fillStyle="#888",t.textAlign="left",t.fillText("YOU",20,e.height-15),t.textAlign="right",t.fillText("CPU",e.width-20,e.height-15),t.textAlign="left",v==="gameover"){t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height);const f=s>=A;t.fillStyle=f?"#00ff41":"#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText(f?"YOU WIN!":"CPU WINS",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText(s+" - "+_,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"}}}function E(f){z===0&&(z=f);const j=Math.min((f-z)/k,3);z=f,x(j),$(),W=requestAnimationFrame(E)}return W=requestAnimationFrame(E),function(){cancelAnimationFrame(W),window.removeEventListener("keydown",T),window.removeEventListener("keyup",R),e.removeEventListener("pointerdown",l),e.removeEventListener("pointermove",l),F.disconnect()}}function wt(e,n){const t=e.getContext("2d");if(!t)return()=>{};const i=24,o=.34,a=-6.6,r=58,p=168,b=2.15,A=126,k=46,v=1e3/60,s=100;let _="waiting",W=0,z=parseInt(localStorage.getItem("flappyBirdHigh")||"0",10),M=0,I=0,m=0,y=0,O=A,L=0,B=0,F=0,h=null,S=null,T=[];function R(){const d=e.width||e.clientWidth||1,u=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const N=e.width/d,Q=e.height/u;for(const P of T)P.x*=N,P.gapY=E(P.gapY*Q);_!=="playing"?x():(L=Math.max(50,Math.min(e.width-30,L*N)),B=Math.max(i,Math.min(e.height-k-i,B*Q)))}R();const l=new ResizeObserver(R);l.observe(e);function x(){L=Math.max(80,Math.floor(e.width*.28)),B=Math.floor(e.height*.45),F=0}function $(){const d=Math.max(160,e.height-k);return Math.max(86,Math.min(p,d-112))}function E(d){const u=$(),N=56,Q=Math.max(N,e.height-k-u-48);return Math.max(N,Math.min(Q,d))}function f(){_="playing",W=0,y=0,m=0,O=A,T=[],x(),j(),H()}function j(){const u=Math.max(68,e.height-k-$()-48),N=56+Math.random()*(u-56);T.push({x:e.width+20,gapY:N,passed:!1})}function q(){if(V(),_==="waiting"||_==="gameover"){f();return}_==="playing"&&(F=a,U())}function V(){if(h){h.state==="suspended"&&h.resume();return}const d=globalThis.AudioContext??globalThis.webkitAudioContext;h=new d,S=h.createGain(),S.gain.value=.16,S.connect(h.destination)}function C(d,u,N="square",Q=.2){if(!h||!S)return;const P=h.currentTime,ie=h.createOscillator(),ae=h.createGain();ie.type=N,ie.frequency.setValueAtTime(d,P),ae.gain.setValueAtTime(1e-4,P),ae.gain.exponentialRampToValueAtTime(Q,P+.01),ae.gain.exponentialRampToValueAtTime(1e-4,P+u),ie.connect(ae),ae.connect(S),ie.start(P),ie.stop(P+u+.02)}function H(){C(440,.08,"square",.14),h&&setTimeout(()=>C(660,.08,"square",.12),65)}function U(){C(720,.06,"square",.11)}function Z(){C(880,.07,"triangle",.14),setTimeout(()=>C(1175,.08,"triangle",.12),60)}function ce(){if(!h||!S)return;const d=h.currentTime,u=h.createOscillator(),N=h.createGain();u.type="sawtooth",u.frequency.setValueAtTime(190,d),u.frequency.exponentialRampToValueAtTime(60,d+.22),N.gain.setValueAtTime(.22,d),N.gain.exponentialRampToValueAtTime(1e-4,d+.24),u.connect(N),N.connect(S),u.start(d),u.stop(d+.26)}function me(d){if(d.key==="Escape"){n();return}(d.key==="Enter"||d.key===" ")&&(q(),d.preventDefault())}function fe(){q()}window.addEventListener("keydown",me),e.addEventListener("pointerdown",fe);function ge(){if(_!=="playing")return;for(y++,F+=o,B+=F;y>=O;)j(),O+=A;for(const P of T)P.x-=b,!P.passed&&P.x+r<L&&(P.passed=!0,W++,Z(),W>z&&(z=W,localStorage.setItem("flappyBirdHigh",String(z))));T=T.filter(P=>P.x+r>-20);const d=L-i/2,u=L+i/2,N=B-i/2,Q=B+i/2;if(N<=0||Q>=e.height-k){_="gameover",ce();return}for(const P of T){const ie=u>P.x&&d<P.x+r,ae=N<P.gapY,Ze=Q>P.gapY+$();if(ie&&(ae||Ze)){_="gameover",ce();return}}}function c(){const d=t.createLinearGradient(0,0,0,e.height);d.addColorStop(0,"#082238"),d.addColorStop(1,"#071014"),t.fillStyle=d,t.fillRect(0,0,e.width,e.height),t.fillStyle="rgba(0, 255, 65, 0.08)";for(let u=y*-.3%90;u<e.width;u+=90)t.fillRect(u,80,34,8),t.fillRect(u+8,72,18,8)}function g(){const d=$();for(const u of T)t.fillStyle="#00a33a",t.fillRect(u.x,0,r,u.gapY),t.fillRect(u.x,u.gapY+d,r,e.height-k-u.gapY-d),t.fillStyle="#00ff41",t.fillRect(u.x-4,u.gapY-14,r+8,14),t.fillRect(u.x-4,u.gapY+d,r+8,14),t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(u.x+r-12,0,6,u.gapY-14),t.fillRect(u.x+r-12,u.gapY+d+14,6,e.height-k)}function w(){const d=e.height-k;t.fillStyle="#332211",t.fillRect(0,d,e.width,k),t.fillStyle="#ffbd2e",t.fillRect(0,d,e.width,4),t.fillStyle="rgba(0, 255, 65, 0.35)";for(let u=y*-b%28;u<e.width;u+=28)t.fillRect(u,d+10,14,4)}function J(){const d=Math.max(-.45,Math.min(.7,F/12));t.save(),t.translate(L,B),t.rotate(d),t.fillStyle="#ffbd2e",t.fillRect(-12,-10,22,20),t.fillStyle="#ffe680",t.fillRect(-16,-2,14,10),t.fillStyle="#ff6b6b",t.fillRect(8,-2,12,6),t.fillStyle="#fff",t.fillRect(2,-8,6,6),t.fillStyle="#0a0a0a",t.fillRect(6,-6,2,2),t.restore()}function K(){t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+W,10,24),t.textAlign="center",t.fillText("HIGH: "+z,e.width/2,24),t.textAlign="right",t.fillText("SPACE = FLAP",e.width-10,24),t.textAlign="left"}function Je(){t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("FLAPPY BIRD",e.width/2,e.height/2-70),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS SPACE OR CLICK TO START",e.width/2,e.height/2),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Space/Click = Flap",e.width/2,e.height/2+40),t.fillText("ESC = Exit | High Score: "+z,e.width/2,e.height/2+70),t.textAlign="left"}function Ke(){t.fillStyle="rgba(0,0,0,0.68)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-30),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+W,e.width/2,e.height/2+10),t.fillStyle="#888",t.fillText("PRESS SPACE OR CLICK TO RESTART",e.width/2,e.height/2+50),t.textAlign="left"}function Xe(){c(),g(),w(),J(),K(),_==="waiting"&&Je(),_==="gameover"&&Ke()}function Ce(d){I===0&&(I=d);const u=Math.min(d-I,s);for(I=d,m+=u;m>=v;)ge(),m-=v;Xe(),M=requestAnimationFrame(Ce)}return x(),M=requestAnimationFrame(Ce),function(){cancelAnimationFrame(M),window.removeEventListener("keydown",me),e.removeEventListener("pointerdown",fe),l.disconnect(),h==null||h.close(),h=null,S=null}}const vt=Object.freeze({"--background":"#0b0f14","--background-deep":"#070a0e","--surface":"#111820","--foreground":"#b8c4d4","--bright":"#e7edf5","--muted":"#667485","--border":"#22303d","--cyan":"#5eead4","--blue":"#7aa2f7","--green":"#9ece6a","--yellow":"#e0af68","--purple":"#bb9af7","--red":"#f7768e"});function kt(){console.log(`%c    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|`,"color: #9ece6a; font-family: monospace; font-weight: bold; line-height: 1.2;"),console.log("%cPortfolio shell v%s %c· running on curiosity","color: #5eead4; font-family: monospace;",Le,"color: #667485; font-family: monospace;"),console.log(`%c> reading the source instead of clicking around? my kind of visitor.
> say hi: %s
> code: %s`,"color: #b8c4d4; font-family: monospace;",De,ye.github),console.log("%csteal the theme (dark CRT terminal palette):","color: #e0af68; font-family: monospace;"),console.log(Object.entries(vt).map(([n,t])=>`${n}: ${t};`).join(`
`))}function de(e){return e.replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[n]??n)}const St={title:"Development Is Dead",date:"2026-09-22",tags:["opinion","ai","career","italy","craft"]},Tt=`<p>I started in 2011, freelance until 2014, and I never left. Fifteen years. Long enough to have opinions, short enough that whoever started in 1995 gets to laugh at mine.</p>
<p>I remember Dreamweaver, back when nobody was embarrassed about it yet. I remember Eclipse eating a laptop alive just to open a project. I remember Sublime Text landing like someone had finally understood that a text editor is a text editor. I remember the pattern libraries we all copied from and nobody credited. I remember CodePen, which <a href="https://en.wikipedia.org/wiki/CodePen">Chris Coyier co-founded in 2012 with Alex Vazquez and Tim Sabat</a>, and <a href="https://chriscoyier.net/bio/">CSS-Tricks</a>, which he ran from 2007 until DigitalOcean bought it in 2022. And I remember him on stage, around 2016, walking through his own workflow and the tools he actually used, beer in hand, the whole thing closer to a guy explaining something to you in a bar than to a keynote performed at you. That was normal then. The web lost it and never got it back.</p>
<p>That was the culture. Small, loud, generous, and built on the assumption that we would keep doing roughly this for a long time.</p>
<h2>The Italian footnote</h2>
<p>Italy was never part of it. We had one real moment: the <a href="https://en.wikipedia.org/wiki/Programma_101">Olivetti Programma 101</a>, New York, 1965, arguably the first desktop computer, more than 40,000 units sold, <a href="https://www.fondazioneadrianolivetti.it/en/p101-cecam/">ten of them bought by NASA and used to plan the Apollo 11 landing</a>. Then nothing on that scale. Ever again.</p>
<p>There are exceptions and they are real. <a href="https://en.wikipedia.org/wiki/Salvatore_Sanfilippo">Salvatore Sanfilippo released Redis on 26 February 2009</a>, written in Sicily to fix a problem in his own analytics product, and it ended up as infrastructure under a serious chunk of the internet. But one guy is not a scene. The average here has been mediocre for twenty years and it has been kept above water by a handful of people who cared more than anybody was paying them to care. The famous one percent. Anyone who has actually worked in this country knows that number is not a figure of speech.</p>
<p>I dealt with it the only way that works: I ignored the local conversation and followed the people who were actually building, one per domain, directly. First on Twitter, then on whatever Twitter turned into, now on Bluesky for the ones who still want a timeline that belongs to them.</p>
<h2>This time is not like the other times</h2>
<p>And then this year happened.</p>
<p>We are not doing the job we did for the last twenty years. I do not mean the tools changed again. The tools change every three years, every single time somebody declares the profession dead, and every single time they are wrong. I have sat through four rounds of that.</p>
<p>This is not that round. The work moved. What I do now is specify, constrain, review, decide. The typing, the part that was the job, is the cheapest part of the job. And the rate of change is not linear, it is not flattening, and nobody I respect thinks it is about to.</p>
<p>The split is not between who uses the new tools and who does not. It is between who kept the fundamentals and who never had them. If you actually know what a system does, you can move up and down the altitudes: read the generated code, judge the architecture, smell the wrong abstraction, decide what does not get built at all. If you never had that, you are stuck at one altitude saying &quot;yes, and make no mistakes&quot; to a machine you cannot audit. That is not a career. That is a handoff.</p>
<p>So when somebody asks me where I see this profession in ten years, I skip the comforting answer about new roles emerging and the work merely shifting.</p>
<p>I do not see it. Something else will be there, and it will not be called development.</p>
<h2>The one percent, again</h2>
<p>There is an idea I keep circling back to, and I want to be exact about what it is and what it is not.</p>
<p>The Transcendental Meditation people have a claim they call the Maharishi Effect: <a href="https://research.miu.edu/maharishi-effect/">a group the size of the square root of one percent of a population is enough to measurably move that population</a>. The research goes back to the late 1970s. It is also <a href="https://en.wikipedia.org/wiki/Maharishi_Effect">rejected as pseudoscience</a>, the studies have real problems with controls and with correlation dressed up as causation, and I am not asking anybody to believe it.</p>
<p>I am stealing the shape, not the evidence. The shape is this: the fraction of a population that has to move before everything else reorients around it is far smaller than people assume. That part I have watched happen, with zero meditation involved, in every shift I have lived through. A handful of people went somewhere, and two years later the industry was arguing about whether it had ever been anywhere else.</p>
<p>Which is the uncomfortable part. The square root of one percent of this field is already gone. They are not waiting for the rest of us to finish debating whether any of this is real.</p>
<p>So where do we think we are going?</p>
<h2>Sources</h2>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Programma_101">Programma 101, Wikipedia</a> and <a href="https://www.fondazioneadrianolivetti.it/en/p101-cecam/">Fondazione Adriano Olivetti</a></li>
<li><a href="https://en.wikipedia.org/wiki/Salvatore_Sanfilippo">Salvatore Sanfilippo, Wikipedia</a> and <a href="https://en.wikipedia.org/wiki/Redis">Redis, Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/CodePen">CodePen, Wikipedia</a> and <a href="https://chriscoyier.net/bio/">Chris Coyier&#39;s bio</a></li>
<li><a href="https://research.miu.edu/maharishi-effect/">Maharishi Effect research, MIU</a> and <a href="https://en.wikipedia.org/wiki/Maharishi_Effect">Maharishi Effect, Wikipedia</a></li>
</ul>
`,xt=Object.freeze(Object.defineProperty({__proto__:null,html:Tt,meta:St},Symbol.toStringTag,{value:"Module"})),At={title:"GitLab Alert: the GitLab work that involves you, in your menu bar",date:"2026-09-16",tags:["swift","macos","gitlab","menubar","opensource"]},It=`<p><strong>GitLab Alert</strong> is a macOS menu bar app that keeps the GitLab work needing your attention out of a browser tab and in the corner of your screen: merge requests waiting on your review, merge requests you authored, issues assigned to you, and the pipeline state of the projects you watch. No Dock icon, no window to manage, no tab to forget.</p>
<p>It works with GitLab.com and with self-managed instances, it is free, and it is MIT.</p>
<h2>A browser tab is a bad notification surface</h2>
<p>The workflow it replaces was mine, every day. Open GitLab, check what is waiting on my review, check whether last night&#39;s pipeline went red, close the tab, forget, repeat two hours later.</p>
<p>A tab shows you everything or nothing, and it has no memory of what you already saw. GitLab&#39;s own email notifications have the opposite problem: they arrive constantly, they arrive for things you do not care about, and after a week you filter them into a folder you never open.</p>
<p>So the scope was narrow on purpose:</p>
<ul>
<li><strong>Only the work that involves me.</strong> Merge requests where I am assignee, reviewer or author. Issues assigned to me. The latest pipeline of the projects in scope.</li>
<li><strong>Notify on change, not on state.</strong> A failed pipeline notifies once, when it fails, not on every poll for the next three days.</li>
<li><strong>Read-only, structurally.</strong> The token is requested with <code>read_api</code> and nothing else. The app cannot approve a merge request or close an issue, because it has no permission to.</li>
<li><strong>Offline is a state, not an error.</strong> Losing the network keeps the last good dashboard on screen instead of blanking it.</li>
</ul>
<h2>Three surfaces, three jobs</h2>
<p>The app is an accessory app: no Dock icon, and the status item is the only permanent thing on screen. Everything else is created lazily and thrown away when you close it.</p>
<p><strong>The popover</strong> is the glance. Left click on the status item and you get review requests, your authored merge requests, assigned issues and repository activity, capped at five rows per expanded section. It answers &quot;is there anything?&quot; in under a second, and if there is, &quot;see all&quot; hands you off.</p>
<p><strong>The detail window</strong> is the actual workspace. Sidebar picks the dataset, the table filters and sorts it, the inspector shows the full selected item, and &quot;open on GitLab&quot; sends you to the browser when you finally have to do the work. Click a notification and it opens here, on the right item: the identifier travels through a pending selection that the view resolves once its dataset exists, so a notification clicked during a cold launch still lands where it should.</p>
<p><strong>Settings</strong> is where the instance origin, the token, notifications and the repository scope live. The default scope is projects you are a member of, active in the past 90 days, forks excluded, which is usually right and occasionally is not. The Repositories pane lets you search the whole catalogue and include or exclude individual projects by hand.</p>
<h2>Being quiet is a feature, and it took work</h2>
<p>Anything that polls and notifies is one bad decision away from becoming noise you mute. Three decisions carry most of that weight.</p>
<p><strong>The first refresh is silent.</strong> A fresh install seeds its notification watermarks from the first successful cycle without notifying anything. Otherwise your very first launch would dump twelve notifications about merge requests you have been ignoring for a week, and you would quit before the app ever proved useful.</p>
<p><strong>State is written before notifications are posted.</strong> The snapshot, its watermarks and the resulting activity log are persisted in a single state write, and only then do notifications go out. A crash at the wrong moment cannot replay yesterday&#39;s failed pipeline on the next launch.</p>
<p><strong>Read state is local and explicit.</strong> Opening the popover marks nothing as seen. Expanding a section marks nothing as seen. You mark rows yourself, and it changes local presentation only: the app never closes, acknowledges or updates anything on GitLab. Seen identifiers are bounded and persisted, so an item you dismissed stays dismissed across launches, while a later event on the same item gets a distinct identifier and comes back unread on its own merits.</p>
<h2>Polling that behaves on someone else&#39;s server</h2>
<p>Self-managed GitLab instances are frequently small boxes that somebody in infrastructure maintains on top of their real job. An app that hammers one every 30 seconds is an app that gets blocked.</p>
<p>A single actor, <code>PollScheduler</code>, owns the whole cycle. It serializes lifecycle changes and joins a manual refresh with an automatic one, so there is never more than one network cycle in flight no matter how enthusiastically you click refresh. Sleep, screen sleep and session changes arrive from AppKit and get forwarded to it. Reachability, power state and whether the popover is currently open all feed into the next interval: a laptop asleep on battery is not a laptop that needs to poll.</p>
<p>Within a cycle, independent requests run concurrently, list endpoints follow GitLab&#39;s pagination properly instead of reading page one and hoping, and the per-project pipeline checks run in a bounded task group. The client honors <code>Retry-After</code> and waits out exhausted rate limit floors before starting anything else. Page size and pipeline concurrency are exposed in Settings, within safe limits, because the right numbers for gitlab.com are not the right numbers for a self-managed instance with 40 users.</p>
<h2>Where things live</h2>
<p>Two modules, and the split is also the testing strategy.</p>
<p><code>GitLabKit</code> is a local SwiftPM package with no UI dependency at all: the REST v4 client, models, the Keychain and file stores, rate limiting, and a pure activity diff engine that compares the previous and current snapshots. <code>GitLabAlert</code> is the shell: AppKit lifecycle, the status item, SwiftUI views, settings, notifications. Views talk to a main-actor <code>AppModel</code> and nothing else, so no view ever creates a network client or writes persistent state, and <code>AppDelegate</code> builds the whole dependency graph.</p>
<p>Because the interesting logic sits in a package with no views, the tests cover API mapping, Keychain error handling through test stores, concurrent refreshes, cancellation, account replacement, notification routing and persisted read state. The menu bar UI still gets a manual QA checklist, which is the honest answer.</p>
<p>Changing the GitLab origin is treated as an account boundary, not a preference. In-flight work is cancelled, the scheduler is stopped and cleared, the previous token is deleted and a new client is built before the replacement token is accepted. Late responses carry a revision and cannot resurrect data from the previous account into the new one.</p>
<p>The token lives in the Keychain, never reaches a view, and is sent in the <code>PRIVATE-TOKEN</code> header only to the configured origin. State files hold dashboard data and no credentials, written atomically with owner-only permissions. No analytics, no third-party services at runtime.</p>
<h2>Status</h2>
<p>Under active development. Releases are signed with the project&#39;s stable identity but not Apple-notarized, so the first launch needs one pass through <strong>Privacy &amp; Security → Open Anyway</strong>; the README covers it, along with building from source via SwiftPM (there is no <code>.xcodeproj</code>, and Xcode is not required). GitLab instances hosted below a URL sub-path are not supported yet.</p>
<p>The repository is at <a href="https://github.com/AlbertoBarrago/gitlab-alert">github.com/AlbertoBarrago/gitlab-alert</a>, with the product page at <a href="https://albz.it/gitlab-alert/">albz.it/gitlab-alert</a>. If it earns a place in your menu bar, a star is appreciated.</p>
`,Et=Object.freeze(Object.defineProperty({__proto__:null,html:It,meta:At},Symbol.toStringTag,{value:"Module"})),Mt={title:"Iron Doctrine: building deterministic online multiplayer with a shared ECS engine",date:"2026-08-31",tags:["typescript","game-dev","multiplayer","ecs","pnpm"]},Lt=`<p><strong>Iron Doctrine</strong> is a real-time strategy game I&#39;m building in a pnpm monorepo, with a deterministic ECS engine at its core and, as of this week, a working 1v1 online mode.</p>
<h2>The Architecture</h2>
<p>The repo is split into <code>packages/</code> and <code>apps/</code>:</p>
<ul>
<li><strong>packages/shared</strong>: the network protocol (<code>ClientMessage</code>/<code>ServerMessage</code>), shared types and constants (<code>SIM_HZ</code>, <code>DEFAULT_INPUT_DELAY</code>), and the <code>LockstepCoordinator</code></li>
<li><strong>packages/engine</strong>: a deterministic ECS simulation engine (entities/commands/systems), exposing <code>Simulation.step()</code>/<code>enqueue()</code>, with zero dependency on rendering or networking</li>
<li><strong>apps/client</strong>: React + Pixi.js, running entirely in the browser</li>
<li><strong>apps/server</strong>: a Node/<code>ws</code> WebSocket host that relays commands without simulating anything itself</li>
</ul>
<h2>Local Play: the Game Loop</h2>
<p><code>GameRenderer</code> (a large class handling rendering, input, and audio) owns a <code>SimBridge</code>, which in turn owns a Web Worker running the <code>Simulation</code>. The worker advances on a free-running clock (<code>setTimeout</code>), applies commands as soon as they arrive, and produces one snapshot per tick that the main thread interpolates and draws.</p>
<h2>Going Online</h2>
<p>This week&#39;s addition: real 1v1 matches over the network, built around lockstep determinism.</p>
<ol>
<li><strong>apps/server</strong> runs a single in-memory <code>MatchRelay</code> per process. It doesn&#39;t simulate anything, it just assigns each incoming command to a future tick and rebroadcasts the same confirmed command set to both clients every <code>SIM_DT_MS</code>. Determinism comes from both clients running the same engine against the same command stream.</li>
<li><strong>NetworkClient</strong> talks to the server over WebSocket, translates confirmed ticks, and feeds them into a second bridge type, <code>NetworkedSimBridge</code>, implementing the same <code>SimBridgeLike</code> interface as the local one, but with two differences: local commands go to the server (<code>sendCommand</code>) instead of straight to the worker, and the worker only advances one tick when a network confirmation (<code>networkTick</code>) arrives, instead of running freely.</li>
<li><strong>The &quot;you&#39;re always player 0&quot; problem</strong>: most of the UI/HUD assumed the local user was player 0. Solved with <code>playerPerspective.ts</code>, a pure module that swaps <code>owner</code>/<code>player</code>/<code>winner</code> labels (0↔1) only at the network boundary, so each client keeps internally believing it&#39;s player 0.</li>
<li><code>GameRenderer</code> now accepts the bridge via its constructor (local or networked) instead of always instantiating one itself. That single injection point made the rest of the online mode possible without rewriting the class&#39;s ~1700 lines.</li>
</ol>
<h2>Why This Design</h2>
<p>Keeping the simulation deterministic and network-agnostic in <code>packages/engine</code> means the same code powers skirmish, campaign, and online play. The server never needs to understand game state, it&#39;s just an authoritative clock for command ordering. The tradeoff is that both clients must produce bit-identical results from the same inputs, which is why command replay (not state sync) is the whole networking model.</p>
<h2>What&#39;s Next</h2>
<p>1v1 is working; next up is handling reconnects and validating the lockstep model holds under real network jitter, not just on localhost.</p>
`,_t=Object.freeze(Object.defineProperty({__proto__:null,html:Lt,meta:Mt},Symbol.toStringTag,{value:"Module"})),Rt={title:"Otelma: building a local LLM runtime from scratch",date:"2026-08-31",tags:["go","llm","llama-cpp","apple-silicon","ai"]},Ct=`<p><strong>Otelma</strong> is a local LLM inference runtime I&#39;m building in Go.</p>
<p>The idea is deliberately smaller than Ollama: understand what actually sits between a GGUF file and a local application using an LLM, while treating unified memory as a real, finite resource rather than something the OS will eventually deal with.</p>
<p>It currently runs on Apple Silicon, uses <code>llama.cpp</code> as its first inference backend, and exposes both its own local API and a minimal OpenAI-compatible interface.</p>
<h2>The Architecture</h2>
<p>Otelma is split into four main layers:</p>
<ul>
<li><strong>CLI</strong>: <code>pull</code>, <code>list</code>, <code>ps</code>, <code>run</code>, <code>chat</code>, <code>serve</code>, <code>config</code>, <code>version</code></li>
<li><strong>local runtime API</strong>: model lifecycle, scheduling, memory accounting, and HTTP endpoints</li>
<li><strong>inference backend</strong>: an abstraction over the actual inference engine; <code>llama.cpp</code> today, MLX planned</li>
<li><strong>model storage</strong>: local GGUF metadata, checksums, sizes, and Hugging Face downloads</li>
</ul>
<p>Even local CLI commands go through the HTTP API.</p>
<p>Running:</p>
<p><code>otelma run qwen2.5-0.5b &quot;What is the capital of Italy?&quot;</code></p>
<p>doesn&#39;t bypass the runtime and invoke <code>llama.cpp</code> directly. The CLI talks to the same API an external application would use.</p>
<p>If the server isn&#39;t running yet, Otelma starts it automatically in the background.</p>
<h2>Model Lifecycle as a State Machine</h2>
<p>One thing I didn&#39;t want was model management hidden behind a collection of booleans and process checks.</p>
<p>Each model instead moves through an explicit state machine:</p>
<p><code>NOT_PRESENT → DOWNLOADED → LOADING → READY → BUSY → UNLOADING</code></p>
<p>The model manager owns those transitions.</p>
<p>That gives the runtime one place to answer questions such as:</p>
<ul>
<li>is this model actually available locally?</li>
<li>is it already loaded?</li>
<li>can another request use it?</li>
<li>is it currently generating?</li>
<li>can it be unloaded safely?</li>
</ul>
<p>The registry is persisted to disk, so downloaded models survive runtime restarts without having to rediscover everything from scratch.</p>
<h2>Unified Memory Is Part of the Architecture</h2>
<p>Apple Silicon makes local inference convenient because CPU and GPU share unified memory.</p>
<p>It also means pretending memory is unlimited is a bad abstraction.</p>
<p>On a machine with 24GB of unified memory, loading multiple large models at once can very quickly become the operating system&#39;s problem.</p>
<p>Otelma therefore has an explicit memory <code>Budget</code>.</p>
<p>Before loading a model, the manager reserves its expected memory usage. If the reservation would exceed the configured ceiling, the load is rejected before the inference process starts.</p>
<p>The important distinction is that memory pressure becomes a runtime decision:</p>
<p><code>canLoad(model) → yes/no</code></p>
<p>rather than an eventual OOM.</p>
<p>That constraint influenced the architecture much more than I initially expected.</p>
<h2>llama.cpp Is a Backend, Not the Runtime</h2>
<p>Otelma doesn&#39;t implement tensor operations or transformer inference itself.</p>
<p>For real inference, the current backend launches <code>llama-server</code> from <code>llama.cpp</code>.</p>
<p>But the rest of Otelma doesn&#39;t know that.</p>
<p>The runtime talks through a backend interface responsible for loading, unloading, and generating with a model. <code>llama.cpp</code> is simply the first implementation.</p>
<p>This separation should make it possible to add an MLX backend later without changing model management, scheduling, storage, or the public API.</p>
<p>That distinction was one of the main reasons for building the project: an inference engine and an inference runtime solve different problems.</p>
<h2>OpenAI-Compatible by Default</h2>
<p>Otelma also exposes a minimal subset of the OpenAI API:</p>
<p><code>POST /v1/chat/completions</code></p>
<p>and:</p>
<p><code>GET /v1/models</code></p>
<p>The goal isn&#39;t to reproduce the entire OpenAI API.</p>
<p>It&#39;s to make the runtime immediately usable by software that already supports a custom OpenAI endpoint.</p>
<p>The application shouldn&#39;t need to know whether the model behind that endpoint is running in the cloud, through <code>llama.cpp</code>, or eventually through MLX.</p>
<h2>Pull, Run, Chat</h2>
<p>The current workflow is intentionally small:</p>
<p><code>otelma list</code></p>
<p><code>otelma pull qwen2.5-0.5b</code></p>
<p><code>otelma run qwen2.5-0.5b &quot;What is the capital of Italy?&quot;</code></p>
<p>or for an interactive session:</p>
<p><code>otelma chat qwen2.5-0.5b</code></p>
<p>Models can also be pulled directly from Hugging Face, while the built-in catalog provides a simpler name-based path for known models.</p>
<p>At this point the complete pipeline works end-to-end:</p>
<p><code>pull → load → inference → unload</code></p>
<p>with persistent model metadata, multi-turn context, background server startup, and real inference.</p>
<h2>Why Build This?</h2>
<p>There are already excellent tools for running LLMs locally.</p>
<p>That&#39;s precisely why Otelma is intentionally small.</p>
<p>I didn&#39;t want another UI around an existing runtime. I wanted to understand the runtime itself: model lifecycle, process management, memory reservations, scheduling, storage, API compatibility, and where the actual inference engine should begin and end.</p>
<p>Building the smaller version makes those boundaries visible.</p>
<h2>What&#39;s Next</h2>
<p>The current scheduler deliberately serializes requests and is still based on a single mutex.</p>
<p>That&#39;s enough to make the lifecycle deterministic, but it&#39;s also the obvious next architectural constraint to remove.</p>
<p>After that: better scheduling, model removal, streaming responses, and an MLX backend.</p>
<p>The project is still small enough that every abstraction has a reason to exist, which is exactly where I want it for now.</p>
`,Pt=Object.freeze(Object.defineProperty({__proto__:null,html:Ct,meta:Rt},Symbol.toStringTag,{value:"Module"})),Ot={title:"I Built a CLI to Answer One Question: What Will This Change Break?",date:"2026-08-27",tags:["programming","devops","go","opensource"]},$t=`<p>We&#39;ve all been there.</p>
<p>You open a repository, change a file that looks completely harmless, run the tests, and open a pull request.</p>
<p>Then someone comments:</p>
<blockquote>
<p>&quot;Careful. That module is also used by the billing pipeline.&quot;</p>
</blockquote>
<p>Or worse, nobody notices.</p>
<p>The change gets merged.</p>
<p>And something breaks.</p>
<p>The problem isn&#39;t necessarily bad code. In large or unfamiliar codebases, understanding the blast radius of a change is surprisingly difficult.</p>
<p>So I started building Serval.</p>
<p>Serval is a local-first CLI that tries to answer one simple question:</p>
<p><em>If I change this file, what am I likely to affect?</em></p>
<h2>The problem</h2>
<p>When I want to understand the impact of a change, I usually end up doing some combination of:</p>
<pre><code>rg &quot;someModule&quot;
git log
git blame
</code></pre>
<p>Then I inspect imports, search CI configuration, check which files usually change together, and rely on whatever knowledge I have about the repository.</p>
<p>That works.</p>
<p>But it is mostly manual.</p>
<p>And on a repository you don&#39;t know well, a large part of the process becomes guesswork.</p>
<p>I wanted something closer to:</p>
<pre><code>serval inspect src/auth/token.ts
</code></pre>
<p>and get:</p>
<pre><code>Target
  src/auth/token.ts

Direct impact
  src/auth/middleware.ts

Indirect impact
  src/api/client.ts

CI
  integration-auth.yml

Git history
  7 significant changes
  3 frequently co-changed modules

Risk
  HIGH: 82/100

  +28  14 downstream modules
  +20  critical path
  +14  high historical churn
  +12  frequently co-changed modules
  +8   CI workflow affected
</code></pre>
<p>Not a prediction.</p>
<p>Not:</p>
<blockquote>
<p>&quot;AI thinks this change might be dangerous.&quot;</p>
</blockquote>
<p>Evidence.</p>
<h2>Four signals instead of one</h2>
<p>Looking only at imports isn&#39;t enough.</p>
<p>A dependency graph can tell me:</p>
<pre><code>A -&gt; B -&gt; C
</code></pre>
<p>If I change C, I know that B and potentially A are affected.</p>
<p>Useful.</p>
<p>But repositories contain more information than their dependency graph.</p>
<h3>1. Dependency graph</h3>
<p>Serval scans the repository and builds a graph from language-native dependencies.</p>
<p>It currently understands repositories containing:</p>
<ul>
<li>JavaScript / TypeScript</li>
<li>Go</li>
<li>Python</li>
<li>Java</li>
<li>C</li>
</ul>
<p>For a target file, Serval walks the graph in the opposite direction and calculates its dependents.</p>
<p>That gives us the structural blast radius.</p>
<p>But structure is only the first signal.</p>
<h3>2. Git history</h3>
<p>Git contains something surprisingly close to the memory of a codebase.</p>
<p>If two files repeatedly change together, that&#39;s information.</p>
<p>If a module has been modified constantly during the last few months, that&#39;s information too.</p>
<p>So Serval looks at things like:</p>
<ul>
<li>historical churn</li>
<li>co-change frequency</li>
</ul>
<p>Imagine two files with identical dependency graphs.</p>
<p>One hasn&#39;t changed in two years.</p>
<p>The other changed nine times during the last 90 days and frequently changes together with 15 other modules.</p>
<p>Those files probably shouldn&#39;t receive the same risk score.</p>
<h3>3. CI configuration</h3>
<p>Then there is another graph hiding inside most repositories: CI/CD.</p>
<p>A change can trigger integration tests, builds, deployments or validation pipelines depending on path filters.</p>
<p>Serval currently understands configuration from:</p>
<ul>
<li>GitHub Actions</li>
<li>GitLab CI</li>
<li>Azure Pipelines</li>
<li>Jenkins</li>
</ul>
<p>This gives another useful piece of evidence: which automation does this change actually touch?</p>
<h3>4. Critical paths</h3>
<p>Some parts of a system simply deserve more attention.</p>
<p>Authentication is not the same as changing a README.</p>
<p>Payment logic is not the same as changing a CSS utility.</p>
<p>Serval therefore allows repository-specific critical-path rules through <code>.serval.yml</code>.</p>
<p>Again, this isn&#39;t trying to prove that something will break.</p>
<p>It is accumulating evidence that says: you should probably look at this change more carefully.</p>
<h2>Why the score is deterministic</h2>
<p>This became one of the most important design decisions in the project.</p>
<p>It would have been extremely easy to send the repository context to an LLM and ask:</p>
<blockquote>
<p>&quot;How risky is this change from 0 to 100?&quot;</p>
</blockquote>
<p>I deliberately didn&#39;t do that.</p>
<p>The core score produced by Serval is deterministic.</p>
<p>The same repository state and configuration produce the same result.</p>
<p>More importantly, every point can be explained.</p>
<p>Something like:</p>
<pre><code>Risk
  MEDIUM: 38/100

  +4   2 downstream modules
  +14  high historical churn
  +12  91 frequently co-changed modules
  +8   2 CI workflows affected
</code></pre>
<p>There is no hidden reasoning behind 38.</p>
<p>You can audit it.</p>
<p>You can disagree with it.</p>
<p>You can change the configuration.</p>
<p>But you can understand where it came from.</p>
<p>For engineering tooling, I think that property matters.</p>
<h2>So... no AI?</h2>
<p>Not exactly.</p>
<p>Serval does support AI explanations.</p>
<p>For example:</p>
<pre><code>serval inspect src/auth/token.ts --explain
</code></pre>
<p>The interesting part is the boundary.</p>
<p>The AI cannot change the score.</p>
<p>It only receives the deterministic analysis and explains it in natural language.</p>
<p>And because Serval is local-first, the default provider can be a local Ollama instance.</p>
<p>Other providers can be used through locally installed CLIs such as Claude, Codex or Gemini.</p>
<p>I like this architecture much more than putting an LLM at the center of the system:</p>
<pre><code>repository
    ↓
deterministic analysis
    ↓
risk model
    ↓
result
    ↓
optional AI explanation
</code></pre>
<p>The model explains evidence. It doesn&#39;t invent the evidence.</p>
<h2>Local-first was intentional</h2>
<p>Serval doesn&#39;t require:</p>
<ul>
<li>an account</li>
<li>a SaaS backend</li>
<li>uploading your repository</li>
<li>an API key for its core functionality</li>
</ul>
<p>The analysis happens locally.</p>
<p>That matters for developer tooling because the repository already contains everything needed for most of the analysis:</p>
<ul>
<li>source code</li>
<li>Git history</li>
<li>CI configuration</li>
<li>repository configuration</li>
</ul>
<p>Why send all of that somewhere else if we can calculate the answer locally?</p>
<h2>It can also become a CI gate</h2>
<p>The same analysis can run against your current diff:</p>
<pre><code>serval diff
</code></pre>
<p>or produce machine-readable output:</p>
<pre><code>serval diff --json
</code></pre>
<p>And this makes another use case possible:</p>
<pre><code>serval diff --fail-on high
</code></pre>
<p>If one of the changed files reaches HIGH risk, Serval exits with a non-zero status.</p>
<p>That means the tool can move from &quot;interesting information for the developer&quot; to &quot;a deterministic signal inside the delivery pipeline.&quot;</p>
<p>I&#39;m particularly interested in exploring this direction. Not as another quality gate that randomly blocks developers, but as a way to make the expected impact of a change visible before merge.</p>
<h2>Installing it</h2>
<p>Serval is written in Go and distributed through Homebrew.</p>
<pre><code>brew install AlbertoBarrago/tap/serval
</code></pre>
<p>Then, inside a Git repository:</p>
<pre><code>serval inspect path/to/file
</code></pre>
<p>or simply:</p>
<pre><code>serval path/to/file
</code></pre>
<p>There are also commands for inspecting the graph and history directly:</p>
<pre><code>serval graph path/to/file
serval history path/to/file
serval doctor
</code></pre>
<p>And because I have a soft spot for old-school CLI tooling:</p>
<pre><code>man serval
</code></pre>
<p>exists too.</p>
<h2>What I&#39;m trying to explore</h2>
<p>Serval is still young.</p>
<p>I&#39;m less interested in pretending that a 0-100 score can magically predict whether software will break and more interested in a different question:</p>
<p><em>How much useful information about change risk is already sitting inside our repositories?</em></p>
<p>Dependency graphs tell us what is connected.</p>
<p>Git tells us what historically moves together.</p>
<p>CI tells us what operational machinery is affected.</p>
<p>Repository rules tell us which areas deserve additional attention.</p>
<p>None of these signals is particularly revolutionary on its own.</p>
<p>Combining them into a small, local, explainable tool is the experiment.</p>
<p>And perhaps that&#39;s also where AI fits best in this kind of developer tooling: not replacing deterministic analysis, but sitting on top of it when natural-language reasoning is useful.</p>
<p>Serval is open source and MIT licensed.</p>
<p>Project: <a href="https://albz.it/serval/">albz.it/serval</a></p>
<p>Source: <a href="https://github.com/AlbertoBarrago/serval">github.com/AlbertoBarrago/serval</a></p>
<p>If you work on large repositories, monorepos, legacy systems, or CI-heavy projects, I&#39;d be particularly interested in hearing what signals you use before touching an unfamiliar part of the codebase.</p>
`,jt=Object.freeze(Object.defineProperty({__proto__:null,html:$t,meta:Ot},Symbol.toStringTag,{value:"Module"})),Dt={title:"Telemaco: a headless browser engine in Rust, without the Chromium",date:"2026-09-04",tags:["rust","browser","scraping","ai-agents","cdp","sideprojects"]},Bt=`<p><strong>Telemaco</strong> is a headless browser engine I&#39;ve been building in Rust. It runs real JavaScript through V8, keeps a real DOM tree, owns its own layout and paint pipeline, and speaks the Chrome DevTools Protocol, so Puppeteer and Playwright connect to it out of the box. No Chromium, no WebView, no 300 MB download. A 70 MB binary that starts instantly and loads a page in ~85 ms.</p>
<p>This is the story of how it came to be, why it exists, and the choices that shaped it.</p>
<h2>The problem: Chromium as a tax</h2>
<p>For years, &quot;headless browser&quot; has meant one thing: headless Chrome. It works, but it carries a cost you only notice when you scale it.</p>
<ul>
<li><strong>The download.</strong> Every CI runner, every fresh container, every teammate&#39;s laptop pulls a ~300 MB Chromium. Playwright and Puppeteer make this painless, which is exactly why nobody questions it.</li>
<li><strong>The memory.</strong> A single headless Chrome instance idles at 200+ MB. Spin up a few for parallel scraping and you&#39;re budgeting RAM like it&#39;s 2010.</li>
<li><strong>The startup.</strong> Two seconds to launch before you&#39;ve even loaded a page.</li>
<li><strong>The fingerprint.</strong> Headless Chrome is trivially detectable. If you&#39;re scraping anything that cares, you&#39;re already fighting an anti-bot arms race.</li>
</ul>
<p>None of this is inherent to the job. A browser engine is a parser, a DOM, a layout engine, a paint pipeline, and a JS runtime. Chromium is one very heavy way to assemble those pieces. I wanted a lighter one.</p>
<h2>The need that started it</h2>
<p>Two concrete needs drove the project.</p>
<p>First, <strong>efficient web search and extraction</strong>. I work with colleagues who spend their days pulling structured data out of the web, like Salesforce records, MDN docs, product pages. The tooling for that is either a raw HTTP client (which can&#39;t run JavaScript) or a full browser (which is overkill). There was no middle ground: something that runs real JS and a real DOM, but is small enough to treat as a utility, not an infrastructure project.</p>
<p>Second, <strong>end-to-end tests without Chromium</strong>. If you&#39;ve ever run a Playwright suite in CI, you know the drill: download the browser, hope the sandbox flags are right, watch the memory climb. I wanted the same CDP automation surface, the same <code>page.goto</code>, the same <code>page.evaluate</code>, but backed by something that doesn&#39;t need a browser install at all. A single binary that <em>is</em> the browser.</p>
<h2>Standing on the shoulders of many projects</h2>
<p>I didn&#39;t want to reinvent a browser from scratch, and I didn&#39;t have to. The Rust ecosystem has quietly assembled most of the pieces, and Telemaco is deliberately built on top of them.</p>
<ul>
<li><strong>Servo&#39;s components</strong>: <code>html5ever</code> for HTML parsing, <code>selectors</code> for CSS matching, <code>cssparser</code>, <code>servo_arc</code>. The DOM and CSS machinery that Mozilla&#39;s research browser spent years hardening.</li>
<li><strong><code>taffy</code></strong> for the layout engine, a pure-Rust flexbox/grid layout library.</li>
<li><strong><code>tiny-skia</code></strong> for rasterization and <strong><code>ab_glyph</code></strong> for glyph rendering, the paint pipeline, also pure Rust.</li>
<li><strong>V8 through <code>deno_core</code></strong> for JavaScript. Real V8, the same engine Chrome uses, so JS semantics are exactly what you expect.</li>
<li><strong><code>chromiumoxide</code></strong> and the Chrome DevTools Protocol for the automation surface.</li>
</ul>
<p>The project started as a fork of <strong>Obscura</strong> (Apache-2.0), a headless browser engine by h4ckf0r0day. That&#39;s the honest origin: I didn&#39;t start from a blank page, I started from a solid foundation and took it in a different direction. The crate names changed, the CLI surface changed, the project identity changed, and the codebase was adapted and extended for a practical, scraping- and agent-oriented focus. The attribution is in the repo&#39;s <code>NOTICE</code> file; this is a derivative work, and it says so.</p>
<h2>The architecture</h2>
<p>Telemaco is a workspace of nine crates, one layer per crate, with cross-crate calls going through the layer above rather than sideways:</p>
<table>
<thead>
<tr>
<th>Crate</th>
<th>Role</th>
</tr>
</thead>
<tbody><tr>
<td><code>telemaco-cli</code></td>
<td>CLI: <code>fetch</code>, <code>serve</code> (CDP server), <code>scrape</code>, <code>mcp</code></td>
</tr>
<tr>
<td><code>telemaco-cdp</code></td>
<td>Chrome DevTools Protocol server (WebSocket)</td>
</tr>
<tr>
<td><code>telemaco-js</code></td>
<td>V8/<code>deno_core</code> runtime; DOM shim + JS/Rust bridge</td>
</tr>
<tr>
<td><code>telemaco-dom</code></td>
<td>DOM tree</td>
</tr>
<tr>
<td><code>telemaco-net</code></td>
<td>HTTP client, stealth client, cookie jar, robots cache, tracker blocklist</td>
</tr>
<tr>
<td><code>telemaco-browser</code></td>
<td>The <code>Page</code> type, navigation, JS evaluation</td>
</tr>
<tr>
<td><code>telemaco-render</code></td>
<td>Selector cascade, retained layout, paint, screenshots, PDF</td>
</tr>
<tr>
<td><code>telemaco-mcp</code></td>
<td>Stateful MCP automation tools</td>
</tr>
<tr>
<td><code>telemaco</code></td>
<td>Embeddable Rust library API</td>
</tr>
</tbody></table>
<p>A few invariants shaped the whole design:</p>
<ul>
<li><strong>One V8 isolate per process.</strong> V8 is <code>!Send</code>, so all async runs on a <code>tokio</code> <code>LocalSet</code>, and every JS op goes through a single global lock. It serializes JS execution, which is fine for a browser engine; the DOM is single-threaded anyway.</li>
<li><strong>One bad page must never hang a worker.</strong> There&#39;s a V8 termination watchdog per page and a process-level hard deadline. A page that spins in an infinite loop gets killed, not the worker.</li>
<li><strong>SSRF by default.</strong> Loopback, RFC1918, and link-local fetches are blocked unless you explicitly pass <code>--allow-private-network</code>. A scraping tool that can reach your internal network is a liability; this closes it by default.</li>
</ul>
<h2>What it looks like</h2>
<p>Fetch a page and run real JavaScript:</p>
<pre><code class="language-bash">$ telemaco fetch https://news.ycombinator.com --eval &quot;document.title&quot;
Hacker News
</code></pre>
<p>Drive it like headless Chrome, from Puppeteer:</p>
<pre><code class="language-js">import puppeteer from &#39;puppeteer-core&#39;;

const browser = await puppeteer.connect({
  browserWSEndpoint: &#39;ws://127.0.0.1:9222/devtools/browser&#39;,
});
const page = await browser.newPage();
await page.goto(&#39;https://news.ycombinator.com&#39;);

const stories = await page.evaluate(() =&gt;
  Array.from(document.querySelectorAll(&#39;.titleline &gt; a&#39;))
    .map(a =&gt; ({ title: a.textContent, url: a.href }))
);
</code></pre>
<p>Scrape many URLs in parallel:</p>
<pre><code class="language-bash">$ telemaco scrape url1 url2 url3 --concurrency 25 --format json
</code></pre>
<p>And for AI agents, there&#39;s an MCP server that exposes the same browser to Claude Desktop, Cursor, or any MCP client:</p>
<pre><code class="language-json">{
  &quot;mcpServers&quot;: {
    &quot;telemaco&quot;: { &quot;command&quot;: &quot;telemaco&quot;, &quot;args&quot;: [&quot;mcp&quot;] }
  }
}
</code></pre>
<h2>The numbers</h2>
<table>
<thead>
<tr>
<th>Metric</th>
<th>Telemaco</th>
<th>Headless Chrome</th>
</tr>
</thead>
<tbody><tr>
<td>Memory</td>
<td>30 MB</td>
<td>200+ MB</td>
</tr>
<tr>
<td>Binary size</td>
<td>70 MB</td>
<td>300+ MB</td>
</tr>
<tr>
<td>Page load</td>
<td>85 ms</td>
<td>~500 ms</td>
</tr>
<tr>
<td>Startup</td>
<td>Instant</td>
<td>~2 s</td>
</tr>
<tr>
<td>Anti-detect</td>
<td>Built-in</td>
<td>None</td>
</tr>
<tr>
<td>Puppeteer / Playwright</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody></table>
<p>Roughly 12x faster page loads and 6x less memory on framework pages, with the same CDP automation surface.</p>
<h2>Why &quot;Telemaco&quot;</h2>
<p>The name is the son of Odysseus, the one who sets out to find news of his father. A searcher, by definition. It felt right for a tool whose whole job is to go out and bring back what&#39;s on the web.</p>
<h2>Not a product, a direction</h2>
<p>Telemaco isn&#39;t trying to sell anything. It&#39;s a different vision of what a browser engine can be: small enough to be a utility, fast enough to be a tool, and honest about where it comes from. It&#39;s built on the work of a lot of respected projects and people, like Servo, taffy, tiny-skia, deno_core, Obscura, and it&#39;s open source under Apache-2.0, so anyone can take it and point it at their own problem.</p>
<p>If you&#39;ve ever wished your scraping or your e2e tests didn&#39;t require a browser install, that&#39;s the itch it scratches. Clone it, build it, drive it.</p>
<ul>
<li>Landing page: <a href="https://albz.it/telemaco/">albz.it/telemaco</a></li>
<li>Source: <a href="https://github.com/AlbertoBarrago/telemaco">github.com/AlbertoBarrago/telemaco</a></li>
</ul>
`,qt=Object.freeze(Object.defineProperty({__proto__:null,html:Bt,meta:Dt},Symbol.toStringTag,{value:"Module"})),Ht={title:"wir: What Is Running, a Port and Process Inspector Written in C",date:"2025-12-30",tags:["c","systems-programming","cli","opensource"]},Gt=`<p>I recently released <strong>wir</strong> (What Is Running), a command-line tool written in C to inspect what&#39;s running on specific ports and get detailed process information. A project born from a practical need that turned into an opportunity to explore system programming in C.</p>
<h2>The Problem</h2>
<p>How many times have you had a port occupied without knowing which process is using it? Or needed to trace a process hierarchy to understand who spawned what? We usually resort to combinations of <code>lsof</code>, <code>netstat</code>, and <code>ps</code>, but why not have everything in a single command?</p>
<h2>The Solution</h2>
<p><code>wir</code> is a cross-platform tool (macOS and Linux) that allows you to:</p>
<ul>
<li>Discover which process is using a specific port</li>
<li>Get detailed information about a PID</li>
<li>Visualize the complete ancestry tree of a process</li>
<li>List all running processes</li>
<li>View a process&#39;s environment variables</li>
<li>Output in normal, short, JSON, or tree format</li>
<li>Receive security warnings for potentially risky configurations</li>
</ul>
<h2>Practical Examples</h2>
<pre><code class="language-bash"># Who&#39;s using port 8080?
wir --port 8080

# Info about a specific process
wir --pid 1234

# Show the process ancestry tree
wir --pid 1234 --tree

# JSON output for scripting
wir --port 3000 --json

# List all processes (short format)
wir --all --short

# Security warnings only
wir --port 8080 --warnings
</code></pre>
<h2>The Architecture</h2>
<p>The project is structured in a modular way:</p>
<ul>
<li><strong>Platform abstraction layer</strong>: handles differences between Linux (<code>/proc</code> parsing) and macOS (<code>libproc</code> and <code>sysctl</code>)</li>
<li><strong>Output formatting</strong>: supports multiple display modes without duplicating logic</li>
<li><strong>Consistent error handling</strong>: every allocation is checked, every resource is freed</li>
<li><strong>Strict memory management</strong>: no leaks, no undefined behavior</li>
</ul>
<h2>What I Learned</h2>
<p>Writing <code>wir</code> was an excellent opportunity to practice fundamental concepts:</p>
<ol>
<li><strong>System programming</strong>: interfacing with <code>/proc</code>, system calls, process management</li>
<li><strong>Cross-platform development</strong>: conditional compilation and different APIs for each OS</li>
<li><strong>Memory safety in C</strong>: manual memory management without a garbage collector</li>
<li><strong>Build systems</strong>: Makefile with automatic platform detection</li>
<li><strong>API design</strong>: clean and composable interface</li>
</ol>
<h2>I Don&#39;t Memorize Commands</h2>
<p>As my approach goes: I&#39;m not interested in memorizing the exact <code>lsof</code> or <code>netstat</code> commands. I prefer understanding the underlying architecture and building tools that solve the problem more elegantly. <code>wir</code> isn&#39;t just a wrapper, it&#39;s an abstraction that hides the complexity of OS differences.</p>
<h2>The Future</h2>
<p>The project is open to extensions:</p>
<ul>
<li>UDP port support</li>
<li>Advanced process filtering</li>
<li>Support for other OSes (BSD, etc.)</li>
<li>Performance optimizations</li>
<li>Additional output formats</li>
</ul>
<h2>Try It Out</h2>
<p><a href="https://github.com/AlbertoBarrago/wir">wir</a></p>
<p>It&#39;s a learning project, so feel free to experiment and extend it. Building system tools in C is a great way to understand what&#39;s really happening under the hood.</p>
<pre><code class="language-bash"># Build and install
brew tap AlbertoBarrago/tap
brew install wir

# Start using it
wir --port 3000
</code></pre>
`,Nt=Object.freeze(Object.defineProperty({__proto__:null,html:Gt,meta:Ht},Symbol.toStringTag,{value:"Module"}));function Wt(e){return[...e].sort((n,t)=>n.date.localeCompare(t.date))}const Ft=Object.assign({"/src/content/articles/development-is-dead.md":xt,"/src/content/articles/gitlab-alert.md":Et,"/src/content/articles/iron-doctrine.md":_t,"/src/content/articles/otelma.md":Pt,"/src/content/articles/serval-cli.md":jt,"/src/content/articles/telemaco.md":qt,"/src/content/articles/wir-what-is-running.md":Nt}),Ae=new Map,Y=Wt(Object.entries(Ft).map(([e,n])=>{const t=e.split("/").pop().replace(/\.md$/,"");return Ae.set(t,n.html),{slug:t,title:n.meta.title??t,date:n.meta.date??"",tags:n.meta.tags??[]}}));function he(e){return Ae.has(e)?Ae.get(e):null}const Be="alberto@portfolio:~",zt=Date.now(),qe=Object.freeze(["help","about","skills","experience","projects","lab","articles","utils","contact","cv","games","play","ls","tree","neofetch","history","date","clear","rss"]),Vt=Object.freeze([["help","help"],["about","about"],["skills","skills"],["projects","projects"],["lab","lab"],["articles","articles"],["utils","utils"],["games","games"],["contact","contact"]]),we=Object.freeze({space:"SPACE INVADERS",tetris:"TETRIS",pong:"PONG",flappy:"FLAPPY BIRD"}),Ut=Object.freeze({space:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"FIRE",key:" "},{label:"→",key:"ArrowRight"}],tetris:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"ROT",key:"ArrowUp"},{label:"→",key:"ArrowRight"},{label:"↓",key:"ArrowDown"}],pong:[{label:"START",key:"Enter"},{label:"↑",key:"ArrowUp"},{label:"↓",key:"ArrowDown"}],flappy:[{label:"START",key:"Enter"},{label:"FLAP",key:" "}]}),_e=Object.freeze({space:dt,tetris:yt,pong:bt,flappy:wt}),He=Object.freeze(["        /\\_/\\","       ( o.o )","        > ^ <","       /|   |\\","      (_|   |_)","         W W","","      I LOVE CAT"]),Ie=Object.freeze(["    _    _     ____   _____","   / \\  | |   | __ ) |__  /","  / _ \\ | |   |  _ \\   / /"," / ___ \\| |___| |_) | / /_","/_/   \\_\\_____|____/ /____|"]),$e="#%@*+=-<>/\\|",Yt=new Set(["ArrowLeft","ArrowRight","ArrowDown"]),ue=new Map,se=[];let be=0,te=null,pe=null,ee=null,X=null;const oe=document.getElementById("app");function Jt(){const e=Vt.map(([n,t])=>`<button class="mobile-command" type="button" data-command="${t}">${n}</button>`).join("");return`<main class="terminal" aria-label="Alberto Barrago portfolio terminal">
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">Terminal command</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${Be}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">Type help to list available commands. Use up and down arrows for command history.</p>
			<nav class="mobile-commands" aria-label="Quick terminal commands">${e}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`}function Ge(){return`<div class="ascii-banner accent" role="img" aria-label="ALBZ">${Ie.join(`
`)}</div>
<div class="boot-copy"><span class="muted">Portfolio shell v${Le}</span>
<span>${je} · Product Builder</span>

15+ years: from INPS distribution systems to products for global brands.
Technical leadership · Architecture · Web · Mobile · Cloud · AI

I turn ambiguity into reliable systems and useful products.
<span class="muted">Based in ${Me}</span>
${Y.length?`
<span class="muted">Latest write-up:</span> <button class="inline-command command" data-command="cat ${Y[Y.length-1].slug}.md">${Y[Y.length-1].title} →</button>`:""}

Type <button class="inline-command command" data-command="help">help</button> to explore, or use the shortcuts below.</div>`}function Kt(){return`<div class="output-title">Available commands</div>
<div class="command-list">${[["about","Short profile and current role"],["skills","Technical toolbox by area"],["experience","Professional timeline"],["projects","Selected open-source work and Homebrew formulae"],["lab","Experimental work in progress"],["articles","Technical articles and notes"],["rss","Subscribe to the articles feed"],["utils","Useful free resources and links"],["contact","Ways to get in touch"],["cv","Download my resume"],["games","List embedded retro games"],["play &lt;game&gt;","Launch space, tetris, pong, or flappy"],["ls / tree","Browse the portfolio filesystem"],["neofetch","Compact system profile"],["history / date / clear","Terminal utilities"]].map(([n,t])=>`<div><button class="inline-command command" data-command="${n.split(" ")[0]}">${n}</button><span class="muted">${t}</span></div>`).join("")}</div>
<div class="output-note">Tip: press <span class="key">Tab</span> to autocomplete and <span class="key">↑</span>/<span class="key">↓</span> for history.</div>`}function Xt(){return`<div class="output-title">${tt}</div>
<div class="key-value"><span class="label">role</span><span>${je}</span>
<span class="label">location</span><span>${Me}</span>
<span class="label">focus</span><span>Product engineering · architecture · technical leadership</span>
<span class="label">status</span><span class="green">Building useful things</span></div>
<p class="prose">${nt}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">view projects</button><button class="inline-command command" data-command="contact">contact me</button><button class="inline-command command" data-command="cv">download cv</button></div>`}function Zt(){return`<div class="output-title">Technical toolbox</div>
<blockquote class="skills-quote">Started with a single tool, today I find myself conducting an entire orchestra.</blockquote>
<p class="skills-whisper">I'm an AI whisperer.</p>
<div class="skills-list">${Object.entries(ot).map(([e,n])=>`<div class="skill-row"><span class="label">${e}</span><span>${n.join("  ·  ")}</span></div>`).join("")}</div>`}function Qt(){return`<div class="output-title">Experience</div>
<div class="timeline">${it.map(e=>`<article class="timeline-item">
	<span class="timeline-period">${e.period}</span>
	<div><div><span class="green">${e.role}</span> <span class="muted">@ ${e.company}</span></div>
	<p>${e.highlight}</p></div>
</article>`).join("")}</div>`}function en(){return`<div class="output-title">Selected projects</div>
<div class="project-list">${rt.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.language}</span></div>
	<p>${e.description}</p>
</article>`).join("")}</div>
<div class="output-title output-title-spaced">Homebrew formulae</div>
<p class="prose">Command-line tools I've packaged and maintain via Homebrew taps.</p>
<div class="project-list">${st.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.tap}</span></div>
	<p>${e.description}</p>
	<p class="brew-install"><code>${e.install}</code></p>
</article>`).join("")}</div>`}function tn(){return`<div class="output-title">Workbench Lab</div>
<p class="prose">Experimental products in active development. Scope and direction may evolve as ideas are validated.</p>
${at.map(n=>`<article class="project-item lab-project">
	<div class="lab-project-meta"><span class="project-status">${n.status}</span><span class="project-language">${n.language}</span></div>
	<a class="terminal-link project-name" href="${n.url}" target="_blank" rel="noopener noreferrer">${n.name} ↗</a>
	<p>${n.description}</p>
	<p class="lab-project-focus"><span class="label">focus</span>${n.focus}</p>
</article>`).join("")}`}function Ne(e){if(!e)return e;const n=new Date(`${e}T00:00:00`);return Number.isNaN(n.getTime())?e:new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(n)}function nn(){return Y.length===0?`<div class="output-title">Articles</div>
<p class="prose muted">No articles yet.</p>`:`<div class="output-title">Articles</div>
<div class="project-list">${[...Y].sort((n,t)=>n.date.localeCompare(t.date)).map(n=>`<article class="project-item">
	<div><button class="terminal-link project-name inline-command" data-command="cat ${n.slug}.md">${n.title} ↗</button><span class="project-language">${Ne(n.date)}</span></div>
	<p class="muted">${n.tags.join("  ·  ")}</p>
</article>`).join("")}</div>`}const on=200;function an(e){const n=e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),t=n?n.split(" ").length:0;return{words:t,chars:n.length,minutes:Math.max(1,Math.round(t/on))}}function rn(e){const n=Y.findIndex(p=>p.slug===e),t=Y[n],i=an(he(e)??""),o=Y[n-1],a=Y[n+1],r=[o?`<button class="reader-nav-link" type="button" data-action="read-article" data-slug="${o.slug}">← ${o.title}</button>`:"<span></span>",a?`<button class="reader-nav-link reader-nav-next" type="button" data-action="read-article" data-slug="${a.slug}">${a.title} →</button>`:"<span></span>"].join("");return`<div class="article-reader" id="article-reader">
		<div class="article-reader-topbar">
			<button class="reader-back" type="button" data-action="close-reader">back</button>
			<div class="reader-actions">
				<button class="reader-action reader-toc-toggle" type="button" data-action="toggle-toc" id="reader-toc-toggle" hidden>chapters</button>
				<button class="reader-action" type="button" data-action="share-article" data-slug="${e}">share</button>
				<button class="reader-action" type="button" data-action="copy-article-link" data-slug="${e}">copy link</button>
				<span class="reader-hint muted">ESC · CLOSE</span>
			</div>
		</div>
		<div class="article-reader-body">
			<aside class="reader-toc" id="reader-toc" hidden></aside>
			<div class="article-reader-main">
				<article class="prose">
					<h1>${t.title}</h1>
					<p class="reader-meta muted">${Ne(t.date)}${t.tags.length?` · ${t.tags.join(" · ")}`:""}</p>
					<p class="reader-stats muted">${i.words.toLocaleString()} words · ${i.chars.toLocaleString()} chars · ~${i.minutes} min read</p>
					${he(e)}
				</article>
				<nav class="reader-nav">${r}</nav>
			</div>
		</div>
	</div>`}function sn(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function ln(e){const n=e.querySelector("#reader-toc"),t=e.querySelectorAll(".prose h2, .prose h3");if(t.length===0)return;const i=new Set,o=Array.from(t).map(r=>{let p=sn(r.textContent??"");for(;i.has(p)||!p;)p=`${p||"section"}-${i.size+1}`;return i.add(p),r.id=p,{id:p,text:r.textContent??"",level:r.tagName==="H2"?2:3}});n.innerHTML=`<span class="reader-toc-title">chapters</span><ol class="reader-toc-list">${o.map(r=>`<li class="reader-toc-item level-${r.level}"><button class="reader-toc-link" type="button" data-action="goto-heading" data-target="${r.id}">${r.text}</button></li>`).join("")}</ol>`,n.hidden=!1,e.classList.add("has-toc");const a=e.querySelector("#reader-toc-toggle");a&&(a.hidden=!1),cn(e,Array.from(t))}function cn(e,n){ee==null||ee.disconnect(),X==null||X.container.removeEventListener("scroll",X.handler),X=null;const t=e.querySelector(".article-reader-body"),i=e.querySelectorAll(".reader-toc-link"),o=new Set,a=b=>{i.forEach(A=>A.classList.toggle("is-active",A.dataset.target===b))},r=()=>t.scrollTop+t.clientHeight>=t.scrollHeight-4;ee=new IntersectionObserver(b=>{for(const k of b)k.isIntersecting?o.add(k.target.id):o.delete(k.target.id);const A=n.find(k=>o.has(k.id));A?a(A.id):r()&&a(n[n.length-1].id)},{root:t,rootMargin:"0px 0px -72% 0px",threshold:0}),n.forEach(b=>ee.observe(b)),a(n[0].id);const p=()=>{r()&&a(n[n.length-1].id)};t.addEventListener("scroll",p,{passive:!0}),X={container:t,handler:p}}function Se(e){var i;(i=document.getElementById("article-reader"))==null||i.remove(),D.blur();const n=document.createElement("div");n.innerHTML=rn(e);const t=n.firstElementChild;oe.appendChild(t),t.scrollTop=0,ln(t),window.location.pathname!==`/articles/${e}/`&&window.history.pushState(null,"",`/articles/${e}/`)}function We(){var e;ee==null||ee.disconnect(),ee=null,X==null||X.container.removeEventListener("scroll",X.handler),X=null,(e=document.getElementById("article-reader"))==null||e.remove(),window.location.pathname.startsWith("/articles/")&&window.history.pushState(null,"","/"),D==null||D.focus({preventScroll:!0})}function Ee(e){return`${window.location.origin}/articles/${e}/`}function dn(e){const n=e.textContent;e.textContent="copied ✓",e.disabled=!0,window.setTimeout(()=>{e.textContent=n,e.disabled=!1},1500)}async function Fe(e,n){try{await navigator.clipboard.writeText(Ee(e)),dn(n)}catch{window.prompt("Copy this link:",Ee(e))}}async function pn(e,n){const t=Y.find(o=>o.slug===e),i=Ee(e);if(navigator.share){try{await navigator.share({title:(t==null?void 0:t.title)??e,url:i})}catch{}return}await Fe(e,n)}function hn(){return`<div class="output-title">/utils</div>
<p class="prose">Useful free resources: books, courses, docs, and tools I keep coming back to.</p>
${lt.map(e=>`<div class="utils-group">
	<div class="utils-category">${e.category}</div>
	<div class="project-list">${e.items.map(n=>`<article class="project-item">
		<div><a class="terminal-link project-name" href="${n.url}" target="_blank" rel="noopener noreferrer">${n.name} ↗</a></div>
		<p>${n.description}</p>
	</article>`).join("")}</div>
</div>`).join("")}</div>`}function Te(){return`<div class="output-title">Let's build something useful</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${ye.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${ye.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${ye.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">location</span><span>${Me}</span></div>`}function un(){return`<div class="output-title">/games</div>
<div class="game-list">${Object.entries(we).map(([e,n])=>`<button class="game-command" data-command="play ${e}"><span>${n}</span><span class="muted">play ${e}</span></button>`).join("")}</div>
<div class="output-note">Games open fullscreen. Press <span class="key">Esc</span> to return.</div>`}function mn(){return`<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command directory" data-command="lab">lab/</button>
├── <button class="inline-command directory" data-command="articles">articles/</button>
├── <button class="inline-command directory" data-command="utils">utils/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`}const fn=[" █████  ██     ","██   ██ ██     ","███████ ██     ","██   ██ ██     ","██   ██ ███████","               ","██████  ███████","██   ██     ██ ","██████     ██  ","██   ██   ██   ","██████  ███████"].join(`
`);function gn(e){const n=Math.floor(e/1e3),t=[["day",Math.floor(n/86400)],["hour",Math.floor(n/3600)%24],["min",Math.floor(n/60)%60],["sec",n%60]].filter(([,o])=>o>0);return(t.length?t:[["sec",0]]).slice(0,2).map(([o,a])=>`${a} ${o}${a===1?"":"s"}`).join(", ")}function yn(){const e=navigator.userAgent,n=[[/Firefox\/(\d+)/,"Firefox"],[/Edg\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+).*Safari/,"Safari"]];for(const[t,i]of n){const o=e.match(t);if(o)return`${i} ${o[1]}`}return"Web browser"}function bn(){const e="Zoser@Sosaria",n=[["OS",`albz-sh ${Le}`],["Host","GitHub Pages"],["Kernel","Vanilla JS (ES2022)"],["Uptime",gn(Date.now()-zt)],["Packages","0 (runtime)"],["Shell","albz-sh"],["Guild","AdE"],["Alignment","Player Killer"],["Resolution",`${window.screen.width}x${window.screen.height}`],["Terminal",yn()],["Commands",String(qe.length)],["Articles",String(Y.length)],["Games",String(Object.keys(_e).length)],["Build","2026-09-22"]];return`<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">${fn}</div><div><span class="accent">${e}</span>
<span class="muted">${"─".repeat(e.length)}</span>
${n.map(([t,i])=>`<span><span class="label">${t}:</span> ${de(i)}</span>`).join(`
`)}
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`}function wn(){return'<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command directory" data-command="lab">lab/</button><button class="inline-command directory" data-command="articles">articles/</button><button class="inline-command directory" data-command="utils">utils/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>'}function ze(e,n){return e.map(t=>t.split("").map(i=>i===" "||Math.random()>=n?i:$e[Math.floor(Math.random()*$e.length)]).join("")).join(`
`)}function vn(e){return ze(He,e)}function kn(){const e=ne.querySelector(".ascii-banner");if(!e)return;const n=Ie.join(`
`),t=9;let i=0;const o=window.setInterval(()=>{if(i+=1,i>=t){window.clearInterval(o),e.textContent=n;return}e.textContent=ze(Ie,Math.max(0,.55-i*.06))},70)}function Sn(){const e=document.createElement("div");e.className="output-block ascii-banner accent",ne.appendChild(e);const n=6;let t=0;const i=window.setInterval(()=>{t+=1,e.textContent=t>=n?He.join(`
`):vn(Math.max(0,.6-t*.12)),requestAnimationFrame(()=>{ne.scrollTop=ne.scrollHeight}),t>=n&&(window.clearInterval(i),G('<span class="green">Purring in binary.</span>'))},90)}function Tn(e){const n=document.createElement("div");n.className="output-block command-echo";const t=document.createElement("span");t.className="prompt",t.innerHTML=`<span class="prompt-user">${Be}</span><span class="prompt-symbol">$</span>`;const i=document.createElement("span");i.textContent=e,n.append(t,i),ne.appendChild(n)}function G(e,n=""){const t=`output-block ${n}`.trim();for(const o of Array.from(ne.children))o.className===t&&o.innerHTML===e&&o.remove();const i=document.createElement("div");i.className=t,i.innerHTML=e,ne.appendChild(i),requestAnimationFrame(()=>{i.scrollIntoView({block:"start"})})}function Ve(e){const n=e.trim();if(!n)return;Tn(n),se.at(-1)!==n&&se.push(n),be=se.length;const[t,...i]=n.split(/\s+/),o=t.toLowerCase(),a=i.join(" ").toLowerCase();if(o==="clear"){ne.replaceChildren(),G(Ge(),"welcome-block");return}if(["about","whoami","cat"].includes(o)){o!=="cat"||!a||a==="about.txt"?G(Xt()):a==="contact.vcf"?G(Te()):a.endsWith(".md")&&he(a.slice(0,-3))?Se(a.slice(0,-3)):G(`<span class="red">cat: ${de(a)}: No such file</span>`);return}const r={help:Kt,skills:Zt,experience:Qt,projects:en,lab:tn,articles:nn,utils:hn,contact:Te,games:un,ls:wn,tree:mn,neofetch:bn};if(r[o]){G(r[o]());return}if(o==="cv"){ct(),G('<span class="green">Downloading albertobarrago_cv.pdf…</span>');return}if(o==="history"){G(se.map((p,b)=>`<div><span class="muted">${String(b+1).padStart(3," ")}</span>  ${de(p)}</div>`).join(""));return}if(o==="date"){G(new Intl.DateTimeFormat("it-IT",{dateStyle:"full",timeStyle:"long"}).format(new Date));return}if(o==="rss"){G(`<div class="output-title">RSS feed</div>
<p class="prose">Subscribe to my articles feed in any RSS reader:</p>
<div class="key-value"><span class="label">url</span><a class="terminal-link" href="/feed.xml" target="_blank" rel="noopener">https://albz.it/feed.xml</a></div>`);return}if(o==="play"){xn(a)?(G(`<span class="green">Launching ${we[a]}…</span>`),In(a)):G(`<span class="red">Unknown game${a?`: ${de(a)}`:""}.</span> Try <button class="inline-command command" data-command="games">games</button>.`);return}if(o==="1337"){Sn();return}if(o==="sudo"&&a==="hire alberto"){G('<span class="green">Permission granted. Opening contact details…</span>'),G(Te());return}G(`<span class="red">command not found: ${de(o)}</span><br>Type <button class="inline-command command" data-command="help">help</button> to see available commands.`)}function xn(e){return Object.hasOwn(_e,e)}function An(e){const n=Ut[e].map(t=>`<button class="game-control-button" type="button" data-control-key="${t.key}">${t.label}</button>`).join("");return`<div class="game-fullscreen" id="game-overlay">
		<div class="game-scanlines" aria-hidden="true"></div>
		<div class="game-topbar"><span class="game-title">${we[e]}</span><button class="game-exit" type="button" data-action="exit-game">ESC · CLOSE</button></div>
		<canvas class="game-canvas" aria-label="${we[e]} game"></canvas>
		<div class="game-touch-controls">${n}</div>
	</div>`}function In(e){ve(),D.blur();const n=document.createElement("div");n.innerHTML=An(e);const t=n.firstElementChild;oe.appendChild(t);const i=t.querySelector(".game-canvas");requestAnimationFrame(()=>{t.isConnected&&(pe=_e[e](i,ve))})}function ve(){var e;pe==null||pe(),pe=null,Ue(),(e=document.getElementById("game-overlay"))==null||e.remove(),D==null||D.focus({preventScroll:!0})}function ke(e,n){window.dispatchEvent(new KeyboardEvent(n,{key:e,bubbles:!0,cancelable:!0}))}function En(e){var a;const t=e.target.closest("[data-control-key]"),i=t==null?void 0:t.dataset.controlKey;if(!t||!i)return;e.preventDefault(),(a=t.setPointerCapture)==null||a.call(t,e.pointerId);const o={key:i,button:t};ue.set(e.pointerId,o),t.classList.add("is-pressed"),ke(i,"keydown"),Yt.has(i)&&(o.delayId=window.setTimeout(()=>{o.intervalId=window.setInterval(()=>ke(i,"keydown"),85)},220))}function Re(e){const n=ue.get(e.pointerId);n&&(e.preventDefault(),n.delayId&&window.clearTimeout(n.delayId),n.intervalId&&window.clearInterval(n.intervalId),n.button.classList.remove("is-pressed"),ue.delete(e.pointerId),ke(n.key,"keyup"))}function Ue(){for(const e of ue.values())e.delayId&&window.clearTimeout(e.delayId),e.intervalId&&window.clearInterval(e.intervalId),e.button.classList.remove("is-pressed"),ke(e.key,"keyup");ue.clear()}oe.innerHTML=Jt();const ne=document.getElementById("terminal-output"),Mn=document.getElementById("terminal-form"),D=document.getElementById("terminal-input");G(Ge(),"welcome-block");kn();kt();function Ye(){var e,n;return((e=window.location.pathname.match(/^\/articles\/([^/]+)\/?$/))==null?void 0:e[1])??((n=window.location.hash.match(/^#article\/(.+)$/))==null?void 0:n[1])}const xe=Ye();xe&&he(xe)&&Se(xe);window.addEventListener("popstate",()=>{var n;const e=Ye();e&&he(e)?Se(e):(n=document.getElementById("article-reader"))==null||n.remove()});Mn.addEventListener("submit",e=>{e.preventDefault();const n=D.value;D.value="",Ve(n)});D.addEventListener("input",()=>{te=null});D.addEventListener("keydown",e=>{if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const n=e.key==="ArrowUp"?-1:1;be=Math.max(0,Math.min(se.length,be+n)),D.value=se[be]??"",requestAnimationFrame(()=>D.setSelectionRange(D.value.length,D.value.length));return}if(e.key==="Tab"){e.preventDefault();const n=D.value.trim().toLowerCase();if(!n){G(`<span class="muted">Type 'help' to see the list of available commands.</span>`),te=null;return}const t=qe.filter(o=>o.startsWith(n));if(t.length===0){te=null;return}if(t.length===1){D.value=t[0],te=null;return}const i=t.reduce((o,a)=>{let r=0;for(;r<o.length&&r<a.length&&o[r]===a[r];)r+=1;return o.slice(0,r)});if(i.length>n.length){D.value=i,te=null;return}te===n?(G(t.map(o=>`<span class="command">${o}</span>`).join("  ")),te=null):te=n}});oe.addEventListener("click",e=>{var b,A,k;const n=e.target,t=document.querySelector("#reader-toc.is-open");t&&!n.closest("#reader-toc")&&!n.closest('[data-action="toggle-toc"]')&&t.classList.remove("is-open");const i=n.closest('[data-action="read-article"]');if(i!=null&&i.dataset.slug){Se(i.dataset.slug);return}if(n.closest('[data-action="close-reader"]')){We();return}const o=n.closest('[data-action="share-article"]');if(o!=null&&o.dataset.slug){pn(o.dataset.slug,o);return}const a=n.closest('[data-action="copy-article-link"]');if(a!=null&&a.dataset.slug){Fe(a.dataset.slug,a);return}if(n.closest('[data-action="toggle-toc"]')){(b=document.getElementById("reader-toc"))==null||b.classList.toggle("is-open");return}const r=n.closest('[data-action="goto-heading"]');if(r!=null&&r.dataset.target){const v=document.getElementById("article-reader");(A=document.getElementById(r.dataset.target))==null||A.scrollIntoView({behavior:"smooth",block:"start"}),(k=v==null?void 0:v.querySelector("#reader-toc"))==null||k.classList.remove("is-open");return}const p=n.closest("[data-command]");p!=null&&p.dataset.command&&Ve(p.dataset.command),n.closest('[data-action="exit-game"]')&&ve(),!n.closest("a")&&!document.getElementById("game-overlay")&&!document.getElementById("article-reader")&&D.focus({preventScroll:!0})});oe.addEventListener("pointerdown",En);oe.addEventListener("pointerup",Re);oe.addEventListener("pointercancel",Re);oe.addEventListener("lostpointercapture",Re);window.addEventListener("blur",Ue);document.addEventListener("keydown",e=>{e.key==="Escape"&&document.getElementById("game-overlay")&&ve(),e.key==="Escape"&&document.getElementById("article-reader")&&We()});
