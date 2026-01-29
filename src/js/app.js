/**
 * @file Amiga Workbench Portfolio — Main Application
 * @description Retro Amiga Workbench 3.1 portfolio with boot sequence,
 * section navigation, and embedded retro games. Pure vanilla JS.
 */

import {
	name, role, location, profile, skills,
	experience, links, version, downloadCv
} from './index.js';
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
		<p><span class="label">Blog:</span> <a href="${links.blog}" target="_blank">alblog.gigalixirapp.com</a></p>
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
	const masterGain = ctx.createGain();
	masterGain.gain.value = 0.15;
	masterGain.connect(ctx.destination);

	const now = ctx.currentTime;

	// DTMF dial tones
	const dtmfPairs = [
		[941, 1336], [770, 1209], [852, 1477], [697, 1336],
		[770, 1336], [852, 1209], [941, 1209],
	];
	for (const [i, pair] of dtmfPairs.entries()) {
		for (const freq of pair) {
			const osc = ctx.createOscillator();
			osc.frequency.value = freq;
			osc.type = 'sine';
			const g = ctx.createGain();
			g.gain.value = 0.3;
			g.connect(masterGain);
			osc.connect(g);
			osc.start(now + i * 0.1);
			osc.stop(now + i * 0.1 + 0.08);
		}
	}

	// Answer tone
	const answer = ctx.createOscillator();
	answer.frequency.value = 2100;
	answer.type = 'sine';
	const answerGain = ctx.createGain();
	answerGain.gain.value = 0.2;
	answerGain.connect(masterGain);
	answer.connect(answerGain);
	answer.start(now + 1.0);
	answer.stop(now + 1.6);

	// Carrier negotiation
	const carrier = ctx.createOscillator();
	carrier.type = 'sawtooth';
	carrier.frequency.setValueAtTime(980, now + 1.7);
	carrier.frequency.linearRampToValueAtTime(2100, now + 2.1);
	carrier.frequency.linearRampToValueAtTime(1300, now + 2.4);
	carrier.frequency.linearRampToValueAtTime(1900, now + 2.7);
	carrier.frequency.linearRampToValueAtTime(1500, now + 3.0);
	const carrierGain = ctx.createGain();
	carrierGain.gain.value = 0.12;
	carrierGain.connect(masterGain);
	carrier.connect(carrierGain);
	carrier.start(now + 1.7);
	carrier.stop(now + 3.0);

	// White noise burst
	const bufferSize = Math.floor(ctx.sampleRate * 2);
	const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
	const output = noiseBuffer.getChannelData(0);
	for (let i = 0; i < bufferSize; i++) {
		output[i] = Math.random() * 2 - 1;
	}
	const noise = ctx.createBufferSource();
	noise.buffer = noiseBuffer;
	const filter = ctx.createBiquadFilter();
	filter.type = 'bandpass';
	filter.frequency.value = 1800;
	filter.Q.value = 3;
	const noiseGain = ctx.createGain();
	noiseGain.gain.value = 0.08;
	noiseGain.connect(masterGain);
	noise.connect(filter);
	filter.connect(noiseGain);
	noise.start(now + 2.2);
	noise.stop(now + 3.8);

	// Training sequence
	const train = ctx.createOscillator();
	train.frequency.value = 1650;
	train.type = 'square';
	const trainGain = ctx.createGain();
	trainGain.gain.value = 0.08;
	trainGain.connect(masterGain);
	train.connect(trainGain);
	train.start(now + 3.0);
	train.stop(now + 3.5);

	// Fade out
	masterGain.gain.setValueAtTime(0.15, now + 3.2);
	masterGain.gain.linearRampToValueAtTime(0, now + 3.8);
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
	}, 200);
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
