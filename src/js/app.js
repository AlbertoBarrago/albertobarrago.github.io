/**
 * @file Amiga Workbench Portfolio — Main Application
 * @description Retro Amiga Workbench 3.1 portfolio with boot sequence,
 * section navigation, and embedded retro games. Pure vanilla JS.
 */

import {
	name, role, location, profile, skills,
	experience, links, version, downloadCv
} from './index.js';

console.log(
	`%c
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
`,
	'color: #00ff41; font-family: monospace;'
);
console.log(
	'%c> STATUS: Open to new quests. Accepting side-missions & full-time raids.\n' +
	'> CLASS: Full-Stack Developer | LEVEL: Senior\n' +
	'> SKILLS: JS, TS, Python, React, Node, Cloud & more\n' +
	'> PING ME: linkedin.com/in/albertobarrago\n' +
	'> $_ Hire me before the next sprint starts.',
	'color: #ffbd2e; font-size: 13px; font-family: monospace;'
);
import { initSpaceInvaders } from './games/spaceInvaders.js';
import { initTetris } from './games/tetris.js';
import { initPong } from './games/pong.js';

/** @typedef {'about' | 'skills' | 'experience' | 'contact'} Section */

/** @type {Readonly<Record<string, string>>} */
const GAME_TITLES = Object.freeze({
	space: 'SPACE INVADERS',
	tetris: 'TETRIS',
	pong: 'PONG',
});

/** @type {Readonly<Record<string, (canvas: HTMLCanvasElement, onExit: () => void) => (() => void)>>} */
const GAME_INIT = Object.freeze({
	space: initSpaceInvaders,
	tetris: initTetris,
	pong: initPong,
});

const BOOT_SEQUENCE = Object.freeze([
	'Initializing modem...',
	'ATZ OK',
	'ATDT *67 555-0199',
	'CONNECT 56000',
	'',
	'Amiga Workbench 3.1',
	'Copyright (c) 1985-1994 Commodore-Amiga, Inc.',
	'',
	'Checking memory...',
	'Chip RAM: 2048K',
	'Fast RAM: 8192K',
	'',
	'Loading system...',
	'Welcome, visitor!',
	'',
	'Type HELP for commands or click menu items.',
	'',
]);

/** @type {readonly Section[]} */
const SECTIONS = /** @type {const} */ (['about', 'skills', 'experience', 'contact']);

const ASCII_ART = `\
     _    __  __ ___ ____    _
    / \\  |  \\/  |_ _/ ___|  / \\
   / _ \\ | |\\/| || | |  _  / _ \\
  / ___ \\| |  | || | |_| |/ ___ \\
 /_/   \\_\\_|  |_|___\\____/_/   \\_\\`;

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let started = false;
let bootComplete = false;
/** @type {Section} */
let currentSection = 'about';
/** @type {(() => void) | null} */
let gameCleanup = null;

// ---------------------------------------------------------------------------
// DOM
// ---------------------------------------------------------------------------

const app = /** @type {HTMLDivElement} */ (document.getElementById('app'));

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

function startOverlayHTML() {
	return `<div class="start-overlay" data-action="start-boot">
	<div class="start-content">
		<div class="start-ascii"><pre>${ASCII_ART}</pre></div>
		<p class="start-title">WORKBENCH 3.1</p>
		<p class="start-prompt blink">[ Click anywhere to connect ]</p>
	</div>
</div>`;
}

function amigaScreenHTML() {
	const menuButtons = SECTIONS.map(
		(s) => `<button class="menu-item${s === 'about' ? ' active' : ''}" data-section="${s}">${s.at(0)?.toUpperCase()}${s.slice(1)}</button>`
	).join('');

	return `<div class="amiga-screen">
	<div class="monitor-frame">
		<div class="screen-bezel">
			<div class="crt-screen">
				<div class="title-bar">
					<div class="title-bar-left"><span class="window-button close"></span></div>
					<span class="title-text">Alberto Barrago - Portfolio v${version}</span>
					<div class="title-bar-right">
						<span class="window-button depth"></span>
						<span class="window-button zoom"></span>
					</div>
				</div>
				<nav class="menu-bar">${menuButtons}</nav>
				<div class="content-area" id="content-area">
					<div class="boot-screen" id="boot-screen"><span class="cursor">_</span></div>
				</div>
				<div class="status-bar">
					<span>Chip: 2048K</span>
					<span>Fast: 8192K</span>
					<span class="status-right">v${version}</span>
				</div>
				<div class="scanlines"></div>
				<div class="crt-flicker"></div>
			</div>
		</div>
	</div>
</div>`;
}

// ---------------------------------------------------------------------------
// Section renderers
// ---------------------------------------------------------------------------

function aboutHTML() {
	return `<div class="section">
	<h1 class="section-title">&gt; ${name}</h1>
	<p class="role">${role}</p>
	<p class="location">${location}</p>
	<div class="divider"></div>
	<p class="profile">${profile}</p>
	<div class="action-buttons">
		<button class="amiga-btn" data-action="download-cv">Download CV</button>
		<a href="${links.github}" target="_blank" class="amiga-btn">GitHub</a>
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
</div>`;
}

function skillsHTML() {
	const grid = Object.entries(skills)
		.map(([category, items]) => `<div class="skill-category">
			<h3>${category.at(0)?.toUpperCase()}${category.slice(1)}</h3>
			<ul>${/** @type {string[]} */ (items).map((s) => `<li>${s}</li>`).join('')}</ul>
		</div>`)
		.join('');

	return `<div class="section">
	<h1 class="section-title">&gt; Skills</h1>
	<div class="skills-grid">${grid}</div>
</div>`;
}

function experienceHTML() {
	const list = experience
		.map((job) => `<div class="job-item">
			<div class="job-header">
				<span class="job-role">${job.role}</span>
				<span class="job-period">${job.period}</span>
			</div>
			<div class="job-company">${job.company}</div>
			<div class="job-highlight">${job.highlight}</div>
		</div>`)
		.join('');

	return `<div class="section">
	<h1 class="section-title">&gt; Experience</h1>
	<div class="experience-list">${list}</div>
</div>`;
}

function contactHTML() {
	return `<div class="section">
	<h1 class="section-title">&gt; Contact</h1>
	<div class="contact-info">
		<p><span class="label">Email:</span> <a href="${links.email}">albertobarrago@gmail.com</a></p>
		<p><span class="label">GitHub:</span> <a href="${links.github}" target="_blank">github.com/AlbertoBarrago</a></p>
		<p><span class="label">Location:</span> ${location}</p>
	</div>
	<div class="action-buttons">
		<button class="amiga-btn" data-action="download-cv">Download CV</button>
	</div>
</div>`;
}

function gameOverlayHTML(/** @type {string} */ type) {
	return `<div class="game-fullscreen" id="game-overlay">
	<div class="game-scanlines"></div>
	<div class="game-topbar">
		<span class="game-title">${GAME_TITLES[type] ?? ''}</span>
		<span class="game-exit" data-action="exit-game">[X] Close</span>
	</div>
	<canvas class="game-canvas"></canvas>
</div>`;
}

/** @type {Readonly<Record<Section, () => string>>} */
const SECTION_RENDERERS = Object.freeze({
	about: aboutHTML,
	skills: skillsHTML,
	experience: experienceHTML,
	contact: contactHTML,
});

// ---------------------------------------------------------------------------
// Audio — modem dial-up sound synthesis
// ---------------------------------------------------------------------------

function playModemSound() {
	const AudioCtx = globalThis.AudioContext
		?? /** @type {typeof AudioContext} */ (/** @type {any} */ (globalThis).webkitAudioContext);
	const ctx = new AudioCtx();
	const master = ctx.createGain();
	master.gain.value = 0.18;
	master.connect(ctx.destination);

	const t = ctx.currentTime;

	// Boot sequence fires a line every BOOT_INTERVAL ms. Key sync points:
	//   line 0  "Initializing modem…"  →  0.00 s  dial tone
	//   line 2  "ATDT *67 555-0199"    →  0.50 s  DTMF tones
	//   line 3  "CONNECT 56000"        →  0.75 s  transition → CED
	//   boot ends (~17 lines × 250 ms) →  4.25 s  sound fades out

	// ── 1. Dial tone: 350 Hz + 440 Hz ─────────────────── 0.00 → 0.40 s
	for (const freq of [350, 440]) {
		const osc = ctx.createOscillator();
		osc.type = 'sine';
		osc.frequency.value = freq;
		const g = ctx.createGain();
		g.gain.value = 0.18;
		osc.connect(g);
		g.connect(master);
		osc.start(t);
		osc.stop(t + 0.4);
	}

	// ── 2. DTMF dialing ────────────────────────────────── 0.50 → 1.10 s
	// Starts at 0.50 s to land on "ATDT *67 555-0199" (line 2 × 250 ms).
	const dtmfPairs = [
		[941, 1336], [697, 1336], [770, 1209], [852, 1477],
		[941, 1209], [770, 1336],
	];
	for (const [i, pair] of dtmfPairs.entries()) {
		for (const freq of pair) {
			const osc = ctx.createOscillator();
			osc.type = 'sine';
			osc.frequency.value = freq;
			const g = ctx.createGain();
			g.gain.value = 0.28;
			osc.connect(g);
			g.connect(master);
			osc.start(t + 0.5 + i * 0.1);
			osc.stop(t + 0.5 + i * 0.1 + 0.08);
		}
	}

	// ── 3. Ringback: 440 Hz + 480 Hz ──────────────────── 1.15 → 1.55 s
	for (const freq of [440, 480]) {
		const osc = ctx.createOscillator();
		osc.type = 'sine';
		osc.frequency.value = freq;
		const g = ctx.createGain();
		g.gain.value = 0.14;
		osc.connect(g);
		g.connect(master);
		osc.start(t + 1.15);
		osc.stop(t + 1.55);
	}

	// ── 4. CED answer tone: 2100 Hz with phase reversals ─ 1.65 → 2.65 s
	const cedOsc = ctx.createOscillator();
	cedOsc.type = 'sine';
	cedOsc.frequency.value = 2100;
	const cedGain = ctx.createGain();
	cedGain.gain.value = 0.22;
	cedOsc.connect(cedGain);
	cedGain.connect(master);
	cedOsc.start(t + 1.65);
	cedOsc.stop(t + 2.65);
	for (let k = 0; k < 3; k++) {
		const pt = 1.65 + k * 0.34;
		cedGain.gain.setValueAtTime(0.22, t + pt);
		cedGain.gain.linearRampToValueAtTime(0.01, t + pt + 0.018);
		cedGain.gain.linearRampToValueAtTime(0.22, t + pt + 0.036);
	}

	// ── 5. V.8 negotiation chirps ─────────────────────── 2.75 → 3.05 s
	for (const [i, freq] of [980, 1300, 2100, 1650].entries()) {
		const osc = ctx.createOscillator();
		osc.type = 'sine';
		osc.frequency.value = freq;
		const g = ctx.createGain();
		g.gain.value = 0.16;
		osc.connect(g);
		g.connect(master);
		osc.start(t + 2.75 + i * 0.08);
		osc.stop(t + 2.75 + i * 0.08 + 0.06);
	}

	// ── 6. V.34 training screech ──────────────────────── 3.10 → 4.10 s
	// Three sine carriers sweeping in opposing arcs — their beating creates
	// the iconic warble. Compressed to 1 s but sweeps are denser.
	const trBase = 3.1;
	const trDur  = 1.0;
	const trainSweeps = [
		{ f1: 2100, f2: 1100, steps: 10 },
		{ f1: 1650, f2: 2600, steps:  8 },
		{ f1:  980, f2: 2250, steps: 12 },
	];
	for (const [pi, { f1, f2, steps }] of trainSweeps.entries()) {
		const osc = ctx.createOscillator();
		osc.type = 'sine';
		osc.frequency.setValueAtTime(f1, t + trBase);
		for (let s = 1; s <= steps; s++) {
			osc.frequency.linearRampToValueAtTime(
				s % 2 === 0 ? f1 : f2,
				t + trBase + (s / steps) * trDur
			);
		}
		const g = ctx.createGain();
		g.gain.value = 0.07;
		osc.connect(g);
		g.connect(master);
		osc.start(t + trBase + pi * 0.03);
		osc.stop(t + trBase + trDur + pi * 0.03);
	}

	// Sawtooth sweep for the characteristic harsh modem texture
	const sawOsc = ctx.createOscillator();
	sawOsc.type = 'sawtooth';
	sawOsc.frequency.setValueAtTime(1800, t + trBase);
	sawOsc.frequency.linearRampToValueAtTime(900,  t + trBase + 0.25);
	sawOsc.frequency.linearRampToValueAtTime(2500, t + trBase + 0.50);
	sawOsc.frequency.linearRampToValueAtTime(1100, t + trBase + 0.75);
	sawOsc.frequency.linearRampToValueAtTime(2100, t + trBase + 1.00);
	const sawGain = ctx.createGain();
	sawGain.gain.value = 0.05;
	sawOsc.connect(sawGain);
	sawGain.connect(master);
	sawOsc.start(t + trBase);
	sawOsc.stop(t + trBase + trDur);

	// Bandpass noise — simulates channel scrambling during training
	const noiseSize = Math.floor(ctx.sampleRate * (trDur + 0.3));
	const noiseBuf = ctx.createBuffer(1, noiseSize, ctx.sampleRate);
	const noiseData = noiseBuf.getChannelData(0);
	for (let i = 0; i < noiseSize; i++) noiseData[i] = Math.random() * 2 - 1;
	const noiseSrc = ctx.createBufferSource();
	noiseSrc.buffer = noiseBuf;
	const bpf = ctx.createBiquadFilter();
	bpf.type = 'bandpass';
	bpf.frequency.value = 1800;
	bpf.Q.value = 2.5;
	const noiseGain = ctx.createGain();
	noiseGain.gain.value = 0.04;
	noiseSrc.connect(bpf);
	bpf.connect(noiseGain);
	noiseGain.connect(master);
	noiseSrc.start(t + trBase);
	noiseSrc.stop(t + trBase + trDur + 0.2);

	// ── 7. Connected: brief 2400 Hz confirmation tone ─── 4.15 → 4.50 s
	const connAt = trBase + trDur + 0.05;
	const connOsc = ctx.createOscillator();
	connOsc.type = 'sine';
	connOsc.frequency.value = 2400;
	const connGain = ctx.createGain();
	connGain.gain.setValueAtTime(0.18, t + connAt);
	connGain.gain.linearRampToValueAtTime(0, t + connAt + 0.35);
	connOsc.connect(connGain);
	connGain.connect(master);
	connOsc.start(t + connAt);
	connOsc.stop(t + connAt + 0.35);

	// Master fade
	master.gain.setValueAtTime(0.18, t + connAt + 0.1);
	master.gain.linearRampToValueAtTime(0, t + connAt + 0.5);
}

// ---------------------------------------------------------------------------
// Boot sequence
// ---------------------------------------------------------------------------

function startBoot() {
	if (started) return;
	started = true;

	app.innerHTML = amigaScreenHTML();
	playModemSound();

	const bootScreen = /** @type {HTMLDivElement} */ (document.getElementById('boot-screen'));
	const cursor = /** @type {HTMLSpanElement} */ (bootScreen.querySelector('.cursor'));

	let i = 0;
	const interval = setInterval(() => {
		if (i < BOOT_SEQUENCE.length) {
			const line = document.createElement('div');
			line.className = 'boot-line';
			line.textContent = BOOT_SEQUENCE[i];
			bootScreen.insertBefore(line, cursor);
			i++;
		} else {
			clearInterval(interval);
			bootComplete = true;
			showSection('about');
		}
	}, 250);
}

// ---------------------------------------------------------------------------
// Section navigation
// ---------------------------------------------------------------------------

/** @param {Section} section */
function showSection(section) {
	currentSection = section;

	const contentArea = /** @type {HTMLDivElement} */ (document.getElementById('content-area'));
	const render = SECTION_RENDERERS[section];
	if (render) contentArea.innerHTML = render();

	for (const btn of document.querySelectorAll('.menu-item')) {
		const el = /** @type {HTMLElement} */ (btn);
		el.classList.toggle('active', el.dataset.section === section);
	}
}

// ---------------------------------------------------------------------------
// Game management
// ---------------------------------------------------------------------------

/** @param {string} type */
function launchGame(type) {
	cleanupGame();

	const wrapper = document.createElement('div');
	wrapper.innerHTML = gameOverlayHTML(type);
	const overlay = /** @type {HTMLDivElement} */ (wrapper.firstElementChild);
	app.appendChild(overlay);

	const canvas = /** @type {HTMLCanvasElement} */ (overlay.querySelector('.game-canvas'));
	const init = GAME_INIT[type];

	if (init && canvas) {
		requestAnimationFrame(() => {
			gameCleanup = init(canvas, exitGame);
		});
	}
}

function cleanupGame() {
	if (gameCleanup) {
		gameCleanup();
		gameCleanup = null;
	}
}

function exitGame() {
	cleanupGame();
	document.getElementById('game-overlay')?.remove();
}

// ---------------------------------------------------------------------------
// Event delegation
// ---------------------------------------------------------------------------

app.addEventListener('click', (e) => {
	const target = /** @type {HTMLElement} */ (e.target);

	// Boot
	if (target.closest('[data-action="start-boot"]')) {
		startBoot();
		return;
	}

	// Section switch
	const menuBtn = /** @type {HTMLElement | null} */ (target.closest('[data-section]'));
	if (menuBtn?.dataset.section && bootComplete) {
		showSection(/** @type {Section} */(menuBtn.dataset.section));
		return;
	}

	// Launch game
	const gameIcon = /** @type {HTMLElement | null} */ (target.closest('[data-game]'));
	if (gameIcon?.dataset.game) {
		launchGame(gameIcon.dataset.game);
		return;
	}

	// Download CV
	if (target.closest('[data-action="download-cv"]')) {
		downloadCv();
		return;
	}

	// Exit game
	if (target.closest('[data-action="exit-game"]')) {
		exitGame();
	}
});

// ---------------------------------------------------------------------------
// Initialize
// ---------------------------------------------------------------------------

app.innerHTML = startOverlayHTML();
