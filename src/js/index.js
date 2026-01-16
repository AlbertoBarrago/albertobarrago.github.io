import pkg from "../../package.json";

const name = "Alberto Barrago";
const role = "Senior Software Engineer";
const location = "Cagliari, Italy";
const email = "albertobarrago@gmail.com";
const cv_filename = "albertobarrago_cv.pdf";

const profile = `JavaScript-first Senior Engineer with 6+ years delivering production systems for millions of users. Specializing in Node.js/React ecosystems, CI/CD automation, and AI-integrated solutions.`;

const skills = {
	frontend: ["Angular", "React", "Vanilla JS"],
	backend: ["Node.js", "FastAPI", "Spring Boot"],
	database: ["MongoDB", "Oracle", "MySQL"],
	devops: ["Docker", "GitHub Actions", "Azure DevOps"],
	tools: ["Git", "Neovim", "tmux"],
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
	blog: "https://alblog.gigalixirapp.com/articles"
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
