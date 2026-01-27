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

	let currentSection = 'about';
	let bootComplete = false;
	let started = false;
	/** @type {string[]} */
	let bootLines = [];

	/** @type {string|null} */
	let activeGame = null;
	/** @type {HTMLCanvasElement|null} */
	let gameCanvas = null;
	/** @type {number|null} */
	let animFrameId = null;
	/** @type {((e: KeyboardEvent) => void)|null} */
	let gameKeyHandler = null;
	/** @type {((e: KeyboardEvent) => void)|null} */
	let gameKeyUpHandler = null;
	/** @type {ResizeObserver|null} */
	let gameResizeObs = null;

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
		if (animFrameId !== null) {
			cancelAnimationFrame(animFrameId);
			animFrameId = null;
		}
		if (gameKeyHandler) {
			window.removeEventListener('keydown', gameKeyHandler);
			gameKeyHandler = null;
		}
		if (gameKeyUpHandler) {
			window.removeEventListener('keyup', gameKeyUpHandler);
			gameKeyUpHandler = null;
		}
		if (gameResizeObs) {
			gameResizeObs.disconnect();
			gameResizeObs = null;
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
			if (type === 'space') initSpaceInvaders();
			else if (type === 'tetris') initTetris();
			else if (type === 'pong') initPong();
		}, 0);
	}

	// ─── SPACE INVADERS ───
	function initSpaceInvaders() {
		const canvas = gameCanvas;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const COLS = 8, ROWS = 5, ALIEN_W = 32, ALIEN_H = 24, ALIEN_PAD = 12;
		const PLAYER_W = 40, PLAYER_H = 20, BULLET_W = 3, BULLET_H = 12;
		const PLAYER_SPEED = 5, BULLET_SPEED = 7, ALIEN_BULLET_SPEED = 4;
		const ALIEN_FIRE_CHANCE = 0.003;
		const ROW_COLORS = ['#ff6b6b', '#ff6b6b', '#ffbd2e', '#ffbd2e', '#00ff41'];

		let gameState = 'waiting';
		let score = 0, lives = 3;
		let highScore = parseInt(localStorage.getItem('spaceInvadersHigh') || '0', 10);

		function resize() { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; }
		resize();
		gameResizeObs = new ResizeObserver(resize);
		gameResizeObs.observe(canvas);

		let playerX = canvas.width / 2 - PLAYER_W / 2;
		const playerY = () => canvas.height - 40;

		/** @type {{x:number,y:number,row:number,alive:boolean}[]} */
		let aliens = [];
		let alienDirX = 1, alienMoveTimer = 0, alienMoveInterval = 40;
		const alienStepX = 10, alienStepY = 20;

		function resetAliens() {
			aliens = [];
			const gridW = COLS * (ALIEN_W + ALIEN_PAD) - ALIEN_PAD;
			const startX = (canvas.width - gridW) / 2;
			for (let r = 0; r < ROWS; r++)
				for (let c = 0; c < COLS; c++)
					aliens.push({ x: startX + c * (ALIEN_W + ALIEN_PAD), y: 60 + r * (ALIEN_H + ALIEN_PAD), row: r, alive: true });
			alienDirX = 1; alienMoveTimer = 0; alienMoveInterval = 40;
		}

		/** @type {{x:number,y:number}[]} */ let playerBullets = [];
		/** @type {{x:number,y:number}[]} */ let alienBullets = [];
		let shootCooldown = 0;
		const keys = /** @type {Record<string,boolean>} */ ({});

		gameKeyHandler = (e) => {
			if (e.key === 'Escape') { exitGame(); return; }
			if ((gameState === 'waiting' || gameState === 'gameover' || gameState === 'won') && e.key === 'Enter') {
				gameState = 'playing'; score = 0; lives = 3;
				playerBullets = []; alienBullets = [];
				playerX = canvas.width / 2 - PLAYER_W / 2;
				resetAliens();
			}
			keys[e.key] = true;
			if (e.key === ' ' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') e.preventDefault();
		};
		gameKeyUpHandler = (e) => { keys[e.key] = false; };
		window.addEventListener('keydown', gameKeyHandler);
		window.addEventListener('keyup', gameKeyUpHandler);

		function update() {
			if (gameState !== 'playing') return;
			if (keys['ArrowLeft'] && playerX > 0) playerX -= PLAYER_SPEED;
			if (keys['ArrowRight'] && playerX < canvas.width - PLAYER_W) playerX += PLAYER_SPEED;
			if (shootCooldown > 0) shootCooldown--;
			if (keys[' '] && shootCooldown === 0) {
				playerBullets.push({ x: playerX + PLAYER_W / 2 - BULLET_W / 2, y: playerY() - BULLET_H });
				shootCooldown = 15;
			}
			for (let i = playerBullets.length - 1; i >= 0; i--) {
				playerBullets[i].y -= BULLET_SPEED;
				if (playerBullets[i].y < 0) { playerBullets.splice(i, 1); continue; }
				for (const alien of aliens) {
					if (!alien.alive) continue;
					if (playerBullets[i] && playerBullets[i].x < alien.x + ALIEN_W && playerBullets[i].x + BULLET_W > alien.x && playerBullets[i].y < alien.y + ALIEN_H && playerBullets[i].y + BULLET_H > alien.y) {
						alien.alive = false; playerBullets.splice(i, 1); score += 10;
						if (score > highScore) { highScore = score; localStorage.setItem('spaceInvadersHigh', String(highScore)); }
						const aliveCount = aliens.filter(a => a.alive).length;
						if (aliveCount > 0) alienMoveInterval = Math.max(4, Math.floor(40 * (aliveCount / (ROWS * COLS))));
						break;
					}
				}
			}
			if (aliens.every(a => !a.alive)) { gameState = 'won'; return; }
			alienMoveTimer++;
			if (alienMoveTimer >= alienMoveInterval) {
				alienMoveTimer = 0;
				let shouldDrop = false;
				for (const alien of aliens) {
					if (!alien.alive) continue;
					if ((alienDirX > 0 && alien.x + ALIEN_W + alienStepX > canvas.width - 10) || (alienDirX < 0 && alien.x - alienStepX < 10)) { shouldDrop = true; break; }
				}
				if (shouldDrop) { alienDirX *= -1; for (const a of aliens) a.y += alienStepY; }
				else { for (const a of aliens) a.x += alienStepX * alienDirX; }
				for (const a of aliens) { if (a.alive && a.y + ALIEN_H >= playerY()) { gameState = 'gameover'; return; } }
			}
			for (const alien of aliens.filter(a => a.alive)) {
				if (Math.random() < ALIEN_FIRE_CHANCE) alienBullets.push({ x: alien.x + ALIEN_W / 2 - BULLET_W / 2, y: alien.y + ALIEN_H });
			}
			for (let i = alienBullets.length - 1; i >= 0; i--) {
				alienBullets[i].y += ALIEN_BULLET_SPEED;
				if (alienBullets[i].y > canvas.height) { alienBullets.splice(i, 1); continue; }
				if (alienBullets[i].x < playerX + PLAYER_W && alienBullets[i].x + BULLET_W > playerX && alienBullets[i].y < playerY() + PLAYER_H && alienBullets[i].y + BULLET_H > playerY()) {
					alienBullets.splice(i, 1); lives--;
					if (lives <= 0) { gameState = 'gameover'; return; }
				}
			}
		}

		function draw() {
			ctx.fillStyle = '#0a0a0a'; ctx.fillRect(0, 0, canvas.width, canvas.height);
			if (gameState === 'waiting') {
				ctx.fillStyle = '#00ff41'; ctx.textAlign = 'center'; ctx.font = '48px VT323, monospace';
				ctx.fillText('SPACE INVADERS', canvas.width / 2, canvas.height / 2 - 60);
				ctx.font = '24px VT323, monospace'; ctx.fillStyle = '#ffbd2e';
				ctx.fillText('PRESS ENTER TO START', canvas.width / 2, canvas.height / 2 + 10);
				ctx.fillStyle = '#888'; ctx.font = '18px VT323, monospace';
				ctx.fillText('Arrow Keys = Move | Space = Shoot | ESC = Exit', canvas.width / 2, canvas.height / 2 + 50);
				ctx.fillText('High Score: ' + highScore, canvas.width / 2, canvas.height / 2 + 80);
				ctx.textAlign = 'left'; return;
			}
			ctx.fillStyle = '#00bfff'; ctx.beginPath();
			ctx.moveTo(playerX + PLAYER_W / 2, playerY()); ctx.lineTo(playerX, playerY() + PLAYER_H); ctx.lineTo(playerX + PLAYER_W, playerY() + PLAYER_H);
			ctx.closePath(); ctx.fill();
			for (const alien of aliens) {
				if (!alien.alive) continue;
				ctx.fillStyle = ROW_COLORS[alien.row];
				ctx.fillRect(alien.x + 4, alien.y, ALIEN_W - 8, ALIEN_H - 4);
				ctx.fillRect(alien.x + 2, alien.y + 4, 6, 4); ctx.fillRect(alien.x + ALIEN_W - 8, alien.y + 4, 6, 4);
				ctx.fillRect(alien.x + 6, alien.y - 4, 3, 6); ctx.fillRect(alien.x + ALIEN_W - 9, alien.y - 4, 3, 6);
				ctx.fillRect(alien.x, alien.y + ALIEN_H - 6, 4, 6); ctx.fillRect(alien.x + ALIEN_W - 4, alien.y + ALIEN_H - 6, 4, 6);
			}
			ctx.fillStyle = '#00ff41'; for (const b of playerBullets) ctx.fillRect(b.x, b.y, BULLET_W, BULLET_H);
			ctx.fillStyle = '#ff6b6b'; for (const b of alienBullets) ctx.fillRect(b.x, b.y, BULLET_W, BULLET_H);
			ctx.fillStyle = '#00ff41'; ctx.font = '22px VT323, monospace';
			ctx.textAlign = 'left'; ctx.fillText('SCORE: ' + score, 10, 24);
			ctx.textAlign = 'center'; ctx.fillText('HIGH: ' + highScore, canvas.width / 2, 24);
			ctx.textAlign = 'right'; ctx.fillText('LIVES: ' + '\u2665'.repeat(lives), canvas.width - 10, 24);
			ctx.textAlign = 'left';
			if (gameState === 'gameover') {
				ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = '#ff6b6b'; ctx.textAlign = 'center'; ctx.font = '48px VT323, monospace';
				ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);
				ctx.fillStyle = '#ffbd2e'; ctx.font = '24px VT323, monospace';
				ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 + 20);
				ctx.fillStyle = '#888'; ctx.fillText('PRESS ENTER TO RESTART', canvas.width / 2, canvas.height / 2 + 60);
				ctx.textAlign = 'left';
			}
			if (gameState === 'won') {
				ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = '#00ff41'; ctx.textAlign = 'center'; ctx.font = '48px VT323, monospace';
				ctx.fillText('YOU WIN!', canvas.width / 2, canvas.height / 2 - 20);
				ctx.fillStyle = '#ffbd2e'; ctx.font = '24px VT323, monospace';
				ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 + 20);
				ctx.fillStyle = '#888'; ctx.fillText('PRESS ENTER TO PLAY AGAIN', canvas.width / 2, canvas.height / 2 + 60);
				ctx.textAlign = 'left';
			}
		}

		function gameLoop() { update(); draw(); animFrameId = requestAnimationFrame(gameLoop); }
		resetAliens(); gameLoop();
	}

	// ─── TETRIS ───
	function initTetris() {
		const canvas = gameCanvas;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const GRID_COLS = 10, GRID_ROWS = 20;
		const PIECES = [
			{ shape: [[1,1,1,1]], color: '#00bfff' },           // I
			{ shape: [[1,1],[1,1]], color: '#ffbd2e' },          // O
			{ shape: [[0,1,0],[1,1,1]], color: '#a855f7' },      // T
			{ shape: [[1,0,0],[1,1,1]], color: '#ff6b6b' },      // L
			{ shape: [[0,0,1],[1,1,1]], color: '#00ff41' },      // J
			{ shape: [[0,1,1],[1,1,0]], color: '#ff6b6b' },      // S
			{ shape: [[1,1,0],[0,1,1]], color: '#00ff41' }       // Z
		];

		let gameState = 'waiting';
		let score = 0, level = 1, lines = 0;
		let highScore = parseInt(localStorage.getItem('tetrisHigh') || '0', 10);

		/** @type {(string|null)[][]} */
		let grid = [];
		/** @type {{shape:number[][],color:string,x:number,y:number}|null} */
		let currentPiece = null;
		let dropTimer = 0, dropInterval = 45;

		function resize() { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; }
		resize();
		gameResizeObs = new ResizeObserver(resize);
		gameResizeObs.observe(canvas);

		function resetGrid() {
			grid = [];
			for (let r = 0; r < GRID_ROWS; r++) {
				grid.push(new Array(GRID_COLS).fill(null));
			}
		}

		function spawnPiece() {
			const p = PIECES[Math.floor(Math.random() * PIECES.length)];
			currentPiece = {
				shape: p.shape.map(r => [...r]),
				color: p.color,
				x: Math.floor((GRID_COLS - p.shape[0].length) / 2),
				y: 0
			};
			if (collides(currentPiece.shape, currentPiece.x, currentPiece.y)) {
				gameState = 'gameover';
				currentPiece = null;
			}
		}

		/** @param {number[][]} shape @param {number} px @param {number} py */
		function collides(shape, px, py) {
			for (let r = 0; r < shape.length; r++) {
				for (let c = 0; c < shape[r].length; c++) {
					if (!shape[r][c]) continue;
					const nx = px + c, ny = py + r;
					if (nx < 0 || nx >= GRID_COLS || ny >= GRID_ROWS) return true;
					if (ny >= 0 && grid[ny][nx]) return true;
				}
			}
			return false;
		}

		function lockPiece() {
			if (!currentPiece) return;
			for (let r = 0; r < currentPiece.shape.length; r++) {
				for (let c = 0; c < currentPiece.shape[r].length; c++) {
					if (!currentPiece.shape[r][c]) continue;
					const ny = currentPiece.y + r;
					if (ny >= 0) grid[ny][currentPiece.x + c] = currentPiece.color;
				}
			}
			clearLines();
			spawnPiece();
		}

		function clearLines() {
			let cleared = 0;
			for (let r = GRID_ROWS - 1; r >= 0; r--) {
				if (grid[r].every(c => c !== null)) {
					grid.splice(r, 1);
					grid.unshift(new Array(GRID_COLS).fill(null));
					cleared++; r++;
				}
			}
			if (cleared > 0) {
				const pts = [0, 100, 300, 500, 800];
				score += (pts[cleared] || 800) * level;
				lines += cleared;
				level = Math.floor(lines / 10) + 1;
				dropInterval = Math.max(5, 45 - (level - 1) * 4);
				if (score > highScore) { highScore = score; localStorage.setItem('tetrisHigh', String(highScore)); }
			}
		}

		/** @param {number[][]} shape */
		function rotateCW(shape) {
			const rows = shape.length, cols = shape[0].length;
			/** @type {number[][]} */
			const rotated = [];
			for (let c = 0; c < cols; c++) {
				rotated.push([]);
				for (let r = rows - 1; r >= 0; r--) {
					rotated[c].push(shape[r][c]);
				}
			}
			return rotated;
		}

		const keys = /** @type {Record<string,boolean>} */ ({});
		gameKeyHandler = (e) => {
			if (e.key === 'Escape') { exitGame(); return; }
			if ((gameState === 'waiting' || gameState === 'gameover') && e.key === 'Enter') {
				gameState = 'playing'; score = 0; level = 1; lines = 0;
				dropInterval = 45; resetGrid(); spawnPiece();
			}
			if (gameState !== 'playing' || !currentPiece) { keys[e.key] = true; return; }
			if (e.key === 'ArrowLeft') {
				if (!collides(currentPiece.shape, currentPiece.x - 1, currentPiece.y)) currentPiece.x--;
			} else if (e.key === 'ArrowRight') {
				if (!collides(currentPiece.shape, currentPiece.x + 1, currentPiece.y)) currentPiece.x++;
			} else if (e.key === 'ArrowDown') {
				if (!collides(currentPiece.shape, currentPiece.x, currentPiece.y + 1)) currentPiece.y++;
				else lockPiece();
			} else if (e.key === 'ArrowUp' || e.key === ' ') {
				const rotated = rotateCW(currentPiece.shape);
				if (!collides(rotated, currentPiece.x, currentPiece.y)) currentPiece.shape = rotated;
				else if (!collides(rotated, currentPiece.x - 1, currentPiece.y)) { currentPiece.shape = rotated; currentPiece.x--; }
				else if (!collides(rotated, currentPiece.x + 1, currentPiece.y)) { currentPiece.shape = rotated; currentPiece.x++; }
			}
			keys[e.key] = true;
			if (['ArrowLeft','ArrowRight','ArrowDown','ArrowUp',' '].includes(e.key)) e.preventDefault();
		};
		gameKeyUpHandler = (e) => { keys[e.key] = false; };
		window.addEventListener('keydown', gameKeyHandler);
		window.addEventListener('keyup', gameKeyUpHandler);

		function update() {
			if (gameState !== 'playing' || !currentPiece) return;
			dropTimer++;
			if (dropTimer >= dropInterval) {
				dropTimer = 0;
				if (!collides(currentPiece.shape, currentPiece.x, currentPiece.y + 1)) currentPiece.y++;
				else lockPiece();
			}
		}

		function draw() {
			ctx.fillStyle = '#0a0a0a'; ctx.fillRect(0, 0, canvas.width, canvas.height);

			const cellSize = Math.min(Math.floor((canvas.height - 60) / GRID_ROWS), Math.floor((canvas.width - 200) / GRID_COLS));
			const boardW = cellSize * GRID_COLS, boardH = cellSize * GRID_ROWS;
			const offX = Math.floor((canvas.width - boardW) / 2), offY = Math.floor((canvas.height - boardH) / 2) + 10;

			if (gameState === 'waiting') {
				ctx.fillStyle = '#00ff41'; ctx.textAlign = 'center'; ctx.font = '48px VT323, monospace';
				ctx.fillText('TETRIS', canvas.width / 2, canvas.height / 2 - 60);
				ctx.font = '24px VT323, monospace'; ctx.fillStyle = '#ffbd2e';
				ctx.fillText('PRESS ENTER TO START', canvas.width / 2, canvas.height / 2 + 10);
				ctx.fillStyle = '#888'; ctx.font = '18px VT323, monospace';
				ctx.fillText('Arrow Keys = Move | Up/Space = Rotate | ESC = Exit', canvas.width / 2, canvas.height / 2 + 50);
				ctx.fillText('High Score: ' + highScore, canvas.width / 2, canvas.height / 2 + 80);
				ctx.textAlign = 'left'; return;
			}

			// Board border
			ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
			ctx.strokeRect(offX - 1, offY - 1, boardW + 2, boardH + 2);

			// Grid
			for (let r = 0; r < GRID_ROWS; r++) {
				for (let c = 0; c < GRID_COLS; c++) {
					const x = offX + c * cellSize, y = offY + r * cellSize;
					if (grid[r][c]) {
						ctx.fillStyle = grid[r][c]; ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
					} else {
						ctx.fillStyle = '#111'; ctx.fillRect(x, y, cellSize, cellSize);
						ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = 0.5; ctx.strokeRect(x, y, cellSize, cellSize);
					}
				}
			}

			// Current piece
			if (currentPiece) {
				ctx.fillStyle = currentPiece.color;
				for (let r = 0; r < currentPiece.shape.length; r++) {
					for (let c = 0; c < currentPiece.shape[r].length; c++) {
						if (!currentPiece.shape[r][c]) continue;
						const x = offX + (currentPiece.x + c) * cellSize;
						const y = offY + (currentPiece.y + r) * cellSize;
						ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
					}
				}
			}

			// HUD
			ctx.fillStyle = '#00ff41'; ctx.font = '22px VT323, monospace';
			ctx.textAlign = 'left';
			ctx.fillText('SCORE: ' + score, 10, 24);
			ctx.fillText('LEVEL: ' + level, 10, 50);
			ctx.textAlign = 'center';
			ctx.fillText('HIGH: ' + highScore, canvas.width / 2, 24);
			ctx.textAlign = 'right';
			ctx.fillText('LINES: ' + lines, canvas.width - 10, 24);
			ctx.textAlign = 'left';

			if (gameState === 'gameover') {
				ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
				ctx.fillStyle = '#ff6b6b'; ctx.textAlign = 'center'; ctx.font = '48px VT323, monospace';
				ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);
				ctx.fillStyle = '#ffbd2e'; ctx.font = '24px VT323, monospace';
				ctx.fillText('Score: ' + score + '  Lines: ' + lines, canvas.width / 2, canvas.height / 2 + 20);
				ctx.fillStyle = '#888'; ctx.fillText('PRESS ENTER TO RESTART', canvas.width / 2, canvas.height / 2 + 60);
				ctx.textAlign = 'left';
			}
		}

		function gameLoop() { update(); draw(); animFrameId = requestAnimationFrame(gameLoop); }
		resetGrid(); gameLoop();
	}

	// ─── PONG ───
	function initPong() {
		const canvas = gameCanvas;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const PADDLE_W = 12, PADDLE_H = 80, BALL_SIZE = 10;
		const PADDLE_SPEED = 5, BALL_BASE_SPEED = 4, AI_SPEED = 3.5;
		const WIN_SCORE = 7;

		let gameState = 'waiting';
		let playerScore = 0, aiScore = 0;

		function resize() { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; }
		resize();
		gameResizeObs = new ResizeObserver(resize);
		gameResizeObs.observe(canvas);

		let playerY = canvas.height / 2 - PADDLE_H / 2;
		let aiY = canvas.height / 2 - PADDLE_H / 2;
		let ballX = canvas.width / 2, ballY = canvas.height / 2;
		let ballDX = BALL_BASE_SPEED, ballDY = BALL_BASE_SPEED * 0.5;

		function resetBall() {
			ballX = canvas.width / 2;
			ballY = canvas.height / 2;
			ballDX = BALL_BASE_SPEED * (Math.random() > 0.5 ? 1 : -1);
			ballDY = (Math.random() * 2 - 1) * BALL_BASE_SPEED * 0.5;
		}

		const keys = /** @type {Record<string,boolean>} */ ({});
		gameKeyHandler = (e) => {
			if (e.key === 'Escape') { exitGame(); return; }
			if ((gameState === 'waiting' || gameState === 'gameover') && e.key === 'Enter') {
				gameState = 'playing'; playerScore = 0; aiScore = 0;
				playerY = canvas.height / 2 - PADDLE_H / 2;
				aiY = canvas.height / 2 - PADDLE_H / 2;
				resetBall();
			}
			keys[e.key] = true;
			if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();
		};
		gameKeyUpHandler = (e) => { keys[e.key] = false; };
		window.addEventListener('keydown', gameKeyHandler);
		window.addEventListener('keyup', gameKeyUpHandler);

		function update() {
			if (gameState !== 'playing') return;

			// Player paddle
			if (keys['ArrowUp'] && playerY > 0) playerY -= PADDLE_SPEED;
			if (keys['ArrowDown'] && playerY < canvas.height - PADDLE_H) playerY += PADDLE_SPEED;

			// AI paddle
			const aiCenter = aiY + PADDLE_H / 2;
			if (ballDX > 0) {
				if (aiCenter < ballY - 10) aiY += AI_SPEED;
				else if (aiCenter > ballY + 10) aiY -= AI_SPEED;
			} else {
				if (aiCenter < canvas.height / 2 - 5) aiY += AI_SPEED * 0.5;
				else if (aiCenter > canvas.height / 2 + 5) aiY -= AI_SPEED * 0.5;
			}
			aiY = Math.max(0, Math.min(canvas.height - PADDLE_H, aiY));

			// Ball
			ballX += ballDX;
			ballY += ballDY;

			// Top/bottom bounce
			if (ballY <= 0) { ballY = 0; ballDY = Math.abs(ballDY); }
			if (ballY + BALL_SIZE >= canvas.height) { ballY = canvas.height - BALL_SIZE; ballDY = -Math.abs(ballDY); }

			// Player paddle collision (left)
			const px = 20;
			if (ballX <= px + PADDLE_W && ballX + BALL_SIZE >= px && ballY + BALL_SIZE >= playerY && ballY <= playerY + PADDLE_H && ballDX < 0) {
				ballDX = Math.abs(ballDX) * 1.05;
				const hitPos = (ballY + BALL_SIZE / 2 - playerY) / PADDLE_H - 0.5;
				ballDY = hitPos * BALL_BASE_SPEED * 2;
				ballX = px + PADDLE_W;
			}

			// AI paddle collision (right)
			const ax = canvas.width - 20 - PADDLE_W;
			if (ballX + BALL_SIZE >= ax && ballX <= ax + PADDLE_W && ballY + BALL_SIZE >= aiY && ballY <= aiY + PADDLE_H && ballDX > 0) {
				ballDX = -Math.abs(ballDX) * 1.05;
				const hitPos = (ballY + BALL_SIZE / 2 - aiY) / PADDLE_H - 0.5;
				ballDY = hitPos * BALL_BASE_SPEED * 2;
				ballX = ax - BALL_SIZE;
			}

			// Scoring
			if (ballX < 0) { aiScore++; if (aiScore >= WIN_SCORE) gameState = 'gameover'; else resetBall(); }
			if (ballX > canvas.width) { playerScore++; if (playerScore >= WIN_SCORE) gameState = 'gameover'; else resetBall(); }
		}

		function draw() {
			ctx.fillStyle = '#0a0a0a'; ctx.fillRect(0, 0, canvas.width, canvas.height);

			if (gameState === 'waiting') {
				ctx.fillStyle = '#00ff41'; ctx.textAlign = 'center'; ctx.font = '48px VT323, monospace';
				ctx.fillText('PONG', canvas.width / 2, canvas.height / 2 - 60);
				ctx.font = '24px VT323, monospace'; ctx.fillStyle = '#ffbd2e';
				ctx.fillText('PRESS ENTER TO START', canvas.width / 2, canvas.height / 2 + 10);
				ctx.fillStyle = '#888'; ctx.font = '18px VT323, monospace';
				ctx.fillText('Arrow Up/Down = Move | First to ' + WIN_SCORE + ' wins | ESC = Exit', canvas.width / 2, canvas.height / 2 + 50);
				ctx.textAlign = 'left'; return;
			}

			// Center line
			ctx.setLineDash([8, 8]); ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
			ctx.beginPath(); ctx.moveTo(canvas.width / 2, 0); ctx.lineTo(canvas.width / 2, canvas.height); ctx.stroke();
			ctx.setLineDash([]);

			// Paddles
			ctx.fillStyle = '#00ff41';
			ctx.fillRect(20, playerY, PADDLE_W, PADDLE_H);
			ctx.fillStyle = '#ff6b6b';
			ctx.fillRect(canvas.width - 20 - PADDLE_W, aiY, PADDLE_W, PADDLE_H);

			// Ball
			ctx.fillStyle = '#ffbd2e';
			ctx.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE);

			// Scores
			ctx.fillStyle = '#00ff41'; ctx.font = '48px VT323, monospace'; ctx.textAlign = 'center';
			ctx.fillText(String(playerScore), canvas.width / 2 - 60, 55);
			ctx.fillStyle = '#ff6b6b';
			ctx.fillText(String(aiScore), canvas.width / 2 + 60, 55);
			ctx.textAlign = 'left';

			// Labels
			ctx.font = '18px VT323, monospace'; ctx.fillStyle = '#888';
			ctx.textAlign = 'left'; ctx.fillText('YOU', 20, canvas.height - 15);
			ctx.textAlign = 'right'; ctx.fillText('CPU', canvas.width - 20, canvas.height - 15);
			ctx.textAlign = 'left';

			if (gameState === 'gameover') {
				ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
				const won = playerScore >= WIN_SCORE;
				ctx.fillStyle = won ? '#00ff41' : '#ff6b6b'; ctx.textAlign = 'center'; ctx.font = '48px VT323, monospace';
				ctx.fillText(won ? 'YOU WIN!' : 'CPU WINS', canvas.width / 2, canvas.height / 2 - 20);
				ctx.fillStyle = '#ffbd2e'; ctx.font = '24px VT323, monospace';
				ctx.fillText(playerScore + ' - ' + aiScore, canvas.width / 2, canvas.height / 2 + 20);
				ctx.fillStyle = '#888'; ctx.fillText('PRESS ENTER TO RESTART', canvas.width / 2, canvas.height / 2 + 60);
				ctx.textAlign = 'left';
			}
		}

		function gameLoop() { update(); draw(); animFrameId = requestAnimationFrame(gameLoop); }
		gameLoop();
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

<style>
	@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html, body) {
		height: 100%;
		overflow: hidden;
		background: #1a1a2e;
		font-family: 'VT323', monospace;
	}

	/* Start overlay */
	.start-overlay {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
		cursor: pointer;
		user-select: none;
	}

	.start-content {
		text-align: center;
		color: #00ff41;
		font-family: 'VT323', monospace;
	}

	.start-ascii pre {
		font-family: 'VT323', monospace;
		font-size: 24px;
		color: #00ff41;
		text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
		line-height: 1.2;
		margin-bottom: 20px;
	}

	.start-title {
		font-size: 32px;
		letter-spacing: 4px;
		margin-bottom: 30px;
		text-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
	}

	.start-prompt {
		font-size: 20px;
		color: #888;
	}

	.start-prompt.blink {
		animation: blink 1.2s infinite;
	}

	.amiga-screen {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
		padding: 20px;
	}

	.monitor-frame {
		background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0d0d0d 100%);
		border-radius: 20px;
		padding: 25px;
		box-shadow:
			0 20px 60px rgba(0, 0, 0, 0.8),
			inset 0 1px 0 rgba(255, 255, 255, 0.1),
			inset 0 -1px 0 rgba(0, 0, 0, 0.3);
		max-width: 900px;
		width: 100%;
	}

	.screen-bezel {
		background: #111;
		border-radius: 10px;
		padding: 15px;
		box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.9);
	}

	.crt-screen {
		background: #0a0a0a;
		border-radius: 5px;
		overflow: hidden;
		position: relative;
		font-family: 'VT323', monospace;
		box-shadow:
			inset 0 0 100px rgba(0, 0, 0, 0.5),
			0 0 20px rgba(0, 255, 65, 0.1);
	}

	.title-bar {
		background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
		color: #00ff41;
		padding: 4px 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px solid #00ff41;
	}

	.title-bar-left,
	.title-bar-right {
		display: flex;
		gap: 4px;
	}

	.window-button {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: none;
		cursor: pointer;
	}

	.window-button.close { background: #ff5f56; }
	.window-button.depth { background: #ffbd2e; }
	.window-button.zoom { background: #27ca3f; }

	.title-text {
		font-size: 16px;
		letter-spacing: 1px;
	}

	.menu-bar {
		background: #111;
		padding: 2px 4px;
		display: flex;
		gap: 2px;
		border-bottom: 1px solid #333;
	}

	.menu-item {
		font-family: 'VT323', monospace;
		font-size: 16px;
		padding: 4px 12px;
		background: #1a1a1a;
		border: 1px solid #333;
		cursor: pointer;
		color: #888;
	}

	.menu-item:hover,
	.menu-item.active {
		background: #0a0a0a;
		color: #00ff41;
		border-color: #00ff41;
	}

	.content-area {
		background: #0a0a0a;
		min-height: 400px;
		padding: 20px;
		color: #00ff41;
		overflow-y: auto;
		max-height: 60vh;
	}

	.boot-screen { font-size: 18px; line-height: 1.4; }
	.boot-line { min-height: 1.4em; }
	.cursor { animation: blink 1s infinite; }

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	.section { animation: fadeIn 0.3s ease; }

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.section-title {
		font-size: 28px;
		margin-bottom: 15px;
		color: #00ff41;
		text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
	}

	.role { font-size: 22px; color: #00bfff; margin-bottom: 5px; }
	.location { font-size: 18px; color: #888; margin-bottom: 15px; }

	.divider {
		height: 1px;
		background: linear-gradient(90deg, #00ff41, #00bfff, #ff6b6b);
		margin: 15px 0;
	}

	.profile { font-size: 18px; line-height: 1.6; margin-bottom: 20px; color: #ccc; }

	.action-buttons { display: flex; gap: 10px; margin-top: 20px; }

	.amiga-btn {
		font-family: 'VT323', monospace;
		font-size: 18px;
		padding: 8px 20px;
		background: transparent;
		border: 1px solid #00ff41;
		color: #00ff41;
		cursor: pointer;
		text-decoration: none;
		display: inline-block;
		transition: all 0.2s ease;
	}

	.amiga-btn:hover {
		background: #00ff41;
		color: #000;
		box-shadow: 0 0 15px rgba(0, 255, 65, 0.5);
	}

	.amiga-btn:active { background: #00cc33; }

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 15px;
	}

	.skill-category h3 {
		color: #00ff41;
		font-size: 18px;
		margin-bottom: 8px;
		border-bottom: 1px solid #333;
		padding-bottom: 4px;
	}

	.skill-category ul { list-style: none; }
	.skill-category li { font-size: 16px; padding: 2px 0; color: #888; }
	.skill-category li::before { content: "> "; color: #00ff41; }

	.experience-list { display: flex; flex-direction: column; gap: 20px; }

	.job-item {
		background: rgba(255, 255, 255, 0.02);
		padding: 15px;
		border-left: 2px solid #00ff41;
	}

	.job-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
	}

	.job-role { font-size: 20px; color: #00ff41; }
	.job-period { font-size: 16px; color: #666; }
	.job-company { font-size: 18px; color: #00bfff; margin: 5px 0; }
	.job-highlight { font-size: 16px; color: #888; margin-top: 8px; }

	.contact-info { font-size: 18px; line-height: 2; }
	.contact-info .label { color: #00ff41; }
	.contact-info a { color: #00bfff; text-decoration: none; }
	.contact-info a:hover { color: #fff; text-decoration: underline; }

	.status-bar {
		background: #111;
		padding: 4px 10px;
		font-size: 14px;
		color: #666;
		display: flex;
		gap: 20px;
		border-top: 1px solid #333;
	}

	.status-right { margin-left: auto; }

	.scanlines {
		position: absolute; top: 0; left: 0; right: 0; bottom: 0;
		background: repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px);
		pointer-events: none;
	}

	.crt-flicker {
		position: absolute; top: 0; left: 0; right: 0; bottom: 0;
		background: rgba(0, 255, 65, 0.01);
		pointer-events: none;
		animation: flicker 0.1s infinite;
	}

	@keyframes flicker {
		0% { opacity: 0.01; }
		50% { opacity: 0.03; }
		100% { opacity: 0.01; }
	}

	/* Responsive */
	@media (max-width: 600px) {
		.amiga-screen { padding: 10px; }
		.monitor-frame { padding: 15px; border-radius: 15px; }
		.screen-bezel { padding: 10px; }
		.content-area { min-height: 300px; padding: 15px; }
		.section-title { font-size: 22px; }
		.skills-grid { grid-template-columns: repeat(2, 1fr); }
		.job-header { flex-direction: column; align-items: flex-start; }
		.action-buttons { flex-direction: column; }
		.amiga-btn { text-align: center; }
		.desktop-icons { gap: 12px; }
		.desktop-icon-img { width: 48px; height: 48px; }
	}

	/* Desktop icons */
	.desktop-icons {
		display: flex;
		gap: 20px;
		margin-top: 25px;
		padding-top: 15px;
		border-top: 1px solid #333;
	}

	.desktop-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		cursor: pointer;
		padding: 8px;
		border: 1px solid transparent;
		transition: all 0.2s ease;
		user-select: none;
	}

	.desktop-icon:hover {
		border-color: #00ff41;
		background: rgba(0, 255, 65, 0.05);
		box-shadow: 0 0 12px rgba(0, 255, 65, 0.3);
	}

	.desktop-icon:active { background: rgba(0, 255, 65, 0.15); }

	.desktop-icon-img {
		width: 56px;
		height: 56px;
		background: #111;
		border: 2px solid #00ff41;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		image-rendering: pixelated;
	}

	/* Space Invaders icon */
	.icon-alien {
		width: 28px;
		height: 20px;
		position: relative;
	}

	.icon-alien::before {
		content: '';
		position: absolute;
		top: 2px; left: 4px;
		width: 20px; height: 12px;
		background: #ff6b6b;
		box-shadow:
			-4px 4px 0 0 #ffbd2e,
			24px 4px 0 0 #ffbd2e,
			2px -4px 0 0 #00ff41,
			16px -4px 0 0 #00ff41,
			0px 14px 0 0 #00bfff,
			18px 14px 0 0 #00bfff;
	}

	/* Tetris icon */
	.icon-tetris {
		width: 24px;
		height: 24px;
		position: relative;
	}

	.icon-tetris::before {
		content: '';
		position: absolute;
		width: 8px; height: 8px;
		top: 0; left: 8px;
		background: #a855f7;
		box-shadow:
			0px 8px 0 0 #a855f7,
			-8px 8px 0 0 #a855f7,
			8px 8px 0 0 #a855f7,
			-8px 16px 0 0 #00bfff,
			0px 16px 0 0 #00bfff,
			8px 16px 0 0 #ffbd2e,
			16px 16px 0 0 #ffbd2e;
	}

	/* Pong icon */
	.icon-pong {
		width: 28px;
		height: 24px;
		position: relative;
	}

	.icon-pong::before {
		content: '';
		position: absolute;
		width: 3px; height: 16px;
		top: 4px; left: 2px;
		background: #00ff41;
		box-shadow:
			23px 4px 0 0 #ff6b6b,
			23px 0px 0 0 #ff6b6b,
			23px -4px 0 0 #ff6b6b,
			10px 4px 0 #ffbd2e;
	}

	.icon-pong::after {
		content: '';
		position: absolute;
		top: 0; left: 13px;
		width: 1px; height: 24px;
		background: repeating-linear-gradient(to bottom, #333 0px, #333 3px, transparent 3px, transparent 6px);
	}

	.desktop-icon-label {
		font-size: 14px;
		color: #00ff41;
		text-shadow: 0 0 5px rgba(0, 255, 65, 0.4);
	}

	/* Fullscreen game overlay */
	.game-fullscreen {
		position: fixed;
		top: 0; left: 0;
		width: 100vw; height: 100vh;
		background: #0a0a0a;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		font-family: 'VT323', monospace;
	}

	.game-scanlines {
		position: absolute; top: 0; left: 0; right: 0; bottom: 0;
		background: repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px);
		pointer-events: none;
		z-index: 2;
	}

	.game-topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		background: #111;
		border-bottom: 2px solid #00ff41;
		z-index: 1;
		flex-shrink: 0;
	}

	.game-title {
		font-size: 22px;
		color: #00ff41;
		text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
		letter-spacing: 2px;
	}

	.game-exit {
		font-size: 18px;
		color: #ff6b6b;
		cursor: pointer;
		padding: 4px 12px;
		border: 1px solid #ff6b6b;
		transition: all 0.2s ease;
	}

	.game-exit:hover { background: #ff6b6b; color: #000; }

	.game-canvas {
		flex: 1;
		width: 100%;
		display: block;
	}
</style>
