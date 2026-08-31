(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const Fe="4.6.0",Ye={version:Fe},Te="Alberto Barrago",Ee="Senior Software Engineer",we="Cagliari, Italy",Ce="albertobarrago@gmail.com",Me="albertobarrago_cv.pdf",ze="Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems.",Ue={frontend:["Angular","React","Vanilla JS"],backend:["Node.js","Fastify","FastAPI","Flask","Spring Boot"],apple:["Swift","SwiftUI","SwiftData","AppKit","iOS/macOS"],database:["MongoDB","Oracle","MySQL"],devops:["Docker","GitHub/GitLab CI","Azure DevOps"],tools:["Git","Neovim","tmux","Zed"],ai:["LLM Integration","Prompt Engineering","AI Agents"]},Xe=[{role:"Tech Leader / Senior Software Engineer",company:"C22 Consulting",period:"2026 - Present",highlight:"Leading React, iOS, and Java architecture across active projects; mentoring developers and evangelizing AI workflows with Claude and MCP"},{role:"Senior Software Engineer / DevOps",company:"Minsait/Indra",period:"2023 - 2025",highlight:"Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time"},{role:"Senior Software Developer",company:"Softfobia",period:"2022 - 2023",highlight:"Led full-stack teams, 20% load time improvement"},{role:"Software Developer",company:"Accenture",period:"2021 - 2022",highlight:"Kafka microservices architecture, Angular 12 apps"},{role:"Software Developer",company:"Sinossi",period:"2016 - 2021",highlight:"Mobile apps for Deutsche Bank, TIM (Fortune 500)"}],se={name:"Markasso",description:"A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas.",url:"https://markasso.it",language:"TypeScript (0 deps)",status:"Experimental · Work in progress",focus:"Validating a direct, distraction-free interaction model for visual thinking."},Je=[{name:"RSS-Reader",description:"A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat.",url:"https://github.com/AlbertoBarrago/RSS-Reader",language:"Swift"},{name:"Timelog",description:"A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData.",url:"https://github.com/AlbertoBarrago/Timelog",language:"Swift"},{name:"DockDock",description:"A native macOS utility that shows live window previews when you hover over Dock icons.",url:"https://github.com/AlbertoBarrago/DockDock",language:"Swift"},{name:"Sgommello",description:"Break reminder for macOS: a monster breaks your screen until you take a real break.",url:"https://github.com/AlbertoBarrago/Sgommello",language:"Swift"}],Ke=[{name:"wir",description:"What Is Running - Port and Process Inspector.",install:"brew install AlbertoBarrago/tap/wir",url:"https://github.com/AlbertoBarrago/wir",tap:"AlbertoBarrago/tap"},{name:"jm",description:"Switch between JDKs registered with macOS. Primary shell command: jm.",install:"brew install AlbertoBarrago/tap/jm",url:"https://github.com/AlbertoBarrago/jm",tap:"AlbertoBarrago/tap"},{name:"serval",description:"Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval.",install:"brew install AlbertoBarrago/tap/serval",url:"https://github.com/AlbertoBarrago/serval",tap:"AlbertoBarrago/tap"}],me={github:"https://github.com/AlbertoBarrago",email:`mailto:${Ce}`,bsky:"https://bsky.app/profile/albzoser.bsky.social"},Ie=Ye.version,Ze=()=>{const e=document.createElement("a");e.href=Me,e.download=Me,e.dispatchEvent(new MouseEvent("click"))};function Qe(e,n){const t=e.getContext("2d");if(!t)return()=>{};const l=8,o=5,a=32,s=24,h=12,w=40,$=20,T=3,A=12,N=5,H=7,R=4,r=.003,E=["#ff6b6b","#ff6b6b","#ffbd2e","#ffbd2e","#00ff41"],v=1e3/60;let y="waiting",b=0,O=3,I=parseInt(localStorage.getItem("spaceInvadersHigh")||"0",10),_=0,q=0,u=0,k=[],x=[],C=[];function z(){const c=e.width||e.clientWidth||1,f=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const S=e.width/c,X=e.height/f;u=Math.max(0,Math.min(e.width-w,u*S));for(const J of k)J.x*=S,J.y*=X;for(const J of x)J.x*=S,J.y*=X;for(const J of C)J.x*=S,J.y*=X;y!=="playing"&&(u=e.width/2-w/2)}z();const K=new ResizeObserver(z);K.observe(e);const W=()=>e.height-40;let U=1,i=0,d=40;const L=10,g=20;function M(){k=[];const c=l*(a+h)-h,f=(e.width-c)/2;for(let S=0;S<o;S++)for(let X=0;X<l;X++)k.push({x:f+X*(a+h),y:60+S*(s+h),row:S,alive:!0});U=1,i=0,d=40}let D=0;const V={};function ie(c){if(c.key==="Escape"){n();return}(y==="waiting"||y==="gameover"||y==="won")&&c.key==="Enter"&&(y="playing",b=0,O=3,x=[],C=[],u=e.width/2-w/2,M()),V[c.key]=!0,(c.key===" "||c.key==="ArrowLeft"||c.key==="ArrowRight")&&c.preventDefault()}function B(c){V[c.key]=!1}window.addEventListener("keydown",ie),window.addEventListener("keyup",B);function F(c){if(y==="playing"){V.ArrowLeft&&u>0&&(u-=N*c),V.ArrowRight&&u<e.width-w&&(u+=N*c),u=Math.max(0,Math.min(e.width-w,u)),D>0&&(D=Math.max(0,D-c)),V[" "]&&D===0&&(x.push({x:u+w/2-T/2,y:W()-A}),D=15);for(let f=x.length-1;f>=0;f--){if(x[f].y-=H*c,x[f].y<0){x.splice(f,1);continue}for(const S of k)if(S.alive&&x[f]&&x[f].x<S.x+a&&x[f].x+T>S.x&&x[f].y<S.y+s&&x[f].y+A>S.y){S.alive=!1,x.splice(f,1),b+=10,b>I&&(I=b,localStorage.setItem("spaceInvadersHigh",String(I)));const X=k.filter(J=>J.alive).length;X>0&&(d=Math.max(4,Math.floor(40*(X/(o*l)))));break}}if(k.every(f=>!f.alive)){y="won";return}if(i+=c,i>=d){i=0;let f=!1;for(const S of k)if(S.alive&&(U>0&&S.x+a+L>e.width-10||U<0&&S.x-L<10)){f=!0;break}if(f){U*=-1;for(const S of k)S.y+=g}else for(const S of k)S.x+=L*U;for(const S of k)if(S.alive&&S.y+s>=W()){y="gameover";return}}for(const f of k.filter(S=>S.alive))Math.random()<r*c&&C.push({x:f.x+a/2-T/2,y:f.y+s});for(let f=C.length-1;f>=0;f--){if(C[f].y+=R*c,C[f].y>e.height){C.splice(f,1);continue}if(C[f].x<u+w&&C[f].x+T>u&&C[f].y<W()+$&&C[f].y+A>W()&&(C.splice(f,1),O--,O<=0)){y="gameover";return}}}}function Z(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),y==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("SPACE INVADERS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Fire = Shoot",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+I,e.width/2,e.height/2+78),t.textAlign="left";return}t.fillStyle="#00bfff",t.beginPath(),t.moveTo(u+w/2,W()),t.lineTo(u,W()+$),t.lineTo(u+w,W()+$),t.closePath(),t.fill();for(const c of k)c.alive&&(t.fillStyle=E[c.row],t.fillRect(c.x+4,c.y,a-8,s-4),t.fillRect(c.x+2,c.y+4,6,4),t.fillRect(c.x+a-8,c.y+4,6,4),t.fillRect(c.x+6,c.y-4,3,6),t.fillRect(c.x+a-9,c.y-4,3,6),t.fillRect(c.x,c.y+s-6,4,6),t.fillRect(c.x+a-4,c.y+s-6,4,6));t.fillStyle="#00ff41";for(const c of x)t.fillRect(c.x,c.y,T,A);t.fillStyle="#ff6b6b";for(const c of C)t.fillRect(c.x,c.y,T,A);t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+b,10,24),t.textAlign="center",t.fillText("HIGH: "+I,e.width/2,24),t.textAlign="right",t.fillText("LIVES: "+"♥".repeat(O),e.width-10,24),t.textAlign="left",y==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+b,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"),y==="won"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("YOU WIN!",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+b,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO PLAY AGAIN",e.width/2,e.height/2+60),t.textAlign="left")}}function Q(c){q===0&&(q=c);const f=Math.min((c-q)/v,3);q=c,F(f),Z(),_=requestAnimationFrame(Q)}return M(),_=requestAnimationFrame(Q),function(){cancelAnimationFrame(_),window.removeEventListener("keydown",ie),window.removeEventListener("keyup",B),K.disconnect()}}function et(e,n){const t=e.getContext("2d");if(!t)return()=>{};const l=10,o=20,a=[{shape:[[1,1,1,1]],color:"#00bfff"},{shape:[[1,1],[1,1]],color:"#ffbd2e"},{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},{shape:[[1,0,0],[1,1,1]],color:"#ff6b6b"},{shape:[[0,0,1],[1,1,1]],color:"#00ff41"},{shape:[[0,1,1],[1,1,0]],color:"#ff6b6b"},{shape:[[1,1,0],[0,1,1]],color:"#00ff41"}];let s="waiting",h=0,w=1,$=0,T=parseInt(localStorage.getItem("tetrisHigh")||"0",10),A=0,N=0;const H=1e3/60;let R=[],r=null,E=0,v=45;function y(){e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight)}y();const b=new ResizeObserver(y);b.observe(e);function O(){R=[];for(let i=0;i<o;i++)R.push(new Array(l).fill(null))}function I(){const i=a[Math.floor(Math.random()*a.length)];r={shape:i.shape.map(d=>[...d]),color:i.color,x:Math.floor((l-i.shape[0].length)/2),y:0},_(r.shape,r.x,r.y)&&(s="gameover",r=null)}function _(i,d,L){for(let g=0;g<i.length;g++)for(let M=0;M<i[g].length;M++){if(!i[g][M])continue;const D=d+M,V=L+g;if(D<0||D>=l||V>=o||V>=0&&R[V][D])return!0}return!1}function q(){if(r){for(let i=0;i<r.shape.length;i++)for(let d=0;d<r.shape[i].length;d++){if(!r.shape[i][d])continue;const L=r.y+i;L>=0&&(R[L][r.x+d]=r.color)}u(),I()}}function u(){let i=0;for(let d=o-1;d>=0;d--)R[d].every(L=>L!==null)&&(R.splice(d,1),R.unshift(new Array(l).fill(null)),i++,d++);i>0&&(h+=([0,100,300,500,800][i]||800)*w,$+=i,w=Math.floor($/10)+1,v=Math.max(5,45-(w-1)*4),h>T&&(T=h,localStorage.setItem("tetrisHigh",String(T))))}function k(i){const d=i.length,L=i[0].length,g=[];for(let M=0;M<L;M++){g.push([]);for(let D=d-1;D>=0;D--)g[M].push(i[D][M])}return g}const x={};function C(i){if(i.key==="Escape"){n();return}if((s==="waiting"||s==="gameover")&&i.key==="Enter"&&(s="playing",h=0,w=1,$=0,v=45,O(),I()),s!=="playing"||!r){x[i.key]=!0;return}if(i.key==="ArrowLeft")_(r.shape,r.x-1,r.y)||r.x--;else if(i.key==="ArrowRight")_(r.shape,r.x+1,r.y)||r.x++;else if(i.key==="ArrowDown")_(r.shape,r.x,r.y+1)?q():r.y++;else if(i.key==="ArrowUp"||i.key===" "){const d=k(r.shape);_(d,r.x,r.y)?_(d,r.x-1,r.y)?_(d,r.x+1,r.y)||(r.shape=d,r.x++):(r.shape=d,r.x--):r.shape=d}x[i.key]=!0,["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," "].includes(i.key)&&i.preventDefault()}function z(i){x[i.key]=!1}window.addEventListener("keydown",C),window.addEventListener("keyup",z);function K(i){s!=="playing"||!r||(E+=i,E>=v&&(E=0,_(r.shape,r.x,r.y+1)?q():r.y++))}function W(){if(!t)return;t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height);const i=e.width<520,d=i?20:200,L=i?96:60,g=Math.max(8,Math.min(Math.floor((e.height-L)/o),Math.floor((e.width-d)/l))),M=g*l,D=g*o,V=Math.floor((e.width-M)/2),ie=Math.max(i?68:36,Math.floor((e.height-D)/2)+10);if(s==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("TETRIS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Up/Space = Rotate",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+T,e.width/2,e.height/2+78),t.textAlign="left";return}t.strokeStyle="#333",t.lineWidth=2,t.strokeRect(V-1,ie-1,M+2,D+2);for(let B=0;B<o;B++)for(let F=0;F<l;F++){const Z=V+F*g,Q=ie+B*g;R[B][F]?(t.fillStyle=R[B][F],t.fillRect(Z+1,Q+1,g-2,g-2)):(t.fillStyle="#111",t.fillRect(Z,Q,g,g),t.strokeStyle="#1a1a1a",t.lineWidth=.5,t.strokeRect(Z,Q,g,g))}if(r){t.fillStyle=r.color;for(let B=0;B<r.shape.length;B++)for(let F=0;F<r.shape[B].length;F++){if(!r.shape[B][F])continue;const Z=V+(r.x+F)*g,Q=ie+(r.y+B)*g;t.fillRect(Z+1,Q+1,g-2,g-2)}}t.fillStyle="#00ff41",t.font=i?"18px VT323, monospace":"22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+h,10,24),t.fillText("LEVEL: "+w,10,i?46:50),t.textAlign="center",t.fillText("HIGH: "+T,e.width/2,24),t.textAlign="right",t.fillText("LINES: "+$,e.width-10,24),t.textAlign="left",s==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+h+"  Lines: "+$,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left")}function U(i){N===0&&(N=i);const d=Math.min((i-N)/H,3);N=i,K(d),W(),A=requestAnimationFrame(U)}return O(),A=requestAnimationFrame(U),function(){cancelAnimationFrame(A),window.removeEventListener("keydown",C),window.removeEventListener("keyup",z),b.disconnect()}}function tt(e,n){const t=e.getContext("2d");if(!t)return()=>{};const l=12,o=80,a=10,s=5,h=4,w=3.5,$=7,T=1e3/60;let A="waiting",N=0,H=0,R=0,r=0,E=0,v=0,y=0,b=0,O=h,I=h*.5;function _(){const i=e.width||e.clientWidth||1,d=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const L=e.width/i,g=e.height/d;E=Math.max(0,Math.min(e.height-o,E*g)),v=Math.max(0,Math.min(e.height-o,v*g)),y=Math.max(0,Math.min(e.width-a,y*L)),b=Math.max(0,Math.min(e.height-a,b*g)),A!=="playing"&&(E=e.height/2-o/2,v=e.height/2-o/2,y=e.width/2,b=e.height/2)}_();const q=new ResizeObserver(_);q.observe(e);function u(){y=e.width/2,b=e.height/2,O=h*(Math.random()>.5?1:-1),I=(Math.random()*2-1)*h*.5}const k={};function x(i){if(i.key==="Escape"){n();return}(A==="waiting"||A==="gameover")&&i.key==="Enter"&&(A="playing",N=0,H=0,E=e.height/2-o/2,v=e.height/2-o/2,u()),k[i.key]=!0,(i.key==="ArrowUp"||i.key==="ArrowDown")&&i.preventDefault()}function C(i){k[i.key]=!1}window.addEventListener("keydown",x),window.addEventListener("keyup",C);function z(i){if(A!=="playing")return;const d=e.getBoundingClientRect(),L=i.clientY-d.top;E=Math.max(0,Math.min(e.height-o,L-o/2)),i.preventDefault()}e.addEventListener("pointerdown",z),e.addEventListener("pointermove",z);function K(i){if(A!=="playing")return;k.ArrowUp&&E>0&&(E-=s*i),k.ArrowDown&&E<e.height-o&&(E+=s*i),E=Math.max(0,Math.min(e.height-o,E));const d=v+o/2;O>0?d<b-10?v+=w*i:d>b+10&&(v-=w*i):d<e.height/2-5?v+=w*.5*i:d>e.height/2+5&&(v-=w*.5*i),v=Math.max(0,Math.min(e.height-o,v)),y+=O*i,b+=I*i,b<=0&&(b=0,I=Math.abs(I)),b+a>=e.height&&(b=e.height-a,I=-Math.abs(I));const L=20;y<=L+l&&y+a>=L&&b+a>=E&&b<=E+o&&O<0&&(O=Math.abs(O)*1.05,I=((b+a/2-E)/o-.5)*h*2,y=L+l);const g=e.width-20-l;y+a>=g&&y<=g+l&&b+a>=v&&b<=v+o&&O>0&&(O=-Math.abs(O)*1.05,I=((b+a/2-v)/o-.5)*h*2,y=g-a),y<0&&(H++,H>=$?A="gameover":u()),y>e.width&&(N++,N>=$?A="gameover":u())}function W(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),A==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("PONG",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrow Up/Down or Drag = Move",e.width/2,e.height/2+50),t.fillText("First to "+$+" wins | ESC = Exit",e.width/2,e.height/2+78),t.textAlign="left";return}if(t.setLineDash([8,8]),t.strokeStyle="#333",t.lineWidth=2,t.beginPath(),t.moveTo(e.width/2,0),t.lineTo(e.width/2,e.height),t.stroke(),t.setLineDash([]),t.fillStyle="#00ff41",t.fillRect(20,E,l,o),t.fillStyle="#ff6b6b",t.fillRect(e.width-20-l,v,l,o),t.fillStyle="#ffbd2e",t.fillRect(y,b,a,a),t.fillStyle="#00ff41",t.font="48px VT323, monospace",t.textAlign="center",t.fillText(String(N),e.width/2-60,55),t.fillStyle="#ff6b6b",t.fillText(String(H),e.width/2+60,55),t.textAlign="left",t.font="18px VT323, monospace",t.fillStyle="#888",t.textAlign="left",t.fillText("YOU",20,e.height-15),t.textAlign="right",t.fillText("CPU",e.width-20,e.height-15),t.textAlign="left",A==="gameover"){t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height);const i=N>=$;t.fillStyle=i?"#00ff41":"#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText(i?"YOU WIN!":"CPU WINS",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText(N+" - "+H,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"}}}function U(i){r===0&&(r=i);const d=Math.min((i-r)/T,3);r=i,K(d),W(),R=requestAnimationFrame(U)}return R=requestAnimationFrame(U),function(){cancelAnimationFrame(R),window.removeEventListener("keydown",x),window.removeEventListener("keyup",C),e.removeEventListener("pointerdown",z),e.removeEventListener("pointermove",z),q.disconnect()}}function nt(e,n){const t=e.getContext("2d");if(!t)return()=>{};const l=24,o=.34,a=-6.6,s=58,h=168,w=2.15,$=126,T=46,A=1e3/60,N=100;let H="waiting",R=0,r=parseInt(localStorage.getItem("flappyBirdHigh")||"0",10),E=0,v=0,y=0,b=0,O=$,I=0,_=0,q=0,u=null,k=null,x=[];function C(){const p=e.width||e.clientWidth||1,m=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const G=e.width/p,te=e.height/m;for(const P of x)P.x*=G,P.gapY=U(P.gapY*te);H!=="playing"?K():(I=Math.max(50,Math.min(e.width-30,I*G)),_=Math.max(l,Math.min(e.height-T-l,_*te)))}C();const z=new ResizeObserver(C);z.observe(e);function K(){I=Math.max(80,Math.floor(e.width*.28)),_=Math.floor(e.height*.45),q=0}function W(){const p=Math.max(160,e.height-T);return Math.max(86,Math.min(h,p-112))}function U(p){const m=W(),G=56,te=Math.max(G,e.height-T-m-48);return Math.max(G,Math.min(te,p))}function i(){H="playing",R=0,b=0,y=0,O=$,x=[],K(),d(),D()}function d(){const m=Math.max(68,e.height-T-W()-48),G=56+Math.random()*(m-56);x.push({x:e.width+20,gapY:G,passed:!1})}function L(){if(g(),H==="waiting"||H==="gameover"){i();return}H==="playing"&&(q=a,V())}function g(){if(u){u.state==="suspended"&&u.resume();return}const p=globalThis.AudioContext??globalThis.webkitAudioContext;u=new p,k=u.createGain(),k.gain.value=.16,k.connect(u.destination)}function M(p,m,G="square",te=.2){if(!u||!k)return;const P=u.currentTime,le=u.createOscillator(),re=u.createGain();le.type=G,le.frequency.setValueAtTime(p,P),re.gain.setValueAtTime(1e-4,P),re.gain.exponentialRampToValueAtTime(te,P+.01),re.gain.exponentialRampToValueAtTime(1e-4,P+m),le.connect(re),re.connect(k),le.start(P),le.stop(P+m+.02)}function D(){M(440,.08,"square",.14),u&&setTimeout(()=>M(660,.08,"square",.12),65)}function V(){M(720,.06,"square",.11)}function ie(){M(880,.07,"triangle",.14),setTimeout(()=>M(1175,.08,"triangle",.12),60)}function B(){if(!u||!k)return;const p=u.currentTime,m=u.createOscillator(),G=u.createGain();m.type="sawtooth",m.frequency.setValueAtTime(190,p),m.frequency.exponentialRampToValueAtTime(60,p+.22),G.gain.setValueAtTime(.22,p),G.gain.exponentialRampToValueAtTime(1e-4,p+.24),m.connect(G),G.connect(k),m.start(p),m.stop(p+.26)}function F(p){if(p.key==="Escape"){n();return}(p.key==="Enter"||p.key===" ")&&(L(),p.preventDefault())}function Z(){L()}window.addEventListener("keydown",F),e.addEventListener("pointerdown",Z);function Q(){if(H!=="playing")return;for(b++,q+=o,_+=q;b>=O;)d(),O+=$;for(const P of x)P.x-=w,!P.passed&&P.x+s<I&&(P.passed=!0,R++,ie(),R>r&&(r=R,localStorage.setItem("flappyBirdHigh",String(r))));x=x.filter(P=>P.x+s>-20);const p=I-l/2,m=I+l/2,G=_-l/2,te=_+l/2;if(G<=0||te>=e.height-T){H="gameover",B();return}for(const P of x){const le=m>P.x&&p<P.x+s,re=G<P.gapY,Ve=te>P.gapY+W();if(le&&(re||Ve)){H="gameover",B();return}}}function c(){const p=t.createLinearGradient(0,0,0,e.height);p.addColorStop(0,"#082238"),p.addColorStop(1,"#071014"),t.fillStyle=p,t.fillRect(0,0,e.width,e.height),t.fillStyle="rgba(0, 255, 65, 0.08)";for(let m=b*-.3%90;m<e.width;m+=90)t.fillRect(m,80,34,8),t.fillRect(m+8,72,18,8)}function f(){const p=W();for(const m of x)t.fillStyle="#00a33a",t.fillRect(m.x,0,s,m.gapY),t.fillRect(m.x,m.gapY+p,s,e.height-T-m.gapY-p),t.fillStyle="#00ff41",t.fillRect(m.x-4,m.gapY-14,s+8,14),t.fillRect(m.x-4,m.gapY+p,s+8,14),t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(m.x+s-12,0,6,m.gapY-14),t.fillRect(m.x+s-12,m.gapY+p+14,6,e.height-T)}function S(){const p=e.height-T;t.fillStyle="#332211",t.fillRect(0,p,e.width,T),t.fillStyle="#ffbd2e",t.fillRect(0,p,e.width,4),t.fillStyle="rgba(0, 255, 65, 0.35)";for(let m=b*-w%28;m<e.width;m+=28)t.fillRect(m,p+10,14,4)}function X(){const p=Math.max(-.45,Math.min(.7,q/12));t.save(),t.translate(I,_),t.rotate(p),t.fillStyle="#ffbd2e",t.fillRect(-12,-10,22,20),t.fillStyle="#ffe680",t.fillRect(-16,-2,14,10),t.fillStyle="#ff6b6b",t.fillRect(8,-2,12,6),t.fillStyle="#fff",t.fillRect(2,-8,6,6),t.fillStyle="#0a0a0a",t.fillRect(6,-6,2,2),t.restore()}function J(){t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+R,10,24),t.textAlign="center",t.fillText("HIGH: "+r,e.width/2,24),t.textAlign="right",t.fillText("SPACE = FLAP",e.width-10,24),t.textAlign="left"}function Ne(){t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("FLAPPY BIRD",e.width/2,e.height/2-70),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS SPACE OR CLICK TO START",e.width/2,e.height/2),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Space/Click = Flap",e.width/2,e.height/2+40),t.fillText("ESC = Exit | High Score: "+r,e.width/2,e.height/2+70),t.textAlign="left"}function qe(){t.fillStyle="rgba(0,0,0,0.68)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-30),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+R,e.width/2,e.height/2+10),t.fillStyle="#888",t.fillText("PRESS SPACE OR CLICK TO RESTART",e.width/2,e.height/2+50),t.textAlign="left"}function We(){c(),f(),S(),X(),J(),H==="waiting"&&Ne(),H==="gameover"&&qe()}function _e(p){v===0&&(v=p);const m=Math.min(p-v,N);for(v=p,y+=m;y>=A;)Q(),y-=A;We(),E=requestAnimationFrame(_e)}return K(),E=requestAnimationFrame(_e),function(){cancelAnimationFrame(E),window.removeEventListener("keydown",F),e.removeEventListener("pointerdown",Z),z.disconnect(),u==null||u.close(),u=null,k=null}}const it=Object.freeze({"--background":"#0b0f14","--background-deep":"#070a0e","--surface":"#111820","--foreground":"#b8c4d4","--bright":"#e7edf5","--muted":"#667485","--border":"#22303d","--cyan":"#5eead4","--blue":"#7aa2f7","--green":"#9ece6a","--yellow":"#e0af68","--purple":"#bb9af7","--red":"#f7768e"});function ot(){console.log(`%c    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|`,"color: #9ece6a; font-family: monospace; font-weight: bold; line-height: 1.2;"),console.log("%cPortfolio shell v%s %c· running on curiosity","color: #5eead4; font-family: monospace;",Ie,"color: #667485; font-family: monospace;"),console.log(`%c> reading the source instead of clicking around? my kind of visitor.
> say hi: %s
> code: %s`,"color: #b8c4d4; font-family: monospace;",Ce,me.github),console.log("%csteal the theme (dark CRT terminal palette):","color: #e0af68; font-family: monospace;"),console.log(Object.entries(it).map(([n,t])=>`${n}: ${t};`).join(`
`))}function ue(e){return e.replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[n]??n)}const at={title:"Iron Doctrine — building deterministic online multiplayer with a shared ECS engine",date:"2026-08-31",tags:["typescript","game-dev","multiplayer","ecs","pnpm"]},lt=`<p><strong>Iron Doctrine</strong> is a real-time strategy game I&#39;m building in a pnpm monorepo, with a deterministic ECS engine at its core and, as of this week, a working 1v1 online mode.</p>
<h2>The Architecture</h2>
<p>The repo is split into <code>packages/</code> and <code>apps/</code>:</p>
<ul>
<li><strong>packages/shared</strong> — the network protocol (<code>ClientMessage</code>/<code>ServerMessage</code>), shared types and constants (<code>SIM_HZ</code>, <code>DEFAULT_INPUT_DELAY</code>), and the <code>LockstepCoordinator</code></li>
<li><strong>packages/engine</strong> — a deterministic ECS simulation engine (entities/commands/systems), exposing <code>Simulation.step()</code>/<code>enqueue()</code>, with zero dependency on rendering or networking</li>
<li><strong>apps/client</strong> — React + Pixi.js, running entirely in the browser</li>
<li><strong>apps/server</strong> — a Node/<code>ws</code> WebSocket host that relays commands without simulating anything itself</li>
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
`,rt=Object.freeze(Object.defineProperty({__proto__:null,html:lt,meta:at},Symbol.toStringTag,{value:"Module"})),st={title:"I Built a CLI to Answer One Question: What Will This Change Break?",date:"2026-08-27",tags:["programming","devops","go","opensource"]},ct=`<p>We&#39;ve all been there.</p>
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
`,dt=Object.freeze(Object.defineProperty({__proto__:null,html:ct,meta:st},Symbol.toStringTag,{value:"Module"})),pt={title:"wir — What Is Running, a Port and Process Inspector Written in C",date:"2025-12-30",tags:["c","systems-programming","cli","opensource"]},ht=`<p>I recently released <strong>wir</strong> (What Is Running), a command-line tool written in C to inspect what&#39;s running on specific ports and get detailed process information. A project born from a practical need that turned into an opportunity to explore system programming in C.</p>
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
`,ut=Object.freeze(Object.defineProperty({__proto__:null,html:ht,meta:pt},Symbol.toStringTag,{value:"Module"})),mt=Object.assign({"/src/content/articles/iron-doctrine.md":rt,"/src/content/articles/serval-cli.md":dt,"/src/content/articles/wir-what-is-running.md":ut}),Ae=new Map,ee=Object.entries(mt).map(([e,n])=>{const t=e.split("/").pop().replace(/\.md$/,"");return Ae.set(t,n.html),{slug:t,title:n.meta.title??t,date:n.meta.date??"",tags:n.meta.tags??[]}}).sort((e,n)=>n.date.localeCompare(e.date));function pe(e){return Ae.has(e)?Ae.get(e):null}const Pe="alberto@portfolio:~",ft=Object.freeze(["help","about","skills","experience","projects","brew","lab","articles","contact","cv","games","play","ls","tree","neofetch","history","date","clear"]),gt=Object.freeze([["help","help"],["about","about"],["skills","skills"],["projects","projects"],["brew","brew"],["lab","lab"],["articles","articles"],["games","games"],["contact","contact"]]),ge=Object.freeze({space:"SPACE INVADERS",tetris:"TETRIS",pong:"PONG",flappy:"FLAPPY BIRD"}),yt=Object.freeze({space:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"FIRE",key:" "},{label:"→",key:"ArrowRight"}],tetris:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"ROT",key:"ArrowUp"},{label:"→",key:"ArrowRight"},{label:"↓",key:"ArrowDown"}],pong:[{label:"START",key:"Enter"},{label:"↑",key:"ArrowUp"},{label:"↓",key:"ArrowDown"}],flappy:[{label:"START",key:"Enter"},{label:"FLAP",key:" "}]}),$e=Object.freeze({space:Qe,tetris:et,pong:tt,flappy:nt}),Oe=Object.freeze(["        /\\_/\\","       ( o.o )","        > ^ <","       /|   |\\","      (_|   |_)","         W W","","      I LOVE CAT"]),Re="#%@*+=-<>/\\|",bt=new Set(["ArrowLeft","ArrowRight","ArrowDown"]),he=new Map,ce=[];let fe=0,de=null,ne=null;const ae=document.getElementById("app");function wt(){const e=gt.map(([n,t])=>`<button class="mobile-command" type="button" data-command="${t}">${n}</button>`).join("");return`<main class="terminal" aria-label="Alberto Barrago portfolio terminal">
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">Terminal command</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${Pe}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">Type help to list available commands. Use up and down arrows for command history.</p>
			<nav class="mobile-commands" aria-label="Quick terminal commands">${e}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`}function St(){return`<div class="ascii-banner accent" role="img" aria-label="ALBZ">    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|</div>
<div class="boot-copy"><span class="muted">Portfolio shell v${Ie}</span>
<span>${Ee} · Product Builder</span>

15+ years: from INPS distribution systems to products for global brands.
Technical leadership · Architecture · Web · Mobile · Cloud · AI

I turn ambiguity into reliable systems and useful products.
<span class="muted">Based in ${we}</span>
${ee.length?`
<span class="muted">Latest write-up:</span> <button class="inline-command command" data-command="cat ${ee[0].slug}.md">${ee[0].title} →</button>`:""}

Type <button class="inline-command command" data-command="help">help</button> to explore, or use the shortcuts below.</div>`}function xt(){return`<div class="output-title">Available commands</div>
<div class="command-list">${[["about","Short profile and current role"],["skills","Technical toolbox by area"],["experience","Professional timeline"],["projects","Selected open-source work"],["brew","Homebrew formulae I maintain"],["lab","Experimental work in progress"],["articles","Technical articles and notes"],["contact","Ways to get in touch"],["cv","Download my resume"],["games","List embedded retro games"],["play &lt;game&gt;","Launch space, tetris, pong, or flappy"],["ls / tree","Browse the portfolio filesystem"],["neofetch","Compact system profile"],["history / date / clear","Terminal utilities"]].map(([n,t])=>`<div><button class="inline-command command" data-command="${n.split(" ")[0]}">${n}</button><span class="muted">${t}</span></div>`).join("")}</div>
<div class="output-note">Tip: press <span class="key">Tab</span> to autocomplete and <span class="key">↑</span>/<span class="key">↓</span> for history.</div>`}function kt(){return`<div class="output-title">${Te}</div>
<div class="key-value"><span class="label">role</span><span>${Ee}</span>
<span class="label">location</span><span>${we}</span>
<span class="label">focus</span><span>Product engineering · architecture · technical leadership</span>
<span class="label">status</span><span class="green">Building useful things</span></div>
<p class="prose">${ze}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">view projects</button><button class="inline-command command" data-command="contact">contact me</button><button class="inline-command command" data-command="cv">download cv</button></div>`}function Tt(){return`<div class="output-title">Technical toolbox</div>
<div class="skills-list">${Object.entries(Ue).map(([e,n])=>`<div class="skill-row"><span class="label">${e}</span><span>${n.join("  ·  ")}</span></div>`).join("")}</div>`}function At(){return`<div class="output-title">Experience</div>
<div class="timeline">${Xe.map(e=>`<article class="timeline-item">
	<span class="timeline-period">${e.period}</span>
	<div><div><span class="green">${e.role}</span> <span class="muted">@ ${e.company}</span></div>
	<p>${e.highlight}</p></div>
</article>`).join("")}</div>`}function vt(){return`<div class="output-title">Selected projects</div>
<div class="project-list">${Je.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.language}</span></div>
	<p>${e.description}</p>
</article>`).join("")}</div>`}function Et(){return`<div class="output-title">Homebrew formulae</div>
<p class="prose">Command-line tools I've packaged and maintain via Homebrew taps.</p>
<div class="project-list">${Ke.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.tap}</span></div>
	<p>${e.description}</p>
	<p class="brew-install"><code>${e.install}</code></p>
</article>`).join("")}</div>`}function It(){return`<div class="output-title">Workbench Lab</div>
<p class="prose">Experimental products in active development. Scope and direction may evolve as ideas are validated.</p>
<article class="project-item lab-project">
	<div class="lab-project-meta"><span class="project-status">${se.status}</span><span class="project-language">${se.language}</span></div>
	<a class="terminal-link project-name" href="${se.url}" target="_blank" rel="noopener noreferrer">${se.name} ↗</a>
	<p>${se.description}</p>
	<p class="lab-project-focus"><span class="label">focus</span>${se.focus}</p>
</article>`}function Lt(){return ee.length===0?`<div class="output-title">Articles</div>
<p class="prose muted">No articles yet.</p>`:`<div class="output-title">Articles</div>
<div class="project-list">${[...ee].sort((n,t)=>n.date.localeCompare(t.date)).map(n=>`<article class="project-item">
	<div><button class="terminal-link project-name inline-command" data-command="cat ${n.slug}.md">${n.title} ↗</button><span class="project-language">${n.date}</span></div>
	<p class="muted">${n.tags.join("  ·  ")}</p>
</article>`).join("")}</div>`}const _t=200;function Mt(e){const n=e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),t=n?n.split(" ").length:0;return{words:t,chars:n.length,minutes:Math.max(1,Math.round(t/_t))}}function Rt(e){const n=ee.findIndex(h=>h.slug===e),t=ee[n],l=Mt(pe(e)??""),o=ee[n-1],a=ee[n+1],s=[o?`<button class="reader-nav-link" type="button" data-action="read-article" data-slug="${o.slug}">← ${o.title}</button>`:"<span></span>",a?`<button class="reader-nav-link reader-nav-next" type="button" data-action="read-article" data-slug="${a.slug}">${a.title} →</button>`:"<span></span>"].join("");return`<div class="article-reader" id="article-reader">
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
					<p class="reader-meta muted">${t.date}${t.tags.length?` · ${t.tags.join(" · ")}`:""}</p>
					<p class="reader-stats muted">${l.words.toLocaleString()} words · ${l.chars.toLocaleString()} chars · ~${l.minutes} min read</p>
					${pe(e)}
				</article>
				<nav class="reader-nav">${s}</nav>
			</div>
		</div>
	</div>`}function Ct(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function Pt(e){const n=e.querySelector("#reader-toc"),t=e.querySelectorAll(".prose h2, .prose h3");if(t.length===0)return;const l=new Set,o=Array.from(t).map(s=>{let h=Ct(s.textContent??"");for(;l.has(h)||!h;)h=`${h||"section"}-${l.size+1}`;return l.add(h),s.id=h,{id:h,text:s.textContent??"",level:s.tagName==="H2"?2:3}});n.innerHTML=`<span class="reader-toc-title">chapters</span><ol class="reader-toc-list">${o.map(s=>`<li class="reader-toc-item level-${s.level}"><button class="reader-toc-link" type="button" data-action="goto-heading" data-target="${s.id}">${s.text}</button></li>`).join("")}</ol>`,n.hidden=!1,e.classList.add("has-toc");const a=e.querySelector("#reader-toc-toggle");a&&(a.hidden=!1),$t(e,Array.from(t))}function $t(e,n){ne==null||ne.disconnect();const t=e.querySelector(".article-reader-body"),l=e.querySelectorAll(".reader-toc-link"),o=new Set,a=s=>{l.forEach(h=>h.classList.toggle("is-active",h.dataset.target===s))};ne=new IntersectionObserver(s=>{for(const w of s)w.isIntersecting?o.add(w.target.id):o.delete(w.target.id);const h=n.find(w=>o.has(w.id));h?a(h.id):t.scrollTop+t.clientHeight>=t.scrollHeight-4&&a(n[n.length-1].id)},{root:t,rootMargin:"0px 0px -72% 0px",threshold:0}),n.forEach(s=>ne.observe(s)),a(n[0].id)}function Se(e){var l;(l=document.getElementById("article-reader"))==null||l.remove(),j.blur();const n=document.createElement("div");n.innerHTML=Rt(e);const t=n.firstElementChild;ae.appendChild(t),t.scrollTop=0,Pt(t),window.location.pathname!==`/articles/${e}/`&&window.history.pushState(null,"",`/articles/${e}/`)}function He(){var e;ne==null||ne.disconnect(),ne=null,(e=document.getElementById("article-reader"))==null||e.remove(),window.location.pathname.startsWith("/articles/")&&window.history.pushState(null,"","/"),j==null||j.focus({preventScroll:!0})}function ve(e){return`${window.location.origin}/articles/${e}/`}function Ot(e){const n=e.textContent;e.textContent="copied ✓",e.disabled=!0,window.setTimeout(()=>{e.textContent=n,e.disabled=!1},1500)}async function De(e,n){try{await navigator.clipboard.writeText(ve(e)),Ot(n)}catch{window.prompt("Copy this link:",ve(e))}}async function Ht(e,n){const t=ee.find(o=>o.slug===e),l=ve(e);if(navigator.share){try{await navigator.share({title:(t==null?void 0:t.title)??e,url:l})}catch{}return}await De(e,n)}function xe(){return`<div class="output-title">Let's build something useful</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${me.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${me.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${me.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">location</span><span>${we}</span></div>`}function Dt(){return`<div class="output-title">/games</div>
<div class="game-list">${Object.entries(ge).map(([e,n])=>`<button class="game-command" data-command="play ${e}"><span>${n}</span><span class="muted">play ${e}</span></button>`).join("")}</div>
<div class="output-note">Games open fullscreen. Press <span class="key">Esc</span> to return.</div>`}function jt(){return`<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command directory" data-command="brew">brew/</button>
├── <button class="inline-command directory" data-command="lab">lab/</button>
├── <button class="inline-command directory" data-command="articles">articles/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`}function Bt(){return`<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">╭─────╮
│ A B │
│ L Z │
╰─────╯</div><div><span class="accent">${Te}</span>
<span class="muted">─${"─".repeat(Te.length-1)}</span>
<span><span class="label">Role:</span> ${Ee}</span>
<span><span class="label">Base:</span> ${we}</span>
<span><span class="label">Stack:</span> JavaScript, Swift, Java, Python</span>
<span><span class="label">Shell:</span> albz-sh ${Ie}</span>
<span><span class="label">Runtime:</span> Vanilla JS, zero dependencies</span>
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`}function Gt(){return'<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command directory" data-command="brew">brew/</button><button class="inline-command directory" data-command="lab">lab/</button><button class="inline-command directory" data-command="articles">articles/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>'}function Nt(e){return Oe.map(n=>n.split("").map(t=>t===" "||Math.random()>=e?t:Re[Math.floor(Math.random()*Re.length)]).join("")).join(`
`)}function qt(){const e=document.createElement("div");e.className="output-block ascii-banner accent",oe.appendChild(e);const n=6;let t=0;const l=window.setInterval(()=>{t+=1,e.textContent=t>=n?Oe.join(`
`):Nt(Math.max(0,.6-t*.12)),requestAnimationFrame(()=>{oe.scrollTop=oe.scrollHeight}),t>=n&&(window.clearInterval(l),Y('<span class="green">Purring in binary.</span>'))},90)}function Wt(e){const n=document.createElement("div");n.className="output-block command-echo";const t=document.createElement("span");t.className="prompt",t.innerHTML=`<span class="prompt-user">${Pe}</span><span class="prompt-symbol">$</span>`;const l=document.createElement("span");l.textContent=e,n.append(t,l),oe.appendChild(n)}function Y(e,n=""){const t=document.createElement("div");t.className=`output-block ${n}`.trim(),t.innerHTML=e,oe.appendChild(t),requestAnimationFrame(()=>{oe.scrollTop=oe.scrollHeight})}function je(e){const n=e.trim();if(!n)return;Wt(n),ce.at(-1)!==n&&ce.push(n),fe=ce.length;const[t,...l]=n.split(/\s+/),o=t.toLowerCase(),a=l.join(" ").toLowerCase();if(o==="clear"){oe.replaceChildren();return}if(["about","whoami","cat"].includes(o)){o!=="cat"||!a||a==="about.txt"?Y(kt()):a==="contact.vcf"?Y(xe()):a.endsWith(".md")&&pe(a.slice(0,-3))?Se(a.slice(0,-3)):Y(`<span class="red">cat: ${ue(a)}: No such file</span>`);return}const s={help:xt,skills:Tt,experience:At,projects:vt,brew:Et,lab:It,articles:Lt,contact:xe,games:Dt,ls:Gt,tree:jt,neofetch:Bt};if(s[o]){Y(s[o]());return}if(o==="cv"){Ze(),Y('<span class="green">Downloading albertobarrago_cv.pdf…</span>');return}if(o==="history"){Y(ce.map((h,w)=>`<div><span class="muted">${String(w+1).padStart(3," ")}</span>  ${ue(h)}</div>`).join(""));return}if(o==="date"){Y(new Intl.DateTimeFormat(void 0,{dateStyle:"full",timeStyle:"long"}).format(new Date));return}if(o==="play"){Vt(a)?(Y(`<span class="green">Launching ${ge[a]}…</span>`),Yt(a)):Y(`<span class="red">Unknown game${a?`: ${ue(a)}`:""}.</span> Try <button class="inline-command command" data-command="games">games</button>.`);return}if(o==="1337"){qt();return}if(o==="sudo"&&a==="hire alberto"){Y('<span class="green">Permission granted. Opening contact details…</span>'),Y(xe());return}Y(`<span class="red">command not found: ${ue(o)}</span><br>Type <button class="inline-command command" data-command="help">help</button> to see available commands.`)}function Vt(e){return Object.hasOwn($e,e)}function Ft(e){const n=yt[e].map(t=>`<button class="game-control-button" type="button" data-control-key="${t.key}">${t.label}</button>`).join("");return`<div class="game-fullscreen" id="game-overlay">
		<div class="game-scanlines" aria-hidden="true"></div>
		<div class="game-topbar"><span class="game-title">${ge[e]}</span><button class="game-exit" type="button" data-action="exit-game">ESC · CLOSE</button></div>
		<canvas class="game-canvas" aria-label="${ge[e]} game"></canvas>
		<div class="game-touch-controls">${n}</div>
	</div>`}function Yt(e){ye(),j.blur();const n=document.createElement("div");n.innerHTML=Ft(e);const t=n.firstElementChild;ae.appendChild(t);const l=t.querySelector(".game-canvas");requestAnimationFrame(()=>{t.isConnected&&(de=$e[e](l,ye))})}function ye(){var e;de==null||de(),de=null,Be(),(e=document.getElementById("game-overlay"))==null||e.remove(),j==null||j.focus({preventScroll:!0})}function be(e,n){window.dispatchEvent(new KeyboardEvent(n,{key:e,bubbles:!0,cancelable:!0}))}function zt(e){var a;const t=e.target.closest("[data-control-key]"),l=t==null?void 0:t.dataset.controlKey;if(!t||!l)return;e.preventDefault(),(a=t.setPointerCapture)==null||a.call(t,e.pointerId);const o={key:l,button:t};he.set(e.pointerId,o),t.classList.add("is-pressed"),be(l,"keydown"),bt.has(l)&&(o.delayId=window.setTimeout(()=>{o.intervalId=window.setInterval(()=>be(l,"keydown"),85)},220))}function Le(e){const n=he.get(e.pointerId);n&&(e.preventDefault(),n.delayId&&window.clearTimeout(n.delayId),n.intervalId&&window.clearInterval(n.intervalId),n.button.classList.remove("is-pressed"),he.delete(e.pointerId),be(n.key,"keyup"))}function Be(){for(const e of he.values())e.delayId&&window.clearTimeout(e.delayId),e.intervalId&&window.clearInterval(e.intervalId),e.button.classList.remove("is-pressed"),be(e.key,"keyup");he.clear()}ae.innerHTML=wt();const oe=document.getElementById("terminal-output"),Ut=document.getElementById("terminal-form"),j=document.getElementById("terminal-input");Y(St(),"welcome-block");ot();function Ge(){var e,n;return((e=window.location.pathname.match(/^\/articles\/([^/]+)\/?$/))==null?void 0:e[1])??((n=window.location.hash.match(/^#article\/(.+)$/))==null?void 0:n[1])}const ke=Ge();ke&&pe(ke)&&Se(ke);window.addEventListener("popstate",()=>{var n;const e=Ge();e&&pe(e)?Se(e):(n=document.getElementById("article-reader"))==null||n.remove()});Ut.addEventListener("submit",e=>{e.preventDefault();const n=j.value;j.value="",je(n)});j.addEventListener("keydown",e=>{if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const n=e.key==="ArrowUp"?-1:1;fe=Math.max(0,Math.min(ce.length,fe+n)),j.value=ce[fe]??"",requestAnimationFrame(()=>j.setSelectionRange(j.value.length,j.value.length));return}if(e.key==="Tab"){e.preventDefault();const n=j.value.trim().toLowerCase(),t=ft.filter(l=>l.startsWith(n));t.length===1?j.value=t[0]:t.length>1&&Y(t.map(l=>`<span class="command">${l}</span>`).join("  "))}});ae.addEventListener("click",e=>{var w,$,T;const n=e.target,t=document.querySelector("#reader-toc.is-open");t&&!n.closest("#reader-toc")&&!n.closest('[data-action="toggle-toc"]')&&t.classList.remove("is-open");const l=n.closest('[data-action="read-article"]');if(l!=null&&l.dataset.slug){Se(l.dataset.slug);return}if(n.closest('[data-action="close-reader"]')){He();return}const o=n.closest('[data-action="share-article"]');if(o!=null&&o.dataset.slug){Ht(o.dataset.slug,o);return}const a=n.closest('[data-action="copy-article-link"]');if(a!=null&&a.dataset.slug){De(a.dataset.slug,a);return}if(n.closest('[data-action="toggle-toc"]')){(w=document.getElementById("reader-toc"))==null||w.classList.toggle("is-open");return}const s=n.closest('[data-action="goto-heading"]');if(s!=null&&s.dataset.target){const A=document.getElementById("article-reader");($=document.getElementById(s.dataset.target))==null||$.scrollIntoView({behavior:"smooth",block:"start"}),(T=A==null?void 0:A.querySelector("#reader-toc"))==null||T.classList.remove("is-open");return}const h=n.closest("[data-command]");h!=null&&h.dataset.command&&je(h.dataset.command),n.closest('[data-action="exit-game"]')&&ye(),!n.closest("a")&&!document.getElementById("game-overlay")&&!document.getElementById("article-reader")&&j.focus({preventScroll:!0})});ae.addEventListener("pointerdown",zt);ae.addEventListener("pointerup",Le);ae.addEventListener("pointercancel",Le);ae.addEventListener("lostpointercapture",Le);window.addEventListener("blur",Be);document.addEventListener("keydown",e=>{e.key==="Escape"&&document.getElementById("game-overlay")&&ye(),e.key==="Escape"&&document.getElementById("article-reader")&&He()});
