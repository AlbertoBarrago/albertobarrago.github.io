/**
 * Space Invaders game
 * @param {HTMLCanvasElement} canvas
 * @param {() => void} onExit
 * @returns {() => void} cleanup function
 */
export function initSpaceInvaders(canvas, onExit) {
	const ctx = canvas.getContext('2d');
	if (!ctx) return () => {};

	const COLS = 8, ROWS = 5, ALIEN_W = 32, ALIEN_H = 24, ALIEN_PAD = 12;
	const PLAYER_W = 40, PLAYER_H = 20, BULLET_W = 3, BULLET_H = 12;
	const PLAYER_SPEED = 5, BULLET_SPEED = 7, ALIEN_BULLET_SPEED = 4;
	const ALIEN_FIRE_CHANCE = 0.003;
	const ROW_COLORS = ['#ff6b6b', '#ff6b6b', '#ffbd2e', '#ffbd2e', '#00ff41'];

	let gameState = 'waiting';
	let score = 0, lives = 3;
	let highScore = parseInt(localStorage.getItem('spaceInvadersHigh') || '0', 10);
	let animFrameId = 0;

	function resize() { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; }
	resize();
	const resizeObs = new ResizeObserver(resize);
	resizeObs.observe(canvas);

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

	/** @param {KeyboardEvent} e */
	function keyHandler(e) {
		if (e.key === 'Escape') { onExit(); return; }
		if ((gameState === 'waiting' || gameState === 'gameover' || gameState === 'won') && e.key === 'Enter') {
			gameState = 'playing'; score = 0; lives = 3;
			playerBullets = []; alienBullets = [];
			playerX = canvas.width / 2 - PLAYER_W / 2;
			resetAliens();
		}
		keys[e.key] = true;
		if (e.key === ' ' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') e.preventDefault();
	}

	/** @param {KeyboardEvent} e */
	function keyUpHandler(e) { keys[e.key] = false; }

	window.addEventListener('keydown', keyHandler);
	window.addEventListener('keyup', keyUpHandler);

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

	return function cleanup() {
		cancelAnimationFrame(animFrameId);
		window.removeEventListener('keydown', keyHandler);
		window.removeEventListener('keyup', keyUpHandler);
		resizeObs.disconnect();
	};
}
