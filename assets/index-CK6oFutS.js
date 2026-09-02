(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const Ze="4.6.0",Qe={version:Ze},Ie="Alberto Barrago",_e="Senior Software Engineer",xe="Cagliari, Italy",Be="albertobarrago@gmail.com",Oe="albertobarrago_cv.pdf",et="Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems.",tt={frontend:["Angular","React","Vanilla JS"],backend:["Node.js","Fastify","FastAPI","Flask","Spring Boot"],apple:["Swift","SwiftUI","SwiftData","AppKit","iOS/macOS"],database:["MongoDB","Oracle","MySQL"],devops:["Docker","GitHub/GitLab CI","Azure DevOps"],tools:["Git","Neovim","tmux","Zed"],ai:["LLM Integration","Prompt Engineering","AI Agents"]},nt=[{role:"Tech Leader / Senior Software Engineer",company:"C22 Consulting",period:"2026 - Present",highlight:"Leading React, iOS, and Java architecture across active projects; mentoring developers and evangelizing AI workflows with Claude and MCP"},{role:"Senior Software Engineer / DevOps",company:"Minsait/Indra",period:"2023 - 2025",highlight:"Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time"},{role:"Senior Software Developer",company:"Softfobia",period:"2022 - 2023",highlight:"Led full-stack teams, 20% load time improvement"},{role:"Software Developer",company:"Accenture",period:"2021 - 2022",highlight:"Kafka microservices architecture, Angular 12 apps"},{role:"Software Developer",company:"Sinossi",period:"2016 - 2021",highlight:"Mobile apps for Deutsche Bank, TIM (Fortune 500)"}],it=[{name:"Markasso",description:"A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas.",url:"https://markasso.it",language:"TypeScript (0 deps)",status:"Experimental · Work in progress",focus:"Validating a direct, distraction-free interaction model for visual thinking."},{name:"Iron Doctrine",description:"A real-time strategy game with a deterministic ECS engine, running React + Pixi.js on the client, with lockstep online 1v1 multiplayer.",url:"https://iron-doctrine-omega.vercel.app/",language:"TypeScript (pnpm monorepo)",status:"Experimental · Work in progress",focus:"Deterministic simulation shared across local and networked play, driven by command replay."}],ot=[{name:"RSS-Reader",description:"A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat.",url:"https://github.com/AlbertoBarrago/RSS-Reader",language:"Swift"},{name:"Timelog",description:"A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData.",url:"https://github.com/AlbertoBarrago/Timelog",language:"Swift"},{name:"DockDock",description:"A native macOS utility that shows live window previews when you hover over Dock icons.",url:"https://github.com/AlbertoBarrago/DockDock",language:"Swift"},{name:"Sgommello",description:"Break reminder for macOS: a monster breaks your screen until you take a real break.",url:"https://github.com/AlbertoBarrago/Sgommello",language:"Swift"}],at=[{name:"wir",description:"What Is Running - Port and Process Inspector.",install:"brew install AlbertoBarrago/tap/wir",url:"https://github.com/AlbertoBarrago/wir",tap:"AlbertoBarrago/tap"},{name:"jm",description:"Switch between JDKs registered with macOS. Primary shell command: jm.",install:"brew install AlbertoBarrago/tap/jm",url:"https://github.com/AlbertoBarrago/jm",tap:"AlbertoBarrago/tap"},{name:"serval",description:"Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval.",install:"brew install AlbertoBarrago/tap/serval",url:"https://github.com/AlbertoBarrago/serval",tap:"AlbertoBarrago/tap"},{name:"otelma",description:"A local LLM inference runtime, built from scratch in Go for Apple Silicon on top of llama.cpp. Smaller and more didactic than Ollama, with a configurable unified memory budget as an explicit constraint. v0.2.",install:"brew install AlbertoBarrago/tap/otelma",url:"https://github.com/AlbertoBarrago/otelma",tap:"AlbertoBarrago/tap"}],rt=[{category:"Free programming books",items:[{name:"Free Programming Books (IT)",description:"Curated list of free programming books in Italian.",url:"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-it.md"},{name:"Free Programming Books (EN)",description:"The full English-language list of free programming books.",url:"https://github.com/EbookFoundation/free-programming-books"},{name:"The Odin Project",description:"Free, open-source full-stack curriculum (HTML/CSS, JS, Node, Rails).",url:"https://www.theodinproject.com/"},{name:"freeCodeCamp",description:"Free certifications and interactive courses for web development.",url:"https://www.freecodecamp.org/"}]},{category:"Free courses & practice",items:[{name:"Exercism",description:"Free coding exercises and mentoring across 70+ languages.",url:"https://exercism.org/"},{name:"Roadmap.sh",description:"Step-by-step roadmaps and guides for developer roles.",url:"https://roadmap.sh/"},{name:"Khan Academy",description:"Free courses in math, science, and computer programming.",url:"https://www.khanacademy.org/"},{name:"MIT OpenCourseWare",description:"Free lecture notes, exams, and videos from MIT courses.",url:"https://ocw.mit.edu/"}]},{category:"Docs & references",items:[{name:"MDN Web Docs",description:"The definitive reference for web platform technologies.",url:"https://developer.mozilla.org/"},{name:"DevDocs",description:"Fast, offline-capable API documentation browser.",url:"https://devdocs.io/"},{name:"Explain Shell",description:"Paste a shell command to see what each part does.",url:"https://explainshell.com/"},{name:"Regex101",description:"Online regex tester and debugger with live explanation.",url:"https://regex101.com/"}]},{category:"Free tools & perks",items:[{name:"Markasso",description:"My own fast, minimal, keyboard-first whiteboard engine. Marker + Picasso. No framework. No runtime. Just canvas.",url:"https://markasso.it"},{name:"GitHub Student Pack",description:"Free developer tools and credits for students.",url:"https://education.github.com/pack"},{name:"Coolors",description:"Free color palette generator and contrast checker.",url:"https://coolors.co/"},{name:"TinyPNG",description:"Compress PNG/WebP images for the web, free tier.",url:"https://tinypng.com/"}]}],ye={github:"https://github.com/AlbertoBarrago",email:`mailto:${Be}`,bsky:"https://bsky.app/profile/albzoser.bsky.social"},Re=Qe.version,lt=()=>{const e=document.createElement("a");e.href=Oe,e.download=Oe,e.dispatchEvent(new MouseEvent("click"))};function st(e,n){const t=e.getContext("2d");if(!t)return()=>{};const a=8,i=5,o=32,r=24,p=12,b=40,A=20,k=3,S=12,l=5,_=7,q=4,V=.003,L=["#ff6b6b","#ff6b6b","#ffbd2e","#ffbd2e","#00ff41"],I=1e3/60;let u="waiting",y=0,O=3,M=parseInt(localStorage.getItem("spaceInvadersHigh")||"0",10),H=0,F=0,m=0,x=[],v=[],R=[];function s(){const c=e.width||e.clientWidth||1,g=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const w=e.width/c,U=e.height/g;m=Math.max(0,Math.min(e.width-b,m*w));for(const X of x)X.x*=w,X.y*=U;for(const X of v)X.x*=w,X.y*=U;for(const X of R)X.x*=w,X.y*=U;u!=="playing"&&(m=e.width/2-b/2)}s();const T=new ResizeObserver(s);T.observe(e);const $=()=>e.height-40;let E=1,f=0,D=40;const j=10,Y=20;function C(){x=[];const c=a*(o+p)-p,g=(e.width-c)/2;for(let w=0;w<i;w++)for(let U=0;U<a;U++)x.push({x:g+U*(o+p),y:60+w*(r+p),row:w,alive:!0});E=1,f=0,D=40}let N=0;const z={};function K(c){if(c.key==="Escape"){n();return}(u==="waiting"||u==="gameover"||u==="won")&&c.key==="Enter"&&(u="playing",y=0,O=3,v=[],R=[],m=e.width/2-b/2,C()),z[c.key]=!0,(c.key===" "||c.key==="ArrowLeft"||c.key==="ArrowRight")&&c.preventDefault()}function ce(c){z[c.key]=!1}window.addEventListener("keydown",K),window.addEventListener("keyup",ce);function he(c){if(u==="playing"){z.ArrowLeft&&m>0&&(m-=l*c),z.ArrowRight&&m<e.width-b&&(m+=l*c),m=Math.max(0,Math.min(e.width-b,m)),N>0&&(N=Math.max(0,N-c)),z[" "]&&N===0&&(v.push({x:m+b/2-k/2,y:$()-S}),N=15);for(let g=v.length-1;g>=0;g--){if(v[g].y-=_*c,v[g].y<0){v.splice(g,1);continue}for(const w of x)if(w.alive&&v[g]&&v[g].x<w.x+o&&v[g].x+k>w.x&&v[g].y<w.y+r&&v[g].y+S>w.y){w.alive=!1,v.splice(g,1),y+=10,y>M&&(M=y,localStorage.setItem("spaceInvadersHigh",String(M)));const U=x.filter(X=>X.alive).length;U>0&&(D=Math.max(4,Math.floor(40*(U/(i*a)))));break}}if(x.every(g=>!g.alive)){u="won";return}if(f+=c,f>=D){f=0;let g=!1;for(const w of x)if(w.alive&&(E>0&&w.x+o+j>e.width-10||E<0&&w.x-j<10)){g=!0;break}if(g){E*=-1;for(const w of x)w.y+=Y}else for(const w of x)w.x+=j*E;for(const w of x)if(w.alive&&w.y+r>=$()){u="gameover";return}}for(const g of x.filter(w=>w.alive))Math.random()<V*c&&R.push({x:g.x+o/2-k/2,y:g.y+r});for(let g=R.length-1;g>=0;g--){if(R[g].y+=q*c,R[g].y>e.height){R.splice(g,1);continue}if(R[g].x<m+b&&R[g].x+k>m&&R[g].y<$()+A&&R[g].y+S>$()&&(R.splice(g,1),O--,O<=0)){u="gameover";return}}}}function ue(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),u==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("SPACE INVADERS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Fire = Shoot",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+M,e.width/2,e.height/2+78),t.textAlign="left";return}t.fillStyle="#00bfff",t.beginPath(),t.moveTo(m+b/2,$()),t.lineTo(m,$()+A),t.lineTo(m+b,$()+A),t.closePath(),t.fill();for(const c of x)c.alive&&(t.fillStyle=L[c.row],t.fillRect(c.x+4,c.y,o-8,r-4),t.fillRect(c.x+2,c.y+4,6,4),t.fillRect(c.x+o-8,c.y+4,6,4),t.fillRect(c.x+6,c.y-4,3,6),t.fillRect(c.x+o-9,c.y-4,3,6),t.fillRect(c.x,c.y+r-6,4,6),t.fillRect(c.x+o-4,c.y+r-6,4,6));t.fillStyle="#00ff41";for(const c of v)t.fillRect(c.x,c.y,k,S);t.fillStyle="#ff6b6b";for(const c of R)t.fillRect(c.x,c.y,k,S);t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+y,10,24),t.textAlign="center",t.fillText("HIGH: "+M,e.width/2,24),t.textAlign="right",t.fillText("LIVES: "+"♥".repeat(O),e.width-10,24),t.textAlign="left",u==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+y,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"),u==="won"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("YOU WIN!",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+y,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO PLAY AGAIN",e.width/2,e.height/2+60),t.textAlign="left")}}function fe(c){F===0&&(F=c);const g=Math.min((c-F)/I,3);F=c,he(g),ue(),H=requestAnimationFrame(fe)}return C(),H=requestAnimationFrame(fe),function(){cancelAnimationFrame(H),window.removeEventListener("keydown",K),window.removeEventListener("keyup",ce),T.disconnect()}}const re=10,se=20,$e=[{shape:[[1,1,1,1]],color:"#00bfff"},{shape:[[1,1],[1,1]],color:"#ffbd2e"},{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},{shape:[[1,0,0],[1,1,1]],color:"#ff6b6b"},{shape:[[0,0,1],[1,1,1]],color:"#00ff41"},{shape:[[0,1,1],[1,1,0]],color:"#ff6b6b"},{shape:[[1,1,0],[0,1,1]],color:"#00ff41"}];function ct(){const e=[];for(let n=0;n<se;n++)e.push(new Array(re).fill(null));return e}function dt(e,n,t,a){for(let i=0;i<n.length;i++)for(let o=0;o<n[i].length;o++){if(!n[i][o])continue;const r=t+o,p=a+i;if(r<0||r>=re||p>=se||p>=0&&e[p][r])return!0}return!1}function pt(e){const n=e.length,t=e[0].length,a=[];for(let i=0;i<t;i++){a.push([]);for(let o=n-1;o>=0;o--)a[i].push(e[o][i])}return a}function mt(e){let n=0;for(let t=se-1;t>=0;t--)e[t].every(a=>a!==null)&&(e.splice(t,1),e.unshift(new Array(re).fill(null)),n++,t++);return n}function ht(e,n){return e<=0?0:([0,100,300,500,800][e]||800)*n}function ut(e){const n=Math.floor(e/10)+1,t=Math.max(5,45-(n-1)*4);return{level:n,dropInterval:t}}function ft(e,n){const t=e.getContext("2d");if(!t)return()=>{};let a="waiting",i=0,o=1,r=0,p=parseInt(localStorage.getItem("tetrisHigh")||"0",10),b=0,A=0;const k=1e3/60;let S=[],l=null,_=0,q=45;function V(){e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight)}V();const L=new ResizeObserver(V);L.observe(e);function I(){S=ct()}function u(s,T,$){return dt(S,s,T,$)}function y(){const s=$e[Math.floor(Math.random()*$e.length)];l={shape:s.shape.map(T=>[...T]),color:s.color,x:Math.floor((re-s.shape[0].length)/2),y:0},u(l.shape,l.x,l.y)&&(a="gameover",l=null)}function O(){if(l){for(let s=0;s<l.shape.length;s++)for(let T=0;T<l.shape[s].length;T++){if(!l.shape[s][T])continue;const $=l.y+s;$>=0&&(S[$][l.x+T]=l.color)}M(),y()}}function M(){const s=mt(S);s>0&&(i+=ht(s,o),r+=s,{level:o,dropInterval:q}=ut(r),i>p&&(p=i,localStorage.setItem("tetrisHigh",String(p))))}const H={};function F(s){if(s.key==="Escape"){n();return}if((a==="waiting"||a==="gameover")&&s.key==="Enter"&&(a="playing",i=0,o=1,r=0,q=45,I(),y()),a!=="playing"||!l){H[s.key]=!0;return}if(s.key==="ArrowLeft")u(l.shape,l.x-1,l.y)||l.x--;else if(s.key==="ArrowRight")u(l.shape,l.x+1,l.y)||l.x++;else if(s.key==="ArrowDown")u(l.shape,l.x,l.y+1)?O():l.y++;else if(s.key==="ArrowUp"||s.key===" "){const T=pt(l.shape);u(T,l.x,l.y)?u(T,l.x-1,l.y)?u(T,l.x+1,l.y)||(l.shape=T,l.x++):(l.shape=T,l.x--):l.shape=T}H[s.key]=!0,["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," "].includes(s.key)&&s.preventDefault()}function m(s){H[s.key]=!1}window.addEventListener("keydown",F),window.addEventListener("keyup",m);function x(s){a!=="playing"||!l||(_+=s,_>=q&&(_=0,u(l.shape,l.x,l.y+1)?O():l.y++))}function v(){if(!t)return;t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height);const s=e.width<520,T=s?20:200,$=s?96:60,E=Math.max(8,Math.min(Math.floor((e.height-$)/se),Math.floor((e.width-T)/re))),f=E*re,D=E*se,j=Math.floor((e.width-f)/2),Y=Math.max(s?68:36,Math.floor((e.height-D)/2)+10);if(a==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("TETRIS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Up/Space = Rotate",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+p,e.width/2,e.height/2+78),t.textAlign="left";return}t.strokeStyle="#333",t.lineWidth=2,t.strokeRect(j-1,Y-1,f+2,D+2);for(let C=0;C<se;C++)for(let N=0;N<re;N++){const z=j+N*E,K=Y+C*E;S[C][N]?(t.fillStyle=S[C][N],t.fillRect(z+1,K+1,E-2,E-2)):(t.fillStyle="#111",t.fillRect(z,K,E,E),t.strokeStyle="#1a1a1a",t.lineWidth=.5,t.strokeRect(z,K,E,E))}if(l){t.fillStyle=l.color;for(let C=0;C<l.shape.length;C++)for(let N=0;N<l.shape[C].length;N++){if(!l.shape[C][N])continue;const z=j+(l.x+N)*E,K=Y+(l.y+C)*E;t.fillRect(z+1,K+1,E-2,E-2)}}t.fillStyle="#00ff41",t.font=s?"18px VT323, monospace":"22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+i,10,24),t.fillText("LEVEL: "+o,10,s?46:50),t.textAlign="center",t.fillText("HIGH: "+p,e.width/2,24),t.textAlign="right",t.fillText("LINES: "+r,e.width-10,24),t.textAlign="left",a==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+i+"  Lines: "+r,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left")}function R(s){A===0&&(A=s);const T=Math.min((s-A)/k,3);A=s,x(T),v(),b=requestAnimationFrame(R)}return I(),b=requestAnimationFrame(R),function(){cancelAnimationFrame(b),window.removeEventListener("keydown",F),window.removeEventListener("keyup",m),L.disconnect()}}function gt(e,n){const t=e.getContext("2d");if(!t)return()=>{};const a=12,i=80,o=10,r=5,p=4,b=3.5,A=7,k=1e3/60;let S="waiting",l=0,_=0,q=0,V=0,L=0,I=0,u=0,y=0,O=p,M=p*.5;function H(){const f=e.width||e.clientWidth||1,D=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const j=e.width/f,Y=e.height/D;L=Math.max(0,Math.min(e.height-i,L*Y)),I=Math.max(0,Math.min(e.height-i,I*Y)),u=Math.max(0,Math.min(e.width-o,u*j)),y=Math.max(0,Math.min(e.height-o,y*Y)),S!=="playing"&&(L=e.height/2-i/2,I=e.height/2-i/2,u=e.width/2,y=e.height/2)}H();const F=new ResizeObserver(H);F.observe(e);function m(){u=e.width/2,y=e.height/2,O=p*(Math.random()>.5?1:-1),M=(Math.random()*2-1)*p*.5}const x={};function v(f){if(f.key==="Escape"){n();return}(S==="waiting"||S==="gameover")&&f.key==="Enter"&&(S="playing",l=0,_=0,L=e.height/2-i/2,I=e.height/2-i/2,m()),x[f.key]=!0,(f.key==="ArrowUp"||f.key==="ArrowDown")&&f.preventDefault()}function R(f){x[f.key]=!1}window.addEventListener("keydown",v),window.addEventListener("keyup",R);function s(f){if(S!=="playing")return;const D=e.getBoundingClientRect(),j=f.clientY-D.top;L=Math.max(0,Math.min(e.height-i,j-i/2)),f.preventDefault()}e.addEventListener("pointerdown",s),e.addEventListener("pointermove",s);function T(f){if(S!=="playing")return;x.ArrowUp&&L>0&&(L-=r*f),x.ArrowDown&&L<e.height-i&&(L+=r*f),L=Math.max(0,Math.min(e.height-i,L));const D=I+i/2;O>0?D<y-10?I+=b*f:D>y+10&&(I-=b*f):D<e.height/2-5?I+=b*.5*f:D>e.height/2+5&&(I-=b*.5*f),I=Math.max(0,Math.min(e.height-i,I)),u+=O*f,y+=M*f,y<=0&&(y=0,M=Math.abs(M)),y+o>=e.height&&(y=e.height-o,M=-Math.abs(M));const j=20;u<=j+a&&u+o>=j&&y+o>=L&&y<=L+i&&O<0&&(O=Math.abs(O)*1.05,M=((y+o/2-L)/i-.5)*p*2,u=j+a);const Y=e.width-20-a;u+o>=Y&&u<=Y+a&&y+o>=I&&y<=I+i&&O>0&&(O=-Math.abs(O)*1.05,M=((y+o/2-I)/i-.5)*p*2,u=Y-o),u<0&&(_++,_>=A?S="gameover":m()),u>e.width&&(l++,l>=A?S="gameover":m())}function $(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),S==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("PONG",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrow Up/Down or Drag = Move",e.width/2,e.height/2+50),t.fillText("First to "+A+" wins | ESC = Exit",e.width/2,e.height/2+78),t.textAlign="left";return}if(t.setLineDash([8,8]),t.strokeStyle="#333",t.lineWidth=2,t.beginPath(),t.moveTo(e.width/2,0),t.lineTo(e.width/2,e.height),t.stroke(),t.setLineDash([]),t.fillStyle="#00ff41",t.fillRect(20,L,a,i),t.fillStyle="#ff6b6b",t.fillRect(e.width-20-a,I,a,i),t.fillStyle="#ffbd2e",t.fillRect(u,y,o,o),t.fillStyle="#00ff41",t.font="48px VT323, monospace",t.textAlign="center",t.fillText(String(l),e.width/2-60,55),t.fillStyle="#ff6b6b",t.fillText(String(_),e.width/2+60,55),t.textAlign="left",t.font="18px VT323, monospace",t.fillStyle="#888",t.textAlign="left",t.fillText("YOU",20,e.height-15),t.textAlign="right",t.fillText("CPU",e.width-20,e.height-15),t.textAlign="left",S==="gameover"){t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height);const f=l>=A;t.fillStyle=f?"#00ff41":"#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText(f?"YOU WIN!":"CPU WINS",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText(l+" - "+_,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"}}}function E(f){V===0&&(V=f);const D=Math.min((f-V)/k,3);V=f,T(D),$(),q=requestAnimationFrame(E)}return q=requestAnimationFrame(E),function(){cancelAnimationFrame(q),window.removeEventListener("keydown",v),window.removeEventListener("keyup",R),e.removeEventListener("pointerdown",s),e.removeEventListener("pointermove",s),F.disconnect()}}function yt(e,n){const t=e.getContext("2d");if(!t)return()=>{};const a=24,i=.34,o=-6.6,r=58,p=168,b=2.15,A=126,k=46,S=1e3/60,l=100;let _="waiting",q=0,V=parseInt(localStorage.getItem("flappyBirdHigh")||"0",10),L=0,I=0,u=0,y=0,O=A,M=0,H=0,F=0,m=null,x=null,v=[];function R(){const d=e.width||e.clientWidth||1,h=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const G=e.width/d,Q=e.height/h;for(const P of v)P.x*=G,P.gapY=E(P.gapY*Q);_!=="playing"?T():(M=Math.max(50,Math.min(e.width-30,M*G)),H=Math.max(a,Math.min(e.height-k-a,H*Q)))}R();const s=new ResizeObserver(R);s.observe(e);function T(){M=Math.max(80,Math.floor(e.width*.28)),H=Math.floor(e.height*.45),F=0}function $(){const d=Math.max(160,e.height-k);return Math.max(86,Math.min(p,d-112))}function E(d){const h=$(),G=56,Q=Math.max(G,e.height-k-h-48);return Math.max(G,Math.min(Q,d))}function f(){_="playing",q=0,y=0,u=0,O=A,v=[],T(),D(),N()}function D(){const h=Math.max(68,e.height-k-$()-48),G=56+Math.random()*(h-56);v.push({x:e.width+20,gapY:G,passed:!1})}function j(){if(Y(),_==="waiting"||_==="gameover"){f();return}_==="playing"&&(F=o,z())}function Y(){if(m){m.state==="suspended"&&m.resume();return}const d=globalThis.AudioContext??globalThis.webkitAudioContext;m=new d,x=m.createGain(),x.gain.value=.16,x.connect(m.destination)}function C(d,h,G="square",Q=.2){if(!m||!x)return;const P=m.currentTime,oe=m.createOscillator(),ae=m.createGain();oe.type=G,oe.frequency.setValueAtTime(d,P),ae.gain.setValueAtTime(1e-4,P),ae.gain.exponentialRampToValueAtTime(Q,P+.01),ae.gain.exponentialRampToValueAtTime(1e-4,P+h),oe.connect(ae),ae.connect(x),oe.start(P),oe.stop(P+h+.02)}function N(){C(440,.08,"square",.14),m&&setTimeout(()=>C(660,.08,"square",.12),65)}function z(){C(720,.06,"square",.11)}function K(){C(880,.07,"triangle",.14),setTimeout(()=>C(1175,.08,"triangle",.12),60)}function ce(){if(!m||!x)return;const d=m.currentTime,h=m.createOscillator(),G=m.createGain();h.type="sawtooth",h.frequency.setValueAtTime(190,d),h.frequency.exponentialRampToValueAtTime(60,d+.22),G.gain.setValueAtTime(.22,d),G.gain.exponentialRampToValueAtTime(1e-4,d+.24),h.connect(G),G.connect(x),h.start(d),h.stop(d+.26)}function he(d){if(d.key==="Escape"){n();return}(d.key==="Enter"||d.key===" ")&&(j(),d.preventDefault())}function ue(){j()}window.addEventListener("keydown",he),e.addEventListener("pointerdown",ue);function fe(){if(_!=="playing")return;for(y++,F+=i,H+=F;y>=O;)D(),O+=A;for(const P of v)P.x-=b,!P.passed&&P.x+r<M&&(P.passed=!0,q++,K(),q>V&&(V=q,localStorage.setItem("flappyBirdHigh",String(V))));v=v.filter(P=>P.x+r>-20);const d=M-a/2,h=M+a/2,G=H-a/2,Q=H+a/2;if(G<=0||Q>=e.height-k){_="gameover",ce();return}for(const P of v){const oe=h>P.x&&d<P.x+r,ae=G<P.gapY,Ke=Q>P.gapY+$();if(oe&&(ae||Ke)){_="gameover",ce();return}}}function c(){const d=t.createLinearGradient(0,0,0,e.height);d.addColorStop(0,"#082238"),d.addColorStop(1,"#071014"),t.fillStyle=d,t.fillRect(0,0,e.width,e.height),t.fillStyle="rgba(0, 255, 65, 0.08)";for(let h=y*-.3%90;h<e.width;h+=90)t.fillRect(h,80,34,8),t.fillRect(h+8,72,18,8)}function g(){const d=$();for(const h of v)t.fillStyle="#00a33a",t.fillRect(h.x,0,r,h.gapY),t.fillRect(h.x,h.gapY+d,r,e.height-k-h.gapY-d),t.fillStyle="#00ff41",t.fillRect(h.x-4,h.gapY-14,r+8,14),t.fillRect(h.x-4,h.gapY+d,r+8,14),t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(h.x+r-12,0,6,h.gapY-14),t.fillRect(h.x+r-12,h.gapY+d+14,6,e.height-k)}function w(){const d=e.height-k;t.fillStyle="#332211",t.fillRect(0,d,e.width,k),t.fillStyle="#ffbd2e",t.fillRect(0,d,e.width,4),t.fillStyle="rgba(0, 255, 65, 0.35)";for(let h=y*-b%28;h<e.width;h+=28)t.fillRect(h,d+10,14,4)}function U(){const d=Math.max(-.45,Math.min(.7,F/12));t.save(),t.translate(M,H),t.rotate(d),t.fillStyle="#ffbd2e",t.fillRect(-12,-10,22,20),t.fillStyle="#ffe680",t.fillRect(-16,-2,14,10),t.fillStyle="#ff6b6b",t.fillRect(8,-2,12,6),t.fillStyle="#fff",t.fillRect(2,-8,6,6),t.fillStyle="#0a0a0a",t.fillRect(6,-6,2,2),t.restore()}function X(){t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+q,10,24),t.textAlign="center",t.fillText("HIGH: "+V,e.width/2,24),t.textAlign="right",t.fillText("SPACE = FLAP",e.width-10,24),t.textAlign="left"}function Ue(){t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("FLAPPY BIRD",e.width/2,e.height/2-70),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS SPACE OR CLICK TO START",e.width/2,e.height/2),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Space/Click = Flap",e.width/2,e.height/2+40),t.fillText("ESC = Exit | High Score: "+V,e.width/2,e.height/2+70),t.textAlign="left"}function Xe(){t.fillStyle="rgba(0,0,0,0.68)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-30),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+q,e.width/2,e.height/2+10),t.fillStyle="#888",t.fillText("PRESS SPACE OR CLICK TO RESTART",e.width/2,e.height/2+50),t.textAlign="left"}function Je(){c(),g(),w(),U(),X(),_==="waiting"&&Ue(),_==="gameover"&&Xe()}function Pe(d){I===0&&(I=d);const h=Math.min(d-I,l);for(I=d,u+=h;u>=S;)fe(),u-=S;Je(),L=requestAnimationFrame(Pe)}return T(),L=requestAnimationFrame(Pe),function(){cancelAnimationFrame(L),window.removeEventListener("keydown",he),e.removeEventListener("pointerdown",ue),s.disconnect(),m==null||m.close(),m=null,x=null}}const bt=Object.freeze({"--background":"#0b0f14","--background-deep":"#070a0e","--surface":"#111820","--foreground":"#b8c4d4","--bright":"#e7edf5","--muted":"#667485","--border":"#22303d","--cyan":"#5eead4","--blue":"#7aa2f7","--green":"#9ece6a","--yellow":"#e0af68","--purple":"#bb9af7","--red":"#f7768e"});function wt(){console.log(`%c    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|`,"color: #9ece6a; font-family: monospace; font-weight: bold; line-height: 1.2;"),console.log("%cPortfolio shell v%s %c· running on curiosity","color: #5eead4; font-family: monospace;",Re,"color: #667485; font-family: monospace;"),console.log(`%c> reading the source instead of clicking around? my kind of visitor.
> say hi: %s
> code: %s`,"color: #b8c4d4; font-family: monospace;",Be,ye.github),console.log("%csteal the theme (dark CRT terminal palette):","color: #e0af68; font-family: monospace;"),console.log(Object.entries(bt).map(([n,t])=>`${n}: ${t};`).join(`
`))}function ge(e){return e.replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[n]??n)}const St={title:"Iron Doctrine: building deterministic online multiplayer with a shared ECS engine",date:"2026-08-31",tags:["typescript","game-dev","multiplayer","ecs","pnpm"]},kt=`<p><strong>Iron Doctrine</strong> is a real-time strategy game I&#39;m building in a pnpm monorepo, with a deterministic ECS engine at its core and, as of this week, a working 1v1 online mode.</p>
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
`,xt=Object.freeze(Object.defineProperty({__proto__:null,html:kt,meta:St},Symbol.toStringTag,{value:"Module"})),vt={title:"Otelma: building a local LLM runtime from scratch",date:"2026-08-31",tags:["go","llm","llama-cpp","apple-silicon","ai"]},Tt=`<p><strong>Otelma</strong> is a local LLM inference runtime I&#39;m building in Go.</p>
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
`,At=Object.freeze(Object.defineProperty({__proto__:null,html:Tt,meta:vt},Symbol.toStringTag,{value:"Module"})),It={title:"I Built a CLI to Answer One Question: What Will This Change Break?",date:"2026-08-27",tags:["programming","devops","go","opensource"]},Et=`<p>We&#39;ve all been there.</p>
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
`,Lt=Object.freeze(Object.defineProperty({__proto__:null,html:Et,meta:It},Symbol.toStringTag,{value:"Module"})),Mt={title:"wir: What Is Running, a Port and Process Inspector Written in C",date:"2025-12-30",tags:["c","systems-programming","cli","opensource"]},_t=`<p>I recently released <strong>wir</strong> (What Is Running), a command-line tool written in C to inspect what&#39;s running on specific ports and get detailed process information. A project born from a practical need that turned into an opportunity to explore system programming in C.</p>
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
`,Rt=Object.freeze(Object.defineProperty({__proto__:null,html:_t,meta:Mt},Symbol.toStringTag,{value:"Module"}));function Ct(e){return[...e].sort((n,t)=>n.date.localeCompare(t.date))}const Pt=Object.assign({"/src/content/articles/iron-doctrine.md":xt,"/src/content/articles/otelma.md":At,"/src/content/articles/serval-cli.md":Lt,"/src/content/articles/wir-what-is-running.md":Rt}),Ee=new Map,Z=Ct(Object.entries(Pt).map(([e,n])=>{const t=e.split("/").pop().replace(/\.md$/,"");return Ee.set(t,n.html),{slug:t,title:n.meta.title??t,date:n.meta.date??"",tags:n.meta.tags??[]}}));function pe(e){return Ee.has(e)?Ee.get(e):null}const He="alberto@portfolio:~",Ot=Object.freeze(["help","about","skills","experience","projects","brew","lab","articles","utils","contact","cv","games","play","ls","tree","neofetch","history","date","clear"]),$t=Object.freeze([["help","help"],["about","about"],["skills","skills"],["projects","projects"],["brew","brew"],["lab","lab"],["articles","articles"],["utils","utils"],["games","games"],["contact","contact"]]),we=Object.freeze({space:"SPACE INVADERS",tetris:"TETRIS",pong:"PONG",flappy:"FLAPPY BIRD"}),Dt=Object.freeze({space:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"FIRE",key:" "},{label:"→",key:"ArrowRight"}],tetris:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"ROT",key:"ArrowUp"},{label:"→",key:"ArrowRight"},{label:"↓",key:"ArrowDown"}],pong:[{label:"START",key:"Enter"},{label:"↑",key:"ArrowUp"},{label:"↓",key:"ArrowDown"}],flappy:[{label:"START",key:"Enter"},{label:"FLAP",key:" "}]}),je=Object.freeze({space:st,tetris:ft,pong:gt,flappy:yt}),Ne=Object.freeze(["        /\\_/\\","       ( o.o )","        > ^ <","       /|   |\\","      (_|   |_)","         W W","","      I LOVE CAT"]),Le=Object.freeze(["    _    _     ____   _____","   / \\  | |   | __ ) |__  /","  / _ \\ | |   |  _ \\   / /"," / ___ \\| |___| |_) | / /_","/_/   \\_\\_____|____/ /____|"]),De="#%@*+=-<>/\\|",Bt=new Set(["ArrowLeft","ArrowRight","ArrowDown"]),me=new Map,le=[];let be=0,te=null,de=null,ee=null,J=null;const ie=document.getElementById("app");function Ht(){const e=$t.map(([n,t])=>`<button class="mobile-command" type="button" data-command="${t}">${n}</button>`).join("");return`<main class="terminal" aria-label="Alberto Barrago portfolio terminal">
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">Terminal command</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${He}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">Type help to list available commands. Use up and down arrows for command history.</p>
			<nav class="mobile-commands" aria-label="Quick terminal commands">${e}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`}function jt(){return`<div class="ascii-banner accent" role="img" aria-label="ALBZ">${Le.join(`
`)}</div>
<div class="boot-copy"><span class="muted">Portfolio shell v${Re}</span>
<span>${_e} · Product Builder</span>

15+ years: from INPS distribution systems to products for global brands.
Technical leadership · Architecture · Web · Mobile · Cloud · AI

I turn ambiguity into reliable systems and useful products.
<span class="muted">Based in ${xe}</span>
${Z.length?`
<span class="muted">Latest write-up:</span> <button class="inline-command command" data-command="cat ${Z[0].slug}.md">${Z[0].title} →</button>`:""}

Type <button class="inline-command command" data-command="help">help</button> to explore, or use the shortcuts below.</div>`}function Nt(){return`<div class="output-title">Available commands</div>
<div class="command-list">${[["about","Short profile and current role"],["skills","Technical toolbox by area"],["experience","Professional timeline"],["projects","Selected open-source work"],["brew","Homebrew formulae I maintain"],["lab","Experimental work in progress"],["articles","Technical articles and notes"],["utils","Useful free resources and links"],["contact","Ways to get in touch"],["cv","Download my resume"],["games","List embedded retro games"],["play &lt;game&gt;","Launch space, tetris, pong, or flappy"],["ls / tree","Browse the portfolio filesystem"],["neofetch","Compact system profile"],["history / date / clear","Terminal utilities"]].map(([n,t])=>`<div><button class="inline-command command" data-command="${n.split(" ")[0]}">${n}</button><span class="muted">${t}</span></div>`).join("")}</div>
<div class="output-note">Tip: press <span class="key">Tab</span> to autocomplete and <span class="key">↑</span>/<span class="key">↓</span> for history.</div>`}function Gt(){return`<div class="output-title">${Ie}</div>
<div class="key-value"><span class="label">role</span><span>${_e}</span>
<span class="label">location</span><span>${xe}</span>
<span class="label">focus</span><span>Product engineering · architecture · technical leadership</span>
<span class="label">status</span><span class="green">Building useful things</span></div>
<p class="prose">${et}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">view projects</button><button class="inline-command command" data-command="contact">contact me</button><button class="inline-command command" data-command="cv">download cv</button></div>`}function qt(){return`<div class="output-title">Technical toolbox</div>
<div class="skills-list">${Object.entries(tt).map(([e,n])=>`<div class="skill-row"><span class="label">${e}</span><span>${n.join("  ·  ")}</span></div>`).join("")}</div>`}function Ft(){return`<div class="output-title">Experience</div>
<div class="timeline">${nt.map(e=>`<article class="timeline-item">
	<span class="timeline-period">${e.period}</span>
	<div><div><span class="green">${e.role}</span> <span class="muted">@ ${e.company}</span></div>
	<p>${e.highlight}</p></div>
</article>`).join("")}</div>`}function Wt(){return`<div class="output-title">Selected projects</div>
<div class="project-list">${ot.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.language}</span></div>
	<p>${e.description}</p>
</article>`).join("")}</div>`}function Vt(){return`<div class="output-title">Homebrew formulae</div>
<p class="prose">Command-line tools I've packaged and maintain via Homebrew taps.</p>
<div class="project-list">${at.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.tap}</span></div>
	<p>${e.description}</p>
	<p class="brew-install"><code>${e.install}</code></p>
</article>`).join("")}</div>`}function Yt(){return`<div class="output-title">Workbench Lab</div>
<p class="prose">Experimental products in active development. Scope and direction may evolve as ideas are validated.</p>
${it.map(n=>`<article class="project-item lab-project">
	<div class="lab-project-meta"><span class="project-status">${n.status}</span><span class="project-language">${n.language}</span></div>
	<a class="terminal-link project-name" href="${n.url}" target="_blank" rel="noopener noreferrer">${n.name} ↗</a>
	<p>${n.description}</p>
	<p class="lab-project-focus"><span class="label">focus</span>${n.focus}</p>
</article>`).join("")}`}function Ge(e){if(!e)return e;const n=new Date(`${e}T00:00:00`);return Number.isNaN(n.getTime())?e:new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(n)}function zt(){return Z.length===0?`<div class="output-title">Articles</div>
<p class="prose muted">No articles yet.</p>`:`<div class="output-title">Articles</div>
<div class="project-list">${[...Z].sort((n,t)=>n.date.localeCompare(t.date)).map(n=>`<article class="project-item">
	<div><button class="terminal-link project-name inline-command" data-command="cat ${n.slug}.md">${n.title} ↗</button><span class="project-language">${Ge(n.date)}</span></div>
	<p class="muted">${n.tags.join("  ·  ")}</p>
</article>`).join("")}</div>`}const Ut=200;function Xt(e){const n=e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),t=n?n.split(" ").length:0;return{words:t,chars:n.length,minutes:Math.max(1,Math.round(t/Ut))}}function Jt(e){const n=Z.findIndex(p=>p.slug===e),t=Z[n],a=Xt(pe(e)??""),i=Z[n-1],o=Z[n+1],r=[i?`<button class="reader-nav-link" type="button" data-action="read-article" data-slug="${i.slug}">← ${i.title}</button>`:"<span></span>",o?`<button class="reader-nav-link reader-nav-next" type="button" data-action="read-article" data-slug="${o.slug}">${o.title} →</button>`:"<span></span>"].join("");return`<div class="article-reader" id="article-reader">
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
					<p class="reader-meta muted">${Ge(t.date)}${t.tags.length?` · ${t.tags.join(" · ")}`:""}</p>
					<p class="reader-stats muted">${a.words.toLocaleString()} words · ${a.chars.toLocaleString()} chars · ~${a.minutes} min read</p>
					${pe(e)}
				</article>
				<nav class="reader-nav">${r}</nav>
			</div>
		</div>
	</div>`}function Kt(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function Zt(e){const n=e.querySelector("#reader-toc"),t=e.querySelectorAll(".prose h2, .prose h3");if(t.length===0)return;const a=new Set,i=Array.from(t).map(r=>{let p=Kt(r.textContent??"");for(;a.has(p)||!p;)p=`${p||"section"}-${a.size+1}`;return a.add(p),r.id=p,{id:p,text:r.textContent??"",level:r.tagName==="H2"?2:3}});n.innerHTML=`<span class="reader-toc-title">chapters</span><ol class="reader-toc-list">${i.map(r=>`<li class="reader-toc-item level-${r.level}"><button class="reader-toc-link" type="button" data-action="goto-heading" data-target="${r.id}">${r.text}</button></li>`).join("")}</ol>`,n.hidden=!1,e.classList.add("has-toc");const o=e.querySelector("#reader-toc-toggle");o&&(o.hidden=!1),Qt(e,Array.from(t))}function Qt(e,n){ee==null||ee.disconnect(),J==null||J.container.removeEventListener("scroll",J.handler),J=null;const t=e.querySelector(".article-reader-body"),a=e.querySelectorAll(".reader-toc-link"),i=new Set,o=b=>{a.forEach(A=>A.classList.toggle("is-active",A.dataset.target===b))},r=()=>t.scrollTop+t.clientHeight>=t.scrollHeight-4;ee=new IntersectionObserver(b=>{for(const k of b)k.isIntersecting?i.add(k.target.id):i.delete(k.target.id);const A=n.find(k=>i.has(k.id));A?o(A.id):r()&&o(n[n.length-1].id)},{root:t,rootMargin:"0px 0px -72% 0px",threshold:0}),n.forEach(b=>ee.observe(b)),o(n[0].id);const p=()=>{r()&&o(n[n.length-1].id)};t.addEventListener("scroll",p,{passive:!0}),J={container:t,handler:p}}function ve(e){var a;(a=document.getElementById("article-reader"))==null||a.remove(),B.blur();const n=document.createElement("div");n.innerHTML=Jt(e);const t=n.firstElementChild;ie.appendChild(t),t.scrollTop=0,Zt(t),window.location.pathname!==`/articles/${e}/`&&window.history.pushState(null,"",`/articles/${e}/`)}function qe(){var e;ee==null||ee.disconnect(),ee=null,J==null||J.container.removeEventListener("scroll",J.handler),J=null,(e=document.getElementById("article-reader"))==null||e.remove(),window.location.pathname.startsWith("/articles/")&&window.history.pushState(null,"","/"),B==null||B.focus({preventScroll:!0})}function Me(e){return`${window.location.origin}/articles/${e}/`}function en(e){const n=e.textContent;e.textContent="copied ✓",e.disabled=!0,window.setTimeout(()=>{e.textContent=n,e.disabled=!1},1500)}async function Fe(e,n){try{await navigator.clipboard.writeText(Me(e)),en(n)}catch{window.prompt("Copy this link:",Me(e))}}async function tn(e,n){const t=Z.find(i=>i.slug===e),a=Me(e);if(navigator.share){try{await navigator.share({title:(t==null?void 0:t.title)??e,url:a})}catch{}return}await Fe(e,n)}function nn(){return`<div class="output-title">/utils</div>
<p class="prose">Useful free resources: books, courses, docs, and tools I keep coming back to.</p>
${rt.map(e=>`<div class="utils-group">
	<div class="utils-category">${e.category}</div>
	<div class="project-list">${e.items.map(n=>`<article class="project-item">
		<div><a class="terminal-link project-name" href="${n.url}" target="_blank" rel="noopener noreferrer">${n.name} ↗</a></div>
		<p>${n.description}</p>
	</article>`).join("")}</div>
</div>`).join("")}</div>`}function Te(){return`<div class="output-title">Let's build something useful</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${ye.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${ye.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${ye.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">location</span><span>${xe}</span></div>`}function on(){return`<div class="output-title">/games</div>
<div class="game-list">${Object.entries(we).map(([e,n])=>`<button class="game-command" data-command="play ${e}"><span>${n}</span><span class="muted">play ${e}</span></button>`).join("")}</div>
<div class="output-note">Games open fullscreen. Press <span class="key">Esc</span> to return.</div>`}function an(){return`<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command directory" data-command="brew">brew/</button>
├── <button class="inline-command directory" data-command="lab">lab/</button>
├── <button class="inline-command directory" data-command="articles">articles/</button>
├── <button class="inline-command directory" data-command="utils">utils/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`}function rn(){return`<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">╭─────╮
│ A B │
│ L Z │
╰─────╯</div><div><span class="accent">${Ie}</span>
<span class="muted">─${"─".repeat(Ie.length-1)}</span>
<span><span class="label">Role:</span> ${_e}</span>
<span><span class="label">Base:</span> ${xe}</span>
<span><span class="label">Stack:</span> JavaScript, Swift, Java, Python</span>
<span><span class="label">Shell:</span> albz-sh ${Re}</span>
<span><span class="label">Runtime:</span> Vanilla JS, zero dependencies</span>
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`}function ln(){return'<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command directory" data-command="brew">brew/</button><button class="inline-command directory" data-command="lab">lab/</button><button class="inline-command directory" data-command="articles">articles/</button><button class="inline-command directory" data-command="utils">utils/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>'}function We(e,n){return e.map(t=>t.split("").map(a=>a===" "||Math.random()>=n?a:De[Math.floor(Math.random()*De.length)]).join("")).join(`
`)}function sn(e){return We(Ne,e)}function cn(){const e=ne.querySelector(".ascii-banner");if(!e)return;const n=Le.join(`
`),t=9;let a=0;const i=window.setInterval(()=>{if(a+=1,a>=t){window.clearInterval(i),e.textContent=n;return}e.textContent=We(Le,Math.max(0,.55-a*.06))},70)}function dn(){const e=document.createElement("div");e.className="output-block ascii-banner accent",ne.appendChild(e);const n=6;let t=0;const a=window.setInterval(()=>{t+=1,e.textContent=t>=n?Ne.join(`
`):sn(Math.max(0,.6-t*.12)),requestAnimationFrame(()=>{ne.scrollTop=ne.scrollHeight}),t>=n&&(window.clearInterval(a),W('<span class="green">Purring in binary.</span>'))},90)}function pn(e){const n=document.createElement("div");n.className="output-block command-echo";const t=document.createElement("span");t.className="prompt",t.innerHTML=`<span class="prompt-user">${He}</span><span class="prompt-symbol">$</span>`;const a=document.createElement("span");a.textContent=e,n.append(t,a),ne.appendChild(n)}function W(e,n=""){const t=`output-block ${n}`.trim();for(const i of Array.from(ne.children))i.className===t&&i.innerHTML===e&&i.remove();const a=document.createElement("div");a.className=t,a.innerHTML=e,ne.appendChild(a),requestAnimationFrame(()=>{a.scrollIntoView({block:"start"})})}function Ve(e){const n=e.trim();if(!n)return;pn(n),le.at(-1)!==n&&le.push(n),be=le.length;const[t,...a]=n.split(/\s+/),i=t.toLowerCase(),o=a.join(" ").toLowerCase();if(i==="clear"){ne.replaceChildren();return}if(["about","whoami","cat"].includes(i)){i!=="cat"||!o||o==="about.txt"?W(Gt()):o==="contact.vcf"?W(Te()):o.endsWith(".md")&&pe(o.slice(0,-3))?ve(o.slice(0,-3)):W(`<span class="red">cat: ${ge(o)}: No such file</span>`);return}const r={help:Nt,skills:qt,experience:Ft,projects:Wt,brew:Vt,lab:Yt,articles:zt,utils:nn,contact:Te,games:on,ls:ln,tree:an,neofetch:rn};if(r[i]){W(r[i]());return}if(i==="cv"){lt(),W('<span class="green">Downloading albertobarrago_cv.pdf…</span>');return}if(i==="history"){W(le.map((p,b)=>`<div><span class="muted">${String(b+1).padStart(3," ")}</span>  ${ge(p)}</div>`).join(""));return}if(i==="date"){W(new Intl.DateTimeFormat("it-IT",{dateStyle:"full",timeStyle:"long"}).format(new Date));return}if(i==="play"){mn(o)?(W(`<span class="green">Launching ${we[o]}…</span>`),un(o)):W(`<span class="red">Unknown game${o?`: ${ge(o)}`:""}.</span> Try <button class="inline-command command" data-command="games">games</button>.`);return}if(i==="1337"){dn();return}if(i==="sudo"&&o==="hire alberto"){W('<span class="green">Permission granted. Opening contact details…</span>'),W(Te());return}W(`<span class="red">command not found: ${ge(i)}</span><br>Type <button class="inline-command command" data-command="help">help</button> to see available commands.`)}function mn(e){return Object.hasOwn(je,e)}function hn(e){const n=Dt[e].map(t=>`<button class="game-control-button" type="button" data-control-key="${t.key}">${t.label}</button>`).join("");return`<div class="game-fullscreen" id="game-overlay">
		<div class="game-scanlines" aria-hidden="true"></div>
		<div class="game-topbar"><span class="game-title">${we[e]}</span><button class="game-exit" type="button" data-action="exit-game">ESC · CLOSE</button></div>
		<canvas class="game-canvas" aria-label="${we[e]} game"></canvas>
		<div class="game-touch-controls">${n}</div>
	</div>`}function un(e){Se(),B.blur();const n=document.createElement("div");n.innerHTML=hn(e);const t=n.firstElementChild;ie.appendChild(t);const a=t.querySelector(".game-canvas");requestAnimationFrame(()=>{t.isConnected&&(de=je[e](a,Se))})}function Se(){var e;de==null||de(),de=null,Ye(),(e=document.getElementById("game-overlay"))==null||e.remove(),B==null||B.focus({preventScroll:!0})}function ke(e,n){window.dispatchEvent(new KeyboardEvent(n,{key:e,bubbles:!0,cancelable:!0}))}function fn(e){var o;const t=e.target.closest("[data-control-key]"),a=t==null?void 0:t.dataset.controlKey;if(!t||!a)return;e.preventDefault(),(o=t.setPointerCapture)==null||o.call(t,e.pointerId);const i={key:a,button:t};me.set(e.pointerId,i),t.classList.add("is-pressed"),ke(a,"keydown"),Bt.has(a)&&(i.delayId=window.setTimeout(()=>{i.intervalId=window.setInterval(()=>ke(a,"keydown"),85)},220))}function Ce(e){const n=me.get(e.pointerId);n&&(e.preventDefault(),n.delayId&&window.clearTimeout(n.delayId),n.intervalId&&window.clearInterval(n.intervalId),n.button.classList.remove("is-pressed"),me.delete(e.pointerId),ke(n.key,"keyup"))}function Ye(){for(const e of me.values())e.delayId&&window.clearTimeout(e.delayId),e.intervalId&&window.clearInterval(e.intervalId),e.button.classList.remove("is-pressed"),ke(e.key,"keyup");me.clear()}ie.innerHTML=Ht();const ne=document.getElementById("terminal-output"),gn=document.getElementById("terminal-form"),B=document.getElementById("terminal-input");W(jt(),"welcome-block");cn();wt();function ze(){var e,n;return((e=window.location.pathname.match(/^\/articles\/([^/]+)\/?$/))==null?void 0:e[1])??((n=window.location.hash.match(/^#article\/(.+)$/))==null?void 0:n[1])}const Ae=ze();Ae&&pe(Ae)&&ve(Ae);window.addEventListener("popstate",()=>{var n;const e=ze();e&&pe(e)?ve(e):(n=document.getElementById("article-reader"))==null||n.remove()});gn.addEventListener("submit",e=>{e.preventDefault();const n=B.value;B.value="",Ve(n)});B.addEventListener("input",()=>{te=null});B.addEventListener("keydown",e=>{if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const n=e.key==="ArrowUp"?-1:1;be=Math.max(0,Math.min(le.length,be+n)),B.value=le[be]??"",requestAnimationFrame(()=>B.setSelectionRange(B.value.length,B.value.length));return}if(e.key==="Tab"){e.preventDefault();const n=B.value.trim().toLowerCase();if(!n){W(`<span class="muted">Type 'help' to see the list of available commands.</span>`),te=null;return}const t=Ot.filter(i=>i.startsWith(n));if(t.length===0){te=null;return}if(t.length===1){B.value=t[0],te=null;return}const a=t.reduce((i,o)=>{let r=0;for(;r<i.length&&r<o.length&&i[r]===o[r];)r+=1;return i.slice(0,r)});if(a.length>n.length){B.value=a,te=null;return}te===n?(W(t.map(i=>`<span class="command">${i}</span>`).join("  ")),te=null):te=n}});ie.addEventListener("click",e=>{var b,A,k;const n=e.target,t=document.querySelector("#reader-toc.is-open");t&&!n.closest("#reader-toc")&&!n.closest('[data-action="toggle-toc"]')&&t.classList.remove("is-open");const a=n.closest('[data-action="read-article"]');if(a!=null&&a.dataset.slug){ve(a.dataset.slug);return}if(n.closest('[data-action="close-reader"]')){qe();return}const i=n.closest('[data-action="share-article"]');if(i!=null&&i.dataset.slug){tn(i.dataset.slug,i);return}const o=n.closest('[data-action="copy-article-link"]');if(o!=null&&o.dataset.slug){Fe(o.dataset.slug,o);return}if(n.closest('[data-action="toggle-toc"]')){(b=document.getElementById("reader-toc"))==null||b.classList.toggle("is-open");return}const r=n.closest('[data-action="goto-heading"]');if(r!=null&&r.dataset.target){const S=document.getElementById("article-reader");(A=document.getElementById(r.dataset.target))==null||A.scrollIntoView({behavior:"smooth",block:"start"}),(k=S==null?void 0:S.querySelector("#reader-toc"))==null||k.classList.remove("is-open");return}const p=n.closest("[data-command]");p!=null&&p.dataset.command&&Ve(p.dataset.command),n.closest('[data-action="exit-game"]')&&Se(),!n.closest("a")&&!document.getElementById("game-overlay")&&!document.getElementById("article-reader")&&B.focus({preventScroll:!0})});ie.addEventListener("pointerdown",fn);ie.addEventListener("pointerup",Ce);ie.addEventListener("pointercancel",Ce);ie.addEventListener("lostpointercapture",Ce);window.addEventListener("blur",Ye);document.addEventListener("keydown",e=>{e.key==="Escape"&&document.getElementById("game-overlay")&&Se(),e.key==="Escape"&&document.getElementById("article-reader")&&qe()});
