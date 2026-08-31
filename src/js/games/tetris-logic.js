/**
 * Pure Tetris logic (grid, collision, rotation, line clearing) with no
 * dependency on Canvas, DOM, or localStorage, so it can be unit tested
 * directly.
 */

export const GRID_COLS = 10;
export const GRID_ROWS = 20;

export const PIECES = [
	{ shape: [[1, 1, 1, 1]], color: '#00bfff' },            // I
	{ shape: [[1, 1], [1, 1]], color: '#ffbd2e' },          // O
	{ shape: [[0, 1, 0], [1, 1, 1]], color: '#a855f7' },      // T
	{ shape: [[1, 0, 0], [1, 1, 1]], color: '#ff6b6b' },      // L
	{ shape: [[0, 0, 1], [1, 1, 1]], color: '#00ff41' },      // J
	{ shape: [[0, 1, 1], [1, 1, 0]], color: '#ff6b6b' },      // S
	{ shape: [[1, 1, 0], [0, 1, 1]], color: '#00ff41' }       // Z
];

/** @typedef {(string|null)[][]} Grid */

/** @returns {Grid} */
export function createGrid() {
	/** @type {Grid} */
	const grid = [];
	for (let r = 0; r < GRID_ROWS; r++) {
		grid.push(new Array(GRID_COLS).fill(null));
	}
	return grid;
}

/**
 * @param {Grid} grid
 * @param {number[][]} shape
 * @param {number} px
 * @param {number} py
 * @returns {boolean}
 */
export function collides(grid, shape, px, py) {
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

/** @param {number[][]} shape */
export function rotateCW(shape) {
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

/**
 * Clears completed rows in place and returns how many were cleared.
 * @param {Grid} grid
 * @returns {number}
 */
export function clearLines(grid) {
	let cleared = 0;
	for (let r = GRID_ROWS - 1; r >= 0; r--) {
		if (grid[r].every((c) => c !== null)) {
			grid.splice(r, 1);
			grid.unshift(new Array(GRID_COLS).fill(null));
			cleared++; r++;
		}
	}
	return cleared;
}

/**
 * @param {number} cleared
 * @param {number} level
 * @returns {number} points earned for clearing `cleared` lines at `level`
 */
export function scoreForClear(cleared, level) {
	if (cleared <= 0) return 0;
	const pts = [0, 100, 300, 500, 800];
	return (pts[cleared] || 800) * level;
}

/**
 * @param {number} totalLines
 * @returns {{ level: number, dropInterval: number }}
 */
export function levelForLines(totalLines) {
	const level = Math.floor(totalLines / 10) + 1;
	const dropInterval = Math.max(5, 45 - (level - 1) * 4);
	return { level, dropInterval };
}
