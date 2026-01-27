/**
 * Tetris game
 * @param {HTMLCanvasElement} canvas
 * @param {() => void} onExit
 * @returns {() => void} cleanup function
 */
export function initTetris(canvas, onExit) {
	const ctx = canvas.getContext('2d');
	if (!ctx) return () => {};

	const GRID_COLS = 10, GRID_ROWS = 20;
	const PIECES = [
		{ shape: [[1,1,1,1]], color: '#00bfff' },            // I
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
	let animFrameId = 0;

	/** @type {(string|null)[][]} */
	let grid = [];
	/** @type {{shape:number[][],color:string,x:number,y:number}|null} */
	let currentPiece = null;
	let dropTimer = 0, dropInterval = 45;

	function resize() { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; }
	resize();
	const resizeObs = new ResizeObserver(resize);
	resizeObs.observe(canvas);

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

	/** @param {KeyboardEvent} e */
	function keyHandler(e) {
		if (e.key === 'Escape') { onExit(); return; }
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
	}

	/** @param {KeyboardEvent} e */
	function keyUpHandler(e) { keys[e.key] = false; }

	window.addEventListener('keydown', keyHandler);
	window.addEventListener('keyup', keyUpHandler);

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

	return function cleanup() {
		cancelAnimationFrame(animFrameId);
		window.removeEventListener('keydown', keyHandler);
		window.removeEventListener('keyup', keyUpHandler);
		resizeObs.disconnect();
	};
}
