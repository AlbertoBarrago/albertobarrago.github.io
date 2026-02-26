(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const ne="4.4.2",le={version:ne},re="Alberto Barrago",se="Senior Software Engineer",J="Cagliari, Italy",ae="albertobarrago@gmail.com",j="albertobarrago_cv.pdf",ce=`JavaScript-first Senior Engineer with deep expertise in enterprise
scalability and cloud architecture. Over 6+ years delivering production
systems for millions of users across frontend, backend, and DevOps—
specializing in Node.js/React ecosystems, Spring Boot microservices,
and CI/CD automation. Experienced in building component libraries and
Kafka-based architectures. Currently developing Python/FastAPI skills
and exploring AI-integrated solutions. Pragmatic builder who values code
quality, collaborative shipping, and real measurable impact.
`,fe={frontend:["Angular","React","Vanilla JS"],backend:["Node.js","Fastify","FastAPI","Flask","Spring Boot"],database:["MongoDB","Oracle","MySQL"],devops:["Docker","GitHub/Gitlab Actions","Azure DevOps"],tools:["Git","Neovim","tmux",""],ai:["LLM Integration","Prompt Engineering","AI Agents"]},de=[{role:"Senior Software Engineer",company:"C22 Consulting",period:"2026 - Present",highlight:"Loading..."},{role:"Senior Software Engineer",company:"Minsait/Indra",period:"2023 - 2025",highlight:"Angular component library for 6+ teams, CI/CD optimization -30% deploy time"},{role:"Senior Software Developer",company:"Softfobia",period:"2022 - 2023",highlight:"Led full-stack teams, 20% load time improvement"},{role:"Software Developer",company:"Accenture",period:"2021 - 2022",highlight:"Kafka microservices architecture, Angular 12 apps"},{role:"Software Developer",company:"Sinossi",period:"2016 - 2021",highlight:"Mobile apps for Deutsche Bank, TIM (Fortune 500)"}],F={github:"https://github.com/AlbertoBarrago",email:`mailto:${ae}`},Y=le.version,pe=()=>{const t=document.createElement("a");t.href=j,t.download=j,t.dispatchEvent(new MouseEvent("click"))};function he(t,l){const e=t.getContext("2d");if(!e)return()=>{};const i=8,s=5,a=32,m=24,f=12,A=40,M=20,p=3,C=12,R=5,r=7,H=4,V=.003,_=["#ff6b6b","#ff6b6b","#ffbd2e","#ffbd2e","#00ff41"];let h="waiting",y=0,S=3,w=parseInt(localStorage.getItem("spaceInvadersHigh")||"0",10),c=0;function g(){t.width=t.clientWidth,t.height=t.clientHeight}g();const b=new ResizeObserver(g);b.observe(t);let u=t.width/2-A/2;const E=()=>t.height-40;let O=[],D=1,N=0,v=40;const n=10,d=20;function P(){O=[];const o=i*(a+f)-f,L=(t.width-o)/2;for(let $=0;$<s;$++)for(let q=0;q<i;q++)O.push({x:L+q*(a+f),y:60+$*(m+f),row:$,alive:!0});D=1,N=0,v=40}let x=[],T=[],k=0;const I={};function G(o){if(o.key==="Escape"){l();return}(h==="waiting"||h==="gameover"||h==="won")&&o.key==="Enter"&&(h="playing",y=0,S=3,x=[],T=[],u=t.width/2-A/2,P()),I[o.key]=!0,(o.key===" "||o.key==="ArrowLeft"||o.key==="ArrowRight")&&o.preventDefault()}function B(o){I[o.key]=!1}window.addEventListener("keydown",G),window.addEventListener("keyup",B);function ie(){if(h==="playing"){I.ArrowLeft&&u>0&&(u-=R),I.ArrowRight&&u<t.width-A&&(u+=R),k>0&&k--,I[" "]&&k===0&&(x.push({x:u+A/2-p/2,y:E()-C}),k=15);for(let o=x.length-1;o>=0;o--){if(x[o].y-=r,x[o].y<0){x.splice(o,1);continue}for(const L of O)if(L.alive&&x[o]&&x[o].x<L.x+a&&x[o].x+p>L.x&&x[o].y<L.y+m&&x[o].y+C>L.y){L.alive=!1,x.splice(o,1),y+=10,y>w&&(w=y,localStorage.setItem("spaceInvadersHigh",String(w)));const $=O.filter(q=>q.alive).length;$>0&&(v=Math.max(4,Math.floor(40*($/(s*i)))));break}}if(O.every(o=>!o.alive)){h="won";return}if(N++,N>=v){N=0;let o=!1;for(const L of O)if(L.alive&&(D>0&&L.x+a+n>t.width-10||D<0&&L.x-n<10)){o=!0;break}if(o){D*=-1;for(const L of O)L.y+=d}else for(const L of O)L.x+=n*D;for(const L of O)if(L.alive&&L.y+m>=E()){h="gameover";return}}for(const o of O.filter(L=>L.alive))Math.random()<V&&T.push({x:o.x+a/2-p/2,y:o.y+m});for(let o=T.length-1;o>=0;o--){if(T[o].y+=H,T[o].y>t.height){T.splice(o,1);continue}if(T[o].x<u+A&&T[o].x+p>u&&T[o].y<E()+M&&T[o].y+C>E()&&(T.splice(o,1),S--,S<=0)){h="gameover";return}}}}function oe(){if(e){if(e.fillStyle="#0a0a0a",e.fillRect(0,0,t.width,t.height),h==="waiting"){e.fillStyle="#00ff41",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("SPACE INVADERS",t.width/2,t.height/2-60),e.font="24px VT323, monospace",e.fillStyle="#ffbd2e",e.fillText("PRESS ENTER TO START",t.width/2,t.height/2+10),e.fillStyle="#888",e.font="18px VT323, monospace",e.fillText("Arrow Keys = Move | Space = Shoot | ESC = Exit",t.width/2,t.height/2+50),e.fillText("High Score: "+w,t.width/2,t.height/2+80),e.textAlign="left";return}e.fillStyle="#00bfff",e.beginPath(),e.moveTo(u+A/2,E()),e.lineTo(u,E()+M),e.lineTo(u+A,E()+M),e.closePath(),e.fill();for(const o of O)o.alive&&(e.fillStyle=_[o.row],e.fillRect(o.x+4,o.y,a-8,m-4),e.fillRect(o.x+2,o.y+4,6,4),e.fillRect(o.x+a-8,o.y+4,6,4),e.fillRect(o.x+6,o.y-4,3,6),e.fillRect(o.x+a-9,o.y-4,3,6),e.fillRect(o.x,o.y+m-6,4,6),e.fillRect(o.x+a-4,o.y+m-6,4,6));e.fillStyle="#00ff41";for(const o of x)e.fillRect(o.x,o.y,p,C);e.fillStyle="#ff6b6b";for(const o of T)e.fillRect(o.x,o.y,p,C);e.fillStyle="#00ff41",e.font="22px VT323, monospace",e.textAlign="left",e.fillText("SCORE: "+y,10,24),e.textAlign="center",e.fillText("HIGH: "+w,t.width/2,24),e.textAlign="right",e.fillText("LIVES: "+"♥".repeat(S),t.width-10,24),e.textAlign="left",h==="gameover"&&(e.fillStyle="rgba(0,0,0,0.7)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#ff6b6b",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("GAME OVER",t.width/2,t.height/2-20),e.fillStyle="#ffbd2e",e.font="24px VT323, monospace",e.fillText("Score: "+y,t.width/2,t.height/2+20),e.fillStyle="#888",e.fillText("PRESS ENTER TO RESTART",t.width/2,t.height/2+60),e.textAlign="left"),h==="won"&&(e.fillStyle="rgba(0,0,0,0.7)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#00ff41",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("YOU WIN!",t.width/2,t.height/2-20),e.fillStyle="#ffbd2e",e.font="24px VT323, monospace",e.fillText("Score: "+y,t.width/2,t.height/2+20),e.fillStyle="#888",e.fillText("PRESS ENTER TO PLAY AGAIN",t.width/2,t.height/2+60),e.textAlign="left")}}function U(){ie(),oe(),c=requestAnimationFrame(U)}return P(),U(),function(){cancelAnimationFrame(c),window.removeEventListener("keydown",G),window.removeEventListener("keyup",B),b.disconnect()}}function ge(t,l){const e=t.getContext("2d");if(!e)return()=>{};const i=10,s=20,a=[{shape:[[1,1,1,1]],color:"#00bfff"},{shape:[[1,1],[1,1]],color:"#ffbd2e"},{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},{shape:[[1,0,0],[1,1,1]],color:"#ff6b6b"},{shape:[[0,0,1],[1,1,1]],color:"#00ff41"},{shape:[[0,1,1],[1,1,0]],color:"#ff6b6b"},{shape:[[1,1,0],[0,1,1]],color:"#00ff41"}];let m="waiting",f=0,A=1,M=0,p=parseInt(localStorage.getItem("tetrisHigh")||"0",10),C=0,R=[],r=null,H=0,V=45;function _(){t.width=t.clientWidth,t.height=t.clientHeight}_();const h=new ResizeObserver(_);h.observe(t);function y(){R=[];for(let n=0;n<s;n++)R.push(new Array(i).fill(null))}function S(){const n=a[Math.floor(Math.random()*a.length)];r={shape:n.shape.map(d=>[...d]),color:n.color,x:Math.floor((i-n.shape[0].length)/2),y:0},w(r.shape,r.x,r.y)&&(m="gameover",r=null)}function w(n,d,P){for(let x=0;x<n.length;x++)for(let T=0;T<n[x].length;T++){if(!n[x][T])continue;const k=d+T,I=P+x;if(k<0||k>=i||I>=s||I>=0&&R[I][k])return!0}return!1}function c(){if(r){for(let n=0;n<r.shape.length;n++)for(let d=0;d<r.shape[n].length;d++){if(!r.shape[n][d])continue;const P=r.y+n;P>=0&&(R[P][r.x+d]=r.color)}g(),S()}}function g(){let n=0;for(let d=s-1;d>=0;d--)R[d].every(P=>P!==null)&&(R.splice(d,1),R.unshift(new Array(i).fill(null)),n++,d++);n>0&&(f+=([0,100,300,500,800][n]||800)*A,M+=n,A=Math.floor(M/10)+1,V=Math.max(5,45-(A-1)*4),f>p&&(p=f,localStorage.setItem("tetrisHigh",String(p))))}function b(n){const d=n.length,P=n[0].length,x=[];for(let T=0;T<P;T++){x.push([]);for(let k=d-1;k>=0;k--)x[T].push(n[k][T])}return x}const u={};function E(n){if(n.key==="Escape"){l();return}if((m==="waiting"||m==="gameover")&&n.key==="Enter"&&(m="playing",f=0,A=1,M=0,V=45,y(),S()),m!=="playing"||!r){u[n.key]=!0;return}if(n.key==="ArrowLeft")w(r.shape,r.x-1,r.y)||r.x--;else if(n.key==="ArrowRight")w(r.shape,r.x+1,r.y)||r.x++;else if(n.key==="ArrowDown")w(r.shape,r.x,r.y+1)?c():r.y++;else if(n.key==="ArrowUp"||n.key===" "){const d=b(r.shape);w(d,r.x,r.y)?w(d,r.x-1,r.y)?w(d,r.x+1,r.y)||(r.shape=d,r.x++):(r.shape=d,r.x--):r.shape=d}u[n.key]=!0,["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," "].includes(n.key)&&n.preventDefault()}function O(n){u[n.key]=!1}window.addEventListener("keydown",E),window.addEventListener("keyup",O);function D(){m!=="playing"||!r||(H++,H>=V&&(H=0,w(r.shape,r.x,r.y+1)?c():r.y++))}function N(){if(!e)return;e.fillStyle="#0a0a0a",e.fillRect(0,0,t.width,t.height);const n=Math.min(Math.floor((t.height-60)/s),Math.floor((t.width-200)/i)),d=n*i,P=n*s,x=Math.floor((t.width-d)/2),T=Math.floor((t.height-P)/2)+10;if(m==="waiting"){e.fillStyle="#00ff41",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("TETRIS",t.width/2,t.height/2-60),e.font="24px VT323, monospace",e.fillStyle="#ffbd2e",e.fillText("PRESS ENTER TO START",t.width/2,t.height/2+10),e.fillStyle="#888",e.font="18px VT323, monospace",e.fillText("Arrow Keys = Move | Up/Space = Rotate | ESC = Exit",t.width/2,t.height/2+50),e.fillText("High Score: "+p,t.width/2,t.height/2+80),e.textAlign="left";return}e.strokeStyle="#333",e.lineWidth=2,e.strokeRect(x-1,T-1,d+2,P+2);for(let k=0;k<s;k++)for(let I=0;I<i;I++){const G=x+I*n,B=T+k*n;R[k][I]?(e.fillStyle=R[k][I],e.fillRect(G+1,B+1,n-2,n-2)):(e.fillStyle="#111",e.fillRect(G,B,n,n),e.strokeStyle="#1a1a1a",e.lineWidth=.5,e.strokeRect(G,B,n,n))}if(r){e.fillStyle=r.color;for(let k=0;k<r.shape.length;k++)for(let I=0;I<r.shape[k].length;I++){if(!r.shape[k][I])continue;const G=x+(r.x+I)*n,B=T+(r.y+k)*n;e.fillRect(G+1,B+1,n-2,n-2)}}e.fillStyle="#00ff41",e.font="22px VT323, monospace",e.textAlign="left",e.fillText("SCORE: "+f,10,24),e.fillText("LEVEL: "+A,10,50),e.textAlign="center",e.fillText("HIGH: "+p,t.width/2,24),e.textAlign="right",e.fillText("LINES: "+M,t.width-10,24),e.textAlign="left",m==="gameover"&&(e.fillStyle="rgba(0,0,0,0.7)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#ff6b6b",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("GAME OVER",t.width/2,t.height/2-20),e.fillStyle="#ffbd2e",e.font="24px VT323, monospace",e.fillText("Score: "+f+"  Lines: "+M,t.width/2,t.height/2+20),e.fillStyle="#888",e.fillText("PRESS ENTER TO RESTART",t.width/2,t.height/2+60),e.textAlign="left")}function v(){D(),N(),C=requestAnimationFrame(v)}return y(),v(),function(){cancelAnimationFrame(C),window.removeEventListener("keydown",E),window.removeEventListener("keyup",O),h.disconnect()}}function ue(t,l){const e=t.getContext("2d");if(!e)return()=>{};const i=12,s=80,a=10,m=5,f=4,A=3.5,M=7;let p="waiting",C=0,R=0,r=0;function H(){t.width=t.clientWidth,t.height=t.clientHeight}H();const V=new ResizeObserver(H);V.observe(t);let _=t.height/2-s/2,h=t.height/2-s/2,y=t.width/2,S=t.height/2,w=f,c=f*.5;function g(){y=t.width/2,S=t.height/2,w=f*(Math.random()>.5?1:-1),c=(Math.random()*2-1)*f*.5}const b={};function u(v){if(v.key==="Escape"){l();return}(p==="waiting"||p==="gameover")&&v.key==="Enter"&&(p="playing",C=0,R=0,_=t.height/2-s/2,h=t.height/2-s/2,g()),b[v.key]=!0,(v.key==="ArrowUp"||v.key==="ArrowDown")&&v.preventDefault()}function E(v){b[v.key]=!1}window.addEventListener("keydown",u),window.addEventListener("keyup",E);function O(){if(p!=="playing")return;b.ArrowUp&&_>0&&(_-=m),b.ArrowDown&&_<t.height-s&&(_+=m);const v=h+s/2;w>0?v<S-10?h+=A:v>S+10&&(h-=A):v<t.height/2-5?h+=A*.5:v>t.height/2+5&&(h-=A*.5),h=Math.max(0,Math.min(t.height-s,h)),y+=w,S+=c,S<=0&&(S=0,c=Math.abs(c)),S+a>=t.height&&(S=t.height-a,c=-Math.abs(c));const n=20;y<=n+i&&y+a>=n&&S+a>=_&&S<=_+s&&w<0&&(w=Math.abs(w)*1.05,c=((S+a/2-_)/s-.5)*f*2,y=n+i);const d=t.width-20-i;y+a>=d&&y<=d+i&&S+a>=h&&S<=h+s&&w>0&&(w=-Math.abs(w)*1.05,c=((S+a/2-h)/s-.5)*f*2,y=d-a),y<0&&(R++,R>=M?p="gameover":g()),y>t.width&&(C++,C>=M?p="gameover":g())}function D(){if(e){if(e.fillStyle="#0a0a0a",e.fillRect(0,0,t.width,t.height),p==="waiting"){e.fillStyle="#00ff41",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("PONG",t.width/2,t.height/2-60),e.font="24px VT323, monospace",e.fillStyle="#ffbd2e",e.fillText("PRESS ENTER TO START",t.width/2,t.height/2+10),e.fillStyle="#888",e.font="18px VT323, monospace",e.fillText("Arrow Up/Down = Move | First to "+M+" wins | ESC = Exit",t.width/2,t.height/2+50),e.textAlign="left";return}if(e.setLineDash([8,8]),e.strokeStyle="#333",e.lineWidth=2,e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.stroke(),e.setLineDash([]),e.fillStyle="#00ff41",e.fillRect(20,_,i,s),e.fillStyle="#ff6b6b",e.fillRect(t.width-20-i,h,i,s),e.fillStyle="#ffbd2e",e.fillRect(y,S,a,a),e.fillStyle="#00ff41",e.font="48px VT323, monospace",e.textAlign="center",e.fillText(String(C),t.width/2-60,55),e.fillStyle="#ff6b6b",e.fillText(String(R),t.width/2+60,55),e.textAlign="left",e.font="18px VT323, monospace",e.fillStyle="#888",e.textAlign="left",e.fillText("YOU",20,t.height-15),e.textAlign="right",e.fillText("CPU",t.width-20,t.height-15),e.textAlign="left",p==="gameover"){e.fillStyle="rgba(0,0,0,0.7)",e.fillRect(0,0,t.width,t.height);const v=C>=M;e.fillStyle=v?"#00ff41":"#ff6b6b",e.textAlign="center",e.font="48px VT323, monospace",e.fillText(v?"YOU WIN!":"CPU WINS",t.width/2,t.height/2-20),e.fillStyle="#ffbd2e",e.font="24px VT323, monospace",e.fillText(C+" - "+R,t.width/2,t.height/2+20),e.fillStyle="#888",e.fillText("PRESS ENTER TO RESTART",t.width/2,t.height/2+60),e.textAlign="left"}}}function N(){O(),D(),r=requestAnimationFrame(N)}return N(),function(){cancelAnimationFrame(r),window.removeEventListener("keydown",u),window.removeEventListener("keyup",E),V.disconnect()}}console.log(`%c
 ██████╗ ██████╗ ███████╗███╗   ██╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║
██║   ██║██████╔╝█████╗  ██╔██╗ ██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║
╚██████╔╝██║     ███████╗██║ ╚████║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝
  ████████╗ ██████╗
  ╚══██╔══╝██╔═══██╗
     ██║   ██║   ██║
     ██║   ██║   ██║
     ██║   ╚██████╔╝
     ╚═╝    ╚═════╝
 ██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗
 ██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝
 ██║ █╗ ██║██║   ██║██████╔╝█████╔╝
 ██║███╗██║██║   ██║██╔══██╗██╔═██╗
 ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗
  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`,"color: #00ff41; font-family: monospace;");console.log(`%c> STATUS: Open to new quests. Accepting side-missions & full-time raids.
> CLASS: Full-Stack Developer | LEVEL: Senior
> SKILLS: JS, TS, Python, React, Node, Cloud & more
> PING ME: linkedin.com/in/albertobarrago
> $_ Hire me before the next sprint starts.`,"color: #ffbd2e; font-size: 13px; font-family: monospace;");const me=Object.freeze({space:"SPACE INVADERS",tetris:"TETRIS",pong:"PONG"}),ye=Object.freeze({space:he,tetris:ge,pong:ue}),K=Object.freeze(["Initializing modem...","ATZ OK","ATDT *67 555-0199","CONNECT 56000","","Amiga Workbench 3.1","Copyright (c) 1985-1994 Commodore-Amiga, Inc.","","Checking memory...","Chip RAM: 2048K","Fast RAM: 8192K","","Loading system...","Welcome, visitor!","","Type HELP for commands or click menu items.",""]),Se=["about","skills","experience","contact"],we=`     _    __  __ ___ ____    _
    / \\  |  \\/  |_ _/ ___|  / \\
   / _ \\ | |\\/| || | |  _  / _ \\
  / ___ \\| |  | || | |_| |/ ___ \\
 /_/   \\_\\_|  |_|___\\____/_/   \\_\\`;let X=!1,Q=!1,W=null;const z=document.getElementById("app");function be(){return`<div class="start-overlay" data-action="start-boot">
	<div class="start-content">
		<div class="start-ascii"><pre>${we}</pre></div>
		<p class="start-title">WORKBENCH 3.1</p>
		<p class="start-prompt blink">[ Click anywhere to connect ]</p>
	</div>
</div>`}function xe(){const t=Se.map(l=>{var e;return`<button class="menu-item${l==="about"?" active":""}" data-section="${l}">${(e=l.at(0))==null?void 0:e.toUpperCase()}${l.slice(1)}</button>`}).join("");return`<div class="amiga-screen">
	<div class="monitor-frame">
		<div class="screen-bezel">
			<div class="crt-screen">
				<div class="title-bar">
					<div class="title-bar-left"><span class="window-button close"></span></div>
					<span class="title-text">Alberto Barrago - Portfolio v${Y}</span>
					<div class="title-bar-right">
						<span class="window-button depth"></span>
						<span class="window-button zoom"></span>
					</div>
				</div>
				<nav class="menu-bar">${t}</nav>
				<div class="content-area" id="content-area">
					<div class="boot-screen" id="boot-screen"><span class="cursor">_</span></div>
				</div>
				<div class="status-bar">
					<span>Chip: 2048K</span>
					<span>Fast: 8192K</span>
					<span class="status-right">v${Y}</span>
				</div>
				<div class="scanlines"></div>
				<div class="crt-flicker"></div>
			</div>
		</div>
	</div>
</div>`}function Te(){return`<div class="section">
	<h1 class="section-title">&gt; ${re}</h1>
	<p class="role">${se}</p>
	<p class="location">${J}</p>
	<div class="divider"></div>
	<p class="profile">${ce}</p>
	<div class="action-buttons">
		<button class="amiga-btn" data-action="download-cv">Download CV</button>
		<a href="${F.github}" target="_blank" class="amiga-btn">GitHub</a>
	</div>
	<div class="desktop-icons">
		<div class="desktop-icon" data-game="space">
			<div class="desktop-icon-img"><div class="icon-alien"></div></div>
			<span class="desktop-icon-label">space.exe</span>
		</div>
		<div class="desktop-icon" data-game="tetris">
			<div class="desktop-icon-img"><div class="icon-tetris"></div></div>
			<span class="desktop-icon-label">tetris.exe</span>
		</div>
		<div class="desktop-icon" data-game="pong">
			<div class="desktop-icon-img"><div class="icon-pong"></div></div>
			<span class="desktop-icon-label">pong.exe</span>
		</div>
		<a class="desktop-icon" href="https://mario-murru-the-game.netlify.app/" target="_blank" rel="noopener noreferrer">
			<div class="desktop-icon-img"><div class="icon-mario"></div></div>
			<span class="desktop-icon-label">mario.lnk</span>
		</a>
	</div>
</div>`}function Ae(){return`<div class="section">
	<h1 class="section-title">&gt; Skills</h1>
	<div class="skills-grid">${Object.entries(fe).map(([l,e])=>{var i;return`<div class="skill-category">
			<h3>${(i=l.at(0))==null?void 0:i.toUpperCase()}${l.slice(1)}</h3>
			<ul>${e.map(s=>`<li>${s}</li>`).join("")}</ul>
		</div>`}).join("")}</div>
</div>`}function Ee(){return`<div class="section">
	<h1 class="section-title">&gt; Experience</h1>
	<div class="experience-list">${de.map(l=>`<div class="job-item">
			<div class="job-header">
				<span class="job-role">${l.role}</span>
				<span class="job-period">${l.period}</span>
			</div>
			<div class="job-company">${l.company}</div>
			<div class="job-highlight">${l.highlight}</div>
		</div>`).join("")}</div>
</div>`}function ve(){return`<div class="section">
	<h1 class="section-title">&gt; Contact</h1>
	<div class="contact-info">
		<p><span class="label">Email:</span> <a href="${F.email}">albertobarrago@gmail.com</a></p>
		<p><span class="label">GitHub:</span> <a href="${F.github}" target="_blank">github.com/AlbertoBarrago</a></p>
		<p><span class="label">Location:</span> ${J}</p>
	</div>
	<div class="action-buttons">
		<button class="amiga-btn" data-action="download-cv">Download CV</button>
	</div>
</div>`}function ke(t){return`<div class="game-fullscreen" id="game-overlay">
	<div class="game-scanlines"></div>
	<div class="game-topbar">
		<span class="game-title">${me[t]??""}</span>
		<span class="game-exit" data-action="exit-game">[X] Close</span>
	</div>
	<canvas class="game-canvas"></canvas>
</div>`}const Re=Object.freeze({about:Te,skills:Ae,experience:Ee,contact:ve});function Le(){const t=globalThis.AudioContext??globalThis.webkitAudioContext,l=new t,e=l.createGain();e.gain.value=.18,e.connect(l.destination);const i=l.currentTime;for(const c of[350,440]){const g=l.createOscillator();g.type="sine",g.frequency.value=c;const b=l.createGain();b.gain.value=.18,g.connect(b),b.connect(e),g.start(i),g.stop(i+.4)}const s=[[941,1336],[697,1336],[770,1209],[852,1477],[941,1209],[770,1336]];for(const[c,g]of s.entries())for(const b of g){const u=l.createOscillator();u.type="sine",u.frequency.value=b;const E=l.createGain();E.gain.value=.28,u.connect(E),E.connect(e),u.start(i+.5+c*.1),u.stop(i+.5+c*.1+.08)}for(const c of[440,480]){const g=l.createOscillator();g.type="sine",g.frequency.value=c;const b=l.createGain();b.gain.value=.14,g.connect(b),b.connect(e),g.start(i+1.15),g.stop(i+1.55)}const a=l.createOscillator();a.type="sine",a.frequency.value=2100;const m=l.createGain();m.gain.value=.22,a.connect(m),m.connect(e),a.start(i+1.65),a.stop(i+2.65);for(let c=0;c<3;c++){const g=1.65+c*.34;m.gain.setValueAtTime(.22,i+g),m.gain.linearRampToValueAtTime(.01,i+g+.018),m.gain.linearRampToValueAtTime(.22,i+g+.036)}for(const[c,g]of[980,1300,2100,1650].entries()){const b=l.createOscillator();b.type="sine",b.frequency.value=g;const u=l.createGain();u.gain.value=.16,b.connect(u),u.connect(e),b.start(i+2.75+c*.08),b.stop(i+2.75+c*.08+.06)}const f=3.1,A=1,M=[{f1:2100,f2:1100,steps:10},{f1:1650,f2:2600,steps:8},{f1:980,f2:2250,steps:12}];for(const[c,{f1:g,f2:b,steps:u}]of M.entries()){const E=l.createOscillator();E.type="sine",E.frequency.setValueAtTime(g,i+f);for(let D=1;D<=u;D++)E.frequency.linearRampToValueAtTime(D%2===0?g:b,i+f+D/u*A);const O=l.createGain();O.gain.value=.07,E.connect(O),O.connect(e),E.start(i+f+c*.03),E.stop(i+f+A+c*.03)}const p=l.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(1800,i+f),p.frequency.linearRampToValueAtTime(900,i+f+.25),p.frequency.linearRampToValueAtTime(2500,i+f+.5),p.frequency.linearRampToValueAtTime(1100,i+f+.75),p.frequency.linearRampToValueAtTime(2100,i+f+1);const C=l.createGain();C.gain.value=.05,p.connect(C),C.connect(e),p.start(i+f),p.stop(i+f+A);const R=Math.floor(l.sampleRate*(A+.3)),r=l.createBuffer(1,R,l.sampleRate),H=r.getChannelData(0);for(let c=0;c<R;c++)H[c]=Math.random()*2-1;const V=l.createBufferSource();V.buffer=r;const _=l.createBiquadFilter();_.type="bandpass",_.frequency.value=1800,_.Q.value=2.5;const h=l.createGain();h.gain.value=.04,V.connect(_),_.connect(h),h.connect(e),V.start(i+f),V.stop(i+f+A+.2);const y=f+A+.05,S=l.createOscillator();S.type="sine",S.frequency.value=2400;const w=l.createGain();w.gain.setValueAtTime(.18,i+y),w.gain.linearRampToValueAtTime(0,i+y+.35),S.connect(w),w.connect(e),S.start(i+y),S.stop(i+y+.35),e.gain.setValueAtTime(.18,i+y+.1),e.gain.linearRampToValueAtTime(0,i+y+.5)}function _e(){if(X)return;X=!0,z.innerHTML=xe(),Le();const t=document.getElementById("boot-screen"),l=t.querySelector(".cursor");let e=0;const i=setInterval(()=>{if(e<K.length){const s=document.createElement("div");s.className="boot-line",s.textContent=K[e],t.insertBefore(s,l),e++}else clearInterval(i),Q=!0,Z("about")},250)}function Z(t){const l=document.getElementById("content-area"),e=Re[t];e&&(l.innerHTML=e());for(const i of document.querySelectorAll(".menu-item")){const s=i;s.classList.toggle("active",s.dataset.section===t)}}function Oe(t){ee();const l=document.createElement("div");l.innerHTML=ke(t);const e=l.firstElementChild;z.appendChild(e);const i=e.querySelector(".game-canvas"),s=ye[t];s&&i&&requestAnimationFrame(()=>{W=s(i,te)})}function ee(){W&&(W(),W=null)}function te(){var t;ee(),(t=document.getElementById("game-overlay"))==null||t.remove()}z.addEventListener("click",t=>{const l=t.target;if(l.closest('[data-action="start-boot"]')){_e();return}const e=l.closest("[data-section]");if(e!=null&&e.dataset.section&&Q){Z(e.dataset.section);return}const i=l.closest("[data-game]");if(i!=null&&i.dataset.game){Oe(i.dataset.game);return}if(l.closest('[data-action="download-cv"]')){pe();return}l.closest('[data-action="exit-game"]')&&te()});z.innerHTML=be();
