import { afterEach, expect, it, vi } from 'vitest';
import { startNowPlaying } from './now-playing.js';

afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals(); });

it('updates playback, hides on pause, and skips hidden tabs', async () => {
	vi.useFakeTimers();
	const element = { replaceChildren: vi.fn(), append: vi.fn(), textContent: '' };
	const ambience = { classList: { toggle: vi.fn() }, setAttribute: vi.fn(), append: vi.fn() };
	const document = { hidden: false, body: { prepend: vi.fn() }, querySelectorAll: () => [element],
		createElement: vi.fn((tag) => tag === 'div' ? ambience : { style: { setProperty: vi.fn() } }), addEventListener: vi.fn() };
	vi.stubGlobal('document', document);
	const fetch = vi.fn().mockResolvedValueOnce(Response.json({ playing: true, title: '<script>', artist: 'Artist', url: 'https://open.spotify.com/track/abc' }))
		.mockResolvedValueOnce(Response.json({ playing: false }));
	vi.stubGlobal('fetch', fetch);
	startNowPlaying('https://music.example/now-playing');
	await vi.advanceTimersByTimeAsync(0);
	expect(element.append.mock.calls[1][0].textContent).toBe('Artist — <script>');
	expect(element.hidden).toBe(false);
	expect(ambience.classList.toggle).toHaveBeenLastCalledWith('is-playing', true);
	expect(ambience.setAttribute).toHaveBeenCalledWith('aria-hidden', 'true');
	await vi.advanceTimersByTimeAsync(30000);
	expect(element.hidden).toBe(true);
	expect(ambience.classList.toggle).toHaveBeenLastCalledWith('is-playing', false);
	document.hidden = true;
	document.addEventListener.mock.calls[0][1]();
	expect(ambience.classList.toggle).toHaveBeenLastCalledWith('is-suspended', true);
	await vi.advanceTimersByTimeAsync(30000);
	expect(fetch).toHaveBeenCalledTimes(2);
});

it('leaves Spotify disabled without an endpoint', () => {
	const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
	startNowPlaying('');
	expect(fetch).not.toHaveBeenCalled();
});
