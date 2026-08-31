import { describe, expect, it } from 'vitest';
import { articles, sortArticlesByDateAscending } from './articles.js';

describe('sortArticlesByDateAscending', () => {
	it('orders articles from oldest to newest', () => {
		const input = [
			{ slug: 'c', title: 'C', date: '2025-06-01', tags: [] },
			{ slug: 'a', title: 'A', date: '2024-01-15', tags: [] },
			{ slug: 'b', title: 'B', date: '2024-11-30', tags: [] }
		];
		expect(sortArticlesByDateAscending(input).map((a) => a.slug)).toEqual(['a', 'b', 'c']);
	});

	it('does not mutate the input array', () => {
		const input = [
			{ slug: 'b', title: 'B', date: '2025-01-01', tags: [] },
			{ slug: 'a', title: 'A', date: '2024-01-01', tags: [] }
		];
		const original = [...input];
		sortArticlesByDateAscending(input);
		expect(input).toEqual(original);
	});
});

describe('articles', () => {
	it('is sorted ascending by date across the real content files', () => {
		const dates = articles.map((a) => a.date);
		const sorted = [...dates].sort((a, b) => a.localeCompare(b));
		expect(dates).toEqual(sorted);
	});
});
