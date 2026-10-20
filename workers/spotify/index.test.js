import { afterEach, describe, expect, it, vi } from 'vitest';
import worker from './index.js';

const env = { SPOTIFY_CLIENT_ID: 'test', SPOTIFY_CLIENT_SECRET: 'secret', SPOTIFY_REFRESH_TOKEN: 'refresh' };
const request = () => new Request('https://music.example/now-playing');
const token = () => Response.json({ access_token: 'access', expires_in: 0 });
afterEach(() => vi.unstubAllGlobals());

describe('Spotify public endpoint', () => {
	it('rejects requests before configuration without calling Spotify', async () => {
		const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
		expect((await worker.fetch(request(), {})).status).toBe(503);
		expect(fetch).not.toHaveBeenCalled();
	});
	it('returns only public track fields', async () => {
		const fetch = vi.fn().mockResolvedValueOnce(token()).mockResolvedValueOnce(Response.json({
			is_playing: true, progress_ms: 100, item: { type: 'track', name: 'Ojai', artists: [{ name: 'Catching Flies' }],
				external_urls: { spotify: 'https://open.spotify.com/track/123' }, album: { images: [{ url: 'https://i.scdn.co/image/abc' }] } },
		}));
		vi.stubGlobal('fetch', fetch);
		const result = await worker.fetch(request(), env);
		expect(await result.json()).toEqual({ playing: true, title: 'Ojai', artist: 'Catching Flies',
			url: 'https://open.spotify.com/track/123', image: 'https://i.scdn.co/image/abc' });
		expect(result.headers.get('Access-Control-Allow-Origin')).toBe('*');
	});
	it.each([null, { is_playing: false }, { is_playing: true, item: { type: 'episode' } }])('reports idle for inactive or unsupported playback: %j', async (data) => {
		vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce(token()).mockResolvedValueOnce(
			data ? Response.json(data) : new Response(null, { status: 204 })));
		expect(await (await worker.fetch(request(), env)).json()).toEqual({ playing: false });
	});
	it('does not expose upstream errors or credentials', async () => {
		vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce(new Response('private details', { status: 401 })));
		const result = await worker.fetch(request(), env);
		expect(result.status).toBe(503);
		expect(await result.json()).toEqual({ error: 'Temporarily unavailable' });
		expect(result.headers.get('Cache-Control')).toBe('no-store');
	});
	it('serves cached playback without contacting Spotify', async () => {
		const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
		vi.stubGlobal('caches', { default: { match: vi.fn().mockResolvedValue(Response.json({ playing: false })) } });
		expect(await (await worker.fetch(request(), env)).json()).toEqual({ playing: false });
		expect(fetch).not.toHaveBeenCalled();
	});
});
