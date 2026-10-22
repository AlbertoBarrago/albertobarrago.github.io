import { t } from './i18n.js';

export function startNowPlaying(endpoint) {
	if (!endpoint) return;
	let busy = false;
	async function update() {
		if (document.hidden || busy) return;
		busy = true;
		let track;
		try {
			const response = await fetch(endpoint, { signal: AbortSignal.timeout(8000), credentials: 'omit' });
			if (response.ok) track = await response.json();
		} catch { /* Hide playback when Spotify is unavailable. */ }
		finally { busy = false; }
		const playing = Boolean(track?.playing && typeof track.title === 'string' && typeof track.artist === 'string'
			&& /^https:\/\/open\.spotify\.com\/track\/[A-Za-z0-9]+$/.test(track.url));
		for (const element of document.querySelectorAll('[data-now-playing]')) {
			element.hidden = !playing;
			element.replaceChildren();
			if (playing) {
				element.append(`\n\n${t('In my headphones now:')} `);
				const link = document.createElement('a');
				link.className = 'terminal-link';
				link.href = track.url;
				link.target = '_blank';
				link.rel = 'noopener noreferrer';
				link.textContent = `${track.artist} — ${track.title}`;
				element.append(link);
			}
		}
	}
	void update();
	setInterval(update, 30000);
	document.addEventListener('visibilitychange', update);
}
