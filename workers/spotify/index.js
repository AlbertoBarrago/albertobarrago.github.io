const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';
let accessToken;
let tokenExpires = 0;
let tokenCredentials;
let retryAfter = 0;

async function spotifyToken(env) {
	const credentials = `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}:${env.SPOTIFY_REFRESH_TOKEN}`;
	if (accessToken && tokenCredentials === credentials && Date.now() < tokenExpires) return accessToken;
	const response = await fetch(TOKEN_URL, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${btoa(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`)}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: env.SPOTIFY_REFRESH_TOKEN }),
		signal: AbortSignal.timeout(5000),
	});
	if (!response.ok) throw new Error('Spotify authorization failed');
	const data = await response.json();
	if (!data.access_token) throw new Error('Missing Spotify access token');
	accessToken = data.access_token;
	tokenCredentials = credentials;
	tokenExpires = Date.now() + Math.max(0, Number(data.expires_in) - 60) * 1000;
	return accessToken;
}

function json(body, status = 200) {
	return Response.json(body, { status, headers: {
		'Access-Control-Allow-Origin': '*',
		'Cache-Control': status === 200 ? 'public, max-age=30' : 'no-store',
		'X-Content-Type-Options': 'nosniff',
	} });
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		if (url.pathname !== '/now-playing') return json({ error: 'Not found' }, 404);
		if (request.method !== 'GET') return new Response(null, { status: 405, headers: { Allow: 'GET' } });
		if (!env.SPOTIFY_CLIENT_ID || !env.SPOTIFY_CLIENT_SECRET || !env.SPOTIFY_REFRESH_TOKEN) {
			return json({ error: 'Spotify is not connected' }, 503);
		}
		const key = new Request(`${url.origin}/now-playing`);
		const cache = globalThis.caches?.default;
		const cached = await cache?.match(key);
		if (cached) return cached;
		if (Date.now() < retryAfter) return json({ error: 'Temporarily unavailable' }, 503);
		try {
			const token = await spotifyToken(env);
			const response = await fetch(PLAYING_URL, {
				headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(5000),
			});
			if (response.status === 401) { accessToken = undefined; tokenExpires = 0; }
			if (response.status === 429) {
				retryAfter = Date.now() + Math.max(30, Number(response.headers.get('Retry-After')) || 30) * 1000;
			}
			if (response.status !== 204 && !response.ok) throw new Error('Spotify unavailable');
			const data = response.status === 204 ? null : await response.json();
			const item = data?.item;
			const body = data?.is_playing && item?.type === 'track' && !item.is_local && item.external_urls?.spotify
				? { playing: true, title: item.name, artist: item.artists.map(({ name }) => name).join(', '),
					url: item.external_urls.spotify, image: item.album?.images?.[0]?.url ?? null }
				: { playing: false };
			const result = json(body);
			if (cache) ctx.waitUntil(cache.put(key, result.clone()));
			return result;
		} catch {
			return json({ error: 'Temporarily unavailable' }, 503);
		}
	},
};
