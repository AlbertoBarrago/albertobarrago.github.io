/**
 * @file Browser DevTools console easter egg.
 * @description Prints an ASCII banner, a nerd greeting with contact links,
 * and the CRT color theme (as copy-pasteable CSS custom properties)
 * for anyone poking around in the console instead of the UI.
 */

import { email, links, version } from './index.js';

const THEME = Object.freeze({
	'--background': '#0b0f14',
	'--background-deep': '#070a0e',
	'--surface': '#111820',
	'--foreground': '#b8c4d4',
	'--bright': '#e7edf5',
	'--muted': '#667485',
	'--border': '#22303d',
	'--cyan': '#5eead4',
	'--blue': '#7aa2f7',
	'--green': '#9ece6a',
	'--yellow': '#e0af68',
	'--purple': '#bb9af7',
	'--red': '#f7768e',
});

function printConsoleBanner() {
	const asciiArt = `    _    _     ____   _____
   / \\  | |   | __ ) |__  /
  / _ \\ | |   |  _ \\   / /
 / ___ \\| |___| |_) | / /_
/_/   \\_\\_____|____/ /____|`;

	console.log(
		`%c${asciiArt}`,
		'color: #9ece6a; font-family: monospace; font-weight: bold; line-height: 1.2;'
	);

	console.log(
		'%cPortfolio shell v%s %c· running on curiosity',
		'color: #5eead4; font-family: monospace;',
		version,
		'color: #667485; font-family: monospace;'
	);

	console.log(
		'%c> reading the source instead of clicking around? my kind of visitor.\n> say hi: %s\n> code: %s',
		'color: #b8c4d4; font-family: monospace;',
		email,
		links.github
	);

	console.log('%csteal the theme (dark CRT terminal palette):', 'color: #e0af68; font-family: monospace;');
	console.log(
		Object.entries(THEME)
			.map(([variable, value]) => `${variable}: ${value};`)
			.join('\n')
	);
}

export { printConsoleBanner };
