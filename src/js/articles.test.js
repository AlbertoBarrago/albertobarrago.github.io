import { describe, expect, it } from 'vitest';
import {
	articles, sortArticlesByDateAscending, sortArticlesByDateDescending,
	filterArticles, articleTags, articleExcerpt,
} from './articles.js';

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

describe('sortArticlesByDateDescending', () => {
	it('orders articles from newest to oldest (LIFO)', () => {
		const input = [
			{ slug: 'a', date: '2024-01-15' },
			{ slug: 'c', date: '2025-06-01' },
			{ slug: 'b', date: '2024-11-30' }
		];
		expect(sortArticlesByDateDescending(input).map((a) => a.slug)).toEqual(['c', 'b', 'a']);
	});

	it('does not mutate the input array', () => {
		const input = [{ date: '2024-01-01' }, { date: '2025-01-01' }];
		const original = [...input];
		sortArticlesByDateDescending(input);
		expect(input).toEqual(original);
	});
});

describe('filterArticles', () => {
	const list = [
		{ slug: 'iris', title: 'Iris: a mail app in Rust', tags: ['rust', 'macos'] },
		{ slug: 'wir', title: 'What Is Running', tags: ['c', 'cli'] },
		{ slug: 'otelma', title: 'Otelma', tags: ['go', 'llm'] }
	];

	it('returns everything with empty criteria', () => {
		expect(filterArticles(list, {})).toHaveLength(3);
		expect(filterArticles(list, { query: '   ', tag: '' })).toHaveLength(3);
	});

	it('matches the query case-insensitively on title and tags', () => {
		expect(filterArticles(list, { query: 'RUST' }).map((a) => a.slug)).toEqual(['iris']);
		expect(filterArticles(list, { query: 'llm' }).map((a) => a.slug)).toEqual(['otelma']);
	});

	it('filters by exact tag and combines with the query', () => {
		expect(filterArticles(list, { tag: 'c' }).map((a) => a.slug)).toEqual(['wir']);
		expect(filterArticles(list, { tag: 'rust', query: 'running' })).toEqual([]);
	});
});

describe('articleTags', () => {
	it('counts tags, most used first, ties alphabetical', () => {
		const list = [{ tags: ['rust', 'cli'] }, { tags: ['rust', 'ai'] }, { tags: ['go'] }];
		expect(articleTags(list)).toEqual([
			{ tag: 'rust', count: 2 },
			{ tag: 'ai', count: 1 },
			{ tag: 'cli', count: 1 },
			{ tag: 'go', count: 1 }
		]);
	});
});

describe('articleExcerpt', () => {
	it('uses paragraph text only and decodes entities', () => {
		const html = '<p>I&#39;m <strong>here</strong> &amp; now.</p><h2>Heading</h2><pre><code>code()</code></pre>';
		expect(articleExcerpt(html)).toBe("I'm here & now.");
	});

	it('cuts at a word boundary with an ellipsis', () => {
		expect(articleExcerpt('<p>alpha beta gamma delta</p>', 13)).toBe('alpha beta…');
	});
});
