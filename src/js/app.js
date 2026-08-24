/**
 * @file Interactive terminal portfolio
 * @description Keyboard-first portfolio shell with command history, shortcuts,
 * accessible output, and embedded retro games.
 */

import {
	name, role, location, profile, skills, experience,
	openSource, links, version, downloadCv,
} from './index.js';
import { initSpaceInvaders } from './games/spaceInvaders.js';
import { initTetris } from './games/tetris.js';
import { initPong } from './games/pong.js';
import { initFlappyBird } from './games/flappyBird.js';

/** @typedef {'space' | 'tetris' | 'pong' | 'flappy'} GameName */
/** @typedef {{ label: string, key: string }} GameControl */

const PROMPT = 'alberto@portfolio:~';
const COMMAND_NAMES = Object.freeze([
	'help', 'about', 'skills', 'experience', 'projects', 'contact', 'cv',
	'games', 'play', 'ls', 'tree', 'neofetch', 'history', 'date', 'clear',
]);
const MOBILE_COMMANDS = Object.freeze([
	['help', 'help'], ['about', 'about'], ['skills', 'skills'],
	['projects', 'projects'], ['games', 'games'], ['contact', 'contact'],
]);

/** @type {Readonly<Record<GameName, string>>} */
const GAME_TITLES = Object.freeze({
	space: 'SPACE INVADERS', tetris: 'TETRIS', pong: 'PONG', flappy: 'FLAPPY BIRD',
});

/** @type {Readonly<Record<GameName, readonly GameControl[]>>} */
const GAME_CONTROLS = Object.freeze({
	space: [
		{ label: 'START', key: 'Enter' }, { label: '←', key: 'ArrowLeft' },
		{ label: 'FIRE', key: ' ' }, { label: '→', key: 'ArrowRight' },
	],
	tetris: [
		{ label: 'START', key: 'Enter' }, { label: '←', key: 'ArrowLeft' },
		{ label: 'ROT', key: 'ArrowUp' }, { label: '→', key: 'ArrowRight' },
		{ label: '↓', key: 'ArrowDown' },
	],
	pong: [
		{ label: 'START', key: 'Enter' }, { label: '↑', key: 'ArrowUp' },
		{ label: '↓', key: 'ArrowDown' },
	],
	flappy: [{ label: 'START', key: 'Enter' }, { label: 'FLAP', key: ' ' }],
});

/** @type {Readonly<Record<GameName, (canvas: HTMLCanvasElement, onExit: () => void) => (() => void)>>} */
const GAME_INIT = Object.freeze({
	space: initSpaceInvaders, tetris: initTetris, pong: initPong, flappy: initFlappyBird,
});

const REPEATING_CONTROL_KEYS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowDown']);
/** @type {Map<number, { key: string, button: HTMLElement, delayId?: number, intervalId?: number }>} */
const activeControlPointers = new Map();
/** @type {string[]} */
const commandHistory = [];
let historyIndex = 0;
/** @type {(() => void) | null} */
let gameCleanup = null;

const app = /** @type {HTMLDivElement} */ (document.getElementById('app'));

function terminalHTML() {
	const shortcuts = MOBILE_COMMANDS.map(([label, command]) =>
		`<button class="mobile-command" type="button" data-command="${command}">${label}</button>`
	).join('');

	return `<main class="terminal" aria-label="Alberto Barrago portfolio terminal">
		<div class="terminal-glow" aria-hidden="true"></div>
		<section class="terminal-output" id="terminal-output" role="log" aria-live="polite" aria-relevant="additions"></section>
		<div class="terminal-bottom">
			<form class="terminal-input-line" id="terminal-form" autocomplete="off">
				<label class="sr-only" for="terminal-input">Terminal command</label>
				<span class="prompt" aria-hidden="true"><span class="prompt-user">${PROMPT}</span><span class="prompt-symbol">$</span></span>
				<input id="terminal-input" class="terminal-input" name="command" type="text"
					autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
					aria-describedby="terminal-hint" autofocus>
			</form>
			<p class="sr-only" id="terminal-hint">Type help to list available commands. Use up and down arrows for command history.</p>
			<nav class="mobile-commands" aria-label="Quick terminal commands">${shortcuts}</nav>
		</div>
	</main>
	<div class="crt-overlay" aria-hidden="true"></div>`;
}

function bannerHTML() {
	return `<div class="ascii-logo" aria-label="ALBZ">
<span class="accent">    _    _     ____  _____</span>
<span class="accent">   / \\  | |   | __ )|__  /</span>
<span class="accent">  / _ \\ | |   |  _ \\ / / </span>
<span class="accent"> / ___ \\| |___| |_) / /_ </span>
<span class="accent">/_/   \\_\\_____|____/____|</span></div>
<div class="boot-copy"><span class="muted">Portfolio shell v${version}</span>
<span>${role} · Product Builder</span>

10+ years shipping production software used by millions.
Technical leadership · Architecture · Web · Mobile · Cloud · AI

I turn ambiguity into reliable systems and useful products.
<span class="muted">Based in ${location}</span>

Type <button class="inline-command command" data-command="help">help</button> to explore, or use the shortcuts below.</div>`;
}

function helpHTML() {
	const commands = [
		['about', 'Short profile and current role'],
		['skills', 'Technical toolbox by area'],
		['experience', 'Professional timeline'],
		['projects', 'Selected open-source work'],
		['contact', 'Ways to get in touch'],
		['cv', 'Download my resume'],
		['games', 'List embedded retro games'],
		['play &lt;game&gt;', 'Launch space, tetris, pong, or flappy'],
		['ls / tree', 'Browse the portfolio filesystem'],
		['neofetch', 'Compact system profile'],
		['history / date / clear', 'Terminal utilities'],
	];

	return `<div class="output-title">Available commands</div>
<div class="command-list">${commands.map(([command, description]) =>
		`<div><button class="inline-command command" data-command="${command.split(' ')[0]}">${command}</button><span class="muted">${description}</span></div>`
	).join('')}</div>
<div class="output-note">Tip: press <span class="key">Tab</span> to autocomplete and <span class="key">↑</span>/<span class="key">↓</span> for history.</div>`;
}

function aboutHTML() {
	return `<div class="output-title">${name}</div>
<div class="key-value"><span class="label">role</span><span>${role}</span>
<span class="label">location</span><span>${location}</span>
<span class="label">focus</span><span>Product engineering · architecture · technical leadership</span>
<span class="label">status</span><span class="green">Building useful things</span></div>
<p class="prose">${profile}</p>
<div class="output-links"><button class="inline-command command" data-command="projects">view projects</button><button class="inline-command command" data-command="contact">contact me</button><button class="inline-command command" data-command="cv">download cv</button></div>`;
}

function skillsHTML() {
	return `<div class="output-title">Technical toolbox</div>
<div class="skills-list">${Object.entries(skills).map(([category, items]) =>
		`<div class="skill-row"><span class="label">${category}</span><span>${items.join('  ·  ')}</span></div>`
	).join('')}</div>`;
}

function experienceHTML() {
	return `<div class="output-title">Experience</div>
<div class="timeline">${experience.map((job) => `<article class="timeline-item">
	<span class="timeline-period">${job.period}</span>
	<div><div><span class="green">${job.role}</span> <span class="muted">@ ${job.company}</span></div>
	<p>${job.highlight}</p></div>
</article>`).join('')}</div>`;
}

function projectsHTML() {
	return `<div class="output-title">Selected projects</div>
<div class="project-list">${openSource.map((project) => `<article class="project-item">
	<div><a class="terminal-link project-name" href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name} ↗</a><span class="project-language">${project.language}</span></div>
	<p>${project.description}</p>
</article>`).join('')}</div>`;
}

function contactHTML() {
	return `<div class="output-title">Let's build something useful</div>
<div class="key-value"><span class="label">email</span><a class="terminal-link" href="${links.email}">albertobarrago@gmail.com</a>
<span class="label">github</span><a class="terminal-link" href="${links.github}" target="_blank" rel="noopener noreferrer">github.com/AlbertoBarrago ↗</a>
<span class="label">bluesky</span><a class="terminal-link" href="${links.bsky}" target="_blank" rel="noopener noreferrer">@albzoser.bsky.social ↗</a>
<span class="label">location</span><span>${location}</span></div>`;
}

function gamesHTML() {
	return `<div class="output-title">/games</div>
<div class="game-list">${Object.entries(GAME_TITLES).map(([game, title]) =>
		`<button class="game-command" data-command="play ${game}"><span>${title}</span><span class="muted">play ${game}</span></button>`
	).join('')}</div>
<div class="output-note">Games open fullscreen. Press <span class="key">Esc</span> to return.</div>`;
}

function treeHTML() {
	return `<div class="tree"><span class="blue">~</span>
├── <button class="inline-command file" data-command="about">about.txt</button>
├── <button class="inline-command directory" data-command="skills">skills/</button>
├── <button class="inline-command file" data-command="experience">experience.log</button>
├── <button class="inline-command directory" data-command="projects">projects/</button>
├── <button class="inline-command file" data-command="contact">contact.vcf</button>
├── <button class="inline-command file" data-command="cv">albertobarrago_cv.pdf</button>
└── <button class="inline-command directory" data-command="games">games/</button></div>`;
}

function neofetchHTML() {
	return `<div class="neofetch"><div class="neofetch-mark" aria-hidden="true">╭─────╮
│ A B │
│ L Z │
╰─────╯</div><div><span class="accent">${name}</span>
<span class="muted">─${'─'.repeat(name.length - 1)}</span>
<span><span class="label">Role:</span> ${role}</span>
<span><span class="label">Base:</span> ${location}</span>
<span><span class="label">Stack:</span> JavaScript, Swift, Java, Python</span>
<span><span class="label">Shell:</span> albz-sh ${version}</span>
<span><span class="label">Runtime:</span> Vanilla JS, zero dependencies</span>
<span class="palette"><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`;
}

function lsHTML() {
	return `<div class="ls-output"><button class="inline-command file" data-command="about">about.txt</button><button class="inline-command directory" data-command="skills">skills/</button><button class="inline-command file" data-command="experience">experience.log</button><button class="inline-command directory" data-command="projects">projects/</button><button class="inline-command file" data-command="contact">contact.vcf</button><button class="inline-command directory" data-command="games">games/</button></div>`;
}

/** @param {string} value */
function commandEcho(value) {
	const block = document.createElement('div');
	block.className = 'output-block command-echo';
	const prompt = document.createElement('span');
	prompt.className = 'prompt';
	prompt.innerHTML = `<span class="prompt-user">${PROMPT}</span><span class="prompt-symbol">$</span>`;
	const command = document.createElement('span');
	command.textContent = value;
	block.append(prompt, command);
	output.appendChild(block);
}

/** @param {string} html @param {string} [className] */
function appendOutput(html, className = '') {
	const block = document.createElement('div');
	block.className = `output-block ${className}`.trim();
	block.innerHTML = html;
	output.appendChild(block);
	requestAnimationFrame(() => { output.scrollTop = output.scrollHeight; });
}

/** @param {string} rawCommand */
function executeCommand(rawCommand) {
	const value = rawCommand.trim();
	if (!value) return;

	commandEcho(value);
	if (commandHistory.at(-1) !== value) commandHistory.push(value);
	historyIndex = commandHistory.length;
	const [rawName, ...args] = value.split(/\s+/);
	const command = rawName.toLowerCase();
	const argument = args.join(' ').toLowerCase();

	if (command === 'clear') {
		output.replaceChildren();
		return;
	}

	if (['about', 'whoami', 'cat'].includes(command)) {
		if (command !== 'cat' || !argument || argument === 'about.txt') appendOutput(aboutHTML());
		else if (argument === 'contact.vcf') appendOutput(contactHTML());
		else appendOutput(`<span class="red">cat: ${escapeHTML(argument)}: No such file</span>`);
		return;
	}

	const renderers = /** @type {Record<string, () => string>} */ ({
		help: helpHTML, skills: skillsHTML, experience: experienceHTML,
		projects: projectsHTML, contact: contactHTML, games: gamesHTML,
		ls: lsHTML, tree: treeHTML, neofetch: neofetchHTML,
	});
	if (renderers[command]) {
		appendOutput(renderers[command]());
		return;
	}

	if (command === 'cv') {
		downloadCv();
		appendOutput('<span class="green">Downloading albertobarrago_cv.pdf…</span>');
		return;
	}
	if (command === 'history') {
		appendOutput(commandHistory.map((entry, index) => `<div><span class="muted">${String(index + 1).padStart(3, ' ')}</span>  ${escapeHTML(entry)}</div>`).join(''));
		return;
	}
	if (command === 'date') {
		appendOutput(new Intl.DateTimeFormat(undefined, { dateStyle: 'full', timeStyle: 'long' }).format(new Date()));
		return;
	}
	if (command === 'play') {
		if (isGameName(argument)) {
			appendOutput(`<span class="green">Launching ${GAME_TITLES[argument]}…</span>`);
			launchGame(argument);
		} else {
			appendOutput(`<span class="red">Unknown game${argument ? `: ${escapeHTML(argument)}` : ''}.</span> Try <button class="inline-command command" data-command="games">games</button>.`);
		}
		return;
	}
	if (command === 'sudo' && argument === 'hire alberto') {
		appendOutput('<span class="green">Permission granted. Opening contact details…</span>');
		appendOutput(contactHTML());
		return;
	}
	appendOutput(`<span class="red">command not found: ${escapeHTML(command)}</span><br>Type <button class="inline-command command" data-command="help">help</button> to see available commands.`);
}

/** @param {string} value */
function escapeHTML(value) {
	return value.replace(/[&<>"']/g, (character) => ({
		'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
	})[character] ?? character);
}

/** @param {string} value @returns {value is GameName} */
function isGameName(value) {
	return Object.hasOwn(GAME_INIT, value);
}

/** @param {GameName} type */
function gameOverlayHTML(type) {
	const controls = GAME_CONTROLS[type].map((control) =>
		`<button class="game-control-button" type="button" data-control-key="${control.key}">${control.label}</button>`
	).join('');
	return `<div class="game-fullscreen" id="game-overlay">
		<div class="game-scanlines" aria-hidden="true"></div>
		<div class="game-topbar"><span class="game-title">${GAME_TITLES[type]}</span><button class="game-exit" type="button" data-action="exit-game">ESC · CLOSE</button></div>
		<canvas class="game-canvas" aria-label="${GAME_TITLES[type]} game"></canvas>
		<div class="game-touch-controls">${controls}</div>
	</div>`;
}

/** @param {GameName} type */
function launchGame(type) {
	exitGame();
	input.blur();
	const wrapper = document.createElement('div');
	wrapper.innerHTML = gameOverlayHTML(type);
	const overlay = /** @type {HTMLDivElement} */ (wrapper.firstElementChild);
	app.appendChild(overlay);
	const canvas = /** @type {HTMLCanvasElement} */ (overlay.querySelector('.game-canvas'));
	requestAnimationFrame(() => {
		if (overlay.isConnected) gameCleanup = GAME_INIT[type](canvas, exitGame);
	});
}

function exitGame() {
	gameCleanup?.();
	gameCleanup = null;
	releaseAllGameControls();
	document.getElementById('game-overlay')?.remove();
	input?.focus({ preventScroll: true });
}

/** @param {string} key @param {'keydown' | 'keyup'} type */
function dispatchGameKey(key, type) {
	window.dispatchEvent(new KeyboardEvent(type, { key, bubbles: true, cancelable: true }));
}

/** @param {PointerEvent} event */
function pressGameControl(event) {
	const target = /** @type {HTMLElement} */ (event.target);
	const button = /** @type {HTMLElement | null} */ (target.closest('[data-control-key]'));
	const key = button?.dataset.controlKey;
	if (!button || !key) return;
	event.preventDefault();
	button.setPointerCapture?.(event.pointerId);
	const active = /** @type {{ key: string, button: HTMLElement, delayId?: number, intervalId?: number }} */ ({ key, button });
	activeControlPointers.set(event.pointerId, active);
	button.classList.add('is-pressed');
	dispatchGameKey(key, 'keydown');
	if (REPEATING_CONTROL_KEYS.has(key)) {
		active.delayId = window.setTimeout(() => {
			active.intervalId = window.setInterval(() => dispatchGameKey(key, 'keydown'), 85);
		}, 220);
	}
}

/** @param {PointerEvent} event */
function releaseGameControl(event) {
	const active = activeControlPointers.get(event.pointerId);
	if (!active) return;
	event.preventDefault();
	if (active.delayId) window.clearTimeout(active.delayId);
	if (active.intervalId) window.clearInterval(active.intervalId);
	active.button.classList.remove('is-pressed');
	activeControlPointers.delete(event.pointerId);
	dispatchGameKey(active.key, 'keyup');
}

function releaseAllGameControls() {
	for (const active of activeControlPointers.values()) {
		if (active.delayId) window.clearTimeout(active.delayId);
		if (active.intervalId) window.clearInterval(active.intervalId);
		active.button.classList.remove('is-pressed');
		dispatchGameKey(active.key, 'keyup');
	}
	activeControlPointers.clear();
}

app.innerHTML = terminalHTML();
const output = /** @type {HTMLElement} */ (document.getElementById('terminal-output'));
const form = /** @type {HTMLFormElement} */ (document.getElementById('terminal-form'));
const input = /** @type {HTMLInputElement} */ (document.getElementById('terminal-input'));
appendOutput(bannerHTML(), 'welcome-block');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const value = input.value;
	input.value = '';
	executeCommand(value);
});

input.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
		event.preventDefault();
		const direction = event.key === 'ArrowUp' ? -1 : 1;
		historyIndex = Math.max(0, Math.min(commandHistory.length, historyIndex + direction));
		input.value = commandHistory[historyIndex] ?? '';
		requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
		return;
	}
	if (event.key === 'Tab') {
		event.preventDefault();
		const prefix = input.value.trim().toLowerCase();
		const matches = COMMAND_NAMES.filter((command) => command.startsWith(prefix));
		if (matches.length === 1) input.value = matches[0];
		else if (matches.length > 1) appendOutput(matches.map((match) => `<span class="command">${match}</span>`).join('  '));
	}
});

app.addEventListener('click', (event) => {
	const target = /** @type {HTMLElement} */ (event.target);
	const commandTarget = /** @type {HTMLElement | null} */ (target.closest('[data-command]'));
	if (commandTarget?.dataset.command) executeCommand(commandTarget.dataset.command);
	if (target.closest('[data-action="exit-game"]')) exitGame();
	if (!target.closest('a') && !document.getElementById('game-overlay')) input.focus({ preventScroll: true });
});

app.addEventListener('pointerdown', pressGameControl);
app.addEventListener('pointerup', releaseGameControl);
app.addEventListener('pointercancel', releaseGameControl);
app.addEventListener('lostpointercapture', releaseGameControl);
window.addEventListener('blur', releaseAllGameControls);
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && document.getElementById('game-overlay')) exitGame();
});
