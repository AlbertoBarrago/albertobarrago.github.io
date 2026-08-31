import { describe, expect, it } from 'vitest';
import {
	GRID_COLS,
	GRID_ROWS,
	clearLines,
	collides,
	createGrid,
	levelForLines,
	rotateCW,
	scoreForClear
} from './tetris-logic.js';

describe('createGrid', () => {
	it('creates an empty grid with the right dimensions', () => {
		const grid = createGrid();
		expect(grid).toHaveLength(GRID_ROWS);
		for (const row of grid) {
			expect(row).toHaveLength(GRID_COLS);
			expect(row.every((cell) => cell === null)).toBe(true);
		}
	});
});

describe('collides', () => {
	const shape = [[1, 1]];

	it('does not collide within empty bounds', () => {
		const grid = createGrid();
		expect(collides(grid, shape, 0, 0)).toBe(false);
	});

	it('collides past the left edge', () => {
		const grid = createGrid();
		expect(collides(grid, shape, -1, 0)).toBe(true);
	});

	it('collides past the right edge', () => {
		const grid = createGrid();
		expect(collides(grid, shape, GRID_COLS - 1, 0)).toBe(true);
	});

	it('collides past the bottom edge', () => {
		const grid = createGrid();
		expect(collides(grid, shape, 0, GRID_ROWS)).toBe(true);
	});

	it('collides with an occupied cell', () => {
		const grid = createGrid();
		grid[5][2] = '#fff';
		expect(collides(grid, shape, 1, 5)).toBe(true);
	});

	it('ignores rows above the grid (spawn area)', () => {
		const grid = createGrid();
		expect(collides(grid, shape, 0, -1)).toBe(false);
	});
});

describe('rotateCW', () => {
	it('rotates an L-shaped piece 90 degrees clockwise', () => {
		const shape = [
			[1, 0, 0],
			[1, 1, 1]
		];
		expect(rotateCW(shape)).toEqual([
			[1, 1],
			[1, 0],
			[1, 0]
		]);
	});

	it('rotating an O piece four times returns the original shape', () => {
		const shape = [
			[1, 1],
			[1, 1]
		];
		let rotated = shape;
		for (let i = 0; i < 4; i++) rotated = rotateCW(rotated);
		expect(rotated).toEqual(shape);
	});
});

describe('clearLines', () => {
	it('removes full rows and shifts the grid down', () => {
		const grid = createGrid();
		grid[GRID_ROWS - 1] = new Array(GRID_COLS).fill('#fff');
		const cleared = clearLines(grid);
		expect(cleared).toBe(1);
		expect(grid).toHaveLength(GRID_ROWS);
		expect(grid[GRID_ROWS - 1].every((cell) => cell === null)).toBe(true);
	});

	it('returns 0 when no rows are full', () => {
		const grid = createGrid();
		grid[GRID_ROWS - 1][0] = '#fff';
		expect(clearLines(grid)).toBe(0);
	});

	it('clears multiple full rows at once', () => {
		const grid = createGrid();
		grid[GRID_ROWS - 1] = new Array(GRID_COLS).fill('#fff');
		grid[GRID_ROWS - 2] = new Array(GRID_COLS).fill('#fff');
		expect(clearLines(grid)).toBe(2);
	});
});

describe('scoreForClear', () => {
	it('awards standard points scaled by level', () => {
		expect(scoreForClear(1, 1)).toBe(100);
		expect(scoreForClear(2, 1)).toBe(300);
		expect(scoreForClear(3, 1)).toBe(500);
		expect(scoreForClear(4, 1)).toBe(800);
		expect(scoreForClear(1, 3)).toBe(300);
	});

	it('awards nothing for zero lines', () => {
		expect(scoreForClear(0, 5)).toBe(0);
	});
});

describe('levelForLines', () => {
	it('starts at level 1 with the base drop interval', () => {
		expect(levelForLines(0)).toEqual({ level: 1, dropInterval: 45 });
	});

	it('advances a level every 10 lines and speeds up the drop', () => {
		expect(levelForLines(10)).toEqual({ level: 2, dropInterval: 41 });
	});

	it('never drops the interval below the floor of 5', () => {
		const { dropInterval } = levelForLines(1000);
		expect(dropInterval).toBe(5);
	});
});
