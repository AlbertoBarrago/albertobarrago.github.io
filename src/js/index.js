import pkg from "../../package.json";

const name = "Alberto Barrago";
const role = "Senior Software Engineer";
const location = "Cagliari, Italy";
const email = "albertobarrago@gmail.com";
const cv_filename = "albertobarrago_cv.pdf";

const profile = `JavaScript-first Senior Engineer with deep expertise in enterprise
scalability and cloud architecture. Over 6+ years delivering production
systems for millions of users across frontend, backend, and DevOps—
specializing in Node.js/React ecosystems, Spring Boot microservices,
and CI/CD automation. Experienced in building component libraries and
Kafka-based architectures. Currently developing Python/FastAPI skills
and exploring AI-integrated solutions. Pragmatic builder who values code
quality, collaborative shipping, and real measurable impact.
`;

const skills = {
	frontend: ["Angular", "React", "Vanilla JS"],
	backend: ["Node.js", "Fastify", "FastAPI", "Flask", "Spring Boot"],
	database: ["MongoDB", "Oracle", "MySQL"],
	devops: ["Docker", "GitHub/Gitlab Actions", "Azure DevOps"],
	tools: ["Git", "Neovim", "tmux", ""],
	ai: ["LLM Integration", "Prompt Engineering", "AI Agents"]
};

const experience = [
	{
		role: "Senior Software Engineer",
		company: "C22 Consulting",
		period: "2026 - Present",
		highlight: "Loading..."
	},
	{
		role: "Senior Software Engineer",
		company: "Minsait/Indra",
		period: "2023 - 2025",
		highlight: "Angular component library for 6+ teams, CI/CD optimization -30% deploy time"
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
	links,
	version,
	downloadCv
};
