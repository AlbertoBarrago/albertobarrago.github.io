(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();const Ye="4.6.0",Fe={version:Ye},Te="Alberto Barrago",Ee="Senior Software Engineer",ye="Cagliari, Italy",Ce="albertobarrago@gmail.com",Re="albertobarrago_cv.pdf",We="Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems.",ze={frontend:["Angular","React","Vanilla JS"],backend:["Node.js","Fastify","FastAPI","Flask","Spring Boot"],apple:["Swift","SwiftUI","SwiftData","AppKit","iOS/macOS"],database:["MongoDB","Oracle","MySQL"],devops:["Docker","GitHub/GitLab CI","Azure DevOps"],tools:["Git","Neovim","tmux","Zed"],ai:["LLM Integration","Prompt Engineering","AI Agents"]},Ue=[{role:"Tech Leader / Senior Software Engineer",company:"C22 Consulting",period:"2026 - Present",highlight:"Leading React, iOS, and Java architecture across active projects; mentoring developers and evangelizing AI workflows with Claude and MCP"},{role:"Senior Software Engineer / DevOps",company:"Minsait/Indra",period:"2023 - 2025",highlight:"Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time"},{role:"Senior Software Developer",company:"Softfobia",period:"2022 - 2023",highlight:"Led full-stack teams, 20% load time improvement"},{role:"Software Developer",company:"Accenture",period:"2021 - 2022",highlight:"Kafka microservices architecture, Angular 12 apps"},{role:"Software Developer",company:"Sinossi",period:"2016 - 2021",highlight:"Mobile apps for Deutsche Bank, TIM (Fortune 500)"}],re={name:"Markasso",description:"A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas.",url:"https://markasso.it",language:"TypeScript (0 deps)",status:"Experimental · Work in progress",focus:"Validating a direct, distraction-free interaction model for visual thinking."},Xe=[{name:"RSS-Reader",description:"A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat.",url:"https://github.com/AlbertoBarrago/RSS-Reader",language:"Swift"},{name:"Timelog",description:"A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData.",url:"https://github.com/AlbertoBarrago/Timelog",language:"Swift"},{name:"DockDock",description:"A native macOS utility that shows live window previews when you hover over Dock icons.",url:"https://github.com/AlbertoBarrago/DockDock",language:"Swift"},{name:"Sgommello",description:"Break reminder for macOS: a monster breaks your screen until you take a real break.",url:"https://github.com/AlbertoBarrago/Sgommello",language:"Swift"}],Je=[{name:"wir",description:"What Is Running - Port and Process Inspector.",install:"brew install AlbertoBarrago/tap/wir",url:"https://github.com/AlbertoBarrago/wir",tap:"AlbertoBarrago/tap"},{name:"jm",description:"Switch between JDKs registered with macOS. Primary shell command: jm.",install:"brew install AlbertoBarrago/tap/jm",url:"https://github.com/AlbertoBarrago/jm",tap:"AlbertoBarrago/tap"},{name:"serval",description:"Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval.",install:"brew install AlbertoBarrago/tap/serval",url:"https://github.com/AlbertoBarrago/serval",tap:"AlbertoBarrago/tap"}],fe={github:"https://github.com/AlbertoBarrago",email:`mailto:${Ce}`,bsky:"https://bsky.app/profile/albzoser.bsky.social"},ve=Fe.version,Ke=()=>{const e=document.createElement("a");e.href=Re,e.download=Re,e.dispatchEvent(new MouseEvent("click"))};function Ze(e,n){const t=e.getContext("2d");if(!t)return()=>{};const a=8,o=5,l=32,s=24,g=12,x=40,P=20,A=3,k=12,q=5,H=7,_=4,r=.003,v=["#ff6b6b","#ff6b6b","#ffbd2e","#ffbd2e","#00ff41"],E=1e3/60;let y="waiting",b=0,O=3,I=parseInt(localStorage.getItem("spaceInvadersHigh")||"0",10),R=0,N=0,f=0,T=[],S=[],C=[];function z(){const c=e.width||e.clientWidth||1,u=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const w=e.width/c,X=e.height/u;f=Math.max(0,Math.min(e.width-x,f*w));for(const J of T)J.x*=w,J.y*=X;for(const J of S)J.x*=w,J.y*=X;for(const J of C)J.x*=w,J.y*=X;y!=="playing"&&(f=e.width/2-x/2)}z();const K=new ResizeObserver(z);K.observe(e);const V=()=>e.height-40;let U=1,i=0,p=40;const L=10,m=20;function M(){T=[];const c=a*(l+g)-g,u=(e.width-c)/2;for(let w=0;w<o;w++)for(let X=0;X<a;X++)T.push({x:u+X*(l+g),y:60+w*(s+g),row:w,alive:!0});U=1,i=0,p=40}let B=0;const Y={};function ne(c){if(c.key==="Escape"){n();return}(y==="waiting"||y==="gameover"||y==="won")&&c.key==="Enter"&&(y="playing",b=0,O=3,S=[],C=[],f=e.width/2-x/2,M()),Y[c.key]=!0,(c.key===" "||c.key==="ArrowLeft"||c.key==="ArrowRight")&&c.preventDefault()}function j(c){Y[c.key]=!1}window.addEventListener("keydown",ne),window.addEventListener("keyup",j);function F(c){if(y==="playing"){Y.ArrowLeft&&f>0&&(f-=q*c),Y.ArrowRight&&f<e.width-x&&(f+=q*c),f=Math.max(0,Math.min(e.width-x,f)),B>0&&(B=Math.max(0,B-c)),Y[" "]&&B===0&&(S.push({x:f+x/2-A/2,y:V()-k}),B=15);for(let u=S.length-1;u>=0;u--){if(S[u].y-=H*c,S[u].y<0){S.splice(u,1);continue}for(const w of T)if(w.alive&&S[u]&&S[u].x<w.x+l&&S[u].x+A>w.x&&S[u].y<w.y+s&&S[u].y+k>w.y){w.alive=!1,S.splice(u,1),b+=10,b>I&&(I=b,localStorage.setItem("spaceInvadersHigh",String(I)));const X=T.filter(J=>J.alive).length;X>0&&(p=Math.max(4,Math.floor(40*(X/(o*a)))));break}}if(T.every(u=>!u.alive)){y="won";return}if(i+=c,i>=p){i=0;let u=!1;for(const w of T)if(w.alive&&(U>0&&w.x+l+L>e.width-10||U<0&&w.x-L<10)){u=!0;break}if(u){U*=-1;for(const w of T)w.y+=m}else for(const w of T)w.x+=L*U;for(const w of T)if(w.alive&&w.y+s>=V()){y="gameover";return}}for(const u of T.filter(w=>w.alive))Math.random()<r*c&&C.push({x:u.x+l/2-A/2,y:u.y+s});for(let u=C.length-1;u>=0;u--){if(C[u].y+=_*c,C[u].y>e.height){C.splice(u,1);continue}if(C[u].x<f+x&&C[u].x+A>f&&C[u].y<V()+P&&C[u].y+k>V()&&(C.splice(u,1),O--,O<=0)){y="gameover";return}}}}function Z(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),y==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("SPACE INVADERS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Fire = Shoot",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+I,e.width/2,e.height/2+78),t.textAlign="left";return}t.fillStyle="#00bfff",t.beginPath(),t.moveTo(f+x/2,V()),t.lineTo(f,V()+P),t.lineTo(f+x,V()+P),t.closePath(),t.fill();for(const c of T)c.alive&&(t.fillStyle=v[c.row],t.fillRect(c.x+4,c.y,l-8,s-4),t.fillRect(c.x+2,c.y+4,6,4),t.fillRect(c.x+l-8,c.y+4,6,4),t.fillRect(c.x+6,c.y-4,3,6),t.fillRect(c.x+l-9,c.y-4,3,6),t.fillRect(c.x,c.y+s-6,4,6),t.fillRect(c.x+l-4,c.y+s-6,4,6));t.fillStyle="#00ff41";for(const c of S)t.fillRect(c.x,c.y,A,k);t.fillStyle="#ff6b6b";for(const c of C)t.fillRect(c.x,c.y,A,k);t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+b,10,24),t.textAlign="center",t.fillText("HIGH: "+I,e.width/2,24),t.textAlign="right",t.fillText("LIVES: "+"♥".repeat(O),e.width-10,24),t.textAlign="left",y==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+b,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"),y==="won"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("YOU WIN!",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+b,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO PLAY AGAIN",e.width/2,e.height/2+60),t.textAlign="left")}}function Q(c){N===0&&(N=c);const u=Math.min((c-N)/E,3);N=c,F(u),Z(),R=requestAnimationFrame(Q)}return M(),R=requestAnimationFrame(Q),function(){cancelAnimationFrame(R),window.removeEventListener("keydown",ne),window.removeEventListener("keyup",j),K.disconnect()}}function Qe(e,n){const t=e.getContext("2d");if(!t)return()=>{};const a=10,o=20,l=[{shape:[[1,1,1,1]],color:"#00bfff"},{shape:[[1,1],[1,1]],color:"#ffbd2e"},{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},{shape:[[1,0,0],[1,1,1]],color:"#ff6b6b"},{shape:[[0,0,1],[1,1,1]],color:"#00ff41"},{shape:[[0,1,1],[1,1,0]],color:"#ff6b6b"},{shape:[[1,1,0],[0,1,1]],color:"#00ff41"}];let s="waiting",g=0,x=1,P=0,A=parseInt(localStorage.getItem("tetrisHigh")||"0",10),k=0,q=0;const H=1e3/60;let _=[],r=null,v=0,E=45;function y(){e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight)}y();const b=new ResizeObserver(y);b.observe(e);function O(){_=[];for(let i=0;i<o;i++)_.push(new Array(a).fill(null))}function I(){const i=l[Math.floor(Math.random()*l.length)];r={shape:i.shape.map(p=>[...p]),color:i.color,x:Math.floor((a-i.shape[0].length)/2),y:0},R(r.shape,r.x,r.y)&&(s="gameover",r=null)}function R(i,p,L){for(let m=0;m<i.length;m++)for(let M=0;M<i[m].length;M++){if(!i[m][M])continue;const B=p+M,Y=L+m;if(B<0||B>=a||Y>=o||Y>=0&&_[Y][B])return!0}return!1}function N(){if(r){for(let i=0;i<r.shape.length;i++)for(let p=0;p<r.shape[i].length;p++){if(!r.shape[i][p])continue;const L=r.y+i;L>=0&&(_[L][r.x+p]=r.color)}f(),I()}}function f(){let i=0;for(let p=o-1;p>=0;p--)_[p].every(L=>L!==null)&&(_.splice(p,1),_.unshift(new Array(a).fill(null)),i++,p++);i>0&&(g+=([0,100,300,500,800][i]||800)*x,P+=i,x=Math.floor(P/10)+1,E=Math.max(5,45-(x-1)*4),g>A&&(A=g,localStorage.setItem("tetrisHigh",String(A))))}function T(i){const p=i.length,L=i[0].length,m=[];for(let M=0;M<L;M++){m.push([]);for(let B=p-1;B>=0;B--)m[M].push(i[B][M])}return m}const S={};function C(i){if(i.key==="Escape"){n();return}if((s==="waiting"||s==="gameover")&&i.key==="Enter"&&(s="playing",g=0,x=1,P=0,E=45,O(),I()),s!=="playing"||!r){S[i.key]=!0;return}if(i.key==="ArrowLeft")R(r.shape,r.x-1,r.y)||r.x--;else if(i.key==="ArrowRight")R(r.shape,r.x+1,r.y)||r.x++;else if(i.key==="ArrowDown")R(r.shape,r.x,r.y+1)?N():r.y++;else if(i.key==="ArrowUp"||i.key===" "){const p=T(r.shape);R(p,r.x,r.y)?R(p,r.x-1,r.y)?R(p,r.x+1,r.y)||(r.shape=p,r.x++):(r.shape=p,r.x--):r.shape=p}S[i.key]=!0,["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," "].includes(i.key)&&i.preventDefault()}function z(i){S[i.key]=!1}window.addEventListener("keydown",C),window.addEventListener("keyup",z);function K(i){s!=="playing"||!r||(v+=i,v>=E&&(v=0,R(r.shape,r.x,r.y+1)?N():r.y++))}function V(){if(!t)return;t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height);const i=e.width<520,p=i?20:200,L=i?96:60,m=Math.max(8,Math.min(Math.floor((e.height-L)/o),Math.floor((e.width-p)/a))),M=m*a,B=m*o,Y=Math.floor((e.width-M)/2),ne=Math.max(i?68:36,Math.floor((e.height-B)/2)+10);if(s==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("TETRIS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Up/Space = Rotate",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+A,e.width/2,e.height/2+78),t.textAlign="left";return}t.strokeStyle="#333",t.lineWidth=2,t.strokeRect(Y-1,ne-1,M+2,B+2);for(let j=0;j<o;j++)for(let F=0;F<a;F++){const Z=Y+F*m,Q=ne+j*m;_[j][F]?(t.fillStyle=_[j][F],t.fillRect(Z+1,Q+1,m-2,m-2)):(t.fillStyle="#111",t.fillRect(Z,Q,m,m),t.strokeStyle="#1a1a1a",t.lineWidth=.5,t.strokeRect(Z,Q,m,m))}if(r){t.fillStyle=r.color;for(let j=0;j<r.shape.length;j++)for(let F=0;F<r.shape[j].length;F++){if(!r.shape[j][F])continue;const Z=Y+(r.x+F)*m,Q=ne+(r.y+j)*m;t.fillRect(Z+1,Q+1,m-2,m-2)}}t.fillStyle="#00ff41",t.font=i?"18px VT323, monospace":"22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+g,10,24),t.fillText("LEVEL: "+x,10,i?46:50),t.textAlign="center",t.fillText("HIGH: "+A,e.width/2,24),t.textAlign="right",t.fillText("LINES: "+P,e.width-10,24),t.textAlign="left",s==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+g+"  Lines: "+P,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left")}function U(i){q===0&&(q=i);const p=Math.min((i-q)/H,3);q=i,K(p),V(),k=requestAnimationFrame(U)}return O(),k=requestAnimationFrame(U),function(){cancelAnimationFrame(k),window.removeEventListener("keydown",C),window.removeEventListener("keyup",z),b.disconnect()}}function et(e,n){const t=e.getContext("2d");if(!t)return()=>{};const a=12,o=80,l=10,s=5,g=4,x=3.5,P=7,A=1e3/60;let k="waiting",q=0,H=0,_=0,r=0,v=0,E=0,y=0,b=0,O=g,I=g*.5;function R(){const i=e.width||e.clientWidth||1,p=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const L=e.width/i,m=e.height/p;v=Math.max(0,Math.min(e.height-o,v*m)),E=Math.max(0,Math.min(e.height-o,E*m)),y=Math.max(0,Math.min(e.width-l,y*L)),b=Math.max(0,Math.min(e.height-l,b*m)),k!=="playing"&&(v=e.height/2-o/2,E=e.height/2-o/2,y=e.width/2,b=e.height/2)}R();const N=new ResizeObserver(R);N.observe(e);function f(){y=e.width/2,b=e.height/2,O=g*(Math.random()>.5?1:-1),I=(Math.random()*2-1)*g*.5}const T={};function S(i){if(i.key==="Escape"){n();return}(k==="waiting"||k==="gameover")&&i.key==="Enter"&&(k="playing",q=0,H=0,v=e.height/2-o/2,E=e.height/2-o/2,f()),T[i.key]=!0,(i.key==="ArrowUp"||i.key==="ArrowDown")&&i.preventDefault()}function C(i){T[i.key]=!1}window.addEventListener("keydown",S),window.addEventListener("keyup",C);function z(i){if(k!=="playing")return;const p=e.getBoundingClientRect(),L=i.clientY-p.top;v=Math.max(0,Math.min(e.height-o,L-o/2)),i.preventDefault()}e.addEventListener("pointerdown",z),e.addEventListener("pointermove",z);function K(i){if(k!=="playing")return;T.ArrowUp&&v>0&&(v-=s*i),T.ArrowDown&&v<e.height-o&&(v+=s*i),v=Math.max(0,Math.min(e.height-o,v));const p=E+o/2;O>0?p<b-10?E+=x*i:p>b+10&&(E-=x*i):p<e.height/2-5?E+=x*.5*i:p>e.height/2+5&&(E-=x*.5*i),E=Math.max(0,Math.min(e.height-o,E)),y+=O*i,b+=I*i,b<=0&&(b=0,I=Math.abs(I)),b+l>=e.height&&(b=e.height-l,I=-Math.abs(I));const L=20;y<=L+a&&y+l>=L&&b+l>=v&&b<=v+o&&O<0&&(O=Math.abs(O)*1.05,I=((b+l/2-v)/o-.5)*g*2,y=L+a);const m=e.width-20-a;y+l>=m&&y<=m+a&&b+l>=E&&b<=E+o&&O>0&&(O=-Math.abs(O)*1.05,I=((b+l/2-E)/o-.5)*g*2,y=m-l),y<0&&(H++,H>=P?k="gameover":f()),y>e.width&&(q++,q>=P?k="gameover":f())}function V(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),k==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("PONG",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrow Up/Down or Drag = Move",e.width/2,e.height/2+50),t.fillText("First to "+P+" wins | ESC = Exit",e.width/2,e.height/2+78),t.textAlign="left";return}if(t.setLineDash([8,8]),t.strokeStyle="#333",t.lineWidth=2,t.beginPath(),t.moveTo(e.width/2,0),t.lineTo(e.width/2,e.height),t.stroke(),t.setLineDash([]),t.fillStyle="#00ff41",t.fillRect(20,v,a,o),t.fillStyle="#ff6b6b",t.fillRect(e.width-20-a,E,a,o),t.fillStyle="#ffbd2e",t.fillRect(y,b,l,l),t.fillStyle="#00ff41",t.font="48px VT323, monospace",t.textAlign="center",t.fillText(String(q),e.width/2-60,55),t.fillStyle="#ff6b6b",t.fillText(String(H),e.width/2+60,55),t.textAlign="left",t.font="18px VT323, monospace",t.fillStyle="#888",t.textAlign="left",t.fillText("YOU",20,e.height-15),t.textAlign="right",t.fillText("CPU",e.width-20,e.height-15),t.textAlign="left",k==="gameover"){t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height);const i=q>=P;t.fillStyle=i?"#00ff41":"#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText(i?"YOU WIN!":"CPU WINS",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText(q+" - "+H,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"}}}function U(i){r===0&&(r=i);const p=Math.min((i-r)/A,3);r=i,K(p),V(),_=requestAnimationFrame(U)}return _=requestAnimationFrame(U),function(){cancelAnimationFrame(_),window.removeEventListener("keydown",S),window.removeEventListener("keyup",C),e.removeEventListener("pointerdown",z),e.removeEventListener("pointermove",z),N.disconnect()}}function tt(e,n){const t=e.getContext("2d");if(!t)return()=>{};const a=24,o=.34,l=-6.6,s=58,g=168,x=2.15,P=126,A=46,k=1e3/60,q=100;let H="waiting",_=0,r=parseInt(localStorage.getItem("flappyBirdHigh")||"0",10),v=0,E=0,y=0,b=0,O=P,I=0,R=0,N=0,f=null,T=null,S=[];function C(){const d=e.width||e.clientWidth||1,h=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const G=e.width/d,te=e.height/h;for(const $ of S)$.x*=G,$.gapY=U($.gapY*te);H!=="playing"?K():(I=Math.max(50,Math.min(e.width-30,I*G)),R=Math.max(a,Math.min(e.height-A-a,R*te)))}C();const z=new ResizeObserver(C);z.observe(e);function K(){I=Math.max(80,Math.floor(e.width*.28)),R=Math.floor(e.height*.45),N=0}function V(){const d=Math.max(160,e.height-A);return Math.max(86,Math.min(g,d-112))}function U(d){const h=V(),G=56,te=Math.max(G,e.height-A-h-48);return Math.max(G,Math.min(te,d))}function i(){H="playing",_=0,b=0,y=0,O=P,S=[],K(),p(),B()}function p(){const h=Math.max(68,e.height-A-V()-48),G=56+Math.random()*(h-56);S.push({x:e.width+20,gapY:G,passed:!1})}function L(){if(m(),H==="waiting"||H==="gameover"){i();return}H==="playing"&&(N=l,Y())}function m(){if(f){f.state==="suspended"&&f.resume();return}const d=globalThis.AudioContext??globalThis.webkitAudioContext;f=new d,T=f.createGain(),T.gain.value=.16,T.connect(f.destination)}function M(d,h,G="square",te=.2){if(!f||!T)return;const $=f.currentTime,le=f.createOscillator(),ae=f.createGain();le.type=G,le.frequency.setValueAtTime(d,$),ae.gain.setValueAtTime(1e-4,$),ae.gain.exponentialRampToValueAtTime(te,$+.01),ae.gain.exponentialRampToValueAtTime(1e-4,$+h),le.connect(ae),ae.connect(T),le.start($),le.stop($+h+.02)}function B(){M(440,.08,"square",.14),f&&setTimeout(()=>M(660,.08,"square",.12),65)}function Y(){M(720,.06,"square",.11)}function ne(){M(880,.07,"triangle",.14),setTimeout(()=>M(1175,.08,"triangle",.12),60)}function j(){if(!f||!T)return;const d=f.currentTime,h=f.createOscillator(),G=f.createGain();h.type="sawtooth",h.frequency.setValueAtTime(190,d),h.frequency.exponentialRampToValueAtTime(60,d+.22),G.gain.setValueAtTime(.22,d),G.gain.exponentialRampToValueAtTime(1e-4,d+.24),h.connect(G),G.connect(T),h.start(d),h.stop(d+.26)}function F(d){if(d.key==="Escape"){n();return}(d.key==="Enter"||d.key===" ")&&(L(),d.preventDefault())}function Z(){L()}window.addEventListener("keydown",F),e.addEventListener("pointerdown",Z);function Q(){if(H!=="playing")return;for(b++,N+=o,R+=N;b>=O;)p(),O+=P;for(const $ of S)$.x-=x,!$.passed&&$.x+s<I&&($.passed=!0,_++,ne(),_>r&&(r=_,localStorage.setItem("flappyBirdHigh",String(r))));S=S.filter($=>$.x+s>-20);const d=I-a/2,h=I+a/2,G=R-a/2,te=R+a/2;if(G<=0||te>=e.height-A){H="gameover",j();return}for(const $ of S){const le=h>$.x&&d<$.x+s,ae=G<$.gapY,Ve=te>$.gapY+V();if(le&&(ae||Ve)){H="gameover",j();return}}}function c(){const d=t.createLinearGradient(0,0,0,e.height);d.addColorStop(0,"#082238"),d.addColorStop(1,"#071014"),t.fillStyle=d,t.fillRect(0,0,e.width,e.height),t.fillStyle="rgba(0, 255, 65, 0.08)";for(let h=b*-.3%90;h<e.width;h+=90)t.fillRect(h,80,34,8),t.fillRect(h+8,72,18,8)}function u(){const d=V();for(const h of S)t.fillStyle="#00a33a",t.fillRect(h.x,0,s,h.gapY),t.fillRect(h.x,h.gapY+d,s,e.height-A-h.gapY-d),t.fillStyle="#00ff41",t.fillRect(h.x-4,h.gapY-14,s+8,14),t.fillRect(h.x-4,h.gapY+d,s+8,14),t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(h.x+s-12,0,6,h.gapY-14),t.fillRect(h.x+s-12,h.gapY+d+14,6,e.height-A)}function w(){const d=e.height-A;t.fillStyle="#332211",t.fillRect(0,d,e.width,A),t.fillStyle="#ffbd2e",t.fillRect(0,d,e.width,4),t.fillStyle="rgba(0, 255, 65, 0.35)";for(let h=b*-x%28;h<e.width;h+=28)t.fillRect(h,d+10,14,4)}function X(){const d=Math.max(-.45,Math.min(.7,N/12));t.save(),t.translate(I,R),t.rotate(d),t.fillStyle="#ffbd2e",t.fillRect(-12,-10,22,20),t.fillStyle="#ffe680",t.fillRect(-16,-2,14,10),t.fillStyle="#ff6b6b",t.fillRect(8,-2,12,6),t.fillStyle="#fff",t.fillRect(2,-8,6,6),t.fillStyle="#0a0a0a",t.fillRect(6,-6,2,2),t.restore()}function J(){t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+_,10,24),t.textAlign="center",t.fillText("HIGH: "+r,e.width/2,24),t.textAlign="right",t.fillText("SPACE = FLAP",e.width-10,24),t.textAlign="left"}function Ge(){t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("FLAPPY BIRD",e.width/2,e.height/2-70),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS SPACE OR CLICK TO START",e.width/2,e.height/2),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Space/Click = Flap",e.width/2,e.height/2+40),t.fillText("ESC = Exit | High Score: "+r,e.width/2,e.height/2+70),t.textAlign="left"}function qe(){t.fillStyle="rgba(0,0,0,0.68)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-30),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+_,e.width/2,e.height/2+10),t.fillStyle="#888",t.fillText("PRESS SPACE OR CLICK TO RESTART",e.width/2,e.height/2+50),t.textAlign="left"}function Ne(){c(),u(),w(),X(),J(),H==="waiting"&&Ge(),H==="gameover"&&qe()}function Le(d){E===0&&(E=d);const h=Math.min(d-E,q);for(E=d,y+=h;y>=k;)Q(),y-=k;Ne(),v=requestAnimationFrame(Le)}return K(),v=requestAnimationFrame(Le),function(){cancelAnimationFrame(v),window.removeEventListener("keydown",F),e.removeEventListener("pointerdown",Z),z.disconnect(),f==null||f.close(),f=null,T=null}}const nt=Object.freeze({"--background":"#0b0f14","--background-deep":"#070a0e","--surface":"#111820","--foreground":"#b8c4d4","--bright":"#e7edf5","--muted":"#667485","--border":"#22303d","--cyan":"#5eead4","--blue":"#7aa2f7","--green":"#9ece6a","--yellow":"#e0af68","--purple":"#bb9af7","--red":"#f7768e"});function it(){console.log(`%c    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|`,"color: #9ece6a; font-family: monospace; font-weight: bold; line-height: 1.2;"),console.log("%cPortfolio shell v%s %c· running on curiosity","color: #5eead4; font-family: monospace;",ve,"color: #667485; font-family: monospace;"),console.log(`%c> reading the source instead of clicking around? my kind of visitor.
> say hi: %s
> code: %s`,"color: #b8c4d4; font-family: monospace;",Ce,fe.github),console.log("%csteal the theme (dark CRT terminal palette):","color: #e0af68; font-family: monospace;"),console.log(Object.entries(nt).map(([n,t])=>`${n}: ${t};`).join(`
`))}function de(e){return e.replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[n]??n)}const ot={title:"I Built a CLI to Answer One Question: What Will This Change Break?",date:"2026-08-27",tags:["programming","devops","go","opensource"]},lt=`<p>We&#39;ve all been there.</p>
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
`,at=Object.freeze(Object.defineProperty({__proto__:null,html:lt,meta:ot},Symbol.toStringTag,{value:"Module"})),rt=Object.assign({"/src/content/articles/serval-cli.md":at}),Ae=new Map,ee=Object.entries(rt).map(([e,n])=>{const t=e.split("/").pop().replace(/\.md$/,"");return Ae.set(t,n.html),{slug:t,title:n.meta.title??t,date:n.meta.date??"",tags:n.meta.tags??[]}}).sort((e,n)=>n.date.localeCompare(e.date));function be(e){return Ae.has(e)?Ae.get(e):null}const $e="alberto@portfolio:~",st=Object.freeze(["help","about","skills","experience","projects","brew","lab","articles","contact","cv","games","play","ls","tree","neofetch","history","date","clear"]),ct=Object.freeze([["help","help"],["about","about"],["skills","skills"],["projects","projects"],["brew","brew"],["lab","lab"],["articles","articles"],["games","games"],["contact","contact"]]),ue=Object.freeze({space:"SPACE INVADERS",tetris:"TETRIS",pong:"PONG",flappy:"FLAPPY BIRD"}),pt=Object.freeze({space:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"FIRE",key:" "},{label:"→",key:"ArrowRight"}],tetris:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"ROT",key:"ArrowUp"},{label:"→",key:"ArrowRight"},{label:"↓",key:"ArrowDown"}],pong:[{label:"START",key:"Enter"},{label:"↑",key:"ArrowUp"},{label:"↓",key:"ArrowDown"}],flappy:[{label:"START",key:"Enter"},{label:"FLAP",key:" "}]}),Pe=Object.freeze({space:Ze,tetris:Qe,pong:et,flappy:tt}),Oe=Object.freeze(["        /\\_/\\","       ( o.o )","        > ^ <","       /|   |\\","      (_|   |_)","         W W","","      I LOVE CAT"]),Me="#%@*+=-<>/\\|",dt=new Set(["ArrowLeft","ArrowRight","ArrowDown"]),pe=new Map,se=[];let he=0,ce=null;const oe=document.getElementById("app");function ft(){const e=ct.map(([n,t])=>`<button class="mobile-command" type="button" data-command="${t}">${n}</button>`).join("");return`<main class="terminal" aria-label="Alberto Barrago portfolio terminal">
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">Terminal command</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${$e}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">Type help to list available commands. Use up and down arrows for command history.</p>
			<nav class="mobile-commands" aria-label="Quick terminal commands">${e}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`}function ht(){return`<div class="ascii-banner accent" role="img" aria-label="ALBZ">    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|</div>
<div class="boot-copy"><span class="muted">Portfolio shell v${ve}</span>
<span>${Ee} · Product Builder</span>

15+ years: from INPS distribution systems to products for global brands.
Technical leadership · Architecture · Web · Mobile · Cloud · AI

I turn ambiguity into reliable systems and useful products.
<span class="muted">Based in ${ye}</span>
${ee.length?`
<span class="muted">Latest write-up:</span> <button class="inline-command command" data-command="cat ${ee[0].slug}.md">${ee[0].title} →</button>`:""}

Type <button class="inline-command command" data-command="help">help</button> to explore, or use the shortcuts below.</div>`}function ut(){return`<div class="output-title">Available commands</div>
<div class="command-list">${[["about","Short profile and current role"],["skills","Technical toolbox by area"],["experience","Professional timeline"],["projects","Selected open-source work"],["brew","Homebrew formulae I maintain"],["lab","Experimental work in progress"],["articles","Technical articles and notes"],["contact","Ways to get in touch"],["cv","Download my resume"],["games","List embedded retro games"],["play &lt;game&gt;","Launch space, tetris, pong, or flappy"],["ls / tree","Browse the portfolio filesystem"],["neofetch","Compact system profile"],["history / date / clear","Terminal utilities"]].map(([n,t])=>`<div><button class="inline-command command" data-command="${n.split(" ")[0]}">${n}</button><span class="muted">${t}</span></div>`).join("")}</div>
<div class="output-note">Tip: press <span class="key">Tab</span> to autocomplete and <span class="key">↑</span>/<span class="key">↓</span> for history.</div>`}function mt(){return`<div class="output-title">${Te}</div>
<div class="key-value"><span class="label">role</span><span>${Ee}</span>
<span class="label">location</span><span>${ye}</span>
<span class="label">focus</span><span>Product engineering · architecture · technical leadership</span>
<span class="label">status</span><span class="green">Building useful things</span></div>
<p class="prose">${We}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">view projects</button><button class="inline-command command" data-command="contact">contact me</button><button class="inline-command command" data-command="cv">download cv</button></div>`}function gt(){return`<div class="output-title">Technical toolbox</div>
<div class="skills-list">${Object.entries(ze).map(([e,n])=>`<div class="skill-row"><span class="label">${e}</span><span>${n.join("  ·  ")}</span></div>`).join("")}</div>`}function yt(){return`<div class="output-title">Experience</div>
<div class="timeline">${Ue.map(e=>`<article class="timeline-item">
	<span class="timeline-period">${e.period}</span>
	<div><div><span class="green">${e.role}</span> <span class="muted">@ ${e.company}</span></div>
	<p>${e.highlight}</p></div>
</article>`).join("")}</div>`}function bt(){return`<div class="output-title">Selected projects</div>
<div class="project-list">${Xe.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.language}</span></div>
	<p>${e.description}</p>
</article>`).join("")}</div>`}function wt(){return`<div class="output-title">Homebrew formulae</div>
<p class="prose">Command-line tools I've packaged and maintain via Homebrew taps.</p>
<div class="project-list">${Je.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.tap}</span></div>
	<p>${e.description}</p>
	<p class="brew-install"><code>${e.install}</code></p>
</article>`).join("")}</div>`}function St(){return`<div class="output-title">Workbench Lab</div>
<p class="prose">Experimental products in active development. Scope and direction may evolve as ideas are validated.</p>
<article class="project-item lab-project">
	<div class="lab-project-meta"><span class="project-status">${re.status}</span><span class="project-language">${re.language}</span></div>
	<a class="terminal-link project-name" href="${re.url}" target="_blank" rel="noopener noreferrer">${re.name} ↗</a>
	<p>${re.description}</p>
	<p class="lab-project-focus"><span class="label">focus</span>${re.focus}</p>
</article>`}function xt(){return ee.length===0?`<div class="output-title">Articles</div>
<p class="prose muted">No articles yet.</p>`:`<div class="output-title">Articles</div>
<div class="project-list">${ee.map(e=>`<article class="project-item">
	<div><button class="terminal-link project-name inline-command" data-command="cat ${e.slug}.md">${e.title} ↗</button><span class="project-language">${e.date}</span></div>
	<p class="muted">${e.tags.join("  ·  ")}</p>
</article>`).join("")}</div>`}function Tt(e){const n=ee.findIndex(s=>s.slug===e),t=ee[n],a=ee[n-1],o=ee[n+1],l=[a?`<button class="reader-nav-link" type="button" data-action="read-article" data-slug="${a.slug}">← ${a.title}</button>`:"<span></span>",o?`<button class="reader-nav-link reader-nav-next" type="button" data-action="read-article" data-slug="${o.slug}">${o.title} →</button>`:"<span></span>"].join("");return`<div class="article-reader" id="article-reader">
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
					${be(e)}
				</article>
				<nav class="reader-nav">${l}</nav>
			</div>
		</div>
	</div>`}function At(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function kt(e){const n=e.querySelector("#reader-toc"),t=e.querySelectorAll(".prose h2, .prose h3");if(t.length===0)return;const a=new Set,o=Array.from(t).map(s=>{let g=At(s.textContent??"");for(;a.has(g)||!g;)g=`${g||"section"}-${a.size+1}`;return a.add(g),s.id=g,{id:g,text:s.textContent??"",level:s.tagName==="H2"?2:3}});n.innerHTML=`<span class="reader-toc-title">chapters</span><ol class="reader-toc-list">${o.map(s=>`<li class="reader-toc-item level-${s.level}"><button class="reader-toc-link" type="button" data-action="goto-heading" data-target="${s.id}">${s.text}</button></li>`).join("")}</ol>`,n.hidden=!1,e.classList.add("has-toc");const l=e.querySelector("#reader-toc-toggle");l&&(l.hidden=!1)}function we(e){var a;(a=document.getElementById("article-reader"))==null||a.remove(),D.blur();const n=document.createElement("div");n.innerHTML=Tt(e);const t=n.firstElementChild;oe.appendChild(t),t.scrollTop=0,kt(t),window.location.hash!==`#article/${e}`&&window.history.pushState(null,"",`#article/${e}`)}function He(){var e;(e=document.getElementById("article-reader"))==null||e.remove(),window.location.hash.startsWith("#article/")&&window.history.pushState(null,"",window.location.pathname+window.location.search),D==null||D.focus({preventScroll:!0})}function ke(e){return`${window.location.origin}${window.location.pathname}#article/${e}`}function Et(e){const n=e.textContent;e.textContent="copied ✓",e.disabled=!0,window.setTimeout(()=>{e.textContent=n,e.disabled=!1},1500)}async function Be(e,n){try{await navigator.clipboard.writeText(ke(e)),Et(n)}catch{window.prompt("Copy this link:",ke(e))}}async function vt(e,n){const t=ee.find(o=>o.slug===e),a=ke(e);if(navigator.share){try{await navigator.share({title:(t==null?void 0:t.title)??e,url:a})}catch{}return}await Be(e,n)}function Se(){return`<div class="output-title">Let's build something useful</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${fe.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${fe.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${fe.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">location</span><span>${ye}</span></div>`}function It(){return`<div class="output-title">/games</div>
<div class="game-list">${Object.entries(ue).map(([e,n])=>`<button class="game-command" data-command="play ${e}"><span>${n}</span><span class="muted">play ${e}</span></button>`).join("")}</div>
<div class="output-note">Games open fullscreen. Press <span class="key">Esc</span> to return.</div>`}function Lt(){return`<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command directory" data-command="brew">brew/</button>
├── <button class="inline-command directory" data-command="lab">lab/</button>
├── <button class="inline-command directory" data-command="articles">articles/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`}function Rt(){return`<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">╭─────╮
│ A B │
│ L Z │
╰─────╯</div><div><span class="accent">${Te}</span>
<span class="muted">─${"─".repeat(Te.length-1)}</span>
<span><span class="label">Role:</span> ${Ee}</span>
<span><span class="label">Base:</span> ${ye}</span>
<span><span class="label">Stack:</span> JavaScript, Swift, Java, Python</span>
<span><span class="label">Shell:</span> albz-sh ${ve}</span>
<span><span class="label">Runtime:</span> Vanilla JS, zero dependencies</span>
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`}function Mt(){return'<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command directory" data-command="brew">brew/</button><button class="inline-command directory" data-command="lab">lab/</button><button class="inline-command directory" data-command="articles">articles/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>'}function _t(e){return Oe.map(n=>n.split("").map(t=>t===" "||Math.random()>=e?t:Me[Math.floor(Math.random()*Me.length)]).join("")).join(`
`)}function Ct(){const e=document.createElement("div");e.className="output-block ascii-banner accent",ie.appendChild(e);const n=6;let t=0;const a=window.setInterval(()=>{t+=1,e.textContent=t>=n?Oe.join(`
`):_t(Math.max(0,.6-t*.12)),requestAnimationFrame(()=>{ie.scrollTop=ie.scrollHeight}),t>=n&&(window.clearInterval(a),W('<span class="green">Purring in binary.</span>'))},90)}function $t(e){const n=document.createElement("div");n.className="output-block command-echo";const t=document.createElement("span");t.className="prompt",t.innerHTML=`<span class="prompt-user">${$e}</span><span class="prompt-symbol">$</span>`;const a=document.createElement("span");a.textContent=e,n.append(t,a),ie.appendChild(n)}function W(e,n=""){const t=document.createElement("div");t.className=`output-block ${n}`.trim(),t.innerHTML=e,ie.appendChild(t),requestAnimationFrame(()=>{ie.scrollTop=ie.scrollHeight})}function De(e){const n=e.trim();if(!n)return;$t(n),se.at(-1)!==n&&se.push(n),he=se.length;const[t,...a]=n.split(/\s+/),o=t.toLowerCase(),l=a.join(" ").toLowerCase();if(o==="clear"){ie.replaceChildren();return}if(["about","whoami","cat"].includes(o)){o!=="cat"||!l||l==="about.txt"?W(mt()):l==="contact.vcf"?W(Se()):l.endsWith(".md")&&be(l.slice(0,-3))?we(l.slice(0,-3)):W(`<span class="red">cat: ${de(l)}: No such file</span>`);return}const s={help:ut,skills:gt,experience:yt,projects:bt,brew:wt,lab:St,articles:xt,contact:Se,games:It,ls:Mt,tree:Lt,neofetch:Rt};if(s[o]){W(s[o]());return}if(o==="cv"){Ke(),W('<span class="green">Downloading albertobarrago_cv.pdf…</span>');return}if(o==="history"){W(se.map((g,x)=>`<div><span class="muted">${String(x+1).padStart(3," ")}</span>  ${de(g)}</div>`).join(""));return}if(o==="date"){W(new Intl.DateTimeFormat(void 0,{dateStyle:"full",timeStyle:"long"}).format(new Date));return}if(o==="play"){Pt(l)?(W(`<span class="green">Launching ${ue[l]}…</span>`),Ht(l)):W(`<span class="red">Unknown game${l?`: ${de(l)}`:""}.</span> Try <button class="inline-command command" data-command="games">games</button>.`);return}if(o==="1337"){Ct();return}if(o==="sudo"&&l==="hire alberto"){W('<span class="green">Permission granted. Opening contact details…</span>'),W(Se());return}W(`<span class="red">command not found: ${de(o)}</span><br>Type <button class="inline-command command" data-command="help">help</button> to see available commands.`)}function Pt(e){return Object.hasOwn(Pe,e)}function Ot(e){const n=pt[e].map(t=>`<button class="game-control-button" type="button" data-control-key="${t.key}">${t.label}</button>`).join("");return`<div class="game-fullscreen" id="game-overlay">
		<div class="game-scanlines" aria-hidden="true"></div>
		<div class="game-topbar"><span class="game-title">${ue[e]}</span><button class="game-exit" type="button" data-action="exit-game">ESC · CLOSE</button></div>
		<canvas class="game-canvas" aria-label="${ue[e]} game"></canvas>
		<div class="game-touch-controls">${n}</div>
	</div>`}function Ht(e){me(),D.blur();const n=document.createElement("div");n.innerHTML=Ot(e);const t=n.firstElementChild;oe.appendChild(t);const a=t.querySelector(".game-canvas");requestAnimationFrame(()=>{t.isConnected&&(ce=Pe[e](a,me))})}function me(){var e;ce==null||ce(),ce=null,je(),(e=document.getElementById("game-overlay"))==null||e.remove(),D==null||D.focus({preventScroll:!0})}function ge(e,n){window.dispatchEvent(new KeyboardEvent(n,{key:e,bubbles:!0,cancelable:!0}))}function Bt(e){var l;const t=e.target.closest("[data-control-key]"),a=t==null?void 0:t.dataset.controlKey;if(!t||!a)return;e.preventDefault(),(l=t.setPointerCapture)==null||l.call(t,e.pointerId);const o={key:a,button:t};pe.set(e.pointerId,o),t.classList.add("is-pressed"),ge(a,"keydown"),dt.has(a)&&(o.delayId=window.setTimeout(()=>{o.intervalId=window.setInterval(()=>ge(a,"keydown"),85)},220))}function Ie(e){const n=pe.get(e.pointerId);n&&(e.preventDefault(),n.delayId&&window.clearTimeout(n.delayId),n.intervalId&&window.clearInterval(n.intervalId),n.button.classList.remove("is-pressed"),pe.delete(e.pointerId),ge(n.key,"keyup"))}function je(){for(const e of pe.values())e.delayId&&window.clearTimeout(e.delayId),e.intervalId&&window.clearInterval(e.intervalId),e.button.classList.remove("is-pressed"),ge(e.key,"keyup");pe.clear()}oe.innerHTML=ft();const ie=document.getElementById("terminal-output"),Dt=document.getElementById("terminal-form"),D=document.getElementById("terminal-input");W(ht(),"welcome-block");it();var _e;const xe=(_e=window.location.hash.match(/^#article\/(.+)$/))==null?void 0:_e[1];xe&&be(xe)&&we(xe);window.addEventListener("popstate",()=>{var n,t;const e=(n=window.location.hash.match(/^#article\/(.+)$/))==null?void 0:n[1];e&&be(e)?we(e):(t=document.getElementById("article-reader"))==null||t.remove()});Dt.addEventListener("submit",e=>{e.preventDefault();const n=D.value;D.value="",De(n)});D.addEventListener("keydown",e=>{if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const n=e.key==="ArrowUp"?-1:1;he=Math.max(0,Math.min(se.length,he+n)),D.value=se[he]??"",requestAnimationFrame(()=>D.setSelectionRange(D.value.length,D.value.length));return}if(e.key==="Tab"){e.preventDefault();const n=D.value.trim().toLowerCase(),t=st.filter(a=>a.startsWith(n));t.length===1?D.value=t[0]:t.length>1&&W(t.map(a=>`<span class="command">${a}</span>`).join("  "))}});oe.addEventListener("click",e=>{var x,P,A;const n=e.target,t=document.querySelector("#reader-toc.is-open");t&&!n.closest("#reader-toc")&&!n.closest('[data-action="toggle-toc"]')&&t.classList.remove("is-open");const a=n.closest('[data-action="read-article"]');if(a!=null&&a.dataset.slug){we(a.dataset.slug);return}if(n.closest('[data-action="close-reader"]')){He();return}const o=n.closest('[data-action="share-article"]');if(o!=null&&o.dataset.slug){vt(o.dataset.slug,o);return}const l=n.closest('[data-action="copy-article-link"]');if(l!=null&&l.dataset.slug){Be(l.dataset.slug,l);return}if(n.closest('[data-action="toggle-toc"]')){(x=document.getElementById("reader-toc"))==null||x.classList.toggle("is-open");return}const s=n.closest('[data-action="goto-heading"]');if(s!=null&&s.dataset.target){const k=document.getElementById("article-reader");(P=document.getElementById(s.dataset.target))==null||P.scrollIntoView({behavior:"smooth",block:"start"}),(A=k==null?void 0:k.querySelector("#reader-toc"))==null||A.classList.remove("is-open");return}const g=n.closest("[data-command]");g!=null&&g.dataset.command&&De(g.dataset.command),n.closest('[data-action="exit-game"]')&&me(),!n.closest("a")&&!document.getElementById("game-overlay")&&!document.getElementById("article-reader")&&D.focus({preventScroll:!0})});oe.addEventListener("pointerdown",Bt);oe.addEventListener("pointerup",Ie);oe.addEventListener("pointercancel",Ie);oe.addEventListener("lostpointercapture",Ie);window.addEventListener("blur",je);document.addEventListener("keydown",e=>{e.key==="Escape"&&document.getElementById("game-overlay")&&me(),e.key==="Escape"&&document.getElementById("article-reader")&&He()});
