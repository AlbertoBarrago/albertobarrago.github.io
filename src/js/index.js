import pkg from "../../package.json";

const name = "Alberto Barrago";
const role = "Senior Software Engineer";
const location = "Cagliari, Italy";
const email = "albertobarrago@gmail.com";
const cv_filename = "albertobarrago_cv.pdf";

const profile = `Senior Software Engineer with a product-builder mindset, turning ideas into scalable, production-ready tools that solve real-world problems.`;

const skills = {
	frontend: ["Angular", "React", "Vanilla JS"],
	backend: ["Node.js", "Fastify", "FastAPI", "Flask", "Spring Boot"],
	database: ["MongoDB", "Oracle", "MySQL"],
	devops: ["Docker", "GitHub/GitLab CI", "Azure DevOps"],
	tools: ["Git", "Neovim", "tmux", "Zed"],
	ai: ["LLM Integration", "Prompt Engineering", "AI Agents"]
};

const experience = [
	{
		role: "Tech Leader / Senior Software Engineer",
		company: "C22 Consulting",
		period: "2026 - Present",
		highlight: "Leading React, iOS, and Java architecture across active projects; mentoring developers and evangelizing AI workflows with Claude and MCP"
	},
	{
		role: "Senior Software Engineer / DevOps",
		company: "Minsait/Indra",
		period: "2023 - 2025",
		highlight: "Angular component library for 6+ teams, DevOps ownership, CI/CD optimization -30% deploy time"
	},
	{
		role: "Senior Software Developer",
		company: "Softfobia",
		period: "2022 - 2023",
		highlight: "Led full-stack teams, 20% load time improvement"
	},
	{
		role: "Software Developer",
		company: "Accenture",
		period: "2021 - 2022",
		highlight: "Kafka microservices architecture, Angular 12 apps"
	},
	{
		role: "Software Developer",
		company: "Sinossi",
		period: "2016 - 2021",
		highlight: "Mobile apps for Deutsche Bank, TIM (Fortune 500)"
	}
];

/** @type {{ name: string, description: string, url: string, language: string, stars: number }[]} */
const openSource = [
	{
		name: "Markasso",
		description: "A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas.",
		url: "https://markasso.it",
		language: "Typescript (0 deps)",
		stars: 3
	},
	{
		name: "RSS-Reader",
		description: "A lightweight, native macOS RSS Reader app built with Swift. Lives in your menu bar — clean, minimal, no bloat.",
		url: "https://github.com/AlbertoBarrago/RSS-Reader",
		language: "Swift",
		stars: 14
	},
	{
		name: "Timelog",
		description: "A lightweight time-tracking app for iOS and macOS built with SwiftUI and SwiftData.",
		url: "https://github.com/AlbertoBarrago/Timelog",
		language: "Swift",
		stars: 2
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
	link.href = cv_filename;
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
	links,
	version,
	downloadCv
};
