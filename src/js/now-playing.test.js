import { afterEach, expect, it, vi } from 'vitest';
import { startNowPlaying } from './now-playing.js';

afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals(); });

it('updates playback, falls back on pause, and skips hidden tabs', async () => {
	vi.useFakeTimers();
	const element = { replaceChildren: vi.fn(), append: vi.fn(), textContent: '' };
	const shortcut = { hidden: false };
	const document = { hidden: false, querySelectorAll: selector => selector === '[data-music-shortcut]' ? [shortcut] : [element], createElement: () => ({}), addEventListener: vi.fn() };
	vi.stubGlobal('document', document);
	const fetch = vi.fn().mockResolvedValueOnce(Response.json({ playing: true, title: '<script>', artist: 'Artist', url: 'https://open.spotify.com/track/abc' }))
		.mockResolvedValueOnce(Response.json({ playing: false }));
	vi.stubGlobal('fetch', fetch);
	startNowPlaying('https://music.example/now-playing');
	await vi.advanceTimersByTimeAsync(0);
	expect(element.append.mock.calls[1][0].textContent).toBe('Artist — <script>');
	expect(shortcut.hidden).toBe(true);
	await vi.advanceTimersByTimeAsync(30000);
	expect(element.textContent).toBe('At my desk, usually with music in my headphones.');
	expect(shortcut.hidden).toBe(false);
	document.hidden = true;
	await vi.advanceTimersByTimeAsync(30000);
	expect(fetch).toHaveBeenCalledTimes(2);
});

it('leaves Spotify disabled without an endpoint', () => {
	const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
	startNowPlaying('');
	expect(fetch).not.toHaveBeenCalled();
});
