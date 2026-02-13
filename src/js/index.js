import pkg from "../../package.json";

const name = "Alberto Barrago";
const role = "Senior Software Engineer";
const location = "Cagliari, Italy";
const email = "albertobarrago@gmail.com";
const cv_filename = "albertobarrago_cv.pdf";

const profile = `Senior Frontend Engineer with strong full-stack foundations and proven
ability to rapidly adapt across technologies. Deep expertise in React/
TypeScript with enterprise-scale component library architecture,
complemented by hands-on experience in Python/FastAPI, Node.js, CI/
CD pipelines, and AI/ML integrations. Thrive in polyglot environments
where quality and continuous learning are essential. Passionate about
building mission-critical solutions and mentoring teams on modern web
technologies.
`;

const skills = {
	frontend: ["Angular", "React", "Vanilla JS"],
	backend: ["Node.js", "Fastify", "FastAPI", "Flask", "Spring Boot"],
	database: ["MongoDB", "Oracle", "MySQL"],
	devops: ["Docker", "GitHub/Gitlab Actions", "Azure DevOps"],
	tools: ["Git", "Neovim", "tmux", "eza", "Wir"],
	ai: ["LLM Integration", "Prompt Engineering", "AI Agents"]
};

const experience = [
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
	blog: "https://alblog.gigalixirapp.com/articles",
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
