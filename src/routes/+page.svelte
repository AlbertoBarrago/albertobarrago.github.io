<script>
	import { onDestroy } from 'svelte';
	import {
		name,
		role,
		location,
		profile,
		skills,
		experience,
		links,
		version,
		downloadCv
	} from '../js/index.js';
	import { initSpaceInvaders } from '../js/games/spaceInvaders.js';
	import { initTetris } from '../js/games/tetris.js';
	import { initPong } from '../js/games/pong.js';
	import '../styles/page.css';

	let currentSection = 'about';
	let bootComplete = false;
	let started = false;
	/** @type {string[]} */
	let bootLines = [];

	/** @type {string|null} */
	let activeGame = null;
	/** @type {HTMLCanvasElement|null} */
	let gameCanvas = null;
	/** @type {(() => void)|null} */
	let gameCleanup = null;

	const GAME_TITLES = /** @type {Record<string, string>} */ ({
		space: 'SPACE INVADERS',
		tetris: 'TETRIS',
		pong: 'PONG'
	});

	const bootSequence = [
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
		`Welcome, visitor!`,
		'',
		'Type HELP for commands or click menu items.',
		''
	];

	function playModemSound() {
		const AudioCtx = window.AudioContext || /** @type {typeof AudioContext} */ (/** @type {any} */ (window).webkitAudioContext);
		const ctx = new AudioCtx();
		const masterGain = ctx.createGain();
		masterGain.gain.value = 0.15;
		masterGain.connect(ctx.destination);

		const now = ctx.currentTime;

		const dtmfPairs = [
			[941, 1336], [770, 1209], [852, 1477], [697, 1336],
			[770, 1336], [852, 1209], [941, 1209]
		];
		dtmfPairs.forEach((pair, i) => {
			pair.forEach(freq => {
				const osc = ctx.createOscillator();
				osc.frequency.value = freq;
				osc.type = 'sine';
				const g = ctx.createGain();
				g.gain.value = 0.3;
				g.connect(masterGain);
				osc.connect(g);
				osc.start(now + i * 0.1);
				osc.stop(now + i * 0.1 + 0.08);
			});
		});

		const answer = ctx.createOscillator();
		answer.frequency.value = 2100;
		answer.type = 'sine';
		const answerGain = ctx.createGain();
		answerGain.gain.value = 0.2;
		answerGain.connect(masterGain);
		answer.connect(answerGain);
		answer.start(now + 1.0);
		answer.stop(now + 1.6);

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

		const train = ctx.createOscillator();
		train.frequency.value = 1650;
		train.type = 'square';
		const trainGain = ctx.createGain();
		trainGain.gain.value = 0.08;
		trainGain.connect(masterGain);
		train.connect(trainGain);
		train.start(now + 3.0);
		train.stop(now + 3.5);

		masterGain.gain.setValueAtTime(0.15, now + 3.2);
		masterGain.gain.linearRampToValueAtTime(0, now + 3.8);
	}

	function startBoot() {
		if (started) return;
		started = true;
		playModemSound();

		let i = 0;
		const interval = setInterval(() => {
			if (i < bootSequence.length) {
				bootLines = [...bootLines, bootSequence[i]];
				i++;
			} else {
				clearInterval(interval);
				bootComplete = true;
			}
		}, 200);
	}

	/** @param {string} section */
	function setSection(section) {
		currentSection = section;
	}

	function cleanupGame() {
		if (gameCleanup) {
			gameCleanup();
			gameCleanup = null;
		}
	}

	function exitGame() {
		cleanupGame();
		activeGame = null;
	}

	/** @param {string} type */
	function launchGame(type) {
		cleanupGame();
		activeGame = type;
		setTimeout(() => {
			if (!gameCanvas) return;
			if (type === 'space') gameCleanup = initSpaceInvaders(gameCanvas, exitGame);
			else if (type === 'tetris') gameCleanup = initTetris(gameCanvas, exitGame);
			else if (type === 'pong') gameCleanup = initPong(gameCanvas, exitGame);
		}, 0);
	}

	onDestroy(() => { cleanupGame(); });
</script>

{#if !started}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="start-overlay" onclick={startBoot}>
		<div class="start-content">
			<div class="start-ascii">
				<pre>
     _    __  __ ___ ____    _
    / \  |  \/  |_ _/ ___|  / \
   / _ \ | |\/| || | |  _  / _ \
  / ___ \| |  | || | |_| |/ ___ \
 /_/   \_\_|  |_|___\____/_/   \_\
				</pre>
			</div>
			<p class="start-title">WORKBENCH 3.1</p>
			<p class="start-prompt blink">[ Click anywhere to connect ]</p>
		</div>
	</div>
{:else}
<div class="amiga-screen">
	<div class="monitor-frame">
		<div class="screen-bezel">
			<div class="crt-screen">
				<!-- Title bar -->
				<div class="title-bar">
					<div class="title-bar-left">
						<span class="window-button close"></span>
					</div>
					<span class="title-text">Alberto Barrago - Portfolio v{version}</span>
					<div class="title-bar-right">
						<span class="window-button depth"></span>
						<span class="window-button zoom"></span>
					</div>
				</div>

				<!-- Menu bar -->
				<nav class="menu-bar">
					<button
						class="menu-item"
						class:active={currentSection === 'about'}
						onclick={() => setSection('about')}
					>
						About
					</button>
					<button
						class="menu-item"
						class:active={currentSection === 'skills'}
						onclick={() => setSection('skills')}
					>
						Skills
					</button>
					<button
						class="menu-item"
						class:active={currentSection === 'experience'}
						onclick={() => setSection('experience')}
					>
						Experience
					</button>
					<button
						class="menu-item"
						class:active={currentSection === 'contact'}
						onclick={() => setSection('contact')}
					>
						Contact
					</button>
				</nav>

				<!-- Content area -->
				<div class="content-area">
					{#if !bootComplete}
						<div class="boot-screen">
							{#each bootLines as line}
								<div class="boot-line">{line}</div>
							{/each}
							<span class="cursor">_</span>
						</div>
					{:else}
						{#if currentSection === 'about'}
							<div class="section">
								<h1 class="section-title">> {name}</h1>
								<p class="role">{role}</p>
								<p class="location">{location}</p>
								<div class="divider"></div>
								<p class="profile">{profile}</p>
								<div class="action-buttons">
									<button class="amiga-btn" onclick={downloadCv}>
										Download CV
									</button>
									<a href={links.github} target="_blank" class="amiga-btn">
										GitHub
									</a>
								</div>
								<div class="desktop-icons">
									<!-- svelte-ignore a11y_click_events_have_key_events -->
									<!-- svelte-ignore a11y_no_static_element_interactions -->
									<div class="desktop-icon" onclick={() => launchGame('space')}>
										<div class="desktop-icon-img">
											<div class="icon-alien"></div>
										</div>
										<span class="desktop-icon-label">space.exe</span>
									</div>
									<!-- svelte-ignore a11y_click_events_have_key_events -->
									<!-- svelte-ignore a11y_no_static_element_interactions -->
									<div class="desktop-icon" onclick={() => launchGame('tetris')}>
										<div class="desktop-icon-img">
											<div class="icon-tetris"></div>
										</div>
										<span class="desktop-icon-label">tetris.exe</span>
									</div>
									<!-- svelte-ignore a11y_click_events_have_key_events -->
									<!-- svelte-ignore a11y_no_static_element_interactions -->
									<div class="desktop-icon" onclick={() => launchGame('pong')}>
										<div class="desktop-icon-img">
											<div class="icon-pong"></div>
										</div>
										<span class="desktop-icon-label">pong.exe</span>
									</div>
								</div>
							</div>
						{/if}

						{#if currentSection === 'skills'}
							<div class="section">
								<h1 class="section-title">> Skills</h1>
								<div class="skills-grid">
									<div class="skill-category">
										<h3>Frontend</h3>
										<ul>
											{#each skills.frontend as skill}
												<li>{skill}</li>
											{/each}
										</ul>
									</div>
									<div class="skill-category">
										<h3>Backend</h3>
										<ul>
											{#each skills.backend as skill}
												<li>{skill}</li>
											{/each}
										</ul>
									</div>
									<div class="skill-category">
										<h3>Database</h3>
										<ul>
											{#each skills.database as skill}
												<li>{skill}</li>
											{/each}
										</ul>
									</div>
									<div class="skill-category">
										<h3>DevOps</h3>
										<ul>
											{#each skills.devops as skill}
												<li>{skill}</li>
											{/each}
										</ul>
									</div>
									<div class="skill-category">
										<h3>Tools</h3>
										<ul>
											{#each skills.tools as skill}
												<li>{skill}</li>
											{/each}
										</ul>
									</div>
									<div class="skill-category">
										<h3>AI</h3>
										<ul>
											{#each skills.ai as skill}
												<li>{skill}</li>
											{/each}
										</ul>
									</div>
								</div>
							</div>
						{/if}

						{#if currentSection === 'experience'}
							<div class="section">
								<h1 class="section-title">> Experience</h1>
								<div class="experience-list">
									{#each experience as job}
										<div class="job-item">
											<div class="job-header">
												<span class="job-role">{job.role}</span>
												<span class="job-period">{job.period}</span>
											</div>
											<div class="job-company">{job.company}</div>
											<div class="job-highlight">{job.highlight}</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						{#if currentSection === 'contact'}
							<div class="section">
								<h1 class="section-title">> Contact</h1>
								<div class="contact-info">
									<p><span class="label">Email:</span> <a href={links.email}>albertobarrago@gmail.com</a></p>
									<p><span class="label">GitHub:</span> <a href={links.github} target="_blank">github.com/AlbertoBarrago</a></p>
									<p><span class="label">Blog:</span> <a href={links.blog} target="_blank">alblog.gigalixirapp.com</a></p>
									<p><span class="label">Location:</span> {location}</p>
								</div>
								<div class="action-buttons">
									<button class="amiga-btn" onclick={downloadCv}>
										Download CV
									</button>
								</div>
							</div>
						{/if}
					{/if}
				</div>

				<!-- Status bar -->
				<div class="status-bar">
					<span>Chip: 2048K</span>
					<span>Fast: 8192K</span>
					<span class="status-right">v{version}</span>
				</div>

				<!-- CRT effects -->
				<div class="scanlines"></div>
				<div class="crt-flicker"></div>
			</div>
		</div>
	</div>
</div>

{#if activeGame}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="game-fullscreen">
		<div class="game-scanlines"></div>
		<div class="game-topbar">
			<span class="game-title">{GAME_TITLES[activeGame] || ''}</span>
			<span class="game-exit" onclick={exitGame}>[X] Close</span>
		</div>
		<canvas class="game-canvas" bind:this={gameCanvas}></canvas>
	</div>
{/if}
{/if}

