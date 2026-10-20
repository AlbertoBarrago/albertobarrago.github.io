import { createServer } from 'node:http';
import { randomBytes } from 'node:crypto';
import { chmod, readFile, writeFile } from 'node:fs/promises';
import { parseEnv } from 'node:util';

const file = new URL('./.dev.vars', import.meta.url);
const env = parseEnv(await readFile(file, 'utf8'));
if (!env.SPOTIFY_CLIENT_ID || !env.SPOTIFY_CLIENT_SECRET) {
	throw new Error('Fill SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in workers/spotify/.dev.vars first.');
}
const redirect = 'http://127.0.0.1:8888/callback';
const state = randomBytes(32).toString('hex');
const authorize = new URL('https://accounts.spotify.com/authorize');
authorize.search = new URLSearchParams({ client_id: env.SPOTIFY_CLIENT_ID,
	response_type: 'code', redirect_uri: redirect, state, scope: 'user-read-currently-playing' });

const server = createServer(async (req, res) => {
	const url = new URL(req.url, redirect);
	res.setHeader('Cache-Control', 'no-store');
	res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	if (url.pathname !== '/callback') { res.writeHead(404).end('Not found'); return; }
	if (url.searchParams.get('state') !== state) { res.writeHead(400).end('Invalid state'); return; }
	if (url.searchParams.has('error')) {
		res.writeHead(400).end('Autorizzazione annullata. Puoi chiudere questa finestra.');
		server.close(); return;
	}
	const code = url.searchParams.get('code');
	if (!code) { res.writeHead(400).end('Missing code'); return; }
	try {
		const response = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST', headers: {
				Authorization: `Basic ${Buffer.from(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			}, body: new URLSearchParams({ grant_type: 'authorization_code', code, redirect_uri: redirect }),
			signal: AbortSignal.timeout(10000),
		});
		if (!response.ok) throw new Error('Token exchange failed');
		const data = await response.json();
		if (!data.refresh_token) throw new Error('No refresh token returned');
		env.SPOTIFY_REFRESH_TOKEN = data.refresh_token;
		await writeFile(file, Object.entries(env).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join('\n') + '\n', { mode: 0o600 });
		await chmod(file, 0o600);
		res.end('Spotify collegato. Puoi chiudere questa finestra e tornare al terminale.');
		console.log('Spotify connected. Credentials saved locally in the ignored .dev.vars file.');
	} catch {
		res.writeHead(502).end('Collegamento non riuscito. Riavvia lo script e riprova.');
		process.exitCode = 1;
	} finally { server.close(); }
});
server.listen(8888, '127.0.0.1', () => {
	console.log(`Open this URL in your browser to authorize your account:\n${authorize}`);
});
server.on('error', (error) => { console.error(`Local callback failed: ${error.code}`); process.exitCode = 1; });
const timeout = setTimeout(() => server.close(), 10 * 60 * 1000);
timeout.unref();
