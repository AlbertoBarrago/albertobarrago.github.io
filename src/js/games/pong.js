/**
 * Pong game
 * @param {HTMLCanvasElement} canvas
 * @param {() => void} onExit
 * @returns {() => void} cleanup function
 */
export function initPong(canvas, onExit) {
	const ctx = canvas.getContext('2d');
	if (!ctx) return () => {};

	const PADDLE_W = 12, PADDLE_H = 80, BALL_SIZE = 10;
	const PADDLE_SPEED = 5, BALL_BASE_SPEED = 4, AI_SPEED = 3.5;
	const WIN_SCORE = 7;

	let gameState = 'waiting';
	let playerScore = 0, aiScore = 0;
	let animFrameId = 0;

	function resize() { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; }
	resize();
	const resizeObs = new ResizeObserver(resize);
	resizeObs.observe(canvas);

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

	/** @param {KeyboardEvent} e */
	function keyHandler(e) {
		if (e.key === 'Escape') { onExit(); return; }
		if ((gameState === 'waiting' || gameState === 'gameover') && e.key === 'Enter') {
			gameState = 'playing'; playerScore = 0; aiScore = 0;
			playerY = canvas.height / 2 - PADDLE_H / 2;
			aiY = canvas.height / 2 - PADDLE_H / 2;
			resetBall();
		}
		keys[e.key] = true;
		if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();
	}

	/** @param {KeyboardEvent} e */
	function keyUpHandler(e) { keys[e.key] = false; }

	window.addEventListener('keydown', keyHandler);
	window.addEventListener('keyup', keyUpHandler);

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

	return function cleanup() {
		cancelAnimationFrame(animFrameId);
		window.removeEventListener('keydown', keyHandler);
		window.removeEventListener('keyup', keyUpHandler);
		resizeObs.disconnect();
	};
}
