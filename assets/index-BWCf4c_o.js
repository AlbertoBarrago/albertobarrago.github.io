(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function lt(e){return/^\/it(?:\/|$)/.test(e)?"it":"en"}var Ne;const L=lt(((Ne=globalThis.location)==null?void 0:Ne.pathname)??"/"),Ie=L==="it"?"it-IT":"en-GB",He=L==="it"?"/it/":"/";function ne(e,i=L){return`${i==="it"?"/it":""}/articles/${e}/`}const ct={"Cagliari, Italy":"Cagliari, Italia","Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems.":"Senior Software Engineer con la mentalità di chi costruisce prodotti: trasformo idee in strumenti scalabili, pronti per la produzione, che risolvono problemi reali.","Leading React, iOS, and Java architecture across active projects; mentoring developers and driving staff engineering practices. Researching and benchmarking custom LLM solutions and AI workflows with Claude and MCP":"Guido l’architettura React, iOS e Java sui progetti attivi, affianco gli sviluppatori e promuovo pratiche di staff engineering. Ricerca e benchmarking di soluzioni LLM personalizzate e workflow AI con Claude e MCP","Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time":"Libreria di componenti Angular per oltre 6 team, responsabilità DevOps e ottimizzazione CI/CD: tempi di deploy ridotti del 30%","Led full-stack teams, 20% load time improvement":"Guida di team full-stack e riduzione del 20% dei tempi di caricamento","Kafka microservices architecture, Angular 12 apps":"Architettura a microservizi con Kafka e applicazioni Angular 12","Mobile apps for Deutsche Bank, TIM (Fortune 500)":"Applicazioni mobile per Deutsche Bank e TIM (Fortune 500)","2026 - Present":"2026 - Presente","A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas.":"Una lavagna per il browser veloce, essenziale e pensata per la tastiera. Marker + Picasso. Nessun framework. Nessun runtime. Solo canvas.","A headless browser engine in Rust: real JavaScript, real DOM, native layout and paint, speaking the Chrome DevTools Protocol. No Chromium required.":"Un motore browser headless in Rust: JavaScript e DOM reali, layout e rendering nativi, compatibile con il Chrome DevTools Protocol. Senza Chromium.","A native macOS menu bar companion for GitLab: merge requests, issues, failed pipelines and background notifications. Built with SwiftPM, no Xcode project.":"Un’app nativa nella barra dei menu di macOS per GitLab: merge request, issue, pipeline fallite e notifiche in background. Realizzata con SwiftPM, senza progetto Xcode.","A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat.":"Un lettore RSS nativo e leggero per macOS, realizzato in Swift. Nella barra dei menu: semplice, essenziale, senza fronzoli.","A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData.":"Un’app leggera per tenere traccia del tempo su iOS e macOS, realizzata con SwiftUI e SwiftData.","A native macOS utility that shows live window previews when you hover over Dock icons.":"Un’utilità nativa per macOS che mostra anteprime delle finestre passando il mouse sulle icone del Dock.","Break reminder for macOS: a monster breaks your screen until you take a real break.":"Un promemoria per le pause su macOS: un mostro rompe lo schermo finché non ti prendi una vera pausa.","What Is Running - Port and Process Inspector.":"What Is Running: ispezione di porte e processi.","Switch between JDKs registered with macOS. Primary shell command: jm.":"Passa tra i JDK registrati su macOS. Comando principale: jm.","Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval.":"Una CLI locale che stima l’impatto di una modifica al codice. Comando principale: serval.","A local LLM inference runtime, built from scratch in Go for Apple Silicon on top of llama.cpp. Smaller and more didactic than Ollama, with a configurable unified memory budget as an explicit constraint. v0.2.":"Un runtime locale per l’inferenza LLM, scritto da zero in Go per Apple Silicon su llama.cpp. Più piccolo e didattico di Ollama, con un limite configurabile di memoria unificata. v0.2.","Free programming books":"Libri gratuiti di programmazione","Free courses & practice":"Corsi gratuiti ed esercizi","Docs & references":"Documentazione e riferimenti","Free tools & perks":"Strumenti e vantaggi gratuiti","Curated list of free programming books in Italian.":"Una selezione di libri gratuiti di programmazione in italiano.","The full English-language list of free programming books.":"L’elenco completo dei libri gratuiti di programmazione in inglese.","Free, open-source full-stack curriculum (HTML/CSS, JS, Node, Rails).":"Un percorso full-stack gratuito e open source (HTML/CSS, JS, Node, Rails).","Free certifications and interactive courses for web development.":"Certificazioni gratuite e corsi interattivi per lo sviluppo web.","Free coding exercises and mentoring across 70+ languages.":"Esercizi gratuiti e mentoring in oltre 70 linguaggi.","Step-by-step roadmaps and guides for developer roles.":"Percorsi e guide passo passo per i diversi ruoli di sviluppo.","Free courses in math, science, and computer programming.":"Corsi gratuiti di matematica, scienze e programmazione.","Free lecture notes, exams, and videos from MIT courses.":"Appunti, esami e video gratuiti dei corsi del MIT.","The definitive reference for web platform technologies.":"Il riferimento per le tecnologie della piattaforma web.","Fast, offline-capable API documentation browser.":"Un browser veloce per la documentazione delle API, disponibile anche offline.","Paste a shell command to see what each part does.":"Incolla un comando shell per capire cosa fa ogni parte.","Online regex tester and debugger with live explanation.":"Test e debug delle espressioni regolari online, con spiegazioni in tempo reale.","My own fast, minimal, keyboard-first whiteboard engine. Marker + Picasso. No framework. No runtime. Just canvas.":"La mia lavagna veloce, essenziale e pensata per la tastiera. Marker + Picasso. Nessun framework. Nessun runtime. Solo canvas.","Free developer tools and credits for students.":"Strumenti e crediti gratuiti per gli studenti.","Free color palette generator and contrast checker.":"Un generatore gratuito di palette e uno strumento per verificare il contrasto.","Compress PNG/WebP images for the web, free tier.":"Compressione di immagini PNG/WebP per il web, con piano gratuito.","Alberto Barrago portfolio terminal":"Terminale del portfolio di Alberto Barrago","Terminal command":"Comando del terminale","Quick terminal commands":"Comandi rapidi del terminale","Type help to list available commands. Use up and down arrows for command history.":"Scrivi help per elencare i comandi. Usa le frecce su e giù per la cronologia.","15+ years: from INPS distribution systems to products for global brands.":"Oltre 15 anni: dai sistemi di distribuzione INPS ai prodotti per marchi globali.","Technical leadership · Architecture · Web · Mobile · Cloud · AI":"Leadership tecnica · Architettura · Web · Mobile · Cloud · AI","I turn ambiguity into reliable systems and useful products.":"Trasformo l’ambiguità in sistemi affidabili e prodotti utili.","Based in":"A","Latest write-up:":"Ultimo articolo:","Short profile and current role":"Profilo e ruolo attuale","Technical toolbox by area":"Competenze tecniche per area","Professional timeline":"Percorso professionale","Selected open-source work and Homebrew formulae":"Progetti open source e formule Homebrew","Technical articles and notes":"Articoli tecnici e appunti","Subscribe to the articles feed":"Iscriviti al feed degli articoli","Useful free resources and links":"Risorse e link gratuiti","Ways to get in touch":"Come contattarmi","Download my resume":"Scarica il mio CV","List embedded retro games":"Elenca i giochi retro","Launch space, tetris, pong, or flappy":"Avvia space, tetris, pong o flappy","Browse the portfolio filesystem":"Esplora i file del portfolio","Compact system profile":"Profilo sintetico del sistema","Terminal utilities":"Utilità del terminale","Available commands":"Comandi disponibili",role:"ruolo",location:"luogo",focus:"ambito",status:"stato","Product engineering · architecture · technical leadership":"Sviluppo di prodotti · architettura · leadership tecnica","Building useful things":"Costruisco cose utili","view projects":"vedi i progetti","contact me":"contattami","download cv":"scarica il CV","Technical toolbox":"Competenze tecniche","Started with a single tool, today I find myself conducting an entire orchestra.":"Ho iniziato con un solo strumento, oggi mi ritrovo a dirigere un’intera orchestra.","I'm an AI whisperer.":"Sono un AI whisperer.",Experience:"Esperienza","Selected projects":"Progetti selezionati","Homebrew formulae":"Formule Homebrew","Command-line tools I've packaged and maintain via Homebrew taps.":"Strumenti da riga di comando che distribuisco e mantengo tramite tap Homebrew.",Articles:"Articoli","No articles yet.":"Ancora nessun articolo.",back:"indietro",chapters:"capitoli",share:"condividi","copy link":"copia link","ESC · CLOSE":"ESC · CHIUDI",words:"parole",chars:"caratteri","min read":"min di lettura","copied ✓":"copiato ✓","Copy this link:":"Copia questo link:","Useful free resources: books, courses, docs, and tools I keep coming back to.":"Risorse gratuite che uso spesso: libri, corsi, documentazione e strumenti.","Let's build something useful":"Costruiamo qualcosa di utile","A real-time strategy game with a deterministic ECS engine and lockstep online 1v1 multiplayer.":"Un gioco di strategia in tempo reale con motore ECS deterministico e multiplayer online 1v1 in lockstep.","Subscribe to my articles feed in any RSS reader:":"Iscriviti al feed degli articoli con un lettore RSS:","No RSS reader on your Mac yet? I built one too:":"Non hai ancora un lettore RSS sul Mac? Ne ho fatto uno anch’io:","download RSS Reader":"scarica RSS Reader","Downloading albertobarrago_cv.pdf…":"Download di albertobarrago_cv.pdf…","No such file":"File inesistente","Unknown game":"Gioco sconosciuto","command not found:":"comando non trovato:",Launching:"Avvio di","Permission granted. Opening contact details…":"Permesso accordato. Apro i contatti…"};function n(e){return L==="it"?ct[e]??e:e}const dt="4.6.0",pt={version:dt},ut="Alberto Barrago",Ue="Senior Software Engineer",Ee=n("Cagliari, Italy"),We="albertobarrago@gmail.com",je="albertobarrago_cv.pdf",ht=n("Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems."),mt={frontend:["Angular","React","Vanilla JS"],backend:["Node.js","Fastify","FastAPI","Flask","Spring Boot"],apple:["Swift","SwiftUI","SwiftData","AppKit","iOS/macOS"],database:["MongoDB","Oracle","MySQL"],devops:["Docker","GitHub/GitLab CI","Azure DevOps"],tools:["Git","Neovim","tmux","Zed"],ai:["LLM Integration","Prompt Engineering","AI Agents"]},gt=[{role:"Tech Leader / Senior Software Engineer",company:"C22 Consulting",period:n("2026 - Present"),highlight:n("Leading React, iOS, and Java architecture across active projects; mentoring developers and driving staff engineering practices. Researching and benchmarking custom LLM solutions and AI workflows with Claude and MCP")},{role:"Senior Software Engineer / DevOps",company:"Minsait/Indra",period:"2023 - 2025",highlight:n("Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time")},{role:"Senior Software Developer",company:"Softfobia",period:"2022 - 2023",highlight:n("Led full-stack teams, 20% load time improvement")},{role:"Software Developer",company:"Accenture",period:"2021 - 2022",highlight:n("Kafka microservices architecture, Angular 12 apps")},{role:"Software Developer",company:"Sinossi",period:"2016 - 2021",highlight:n("Mobile apps for Deutsche Bank, TIM (Fortune 500)")}],ft=[{name:"Markasso",description:n("A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas."),url:"https://markasso.it",language:"TypeScript (0 deps)"},{name:"Telemaco",description:n("A headless browser engine in Rust: real JavaScript, real DOM, native layout and paint, speaking the Chrome DevTools Protocol. No Chromium required."),url:"https://github.com/AlbertoBarrago/telemaco",language:"Rust"},{name:"GitLab Alert",description:n("A native macOS menu bar companion for GitLab: merge requests, issues, failed pipelines and background notifications. Built with SwiftPM, no Xcode project."),url:"https://github.com/AlbertoBarrago/gitlab-alert",language:"Swift"},{name:"RSS-Reader",description:n("A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat."),url:"https://github.com/AlbertoBarrago/RSS-Reader",language:"Swift"},{name:"Timelog",description:n("A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData."),url:"https://github.com/AlbertoBarrago/Timelog",language:"Swift"},{name:"DockDock",description:n("A native macOS utility that shows live window previews when you hover over Dock icons."),url:"https://github.com/AlbertoBarrago/DockDock",language:"Swift"},{name:"Sgommello",description:n("Break reminder for macOS: a monster breaks your screen until you take a real break."),url:"https://github.com/AlbertoBarrago/Sgommello",language:"Swift"}],bt=[{name:"wir",description:n("What Is Running - Port and Process Inspector."),install:"brew install AlbertoBarrago/tap/wir",url:"https://github.com/AlbertoBarrago/wir",tap:"AlbertoBarrago/tap"},{name:"jm",description:n("Switch between JDKs registered with macOS. Primary shell command: jm."),install:"brew install AlbertoBarrago/tap/jm",url:"https://github.com/AlbertoBarrago/jm",tap:"AlbertoBarrago/tap"},{name:"serval",description:n("Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval."),install:"brew install AlbertoBarrago/tap/serval",url:"https://github.com/AlbertoBarrago/serval",tap:"AlbertoBarrago/tap"},{name:"otelma",description:n("A local LLM inference runtime, built from scratch in Go for Apple Silicon on top of llama.cpp. Smaller and more didactic than Ollama, with a configurable unified memory budget as an explicit constraint. v0.2."),install:"brew install AlbertoBarrago/tap/otelma",url:"https://github.com/AlbertoBarrago/otelma",tap:"AlbertoBarrago/tap"}],vt=[{category:n("Free programming books"),items:[{name:"Free Programming Books (IT)",description:n("Curated list of free programming books in Italian."),url:"https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-it.md"},{name:"Free Programming Books (EN)",description:n("The full English-language list of free programming books."),url:"https://github.com/EbookFoundation/free-programming-books"},{name:"The Odin Project",description:n("Free, open-source full-stack curriculum (HTML/CSS, JS, Node, Rails)."),url:"https://www.theodinproject.com/"},{name:"freeCodeCamp",description:n("Free certifications and interactive courses for web development."),url:"https://www.freecodecamp.org/"}]},{category:n("Free courses & practice"),items:[{name:"Exercism",description:n("Free coding exercises and mentoring across 70+ languages."),url:"https://exercism.org/"},{name:"Roadmap.sh",description:n("Step-by-step roadmaps and guides for developer roles."),url:"https://roadmap.sh/"},{name:"Khan Academy",description:n("Free courses in math, science, and computer programming."),url:"https://www.khanacademy.org/"},{name:"MIT OpenCourseWare",description:n("Free lecture notes, exams, and videos from MIT courses."),url:"https://ocw.mit.edu/"}]},{category:n("Docs & references"),items:[{name:"MDN Web Docs",description:n("The definitive reference for web platform technologies."),url:"https://developer.mozilla.org/"},{name:"DevDocs",description:n("Fast, offline-capable API documentation browser."),url:"https://devdocs.io/"},{name:"Explain Shell",description:n("Paste a shell command to see what each part does."),url:"https://explainshell.com/"},{name:"Regex101",description:n("Online regex tester and debugger with live explanation."),url:"https://regex101.com/"}]},{category:n("Free tools & perks"),items:[{name:"Markasso",description:n("My own fast, minimal, keyboard-first whiteboard engine. Marker + Picasso. No framework. No runtime. Just canvas."),url:"https://markasso.it"},{name:"GitHub Student Pack",description:n("Free developer tools and credits for students."),url:"https://education.github.com/pack"},{name:"Coolors",description:n("Free color palette generator and contrast checker."),url:"https://coolors.co/"},{name:"TinyPNG",description:n("Compress PNG/WebP images for the web, free tier."),url:"https://tinypng.com/"}]}],we={github:"https://github.com/AlbertoBarrago",email:`mailto:${We}`,bsky:"https://bsky.app/profile/albzoser.bsky.social"},Oe=pt.version,yt=()=>{const e=document.createElement("a");e.href=`/${je}`,e.download=je,e.dispatchEvent(new MouseEvent("click"))};function wt(e,i){const t=e.getContext("2d");if(!t)return()=>{};const a=8,o=5,r=32,s=24,p=12,h=40,w=20,I=3,S=12,l=5,M=7,F=4,Y=.003,P=["#ff6b6b","#ff6b6b","#ffbd2e","#ffbd2e","#00ff41"],x=1e3/60;let f="waiting",y=0,R=3,q=parseInt(localStorage.getItem("spaceInvadersHigh")||"0",10),B=0,V=0,m=0,A=[],z=[],_=[];function c(){const d=e.width||e.clientWidth||1,v=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const k=e.width/d,K=e.height/v;m=Math.max(0,Math.min(e.width-h,m*k));for(const X of A)X.x*=k,X.y*=K;for(const X of z)X.x*=k,X.y*=K;for(const X of _)X.x*=k,X.y*=K;f!=="playing"&&(m=e.width/2-h/2)}c();const T=new ResizeObserver(c);T.observe(e);const $=()=>e.height-40;let C=1,b=0,D=40;const G=10,Q=20;function E(){A=[];const d=a*(r+p)-p,v=(e.width-d)/2;for(let k=0;k<o;k++)for(let K=0;K<a;K++)A.push({x:v+K*(r+p),y:60+k*(s+p),row:k,alive:!0});C=1,b=0,D=40}let N=0;const J={};function ee(d){if(d.key==="Escape"){i();return}(f==="waiting"||f==="gameover"||f==="won")&&d.key==="Enter"&&(f="playing",y=0,R=3,z=[],_=[],m=e.width/2-h/2,E()),J[d.key]=!0,(d.key===" "||d.key==="ArrowLeft"||d.key==="ArrowRight")&&d.preventDefault()}function he(d){J[d.key]=!1}window.addEventListener("keydown",ee),window.addEventListener("keyup",he);function be(d){if(f==="playing"){J.ArrowLeft&&m>0&&(m-=l*d),J.ArrowRight&&m<e.width-h&&(m+=l*d),m=Math.max(0,Math.min(e.width-h,m)),N>0&&(N=Math.max(0,N-d)),J[" "]&&N===0&&(z.push({x:m+h/2-I/2,y:$()-S}),N=15);for(let v=z.length-1;v>=0;v--){if(z[v].y-=M*d,z[v].y<0){z.splice(v,1);continue}for(const k of A)if(k.alive&&z[v]&&z[v].x<k.x+r&&z[v].x+I>k.x&&z[v].y<k.y+s&&z[v].y+S>k.y){k.alive=!1,z.splice(v,1),y+=10,y>q&&(q=y,localStorage.setItem("spaceInvadersHigh",String(q)));const K=A.filter(X=>X.alive).length;K>0&&(D=Math.max(4,Math.floor(40*(K/(o*a)))));break}}if(A.every(v=>!v.alive)){f="won";return}if(b+=d,b>=D){b=0;let v=!1;for(const k of A)if(k.alive&&(C>0&&k.x+r+G>e.width-10||C<0&&k.x-G<10)){v=!0;break}if(v){C*=-1;for(const k of A)k.y+=Q}else for(const k of A)k.x+=G*C;for(const k of A)if(k.alive&&k.y+s>=$()){f="gameover";return}}for(const v of A.filter(k=>k.alive))Math.random()<Y*d&&_.push({x:v.x+r/2-I/2,y:v.y+s});for(let v=_.length-1;v>=0;v--){if(_[v].y+=F*d,_[v].y>e.height){_.splice(v,1);continue}if(_[v].x<m+h&&_[v].x+I>m&&_[v].y<$()+w&&_[v].y+S>$()&&(_.splice(v,1),R--,R<=0)){f="gameover";return}}}}function ve(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),f==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("SPACE INVADERS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Fire = Shoot",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+q,e.width/2,e.height/2+78),t.textAlign="left";return}t.fillStyle="#00bfff",t.beginPath(),t.moveTo(m+h/2,$()),t.lineTo(m,$()+w),t.lineTo(m+h,$()+w),t.closePath(),t.fill();for(const d of A)d.alive&&(t.fillStyle=P[d.row],t.fillRect(d.x+4,d.y,r-8,s-4),t.fillRect(d.x+2,d.y+4,6,4),t.fillRect(d.x+r-8,d.y+4,6,4),t.fillRect(d.x+6,d.y-4,3,6),t.fillRect(d.x+r-9,d.y-4,3,6),t.fillRect(d.x,d.y+s-6,4,6),t.fillRect(d.x+r-4,d.y+s-6,4,6));t.fillStyle="#00ff41";for(const d of z)t.fillRect(d.x,d.y,I,S);t.fillStyle="#ff6b6b";for(const d of _)t.fillRect(d.x,d.y,I,S);t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+y,10,24),t.textAlign="center",t.fillText("HIGH: "+q,e.width/2,24),t.textAlign="right",t.fillText("LIVES: "+"♥".repeat(R),e.width-10,24),t.textAlign="left",f==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+y,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"),f==="won"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("YOU WIN!",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+y,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO PLAY AGAIN",e.width/2,e.height/2+60),t.textAlign="left")}}function ye(d){V===0&&(V=d);const v=Math.min((d-V)/x,3);V=d,be(v),ve(),B=requestAnimationFrame(ye)}return E(),B=requestAnimationFrame(ye),function(){cancelAnimationFrame(B),window.removeEventListener("keydown",ee),window.removeEventListener("keyup",he),T.disconnect()}}const ce=10,pe=20,Be=[{shape:[[1,1,1,1]],color:"#00bfff"},{shape:[[1,1],[1,1]],color:"#ffbd2e"},{shape:[[0,1,0],[1,1,1]],color:"#a855f7"},{shape:[[1,0,0],[1,1,1]],color:"#ff6b6b"},{shape:[[0,0,1],[1,1,1]],color:"#00ff41"},{shape:[[0,1,1],[1,1,0]],color:"#ff6b6b"},{shape:[[1,1,0],[0,1,1]],color:"#00ff41"}];function kt(){const e=[];for(let i=0;i<pe;i++)e.push(new Array(ce).fill(null));return e}function St(e,i,t,a){for(let o=0;o<i.length;o++)for(let r=0;r<i[o].length;r++){if(!i[o][r])continue;const s=t+r,p=a+o;if(s<0||s>=ce||p>=pe||p>=0&&e[p][s])return!0}return!1}function It(e){const i=e.length,t=e[0].length,a=[];for(let o=0;o<t;o++){a.push([]);for(let r=i-1;r>=0;r--)a[o].push(e[r][o])}return a}function At(e){let i=0;for(let t=pe-1;t>=0;t--)e[t].every(a=>a!==null)&&(e.splice(t,1),e.unshift(new Array(ce).fill(null)),i++,t++);return i}function zt(e,i){return e<=0?0:([0,100,300,500,800][e]||800)*i}function Tt(e){const i=Math.floor(e/10)+1,t=Math.max(5,45-(i-1)*4);return{level:i,dropInterval:t}}function xt(e,i){const t=e.getContext("2d");if(!t)return()=>{};let a="waiting",o=0,r=1,s=0,p=parseInt(localStorage.getItem("tetrisHigh")||"0",10),h=0,w=0;const I=1e3/60;let S=[],l=null,M=0,F=45;function Y(){e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight)}Y();const P=new ResizeObserver(Y);P.observe(e);function x(){S=kt()}function f(c,T,$){return St(S,c,T,$)}function y(){const c=Be[Math.floor(Math.random()*Be.length)];l={shape:c.shape.map(T=>[...T]),color:c.color,x:Math.floor((ce-c.shape[0].length)/2),y:0},f(l.shape,l.x,l.y)&&(a="gameover",l=null)}function R(){if(l){for(let c=0;c<l.shape.length;c++)for(let T=0;T<l.shape[c].length;T++){if(!l.shape[c][T])continue;const $=l.y+c;$>=0&&(S[$][l.x+T]=l.color)}q(),y()}}function q(){const c=At(S);c>0&&(o+=zt(c,r),s+=c,{level:r,dropInterval:F}=Tt(s),o>p&&(p=o,localStorage.setItem("tetrisHigh",String(p))))}const B={};function V(c){if(c.key==="Escape"){i();return}if((a==="waiting"||a==="gameover")&&c.key==="Enter"&&(a="playing",o=0,r=1,s=0,F=45,x(),y()),a!=="playing"||!l){B[c.key]=!0;return}if(c.key==="ArrowLeft")f(l.shape,l.x-1,l.y)||l.x--;else if(c.key==="ArrowRight")f(l.shape,l.x+1,l.y)||l.x++;else if(c.key==="ArrowDown")f(l.shape,l.x,l.y+1)?R():l.y++;else if(c.key==="ArrowUp"||c.key===" "){const T=It(l.shape);f(T,l.x,l.y)?f(T,l.x-1,l.y)?f(T,l.x+1,l.y)||(l.shape=T,l.x++):(l.shape=T,l.x--):l.shape=T}B[c.key]=!0,["ArrowLeft","ArrowRight","ArrowDown","ArrowUp"," "].includes(c.key)&&c.preventDefault()}function m(c){B[c.key]=!1}window.addEventListener("keydown",V),window.addEventListener("keyup",m);function A(c){a!=="playing"||!l||(M+=c,M>=F&&(M=0,f(l.shape,l.x,l.y+1)?R():l.y++))}function z(){if(!t)return;t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height);const c=e.width<520,T=c?20:200,$=c?96:60,C=Math.max(8,Math.min(Math.floor((e.height-$)/pe),Math.floor((e.width-T)/ce))),b=C*ce,D=C*pe,G=Math.floor((e.width-b)/2),Q=Math.max(c?68:36,Math.floor((e.height-D)/2)+10);if(a==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("TETRIS",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrows = Move | Up/Space = Rotate",e.width/2,e.height/2+50),t.fillText("ESC = Exit | High Score: "+p,e.width/2,e.height/2+78),t.textAlign="left";return}t.strokeStyle="#333",t.lineWidth=2,t.strokeRect(G-1,Q-1,b+2,D+2);for(let E=0;E<pe;E++)for(let N=0;N<ce;N++){const J=G+N*C,ee=Q+E*C;S[E][N]?(t.fillStyle=S[E][N],t.fillRect(J+1,ee+1,C-2,C-2)):(t.fillStyle="#111",t.fillRect(J,ee,C,C),t.strokeStyle="#1a1a1a",t.lineWidth=.5,t.strokeRect(J,ee,C,C))}if(l){t.fillStyle=l.color;for(let E=0;E<l.shape.length;E++)for(let N=0;N<l.shape[E].length;N++){if(!l.shape[E][N])continue;const J=G+(l.x+N)*C,ee=Q+(l.y+E)*C;t.fillRect(J+1,ee+1,C-2,C-2)}}t.fillStyle="#00ff41",t.font=c?"18px VT323, monospace":"22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+o,10,24),t.fillText("LEVEL: "+r,10,c?46:50),t.textAlign="center",t.fillText("HIGH: "+p,e.width/2,24),t.textAlign="right",t.fillText("LINES: "+s,e.width-10,24),t.textAlign="left",a==="gameover"&&(t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+o+"  Lines: "+s,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left")}function _(c){w===0&&(w=c);const T=Math.min((c-w)/I,3);w=c,A(T),z(),h=requestAnimationFrame(_)}return x(),h=requestAnimationFrame(_),function(){cancelAnimationFrame(h),window.removeEventListener("keydown",V),window.removeEventListener("keyup",m),P.disconnect()}}function Ct(e,i){const t=e.getContext("2d");if(!t)return()=>{};const a=12,o=80,r=10,s=5,p=4,h=3.5,w=7,I=1e3/60;let S="waiting",l=0,M=0,F=0,Y=0,P=0,x=0,f=0,y=0,R=p,q=p*.5;function B(){const b=e.width||e.clientWidth||1,D=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const G=e.width/b,Q=e.height/D;P=Math.max(0,Math.min(e.height-o,P*Q)),x=Math.max(0,Math.min(e.height-o,x*Q)),f=Math.max(0,Math.min(e.width-r,f*G)),y=Math.max(0,Math.min(e.height-r,y*Q)),S!=="playing"&&(P=e.height/2-o/2,x=e.height/2-o/2,f=e.width/2,y=e.height/2)}B();const V=new ResizeObserver(B);V.observe(e);function m(){f=e.width/2,y=e.height/2,R=p*(Math.random()>.5?1:-1),q=(Math.random()*2-1)*p*.5}const A={};function z(b){if(b.key==="Escape"){i();return}(S==="waiting"||S==="gameover")&&b.key==="Enter"&&(S="playing",l=0,M=0,P=e.height/2-o/2,x=e.height/2-o/2,m()),A[b.key]=!0,(b.key==="ArrowUp"||b.key==="ArrowDown")&&b.preventDefault()}function _(b){A[b.key]=!1}window.addEventListener("keydown",z),window.addEventListener("keyup",_);function c(b){if(S!=="playing")return;const D=e.getBoundingClientRect(),G=b.clientY-D.top;P=Math.max(0,Math.min(e.height-o,G-o/2)),b.preventDefault()}e.addEventListener("pointerdown",c),e.addEventListener("pointermove",c);function T(b){if(S!=="playing")return;A.ArrowUp&&P>0&&(P-=s*b),A.ArrowDown&&P<e.height-o&&(P+=s*b),P=Math.max(0,Math.min(e.height-o,P));const D=x+o/2;R>0?D<y-10?x+=h*b:D>y+10&&(x-=h*b):D<e.height/2-5?x+=h*.5*b:D>e.height/2+5&&(x-=h*.5*b),x=Math.max(0,Math.min(e.height-o,x)),f+=R*b,y+=q*b,y<=0&&(y=0,q=Math.abs(q)),y+r>=e.height&&(y=e.height-r,q=-Math.abs(q));const G=20;f<=G+a&&f+r>=G&&y+r>=P&&y<=P+o&&R<0&&(R=Math.abs(R)*1.05,q=((y+r/2-P)/o-.5)*p*2,f=G+a);const Q=e.width-20-a;f+r>=Q&&f<=Q+a&&y+r>=x&&y<=x+o&&R>0&&(R=-Math.abs(R)*1.05,q=((y+r/2-x)/o-.5)*p*2,f=Q-r),f<0&&(M++,M>=w?S="gameover":m()),f>e.width&&(l++,l>=w?S="gameover":m())}function $(){if(t){if(t.fillStyle="#0a0a0a",t.fillRect(0,0,e.width,e.height),S==="waiting"){t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("PONG",e.width/2,e.height/2-60),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS ENTER TO START",e.width/2,e.height/2+10),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Arrow Up/Down or Drag = Move",e.width/2,e.height/2+50),t.fillText("First to "+w+" wins | ESC = Exit",e.width/2,e.height/2+78),t.textAlign="left";return}if(t.setLineDash([8,8]),t.strokeStyle="#333",t.lineWidth=2,t.beginPath(),t.moveTo(e.width/2,0),t.lineTo(e.width/2,e.height),t.stroke(),t.setLineDash([]),t.fillStyle="#00ff41",t.fillRect(20,P,a,o),t.fillStyle="#ff6b6b",t.fillRect(e.width-20-a,x,a,o),t.fillStyle="#ffbd2e",t.fillRect(f,y,r,r),t.fillStyle="#00ff41",t.font="48px VT323, monospace",t.textAlign="center",t.fillText(String(l),e.width/2-60,55),t.fillStyle="#ff6b6b",t.fillText(String(M),e.width/2+60,55),t.textAlign="left",t.font="18px VT323, monospace",t.fillStyle="#888",t.textAlign="left",t.fillText("YOU",20,e.height-15),t.textAlign="right",t.fillText("CPU",e.width-20,e.height-15),t.textAlign="left",S==="gameover"){t.fillStyle="rgba(0,0,0,0.7)",t.fillRect(0,0,e.width,e.height);const b=l>=w;t.fillStyle=b?"#00ff41":"#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText(b?"YOU WIN!":"CPU WINS",e.width/2,e.height/2-20),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText(l+" - "+M,e.width/2,e.height/2+20),t.fillStyle="#888",t.fillText("PRESS ENTER TO RESTART",e.width/2,e.height/2+60),t.textAlign="left"}}}function C(b){Y===0&&(Y=b);const D=Math.min((b-Y)/I,3);Y=b,T(D),$(),F=requestAnimationFrame(C)}return F=requestAnimationFrame(C),function(){cancelAnimationFrame(F),window.removeEventListener("keydown",z),window.removeEventListener("keyup",_),e.removeEventListener("pointerdown",c),e.removeEventListener("pointermove",c),V.disconnect()}}function Lt(e,i){const t=e.getContext("2d");if(!t)return()=>{};const a=24,o=.34,r=-6.6,s=58,p=168,h=2.15,w=126,I=46,S=1e3/60,l=100;let M="waiting",F=0,Y=parseInt(localStorage.getItem("flappyBirdHigh")||"0",10),P=0,x=0,f=0,y=0,R=w,q=0,B=0,V=0,m=null,A=null,z=[];function _(){const u=e.width||e.clientWidth||1,g=e.height||e.clientHeight||1;e.width=Math.max(1,e.clientWidth),e.height=Math.max(1,e.clientHeight);const W=e.width/u,te=e.height/g;for(const O of z)O.x*=W,O.gapY=C(O.gapY*te);M!=="playing"?T():(q=Math.max(50,Math.min(e.width-30,q*W)),B=Math.max(a,Math.min(e.height-I-a,B*te)))}_();const c=new ResizeObserver(_);c.observe(e);function T(){q=Math.max(80,Math.floor(e.width*.28)),B=Math.floor(e.height*.45),V=0}function $(){const u=Math.max(160,e.height-I);return Math.max(86,Math.min(p,u-112))}function C(u){const g=$(),W=56,te=Math.max(W,e.height-I-g-48);return Math.max(W,Math.min(te,u))}function b(){M="playing",F=0,y=0,f=0,R=w,z=[],T(),D(),N()}function D(){const g=Math.max(68,e.height-I-$()-48),W=56+Math.random()*(g-56);z.push({x:e.width+20,gapY:W,passed:!1})}function G(){if(Q(),M==="waiting"||M==="gameover"){b();return}M==="playing"&&(V=r,J())}function Q(){if(m){m.state==="suspended"&&m.resume();return}const u=globalThis.AudioContext??globalThis.webkitAudioContext;m=new u,A=m.createGain(),A.gain.value=.16,A.connect(m.destination)}function E(u,g,W="square",te=.2){if(!m||!A)return;const O=m.currentTime,se=m.createOscillator(),le=m.createGain();se.type=W,se.frequency.setValueAtTime(u,O),le.gain.setValueAtTime(1e-4,O),le.gain.exponentialRampToValueAtTime(te,O+.01),le.gain.exponentialRampToValueAtTime(1e-4,O+g),se.connect(le),le.connect(A),se.start(O),se.stop(O+g+.02)}function N(){E(440,.08,"square",.14),m&&setTimeout(()=>E(660,.08,"square",.12),65)}function J(){E(720,.06,"square",.11)}function ee(){E(880,.07,"triangle",.14),setTimeout(()=>E(1175,.08,"triangle",.12),60)}function he(){if(!m||!A)return;const u=m.currentTime,g=m.createOscillator(),W=m.createGain();g.type="sawtooth",g.frequency.setValueAtTime(190,u),g.frequency.exponentialRampToValueAtTime(60,u+.22),W.gain.setValueAtTime(.22,u),W.gain.exponentialRampToValueAtTime(1e-4,u+.24),g.connect(W),W.connect(A),g.start(u),g.stop(u+.26)}function be(u){if(u.key==="Escape"){i();return}(u.key==="Enter"||u.key===" ")&&(G(),u.preventDefault())}function ve(){G()}window.addEventListener("keydown",be),e.addEventListener("pointerdown",ve);function ye(){if(M!=="playing")return;for(y++,V+=o,B+=V;y>=R;)D(),R+=w;for(const O of z)O.x-=h,!O.passed&&O.x+s<q&&(O.passed=!0,F++,ee(),F>Y&&(Y=F,localStorage.setItem("flappyBirdHigh",String(Y))));z=z.filter(O=>O.x+s>-20);const u=q-a/2,g=q+a/2,W=B-a/2,te=B+a/2;if(W<=0||te>=e.height-I){M="gameover",he();return}for(const O of z){const se=g>O.x&&u<O.x+s,le=W<O.gapY,st=te>O.gapY+$();if(se&&(le||st)){M="gameover",he();return}}}function d(){const u=t.createLinearGradient(0,0,0,e.height);u.addColorStop(0,"#082238"),u.addColorStop(1,"#071014"),t.fillStyle=u,t.fillRect(0,0,e.width,e.height),t.fillStyle="rgba(0, 255, 65, 0.08)";for(let g=y*-.3%90;g<e.width;g+=90)t.fillRect(g,80,34,8),t.fillRect(g+8,72,18,8)}function v(){const u=$();for(const g of z)t.fillStyle="#00a33a",t.fillRect(g.x,0,s,g.gapY),t.fillRect(g.x,g.gapY+u,s,e.height-I-g.gapY-u),t.fillStyle="#00ff41",t.fillRect(g.x-4,g.gapY-14,s+8,14),t.fillRect(g.x-4,g.gapY+u,s+8,14),t.fillStyle="rgba(0,0,0,0.22)",t.fillRect(g.x+s-12,0,6,g.gapY-14),t.fillRect(g.x+s-12,g.gapY+u+14,6,e.height-I)}function k(){const u=e.height-I;t.fillStyle="#332211",t.fillRect(0,u,e.width,I),t.fillStyle="#ffbd2e",t.fillRect(0,u,e.width,4),t.fillStyle="rgba(0, 255, 65, 0.35)";for(let g=y*-h%28;g<e.width;g+=28)t.fillRect(g,u+10,14,4)}function K(){const u=Math.max(-.45,Math.min(.7,V/12));t.save(),t.translate(q,B),t.rotate(u),t.fillStyle="#ffbd2e",t.fillRect(-12,-10,22,20),t.fillStyle="#ffe680",t.fillRect(-16,-2,14,10),t.fillStyle="#ff6b6b",t.fillRect(8,-2,12,6),t.fillStyle="#fff",t.fillRect(2,-8,6,6),t.fillStyle="#0a0a0a",t.fillRect(6,-6,2,2),t.restore()}function X(){t.fillStyle="#00ff41",t.font="22px VT323, monospace",t.textAlign="left",t.fillText("SCORE: "+F,10,24),t.textAlign="center",t.fillText("HIGH: "+Y,e.width/2,24),t.textAlign="right",t.fillText("SPACE = FLAP",e.width-10,24),t.textAlign="left"}function nt(){t.fillStyle="rgba(0,0,0,0.45)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#00ff41",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("FLAPPY BIRD",e.width/2,e.height/2-70),t.font="24px VT323, monospace",t.fillStyle="#ffbd2e",t.fillText("PRESS SPACE OR CLICK TO START",e.width/2,e.height/2),t.fillStyle="#888",t.font="18px VT323, monospace",t.fillText("Space/Click = Flap",e.width/2,e.height/2+40),t.fillText("ESC = Exit | High Score: "+Y,e.width/2,e.height/2+70),t.textAlign="left"}function at(){t.fillStyle="rgba(0,0,0,0.68)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#ff6b6b",t.textAlign="center",t.font="48px VT323, monospace",t.fillText("GAME OVER",e.width/2,e.height/2-30),t.fillStyle="#ffbd2e",t.font="24px VT323, monospace",t.fillText("Score: "+F,e.width/2,e.height/2+10),t.fillStyle="#888",t.fillText("PRESS SPACE OR CLICK TO RESTART",e.width/2,e.height/2+50),t.textAlign="left"}function rt(){d(),v(),k(),K(),X(),M==="waiting"&&nt(),M==="gameover"&&at()}function De(u){x===0&&(x=u);const g=Math.min(u-x,l);for(x=u,f+=g;f>=S;)ye(),f-=S;rt(),P=requestAnimationFrame(De)}return T(),P=requestAnimationFrame(De),function(){cancelAnimationFrame(P),window.removeEventListener("keydown",be),e.removeEventListener("pointerdown",ve),c.disconnect(),m==null||m.close(),m=null,A=null}}const Pt=Object.freeze({"--background":"#0b0f14","--background-deep":"#070a0e","--surface":"#111820","--foreground":"#b8c4d4","--bright":"#e7edf5","--muted":"#667485","--border":"#22303d","--cyan":"#5eead4","--blue":"#7aa2f7","--green":"#9ece6a","--yellow":"#e0af68","--purple":"#bb9af7","--red":"#f7768e"});function qt(){console.log(`%c    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|`,"color: #9ece6a; font-family: monospace; font-weight: bold; line-height: 1.2;"),console.log("%cPortfolio shell v%s %c· running on curiosity","color: #5eead4; font-family: monospace;",Oe,"color: #667485; font-family: monospace;"),console.log(`%c> reading the source instead of clicking around? my kind of visitor.
> say hi: %s
> code: %s`,"color: #b8c4d4; font-family: monospace;",We,we.github),console.log("%csteal the theme (dark CRT terminal palette):","color: #e0af68; font-family: monospace;"),console.log(Object.entries(Pt).map(([i,t])=>`${i}: ${t};`).join(`
`))}function me(e){return e.replace(/[&<>"']/g,i=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[i]??i)}const Mt={title:"Una piccola cassetta degli attrezzi per Claude Code",date:"2026-10-13",tags:["ai-agents","claude-code","developer-tools","opensource"],label:"Traduzione AI, rivista dall’autore"},_t=`<p>Quando lavoro con un agente di coding, scrivere codice è solo una parte del lavoro.</p>
<p>Prima di modificare un repository, voglio capire su cosa potrebbe incidere la modifica. Quando uso una libreria, voglio leggerne la documentazione, soprattutto se non la conosco bene. E prima di considerare il lavoro finito, voglio un modo concreto per verificarlo.</p>
<p>Queste esigenze mi hanno portato a costruire tre progetti: <strong>Themis, Serval e Telemaco</strong>.</p>
<p>Li ho sviluppati separatamente, ma credo che abbiano senso insieme. Ognuno affronta una parte del lavoro che chiedo a un agente di fare.</p>
<p>L’idea è semplice: installare gli strumenti, renderli disponibili a Claude Code e dirgli quando usare ciascuno.</p>
<h2>Themis: definire cosa significa “finito”</h2>
<p>Una richiesta in linguaggio naturale lascia spazio all’interpretazione. Anche un codice che funziona può risolvere un problema diverso da quello che avevo in mente.</p>
<p>Themis parte da una specifica con decisioni e criteri di accettazione. Organizza il lavoro degli agenti intorno a un ciclo di verifica. Approvo il piano e i test di accettazione; a quel punto i test vengono bloccati e un verificatore controlla il risultato.</p>
<p>Claude Code è attualmente l’adapter supportato per gli agenti. Themis ne gestisce le invocazioni ed esegue direttamente la verifica. Il progetto è ancora nelle prime fasi di sviluppo e, per ora, si installa dai sorgenti.</p>
<p>Codice: <a href="https://github.com/AlbertoBarrago/themis">github.com/AlbertoBarrago/themis</a>.</p>
<h2>Serval: capire l’impatto di una modifica</h2>
<p>Prima di toccare un file, la domanda è: cosa dipende da questo codice?</p>
<p>Serval analizza un repository in locale, combinando dipendenze, cronologia Git, configurazione CI e regole per le aree critiche. Produce una stima del rischio insieme ai segnali su cui si basa.</p>
<p>Posso chiedere a Claude di usare quell’analisi per individuare i moduli da leggere e le verifiche da eseguire. Il punteggio è un indicatore: non garantisce che una modifica sia sicura e non predice un guasto con certezza. Aiuta a decidere dove prestare attenzione.</p>
<p>Codice: <a href="https://github.com/AlbertoBarrago/serval">github.com/AlbertoBarrago/serval</a>.</p>
<h2>Telemaco: consultare il web mentre si lavora</h2>
<p>Quando una modifica dipende dal comportamento di una libreria o da un’API esterna, voglio che l’agente consulti le fonti.</p>
<p>Telemaco è un motore browser headless in Rust, pensato per lo scraping e gli agenti AI. Offre una CLI e un server MCP per accedere alle pagine ed estrarne i contenuti.</p>
<p>In questo workflow può aiutare Claude a recuperare documentazione e informazioni dal web. L’agente deve comunque valutare quelle informazioni, citare le fonti e distinguere ciò che ha verificato da ciò che ha dedotto.</p>
<p>Codice: <a href="https://github.com/AlbertoBarrago/telemaco">github.com/AlbertoBarrago/telemaco</a>.</p>
<h2>Una richiesta, tre strumenti</h2>
<p>Sono strumenti separati, installati e configurati individualmente. Una volta disponibili, il punto di partenza può essere una normale richiesta a Claude Code.</p>
<p>Per esempio, questo è il tipo di istruzione che gli darei:</p>
<blockquote>
<p>Devo aggiungere il rinnovo dei token di autenticazione.</p>
<p>Per prima cosa, usa Serval per analizzare i file coinvolti e quelli che dipendono da loro. Se ti servono informazioni sulle librerie interessate, usa Telemaco per consultare la documentazione ufficiale e riportare le fonti.</p>
<p>Usa Themis per preparare la specifica, il piano e i test di accettazione. Fermati ai passaggi che richiedono approvazione. Dopo la mia approvazione, esegui il lavoro attraverso il suo ciclo di verifica.</p>
<p>Alla fine, mostrami il diff, i risultati delle verifiche e gli eventuali limiti rimasti.</p>
</blockquote>
<p>È un esempio di come voglio comporre gli strumenti. Per rendere ripetibile il workflow, gli agenti che fanno il lavoro devono avere sia le istruzioni sia l’accesso agli strumenti. Installare un eseguibile, da solo, non basta a definire quel workflow.</p>
<p>Themis gestisce il ciclo di esecuzione e verifica. Serval e Telemaco forniscono informazioni che possono orientare la specifica, il piano e l’implementazione. Il loro uso deve essere previsto nelle istruzioni degli agenti coinvolti.</p>
<h2>Perché metterli insieme?</h2>
<p>Come progetti singoli, descrivono tre problemi diversi. Insieme descrivono un modo di lavorare: capire l’impatto, consultare le fonti, definire il risultato atteso e verificarlo.</p>
<p>Mi piace questa composizione perché ogni strumento mantiene una responsabilità chiara. Posso usarli insieme oppure scegliere solo quello che mi serve.</p>
<p>È questa la cassetta degli attrezzi che voglio costruire intorno a Claude Code: strumenti concreti, istruzioni precise per usarli e decisioni e verifiche visibili dietro al lavoro.</p>
`,Et=Object.freeze(Object.defineProperty({__proto__:null,html:_t,meta:Mt},Symbol.toStringTag,{value:"Module"})),Ot={title:"Lo sviluppo è morto",date:"2026-09-22",tags:["opinion","ai","career","italy","craft"],label:"traduzione AI da un testo scritto dall’autore"},Rt=`<p>Ho iniziato nel 2011, da freelance fino al 2014, e non ho mai smesso. Quindici anni. Abbastanza per avere delle opinioni, abbastanza pochi perché chi ha iniziato nel 1995 possa ridere delle mie.</p>
<p>Ricordo Dreamweaver, quando ancora nessuno se ne vergognava. Ricordo Eclipse che divorava un portatile solo per aprire un progetto. Ricordo l’arrivo di Sublime Text, come se qualcuno avesse finalmente capito che un editor di testo è un editor di testo. Ricordo le librerie di pattern da cui copiavamo tutti senza mai citare nessuno. Ricordo CodePen, che <a href="https://en.wikipedia.org/wiki/CodePen">Chris Coyier ha cofondato nel 2012 con Alex Vazquez e Tim Sabat</a>, e <a href="https://chriscoyier.net/bio/">CSS-Tricks</a>, che ha gestito dal 2007 fino all’acquisizione da parte di DigitalOcean nel 2022. E lo ricordo sul palco, intorno al 2016, mentre mostrava il proprio workflow e gli strumenti che usava davvero, birra in mano: sembrava più uno che ti spiega qualcosa al bar che una keynote recitata davanti a te. Allora era normale. Il web l’ha perso e non l’ha più ritrovato.</p>
<p>Quella era la cultura. Piccola, rumorosa, generosa, costruita sull’idea che avremmo continuato a fare più o meno questo ancora a lungo.</p>
<h2>La nota a piè di pagina italiana</h2>
<p>L’Italia non ne ha mai fatto parte. Abbiamo avuto un vero momento: la <a href="https://en.wikipedia.org/wiki/Programma_101">Olivetti Programma 101</a>, New York, 1965, forse il primo computer da tavolo, oltre 40.000 unità vendute, <a href="https://www.fondazioneadrianolivetti.it/en/p101-cecam/">dieci comprate dalla NASA e usate per pianificare l’allunaggio dell’Apollo 11</a>. Poi più nulla di quella portata. Mai più.</p>
<p>Le eccezioni ci sono e sono reali. <a href="https://en.wikipedia.org/wiki/Salvatore_Sanfilippo">Salvatore Sanfilippo ha pubblicato Redis il 26 febbraio 2009</a>, scritto in Sicilia per risolvere un problema nel suo prodotto di analytics, ed è diventato l’infrastruttura sotto una parte consistente di internet. Ma una persona non fa un movimento. La media qui è mediocre da vent’anni, tenuta a galla da una manciata di persone a cui importava più di quanto chiunque le pagasse perché importasse. Il famoso uno per cento. Chi ha davvero lavorato in questo paese sa che quel numero non è una figura retorica.</p>
<p>L’ho affrontato nell’unico modo che funziona: ho ignorato la conversazione locale e seguito direttamente le persone che costruivano davvero, una per ambito. Prima su Twitter, poi su qualunque cosa Twitter sia diventato, ora su Bluesky per chi vuole ancora una timeline che gli appartenga.</p>
<h2>Questa volta non è come le altre</h2>
<p>E poi è arrivato quest’anno.</p>
<p>Non stiamo facendo il lavoro che abbiamo fatto negli ultimi vent’anni. Non intendo che gli strumenti siano cambiati di nuovo. Gli strumenti cambiano ogni tre anni, ogni volta qualcuno dichiara morta la professione, e ogni volta si sbaglia. Ho assistito a quattro giri di questa storia.</p>
<p>Questo non è un altro giro. Il lavoro si è spostato. Quello che faccio ora è specificare, porre vincoli, revisionare, decidere. Digitare, la parte che era il lavoro, è diventata la parte meno costosa del lavoro. E il ritmo del cambiamento non è lineare, non sta rallentando, e nessuno che stimo pensa che stia per farlo.</p>
<p>La divisione non è tra chi usa i nuovi strumenti e chi no. È tra chi ha mantenuto i fondamentali e chi non li ha mai avuti. Se sai davvero cosa fa un sistema, puoi salire e scendere di livello: leggere il codice generato, giudicare l’architettura, fiutare l’astrazione sbagliata, decidere cosa non costruire affatto. Se non hai mai avuto quelle basi, resti bloccato a un solo livello a dire “sì, e non fare errori” a una macchina che non sei in grado di verificare. Non è una carriera. È una consegna delle chiavi.</p>
<p>Quindi, quando qualcuno mi chiede dove vedo questa professione tra dieci anni, salto la risposta rassicurante sui nuovi ruoli che emergeranno e sul lavoro che si limiterà a cambiare forma.</p>
<p>Non la vedo. Ci sarà qualcos’altro, e non si chiamerà sviluppo.</p>
<h2>Di nuovo l’uno per cento</h2>
<p>C’è un’idea su cui continuo a tornare, e voglio essere preciso su cosa sia e cosa non sia.</p>
<p>Chi pratica la Meditazione Trascendentale sostiene quello che chiama Effetto Maharishi: <a href="https://research.miu.edu/maharishi-effect/">un gruppo grande quanto la radice quadrata dell’uno per cento di una popolazione sarebbe sufficiente a produrre un cambiamento misurabile in quella popolazione</a>. La ricerca risale alla fine degli anni Settanta. È anche <a href="https://en.wikipedia.org/wiki/Maharishi_Effect">respinta come pseudoscienza</a>, gli studi hanno problemi reali con i controlli e con la correlazione spacciata per causalità, e non sto chiedendo a nessuno di crederci.</p>
<p>Ne rubo la forma, non le prove. La forma è questa: la frazione di una popolazione che deve muoversi prima che tutto il resto si riorienti intorno a lei è molto più piccola di quanto si pensi. Quella parte l’ho vista succedere, senza alcuna meditazione, in ogni cambiamento che ho vissuto. Una manciata di persone è andata da qualche parte e, due anni dopo, il settore discuteva se fosse mai stato altrove.</p>
<p>Ed è questa la parte scomoda. La radice quadrata dell’uno per cento di questo settore se n’è già andata. Non sta aspettando che il resto di noi finisca di discutere se tutto questo sia reale.</p>
<p>Quindi, dove pensiamo di andare?</p>
<h2>Fonti</h2>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Programma_101">Programma 101, Wikipedia</a> e <a href="https://www.fondazioneadrianolivetti.it/en/p101-cecam/">Fondazione Adriano Olivetti</a></li>
<li><a href="https://en.wikipedia.org/wiki/Salvatore_Sanfilippo">Salvatore Sanfilippo, Wikipedia</a> e <a href="https://en.wikipedia.org/wiki/Redis">Redis, Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/CodePen">CodePen, Wikipedia</a> e <a href="https://chriscoyier.net/bio/">La biografia di Chris Coyier</a></li>
<li><a href="https://research.miu.edu/maharishi-effect/">Ricerca sull’Effetto Maharishi, MIU</a> e <a href="https://en.wikipedia.org/wiki/Maharishi_Effect">Effetto Maharishi, Wikipedia</a></li>
</ul>
`,$t=Object.freeze(Object.defineProperty({__proto__:null,html:Rt,meta:Ot},Symbol.toStringTag,{value:"Module"})),Dt={title:"GitLab Alert: il lavoro GitLab che ti riguarda, nella barra dei menu",date:"2026-09-16",tags:["swift","macos","gitlab","menubar","opensource"],label:"traduzione AI da un testo scritto dall’autore"},jt=`<p><strong>GitLab Alert</strong> è un’app per la barra dei menu di macOS che porta il lavoro GitLab che richiede la tua attenzione fuori da una scheda del browser e nell’angolo dello schermo: merge request in attesa della tua revisione, merge request che hai aperto, issue assegnate a te e stato delle pipeline dei progetti che segui. Nessuna icona nel Dock, nessuna finestra da gestire, nessuna scheda da dimenticare.</p>
<p>Funziona con GitLab.com e con le istanze self-managed, è gratuita e ha licenza MIT.</p>
<h2>Una scheda del browser funziona male per le notifiche</h2>
<p>Il workflow che sostituisce era il mio, ogni giorno. Apri GitLab, controlla cosa aspetta una tua revisione, controlla se la pipeline della notte è diventata rossa, chiudi la scheda, dimentica, ripeti due ore dopo.</p>
<p>Una scheda ti mostra tutto o niente e non ricorda quello che hai già visto. Le notifiche email di GitLab hanno il problema opposto: arrivano continuamente, arrivano per cose che non ti interessano e dopo una settimana le filtri in una cartella che non apri mai.</p>
<p>Quindi il perimetro era volutamente ristretto:</p>
<ul>
<li><strong>Solo il lavoro che mi riguarda.</strong> Merge request di cui sono assegnatario, revisore o autore. Issue assegnate a me. L’ultima pipeline dei progetti inclusi.</li>
<li><strong>Notificare i cambiamenti, non lo stato.</strong> Una pipeline fallita genera una notifica una volta, quando fallisce, non a ogni controllo per i tre giorni successivi.</li>
<li><strong>Sola lettura, per costruzione.</strong> Il token viene richiesto con <code>read_api</code> e nient’altro. L’app non può approvare una merge request o chiudere un’issue, perché non ha il permesso di farlo.</li>
<li><strong>Offline è uno stato, non un errore.</strong> Se manca la rete, l’ultima dashboard valida resta sullo schermo invece di sparire.</li>
</ul>
<h2>Tre interfacce, tre compiti</h2>
<p>L’app è un’app accessoria: nessuna icona nel Dock, e l’elemento nella barra dei menu è l’unica presenza permanente sullo schermo. Tutto il resto viene creato solo quando serve ed eliminato alla chiusura.</p>
<p><strong>Il popover</strong> serve per dare un’occhiata. Un clic sinistro sull’icona mostra richieste di revisione, merge request che hai aperto, issue assegnate e attività dei repository, con un massimo di cinque righe per sezione espansa. Risponde a “c’è qualcosa?” in meno di un secondo e, se c’è, “vedi tutto” ti porta al passo successivo.</p>
<p><strong>La finestra di dettaglio</strong> è lo spazio di lavoro vero e proprio. La barra laterale seleziona i dati, la tabella li filtra e li ordina, l’inspector mostra l’elemento selezionato per intero e “apri su GitLab” ti manda al browser quando devi finalmente fare il lavoro. Un clic su una notifica apre questa finestra sull’elemento giusto: l’identificatore passa attraverso una selezione in attesa che la vista risolve quando i suoi dati sono disponibili, così anche una notifica cliccata ad app chiusa arriva dove deve.</p>
<p><strong>Le impostazioni</strong> contengono l’origine dell’istanza, il token, le notifiche e la selezione dei repository. Di default vengono inclusi i progetti di cui sei membro, attivi negli ultimi 90 giorni, escludendo i fork: di solito va bene, qualche volta no. Il pannello Repository permette di cercare nell’intero catalogo e includere o escludere singoli progetti a mano.</p>
<h2>Essere silenziosa è una funzionalità, e ha richiesto lavoro</h2>
<p>Qualunque cosa faccia polling e mandi notifiche è a una decisione sbagliata dal diventare rumore da silenziare. Tre decisioni fanno gran parte del lavoro.</p>
<p><strong>Il primo aggiornamento è silenzioso.</strong> Una nuova installazione inizializza i riferimenti delle notifiche dal primo ciclo riuscito, senza notificare nulla. Altrimenti il primo avvio scaricherebbe dodici notifiche su merge request che ignori da una settimana, e chiuderesti l’app prima che abbia dimostrato di essere utile.</p>
<p><strong>Lo stato viene scritto prima di inviare le notifiche.</strong> Lo snapshot, i suoi riferimenti e il registro delle attività risultante vengono salvati in un’unica scrittura dello stato, e solo dopo partono le notifiche. Un crash nel momento sbagliato non può riproporre al prossimo avvio la pipeline fallita ieri.</p>
<p><strong>Lo stato di lettura è locale ed esplicito.</strong> Aprire il popover non segna nulla come visto. Espandere una sezione non segna nulla come visto. Sei tu a segnare le righe, e questo cambia solo la presentazione locale: l’app non chiude, conferma o aggiorna mai nulla su GitLab. Gli identificatori degli elementi visti sono limitati e persistenti, così un elemento che hai archiviato resta tale tra un avvio e l’altro, mentre un evento successivo sullo stesso elemento riceve un identificatore distinto e torna non letto per la propria rilevanza.</p>
<h2>Un polling che si comporta bene sul server di qualcun altro</h2>
<p>Le istanze GitLab self-managed sono spesso macchine piccole, mantenute da qualcuno dell’infrastruttura oltre al suo vero lavoro. Un’app che le martella ogni 30 secondi è un’app che viene bloccata.</p>
<p>Un singolo actor, <code>PollScheduler</code>, gestisce l’intero ciclo. Serializza i cambiamenti del ciclo di vita e unisce un aggiornamento manuale a uno automatico, così non c’è mai più di un ciclo di rete in corso, per quanto tu prema con entusiasmo il pulsante di aggiornamento. Sospensione, spegnimento dello schermo e cambiamenti di sessione arrivano da AppKit e gli vengono inoltrati. Raggiungibilità della rete, stato energetico e apertura del popover contribuiscono tutti al prossimo intervallo: un portatile sospeso e a batteria non ha bisogno di fare polling.</p>
<p>Durante un ciclo, le richieste indipendenti vengono eseguite in parallelo, gli endpoint degli elenchi seguono correttamente la paginazione di GitLab invece di leggere la prima pagina e sperare, e i controlli delle pipeline per progetto girano in un task group con concorrenza limitata. Il client rispetta <code>Retry-After</code> e aspetta il ripristino dei limiti di richieste esauriti prima di iniziare altro. Dimensione delle pagine e concorrenza delle pipeline sono configurabili nelle impostazioni, entro limiti sicuri, perché i numeri giusti per gitlab.com non sono quelli giusti per un’istanza self-managed con 40 utenti.</p>
<h2>Dove stanno le cose</h2>
<p>Due moduli, e la separazione è anche la strategia di test.</p>
<p><code>GitLabKit</code> è un pacchetto SwiftPM locale senza alcuna dipendenza dall’interfaccia: client REST v4, modelli, archivi su Portachiavi e file, rate limiting e un motore puro di differenze delle attività che confronta gli snapshot precedente e attuale. <code>GitLabAlert</code> è il contenitore: ciclo di vita AppKit, elemento nella barra dei menu, viste SwiftUI, impostazioni, notifiche. Le viste parlano con un <code>AppModel</code> sul main actor e con nient’altro, così nessuna vista crea mai un client di rete o scrive stato persistente, e <code>AppDelegate</code> costruisce l’intero grafo delle dipendenze.</p>
<p>Poiché la logica interessante è in un pacchetto senza viste, i test coprono mapping delle API, gestione degli errori del Portachiavi tramite archivi di test, aggiornamenti concorrenti, cancellazione, sostituzione dell’account, navigazione dalle notifiche e stato di lettura persistente. L’interfaccia nella barra dei menu mantiene comunque una checklist di QA manuale, che è la risposta onesta.</p>
<p>Cambiare l’origine GitLab viene trattato come un confine tra account, non come una preferenza. Il lavoro in corso viene annullato, lo scheduler fermato e svuotato, il token precedente eliminato e un nuovo client costruito prima di accettare il token sostitutivo. Le risposte tardive portano una revisione e non possono far riapparire nel nuovo account i dati del precedente.</p>
<p>Il token vive nel Portachiavi, non raggiunge mai una vista e viene inviato nell’header <code>PRIVATE-TOKEN</code> solo all’origine configurata. I file di stato contengono i dati della dashboard e nessuna credenziale, scritti atomicamente con permessi riservati al proprietario. Nessuna analytics, nessun servizio di terze parti a runtime.</p>
<h2>Stato del progetto</h2>
<p>In sviluppo attivo. Le release sono firmate con l’identità stabile del progetto, ma non notarizzate da Apple, quindi il primo avvio richiede un passaggio in <strong>Privacy e sicurezza → Apri comunque</strong>. Il README lo spiega, insieme alla compilazione dai sorgenti via SwiftPM (non c’è un <code>.xcodeproj</code> e Xcode non è necessario). Le istanze GitLab ospitate sotto un sottopercorso dell’URL non sono ancora supportate.</p>
<p>Il repository è su <a href="https://github.com/AlbertoBarrago/gitlab-alert">github.com/AlbertoBarrago/gitlab-alert</a>, con la pagina del prodotto su <a href="https://albz.it/gitlab-alert/">albz.it/gitlab-alert</a>. Se si guadagna un posto nella tua barra dei menu, una stella è apprezzata.</p>
`,Bt=Object.freeze(Object.defineProperty({__proto__:null,html:jt,meta:Dt},Symbol.toStringTag,{value:"Module"})),Gt={title:"Iris: un’app di posta e calendario per il Mac, in Rust",date:"2026-10-08",tags:["rust","macos","email","calendar","opensource"],label:"traduzione AI da un testo scritto dall’autore"},Nt=`<p>Volevo un’app di posta e calendario per il mio Mac che tenesse le email sul mio computer, parlasse direttamente con Gmail e Microsoft e fosse open source. Quell’app è <strong>Iris</strong>.</p>
<h2>Cosa fa Iris</h2>
<p>Iris legge la posta di Gmail, degli account Microsoft (Outlook.com, Hotmail, Live e Microsoft 365) e di qualsiasi account IMAP e SMTP, trovando per te le impostazioni del server. Mostra gli account in una casella unificata oppure uno alla volta, con calendari e contatti accanto alla posta. Firma e cifra le email con OpenPGP e S/MIME.</p>
<p>I dati della posta e del calendario restano sul tuo computer e Iris non ha un server proprio. Gmail comunica direttamente con Google e gli account Microsoft con Microsoft Graph, quindi nessun altro server vede le tue email.</p>
<h2>Pensata per macOS</h2>
<p>Il cuore è in Rust: sincronizzazione, archivio locale, ricerca e operazioni sulla posta. Sopra questo nucleo, Iris sta passando a un’interfaccia nativa in SwiftUI e AppKit, così si comporta come un’app per Mac: il Portachiavi per le password, le notifiche di sistema, gli aggiornamenti tramite Sparkle, il badge nel Dock.</p>
<h2>Un assistente, se lo vuoi</h2>
<p>Iris ha un assistente opzionale. Resta disattivato finché non scegli un modello: Claude Code, una chiave Anthropic o un modello in esecuzione sul tuo computer. Può riassumere una conversazione, cercare email, preparare una risposta o ripulire le newsletter, e chiede prima di intervenire sulla tua posta.</p>
<h2>A che punto è</h2>
<p>Iris è un progetto che sviluppo e uso ogni giorno. Il codice è pubblico su GitHub sotto GPL e le build per macOS sono versioni di test: c’è ancora lavoro da fare. Iris è partita dal codice di <a href="https://github.com/c9dev/penguin-mail">Penguin Mail</a>, con la stessa licenza.</p>
<h2>Entra nella lista d’attesa</h2>
<p>Vuoi provare Iris quando ci sarà una build pronta per te? <a href="mailto:albertobarrago@gmail.com?subject=Iris%20waitlist%3A%20beam%20me%20in&body=Ciao%20Alberto%2C%0D%0A%0D%0AAggiungimi%20alla%20lista%20d%27attesa%20di%20Iris.%20Sono%20pronto%20a%20far%20trasferire%20un%20nuovo%20client%20nella%20mia%20casella%20di%20posta.%0D%0A%0D%0ANome%3A%0D%0AVersione%20macOS%3A%0D%0A%0D%0AGrazie%21">Teletrasportami nella lista</a> e ti aggiungo alla lista d’attesa.</p>
<ul>
<li>Iris: <a href="https://albz.it/iris/">albz.it/iris</a></li>
<li>Codice: <a href="https://github.com/AlbertoBarrago/iris">github.com/AlbertoBarrago/iris</a></li>
</ul>
`,Ht=Object.freeze(Object.defineProperty({__proto__:null,html:Nt,meta:Gt},Symbol.toStringTag,{value:"Module"})),Ut={title:"Iron Doctrine: multiplayer online deterministico con un motore ECS condiviso",date:"2026-08-31",tags:["typescript","game-dev","multiplayer","ecs","pnpm"],label:"traduzione AI da un testo scritto dall’autore"},Wt=`<p><strong>Iron Doctrine</strong> è un gioco di strategia in tempo reale che sto costruendo in un monorepo pnpm, con un motore ECS deterministico al centro e, da questa settimana, una modalità online 1v1 funzionante.</p>
<h2>L’architettura</h2>
<p>Il repository è diviso in <code>packages/</code> e <code>apps/</code>:</p>
<ul>
<li><strong>packages/shared</strong>: il protocollo di rete (<code>ClientMessage</code>/<code>ServerMessage</code>), tipi e costanti condivisi (<code>SIM_HZ</code>, <code>DEFAULT_INPUT_DELAY</code>) e il <code>LockstepCoordinator</code></li>
<li><strong>packages/engine</strong>: un motore di simulazione ECS deterministico (entità/comandi/sistemi), che espone <code>Simulation.step()</code>/<code>enqueue()</code>, senza alcuna dipendenza dal rendering o dalla rete</li>
<li><strong>apps/client</strong>: React + Pixi.js, interamente nel browser</li>
<li><strong>apps/server</strong>: un host WebSocket Node/<code>ws</code> che inoltra i comandi senza simulare nulla</li>
</ul>
<h2>Il gioco locale: il game loop</h2>
<p><code>GameRenderer</code> (una grande classe che gestisce rendering, input e audio) possiede un <code>SimBridge</code>, che a sua volta possiede un Web Worker in cui gira la <code>Simulation</code>. Il worker avanza con un clock autonomo (<code>setTimeout</code>), applica i comandi appena arrivano e produce uno snapshot per tick, che il thread principale interpola e disegna.</p>
<h2>Il passaggio online</h2>
<p>L’aggiunta di questa settimana: vere partite 1v1 in rete, costruite intorno al determinismo lockstep.</p>
<ol>
<li><strong>apps/server</strong> esegue un singolo <code>MatchRelay</code> in memoria per processo. Non simula nulla: assegna ciascun comando in arrivo a un tick futuro e ritrasmette lo stesso insieme di comandi confermati a entrambi i client ogni <code>SIM_DT_MS</code>. Il determinismo deriva dai due client che eseguono lo stesso motore sullo stesso flusso di comandi.</li>
<li><strong>NetworkClient</strong> comunica con il server via WebSocket, traduce i tick confermati e li passa a un secondo tipo di bridge, <code>NetworkedSimBridge</code>, che implementa la stessa interfaccia <code>SimBridgeLike</code> di quello locale, con due differenze: i comandi locali vanno al server (<code>sendCommand</code>) invece che direttamente al worker, e il worker avanza di un solo tick quando arriva una conferma dalla rete (<code>networkTick</code>), invece di procedere autonomamente.</li>
<li><strong>Il problema “sei sempre il giocatore 0”</strong>: buona parte dell’interfaccia e dell’HUD assumeva che l’utente locale fosse il giocatore 0. L’ho risolto con <code>playerPerspective.ts</code>, un modulo puro che scambia le etichette <code>owner</code>/<code>player</code>/<code>winner</code> (0↔1) solo al confine con la rete, così ogni client continua a considerarsi internamente il giocatore 0.</li>
<li><code>GameRenderer</code> ora riceve il bridge nel costruttore (locale o di rete) invece di istanziarlo sempre da sé. Quel singolo punto di iniezione ha reso possibile il resto della modalità online senza riscrivere le circa 1700 righe della classe.</li>
</ol>
<h2>Perché questa scelta</h2>
<p>Mantenere la simulazione deterministica e indipendente dalla rete in <code>packages/engine</code> significa usare lo stesso codice per schermaglie, campagna e gioco online. Il server non deve mai conoscere lo stato del gioco: è soltanto un clock autorevole per ordinare i comandi. Il compromesso è che entrambi i client devono produrre risultati identici bit per bit a partire dagli stessi input. Per questo l’intero modello di rete si basa sulla riproduzione dei comandi, non sulla sincronizzazione dello stato.</p>
<h2>I prossimi passi</h2>
<p>L’1v1 funziona; ora tocca gestire le riconnessioni e verificare che il modello lockstep regga con il jitter di una rete reale, non solo su localhost.</p>
`,Ft=Object.freeze(Object.defineProperty({__proto__:null,html:Wt,meta:Ut},Symbol.toStringTag,{value:"Module"})),Vt={title:"I miei primi (e ultimi?) quarant’anni",date:"2026-09-29",tags:["opinion","life","freedom","career","italy"],label:"testo originale dell’autore, refusi corretti con AI"},Yt=`<p>Domani compio quarant’anni.</p>
<p>Giunto a questo punto della mia vita, da appassionato del codice a tal punto da perdere diottrie, affetti e ragione… mi ritrovo a fare una valutazione non tanto tecnica quanto umana.</p>
<h2>Otto ore</h2>
<p>Otto ore passate dietro un monitor per trascorrerne meno di sei per i propri affari.</p>
<p>Otto ore di cui sarebbero necessarie forse due al giorno d’oggi per essere “1000x”, come dice DHH, partendo da una conoscenza basica di fondo.</p>
<h2>L’atto di volontà</h2>
<p>Libertà è un processo mentale, non una semplice parola; ognuno vive la propria dimensione di libertà. Ma credo, in fondo, che in pochi la sperimentino e piuttosto ne vedano i tratti per differenza.</p>
<p>L’atto di volontà è l’unica cosa che accompagna un reale cambiamento, che porta con sé rinunce, fatica, disciplina e a volte ti chiede pure di essere uno col tuo distacco.</p>
<p>Non c’è una conclusione, non c’è un vero senso; ma vi è sicuramente un significato per ciascuno che si soffermi a leggere.</p>
<h2>La realtà italiana</h2>
<p>Andare a toccare l’erba, ritiro anticipato: tutte realtà che non ci toccano come italiani. Qui al massimo diventi CTO e prendi comunque meno di un portaborse di qualche ministro italiano.</p>
<h2>Qualcosa di positivo, forse</h2>
<p>Ma c’è un dato positivo, credo, essendo che il negativo è chiaro.</p>
<p>Bisogna solo trovarlo.</p>
<p><em>Valete.</em></p>
`,Qt=Object.freeze(Object.defineProperty({__proto__:null,html:Yt,meta:Vt},Symbol.toStringTag,{value:"Module"})),Jt={title:"Otelma: costruire da zero un runtime locale per LLM",date:"2026-08-31",tags:["go","llm","llama-cpp","apple-silicon","ai"],label:"traduzione AI da un testo scritto dall’autore"},Kt=`<p><strong>Otelma</strong> è un runtime locale per l’inferenza LLM che sto costruendo in Go.</p>
<p>L’idea è volutamente più piccola di Ollama: capire cosa c’è davvero tra un file GGUF e un’applicazione locale che usa un LLM, trattando la memoria unificata come una risorsa reale e finita, invece di qualcosa di cui prima o poi si occuperà il sistema operativo.</p>
<p>Al momento gira su Apple Silicon, usa <code>llama.cpp</code> come primo backend di inferenza ed espone sia la propria API locale sia un’interfaccia minima compatibile con OpenAI.</p>
<h2>L’architettura</h2>
<p>Otelma è divisa in quattro livelli principali:</p>
<ul>
<li><strong>CLI</strong>: <code>pull</code>, <code>list</code>, <code>ps</code>, <code>run</code>, <code>chat</code>, <code>serve</code>, <code>config</code>, <code>version</code></li>
<li><strong>API del runtime locale</strong>: ciclo di vita dei modelli, scheduling, contabilizzazione della memoria ed endpoint HTTP</li>
<li><strong>Backend di inferenza</strong>: un’astrazione sul motore di inferenza effettivo; oggi <code>llama.cpp</code>, MLX in programma</li>
<li><strong>Archivio dei modelli</strong>: metadati GGUF locali, checksum, dimensioni e download da Hugging Face</li>
</ul>
<p>Anche i comandi locali della CLI passano dall’API HTTP.</p>
<p>Eseguire:</p>
<p><code>otelma run qwen2.5-0.5b &quot;What is the capital of Italy?&quot;</code></p>
<p>non aggira il runtime per invocare direttamente <code>llama.cpp</code>. La CLI parla con la stessa API che userebbe un’applicazione esterna.</p>
<p>Se il server non è ancora in esecuzione, Otelma lo avvia automaticamente in background.</p>
<h2>Il ciclo di vita dei modelli come macchina a stati</h2>
<p>Una cosa che non volevo era una gestione dei modelli nascosta dietro un insieme di booleani e controlli sui processi.</p>
<p>Ogni modello passa invece attraverso una macchina a stati esplicita:</p>
<p><code>NOT_PRESENT → DOWNLOADED → LOADING → READY → BUSY → UNLOADING</code></p>
<p>Il gestore dei modelli è responsabile di quelle transizioni.</p>
<p>Questo dà al runtime un unico posto in cui rispondere a domande come:</p>
<ul>
<li>questo modello è davvero disponibile in locale?</li>
<li>è già caricato?</li>
<li>può essere usato da un’altra richiesta?</li>
<li>sta generando in questo momento?</li>
<li>può essere scaricato dalla memoria in sicurezza?</li>
</ul>
<p>Il registro viene salvato su disco, così i modelli scaricati sopravvivono ai riavvii del runtime senza dover riscoprire tutto da zero.</p>
<h2>La memoria unificata fa parte dell’architettura</h2>
<p>Apple Silicon rende comoda l’inferenza locale perché CPU e GPU condividono la memoria unificata.</p>
<p>Significa anche che fingere che la memoria sia illimitata è una cattiva astrazione.</p>
<p>Su una macchina con 24 GB di memoria unificata, caricare più modelli grandi insieme può diventare molto rapidamente un problema del sistema operativo.</p>
<p>Otelma ha quindi un <code>Budget</code> di memoria esplicito.</p>
<p>Prima di caricare un modello, il gestore ne riserva l’utilizzo previsto di memoria. Se la prenotazione superasse il limite configurato, il caricamento viene rifiutato prima che il processo di inferenza parta.</p>
<p>La distinzione importante è che la pressione sulla memoria diventa una decisione del runtime:</p>
<p><code>canLoad(model) → yes/no</code></p>
<p>invece di un eventuale OOM.</p>
<p>Questo vincolo ha influenzato l’architettura molto più di quanto mi aspettassi all’inizio.</p>
<h2>llama.cpp è un backend, non il runtime</h2>
<p>Otelma non implementa direttamente le operazioni sui tensori o l’inferenza dei transformer.</p>
<p>Per l’inferenza reale, il backend attuale avvia <code>llama-server</code> di <code>llama.cpp</code>.</p>
<p>Ma il resto di Otelma non lo sa.</p>
<p>Il runtime comunica attraverso un’interfaccia del backend responsabile di caricare, scaricare dalla memoria e generare con un modello. <code>llama.cpp</code> è semplicemente la prima implementazione.</p>
<p>Questa separazione dovrebbe permettere di aggiungere in seguito un backend MLX senza cambiare la gestione dei modelli, lo scheduling, l’archivio o l’API pubblica.</p>
<p>Quella distinzione è stata una delle ragioni principali per costruire il progetto: un motore di inferenza e un runtime di inferenza risolvono problemi diversi.</p>
<h2>Compatibile con OpenAI fin dall’inizio</h2>
<p>Otelma espone anche un sottoinsieme minimo dell’API OpenAI:</p>
<p><code>POST /v1/chat/completions</code></p>
<p>e:</p>
<p><code>GET /v1/models</code></p>
<p>L’obiettivo non è riprodurre l’intera API OpenAI.</p>
<p>È rendere il runtime subito utilizzabile dal software che supporta già un endpoint OpenAI personalizzato.</p>
<p>L’applicazione non dovrebbe aver bisogno di sapere se il modello dietro quell’endpoint gira nel cloud, tramite <code>llama.cpp</code> o, in futuro, tramite MLX.</p>
<h2>Pull, run, chat</h2>
<p>Il workflow attuale è volutamente ridotto:</p>
<p><code>otelma list</code></p>
<p><code>otelma pull qwen2.5-0.5b</code></p>
<p><code>otelma run qwen2.5-0.5b &quot;What is the capital of Italy?&quot;</code></p>
<p>oppure, per una sessione interattiva:</p>
<p><code>otelma chat qwen2.5-0.5b</code></p>
<p>I modelli possono anche essere scaricati direttamente da Hugging Face, mentre il catalogo integrato offre un percorso più semplice, basato sul nome, per quelli conosciuti.</p>
<p>A questo punto l’intera pipeline funziona dall’inizio alla fine:</p>
<p><code>pull → load → inference → unload</code></p>
<p>con metadati persistenti dei modelli, contesto su più turni, avvio del server in background e inferenza reale.</p>
<h2>Perché costruirlo?</h2>
<p>Esistono già ottimi strumenti per eseguire LLM in locale.</p>
<p>È proprio per questo che Otelma è volutamente piccola.</p>
<p>Non volevo un’altra interfaccia sopra un runtime esistente. Volevo capire il runtime stesso: ciclo di vita dei modelli, gestione dei processi, prenotazioni di memoria, scheduling, archivio, compatibilità delle API e dove dovrebbe iniziare e finire il motore di inferenza vero e proprio.</p>
<p>Costruire la versione più piccola rende visibili quei confini.</p>
<h2>I prossimi passi</h2>
<p>Lo scheduler attuale serializza volutamente le richieste ed è ancora basato su un singolo mutex.</p>
<p>È sufficiente a rendere deterministico il ciclo di vita, ma è anche il prossimo evidente vincolo architetturale da rimuovere.</p>
<p>Poi: scheduling migliore, rimozione dei modelli, risposte in streaming e un backend MLX.</p>
<p>Il progetto è ancora abbastanza piccolo perché ogni astrazione abbia una ragione di esistere, ed è esattamente dove voglio che resti per ora.</p>
`,Xt=Object.freeze(Object.defineProperty({__proto__:null,html:Kt,meta:Jt},Symbol.toStringTag,{value:"Module"})),Zt={title:"Ho costruito una CLI per rispondere a una domanda: cosa romperà questa modifica?",date:"2026-08-27",tags:["programming","devops","go","opensource"],label:"traduzione AI da un testo scritto dall’autore"},ei=`<p>Ci siamo passati tutti.</p>
<p>Apri un repository, modifichi un file che sembra del tutto innocuo, esegui i test e apri una pull request.</p>
<p>Poi qualcuno commenta:</p>
<blockquote>
<p>“Attenzione. Quel modulo è usato anche dalla pipeline di fatturazione.”</p>
</blockquote>
<p>O peggio, nessuno se ne accorge.</p>
<p>La modifica viene integrata.</p>
<p>E qualcosa si rompe.</p>
<p>Il problema non è necessariamente il codice scritto male. In codebase grandi o poco familiari, capire la portata di una modifica è sorprendentemente difficile.</p>
<p>Così ho iniziato a costruire Serval.</p>
<p>Serval è una CLI che lavora in locale e prova a rispondere a una domanda semplice:</p>
<p><em>Se modifico questo file, su cosa è probabile che abbia effetto?</em></p>
<h2>Il problema</h2>
<p>Quando voglio capire l’impatto di una modifica, di solito finisco per usare una combinazione di:</p>
<pre><code>rg &quot;someModule&quot;
git log
git blame
</code></pre>
<p>Poi controllo gli import, cerco nella configurazione CI, verifico quali file cambiano di solito insieme e mi affido a quello che so del repository.</p>
<p>Funziona.</p>
<p>Ma è soprattutto lavoro manuale.</p>
<p>E su un repository che non conosci bene, buona parte del processo diventa un’ipotesi.</p>
<p>Volevo qualcosa di più vicino a:</p>
<pre><code>serval inspect src/auth/token.ts
</code></pre>
<p>e ottenere:</p>
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
<p>Non una previsione.</p>
<p>Non:</p>
<blockquote>
<p>“L’AI pensa che questa modifica potrebbe essere pericolosa.”</p>
</blockquote>
<p>Elementi concreti.</p>
<h2>Quattro segnali invece di uno</h2>
<p>Guardare solo gli import non basta.</p>
<p>Un grafo delle dipendenze può dirmi:</p>
<pre><code>A -&gt; B -&gt; C
</code></pre>
<p>Se modifico C, so che B e potenzialmente A ne risentono.</p>
<p>Utile.</p>
<p>Ma i repository contengono più informazioni del loro grafo delle dipendenze.</p>
<h3>1. Grafo delle dipendenze</h3>
<p>Serval scansiona il repository e costruisce un grafo a partire dalle dipendenze native dei linguaggi.</p>
<p>Al momento comprende repository che contengono:</p>
<ul>
<li>JavaScript / TypeScript</li>
<li>Go</li>
<li>Python</li>
<li>Java</li>
<li>C</li>
</ul>
<p>Per un file di destinazione, Serval percorre il grafo nella direzione opposta e calcola quali file dipendono da lui.</p>
<p>Questo ci dà la portata strutturale della modifica.</p>
<p>Ma la struttura è solo il primo segnale.</p>
<h3>2. Cronologia Git</h3>
<p>Git contiene qualcosa di sorprendentemente vicino alla memoria di una codebase.</p>
<p>Se due file cambiano ripetutamente insieme, è un’informazione.</p>
<p>Se un modulo è stato modificato di continuo negli ultimi mesi, anche quella è un’informazione.</p>
<p>Serval guarda quindi aspetti come:</p>
<ul>
<li>frequenza storica delle modifiche</li>
<li>frequenza delle modifiche congiunte</li>
</ul>
<p>Immagina due file con grafi delle dipendenze identici.</p>
<p>Uno non cambia da due anni.</p>
<p>L’altro è cambiato nove volte negli ultimi 90 giorni e cambia spesso insieme ad altri 15 moduli.</p>
<p>Probabilmente quei file non dovrebbero ricevere lo stesso punteggio di rischio.</p>
<h3>3. Configurazione CI</h3>
<p>C’è poi un altro grafo nascosto nella maggior parte dei repository: la CI/CD.</p>
<p>Una modifica può attivare test di integrazione, build, deploy o pipeline di validazione a seconda dei filtri sui percorsi.</p>
<p>Serval comprende attualmente la configurazione di:</p>
<ul>
<li>GitHub Actions</li>
<li>GitLab CI</li>
<li>Azure Pipelines</li>
<li>Jenkins</li>
</ul>
<p>Questo offre un altro elemento utile: quali automazioni tocca davvero questa modifica?</p>
<h3>4. Percorsi critici</h3>
<p>Alcune parti di un sistema meritano semplicemente più attenzione.</p>
<p>L’autenticazione non è la stessa cosa di una modifica a un README.</p>
<p>La logica dei pagamenti non è la stessa cosa di una modifica a un’utilità CSS.</p>
<p>Serval permette quindi di definire regole sui percorsi critici specifiche per il repository attraverso <code>.serval.yml</code>.</p>
<p>Di nuovo, non sta cercando di dimostrare che qualcosa si romperà.</p>
<p>Sta raccogliendo elementi che dicono: probabilmente dovresti guardare questa modifica con più attenzione.</p>
<h2>Perché il punteggio è deterministico</h2>
<p>Questa è diventata una delle decisioni progettuali più importanti del progetto.</p>
<p>Sarebbe stato facilissimo inviare il contesto del repository a un LLM e chiedere:</p>
<blockquote>
<p>“Quanto è rischiosa questa modifica da 0 a 100?”</p>
</blockquote>
<p>Ho scelto deliberatamente di non farlo.</p>
<p>Il punteggio di base prodotto da Serval è deterministico.</p>
<p>Lo stesso stato del repository e la stessa configurazione producono lo stesso risultato.</p>
<p>Soprattutto, ogni punto si può spiegare.</p>
<p>Qualcosa del genere:</p>
<pre><code>Risk
  MEDIUM: 38/100

  +4   2 downstream modules
  +14  high historical churn
  +12  91 frequently co-changed modules
  +8   2 CI workflows affected
</code></pre>
<p>Non c’è un ragionamento nascosto dietro quel 38.</p>
<p>Puoi verificarlo.</p>
<p>Puoi non essere d’accordo.</p>
<p>Puoi cambiare la configurazione.</p>
<p>Ma puoi capire da dove arriva.</p>
<p>Per gli strumenti di ingegneria, credo che questa proprietà conti.</p>
<h2>Quindi… niente AI?</h2>
<p>Non esattamente.</p>
<p>Serval supporta le spiegazioni AI.</p>
<p>Per esempio:</p>
<pre><code>serval inspect src/auth/token.ts --explain
</code></pre>
<p>La parte interessante è il confine.</p>
<p>L’AI non può cambiare il punteggio.</p>
<p>Riceve solo l’analisi deterministica e la spiega in linguaggio naturale.</p>
<p>E dato che Serval lavora in locale, il provider predefinito può essere un’istanza locale di Ollama.</p>
<p>Si possono usare altri provider attraverso CLI installate in locale, come Claude, Codex o Gemini.</p>
<p>Questa architettura mi piace molto più di un LLM al centro del sistema:</p>
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
<p>Il modello spiega gli elementi disponibili. Non li inventa.</p>
<h2>La scelta di lavorare in locale</h2>
<p>Serval non richiede:</p>
<ul>
<li>un account</li>
<li>un backend SaaS</li>
<li>di caricare il repository altrove</li>
<li>una chiave API per le funzionalità di base</li>
</ul>
<p>L’analisi avviene in locale.</p>
<p>Questo conta per gli strumenti di sviluppo, perché il repository contiene già tutto ciò che serve per la maggior parte dell’analisi:</p>
<ul>
<li>codice sorgente</li>
<li>cronologia Git</li>
<li>configurazione CI</li>
<li>configurazione del repository</li>
</ul>
<p>Perché inviare tutto altrove se possiamo calcolare la risposta in locale?</p>
<h2>Può diventare anche un controllo in CI</h2>
<p>La stessa analisi può essere eseguita sul diff attuale:</p>
<pre><code>serval diff
</code></pre>
<p>oppure produrre output leggibile dalle macchine:</p>
<pre><code>serval diff --json
</code></pre>
<p>E questo rende possibile un altro caso d’uso:</p>
<pre><code>serval diff --fail-on high
</code></pre>
<p>Se uno dei file modificati raggiunge il rischio HIGH, Serval termina con uno stato diverso da zero.</p>
<p>Significa che lo strumento può passare da “informazione interessante per lo sviluppatore” a “segnale deterministico nella pipeline di delivery”.</p>
<p>Mi interessa particolarmente esplorare questa direzione. Non come un altro quality gate che blocca gli sviluppatori a caso, ma come un modo per rendere visibile l’impatto atteso di una modifica prima del merge.</p>
<h2>Installazione</h2>
<p>Serval è scritto in Go e distribuito tramite Homebrew.</p>
<pre><code>brew install AlbertoBarrago/tap/serval
</code></pre>
<p>Poi, dentro un repository Git:</p>
<pre><code>serval inspect path/to/file
</code></pre>
<p>oppure semplicemente:</p>
<pre><code>serval path/to/file
</code></pre>
<p>Ci sono anche comandi per ispezionare direttamente il grafo e la cronologia:</p>
<pre><code>serval graph path/to/file
serval history path/to/file
serval doctor
</code></pre>
<p>E dato che ho un debole per gli strumenti CLI della vecchia scuola:</p>
<pre><code>man serval
</code></pre>
<p>esiste anche quello.</p>
<h2>Cosa sto cercando di esplorare</h2>
<p>Serval è ancora giovane.</p>
<p>Mi interessa meno fingere che un punteggio da 0 a 100 possa prevedere magicamente se il software si romperà, e più una domanda diversa:</p>
<p><em>Quante informazioni utili sul rischio di una modifica sono già dentro i nostri repository?</em></p>
<p>I grafi delle dipendenze ci dicono cosa è collegato.</p>
<p>Git ci dice cosa si muove insieme nella storia del progetto.</p>
<p>La CI ci dice quali meccanismi operativi sono coinvolti.</p>
<p>Le regole del repository ci dicono quali aree meritano più attenzione.</p>
<p>Nessuno di questi segnali, da solo, è particolarmente rivoluzionario.</p>
<p>L’esperimento è combinarli in uno strumento piccolo, locale e spiegabile.</p>
<p>E forse è anche qui che l’AI si inserisce meglio in questo tipo di strumenti di sviluppo: senza sostituire l’analisi deterministica, ma aggiungendosi quando serve un ragionamento in linguaggio naturale.</p>
<p>Serval è open source e ha licenza MIT.</p>
<p>Progetto: <a href="https://albz.it/serval/">albz.it/serval</a></p>
<p>Codice: <a href="https://github.com/AlbertoBarrago/serval">github.com/AlbertoBarrago/serval</a></p>
<p>Se lavori su grandi repository, monorepo, sistemi legacy o progetti con molta CI, mi interesserebbe soprattutto sapere quali segnali usi prima di toccare una parte della codebase che non conosci.</p>
`,ti=Object.freeze(Object.defineProperty({__proto__:null,html:ei,meta:Zt},Symbol.toStringTag,{value:"Module"})),ii={title:"Telemaco: un motore browser headless in Rust, senza Chromium",date:"2026-09-04",tags:["rust","browser","scraping","ai-agents","cdp","sideprojects"],label:"traduzione AI da un testo scritto dall’autore"},oi=`<p><strong>Telemaco</strong> è un motore browser headless che sto costruendo in Rust. Esegue JavaScript reale tramite V8, mantiene un vero albero DOM, ha una propria pipeline di layout e rendering e parla il Chrome DevTools Protocol, così Puppeteer e Playwright si collegano senza configurazioni aggiuntive. Niente Chromium, niente WebView, niente download da 300 MB. Un eseguibile da 70 MB che parte subito e carica una pagina in circa 85 ms.</p>
<p>Questa è la storia di come è nato, perché esiste e quali scelte gli hanno dato forma.</p>
<h2>Il problema: Chromium come tassa</h2>
<p>Per anni, “browser headless” ha significato una sola cosa: Chrome headless. Funziona, ma porta con sé un costo di cui ti accorgi solo quando aumenti la scala.</p>
<ul>
<li><strong>Il download.</strong> Ogni runner CI, ogni container nuovo, ogni portatile di un collega scarica circa 300 MB di Chromium. Playwright e Puppeteer rendono l’operazione indolore, ed è proprio per questo che nessuno la mette in discussione.</li>
<li><strong>La memoria.</strong> Una singola istanza di Chrome headless, senza fare nulla, occupa oltre 200 MB. Avviane qualcuna per fare scraping in parallelo e ti ritrovi a pianificare la RAM come nel 2010.</li>
<li><strong>L’avvio.</strong> Due secondi per partire prima ancora di aver caricato una pagina.</li>
<li><strong>L’impronta.</strong> Chrome headless è facilissimo da riconoscere. Se fai scraping di qualcosa che ci presta attenzione, sei già in una corsa agli armamenti contro i sistemi anti-bot.</li>
</ul>
<p>Niente di tutto questo è intrinseco al compito. Un motore browser è un parser, un DOM, un motore di layout, una pipeline di rendering e un runtime JavaScript. Chromium è un modo molto pesante di assemblare quei pezzi. Ne volevo uno più leggero.</p>
<h2>L’esigenza da cui è partito</h2>
<p>Due esigenze concrete hanno guidato il progetto.</p>
<p>La prima: <strong>ricerca ed estrazione efficienti dal web</strong>. Lavoro con colleghi che passano le giornate a estrarre dati strutturati dal web, come record Salesforce, documentazione MDN e pagine di prodotti. Gli strumenti sono o un client HTTP grezzo (che non può eseguire JavaScript) o un browser completo (che è eccessivo). Mancava una via di mezzo: qualcosa che eseguisse JavaScript e DOM reali, ma abbastanza piccolo da essere trattato come un’utilità, non come un progetto infrastrutturale.</p>
<p>La seconda: <strong>test end-to-end senza Chromium</strong>. Se hai mai eseguito una suite Playwright in CI, conosci il rituale: scarica il browser, spera che i flag della sandbox siano giusti, guarda salire la memoria. Volevo la stessa interfaccia di automazione CDP, gli stessi <code>page.goto</code> e <code>page.evaluate</code>, ma con qualcosa che non richiedesse affatto l’installazione di un browser. Un singolo eseguibile che <em>è</em> il browser.</p>
<h2>Sulle spalle di molti progetti</h2>
<p>Non volevo reinventare un browser da zero, e non ho dovuto farlo. L’ecosistema Rust ha messo insieme quasi tutti i pezzi senza fare troppo rumore, e Telemaco è costruito volutamente sopra di loro.</p>
<ul>
<li><strong>I componenti di Servo</strong>: <code>html5ever</code> per il parsing HTML, <code>selectors</code> per la corrispondenza dei selettori CSS, <code>cssparser</code>, <code>servo_arc</code>. I meccanismi DOM e CSS che il browser di ricerca di Mozilla ha consolidato per anni.</li>
<li><strong><code>taffy</code></strong> per il motore di layout, una libreria flexbox/grid interamente in Rust.</li>
<li><strong><code>tiny-skia</code></strong> per la rasterizzazione e <strong><code>ab_glyph</code></strong> per il rendering dei glifi: la pipeline di rendering, anch’essa interamente in Rust.</li>
<li><strong>V8 tramite <code>deno_core</code></strong> per JavaScript. V8 vero, lo stesso motore usato da Chrome, così la semantica JavaScript è esattamente quella che ti aspetti.</li>
<li><strong><code>chromiumoxide</code></strong> e il Chrome DevTools Protocol per l’interfaccia di automazione.</li>
</ul>
<p>Il progetto è nato come fork di <strong>Obscura</strong> (Apache-2.0), un motore browser headless di h4ckf0r0day. Questa è l’origine, senza giri di parole: non sono partito da una pagina bianca, ma da una base solida che ho portato in una direzione diversa. Sono cambiati i nomi dei crate, l’interfaccia della CLI e l’identità del progetto, e la codebase è stata adattata ed estesa con un obiettivo pratico, orientato allo scraping e agli agenti. L’attribuzione è nel file <code>NOTICE</code> del repository: è un’opera derivata, e lo dichiara.</p>
<h2>L’architettura</h2>
<p>Telemaco è un workspace di nove crate, un livello per crate, con le chiamate tra crate che passano attraverso il livello superiore invece che lateralmente:</p>
<table>
<thead>
<tr>
<th>Crate</th>
<th>Ruolo</th>
</tr>
</thead>
<tbody><tr>
<td><code>telemaco-cli</code></td>
<td>CLI: <code>fetch</code>, <code>serve</code> (server CDP), <code>scrape</code>, <code>mcp</code></td>
</tr>
<tr>
<td><code>telemaco-cdp</code></td>
<td>Server Chrome DevTools Protocol (WebSocket)</td>
</tr>
<tr>
<td><code>telemaco-js</code></td>
<td>Runtime V8/<code>deno_core</code>; shim DOM e bridge JS/Rust</td>
</tr>
<tr>
<td><code>telemaco-dom</code></td>
<td>Albero DOM</td>
</tr>
<tr>
<td><code>telemaco-net</code></td>
<td>Client HTTP, client stealth, archivio cookie, cache robots, elenco dei tracker bloccati</td>
</tr>
<tr>
<td><code>telemaco-browser</code></td>
<td>Tipo <code>Page</code>, navigazione, valutazione JavaScript</td>
</tr>
<tr>
<td><code>telemaco-render</code></td>
<td>Cascata dei selettori, layout mantenuto in memoria, rendering, screenshot, PDF</td>
</tr>
<tr>
<td><code>telemaco-mcp</code></td>
<td>Strumenti di automazione MCP con stato</td>
</tr>
<tr>
<td><code>telemaco</code></td>
<td>API della libreria Rust incorporabile</td>
</tr>
</tbody></table>
<p>Alcune invarianti hanno dato forma all’intero progetto:</p>
<ul>
<li><strong>Un isolate V8 per processo.</strong> V8 è <code>!Send</code>, quindi tutto il codice asincrono gira su un <code>LocalSet</code> di <code>tokio</code> e ogni operazione JavaScript passa attraverso un singolo lock globale. L’esecuzione JavaScript viene serializzata, il che va bene per un motore browser: il DOM è comunque a thread singolo.</li>
<li><strong>Una pagina problematica non deve mai bloccare un worker.</strong> C’è un watchdog per la terminazione di V8 su ogni pagina e una scadenza rigida a livello di processo. Una pagina che entra in un ciclo infinito viene terminata, non il worker.</li>
<li><strong>Protezione SSRF predefinita.</strong> Le richieste verso loopback, indirizzi RFC1918 e link-local sono bloccate, a meno di passare esplicitamente <code>--allow-private-network</code>. Uno strumento di scraping che può raggiungere la tua rete interna è un rischio; questo lo impedisce per default.</li>
</ul>
<h2>Come si usa</h2>
<p>Recuperare una pagina ed eseguire JavaScript reale:</p>
<pre><code class="language-bash">$ telemaco fetch https://news.ycombinator.com --eval &quot;document.title&quot;
Hacker News
</code></pre>
<p>Pilotarlo come Chrome headless, da Puppeteer:</p>
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
<p>Fare scraping di molti URL in parallelo:</p>
<pre><code class="language-bash">$ telemaco scrape url1 url2 url3 --concurrency 25 --format json
</code></pre>
<p>Per gli agenti AI c’è anche un server MCP che espone lo stesso browser a Claude Desktop, Cursor o qualunque client MCP:</p>
<pre><code class="language-json">{
  &quot;mcpServers&quot;: {
    &quot;telemaco&quot;: { &quot;command&quot;: &quot;telemaco&quot;, &quot;args&quot;: [&quot;mcp&quot;] }
  }
}
</code></pre>
<h2>I numeri</h2>
<table>
<thead>
<tr>
<th>Metrica</th>
<th>Telemaco</th>
<th>Chrome headless</th>
</tr>
</thead>
<tbody><tr>
<td>Memoria</td>
<td>30 MB</td>
<td>200+ MB</td>
</tr>
<tr>
<td>Dimensione eseguibile</td>
<td>70 MB</td>
<td>300+ MB</td>
</tr>
<tr>
<td>Caricamento pagina</td>
<td>85 ms</td>
<td>~500 ms</td>
</tr>
<tr>
<td>Avvio</td>
<td>Immediato</td>
<td>~2 s</td>
</tr>
<tr>
<td>Anti-rilevamento</td>
<td>Integrato</td>
<td>Assente</td>
</tr>
<tr>
<td>Puppeteer / Playwright</td>
<td>Sì</td>
<td>Sì</td>
</tr>
</tbody></table>
<p>Caricamenti delle pagine circa 12 volte più veloci e un sesto della memoria sulle pagine con framework, con la stessa interfaccia di automazione CDP.</p>
<h2>Perché “Telemaco”</h2>
<p>Il nome è quello del figlio di Ulisse, che parte alla ricerca di notizie del padre. Un cercatore, per definizione. Mi sembrava giusto per uno strumento il cui intero lavoro è andare a recuperare quello che c’è sul web.</p>
<h2>Una direzione, più che un prodotto</h2>
<p>Telemaco non sta cercando di vendere niente. È una visione diversa di cosa possa essere un motore browser: abbastanza piccolo da essere un’utilità, abbastanza veloce da essere uno strumento e onesto sulle proprie origini. È costruito sul lavoro di molti progetti e persone stimati, come Servo, taffy, tiny-skia, deno_core e Obscura, ed è open source sotto Apache-2.0, così chiunque può prenderlo e usarlo per il proprio problema.</p>
<p>Se hai mai desiderato che lo scraping o i tuoi test e2e non richiedessero l’installazione di un browser, è l’esigenza a cui risponde. Clonalo, compilalo, usalo.</p>
<ul>
<li>Pagina del progetto: <a href="https://albz.it/telemaco/">albz.it/telemaco</a></li>
<li>Codice: <a href="https://github.com/AlbertoBarrago/telemaco">github.com/AlbertoBarrago/telemaco</a></li>
</ul>
`,ni=Object.freeze(Object.defineProperty({__proto__:null,html:oi,meta:ii},Symbol.toStringTag,{value:"Module"})),ai={title:"Tenore: smetti di mantenere tre volte la stessa configurazione degli agenti",date:"2026-10-01",tags:["programming","ai-agents","developer-tools","typescript","opensource"],label:"traduzione AI da un testo scritto dall’autore"},ri=`<p>Ho costruito <strong>Tenore</strong>, una CLI che prende una configurazione condivisa per gli agenti AI di coding e la compila nei loro file nativi.</p>
<p>Il problema è la manutenzione ordinaria. Claude Code, Codex CLI e Antigravity hanno i propri posti per istruzioni, permessi e server MCP. Appena ne usi più di uno, le stesse regole del progetto iniziano a comparire in più file.</p>
<p>Cambi il comando dei test, aggiungi un server, restringi un permesso: ogni copia richiede attenzione. Prima o poi ne salti una. Cambiare agente significa allora controllare se la configurazione dice ancora quello che volevi.</p>
<p>Tenore dà a quella configurazione una fonte di verità: una directory chiamata <code>.agents/</code>.</p>
<h2>La configurazione come codice sorgente</h2>
<p>L’idea è mantenere le istruzioni in Markdown, le policy strutturate nel frontmatter YAML e generare i file che ogni agente si aspetta.</p>
<p>Un repository può iniziare con:</p>
<pre><code class="language-text">.agents/
  AGENTS.md
  policy.md
  memory/
    architecture.md
</code></pre>
<p><code>AGENTS.md</code> contiene il testo: come lavorare nel repository, quali convenzioni contano, cosa richiede più attenzione. <code>policy.md</code> descrive permessi, server MCP e override specifici per ciascun target. I file di memoria contengono note persistenti per argomento.</p>
<p>Tenore analizza quei sorgenti, unisce i loro ambiti e passa il risultato all’adapter di ogni target. Gli adapter producono configurazioni native, come <code>CLAUDE.md</code> o <code>.codex/config.toml</code>.</p>
<p>I file generati diventano così output di build che si può revisionare. Le regole condivise hanno un posto esplicito e ogni traduzione ha un punto preciso nell’implementazione.</p>
<h2>Un piccolo esempio</h2>
<p>Il pacchetto npm si chiama <code>tenore-cli</code>; l’eseguibile è <code>tenore</code>. Richiede Node.js 20.12 o successivo.</p>
<pre><code class="language-sh">pnpm add -g tenore-cli
tenore init
</code></pre>
<p>In un terminale, <code>tenore init</code> ora apre una procedura guidata. Rileva la configurazione esistente degli agenti e permette di scegliere cosa importare e per quali agenti generare i file. Propone anche di aggiornare <code>.gitignore</code> e registrare server MCP per memoria condivisa e accesso al web.</p>
<p>La procedura mostra un’anteprima della sincronizzazione prima di chiedere conferma. Non scrive nulla finché non confermi. Alla fine stampa i comandi equivalenti, così la configurazione può essere ripetuta in uno script.</p>
<p>Per una configurazione automatica, <code>tenore init --yes</code> accetta i valori predefiniti della procedura, anche senza un terminale. Altri flag, oppure una shell non interattiva senza <code>--yes</code>, usano il normale flusso a comandi. Per esempio, <code>tenore init --targets claude,codex</code> imposta gli agenti per cui generare i file.</p>
<p>I sorgenti generati restano modificabili. Dopo aver aggiornato <code>.agents/AGENTS.md</code>, un <code>.agents/policy.md</code> minimo potrebbe essere così:</p>
<pre><code class="language-yaml">---
targets: [claude, codex]
permissions:
  default: ask
  allow:
    - shell: &quot;pnpm test*&quot;
  ask:
    - shell: &quot;git push*&quot;
---
</code></pre>
<p>Sono pattern di comandi: <code>pnpm test*</code> corrisponde anche ai comandi con quel prefisso, quindi il pattern dovrebbe riflettere quello che vuoi davvero consentire.</p>
<p>Quando cambi i sorgenti dopo la configurazione iniziale, controlla le modifiche generate prima di applicarle:</p>
<pre><code class="language-sh">tenore diff
tenore sync
</code></pre>
<p>Quel passaggio di revisione conta. Un compilatore di configurazioni è utile solo se riesci a comprenderne l’output, soprattutto quando quell’output controlla i permessi.</p>
<p>Anche la configurazione esistente può essere il punto di partenza. Per un repository già configurato per Claude Code:</p>
<pre><code class="language-sh">tenore init --import claude
tenore diff
tenore sync
</code></pre>
<p>L’importazione offre un percorso di migrazione senza trascrivere tutto a mano nella nuova struttura.</p>
<h2>Regole condivise, contesto locale</h2>
<p>La configurazione ha tre ambiti: globale, repository e locale. Vengono uniti in quest’ordine.</p>
<p>I sorgenti globali vivono in <code>~/.agents/</code>, quelli del repository in <code>.agents/</code> e quelli specifici della macchina in <code>.agents/local/</code>. L’inizializzazione aggiunge l’ambito locale alle regole di esclusione di Git. La configurazione globale viene inclusa esplicitamente con <code>--global</code>.</p>
<p><code>tenore init --global</code> porta la stessa procedura guidata nella configurazione personale. Può importare le impostazioni globali esistenti degli agenti in <code>~/.agents/</code> e mostra il diff completo prima di scrivere le modifiche.</p>
<p>Le regole di unione distinguono i diversi tipi di dati. Istruzioni e memoria vengono combinate nell’ordine degli ambiti. Le liste vengono deduplicate. Le impostazioni scalari prendono generalmente il valore dell’ambito più ristretto.</p>
<p>I permessi richiedono una gestione più rigorosa: deny prevale su ask, che prevale su allow. Un allow a livello di repository non può annullare un deny globale. Le regole scartate durante l’unione producono avvisi.</p>
<p>Questo permette a un progetto di aggiungere contesto mantenendo le restrizioni definite in un ambito più ampio.</p>
<h2>Memoria condivisa e accesso al web</h2>
<p>I file di memoria ora possono essere letti e aggiornati attraverso il server MCP di Tenore. Basta registrarlo una volta in <code>.agents/policy.md</code>:</p>
<pre><code class="language-yaml">mcp:
  tenore-memory:
    command: npx
    args: [&quot;-y&quot;, &quot;tenore-cli&quot;, &quot;mcp&quot;]
</code></pre>
<p>Dopo <code>tenore sync</code>, ogni agente selezionato riceve la configurazione del server. Espone strumenti per elencare, leggere, cercare e scrivere gli argomenti di memoria, mantenendo le note persistenti nella stessa directory condivisa. Le scritture sono limitate alle directory di memoria. Quando un agente crea un nuovo argomento, esegui di nuovo <code>tenore sync</code> per includerlo nei file generati.</p>
<p>L’accesso al web può seguire un approccio simile. Tenore permette di dichiarare una volta un server MCP web e tradurne la configurazione per ogni agente. L’esempio documentato usa <a href="https://github.com/AlbertoBarrago/telemaco">Telemaco</a>, ma si può usare un altro server MCP web o browser.</p>
<p>Qui conta una distinzione: <code>network: none</code> disabilita l’accesso web nativo degli agenti, mentre i server MCP restano separati. L’accesso attraverso quei server è governato da regole esplicite sui permessi MCP. Questo permette di usare un server web condiviso chiedendo conferma per i suoi strumenti.</p>
<h2>Anche i file generati vanno protetti</h2>
<p>Le persone modificano i file direttamente. Anche gli strumenti. Un generatore deve tenerne conto prima di sovrascrivere una configurazione esistente.</p>
<p>Tenore registra gli hash degli artefatti generati in <code>.agents/.lock</code>. Se un file generato cambia dopo una sincronizzazione, quella successiva rileva la divergenza e lo salta. I file esistenti che Tenore non gestisce vengono trattati come conflitti finché non vengono importati.</p>
<p>Per la CI c’è:</p>
<pre><code class="language-sh">tenore check
</code></pre>
<p>Termina con esito negativo in presenza di sorgenti non validi, divergenze, conflitti o modifiche generate ancora da applicare. La coerenza della configurazione ha così un controllo accanto al resto delle verifiche del repository.</p>
<p>Se smetti di usare un agente come target, Tenore segnala i suoi vecchi file generati come orfani e li mantiene per default. <code>tenore sync --prune</code> li rimuove solo se non sono stati modificati.</p>
<h2>Dove la portabilità si complica</h2>
<p>Gli adapter attuali coprono Claude Code, Codex CLI e Antigravity, ma i loro modelli di permessi sono diversi. Un formato sorgente comune non può far sparire quelle differenze.</p>
<p>La policy documentata di Tenore è produrre un mapping più restrittivo con un avviso quando non è disponibile una traduzione esatta. Alcune funzionalità richiedono una gestione esplicita: i mapping del filesystem di Codex richiedono l’attivazione dei profili di permessi, mentre i permessi di Antigravity vengono configurati nell’ambito utente.</p>
<p>Questi limiti fanno parte della revisione della configurazione generata. Le istruzioni condivise non possono nemmeno garantire comportamenti identici degli agenti; rendono coerenti e più facili da mantenere le regole desiderate.</p>
<p>Il progetto è ancora in corso. La misura utile è capire se cambiare una regola diventa più facile da controllare e trasferire tra gli strumenti che usi.</p>
<p>Tenore è scritto in TypeScript e pubblicato con licenza MIT. Il <a href="https://github.com/AlbertoBarrago/tenore">repository</a> contiene sorgenti e istruzioni di configurazione; il <a href="https://github.com/AlbertoBarrago/tenore/blob/main/docs/mapping.md">riferimento sui mapping</a> documenta le decisioni di traduzione. Puoi installarlo da <a href="https://www.npmjs.com/package/tenore-cli">npm</a>.</p>
`,si=Object.freeze(Object.defineProperty({__proto__:null,html:ri,meta:ai},Symbol.toStringTag,{value:"Module"})),li={title:"L’illusione delle skill: perché partire da zero batte i prompt AI preconfezionati",date:"2026-10-05",tags:["opinion","ai","agents","architecture","engineering"],label:"traduzione AI da un testo scritto dall’autore"},ci=`<p>Negli ultimi diciotto mesi, un’illusione rassicurante ha invaso gli strumenti AI: la convinzione che i grandi modelli linguistici abbiano bisogno di “skill”.</p>
<p>Le vedi ovunque. Skill, persona, pacchetti per agenti, directory di prompt specializzati. Vengono vendute come formule segrete o condivise in repository GitHub con migliaia di stelle: “l’architetto React senior definitivo”, “la persona per le migrazioni cloud”, “il toolkit di refactoring Go per la produzione”. Le persone scaricano cartelle di file Markdown, le inseriscono nella configurazione dell’agente e si convincono di aver appena aggiunto al modello vent’anni di esperienza nel settore.</p>
<p>È fumo negli occhi. Anzi, è peggio. Nel migliore dei casi, le skill preconfezionate sono peso morto nella finestra di contesto. Nel peggiore, peggiorano attivamente il ragionamento, inquinano il meccanismo di attenzione e rovinano l’output.</p>
<p>Le skill non fanno nulla. Partire da una pagina bianca le batte ogni volta.</p>
<h2>Il telefono senza fili semantico</h2>
<p>Quando inserisci una skill di terze parti nel ciclo del tuo agente, non stai dando più conoscenza al modello. Stai rinunciando alla fedeltà semantica. Stai lasciando che uno sconosciuto anonimo decida come il modello debba interpretare la tua intenzione.</p>
<p>Considera cosa succede quando chiedi a un modello di frontiera di fare qualcosa di concreto:</p>
<blockquote>
<p>“Rendi deterministica questa macchina a stati e rimuovi tutte le mutazioni implicite.”</p>
</blockquote>
<p>Con un contesto pulito, il modello dedica tutta la propria attenzione alla tua codebase e al tuo vincolo esatto. Ogni token di ragionamento va nell’analisi delle strutture dati, delle transizioni di stato e delle invarianti.</p>
<p>Ora immagina di far passare la stessa istruzione attraverso una tipica “skill di architettura esperta”. Prima ancora che il modello tocchi il codice, millecinquecento token di dogmi preconfezionati vengono spinti nel contesto: regole generiche di programmazione difensiva, convenzioni obbligatorie di boilerplate, consigli per tenere le funzioni sotto le venti righe, pattern enterprise astratti e tre istruzioni separate su come strutturare le spiegazioni.</p>
<p>A quel punto il modello non sta più risolvendo il tuo problema. Sta giocando al telefono senza fili.</p>
<p>Invece di scrivere codice deterministico, è impegnato a bilanciare il tuo prompt con le fissazioni di qualcun altro. Introduce classi wrapper inutili perché la skill gli ha detto di essere modulare. Divide una logica pulita in quattro file perché la skill ha prescritto la separazione delle responsabilità. Si inventa casi limite che non esistono nel tuo dominio perché la skill gli ha detto di essere prudente.</p>
<p>Non hai ottenuto un risultato migliore. Hai ottenuto le opinioni di qualcun altro che intralciano la tua macchina.</p>
<h2>L’harness e la skill</h2>
<p>Chi vende e colleziona skill sta confondendo due cose completamente diverse: l’harness e il prompt.</p>
<p>L’harness di un agente è qualcosa di reale. È il ciclo di esecuzione:</p>
<ul>
<li>Dà al modello accesso al filesystem.</li>
<li>Fornisce una shell in cui eseguire comandi.</li>
<li>Esegue il compilatore, la suite di test e il linter.</li>
<li>Cattura stderr e restituisce il codice di uscita.</li>
</ul>
<p>L’harness non dice al modello cosa pensare. Fornisce un ciclo di riscontro con la realtà. Quando un modello scrive codice sbagliato in un buon harness, il compilatore protesta, i test falliscono e il modello legge la traccia per correggersi. È oggettivo. È verificato.</p>
<p>Una skill non fa niente di tutto questo. È solo testo statico. È qualcuno che scrive “ricordati di gestire gli errori in modo robusto” in un file Markdown. Dà al modello zero nuove capacità, zero meccanismi di riscontro e zero validazione.</p>
<p>Un modello di frontiera dentro un harness essenziale è un ingegnere con un terminale funzionante. Un modello caricato con venti skill è lo stesso ingegnere costretto a lavorare mentre qualcuno gli recita un manuale generico nell’orecchio.</p>
<h2>Cosa ci dicono davvero i benchmark</h2>
<p>Non è solo una preferenza personale. Ogni dato serio del 2025 e del 2026 va nella stessa direzione.</p>
<p>Guarda le classifiche SWE-bench e gli strumenti che producono davvero codice funzionante: Claude Code, Aider e SWE-agent. Nessuno si basa su librerie di persona di dominio preconfezionate. Non hanno una “persona Rust” o una “skill Django”. Eseguono cicli semplici e stretti intorno a primitive di base: leggere un file, modificarlo, eseguire un comando bash, controllare il diff.</p>
<p>La prova più significativa è arrivata da Princeton e Stanford con mini-swe-agent. Hanno costruito un agente di coding completo in circa cento righe di Python. Nessun framework complesso per agenti, nessun instradamento di persona, nessun modulo di skill. Solo un ciclo di base che dà al modello accesso diretto ai comandi bash. Quello script di cento righe ha superato il settanta per cento su SWE-bench Verified, rivaleggiando con enormi framework modulari.</p>
<p>Valutazioni recenti su SWE-bench Pro e Verified mostrano che cambiare l’architettura dell’harness può spostare le prestazioni di oltre ventidue punti percentuali con lo stesso identico modello. Nel frattempo, passare tra i migliori modelli di frontiera sullo stesso harness spesso cambia il risultato di meno dell’uno per cento. L’harness fa la differenza. Le skill preconfezionate non la fanno affatto.</p>
<p>Nel proprio lavoro di ricerca sulla costruzione di agenti efficaci, Anthropic è arrivata alla stessa conclusione: mantenere semplici le architetture degli agenti. Appena introduci instradamenti complessi di persona, dibattiti tra agenti e astrazioni rigide dei prompt, i tassi di fallimento schizzano in alto.</p>
<p>Poi c’è <em>The Bitter Lesson</em> di Rich Sutton: la lezione più grande della storia dell’AI è che i metodi generali che sfruttano il calcolo battono costantemente le euristiche progettate dagli esseri umani. La conoscenza costruita a mano perde sempre. Le skill preconfezionate non sono altro che euristiche artigianali che fingono di essere software.</p>
<h2>Deterioramento del contesto ed economia dell’attenzione</h2>
<p>Ogni token nel prompt di sistema ha un costo. Non solo economico, ma cognitivo.</p>
<p>Nel luglio 2025, Chroma Research ha pubblicato il proprio studio su Context Rot, valutando diciotto modelli di frontiera con contesti di lunghezza crescente. I risultati erano netti: ogni modello subisce un peggioramento delle prestazioni e bruschi cali di accuratezza molto prima di raggiungere la finestra di contesto dichiarata. L’attenzione si diluisce mentre il prompt cresce.</p>
<p>All’inizio del 2026, LOCA-bench ha confermato la stessa realtà per gli agenti autonomi: accumulare istruzioni, cronologia dello stato e linee guida ridondanti causa deviazioni catastrofiche dal compito.</p>
<p>Quando riempi il prompt con centinaia di righe di istruzioni preconfezionate, succedono due cose:</p>
<ol>
<li><strong>Deriva delle istruzioni:</strong> il modello deve trovare un compromesso tra vincoli negativi in conflitto. Se la tua skill dice “usa sempre pattern funzionali” e la codebase usa una macchina a stati a oggetti, il modello spreca token di ragionamento per risolvere una contraddizione artificiale.</li>
<li><strong>Perdita di sfumature:</strong> quando il contesto è pulito, i vincoli sottili del tuo prompt arrivano al modello con il massimo peso. Quando il contesto è sommerso dal boilerplate, quei vincoli vengono appiattiti.</li>
</ol>
<p>Partire da zero ti dà una risposta immediata al primo token, caching affidabile dei prompt e nessun inquinamento del contesto. Il modello risponde a quello che dici tu, non a quello che qualcun altro ha detto sei mesi fa.</p>
<h2>Smetti di comprare le parole degli altri</h2>
<p>L’impulso a collezionare skill nasce da un fraintendimento di cosa sia davvero programmare con l’AI.</p>
<p>Se sai cosa stai costruendo, non ti serve il prompt di qualcun altro. Ti serve la tua conoscenza del dominio: le tue invarianti, i tuoi schemi, le tue suite di test e i tuoi vincoli. Scrivi la specifica, esegui l’harness, revisioni il diff.</p>
<p>E se non sai cosa stai costruendo, nessuna skill preconfezionata da “Senior Architect” lo saprà al posto tuo. Ti darà solo mediocrità generica e sicura di sé, al triplo del costo in token.</p>
<p>Lascia perdere i pacchetti di skill. Tieni l’harness essenziale, il terminale aperto e parti da una pagina bianca.</p>
<h2>Fonti</h2>
<ul>
<li><a href="https://research.trychroma.com/context-rot">Chroma Research, Context Rot: How Increasing Input Tokens Impacts LLM Performance (luglio 2025)</a></li>
<li><a href="https://arxiv.org/abs/2602.04948">LOCA-bench: Benchmarking Language Agents Under Controllable and Extreme Context Growth (febbraio 2026)</a></li>
<li><a href="https://github.com/SWE-agent/mini-swe-agent">Princeton NLP e Stanford, mini-swe-agent: A radically simple coding agent in 100 lines of Python</a></li>
<li><a href="https://www.anthropic.com/research/building-effective-agents">Anthropic, Building Effective Agents (dicembre 2024)</a></li>
<li><a href="https://www.swebench.com/">SWE-bench, Software Engineering Benchmark for Language Models</a></li>
<li><a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">Rich Sutton, The Bitter Lesson (2019)</a></li>
<li><a href="https://aider.chat/">Aider, AI pair programming in your terminal</a></li>
</ul>
`,di=Object.freeze(Object.defineProperty({__proto__:null,html:ci,meta:li},Symbol.toStringTag,{value:"Module"})),pi={title:"I token non fanno il pilota",date:"2026-10-15",tags:["ai-agents","tokens","software-development"],label:"Testo assistito da AI, rivisto dall’autore"},ui=`<p>Non penso che valutare il numero di token spesi sia un valido parametro per stabilire il buon uso degli agenti. Nei gruppi di lavoro quei numeri possono diventare una sorta di ranking, dove chi ne consuma di più sta in cima alla piramide e vince. Ma ahimè, non è così. E se scrivo quest’articolo è per dare una chiave di lettura differente.</p>
<h2>La corsa</h2>
<p>Se prendiamo a modello una corsa d’auto, non è chi consuma le gomme o il carburante più rapidamente ad aggiudicarsi il podio, per ragioni sia fisiche che logiche.</p>
<p>Man mano che il pilota acquisisce esperienza di guida in pista, impara a conoscere l’aderenza degli pneumatici, la presa sull’asfalto e i limiti della macchina. Da lì si passa pure al controllo del gas: non puoi sempre andare al massimo, pena spiaccicarti contro qualche bordo della pista.</p>
<p>Con gli agenti succede qualcosa di simile. Puoi continuare a dare gas, aggiungere richieste, far girare strumenti e consumare token. Questo, da solo, non dice quanto ti stai avvicinando al risultato.</p>
<h2>Benzina e aderenza</h2>
<p>Quindi potremmo dire che i token sono la benzina e il contesto sono le gomme.</p>
<p>Il contesto dà aderenza al problema: sapere dove mettere le mani, quali vincoli rispettare e cosa significa aver finito. Se manca questa presa, puoi avere tutto il carburante che vuoi e passare il tempo a correggere la traiettoria. E aggiungere contesto a caso non risolve necessariamente il problema: serve quello pertinente.</p>
<p>Neppure consumare meno ti rende automaticamente un pilota migliore. Se risparmi benzina ma non arrivi al traguardo, c’è poco da festeggiare.</p>
<h2>Prima del podio</h2>
<p>Prima di guardare quanti token sono stati spesi, guarderei cosa è stato ottenuto, se funziona e quanto lavoro è servito per verificarlo e correggerlo. I consumi restano utili per capire la spesa. Per capire quanto siamo diventati bravi, da soli raccontano ben poco.</p>
<p>Da qui lascio a te, lettore, tutte le speculazioni di sorta. Ma prima di salire sul podio, accertiamoci almeno di aver concluso la gara.</p>
`,hi=Object.freeze(Object.defineProperty({__proto__:null,html:ui,meta:pi},Symbol.toStringTag,{value:"Module"})),mi={title:"wir: What Is Running, uno strumento per ispezionare porte e processi scritto in C",date:"2025-12-30",tags:["c","systems-programming","cli","opensource"],label:"traduzione AI da un testo scritto dall’autore"},gi=`<p>Ho recentemente pubblicato <strong>wir</strong> (What Is Running), uno strumento da riga di comando scritto in C per controllare cosa gira su determinate porte e ottenere informazioni dettagliate sui processi. Un progetto nato da un’esigenza pratica, che si è trasformato in un’occasione per esplorare la programmazione di sistema in C.</p>
<h2>Il problema</h2>
<p>Quante volte hai trovato una porta occupata senza sapere quale processo la stesse usando? O hai dovuto risalire la gerarchia di un processo per capire chi avesse avviato cosa? Di solito ricorriamo a combinazioni di <code>lsof</code>, <code>netstat</code> e <code>ps</code>, ma perché non avere tutto in un solo comando?</p>
<h2>La soluzione</h2>
<p><code>wir</code> è uno strumento multipiattaforma (macOS e Linux) che permette di:</p>
<ul>
<li>Scoprire quale processo usa una determinata porta</li>
<li>Ottenere informazioni dettagliate su un PID</li>
<li>Visualizzare l’albero completo degli antenati di un processo</li>
<li>Elencare tutti i processi in esecuzione</li>
<li>Vedere le variabili d’ambiente di un processo</li>
<li>Produrre output normale, breve, JSON o ad albero</li>
<li>Ricevere avvisi di sicurezza per configurazioni potenzialmente rischiose</li>
</ul>
<h2>Esempi pratici</h2>
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
<h2>L’architettura</h2>
<p>Il progetto è strutturato in modo modulare:</p>
<ul>
<li><strong>Livello di astrazione della piattaforma</strong>: gestisce le differenze tra Linux (parsing di <code>/proc</code>) e macOS (<code>libproc</code> e <code>sysctl</code>)</li>
<li><strong>Formattazione dell’output</strong>: supporta diverse modalità di visualizzazione senza duplicare la logica</li>
<li><strong>Gestione coerente degli errori</strong>: ogni allocazione viene controllata, ogni risorsa viene liberata</li>
<li><strong>Gestione rigorosa della memoria</strong>: niente leak, niente comportamento indefinito</li>
</ul>
<h2>Cosa ho imparato</h2>
<p>Scrivere <code>wir</code> è stata un’ottima occasione per esercitare concetti fondamentali:</p>
<ol>
<li><strong>Programmazione di sistema</strong>: interazione con <code>/proc</code>, chiamate di sistema, gestione dei processi</li>
<li><strong>Sviluppo multipiattaforma</strong>: compilazione condizionale e API diverse per ogni sistema operativo</li>
<li><strong>Sicurezza della memoria in C</strong>: gestione manuale della memoria senza garbage collector</li>
<li><strong>Sistemi di build</strong>: Makefile con rilevamento automatico della piattaforma</li>
<li><strong>Progettazione delle API</strong>: un’interfaccia pulita e componibile</li>
</ol>
<h2>Non memorizzo i comandi</h2>
<p>Il mio approccio è questo: non mi interessa memorizzare i comandi esatti di <code>lsof</code> o <code>netstat</code>. Preferisco capire l’architettura sottostante e costruire strumenti che risolvano il problema in modo più elegante. <code>wir</code> non è solo un wrapper: è un’astrazione che nasconde la complessità delle differenze tra sistemi operativi.</p>
<h2>Il futuro</h2>
<p>Il progetto si presta a diverse estensioni:</p>
<ul>
<li>Supporto alle porte UDP</li>
<li>Filtri avanzati sui processi</li>
<li>Supporto ad altri sistemi operativi (BSD, ecc.)</li>
<li>Ottimizzazioni delle prestazioni</li>
<li>Altri formati di output</li>
</ul>
<h2>Provalo</h2>
<p><a href="https://github.com/AlbertoBarrago/wir">wir</a></p>
<p>È un progetto per imparare, quindi sentiti libero di sperimentare ed estenderlo. Costruire strumenti di sistema in C è un ottimo modo per capire cosa succede davvero sotto il cofano.</p>
<pre><code class="language-bash"># Build and install
brew tap AlbertoBarrago/tap
brew install wir

# Start using it
wir --port 3000
</code></pre>
`,fi=Object.freeze(Object.defineProperty({__proto__:null,html:gi,meta:mi},Symbol.toStringTag,{value:"Module"})),bi={title:"A Small Toolbox for Claude Code",date:"2026-10-13",tags:["ai-agents","claude-code","developer-tools","opensource"],label:"AI-assisted, human-reviewed"},vi=`<p>When I work with a coding agent, writing code is only part of the job.</p>
<p>Before changing a repository, I want to understand what the change might affect. When I use a library, I want to read its documentation, especially if I don&#39;t know it well. And before calling the work done, I want a concrete way to verify it.</p>
<p>Those needs led me to build three projects: <strong>Themis, Serval, and Telemaco</strong>.</p>
<p>I developed them separately, but I think they make sense together. Each addresses a part of the work I ask an agent to do.</p>
<p>The idea is simple: install the tools, make them available to Claude Code, and tell it when to use each one.</p>
<h2>Themis: defining what “done” means</h2>
<p>A request in natural language leaves room for interpretation. Even working code can solve a different problem from the one I had in mind.</p>
<p>Themis starts with a specification containing decisions and acceptance criteria. It organizes the agents&#39; work around a verification loop. I approve the plan and the acceptance tests; the tests are then locked, and a verifier checks the result.</p>
<p>Claude Code is currently the supported agent adapter. Themis drives its invocations and runs the verification itself. The project is still in early development and, for now, installs from source.</p>
<p>Source: <a href="https://github.com/AlbertoBarrago/themis">github.com/AlbertoBarrago/themis</a>.</p>
<h2>Serval: understanding the impact of a change</h2>
<p>Before touching a file, the question is: what depends on this code?</p>
<p>Serval analyzes a repository locally, combining dependencies, Git history, CI configuration, and rules for critical areas. It produces a risk estimate along with the signals behind it.</p>
<p>I can ask Claude to use that analysis to identify modules worth reading and checks worth running. The score is an indicator: it doesn&#39;t guarantee that a change is safe or predict a failure with certainty. It helps decide where to pay attention.</p>
<p>Source: <a href="https://github.com/AlbertoBarrago/serval">github.com/AlbertoBarrago/serval</a>.</p>
<h2>Telemaco: consulting the web while working</h2>
<p>When a change depends on a library&#39;s behavior or an external API, I want the agent to consult the sources.</p>
<p>Telemaco is a headless browser engine in Rust, built for scraping and AI agents. It offers a CLI and an MCP server for accessing pages and extracting their contents.</p>
<p>In this workflow, it can help Claude retrieve documentation and information from the web. The agent still needs to evaluate that information, cite its sources, and distinguish what it verified from what it inferred.</p>
<p>Source: <a href="https://github.com/AlbertoBarrago/telemaco">github.com/AlbertoBarrago/telemaco</a>.</p>
<h2>One request, three tools</h2>
<p>These are separate tools, installed and configured individually. Once they are available, the entry point can be an ordinary request to Claude Code.</p>
<p>For example, this is the kind of instruction I would give it:</p>
<blockquote>
<p>I need to add authentication token renewal.</p>
<p>First, use Serval to analyze the affected files and their dependents. If you need information about the libraries involved, use Telemaco to consult the official documentation and report your sources.</p>
<p>Use Themis to prepare the specification, plan, and acceptance tests. Stop at the required approval gates. After my approval, execute the work through its verification loop.</p>
<p>At the end, show me the diff, the verification results, and any remaining limitations.</p>
</blockquote>
<p>This is an example of how I want to compose the tools. To make the workflow repeatable, the agents doing the work need both the instructions and access to the tools. Installing a binary alone doesn&#39;t establish that workflow.</p>
<p>Themis owns the execution and verification loop. Serval and Telemaco supply information that can inform the specification, the plan, and the implementation. Their use needs to be reflected in the relevant agent instructions.</p>
<h2>Why put them together?</h2>
<p>As individual projects, they describe three different problems. Together, they describe a way of working: understand the impact, consult the sources, define the expected result, and verify it.</p>
<p>I like this composition because each tool keeps a clear responsibility. I can use them together or pick just the one I need.</p>
<p>That&#39;s the toolbox I want to build around Claude Code: concrete tools, precise instructions for using them, and visible decisions and checks behind the work.</p>
`,yi=Object.freeze(Object.defineProperty({__proto__:null,html:vi,meta:bi},Symbol.toStringTag,{value:"Module"})),wi={title:"Development Is Dead",date:"2026-09-22",tags:["opinion","ai","career","italy","craft"],label:"human-written, AI-reviewed"},ki=`<p>I started in 2011, freelance until 2014, and I never left. Fifteen years. Long enough to have opinions, short enough that whoever started in 1995 gets to laugh at mine.</p>
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
`,Si=Object.freeze(Object.defineProperty({__proto__:null,html:ki,meta:wi},Symbol.toStringTag,{value:"Module"})),Ii={title:"GitLab Alert: the GitLab work that involves you, in your menu bar",date:"2026-09-16",tags:["swift","macos","gitlab","menubar","opensource"],label:"human-written, AI-reviewed"},Ai=`<p><strong>GitLab Alert</strong> is a macOS menu bar app that keeps the GitLab work needing your attention out of a browser tab and in the corner of your screen: merge requests waiting on your review, merge requests you authored, issues assigned to you, and the pipeline state of the projects you watch. No Dock icon, no window to manage, no tab to forget.</p>
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
`,zi=Object.freeze(Object.defineProperty({__proto__:null,html:Ai,meta:Ii},Symbol.toStringTag,{value:"Module"})),Ti={title:"Iris: a mail and calendar app for the Mac, in Rust",date:"2026-10-08",tags:["rust","macos","email","calendar","opensource"],label:"human-written, AI-reviewed"},xi=`<p>I wanted a mail and calendar app for my Mac that keeps my mail on my own computer, talks to Gmail and Microsoft directly, and is open source. That app is <strong>Iris</strong>.</p>
<h2>What Iris does</h2>
<p>Iris reads Gmail, Microsoft accounts (Outlook.com, Hotmail, Live and Microsoft 365) and any IMAP and SMTP account, and finds the server settings for you. It shows your accounts in one inbox or one at a time, with calendars and contacts next to your mail. It signs and encrypts mail with OpenPGP and S/MIME.</p>
<p>Mail and calendar data stay on your computer, and Iris has no server of its own. Gmail talks to Google directly and Microsoft accounts talk to Microsoft Graph, so no other server sees your mail.</p>
<h2>Built for macOS</h2>
<p>The core is Rust: sync, the local store, search and the mail actions. On top of it Iris is moving to a native interface in SwiftUI and AppKit, so it behaves like a Mac app: the Keychain for passwords, the system&#39;s notifications, updates through Sparkle, the Dock badge.</p>
<h2>An assistant, if you want one</h2>
<p>Iris has an optional assistant. It stays off until you pick a model: Claude Code, an Anthropic key, or a model running on your own machine. It can summarize a conversation, find mail, draft a reply or clean up newsletters, and it asks before it acts on your mail.</p>
<h2>Where it is</h2>
<p>Iris is a project I build and use every day. The source is public on GitHub under the GPL, and the macOS builds are test builds while there is still work ahead. Iris started from the code of <a href="https://github.com/c9dev/penguin-mail">Penguin Mail</a>, under the same license.</p>
<h2>Join the waiting list</h2>
<p>Want to try Iris when there&#39;s a build ready for you? <a href="mailto:albertobarrago@gmail.com?subject=Iris%20waitlist%3A%20beam%20me%20in&body=Hi%20Alberto%2C%0D%0A%0D%0APlease%20add%20me%20to%20the%20Iris%20waiting%20list.%20I%27m%20ready%20to%20let%20a%20new%20client%20migrate%20into%20my%20inbox.%0D%0A%0D%0AName%3A%0D%0AmacOS%20version%3A%0D%0A%0D%0AThanks%21">Beam me onto the list</a> and I&#39;ll add you to the waiting list.</p>
<ul>
<li>Iris: <a href="https://albz.it/iris/">albz.it/iris</a></li>
<li>Source: <a href="https://github.com/AlbertoBarrago/iris">github.com/AlbertoBarrago/iris</a></li>
</ul>
`,Ci=Object.freeze(Object.defineProperty({__proto__:null,html:xi,meta:Ti},Symbol.toStringTag,{value:"Module"})),Li={title:"Iron Doctrine: building deterministic online multiplayer with a shared ECS engine",date:"2026-08-31",tags:["typescript","game-dev","multiplayer","ecs","pnpm"],label:"human-written, AI-reviewed"},Pi=`<p><strong>Iron Doctrine</strong> is a real-time strategy game I&#39;m building in a pnpm monorepo, with a deterministic ECS engine at its core and, as of this week, a working 1v1 online mode.</p>
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
`,qi=Object.freeze(Object.defineProperty({__proto__:null,html:Pi,meta:Li},Symbol.toStringTag,{value:"Module"})),Mi={title:"My first (and last?) forty years",date:"2026-09-29",tags:["opinion","life","freedom","career","italy"],label:"human-written, AI-reviewed"},_i=`<p>Tomorrow I turn forty.</p>
<p>Having reached this point in my life, after loving code enough to lose eyesight, relationships, and sanity over it… I find myself taking stock. Not so much technically as humanly.</p>
<h2>Eight hours</h2>
<p>Eight hours behind a monitor, to spend fewer than six on your own life.</p>
<p>Eight hours, when perhaps two would be enough these days to be “1000x,” as DHH puts it, starting with some basic knowledge.</p>
<h2>An act of will</h2>
<p>Freedom is a mental process, not just a word. Everyone lives within their own dimension of freedom. But deep down, I think few people actually experience it. Most of us recognise its outline through what’s missing.</p>
<p>An act of will is the only thing that accompanies real change. Change brings sacrifice, effort, discipline, and sometimes even asks you to become one with your own detachment.</p>
<p>There is no conclusion, no real sense to all this. But there is surely some meaning for whoever stops to read.</p>
<h2>The Italian reality</h2>
<p>Touching grass, retiring early… things that don’t really concern us Italians. Here, at best, you become a CTO and still earn less than some Italian minister’s bag carrier.</p>
<h2>Something positive, perhaps</h2>
<p>But there is something positive, I think, since the negative is clear enough.</p>
<p>We just have to find it.</p>
<p><em>Valete.</em></p>
`,Ei=Object.freeze(Object.defineProperty({__proto__:null,html:_i,meta:Mi},Symbol.toStringTag,{value:"Module"})),Oi={title:"Otelma: building a local LLM runtime from scratch",date:"2026-08-31",tags:["go","llm","llama-cpp","apple-silicon","ai"],label:"human-written, AI-reviewed"},Ri=`<p><strong>Otelma</strong> is a local LLM inference runtime I&#39;m building in Go.</p>
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
`,$i=Object.freeze(Object.defineProperty({__proto__:null,html:Ri,meta:Oi},Symbol.toStringTag,{value:"Module"})),Di={title:"I Built a CLI to Answer One Question: What Will This Change Break?",date:"2026-08-27",tags:["programming","devops","go","opensource"],label:"human-written, AI-reviewed"},ji=`<p>We&#39;ve all been there.</p>
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
`,Bi=Object.freeze(Object.defineProperty({__proto__:null,html:ji,meta:Di},Symbol.toStringTag,{value:"Module"})),Gi={title:"Telemaco: a headless browser engine in Rust, without the Chromium",date:"2026-09-04",tags:["rust","browser","scraping","ai-agents","cdp","sideprojects"],label:"human-written, AI-reviewed"},Ni=`<p><strong>Telemaco</strong> is a headless browser engine I&#39;ve been building in Rust. It runs real JavaScript through V8, keeps a real DOM tree, owns its own layout and paint pipeline, and speaks the Chrome DevTools Protocol, so Puppeteer and Playwright connect to it out of the box. No Chromium, no WebView, no 300 MB download. A 70 MB binary that starts instantly and loads a page in ~85 ms.</p>
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
`,Hi=Object.freeze(Object.defineProperty({__proto__:null,html:Ni,meta:Gi},Symbol.toStringTag,{value:"Module"})),Ui={title:"Tenore: Stop Maintaining the Same Agent Configuration Three Times",date:"2026-10-01",tags:["programming","ai-agents","developer-tools","typescript","opensource"],label:"human-written, AI-reviewed"},Wi=`<p>I built <strong>Tenore</strong>, a CLI that takes a shared configuration for AI coding agents and compiles it into their native files.</p>
<p>The problem is ordinary maintenance. Claude Code, Codex CLI and Antigravity have their own places for instructions, permissions and MCP servers. Once you use more than one, the same project rules start appearing in several files.</p>
<p>Change the test command, add a server, tighten a permission: every copy needs attention. Eventually, one gets missed. Switching agents then means checking whether the configuration still says what you intended.</p>
<p>Tenore gives that configuration a source of truth: a directory called <code>.agents/</code>.</p>
<h2>Configuration as source code</h2>
<p>The idea is to keep instructions in Markdown, structured policy in YAML frontmatter, and generate the files each agent expects.</p>
<p>A repository can start with:</p>
<pre><code class="language-text">.agents/
  AGENTS.md
  policy.md
  memory/
    architecture.md
</code></pre>
<p><code>AGENTS.md</code> contains the prose: how to work in the repository, which conventions matter, what deserves extra care. <code>policy.md</code> describes permissions, MCP servers and target-specific overrides. Memory files hold persistent notes by topic.</p>
<p>Tenore parses those sources, merges their scopes, and passes the result to each target adapter. The adapters produce native configuration, such as <code>CLAUDE.md</code> or <code>.codex/config.toml</code>.</p>
<p>That makes the generated files reviewable build output. The shared rules have an explicit home, and each translation has a place in the implementation.</p>
<h2>A small example</h2>
<p>The npm package is called <code>tenore-cli</code>; the executable is <code>tenore</code>. It requires Node.js 20.12 or later.</p>
<pre><code class="language-sh">pnpm add -g tenore-cli
tenore init
</code></pre>
<p>In a terminal, <code>tenore init</code> now opens a setup wizard. It detects existing agent configuration and lets you choose what to import and which agents to generate files for. It also offers to update <code>.gitignore</code> and register MCP servers for shared memory and web access.</p>
<p>The wizard previews the sync before asking for confirmation. Nothing is written until you confirm. At the end, it prints the equivalent commands so the setup can be repeated in a script.</p>
<p>For an unattended setup, <code>tenore init --yes</code> accepts the wizard&#39;s defaults, even without a terminal. Other flags, or a non-interactive shell without <code>--yes</code>, use the plain command flow. For example, <code>tenore init --targets claude,codex</code> sets the agents to generate files for.</p>
<p>The generated sources remain editable. After updating <code>.agents/AGENTS.md</code>, a minimal <code>.agents/policy.md</code> might look like this:</p>
<pre><code class="language-yaml">---
targets: [claude, codex]
permissions:
  default: ask
  allow:
    - shell: &quot;pnpm test*&quot;
  ask:
    - shell: &quot;git push*&quot;
---
</code></pre>
<p>Those are command patterns: <code>pnpm test*</code> also matches commands with that prefix, so the pattern should reflect what you actually want to permit.</p>
<p>When changing the sources after setup, inspect the generated changes before applying them:</p>
<pre><code class="language-sh">tenore diff
tenore sync
</code></pre>
<p>That review step matters. A configuration compiler is useful only if you can understand its output, particularly when the output controls permissions.</p>
<p>Existing configuration can also be the starting point. For a repository already configured for Claude Code:</p>
<pre><code class="language-sh">tenore init --import claude
tenore diff
tenore sync
</code></pre>
<p>Import provides a migration path without manually transcribing everything into the new layout.</p>
<h2>Shared rules, local context</h2>
<p>Configuration has three scopes: global, repository and local. They merge in that order.</p>
<p>Global sources live in <code>~/.agents/</code>, repository sources in <code>.agents/</code>, and machine-specific sources in <code>.agents/local/</code>. Initialization adds the local scope to Git&#39;s ignore rules. Global configuration is included explicitly with <code>--global</code>.</p>
<p><code>tenore init --global</code> brings the same wizard to your personal configuration. It can import existing global agent settings into <code>~/.agents/</code> and shows the full diff before writing changes.</p>
<p>The merge rules distinguish between kinds of data. Instructions and memory are combined in scope order. Lists are deduplicated. Scalar settings generally take the value from the narrowest scope.</p>
<p>Permissions need stricter handling: deny takes precedence over ask, which takes precedence over allow. A repository-level allow cannot undo a global deny. Rules discarded during that merge produce warnings.</p>
<p>This lets a project add context while preserving restrictions established in a broader scope.</p>
<h2>Shared memory and web access</h2>
<p>The memory files can now be read and updated through Tenore&#39;s own MCP server. Register it once in <code>.agents/policy.md</code>:</p>
<pre><code class="language-yaml">mcp:
  tenore-memory:
    command: npx
    args: [&quot;-y&quot;, &quot;tenore-cli&quot;, &quot;mcp&quot;]
</code></pre>
<p>After <code>tenore sync</code>, each selected agent gets the server configuration. It exposes tools to list, read, search and write memory topics, keeping persistent notes in the same shared directory. Writes are confined to the memory directories. When an agent creates a new topic, run <code>tenore sync</code> again to include it in the generated files.</p>
<p>Web access can follow a similar approach. Tenore supports declaring a web MCP server once and translating its configuration for each agent. The documented example uses <a href="https://github.com/AlbertoBarrago/telemaco">Telemaco</a>, but another web or browser MCP server can be used.</p>
<p>One distinction matters here: <code>network: none</code> disables the agents&#39; native web access, while MCP servers remain separate. Access through those servers is governed by explicit MCP permission rules. That makes it possible to use a shared web server with confirmation required for its tools.</p>
<h2>Generated files still need protection</h2>
<p>People edit files directly. Tools do too. A generator needs to account for that before writing over an existing setup.</p>
<p>Tenore records hashes of generated artifacts in <code>.agents/.lock</code>. If a generated file changes after a sync, the next sync detects drift and skips it. Existing files that Tenore does not own are treated as conflicts until imported.</p>
<p>For CI, there is:</p>
<pre><code class="language-sh">tenore check
</code></pre>
<p>It exits unsuccessfully on invalid sources, drift, conflicts or pending generated changes. That gives configuration consistency a check alongside the rest of the repository&#39;s validation.</p>
<p>If you stop targeting an agent, Tenore reports its old generated files as orphans and keeps them by default. <code>tenore sync --prune</code> removes those files only if they have not been modified.</p>
<h2>Where portability gets difficult</h2>
<p>The current adapters cover Claude Code, Codex CLI and Antigravity, but their permission models differ. A common source format cannot make those differences disappear.</p>
<p>Tenore&#39;s documented policy is to emit a more restrictive mapping with a warning when an exact translation is unavailable. Some capabilities need explicit handling: Codex filesystem mappings require opt-in permission profiles, while Antigravity permissions are configured at user scope.</p>
<p>These limitations belong in the review of the generated configuration. Shared instructions also cannot guarantee identical agent behavior; they make the intended rules consistent and easier to maintain.</p>
<p>The project is still a work in progress. The useful measure is whether changing one rule becomes easier to inspect and carry across the tools you use.</p>
<p>Tenore is written in TypeScript and released under the MIT license. The <a href="https://github.com/AlbertoBarrago/tenore">repository</a> contains the source and setup instructions; the <a href="https://github.com/AlbertoBarrago/tenore/blob/main/docs/mapping.md">mapping reference</a> documents translation decisions. You can install it from <a href="https://www.npmjs.com/package/tenore-cli">npm</a>.</p>
`,Fi=Object.freeze(Object.defineProperty({__proto__:null,html:Wi,meta:Ui},Symbol.toStringTag,{value:"Module"})),Vi={title:"The Skill Delusion: Why the Blank Slate Beats Packaged AI Prompts",date:"2026-10-05",tags:["opinion","ai","agents","architecture","engineering"],label:"human-written, AI-reviewed"},Yi=`<p>A comforting illusion has taken over AI tooling during the last eighteen months: the belief that large language models need &quot;skills.&quot;</p>
<p>You see them everywhere. Skills, personas, agent packages, specialized prompt directories. They are sold as secret sauces or shared in GitHub repositories with thousands of stars: &quot;the ultimate senior React architect,&quot; &quot;the cloud migration persona,&quot; &quot;the production Go refactoring toolkit.&quot; People download folders of markdown files, drop them into their agent config, and convince themselves they just upgraded their model with twenty years of domain expertise.</p>
<p>It is snake oil. In fact, it is worse than snake oil. In the best case, packaged skills are dead weight sitting in your context window. In the worst case, they actively degrade reasoning, pollute the attention mechanism, and ruin your output.</p>
<p>Skills do nothing. The blank canvas beats them every single time.</p>
<h2>The semantic telephone game</h2>
<p>When you inject a third-party skill into your agent loop, you are not giving the model more knowledge. You are surrendering semantic fidelity. You are letting an anonymous stranger decide how the model should interpret your intent.</p>
<p>Consider what happens when you ask a frontier model to do something concrete:</p>
<blockquote>
<p>&quot;Make this state machine deterministic and remove all implicit mutations.&quot;</p>
</blockquote>
<p>With a clean context, the model allocates its full attention budget to your codebase and your exact constraint. Every token of reasoning goes toward analyzing your data structures, your state transitions, and your invariants.</p>
<p>Now imagine running that same instruction through a typical &quot;expert architecture skill.&quot; Before the model even touches your code, fifteen hundred tokens of canned dogma get shoved into the context: generic defensive programming rules, mandatory boilerplate conventions, advice on keeping functions under twenty lines, abstract enterprise patterns, and three separate instructions on how to structure explanations.</p>
<p>Now the model is no longer solving your problem. It is playing a telephone game.</p>
<p>Instead of writing deterministic code, it is busy balancing your prompt against someone else&#39;s pet peeves. It introduces unnecessary wrapper classes because the skill told it to be modular. It splits clean logic across four files because the skill prescribed separation of concerns. It hallucinates edge cases that do not exist in your domain because the skill told it to be cautious.</p>
<p>You did not get a better result. You got someone else&#39;s opinions getting in the way of your machine.</p>
<h2>The harness versus the skill</h2>
<p>The people selling and collecting skills are confusing two completely different things: the harness and the prompt.</p>
<p>An agent harness is real. It is the execution loop:</p>
<ul>
<li>It gives the model access to the filesystem.</li>
<li>It provides a shell where commands can execute.</li>
<li>It runs the compiler, the test suite, and the linter.</li>
<li>It captures stderr and returns the exit code.</li>
</ul>
<p>The harness does not tell the model what to think. It provides a feedback loop against reality. When a model writes broken code inside a good harness, the compiler complains, the tests fail, and the model reads the trace to correct itself. That is objective. That is verified.</p>
<p>A skill does none of that. A skill is just static text. It is someone writing &quot;remember to write robust error handling&quot; in a markdown file. It gives the model zero new capabilities, zero feedback mechanisms, and zero validation.</p>
<p>A frontier model inside a lean harness is an engineer with a working terminal. A model loaded with twenty skills is that same engineer forced to work while someone recites a generic textbook into their ear.</p>
<h2>What the benchmarks actually tell us</h2>
<p>This is not just personal preference. Every serious data point from 2025 and 2026 points in the same direction.</p>
<p>Look at the SWE-bench leaderboards and the tools that actually ship working code: Claude Code, Aider, and SWE-agent. None of them rely on libraries of prepackaged domain personas. They do not have a &quot;Rust persona&quot; or a &quot;Django skill.&quot; They run simple, tight loops around basic primitives: read file, edit file, run bash command, inspect diff.</p>
<p>The most telling proof came from Princeton and Stanford with mini-swe-agent. They built a fully capable coding agent in roughly one hundred lines of Python. No complex agent frameworks, no persona routing, no skill modules. Just a basic loop giving the model direct access to bash commands. That hundred-line script hit over seventy percent on SWE-bench Verified, rivaling massive modular frameworks.</p>
<p>Recent evaluations on SWE-bench Pro and Verified show that swapping out the harness architecture can swing performance by more than twenty-two percentage points on the exact same model. Meanwhile, swapping between top-tier frontier models on the same harness often moves the needle by less than one percent. The harness is the differentiator. Prepackaged skills do not move the needle at all.</p>
<p>In their research paper on building effective agents, Anthropic arrived at the exact same conclusion: keep agent architectures simple. The moment you introduce complex persona routing, multi-agent debates, and rigid prompt abstractions, failure rates skyrocket.</p>
<p>Then there is Rich Sutton&#39;s <em>The Bitter Lesson</em>: the biggest lesson from AI history is that general methods leveraging compute consistently beat human-engineered heuristics. Handcrafted knowledge always loses. Packaged skills are nothing more than handcrafted heuristics pretending to be software.</p>
<h2>Context rot and attention economy</h2>
<p>Every token in your system prompt carries a cost. Not just financial cost, but cognitive cost.</p>
<p>In July 2025, Chroma Research published their study on Context Rot, evaluating eighteen frontier models across increasing context lengths. The findings were stark: every single model experiences performance degradation and hits sharp accuracy cliffs long before reaching its advertised context window. Attention gets diluted as the prompt grows.</p>
<p>In early 2026, LOCA-bench confirmed the same reality for autonomous agents: piling up instructions, state history, and redundant guidelines causes catastrophic task drift.</p>
<p>When you fill the prompt with hundreds of lines of canned instructions, two things happen:</p>
<ol>
<li><strong>Instruction drift:</strong> The model has to compromise between conflicting negative constraints. If your skill says &quot;always use functional patterns&quot; and your codebase uses an object-oriented state machine, the model wastes reasoning tokens resolving an artificial contradiction.</li>
<li><strong>Loss of nuance:</strong> When your context is clean, subtle constraints in your user prompt hit the model with maximum weight. When your context is drowned in boilerplate, those subtle constraints get averaged out.</li>
</ol>
<p>A blank slate gives you instantaneous time-to-first-token, reliable prompt caching, and zero context pollution. The model responds to what you say, not to what someone else said six months ago.</p>
<h2>Stop buying other people&#39;s words</h2>
<p>The urge to collect skills comes from a misunderstanding of what programming with AI actually is.</p>
<p>If you know what you are building, you do not need someone else&#39;s prompt. You need your own domain knowledge: your invariants, your schemas, your test suites, and your constraints. You write the specification, you run the harness, you review the diff.</p>
<p>And if you do not know what you are building, no prepackaged &quot;Senior Architect&quot; skill is going to know it for you. It will only give you confident, generic mediocrity at three times the token cost.</p>
<p>Ditch the skill packs. Keep the harness lean, keep the terminal open, and start from a blank canvas.</p>
<h2>Sources</h2>
<ul>
<li><a href="https://research.trychroma.com/context-rot">Chroma Research, Context Rot: How Increasing Input Tokens Impacts LLM Performance (July 2025)</a></li>
<li><a href="https://arxiv.org/abs/2602.04948">LOCA-bench: Benchmarking Language Agents Under Controllable and Extreme Context Growth (February 2026)</a></li>
<li><a href="https://github.com/SWE-agent/mini-swe-agent">Princeton NLP and Stanford, mini-swe-agent: A radically simple coding agent in 100 lines of Python</a></li>
<li><a href="https://www.anthropic.com/research/building-effective-agents">Anthropic, Building Effective Agents (December 2024)</a></li>
<li><a href="https://www.swebench.com/">SWE-bench, Software Engineering Benchmark for Language Models</a></li>
<li><a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">Rich Sutton, The Bitter Lesson (2019)</a></li>
<li><a href="https://aider.chat/">Aider, AI pair programming in your terminal</a></li>
</ul>
`,Qi=Object.freeze(Object.defineProperty({__proto__:null,html:Yi,meta:Vi},Symbol.toStringTag,{value:"Module"})),Ji={title:"Tokens Don't Make the Driver",date:"2026-10-15",tags:["ai-agents","tokens","software-development"],label:"AI-translated, author-reviewed"},Ki=`<p>I don&#39;t think counting the tokens spent is a valid way to judge how well someone uses agents. In work teams, those numbers can become a sort of ranking, where whoever consumes the most sits at the top of the pyramid and wins. But alas, that&#39;s not how it works. And I&#39;m writing this article to offer a different way of looking at it.</p>
<h2>The race</h2>
<p>If we take a car race as an example, the driver who burns through tyres or fuel the fastest isn&#39;t the one who gets a place on the podium, for both physical and logical reasons.</p>
<p>As a driver gains experience on the track, they learn about tyre grip, traction on the asphalt, and the limits of the car. Then comes throttle control too: you can&#39;t always go flat out, unless you want to end up smashing into a track barrier.</p>
<p>Something similar happens with agents. You can keep pressing the accelerator, adding requests, running tools, and consuming tokens. That alone doesn&#39;t tell you how much closer you&#39;re getting to the result.</p>
<h2>Fuel and grip</h2>
<p>So we could say that tokens are the fuel and context is the tyres.</p>
<p>Context gives you grip on the problem: knowing where to work, which constraints to respect, and what it means to be finished. Without that grip, you can have all the fuel you want and spend your time correcting your line. And adding random context doesn&#39;t necessarily solve the problem: you need the relevant context.</p>
<p>Consuming less doesn&#39;t automatically make you a better driver either. If you save fuel but never reach the finish line, there&#39;s little to celebrate.</p>
<h2>Before the podium</h2>
<p>Before looking at how many tokens were spent, I&#39;d look at what was achieved, whether it works, and how much work it took to check and correct it. Consumption is still useful for understanding the cost. On its own, it tells us very little about how good we&#39;ve become.</p>
<p>From here, I leave all further speculation to you, the reader. But before stepping onto the podium, let&#39;s at least make sure we&#39;ve finished the race.</p>
`,Xi=Object.freeze(Object.defineProperty({__proto__:null,html:Ki,meta:Ji},Symbol.toStringTag,{value:"Module"})),Zi={title:"wir: What Is Running, a Port and Process Inspector Written in C",date:"2025-12-30",tags:["c","systems-programming","cli","opensource"],label:"human-written, AI-reviewed"},eo=`<p>I recently released <strong>wir</strong> (What Is Running), a command-line tool written in C to inspect what&#39;s running on specific ports and get detailed process information. A project born from a practical need that turned into an opportunity to explore system programming in C.</p>
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
`,to=Object.freeze(Object.defineProperty({__proto__:null,html:eo,meta:Zi},Symbol.toStringTag,{value:"Module"}));function io(e){return[...e].sort((i,t)=>i.date.localeCompare(t.date))}const oo=Object.assign({"/src/content/articles/it/agent-toolbox.md":Et,"/src/content/articles/it/development-is-dead.md":$t,"/src/content/articles/it/gitlab-alert.md":Bt,"/src/content/articles/it/iris.md":Ht,"/src/content/articles/it/iron-doctrine.md":Ft,"/src/content/articles/it/my-first-and-last-forty-years.md":Qt,"/src/content/articles/it/otelma.md":Xt,"/src/content/articles/it/serval-cli.md":ti,"/src/content/articles/it/telemaco.md":ni,"/src/content/articles/it/tenore.md":si,"/src/content/articles/it/the-skill-delusion.md":di,"/src/content/articles/it/tokens-dont-make-the-driver.md":hi,"/src/content/articles/it/wir-what-is-running.md":fi}),no=Object.assign({"/src/content/articles/agent-toolbox.md":yi,"/src/content/articles/development-is-dead.md":Si,"/src/content/articles/gitlab-alert.md":zi,"/src/content/articles/iris.md":Ci,"/src/content/articles/iron-doctrine.md":qi,"/src/content/articles/my-first-and-last-forty-years.md":Ei,"/src/content/articles/otelma.md":$i,"/src/content/articles/serval-cli.md":Bi,"/src/content/articles/telemaco.md":Hi,"/src/content/articles/tenore.md":Fi,"/src/content/articles/the-skill-delusion.md":Qi,"/src/content/articles/tokens-dont-make-the-driver.md":Xi,"/src/content/articles/wir-what-is-running.md":to}),qe=new Map,U=io(Object.entries(no).map(([e,i])=>{const t=e.split("/").pop().replace(/\.md$/,""),a=oo[`/src/content/articles/it/${t}.md`],o=L==="it"&&a?a:i;return qe.set(t,o.html),{slug:t,language:L==="it"&&a?"it":"en",hasItalian:!!a,title:o.meta.title??t,date:o.meta.date??"",tags:o.meta.tags??[],label:o.meta.label??""}}));function ue(e){return qe.has(e)?qe.get(e):null}const Fe="alberto@portfolio:~",ao=Date.now(),Ve=Object.freeze(["help","about","skills","experience","projects","articles","utils","contact","cv","games","play","ls","tree","neofetch","history","date","clear","rss"]),ro=Object.freeze([["help","help"],["about","about"],["skills","skills"],["projects","projects"],["articles","articles"],["utils","utils"],["games","games"],["contact","contact"]]),Ae=Object.freeze({space:"SPACE INVADERS",tetris:"TETRIS",pong:"PONG",flappy:"FLAPPY BIRD"}),so=Object.freeze({space:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"FIRE",key:" "},{label:"→",key:"ArrowRight"}],tetris:[{label:"START",key:"Enter"},{label:"←",key:"ArrowLeft"},{label:"ROT",key:"ArrowUp"},{label:"→",key:"ArrowRight"},{label:"↓",key:"ArrowDown"}],pong:[{label:"START",key:"Enter"},{label:"↑",key:"ArrowUp"},{label:"↓",key:"ArrowDown"}],flappy:[{label:"START",key:"Enter"},{label:"FLAP",key:" "}]}),Re=Object.freeze({space:wt,tetris:xt,pong:Ct,flappy:Lt}),Ye=Object.freeze(["        /\\_/\\","       ( o.o )","        > ^ <","       /|   |\\","      (_|   |_)","         W W","","      I LOVE CAT"]),Me=Object.freeze(["    _    _     ____   _____","   / \\  | |   | __ ) |__  /","  / _ \\ | |   |  _ \\   / /"," / ___ \\| |___| |_) | / /_","/_/   \\_\\_____|____/ /____|"]),Ge="#%@*+=-<>/\\|",lo=new Set(["ArrowLeft","ArrowRight","ArrowDown"]),fe=new Map,de=[];let ke=0,oe=null,ge=null,ie=null,Z=null;const re=document.getElementById("app");function Se(e){var i;return((i=U.find(t=>t.slug===e))==null?void 0:i.language)??"en"}function Qe(e){var t;const i=!e||((t=U.find(a=>a.slug===e))==null?void 0:t.hasItalian);return`<nav class="language-selector" aria-label="${L==="it"?"Lingua":"Language"}">
		<a href="${e&&i?ne(e,"it"):"/it/"}" lang="it" hreflang="it" ${L==="it"?'aria-current="page"':""} ${e&&!i?'title="Versione italiana non disponibile: vai al portfolio italiano"':""}>IT</a>
		<span aria-hidden="true">|</span>
		<a href="${e?ne(e,"en"):"/"}" lang="en" hreflang="en" ${L==="en"?'aria-current="page"':""}>EN</a>
	</nav>`}const co="Alberto Barrago | Senior Software Engineer & Product Builder",po=L==="it"?"Senior Software Engineer e product builder: progetto sistemi affidabili e realizzo software per web, mobile, cloud e AI.":"Senior Software Engineer and product builder designing reliable systems and shipping production software across web, mobile, cloud, and AI.";function xe(e){var s,p;const i=U.find(h=>h.slug===e),t=i?ne(e,i.language):He,a=`${window.location.origin}${t}`,o=i?`${i.title} | Alberto Barrago`:co,r=i?(ue(e)??"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim().slice(0,155):po;document.title=o,(s=document.querySelector('link[rel="canonical"]'))==null||s.setAttribute("href",a);for(const[h,w]of[['meta[name="description"]',r],['meta[property="og:description"]',r],['meta[name="twitter:description"]',r],['meta[property="og:title"]',o],['meta[name="twitter:title"]',o],['meta[property="og:url"]',a],['meta[property="og:type"]',i?"article":"website"]])(p=document.querySelector(h))==null||p.setAttribute("content",w);document.querySelectorAll("link[hreflang]").forEach(h=>h.remove());for(const h of["en","it","x-default"]){if(i&&h==="it"&&!i.hasItalian)continue;const w=document.createElement("link");w.rel="alternate",w.hreflang=h,w.href=`${window.location.origin}${i?ne(e,h==="it"?"it":"en"):h==="it"?"/it/":"/"}`,document.head.appendChild(w)}}function uo(){const e=ro.map(([i,t])=>`<button class="mobile-command" type="button" data-command="${t}">${i}</button>`).join("");return`<main class="terminal" aria-label="${n("Alberto Barrago portfolio terminal")}">
		${Qe()}
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">${n("Terminal command")}</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${Fe}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">${n("Type help to list available commands. Use up and down arrows for command history.")}</p>
			<nav class="mobile-commands" aria-label="${n("Quick terminal commands")}">${e}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`}function Je(){return`<div class="ascii-banner accent" role="img" aria-label="ALBZ">${Me.join(`
`)}</div>
<div class="boot-copy"><span class="muted">Portfolio shell v${Oe}</span>
<span>${Ue} · Product Builder</span>

${n("15+ years: from INPS distribution systems to products for global brands.")}
${n("Technical leadership · Architecture · Web · Mobile · Cloud · AI")}

${n("I turn ambiguity into reliable systems and useful products.")}
<span class="muted">${n("Based in")} ${Ee}</span>
${U.length?`
<span class="muted">${n("Latest write-up:")}</span> <button class="inline-command command" data-command="cat ${U[U.length-1].slug}.md">${U[U.length-1].title} →</button>${L==="it"&&U[U.length-1].language==="en"?' <span class="muted">(in inglese)</span>':""}`:""}

${L==="it"?"Scrivi":"Type"} <button class="inline-command command" data-command="help">help</button> ${L==="it"?"per esplorare, oppure usa i comandi qui sotto.":"to explore, or use the shortcuts below."}</div>`}function ho(){const e=[["about",n("Short profile and current role")],["skills",n("Technical toolbox by area")],["experience",n("Professional timeline")],["projects",n("Selected open-source work and Homebrew formulae")],["articles",n("Technical articles and notes")],["rss",n("Subscribe to the articles feed")],["utils",n("Useful free resources and links")],["contact",n("Ways to get in touch")],["cv",n("Download my resume")],["games",n("List embedded retro games")],["play &lt;game&gt;",n("Launch space, tetris, pong, or flappy")],["ls / tree",n("Browse the portfolio filesystem")],["neofetch",n("Compact system profile")],["history / date / clear",n("Terminal utilities")]];return`<div class="output-title">${n("Available commands")}</div>
<div class="command-list">${e.map(([i,t])=>`<div><button class="inline-command command" data-command="${i.split(" ")[0]}">${i}</button><span class="muted">${t}</span></div>`).join("")}</div>
<div class="output-note">${L==="it"?"Premi":"Tip: press"} <span class="key">Tab</span> ${L==="it"?"per completare e":"to autocomplete and"} <span class="key">↑</span>/<span class="key">↓</span> ${L==="it"?"per la cronologia.":"for history."}</div>`}function mo(){return`<div class="output-title">${ut}</div>
<div class="key-value"><span class="label">${n("role")}</span><span>${Ue}</span>
<span class="label">${n("location")}</span><span>${Ee}</span>
<span class="label">${n("focus")}</span><span>${n("Product engineering · architecture · technical leadership")}</span>
<span class="label">${n("status")}</span><span class="green">${n("Building useful things")}</span></div>
<p class="prose">${ht}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">${n("view projects")}</button><button class="inline-command command" data-command="contact">${n("contact me")}</button><button class="inline-command command" data-command="cv">${n("download cv")}</button></div>`}function go(){return`<div class="output-title">${n("Technical toolbox")}</div>
<blockquote class="skills-quote">${n("Started with a single tool, today I find myself conducting an entire orchestra.")}</blockquote>
<p class="skills-whisper">${n("I'm an AI whisperer.")}</p>
<div class="skills-list">${Object.entries(mt).map(([e,i])=>`<div class="skill-row"><span class="label">${e}</span><span>${i.join("  ·  ")}</span></div>`).join("")}</div>`}function fo(){return`<div class="output-title">${n("Experience")}</div>
<div class="timeline">${gt.map(e=>`<article class="timeline-item">
	<span class="timeline-period">${e.period}</span>
	<div><div><span class="green">${e.role}</span> <span class="muted">@ ${e.company}</span></div>
	<p>${e.highlight}</p></div>
</article>`).join("")}</div>`}function bo(){return`<div class="output-title">${n("Selected projects")}</div>
<div class="project-list">${ft.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.language}</span></div>
	<p>${e.description}</p>
</article>`).join("")}</div>
<div class="output-title output-title-spaced">${n("Homebrew formulae")}</div>
<p class="prose">${n("Command-line tools I've packaged and maintain via Homebrew taps.")}</p>
<div class="project-list">${bt.map(e=>`<article class="project-item">
	<div><a class="terminal-link project-name" href="${e.url}" target="_blank" rel="noopener noreferrer">${e.name} ↗</a><span class="project-language">${e.tap}</span></div>
	<p>${e.description}</p>
	<p class="brew-install"><code>${e.install}</code></p>
</article>`).join("")}</div>`}function Ke(e){if(!e)return e;const i=new Date(`${e}T00:00:00`);return Number.isNaN(i.getTime())?e:new Intl.DateTimeFormat(Ie,{day:"2-digit",month:"2-digit",year:"numeric"}).format(i)}function vo(){if(U.length===0)return`<div class="output-title">${n("Articles")}</div>
<p class="prose muted">${n("No articles yet.")}</p>`;const e=[...U].sort((i,t)=>i.date.localeCompare(t.date));return`<div class="output-title">${n("Articles")}</div>
<div class="project-list">${e.map(i=>`<article class="project-item">
	<div><button class="terminal-link project-name inline-command" data-command="cat ${i.slug}.md">${i.title} ↗</button><span class="project-language">${Ke(i.date)}</span></div>
	<p class="muted">${i.tags.join("  ·  ")}${L==="it"&&i.language==="en"?" · Disponibile in inglese":""}</p>
</article>`).join("")}</div>`}const yo=200;function wo(e){const i=e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),t=i?i.split(" ").length:0;return{words:t,chars:i.length,minutes:Math.max(1,Math.round(t/yo))}}function ko(e){const i=U.findIndex(p=>p.slug===e),t=U[i],a=wo(ue(e)??""),o=U[i-1],r=U[i+1],s=[o?`<button class="reader-nav-link" type="button" data-action="read-article" data-slug="${o.slug}">← ${o.title}</button>`:"<span></span>",r?`<button class="reader-nav-link reader-nav-next" type="button" data-action="read-article" data-slug="${r.slug}">${r.title} →</button>`:"<span></span>"].join("");return`<div class="article-reader" id="article-reader">
		<div class="article-reader-topbar">
			<button class="reader-back" type="button" data-action="close-reader">${n("back")}</button>
			<div class="reader-actions">
				${Qe(e)}
				<button class="reader-action reader-toc-toggle" type="button" data-action="toggle-toc" id="reader-toc-toggle" hidden>${n("chapters")}</button>
				<button class="reader-action" type="button" data-action="share-article" data-slug="${e}">${n("share")}</button>
				<button class="reader-action" type="button" data-action="copy-article-link" data-slug="${e}">${n("copy link")}</button>
				<span class="reader-hint muted">${n("ESC · CLOSE")}</span>
			</div>
		</div>
		<div class="article-reader-body">
			<aside class="reader-toc" id="reader-toc" hidden></aside>
			<div class="article-reader-main">
				<article class="prose" lang="${t.language}">
					<h1>${t.title}</h1>
					<p class="reader-meta muted">${Ke(t.date)}${t.tags.length?` · ${t.tags.join(" · ")}`:""}${t.label?` · <span class="reader-label">${t.label}</span>`:""}</p>
					<p class="reader-stats muted">${a.words.toLocaleString(Ie)} ${n("words")} · ${a.chars.toLocaleString(Ie)} ${n("chars")} · ~${a.minutes} ${n("min read")}</p>
					${ue(e)}
				</article>
				<nav class="reader-nav">${s}</nav>
			</div>
		</div>
	</div>`}function So(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function Io(e){const i=e.querySelector("#reader-toc"),t=e.querySelectorAll(".prose h2, .prose h3");if(t.length===0)return;const a=new Set,o=Array.from(t).map(s=>{let p=So(s.textContent??"");for(;a.has(p)||!p;)p=`${p||"section"}-${a.size+1}`;return a.add(p),s.id=p,{id:p,text:s.textContent??"",level:s.tagName==="H2"?2:3}});i.innerHTML=`<span class="reader-toc-title">${n("chapters")}</span><ol class="reader-toc-list">${o.map(s=>`<li class="reader-toc-item level-${s.level}"><button class="reader-toc-link" type="button" data-action="goto-heading" data-target="${s.id}">${s.text}</button></li>`).join("")}</ol>`,i.hidden=!1,e.classList.add("has-toc");const r=e.querySelector("#reader-toc-toggle");r&&(r.hidden=!1),Ao(e,Array.from(t))}function Ao(e,i){ie==null||ie.disconnect(),Z==null||Z.container.removeEventListener("scroll",Z.handler),Z=null;const t=e.querySelector(".article-reader-body"),a=e.querySelectorAll(".reader-toc-link"),o=new Set,r=h=>{a.forEach(w=>w.classList.toggle("is-active",w.dataset.target===h))},s=()=>t.scrollTop+t.clientHeight>=t.scrollHeight-4;ie=new IntersectionObserver(h=>{for(const I of h)I.isIntersecting?o.add(I.target.id):o.delete(I.target.id);const w=i.find(I=>o.has(I.id));w?r(w.id):s()&&r(i[i.length-1].id)},{root:t,rootMargin:"0px 0px -72% 0px",threshold:0}),i.forEach(h=>ie.observe(h)),r(i[0].id);const p=()=>{s()&&r(i[i.length-1].id)};t.addEventListener("scroll",p,{passive:!0}),Z={container:t,handler:p}}function Ce(e){var a;if(L==="it"&&Se(e)==="en"){window.location.assign(ne(e,"en"));return}(a=document.getElementById("article-reader"))==null||a.remove(),j.blur();const i=document.createElement("div");i.innerHTML=ko(e);const t=i.firstElementChild;re.appendChild(t),t.scrollTop=0,Io(t),xe(e),window.location.pathname!==ne(e,Se(e))&&window.history.pushState(null,"",ne(e,Se(e)))}function Xe(){var e;ie==null||ie.disconnect(),ie=null,Z==null||Z.container.removeEventListener("scroll",Z.handler),Z=null,(e=document.getElementById("article-reader"))==null||e.remove(),/^(?:\/it)?\/articles\//.test(window.location.pathname)&&window.history.pushState(null,"",He),xe(),j==null||j.focus({preventScroll:!0})}function _e(e){return`${window.location.origin}${ne(e,Se(e))}`}function zo(e){const i=e.textContent;e.textContent=n("copied ✓"),e.disabled=!0,window.setTimeout(()=>{e.textContent=i,e.disabled=!1},1500)}async function Ze(e,i){try{await navigator.clipboard.writeText(_e(e)),zo(i)}catch{window.prompt(n("Copy this link:"),_e(e))}}async function To(e,i){const t=U.find(o=>o.slug===e),a=_e(e);if(navigator.share){try{await navigator.share({title:(t==null?void 0:t.title)??e,url:a})}catch{}return}await Ze(e,i)}function xo(){return`<div class="output-title">/utils</div>
<p class="prose">${n("Useful free resources: books, courses, docs, and tools I keep coming back to.")}</p>
${vt.map(e=>`<div class="utils-group">
	<div class="utils-category">${e.category}</div>
	<div class="project-list">${e.items.map(i=>`<article class="project-item">
		<div><a class="terminal-link project-name" href="${i.url}" target="_blank" rel="noopener noreferrer">${i.name} ↗</a></div>
		<p>${i.description}</p>
	</article>`).join("")}</div>
</div>`).join("")}</div>`}function Le(){return`<div class="output-title">${n("Let's build something useful")}</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${we.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${we.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${we.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">${n("location")}</span><span>${Ee}</span></div>`}function Co(){return`<div class="output-title">/games</div>
<div class="game-list">${Object.entries(Ae).map(([e,i])=>`<button class="game-command" data-command="play ${e}"><span>${i}</span><span class="muted">play ${e}</span></button>`).join("")}</div>
<article class="project-item"><a class="terminal-link project-name" href="https://iron-doctrine-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Iron Doctrine ↗</a><p>${n("A real-time strategy game with a deterministic ECS engine and lockstep online 1v1 multiplayer.")}</p></article>
<div class="output-note">${L==="it"?"I giochi si aprono a schermo intero. Premi":"Games open fullscreen. Press"} <span class="key">Esc</span> ${L==="it"?"per tornare.":"to return."}</div>`}function Lo(){return`<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command directory" data-command="articles">articles/</button>
├── <button class="inline-command directory" data-command="utils">utils/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`}const Po=[" █████  ██     ","██   ██ ██     ","███████ ██     ","██   ██ ██     ","██   ██ ███████","               ","██████  ███████","██   ██     ██ ","██████     ██  ","██   ██   ██   ","██████  ███████"].join(`
`);function qo(e){const i=Math.floor(e/1e3),t=[["day",Math.floor(i/86400)],["hour",Math.floor(i/3600)%24],["min",Math.floor(i/60)%60],["sec",i%60]].filter(([,o])=>o>0);return(t.length?t:[["sec",0]]).slice(0,2).map(([o,r])=>`${r} ${o}${r===1?"":"s"}`).join(", ")}function Mo(){const e=navigator.userAgent,i=[[/Firefox\/(\d+)/,"Firefox"],[/Edg\/(\d+)/,"Edge"],[/OPR\/(\d+)/,"Opera"],[/Chrome\/(\d+)/,"Chrome"],[/Version\/(\d+).*Safari/,"Safari"]];for(const[t,a]of i){const o=e.match(t);if(o)return`${a} ${o[1]}`}return"Web browser"}function _o(){const e="Zoser@Sosaria",i=[["OS",`albz-sh ${Oe}`],["Host","GitHub Pages"],["Kernel","Vanilla JS (ES2022)"],["Uptime",qo(Date.now()-ao)],["Packages","0 (runtime)"],["Shell","albz-sh"],["Guild","AdE"],["Alignment","Player Killer"],["Resolution",`${window.screen.width}x${window.screen.height}`],["Terminal",Mo()],["Commands",String(Ve.length)],[n("Articles"),String(U.length)],["Games",String(Object.keys(Re).length)],["Build","2026-10-16"]];return`<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">${Po}</div><div><span class="accent">${e}</span>
<span class="muted">${"─".repeat(e.length)}</span>
${i.map(([t,a])=>`<span><span class="label">${t}:</span> ${me(a)}</span>`).join(`
`)}
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`}function Eo(){return'<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command directory" data-command="articles">articles/</button><button class="inline-command directory" data-command="utils">utils/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>'}function et(e,i){return e.map(t=>t.split("").map(a=>a===" "||Math.random()>=i?a:Ge[Math.floor(Math.random()*Ge.length)]).join("")).join(`
`)}function Oo(e){return et(Ye,e)}function Ro(){const e=ae.querySelector(".ascii-banner");if(!e)return;const i=Me.join(`
`),t=9;let a=0;const o=window.setInterval(()=>{if(a+=1,a>=t){window.clearInterval(o),e.textContent=i;return}e.textContent=et(Me,Math.max(0,.55-a*.06))},70)}function $o(){const e=document.createElement("div");e.className="output-block ascii-banner accent",ae.appendChild(e);const i=6;let t=0;const a=window.setInterval(()=>{t+=1,e.textContent=t>=i?Ye.join(`
`):Oo(Math.max(0,.6-t*.12)),requestAnimationFrame(()=>{ae.scrollTop=ae.scrollHeight}),t>=i&&(window.clearInterval(a),H('<span class="green">Purring in binary.</span>'))},90)}function Do(e){const i=document.createElement("div");i.className="output-block command-echo";const t=document.createElement("span");t.className="prompt",t.innerHTML=`<span class="prompt-user">${Fe}</span><span class="prompt-symbol">$</span>`;const a=document.createElement("span");a.textContent=e,i.append(t,a),ae.appendChild(i)}function H(e,i=""){const t=`output-block ${i}`.trim();for(const o of Array.from(ae.children))o.className===t&&o.innerHTML===e&&o.remove();const a=document.createElement("div");a.className=t,a.innerHTML=e,ae.appendChild(a),requestAnimationFrame(()=>{a.scrollIntoView({block:"start"})})}function tt(e){const i=e.trim();if(!i)return;Do(i),de.at(-1)!==i&&de.push(i),ke=de.length;const[t,...a]=i.split(/\s+/),o=t.toLowerCase(),r=a.join(" ").toLowerCase();if(o==="clear"){ae.replaceChildren(),H(Je(),"welcome-block");return}if(["about","whoami","cat"].includes(o)){o!=="cat"||!r||r==="about.txt"?H(mo()):r==="contact.vcf"?H(Le()):r.endsWith(".md")&&ue(r.slice(0,-3))?Ce(r.slice(0,-3)):H(`<span class="red">cat: ${me(r)}: ${n("No such file")}</span>`);return}const s={help:ho,skills:go,experience:fo,projects:bo,articles:vo,utils:xo,contact:Le,games:Co,ls:Eo,tree:Lo,neofetch:_o};if(s[o]){H(s[o]());return}if(o==="cv"){yt(),H(`<span class="green">${n("Downloading albertobarrago_cv.pdf…")}</span>`);return}if(o==="history"){H(de.map((p,h)=>`<div><span class="muted">${String(h+1).padStart(3," ")}</span>  ${me(p)}</div>`).join(""));return}if(o==="date"){H(new Intl.DateTimeFormat(Ie,{dateStyle:"full",timeStyle:"long"}).format(new Date));return}if(o==="rss"){H(`<div class="output-title">RSS feed</div>
<p class="prose">${n("Subscribe to my articles feed in any RSS reader:")}</p>
<div class="key-value"><span class="label">url</span><a class="terminal-link" href="/feed.xml" target="_blank" rel="noopener">https://albz.it/feed.xml</a></div>
<p class="prose">${n("No RSS reader on your Mac yet? I built one too:")} <a class="terminal-link" href="https://github.com/AlbertoBarrago/RSSReader/releases/latest" target="_blank" rel="noopener noreferrer">${n("download RSS Reader")}</a> 😉</p>`);return}if(o==="play"){jo(r)?(H(`<span class="green">${n("Launching")} ${Ae[r]}…</span>`),Go(r)):H(`<span class="red">${n("Unknown game")}${r?`: ${me(r)}`:""}.</span> ${L==="it"?"Prova":"Try"} <button class="inline-command command" data-command="games">games</button>.`);return}if(o==="1337"){$o();return}if(o==="sudo"&&r==="hire alberto"){H(`<span class="green">${n("Permission granted. Opening contact details…")}</span>`),H(Le());return}H(`<span class="red">${n("command not found:")} ${me(o)}</span><br>${L==="it"?"Scrivi":"Type"} <button class="inline-command command" data-command="help">help</button> ${L==="it"?"per vedere i comandi disponibili.":"to see available commands."}`)}function jo(e){return Object.hasOwn(Re,e)}function Bo(e){const i=so[e].map(t=>`<button class="game-control-button" type="button" data-control-key="${t.key}">${t.label}</button>`).join("");return`<div class="game-fullscreen" id="game-overlay">
		<div class="game-scanlines" aria-hidden="true"></div>
		<div class="game-topbar"><span class="game-title">${Ae[e]}</span><button class="game-exit" type="button" data-action="exit-game">${n("ESC · CLOSE")}</button></div>
		<canvas class="game-canvas" aria-label="${Ae[e]} game"></canvas>
		<div class="game-touch-controls">${i}</div>
	</div>`}function Go(e){ze(),j.blur();const i=document.createElement("div");i.innerHTML=Bo(e);const t=i.firstElementChild;re.appendChild(t);const a=t.querySelector(".game-canvas");requestAnimationFrame(()=>{t.isConnected&&(ge=Re[e](a,ze))})}function ze(){var e;ge==null||ge(),ge=null,it(),(e=document.getElementById("game-overlay"))==null||e.remove(),xe(),j==null||j.focus({preventScroll:!0})}function Te(e,i){window.dispatchEvent(new KeyboardEvent(i,{key:e,bubbles:!0,cancelable:!0}))}function No(e){var r;const t=e.target.closest("[data-control-key]"),a=t==null?void 0:t.dataset.controlKey;if(!t||!a)return;e.preventDefault(),(r=t.setPointerCapture)==null||r.call(t,e.pointerId);const o={key:a,button:t};fe.set(e.pointerId,o),t.classList.add("is-pressed"),Te(a,"keydown"),lo.has(a)&&(o.delayId=window.setTimeout(()=>{o.intervalId=window.setInterval(()=>Te(a,"keydown"),85)},220))}function $e(e){const i=fe.get(e.pointerId);i&&(e.preventDefault(),i.delayId&&window.clearTimeout(i.delayId),i.intervalId&&window.clearInterval(i.intervalId),i.button.classList.remove("is-pressed"),fe.delete(e.pointerId),Te(i.key,"keyup"))}function it(){for(const e of fe.values())e.delayId&&window.clearTimeout(e.delayId),e.intervalId&&window.clearInterval(e.intervalId),e.button.classList.remove("is-pressed"),Te(e.key,"keyup");fe.clear()}document.documentElement.lang=L;re.innerHTML=uo();const ae=document.getElementById("terminal-output"),Ho=document.getElementById("terminal-form"),j=document.getElementById("terminal-input");H(Je(),"welcome-block");Ro();qt();function ot(){var e,i;return((e=window.location.pathname.match(/^(?:\/it)?\/articles\/([^/]+)\/?$/))==null?void 0:e[1])??((i=window.location.hash.match(/^#article\/(.+)$/))==null?void 0:i[1])}const Pe=ot();Pe&&ue(Pe)&&Ce(Pe);window.addEventListener("popstate",()=>{var i;const e=ot();e&&ue(e)?Ce(e):((i=document.getElementById("article-reader"))==null||i.remove(),xe())});Ho.addEventListener("submit",e=>{e.preventDefault();const i=j.value;j.value="",tt(i)});j.addEventListener("input",()=>{oe=null});j.addEventListener("keydown",e=>{if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();const i=e.key==="ArrowUp"?-1:1;ke=Math.max(0,Math.min(de.length,ke+i)),j.value=de[ke]??"",requestAnimationFrame(()=>j.setSelectionRange(j.value.length,j.value.length));return}if(e.key==="Tab"){e.preventDefault();const i=j.value.trim().toLowerCase();if(!i){H(`<span class="muted">${L==="it"?"Scrivi help per vedere i comandi disponibili.":"Type help to see the list of available commands."}</span>`),oe=null;return}const t=Ve.filter(o=>o.startsWith(i));if(t.length===0){oe=null;return}if(t.length===1){j.value=t[0],oe=null;return}const a=t.reduce((o,r)=>{let s=0;for(;s<o.length&&s<r.length&&o[s]===r[s];)s+=1;return o.slice(0,s)});if(a.length>i.length){j.value=a,oe=null;return}oe===i?(H(t.map(o=>`<span class="command">${o}</span>`).join("  ")),oe=null):oe=i}});re.addEventListener("click",e=>{var h,w,I;const i=e.target,t=document.querySelector("#reader-toc.is-open");t&&!i.closest("#reader-toc")&&!i.closest('[data-action="toggle-toc"]')&&t.classList.remove("is-open");const a=i.closest('[data-action="read-article"]');if(a!=null&&a.dataset.slug){Ce(a.dataset.slug);return}if(i.closest('[data-action="close-reader"]')){Xe();return}const o=i.closest('[data-action="share-article"]');if(o!=null&&o.dataset.slug){To(o.dataset.slug,o);return}const r=i.closest('[data-action="copy-article-link"]');if(r!=null&&r.dataset.slug){Ze(r.dataset.slug,r);return}if(i.closest('[data-action="toggle-toc"]')){(h=document.getElementById("reader-toc"))==null||h.classList.toggle("is-open");return}const s=i.closest('[data-action="goto-heading"]');if(s!=null&&s.dataset.target){const S=document.getElementById("article-reader");(w=document.getElementById(s.dataset.target))==null||w.scrollIntoView({behavior:"smooth",block:"start"}),(I=S==null?void 0:S.querySelector("#reader-toc"))==null||I.classList.remove("is-open");return}const p=i.closest("[data-command]");p!=null&&p.dataset.command&&tt(p.dataset.command),i.closest('[data-action="exit-game"]')&&ze(),!i.closest("a")&&!document.getElementById("game-overlay")&&!document.getElementById("article-reader")&&j.focus({preventScroll:!0})});re.addEventListener("pointerdown",No);re.addEventListener("pointerup",$e);re.addEventListener("pointercancel",$e);re.addEventListener("lostpointercapture",$e);window.addEventListener("blur",it);document.addEventListener("keydown",e=>{e.key==="Escape"&&document.getElementById("game-overlay")&&ze(),e.key==="Escape"&&document.getElementById("article-reader")&&Xe()});
