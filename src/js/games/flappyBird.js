/**
 * Flappy Bird game
 * @param {HTMLCanvasElement} canvas
 * @param {() => void} onExit
 * @returns {() => void} cleanup function
 */
export function initFlappyBird(canvas, onExit) {
	const ctx = canvas.getContext('2d');
	if (!ctx) return () => {};

	const BIRD_SIZE = 24;
	const GRAVITY = 0.42;
	const FLAP_FORCE = -7.2;
	const PIPE_W = 58;
	const PIPE_GAP = 150;
	const PIPE_SPEED = 2.8;
	const PIPE_INTERVAL = 96;
	const GROUND_H = 46;
	const FRAME_MS = 1000 / 60;

	let gameState = 'waiting';
	let score = 0;
	let highScore = parseInt(localStorage.getItem('flappyBirdHigh') || '0', 10);
	let animFrameId = 0;
	let lastFrameTime = 0;
	let frame = 0;
	let nextPipeFrame = PIPE_INTERVAL;
	let birdX = 0;
	let birdY = 0;
	let birdVY = 0;
	/** @type {AudioContext | null} */
	let audioCtx = null;
	/** @type {GainNode | null} */
	let audioMaster = null;

	/** @type {{x:number,gapY:number,passed:boolean}[]} */
	let pipes = [];

	function resize() {
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		if (gameState !== 'playing') resetBird();
	}

	resize();
	const resizeObs = new ResizeObserver(resize);
	resizeObs.observe(canvas);

	function resetBird() {
		birdX = Math.max(80, Math.floor(canvas.width * 0.28));
		birdY = Math.floor(canvas.height * 0.45);
		birdVY = 0;
	}

	function resetGame() {
		gameState = 'playing';
		score = 0;
		frame = 0;
		nextPipeFrame = PIPE_INTERVAL;
		pipes = [];
		resetBird();
		spawnPipe();
		playStartSound();
	}

	function spawnPipe() {
		const minGapY = 70;
		const maxGapY = Math.max(minGapY + 20, canvas.height - GROUND_H - PIPE_GAP - 60);
		const gapY = minGapY + Math.random() * (maxGapY - minGapY);
		pipes.push({ x: canvas.width + 20, gapY, passed: false });
	}

	function flap() {
		ensureAudio();
		if (gameState === 'waiting' || gameState === 'gameover') {
			resetGame();
			return;
		}
		if (gameState === 'playing') {
			birdVY = FLAP_FORCE;
			playFlapSound();
		}
	}

	function ensureAudio() {
		if (audioCtx) {
			if (audioCtx.state === 'suspended') audioCtx.resume();
			return;
		}

		const AudioCtx = globalThis.AudioContext
			?? /** @type {typeof AudioContext} */ (/** @type {any} */ (globalThis).webkitAudioContext);
		audioCtx = new AudioCtx();
		audioMaster = audioCtx.createGain();
		audioMaster.gain.value = 0.16;
		audioMaster.connect(audioCtx.destination);
	}

	/**
	 * @param {number} frequency
	 * @param {number} duration
	 * @param {'sine'|'square'|'triangle'|'sawtooth'} type
	 * @param {number} gain
	 */
	function playTone(frequency, duration, type = 'square', gain = 0.2) {
		if (!audioCtx || !audioMaster) return;

		const t = audioCtx.currentTime;
		const osc = audioCtx.createOscillator();
		const amp = audioCtx.createGain();
		osc.type = type;
		osc.frequency.setValueAtTime(frequency, t);
		amp.gain.setValueAtTime(0.0001, t);
		amp.gain.exponentialRampToValueAtTime(gain, t + 0.01);
		amp.gain.exponentialRampToValueAtTime(0.0001, t + duration);
		osc.connect(amp);
		amp.connect(audioMaster);
		osc.start(t);
		osc.stop(t + duration + 0.02);
	}

	function playStartSound() {
		playTone(440, 0.08, 'square', 0.14);
		if (!audioCtx) return;
		setTimeout(() => playTone(660, 0.08, 'square', 0.12), 65);
	}

	function playFlapSound() {
		playTone(720, 0.06, 'square', 0.11);
	}

	function playScoreSound() {
		playTone(880, 0.07, 'triangle', 0.14);
		setTimeout(() => playTone(1175, 0.08, 'triangle', 0.12), 60);
	}

	function playHitSound() {
		if (!audioCtx || !audioMaster) return;

		const t = audioCtx.currentTime;
		const osc = audioCtx.createOscillator();
		const amp = audioCtx.createGain();
		osc.type = 'sawtooth';
		osc.frequency.setValueAtTime(190, t);
		osc.frequency.exponentialRampToValueAtTime(60, t + 0.22);
		amp.gain.setValueAtTime(0.22, t);
		amp.gain.exponentialRampToValueAtTime(0.0001, t + 0.24);
		osc.connect(amp);
		amp.connect(audioMaster);
		osc.start(t);
		osc.stop(t + 0.26);
	}

	/** @param {KeyboardEvent} e */
	function keyHandler(e) {
		if (e.key === 'Escape') {
			onExit();
			return;
		}
		if (e.key === 'Enter' || e.key === ' ') {
			flap();
			e.preventDefault();
		}
	}

	function pointerHandler() {
		flap();
	}

	window.addEventListener('keydown', keyHandler);
	canvas.addEventListener('pointerdown', pointerHandler);

	/** @param {number} deltaFrames */
	function update(deltaFrames) {
		if (gameState !== 'playing') return;

		frame += deltaFrames;
		birdVY += GRAVITY * deltaFrames;
		birdY += birdVY * deltaFrames;

		while (frame >= nextPipeFrame) {
			spawnPipe();
			nextPipeFrame += PIPE_INTERVAL;
		}

		for (const pipe of pipes) {
			pipe.x -= PIPE_SPEED * deltaFrames;
			if (!pipe.passed && pipe.x + PIPE_W < birdX) {
				pipe.passed = true;
				score++;
				playScoreSound();
				if (score > highScore) {
					highScore = score;
					localStorage.setItem('flappyBirdHigh', String(highScore));
				}
			}
		}

		pipes = pipes.filter((pipe) => pipe.x + PIPE_W > -20);

		const birdLeft = birdX - BIRD_SIZE / 2;
		const birdRight = birdX + BIRD_SIZE / 2;
		const birdTop = birdY - BIRD_SIZE / 2;
		const birdBottom = birdY + BIRD_SIZE / 2;

		if (birdTop <= 0 || birdBottom >= canvas.height - GROUND_H) {
			gameState = 'gameover';
			playHitSound();
			return;
		}

		for (const pipe of pipes) {
			const inPipeX = birdRight > pipe.x && birdLeft < pipe.x + PIPE_W;
			const hitsTop = birdTop < pipe.gapY;
			const hitsBottom = birdBottom > pipe.gapY + PIPE_GAP;
			if (inPipeX && (hitsTop || hitsBottom)) {
				gameState = 'gameover';
				playHitSound();
				return;
			}
		}
	}

	function drawBackground() {
		const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
		sky.addColorStop(0, '#082238');
		sky.addColorStop(1, '#071014');
		ctx.fillStyle = sky;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = 'rgba(0, 255, 65, 0.08)';
		for (let x = (frame * -0.3) % 90; x < canvas.width; x += 90) {
			ctx.fillRect(x, 80, 34, 8);
			ctx.fillRect(x + 8, 72, 18, 8);
		}
	}

	function drawPipes() {
		for (const pipe of pipes) {
			ctx.fillStyle = '#00a33a';
			ctx.fillRect(pipe.x, 0, PIPE_W, pipe.gapY);
			ctx.fillRect(pipe.x, pipe.gapY + PIPE_GAP, PIPE_W, canvas.height - GROUND_H - pipe.gapY - PIPE_GAP);

			ctx.fillStyle = '#00ff41';
			ctx.fillRect(pipe.x - 4, pipe.gapY - 14, PIPE_W + 8, 14);
			ctx.fillRect(pipe.x - 4, pipe.gapY + PIPE_GAP, PIPE_W + 8, 14);

			ctx.fillStyle = 'rgba(0,0,0,0.22)';
			ctx.fillRect(pipe.x + PIPE_W - 12, 0, 6, pipe.gapY - 14);
			ctx.fillRect(pipe.x + PIPE_W - 12, pipe.gapY + PIPE_GAP + 14, 6, canvas.height - GROUND_H);
		}
	}

	function drawGround() {
		const y = canvas.height - GROUND_H;
		ctx.fillStyle = '#332211';
		ctx.fillRect(0, y, canvas.width, GROUND_H);
		ctx.fillStyle = '#ffbd2e';
		ctx.fillRect(0, y, canvas.width, 4);
		ctx.fillStyle = 'rgba(0, 255, 65, 0.35)';
		for (let x = (frame * -PIPE_SPEED) % 28; x < canvas.width; x += 28) {
			ctx.fillRect(x, y + 10, 14, 4);
		}
	}

	function drawBird() {
		const tilt = Math.max(-0.45, Math.min(0.7, birdVY / 12));
		ctx.save();
		ctx.translate(birdX, birdY);
		ctx.rotate(tilt);

		ctx.fillStyle = '#ffbd2e';
		ctx.fillRect(-12, -10, 22, 20);
		ctx.fillStyle = '#ffe680';
		ctx.fillRect(-16, -2, 14, 10);
		ctx.fillStyle = '#ff6b6b';
		ctx.fillRect(8, -2, 12, 6);
		ctx.fillStyle = '#fff';
		ctx.fillRect(2, -8, 6, 6);
		ctx.fillStyle = '#0a0a0a';
		ctx.fillRect(6, -6, 2, 2);

		ctx.restore();
	}

	function drawHud() {
		ctx.fillStyle = '#00ff41';
		ctx.font = '22px VT323, monospace';
		ctx.textAlign = 'left';
		ctx.fillText('SCORE: ' + score, 10, 24);
		ctx.textAlign = 'center';
		ctx.fillText('HIGH: ' + highScore, canvas.width / 2, 24);
		ctx.textAlign = 'right';
		ctx.fillText('SPACE = FLAP', canvas.width - 10, 24);
		ctx.textAlign = 'left';
	}

	function drawStart() {
		ctx.fillStyle = 'rgba(0,0,0,0.45)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = '#00ff41';
		ctx.textAlign = 'center';
		ctx.font = '48px VT323, monospace';
		ctx.fillText('FLAPPY BIRD', canvas.width / 2, canvas.height / 2 - 70);
		ctx.font = '24px VT323, monospace';
		ctx.fillStyle = '#ffbd2e';
		ctx.fillText('PRESS SPACE OR CLICK TO START', canvas.width / 2, canvas.height / 2);
		ctx.fillStyle = '#888';
		ctx.font = '18px VT323, monospace';
		ctx.fillText('Space/Click = Flap | ESC = Exit', canvas.width / 2, canvas.height / 2 + 40);
		ctx.fillText('High Score: ' + highScore, canvas.width / 2, canvas.height / 2 + 70);
		ctx.textAlign = 'left';
	}

	function drawGameOver() {
		ctx.fillStyle = 'rgba(0,0,0,0.68)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = '#ff6b6b';
		ctx.textAlign = 'center';
		ctx.font = '48px VT323, monospace';
		ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 30);
		ctx.fillStyle = '#ffbd2e';
		ctx.font = '24px VT323, monospace';
		ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 + 10);
		ctx.fillStyle = '#888';
		ctx.fillText('PRESS SPACE OR CLICK TO RESTART', canvas.width / 2, canvas.height / 2 + 50);
		ctx.textAlign = 'left';
	}

	function draw() {
		drawBackground();
		drawPipes();
		drawGround();
		drawBird();
		drawHud();

		if (gameState === 'waiting') drawStart();
		if (gameState === 'gameover') drawGameOver();
	}

	/** @param {number} timestamp */
	function gameLoop(timestamp) {
		if (lastFrameTime === 0) lastFrameTime = timestamp;
		const deltaFrames = Math.min((timestamp - lastFrameTime) / FRAME_MS, 3);
		lastFrameTime = timestamp;

		update(deltaFrames);
		draw();
		animFrameId = requestAnimationFrame(gameLoop);
	}

	resetBird();
	animFrameId = requestAnimationFrame(gameLoop);

	return function cleanup() {
		cancelAnimationFrame(animFrameId);
		window.removeEventListener('keydown', keyHandler);
		canvas.removeEventListener('pointerdown', pointerHandler);
		resizeObs.disconnect();
		audioCtx?.close();
		audioCtx = null;
		audioMaster = null;
	};
}
