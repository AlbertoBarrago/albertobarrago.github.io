import { t } from './i18n.js';
import pkg from "../../package.json";

const name = "Alberto Barrago";
const role = "Senior Software Engineer";
const location = t("Cagliari, Italy");
const email = "albertobarrago@gmail.com";
const cv_filename = "albertobarrago_cv.pdf";

const profile = t("Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems.");

const skills = {
	frontend: ["Angular", "React", "Vanilla JS"],
	backend: ["Node.js", "Fastify", "FastAPI", "Flask", "Spring Boot"],
	apple: ["Swift", "SwiftUI", "SwiftData", "AppKit", "iOS/macOS"],
	database: ["MongoDB", "Oracle", "MySQL"],
	devops: ["Docker", "GitHub/GitLab CI", "Azure DevOps"],
	tools: ["Git", "Neovim", "tmux", "Zed"],
	ai: ["LLM Integration", "Prompt Engineering", "AI Agents"]
};

const experience = [
	{
		role: "Tech Leader / Senior Software Engineer",
		company: "C22 Consulting",
		period: t("2026 - Present"),
		highlight: t("Leading React, iOS, and Java architecture across active projects; mentoring developers and driving staff engineering practices. Researching and benchmarking custom LLM solutions and AI workflows with Claude and MCP")
	},
	{
		role: "Senior Software Engineer / DevOps",
		company: "Minsait/Indra",
		period: "2023 - 2025",
		highlight: t("Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time")
	},
	{
		role: "Senior Software Developer",
		company: "Softfobia",
		period: "2022 - 2023",
		highlight: t("Led full-stack teams, 20% load time improvement")
	},
	{
		role: "Software Developer",
		company: "Accenture",
		period: "2021 - 2022",
		highlight: t("Kafka microservices architecture, Angular 12 apps")
	},
	{
		role: "Software Developer",
		company: "Sinossi",
		period: "2016 - 2021",
		highlight: t("Mobile apps for Deutsche Bank, TIM (Fortune 500)")
	}
];

/** @type {{ name: string, description: string, url: string, language: string }[]} */
const openSource = [
	{
		name: "Markasso",
		description: t("A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas."),
		url: "https://markasso.it",
		language: "TypeScript (0 deps)"
	},
	{
		name: "Telemaco",
		description: t("A headless browser engine in Rust: real JavaScript, real DOM, native layout and paint, speaking the Chrome DevTools Protocol. No Chromium required."),
		url: "https://github.com/AlbertoBarrago/telemaco",
		language: "Rust"
	},
	{
		name: "GitLab Alert",
		description: t("A native macOS menu bar companion for GitLab: merge requests, issues, failed pipelines and background notifications. Built with SwiftPM, no Xcode project."),
		url: "https://github.com/AlbertoBarrago/gitlab-alert",
		language: "Swift"
	},
	{
		name: "RSS-Reader",
		description: t("A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar: clean, minimal, no bloat."),
		url: "https://github.com/AlbertoBarrago/RSS-Reader",
		language: "Swift"
	},
	{
		name: "Timelog",
		description: t("A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData."),
		url: "https://github.com/AlbertoBarrago/Timelog",
		language: "Swift"
	},
	{
		name: "DockDock",
		description: t("A native macOS utility that shows live window previews when you hover over Dock icons."),
		url: "https://github.com/AlbertoBarrago/DockDock",
		language: "Swift"
	},
	{
		name: "Sgommello",
		description: t("Break reminder for macOS: a monster breaks your screen until you take a real break."),
		url: "https://github.com/AlbertoBarrago/Sgommello",
		language: "Swift"
	}
];

/** @type {{ name: string, description: string, install: string, url: string, tap: string }[]} */
const brewFormulas = [
	{
		name: "wir",
		description: t("What Is Running - Port and Process Inspector."),
		install: "brew install AlbertoBarrago/tap/wir",
		url: "https://github.com/AlbertoBarrago/wir",
		tap: "AlbertoBarrago/tap"
	},
	{
		name: "jm",
		description: t("Switch between JDKs registered with macOS. Primary shell command: jm."),
		install: "brew install AlbertoBarrago/tap/jm",
		url: "https://github.com/AlbertoBarrago/jm",
		tap: "AlbertoBarrago/tap"
	},
	{
		name: "serval",
		description: t("Local-first CLI that estimates the blast radius of a code change. Primary shell command: serval."),
		install: "brew install AlbertoBarrago/tap/serval",
		url: "https://github.com/AlbertoBarrago/serval",
		tap: "AlbertoBarrago/tap"
	},
	{
		name: "otelma",
		description: t("A local LLM inference runtime, built from scratch in Go for Apple Silicon on top of llama.cpp. Smaller and more didactic than Ollama, with a configurable unified memory budget as an explicit constraint. v0.2."),
		install: "brew install AlbertoBarrago/tap/otelma",
		url: "https://github.com/AlbertoBarrago/otelma",
		tap: "AlbertoBarrago/tap"
	}
];

/** @type {{ category: string, items: { name: string, description: string, url: string }[] }[]} */
const utils = [
	{
		category: t("Free programming books"),
		items: [
			{
				name: "Free Programming Books (IT)",
				description: t("Curated list of free programming books in Italian."),
				url: "https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-it.md"
			},
			{
				name: "Free Programming Books (EN)",
				description: t("The full English-language list of free programming books."),
				url: "https://github.com/EbookFoundation/free-programming-books"
			},
			{
				name: "The Odin Project",
				description: t("Free, open-source full-stack curriculum (HTML/CSS, JS, Node, Rails)."),
				url: "https://www.theodinproject.com/"
			},
			{
				name: "freeCodeCamp",
				description: t("Free certifications and interactive courses for web development."),
				url: "https://www.freecodecamp.org/"
			}
		]
	},
	{
		category: t("Free courses & practice"),
		items: [
			{
				name: "Exercism",
				description: t("Free coding exercises and mentoring across 70+ languages."),
				url: "https://exercism.org/"
			},
			{
				name: "Roadmap.sh",
				description: t("Step-by-step roadmaps and guides for developer roles."),
				url: "https://roadmap.sh/"
			},
			{
				name: "Khan Academy",
				description: t("Free courses in math, science, and computer programming."),
				url: "https://www.khanacademy.org/"
			},
			{
				name: "MIT OpenCourseWare",
				description: t("Free lecture notes, exams, and videos from MIT courses."),
				url: "https://ocw.mit.edu/"
			}
		]
	},
	{
		category: t("Docs & references"),
		items: [
			{
				name: "MDN Web Docs",
				description: t("The definitive reference for web platform technologies."),
				url: "https://developer.mozilla.org/"
			},
			{
				name: "DevDocs",
				description: t("Fast, offline-capable API documentation browser."),
				url: "https://devdocs.io/"
			},
			{
				name: "Explain Shell",
				description: t("Paste a shell command to see what each part does."),
				url: "https://explainshell.com/"
			},
			{
				name: "Regex101",
				description: t("Online regex tester and debugger with live explanation."),
				url: "https://regex101.com/"
			}
		]
	},
	{
		category: t("Free tools & perks"),
		items: [
			{
				name: "Markasso",
				description: t("My own fast, minimal, keyboard-first whiteboard engine. Marker + Picasso. No framework. No runtime. Just canvas."),
				url: "https://markasso.it"
			},
			{
				name: "GitHub Student Pack",
				description: t("Free developer tools and credits for students."),
				url: "https://education.github.com/pack"
			},
			{
				name: "Coolors",
				description: t("Free color palette generator and contrast checker."),
				url: "https://coolors.co/"
			},
			{
				name: "TinyPNG",
				description: t("Compress PNG/WebP images for the web, free tier."),
				url: "https://tinypng.com/"
			}
		]
	}
];

const links = {
	github: "https://github.com/AlbertoBarrago",
	email: `mailto:${email}`,
	bsky: "https://bsky.app/profile/albzoser.bsky.social"
};

const version = pkg.version;

const downloadCv = () => {
	const link = document.createElement("a");
	link.href = `/${cv_filename}`;
	link.download = cv_filename;
	link.dispatchEvent(new MouseEvent("click"));
};

export {
	name,
	role,
	location,
	email,
	profile,
	skills,
	experience,
	openSource,
	brewFormulas,
	utils,
	links,
	version,
	downloadCv
};
