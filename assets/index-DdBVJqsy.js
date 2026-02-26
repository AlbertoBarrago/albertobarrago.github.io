(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const le="4.4.1",ne={version:le},re="Alberto Barrago",se="Senior Software Engineer",J="Cagliari, Italy",ae="albertobarrago@gmail.com",j="albertobarrago_cv.pdf",ce=`JavaScript-first Senior Engineer with deep expertise in enterprise
scalability and cloud architecture. Over 6+ years delivering production
systems for millions of users across frontend, backend, and DevOps—
specializing in Node.js/React ecosystems, Spring Boot microservices,
and CI/CD automation. Experienced in building component libraries and
Kafka-based architectures. Currently developing Python/FastAPI skills
and exploring AI-integrated solutions. Pragmatic builder who values code
quality, collaborative shipping, and real measurable impact.
`,fe={frontend:["Angular","React","Vanilla JS"],backend:["Node.js","Fastify","FastAPI","Flask","Spring Boot"],database:["MongoDB","Oracle","MySQL"],devops:["Docker","GitHub/Gitlab Actions","Azure DevOps"],tools:["Git","Neovim","tmux",""],ai:["LLM Integration","Prompt Engineering","AI Agents"]},de=[{role:"Senior Software Engineer",company:"C22 Consulting",period:"2026 - Present",highlight:"Loading..."},{role:"Senior Software Engineer",company:"Minsait/Indra",period:"2023 - 2025",highlight:"Angular component library for 6+ teams, CI/CD optimization -30% deploy time"},{role:"Senior Software Developer",company:"Softfobia",period:"2022 - 2023",highlight:"Led full-stack teams, 20% load time improvement"},{role:"Software Developer",company:"Accenture",period:"2021 - 2022",highlight:"Kafka microservices architecture, Angular 12 apps"},{role:"Software Developer",company:"Sinossi",period:"2016 - 2021",highlight:"Mobile apps for Deutsche Bank, TIM (Fortune 500)"}],q={github:"https://github.com/AlbertoBarrago",email:`mailto:${ae}`},Y=ne.version,pe=()=>{const t=document.createElement("a");t.href=j,t.download=j,t.dispatchEvent(new MouseEvent("click"))};function he(t,r){const e=t.getContext("2d");if(!e)return()=>{};const n=8,s=5,a=32,h=24,p=12,T=40,L=20,y=3,_=12,x=5,l=7,P=4,O=.003,v=["#ff6b6b","#ff6b6b","#ffbd2e","#ffbd2e","#00ff41"];let c="waiting",w=0,m=3,d=parseInt(localStorage.getItem("spaceInvadersHigh")||"0",10),k=0;function V(){t.width=t.clientWidth,t.height=t.clientHeight}V();const D=new ResizeObserver(V);D.observe(t);let R=t.width/2-T/2;const M=()=>t.height-40;let I=[],H=1,N=0,S=40;const o=10,f=20;function C(){I=[];const i=n*(a+p)-p,E=(t.width-i)/2;for(let $=0;$<s;$++)for(let W=0;W<n;W++)I.push({x:E+W*(a+p),y:60+$*(h+p),row:$,alive:!0});H=1,N=0,S=40}let g=[],u=[],b=0;const A={};function G(i){if(i.key==="Escape"){r();return}(c==="waiting"||c==="gameover"||c==="won")&&i.key==="Enter"&&(c="playing",w=0,m=3,g=[],u=[],R=t.width/2-T/2,C()),A[i.key]=!0,(i.key===" "||i.key==="ArrowLeft"||i.key==="ArrowRight")&&i.preventDefault()}function B(i){A[i.key]=!1}window.addEventListener("keydown",G),window.addEventListener("keyup",B);function ie(){if(c==="playing"){A.ArrowLeft&&R>0&&(R-=x),A.ArrowRight&&R<t.width-T&&(R+=x),b>0&&b--,A[" "]&&b===0&&(g.push({x:R+T/2-y/2,y:M()-_}),b=15);for(let i=g.length-1;i>=0;i--){if(g[i].y-=l,g[i].y<0){g.splice(i,1);continue}for(const E of I)if(E.alive&&g[i]&&g[i].x<E.x+a&&g[i].x+y>E.x&&g[i].y<E.y+h&&g[i].y+_>E.y){E.alive=!1,g.splice(i,1),w+=10,w>d&&(d=w,localStorage.setItem("spaceInvadersHigh",String(d)));const $=I.filter(W=>W.alive).length;$>0&&(S=Math.max(4,Math.floor(40*($/(s*n)))));break}}if(I.every(i=>!i.alive)){c="won";return}if(N++,N>=S){N=0;let i=!1;for(const E of I)if(E.alive&&(H>0&&E.x+a+o>t.width-10||H<0&&E.x-o<10)){i=!0;break}if(i){H*=-1;for(const E of I)E.y+=f}else for(const E of I)E.x+=o*H;for(const E of I)if(E.alive&&E.y+h>=M()){c="gameover";return}}for(const i of I.filter(E=>E.alive))Math.random()<O&&u.push({x:i.x+a/2-y/2,y:i.y+h});for(let i=u.length-1;i>=0;i--){if(u[i].y+=P,u[i].y>t.height){u.splice(i,1);continue}if(u[i].x<R+T&&u[i].x+y>R&&u[i].y<M()+L&&u[i].y+_>M()&&(u.splice(i,1),m--,m<=0)){c="gameover";return}}}}function oe(){if(e){if(e.fillStyle="#0a0a0a",e.fillRect(0,0,t.width,t.height),c==="waiting"){e.fillStyle="#00ff41",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("SPACE INVADERS",t.width/2,t.height/2-60),e.font="24px VT323, monospace",e.fillStyle="#ffbd2e",e.fillText("PRESS ENTER TO START",t.width/2,t.height/2+10),e.fillStyle="#888",e.font="18px VT323, monospace",e.fillText("Arrow Keys = Move | Space = Shoot | ESC = Exit",t.width/2,t.height/2+50),e.fillText("High Score: "+d,t.width/2,t.height/2+80),e.textAlign="left";return}e.fillStyle="#00bfff",e.beginPath(),e.moveTo(R+T/2,M()),e.lineTo(R,M()+L),e.lineTo(R+T,M()+L),e.closePath(),e.fill();for(const i of I)i.alive&&(e.fillStyle=v[i.row],e.fillRect(i.x+4,i.y,a-8,h-4),e.fillRect(i.x+2,i.y+4,6,4),e.fillRect(i.x+a-8,i.y+4,6,4),e.fillRect(i.x+6,i.y-4,3,6),e.fillRect(i.x+a-9,i.y-4,3,6),e.fillRect(i.x,i.y+h-6,4,6),e.fillRect(i.x+a-4,i.y+h-6,4,6));e.fillStyle="#00ff41";for(const i of g)e.fillRect(i.x,i.y,y,_);e.fillStyle="#ff6b6b";for(const i of u)e.fillRect(i.x,i.y,y,_);e.fillStyle="#00ff41",e.font="22px VT323, monospace",e.textAlign="left",e.fillText("SCORE: "+w,10,24),e.textAlign="center",e.fillText("HIGH: "+d,t.width/2,24),e.textAlign="right",e.fillText("LIVES: "+"♥".repeat(m),t.width-10,24),e.textAlign="left",c==="gameover"&&(e.fillStyle="rgba(0,0,0,0.7)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#ff6b6b",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("GAME OVER",t.width/2,t.height/2-20),e.fillStyle="#ffbd2e",e.font="24px VT323, monospace",e.fillText("Score: "+w,t.width/2,t.height/2+20),e.fillStyle="#888",e.fillText("PRESS ENTER TO RESTART",t.width/2,t.height/2+60),e.textAlign="left"),c==="won"&&(e.fillStyle="rgba(0,0,0,0.7)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#00ff41",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("YOU WIN!",t.width/2,t.height/2-20),e.fillStyle="#ffbd2e",e.font="24px VT323, monospace",e.fillText("Score: "+w,t.width/2,t.height/2+20),e.fillStyle="#888",e.fillText("PRESS ENTER TO PLAY AGAIN",t.width/2,t.height/2+60),e.textAlign="left")}}function U(){ie(),oe(),k=requestAnimationFrame(U)}return C(),U(),function(){cancelAnimationFrame(k),window.removeEventListener("keydown",G),window.removeEventListener("keyup",B),D.disconnect()}}function ge(t,r){const e=t.getContext("2d");if(!e)return()=>{};const n=10,s=20,a=[{shape:[[1,1,1,1]],color:"#00bfff"},{shape:[[1,1],[1,1]],color:"#ffbd2e"},{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},{shape:[[1,0,0],[1,1,1]],color:"#ff6b6b"},{shape:[[0,0,1],[1,1,1]],color:"#00ff41"},{shape:[[0,1,1],[1,1,0]],color:"#ff6b6b"},{shape:[[1,1,0],[0,1,1]],color:"#00ff41"}];let h="waiting",p=0,T=1,L=0,y=parseInt(localStorage.getItem("tetrisHigh")||"0",10),_=0,x=[],l=null,P=0,O=45;function v(){t.width=t.clientWidth,t.height=t.clientHeight}v();const c=new ResizeObserver(v);c.observe(t);function w(){x=[];for(let o=0;o<s;o++)x.push(new Array(n).fill(null))}function m(){const o=a[Math.floor(Math.random()*a.length)];l={shape:o.shape.map(f=>[...f]),color:o.color,x:Math.floor((n-o.shape[0].length)/2),y:0},d(l.shape,l.x,l.y)&&(h="gameover",l=null)}function d(o,f,C){for(let g=0;g<o.length;g++)for(let u=0;u<o[g].length;u++){if(!o[g][u])continue;const b=f+u,A=C+g;if(b<0||b>=n||A>=s||A>=0&&x[A][b])return!0}return!1}function k(){if(l){for(let o=0;o<l.shape.length;o++)for(let f=0;f<l.shape[o].length;f++){if(!l.shape[o][f])continue;const C=l.y+o;C>=0&&(x[C][l.x+f]=l.color)}V(),m()}}function V(){let o=0;for(let f=s-1;f>=0;f--)x[f].every(C=>C!==null)&&(x.splice(f,1),x.unshift(new Array(n).fill(null)),o++,f++);o>0&&(p+=([0,100,300,500,800][o]||800)*T,L+=o,T=Math.floor(L/10)+1,O=Math.max(5,45-(T-1)*4),p>y&&(y=p,localStorage.setItem("tetrisHigh",String(y))))}function D(o){const f=o.length,C=o[0].length,g=[];for(let u=0;u<C;u++){g.push([]);for(let b=f-1;b>=0;b--)g[u].push(o[b][u])}return g}const R={};function M(o){if(o.key==="Escape"){r();return}if((h==="waiting"||h==="gameover")&&o.key==="Enter"&&(h="playing",p=0,T=1,L=0,O=45,w(),m()),h!=="playing"||!l){R[o.key]=!0;return}if(o.key==="ArrowLeft")d(l.shape,l.x-1,l.y)||l.x--;else if(o.key==="ArrowRight")d(l.shape,l.x+1,l.y)||l.x++;else if(o.key==="ArrowDown")d(l.shape,l.x,l.y+1)?k():l.y++;else if(o.key==="ArrowUp"||o.key===" "){const f=D(l.shape);d(f,l.x,l.y)?d(f,l.x-1,l.y)?d(f,l.x+1,l.y)||(l.shape=f,l.x++):(l.shape=f,l.x--):l.shape=f}R[o.key]=!0,["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," "].includes(o.key)&&o.preventDefault()}function I(o){R[o.key]=!1}window.addEventListener("keydown",M),window.addEventListener("keyup",I);function H(){h!=="playing"||!l||(P++,P>=O&&(P=0,d(l.shape,l.x,l.y+1)?k():l.y++))}function N(){if(!e)return;e.fillStyle="#0a0a0a",e.fillRect(0,0,t.width,t.height);const o=Math.min(Math.floor((t.height-60)/s),Math.floor((t.width-200)/n)),f=o*n,C=o*s,g=Math.floor((t.width-f)/2),u=Math.floor((t.height-C)/2)+10;if(h==="waiting"){e.fillStyle="#00ff41",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("TETRIS",t.width/2,t.height/2-60),e.font="24px VT323, monospace",e.fillStyle="#ffbd2e",e.fillText("PRESS ENTER TO START",t.width/2,t.height/2+10),e.fillStyle="#888",e.font="18px VT323, monospace",e.fillText("Arrow Keys = Move | Up/Space = Rotate | ESC = Exit",t.width/2,t.height/2+50),e.fillText("High Score: "+y,t.width/2,t.height/2+80),e.textAlign="left";return}e.strokeStyle="#333",e.lineWidth=2,e.strokeRect(g-1,u-1,f+2,C+2);for(let b=0;b<s;b++)for(let A=0;A<n;A++){const G=g+A*o,B=u+b*o;x[b][A]?(e.fillStyle=x[b][A],e.fillRect(G+1,B+1,o-2,o-2)):(e.fillStyle="#111",e.fillRect(G,B,o,o),e.strokeStyle="#1a1a1a",e.lineWidth=.5,e.strokeRect(G,B,o,o))}if(l){e.fillStyle=l.color;for(let b=0;b<l.shape.length;b++)for(let A=0;A<l.shape[b].length;A++){if(!l.shape[b][A])continue;const G=g+(l.x+A)*o,B=u+(l.y+b)*o;e.fillRect(G+1,B+1,o-2,o-2)}}e.fillStyle="#00ff41",e.font="22px VT323, monospace",e.textAlign="left",e.fillText("SCORE: "+p,10,24),e.fillText("LEVEL: "+T,10,50),e.textAlign="center",e.fillText("HIGH: "+y,t.width/2,24),e.textAlign="right",e.fillText("LINES: "+L,t.width-10,24),e.textAlign="left",h==="gameover"&&(e.fillStyle="rgba(0,0,0,0.7)",e.fillRect(0,0,t.width,t.height),e.fillStyle="#ff6b6b",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("GAME OVER",t.width/2,t.height/2-20),e.fillStyle="#ffbd2e",e.font="24px VT323, monospace",e.fillText("Score: "+p+"  Lines: "+L,t.width/2,t.height/2+20),e.fillStyle="#888",e.fillText("PRESS ENTER TO RESTART",t.width/2,t.height/2+60),e.textAlign="left")}function S(){H(),N(),_=requestAnimationFrame(S)}return w(),S(),function(){cancelAnimationFrame(_),window.removeEventListener("keydown",M),window.removeEventListener("keyup",I),c.disconnect()}}function ue(t,r){const e=t.getContext("2d");if(!e)return()=>{};const n=12,s=80,a=10,h=5,p=4,T=3.5,L=7;let y="waiting",_=0,x=0,l=0;function P(){t.width=t.clientWidth,t.height=t.clientHeight}P();const O=new ResizeObserver(P);O.observe(t);let v=t.height/2-s/2,c=t.height/2-s/2,w=t.width/2,m=t.height/2,d=p,k=p*.5;function V(){w=t.width/2,m=t.height/2,d=p*(Math.random()>.5?1:-1),k=(Math.random()*2-1)*p*.5}const D={};function R(S){if(S.key==="Escape"){r();return}(y==="waiting"||y==="gameover")&&S.key==="Enter"&&(y="playing",_=0,x=0,v=t.height/2-s/2,c=t.height/2-s/2,V()),D[S.key]=!0,(S.key==="ArrowUp"||S.key==="ArrowDown")&&S.preventDefault()}function M(S){D[S.key]=!1}window.addEventListener("keydown",R),window.addEventListener("keyup",M);function I(){if(y!=="playing")return;D.ArrowUp&&v>0&&(v-=h),D.ArrowDown&&v<t.height-s&&(v+=h);const S=c+s/2;d>0?S<m-10?c+=T:S>m+10&&(c-=T):S<t.height/2-5?c+=T*.5:S>t.height/2+5&&(c-=T*.5),c=Math.max(0,Math.min(t.height-s,c)),w+=d,m+=k,m<=0&&(m=0,k=Math.abs(k)),m+a>=t.height&&(m=t.height-a,k=-Math.abs(k));const o=20;w<=o+n&&w+a>=o&&m+a>=v&&m<=v+s&&d<0&&(d=Math.abs(d)*1.05,k=((m+a/2-v)/s-.5)*p*2,w=o+n);const f=t.width-20-n;w+a>=f&&w<=f+n&&m+a>=c&&m<=c+s&&d>0&&(d=-Math.abs(d)*1.05,k=((m+a/2-c)/s-.5)*p*2,w=f-a),w<0&&(x++,x>=L?y="gameover":V()),w>t.width&&(_++,_>=L?y="gameover":V())}function H(){if(e){if(e.fillStyle="#0a0a0a",e.fillRect(0,0,t.width,t.height),y==="waiting"){e.fillStyle="#00ff41",e.textAlign="center",e.font="48px VT323, monospace",e.fillText("PONG",t.width/2,t.height/2-60),e.font="24px VT323, monospace",e.fillStyle="#ffbd2e",e.fillText("PRESS ENTER TO START",t.width/2,t.height/2+10),e.fillStyle="#888",e.font="18px VT323, monospace",e.fillText("Arrow Up/Down = Move | First to "+L+" wins | ESC = Exit",t.width/2,t.height/2+50),e.textAlign="left";return}if(e.setLineDash([8,8]),e.strokeStyle="#333",e.lineWidth=2,e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.stroke(),e.setLineDash([]),e.fillStyle="#00ff41",e.fillRect(20,v,n,s),e.fillStyle="#ff6b6b",e.fillRect(t.width-20-n,c,n,s),e.fillStyle="#ffbd2e",e.fillRect(w,m,a,a),e.fillStyle="#00ff41",e.font="48px VT323, monospace",e.textAlign="center",e.fillText(String(_),t.width/2-60,55),e.fillStyle="#ff6b6b",e.fillText(String(x),t.width/2+60,55),e.textAlign="left",e.font="18px VT323, monospace",e.fillStyle="#888",e.textAlign="left",e.fillText("YOU",20,t.height-15),e.textAlign="right",e.fillText("CPU",t.width-20,t.height-15),e.textAlign="left",y==="gameover"){e.fillStyle="rgba(0,0,0,0.7)",e.fillRect(0,0,t.width,t.height);const S=_>=L;e.fillStyle=S?"#00ff41":"#ff6b6b",e.textAlign="center",e.font="48px VT323, monospace",e.fillText(S?"YOU WIN!":"CPU WINS",t.width/2,t.height/2-20),e.fillStyle="#ffbd2e",e.font="24px VT323, monospace",e.fillText(_+" - "+x,t.width/2,t.height/2+20),e.fillStyle="#888",e.fillText("PRESS ENTER TO RESTART",t.width/2,t.height/2+60),e.textAlign="left"}}}function N(){I(),H(),l=requestAnimationFrame(N)}return N(),function(){cancelAnimationFrame(l),window.removeEventListener("keydown",R),window.removeEventListener("keyup",M),O.disconnect()}}console.log(`%c
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
> $_ Hire me before the next sprint starts.`,"color: #ffbd2e; font-size: 13px; font-family: monospace;");const me=Object.freeze({space:"SPACE INVADERS",tetris:"TETRIS",pong:"PONG"}),ye=Object.freeze({space:he,tetris:ge,pong:ue}),K=Object.freeze(["Initializing modem...","ATZ OK","ATDT *67 555-0199","CONNECT 56000","","Amiga Workbench 3.1","Copyright (c) 1985-1994 Commodore-Amiga, Inc.","","Checking memory...","Chip RAM: 2048K","Fast RAM: 8192K","","Loading system...","Welcome, visitor!","","Type HELP for commands or click menu items.",""]),we=["about","skills","experience","contact"],Se=`     _    __  __ ___ ____    _
    / \\  |  \\/  |_ _/ ___|  / \\
   / _ \\ | |\\/| || | |  _  / _ \\
  / ___ \\| |  | || | |_| |/ ___ \\
 /_/   \\_\\_|  |_|___\\____/_/   \\_\\`;let X=!1,Q=!1,z=null;const F=document.getElementById("app");function be(){return`<div class="start-overlay" data-action="start-boot">
	<div class="start-content">
		<div class="start-ascii"><pre>${Se}</pre></div>
		<p class="start-title">WORKBENCH 3.1</p>
		<p class="start-prompt blink">[ Click anywhere to connect ]</p>
	</div>
</div>`}function xe(){const t=we.map(r=>{var e;return`<button class="menu-item${r==="about"?" active":""}" data-section="${r}">${(e=r.at(0))==null?void 0:e.toUpperCase()}${r.slice(1)}</button>`}).join("");return`<div class="amiga-screen">
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
		<a href="${q.github}" target="_blank" class="amiga-btn">GitHub</a>
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
</div>`}function Ee(){return`<div class="section">
	<h1 class="section-title">&gt; Skills</h1>
	<div class="skills-grid">${Object.entries(fe).map(([r,e])=>{var n;return`<div class="skill-category">
			<h3>${(n=r.at(0))==null?void 0:n.toUpperCase()}${r.slice(1)}</h3>
			<ul>${e.map(s=>`<li>${s}</li>`).join("")}</ul>
		</div>`}).join("")}</div>
</div>`}function Ae(){return`<div class="section">
	<h1 class="section-title">&gt; Experience</h1>
	<div class="experience-list">${de.map(r=>`<div class="job-item">
			<div class="job-header">
				<span class="job-role">${r.role}</span>
				<span class="job-period">${r.period}</span>
			</div>
			<div class="job-company">${r.company}</div>
			<div class="job-highlight">${r.highlight}</div>
		</div>`).join("")}</div>
</div>`}function ve(){return`<div class="section">
	<h1 class="section-title">&gt; Contact</h1>
	<div class="contact-info">
		<p><span class="label">Email:</span> <a href="${q.email}">albertobarrago@gmail.com</a></p>
		<p><span class="label">GitHub:</span> <a href="${q.github}" target="_blank">github.com/AlbertoBarrago</a></p>
		<p><span class="label">Blog:</span> <a href="${q.blog}" target="_blank">alblog.gigalixirapp.com</a></p>
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
</div>`}const Re=Object.freeze({about:Te,skills:Ee,experience:Ae,contact:ve});function Le(){const t=globalThis.AudioContext??globalThis.webkitAudioContext,r=new t,e=r.createGain();e.gain.value=.15,e.connect(r.destination);const n=r.currentTime,s=[[941,1336],[770,1209],[852,1477],[697,1336],[770,1336],[852,1209],[941,1209]];for(const[c,w]of s.entries())for(const m of w){const d=r.createOscillator();d.frequency.value=m,d.type="sine";const k=r.createGain();k.gain.value=.3,k.connect(e),d.connect(k),d.start(n+c*.1),d.stop(n+c*.1+.08)}const a=r.createOscillator();a.frequency.value=2100,a.type="sine";const h=r.createGain();h.gain.value=.2,h.connect(e),a.connect(h),a.start(n+1),a.stop(n+1.6);const p=r.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(980,n+1.7),p.frequency.linearRampToValueAtTime(2100,n+2.1),p.frequency.linearRampToValueAtTime(1300,n+2.4),p.frequency.linearRampToValueAtTime(1900,n+2.7),p.frequency.linearRampToValueAtTime(1500,n+3);const T=r.createGain();T.gain.value=.12,T.connect(e),p.connect(T),p.start(n+1.7),p.stop(n+3);const L=Math.floor(r.sampleRate*2),y=r.createBuffer(1,L,r.sampleRate),_=y.getChannelData(0);for(let c=0;c<L;c++)_[c]=Math.random()*2-1;const x=r.createBufferSource();x.buffer=y;const l=r.createBiquadFilter();l.type="bandpass",l.frequency.value=1800,l.Q.value=3;const P=r.createGain();P.gain.value=.08,P.connect(e),x.connect(l),l.connect(P),x.start(n+2.2),x.stop(n+3.8);const O=r.createOscillator();O.frequency.value=1650,O.type="square";const v=r.createGain();v.gain.value=.08,v.connect(e),O.connect(v),O.start(n+3),O.stop(n+3.5),e.gain.setValueAtTime(.15,n+3.2),e.gain.linearRampToValueAtTime(0,n+3.8)}function _e(){if(X)return;X=!0,F.innerHTML=xe(),Le();const t=document.getElementById("boot-screen"),r=t.querySelector(".cursor");let e=0;const n=setInterval(()=>{if(e<K.length){const s=document.createElement("div");s.className="boot-line",s.textContent=K[e],t.insertBefore(s,r),e++}else clearInterval(n),Q=!0,Z("about")},200)}function Z(t){const r=document.getElementById("content-area"),e=Re[t];e&&(r.innerHTML=e());for(const n of document.querySelectorAll(".menu-item")){const s=n;s.classList.toggle("active",s.dataset.section===t)}}function Ie(t){ee();const r=document.createElement("div");r.innerHTML=ke(t);const e=r.firstElementChild;F.appendChild(e);const n=e.querySelector(".game-canvas"),s=ye[t];s&&n&&requestAnimationFrame(()=>{z=s(n,te)})}function ee(){z&&(z(),z=null)}function te(){var t;ee(),(t=document.getElementById("game-overlay"))==null||t.remove()}F.addEventListener("click",t=>{const r=t.target;if(r.closest('[data-action="start-boot"]')){_e();return}const e=r.closest("[data-section]");if(e!=null&&e.dataset.section&&Q){Z(e.dataset.section);return}const n=r.closest("[data-game]");if(n!=null&&n.dataset.game){Ie(n.dataset.game);return}if(r.closest('[data-action="download-cv"]')){pe();return}r.closest('[data-action="exit-game"]')&&te()});F.innerHTML=be();
