import { GRID_COLS, GRID_ROWS, PIECES, createGrid, collides as gridCollides, rotateCW, clearLines as clearGridLines, scoreForClear, levelForLines } from './tetris-logic.js';

/**
 * Tetris game
 * @param {HTMLCanvasElement} canvas
 * @param {() => void} onExit
 * @returns {() => void} cleanup function
 */
export function initTetris(canvas, onExit) {
	const ctx = canvas.getContext('2d');
	if (!ctx) return () => { };

	let gameState = 'waiting';
	let score = 0, level = 1, lines = 0;
	let highScore = parseInt(localStorage.getItem('tetrisHigh') || '0', 10);
	let animFrameId = 0;
	let lastFrameTime = 0;
	const FRAME_MS = 1000 / 60;

	/** @type {(string|null)[][]} */
	let grid = [];
	/** @type {{shape:number[][],color:string,x:number,y:number}|null} */
	let currentPiece = null;
	let dropTimer = 0, dropInterval = 45;

	function resize() {
		canvas.width = Math.max(1, canvas.clientWidth);
		canvas.height = Math.max(1, canvas.clientHeight);
	}
	resize();
	const resizeObs = new ResizeObserver(resize);
	resizeObs.observe(canvas);

	function resetGrid() {
		grid = createGrid();
	}

	/** @param {number[][]} shape @param {number} px @param {number} py */
	function collides(shape, px, py) {
		return gridCollides(grid, shape, px, py);
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
		const cleared = clearGridLines(grid);
		if (cleared > 0) {
			score += scoreForClear(cleared, level);
			lines += cleared;
			({ level, dropInterval } = levelForLines(lines));
			if (score > highScore) { highScore = score; localStorage.setItem('tetrisHigh', String(highScore)); }
		}
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
		if (['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp', ' '].includes(e.key)) e.preventDefault();
	}

	/** @param {KeyboardEvent} e */
	function keyUpHandler(e) { keys[e.key] = false; }

	window.addEventListener('keydown', keyHandler);
	window.addEventListener('keyup', keyUpHandler);

	/** @param {number} deltaFrames */
	function update(deltaFrames) {
		if (gameState !== 'playing' || !currentPiece) return;
		dropTimer += deltaFrames;
		if (dropTimer >= dropInterval) {
			dropTimer = 0;
			if (!collides(currentPiece.shape, currentPiece.x, currentPiece.y + 1)) currentPiece.y++;
			else lockPiece();
		}
	}

	function draw() {
		if (!ctx) return;
		ctx.fillStyle = '#0a0a0a'; ctx.fillRect(0, 0, canvas.width, canvas.height);

		const narrow = canvas.width < 520;
		const horizontalPadding = narrow ? 20 : 200;
		const verticalPadding = narrow ? 96 : 60;
		const cellSize = Math.max(8, Math.min(
			Math.floor((canvas.height - verticalPadding) / GRID_ROWS),
			Math.floor((canvas.width - horizontalPadding) / GRID_COLS)
		));
		const boardW = cellSize * GRID_COLS, boardH = cellSize * GRID_ROWS;
		const offX = Math.floor((canvas.width - boardW) / 2);
		const offY = Math.max(narrow ? 68 : 36, Math.floor((canvas.height - boardH) / 2) + 10);

		if (gameState === 'waiting') {
			ctx.fillStyle = '#00ff41'; ctx.textAlign = 'center'; ctx.font = '48px VT323, monospace';
			ctx.fillText('TETRIS', canvas.width / 2, canvas.height / 2 - 60);
			ctx.font = '24px VT323, monospace'; ctx.fillStyle = '#ffbd2e';
			ctx.fillText('PRESS ENTER TO START', canvas.width / 2, canvas.height / 2 + 10);
			ctx.fillStyle = '#888'; ctx.font = '18px VT323, monospace';
			ctx.fillText('Arrows = Move | Up/Space = Rotate', canvas.width / 2, canvas.height / 2 + 50);
			ctx.fillText('ESC = Exit | High Score: ' + highScore, canvas.width / 2, canvas.height / 2 + 78);
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
		ctx.fillStyle = '#00ff41'; ctx.font = narrow ? '18px VT323, monospace' : '22px VT323, monospace';
		ctx.textAlign = 'left';
		ctx.fillText('SCORE: ' + score, 10, 24);
		ctx.fillText('LEVEL: ' + level, 10, narrow ? 46 : 50);
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

	/** @param {number} timestamp */
	function gameLoop(timestamp) {
		if (lastFrameTime === 0) lastFrameTime = timestamp;
		const deltaFrames = Math.min((timestamp - lastFrameTime) / FRAME_MS, 3);
		lastFrameTime = timestamp;

		update(deltaFrames);
		draw();
		animFrameId = requestAnimationFrame(gameLoop);
	}
	resetGrid(); animFrameId = requestAnimationFrame(gameLoop);

	return function cleanup() {
		cancelAnimationFrame(animFrameId);
		window.removeEventListener('keydown', keyHandler);
		window.removeEventListener('keyup', keyUpHandler);
		resizeObs.disconnect();
	};
}
