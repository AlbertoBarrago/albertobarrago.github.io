import { t } from './i18n.js';
import pkg from "../../package.json";
import claudeMdRules from "../content/how-we-build/claude-md-verification-rules.md?raw";
import verifySkillTemplate from "../content/how-we-build/verify-skill-template.md?raw";
import verifySkillMarkasso from "../content/how-we-build/verify-skill-markasso.md?raw";
import verifySkillThemis from "../content/how-we-build/verify-skill-themis.md?raw";
import verifiedTrailer from "../content/how-we-build/verified-trailer.sh?raw";
import secondOpinion from "../content/how-we-build/second-opinion.sh?raw";
import themisGates from "../content/how-we-build/themis-gates.sh?raw";
import devServerFreePort from "../content/how-we-build/dev-server-free-port.sh?raw";
import telemacoDomCheck from "../content/how-we-build/telemaco-dom-check.txt?raw";
import verifySkillKickoff from "../content/how-we-build/verify-skill-kickoff.sh?raw";
import verifySkillPlaywrightE2e from "../content/how-we-build/verify-skill-playwright-e2e.md?raw";
import playwrightMcpSetup from "../content/how-we-build/playwright-mcp-setup.sh?raw";
import languageIndependentSelectors from "../content/how-we-build/language-independent-selectors.txt?raw";
import biomeTrackedFiles from "../content/how-we-build/biome-tracked-files.sh?raw";
import verifyGateHook from "../content/how-we-build/verify-gate-hook.sh?raw";
import reviewMdTemplate from "../content/how-we-build/review-md-template.md?raw";
import secretKeyChecks from "../content/how-we-build/secret-key-checks.sh?raw";
import improvementLog from "../content/how-we-build/improvement-log.md?raw";
import globalSettingsGuard from "../content/how-we-build/global-settings-guard.sh?raw";

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

/**
 * @typedef {{ href: string, src: string, alt: string }} ProjectBadge
 * An external badge image (e.g. a directory listing score) shown on a project card.
 */

/** @type {{ name: string, description: string, url: string, language: string, badges?: ProjectBadge[] }[]} */
const openSource = [
	{
		name: "Markasso",
		description: t("A fast, minimal, keyboard-first whiteboard engine for the browser. Marker + Picasso. No framework. No runtime. Just canvas."),
		url: "https://markasso.it",
		language: "TypeScript (0 deps)",
		badges: [
			{
				href: "https://mcprush.com/to/markasso-mcp?ref=badge",
				src: "https://mcprush.com/badge/markasso-mcp/score.svg",
				alt: t("Markasso MCP on mcprush")
			}
		]
	},
	{
		name: "Iris",
		description: t("A native macOS mail and calendar app with a Rust core: Gmail, Microsoft and any IMAP account in one inbox, with your mail kept on your Mac."),
		url: "https://github.com/AlbertoBarrago/iris",
		language: "Swift + Rust"
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

/**
 * The "How we build" guide (command `howwebuild`, page /how-we-build/):
 * practices for working with coding agents. When the advice in a section
 * changes, bump its `updated` date and add a changelog entry (newest first). Prose goes through t(); copyable blocks are raw files in
 * src/content/how-we-build/ and stay in English. Public site: only my own open
 * projects, never client work, internal URLs, personal paths or contacts
 * (how-we-build.test.js checks the blocks).
 * @type {import('./how-we-build.js').HowWeBuildGuide}
 */
const howWeBuild = {
	published: "2026-11-17",
	inspiration: { label: t("Verification loops, by the Claude Code team at Anthropic") },
	practices: [
		{
			id: "claude-md-rules",
			added: "2026-11-17",
			updated: "2026-11-18",
			status: "adopted",
			title: t("Verification rules in CLAUDE.md"),
			why: t("An agent does what its instructions make cheap. Without written rules it declares victory on a green build, retries a flaky test until it passes, or edits the test instead of the code. A few explicit lines in the global CLAUDE.md change the default for every session."),
			steps: [
				t("Put the rules in the global `~/.claude/CLAUDE.md`, so they apply to every repo, and keep project specifics in the repo's own CLAUDE.md."),
				t("Verify by running: the repo's `verify` skill when there is one, otherwise drive the real app."),
				t("Three rounds, then stop: after three failed fix attempts the agent hands over the failing output and what it tried."),
				t("Keep the checks out of reach: a change must never weaken the tests, lint config, `verify` skill or `REVIEW.md` that judge it in the same commit.")
			],
			snippets: [
				{ id: "claude-md-rules", title: t("Excerpt for your CLAUDE.md"), language: "markdown", code: claudeMdRules }
			],
			diagrams: [
				{
					src: "/how-we-build/verification-loop.svg",
					source: "/how-we-build/verification-loop.markasso",
					alt: t("Flowchart: the agent makes a change and verifies it by running the app. If it passes, the change is ready for testing with a Verified commit stamp. If not, the agent fixes the code and verifies again, up to three rounds, then stops and brings in the human."),
					caption: t("The loop these rules describe.")
				}
			]
		},
		{
			id: "verify-skill",
			added: "2026-11-17",
			status: "adopted",
			title: t("A verify skill in every repo"),
			why: t("\"Run the app\" means something different in every repo. A `verify` skill writes it down once: the cheap checks, how to boot the real thing, which flows to drive and what to expect, so the agent collects evidence instead of guessing."),
			steps: [
				t("Copy the template to `<repo>/.claude/skills/verify/SKILL.md` and replace every placeholder; delete the sections that do not apply."),
				t("Track it in git: ignore `.claude/*` but not `.claude/skills/`."),
				t("Run it twice in a row on a clean main before trusting it: it is your smoke test harness, it must be fast and deterministic."),
				t("Say what is out of scope (paid API calls, deploys, what the tools cannot see) and when to ask a human instead."),
				t("Every new project starts with `.claude/skills/verify` from the template, on day one."),
				t("In work or client repos you don't own, keep the skill local with `.git/info/exclude` and never commit it.")
			],
			snippets: [
				{ id: "verify-skill-template", title: t("Template"), language: "markdown", code: verifySkillTemplate },
				{ id: "verify-skill-kickoff", title: t("Kickoff, and local-only skills for repos you don't own"), language: "bash", code: verifySkillKickoff },
				{ id: "verify-skill-playwright-e2e", title: t("Section for an end-to-end Playwright suite"), language: "markdown", code: verifySkillPlaywrightE2e },
				{
					id: "verify-skill-markasso",
					title: t("Real example: Markasso, a web app driven through Telemaco"),
					language: "markdown",
					code: verifySkillMarkasso,
					origin: { label: "Markasso", url: "https://github.com/AlbertoBarrago/markasso" },
					collapsed: true
				},
				{
					id: "verify-skill-themis",
					title: t("Real example: Themis, a CLI driven in a temp project"),
					language: "markdown",
					code: verifySkillThemis,
					origin: { label: "Themis", url: "https://github.com/AlbertoBarrago/themis" },
					collapsed: true
				}
			]
		},
		{
			id: "verified-trailer",
			added: "2026-11-17",
			status: "adopted",
			title: t("A Verified trailer on every commit"),
			why: t("After the fact, nobody remembers whether a commit was run, tested or just built. A one-line trailer records it, and because `none` is allowed, unverified commits stay honest and easy to find."),
			steps: [
				t("End every commit message with `Verified: verify`, `tests`, `manual` or `none (<reason>)`."),
				t("Let the `verify` skill's report tell the agent which value to use."),
				t("Query it with `git log` trailers: no tooling needed.")
			],
			snippets: [
				{ id: "verified-trailer", title: t("Format and queries"), language: "bash", code: verifiedTrailer }
			]
		},
		{
			id: "verify-gate",
			added: "2026-11-18",
			status: "trial",
			title: t("A Stop hook that watches before it blocks"),
			why: t("Rules say \"verify before you are done\", but nothing tells you how often a session ends without it. A Stop hook can measure that. Blocking straight away would punish every false positive, so the first version only watches and writes down what it saw."),
			steps: [
				t("Run it at the end of every turn: it reads the session transcript and logs one verdict per edited repo, `verify`, `commands`, `docs-only` or `none`."),
				t("Count only the edits of the current session, so other sessions on the same repo cannot raise false alarms."),
				t("Never block, never print, always exit 0: a broken hook must not break the session."),
				t("Read the report after a week or two, fix the false positives, and only then decide whether to block turns that end on `none`.")
			],
			snippets: [
				{ id: "verify-gate-hook", title: t("Registration and report"), language: "bash", code: verifyGateHook }
			]
		},
		{
			id: "browser-tool",
			added: "2026-11-17",
			updated: "2026-11-18",
			status: "trial",
			title: t("Choosing the browser tool"),
			why: t("A verify skill is only as good as the browser that drives it. We ran one real test on Markasso's canvas: draw a rectangle, then check that it landed in localStorage. The results decided which tool does what."),
			steps: [
				t("Telemaco: FAIL. No layout engine, and `browser_evaluate` does not await Promises."),
				t("chrome-devtools-mcp: PASS only with synthetic events dispatched from a script, since it has no drag at coordinates; about 36 s."),
				t("Playwright MCP: PASS with real mouse input (`browser_mouse_drag_xy`), about 24 s. On the first try it even hit a panel lying over the canvas, exactly as a real user would."),
				t("Decision, now written in the global CLAUDE.md: Telemaco stays for reading the web, search and stealth fetches; driving and verifying local apps moves to Playwright MCP, pinned, headless and isolated. Moving the existing verify skills is in progress.")
			],
			snippets: [
				{
					id: "playwright-mcp-setup",
					title: t("Playwright MCP for local apps"),
					language: "bash",
					code: playwrightMcpSetup,
					origin: { label: "Playwright MCP", url: "https://github.com/microsoft/playwright-mcp" }
				}
			]
		},
		{
			id: "second-opinion",
			added: "2026-11-17",
			updated: "2026-11-20",
			status: "trial",
			title: t("A second opinion with Codex or opencode"),
			why: t("An agent reviewing its own diff shares its own blind spots. A second model with a fresh prompt finds a different set of bugs, as long as you give it the code, not your conclusion, and treat its output as input, not truth."),
			steps: [
				t("Codex is the long-term reviewer for deep and critical reviews, one call per review because its quota is limited; opencode's free models take smaller diffs, control runs and scoped tasks."),
				t("Size the model to the task: light for a quick question, standard for a small or medium diff, deep for a branch, a plan or a debug session, where two free models run in parallel and you cross-check them."),
				t("Ask before running it, and say what you send and why."),
				t("When the repo has a `REVIEW.md`, send it read from the base branch and ask the reviewer to apply the rules whose trigger matches the diff."),
				t("Read-only by default: opencode's `plan` agent or Codex's `read-only` sandbox. Write access only inside a separate git worktree."),
				t("Read-only is not harmless: the `plan` agent blocks file edits, not shell commands. The prompt forbids build, clean, install and any other writing command, compiling uses a separate build directory, and no review runs while a build or test run is using the same tree."),
				t("A subagent that works on another repo creates its own worktree there with `git worktree add`: the agent tool's worktree isolation only covers the session's repo."),
				t("Use only models whose provider keeps no data and does not train on it, and never send secrets or client code you may not share."),
				t("Verify every finding against the code, fix what is real, and write down what you rejected and why.")
			],
			snippets: [
				{ id: "second-opinion", title: t("Commands"), language: "bash", code: secondOpinion }
			]
		},
		{
			id: "review-md",
			added: "2026-11-18",
			updated: "2026-11-20",
			status: "trial",
			title: t("A REVIEW.md the change cannot rewrite"),
			why: t("A generic review prompt finds generic issues. A `REVIEW.md` tells the reviewer what breaks in this code, and because it is always read from the base branch, a change cannot soften the rules that judge it."),
			steps: [
				t("Give the reviewer the diff plus `git show <base>:REVIEW.md`, never the copy in the branch under review."),
				t("Every rule comes from a real bug, citing the fix commits, or from a stated project constraint. No generic advice."),
				t("Make each rule checkable from a diff: a trigger on paths, a concrete check, and why it exists."),
				t("Keep it under about 15 rules: add or sharpen one when a bug slips through review, delete the ones that never trigger or only produce noise."),
				t("No `REVIEW.md` yet? When the agent proposes a review, it also proposes a first version built from the `fix:` commits in `git log`, citing their hashes. It only proposes: the file is written after a human says yes."),
				t("When a fix corrects a bug that an earlier review missed, the agent proposes the rule to add or sharpen: trigger, check, and the fix commit."),
				t("Change `REVIEW.md` in its own commit, never together with the code it judges.")
			],
			snippets: [
				{ id: "review-md-template", title: t("Template"), language: "markdown", code: reviewMdTemplate }
			]
		},
		{
			id: "improvement-log",
			added: "2026-11-20",
			status: "trial",
			title: t("An improvement log for the setup itself"),
			why: t("Rules get skipped, hooks miss a case, a release step stays manual until it breaks. Fixed on the spot, each lesson is lost; fixed in the middle of another task, it widens the diff. A short log keeps them in one place until each gets its own fix."),
			steps: [
				t("Keep one file next to the agent's rules, one entry per issue: what happened, the proposed fix, a status (`open`, `done <sha or PR>`, `dropped (<reason>)`)."),
				t("The agent adds an entry when something breaks, a rule gets skipped, or a step turns out manual and fragile, and says so in one line."),
				t("Each fix is its own task and branch; close the entry with its commit or PR."),
				t("When there is time to improve the setup, start from the `open` entries instead of from memory."),
				t("Prefer fixes that make a rule enforced rather than remembered: a hook or a script check beats another line of instructions.")
			],
			snippets: [
				{ id: "improvement-log", title: t("Template"), language: "markdown", code: improvementLog }
			]
		},
		{
			id: "themis-gates",
			added: "2026-11-17",
			status: "adopted",
			title: t("Themis: gates and a locked contract"),
			why: t("For larger work, rules are not enough: the agent must not be able to move the goalposts. Themis turns a spec into acceptance tests, locks them by digest, and only then lets agents write code that a separate verifier judges."),
			steps: [
				t("Write the spec: goal, verify steps, limits, acceptance criteria."),
				t("Approve the plan (gate 1) and the tests (gate 2): approving the tests records the digests of tests, spec, verifier and config in `.themis/lock.json`, and a guard rejects any change to them."),
				t("Run: each task works in its own worktree; the verifier's exit code says retry or blocked, and `max_iterations` caps the attempts."),
				t("Close with a retro (gate 3): misses become changes to the agents' instructions.")
			],
			snippets: [
				{
					id: "themis-gates",
					title: t("The gated flow"),
					language: "bash",
					code: themisGates,
					origin: { label: "Themis", url: "https://github.com/AlbertoBarrago/themis" }
				}
			],
			diagrams: [
				{
					src: "/how-we-build/themis-pipeline.svg",
					source: "/how-we-build/themis-pipeline.markasso",
					alt: t("Flowchart of the Themis pipeline: spec, plan, locked contract, worker, verifier with retries and a guard on the locked checks, failed or blocked after max iterations, reviewer on the committed diff, merge, retro."),
					caption: t("The Themis gated pipeline: the checks are locked before the worker starts.")
				}
			]
		}
	],
	pitfalls: [
		{
			id: "dev-server-port",
			added: "2026-11-17",
			title: t("The dev server port belongs to someone else"),
			why: t("Several sessions and agents run at once. An agent that finds port 5173 busy may happily test the server another agent started, on different code, and report a pass that means nothing."),
			steps: [
				t("Pick a free port at runtime and start with `--strictPort`, so a race fails instead of silently moving."),
				t("Fail the wait loop if your own process dies."),
				t("Check a marker that proves the server is yours (the page title, a health payload) before testing, and never stop a server you did not start."),
				t("Playwright with a fixed port and `reuseExistingServer` has the same trap: check that the port is free before the suite runs.")
			],
			snippets: [
				{ id: "dev-server-free-port", title: t("Free port, strict, checked"), language: "bash", code: devServerFreePort }
			]
		},
		{
			id: "telemaco-no-layout",
			added: "2026-11-17",
			title: t("Telemaco has a DOM, not a layout"),
			why: t("Telemaco runs real JavaScript and a real DOM but no layout engine: sizes are placeholders and computed styles come back as defaults. Canvas hit-testing and visual checks cannot be driven from it, `browser_evaluate` returns before a Promise settles, and pretending otherwise produces false passes."),
			steps: [
				t("Assert on structure and state: titles, element counts, text, console errors."),
				t("Drive forms through the DOM, for example `form.requestSubmit()`."),
				t("Cover canvas logic with unit tests, and ask a human for visual and phone-width checks (`Verified: manual`).")
			],
			snippets: [
				{
					id: "telemaco-dom-check",
					title: t("A DOM-only check"),
					language: "javascript",
					code: telemacoDomCheck,
					origin: { label: "Telemaco", url: "https://github.com/AlbertoBarrago/telemaco" }
				}
			]
		},
		{
			id: "ui-language",
			added: "2026-11-17",
			title: t("A real browser speaks the system language"),
			why: t("A real Chrome opens the app in the system language. On an Italian Mac a selector like `title^=\"Rectangle\"` finds nothing, because the button now reads \"Rettangolo\", and the check fails for a reason that has nothing to do with the change."),
			steps: [
				t("Prefer selectors that do not depend on the language: structure, roles, `data-*` hooks you own."),
				t("When the app has no stable hooks yet, force the `en-US` locale in the browser tool and say so in the verify skill.")
			],
			snippets: [
				{ id: "language-independent-selectors", title: t("Fragile and robust selectors"), language: "javascript", code: languageIndependentSelectors }
			]
		},
		{
			id: "lint-untracked",
			added: "2026-11-17",
			title: t("Untracked editor folders break the linter"),
			why: t("`biome check .` walks every folder in the working tree, including local editor settings and scratch directories that are not part of the project, and fails on them. The agent then \"fixes\" files nobody asked it to touch, or reports a red lint that is not real."),
			steps: [
				t("Lint exactly what git knows about: tracked files plus new, non-ignored ones."),
				t("Use that command in the verify skill, so humans and agents run the same check.")
			],
			snippets: [
				{ id: "biome-tracked-files", title: t("Lint only what git tracks"), language: "bash", code: biomeTrackedFiles }
			]
		},
		{
			id: "secrets-in-transcript",
			added: "2026-11-18",
			title: t("A secret printed once is already gone"),
			why: t("Whatever an agent prints enters the transcript, and the transcript goes to the model provider. A quick `cat .env` or a loose `grep` to check that a key exists is enough to ship its value out of your machine, and deleting the message afterwards does not take it back."),
			steps: [
				t("Write the rule in the global CLAUDE.md: never print anything that can hold a secret, so no `cat`, `head`, `env`, `printenv`, `echo` or plain `grep` on it."),
				t("Check a key by name or count only: `grep -q`, `grep -c`, or the list of key names."),
				t("Anchor the pattern to the exact key: a loose one matches other keys and prints their values."),
				t("If a value does get printed, the agent says so at once and the secret is rotated, not just deleted from the chat.")
			],
			snippets: [
				{ id: "secret-key-checks", title: t("Checks that print no values"), language: "bash", code: secretKeyChecks }
			]
		},
		{
			id: "global-settings-drift",
			added: "2026-11-20",
			title: t("Project settings leak into the global file"),
			why: t("Keeping the agent's global settings in a git repo, symlinked on every machine, gives you the same setup everywhere. It also means that a permission or an environment block written for one project silently lands in every session on every machine, and nobody notices until it gets in the way."),
			steps: [
				t("Write the rule in the global CLAUDE.md: project-specific settings go in the project's `.claude/settings.local.json`, never in the global file."),
				t("Add a `SessionStart` hook that warns when the shared settings file has uncommitted changes, so drift shows up at the start of the next session."),
				t("The hook only warns and always exits 0: the human decides whether to commit the change or move it into the project.")
			],
			snippets: [
				{ id: "global-settings-guard", title: t("Rule and hook"), language: "bash", code: globalSettingsGuard }
			]
		}
	],
	roadmap: [
		{
			title: t("Stop hook in observe mode"),
			sectionId: "verify-gate",
			summary: t("A global hook that logs when a session ends without verification, without blocking anything yet, so false positives surface before it ever enforces.")
		},
		{
			title: t("A REVIEW.md per repo"),
			sectionId: "review-md",
			summary: t("What the reviewer should look at for this code, always read from the base branch so a change cannot rewrite its own review rules.")
		},
		{
			title: t("One reviewer, several rounds"),
			summary: t("Tune a single reviewer and feed each round the findings and failures of the previous ones, instead of stacking parallel reviewers.")
		},
		{
			title: t("A diff-triggered reliability checklist"),
			summary: t("Checklist items with a trigger readable from a diff, matched through Serval's blast radius, so only the few relevant checks run on each change.")
		},
		{
			title: t("Adopt Playwright MCP"),
			summary: t("Move the verify skills that drive local apps from Telemaco to Playwright MCP, starting with Markasso.")
		},
		{
			title: t("A hook that asks before every commit"),
			summary: t("The rule says never commit without the human's ok, and the agent still slipped once. A hook on `git commit` that always asks would make it enforced instead of remembered.")
		},
		{
			title: t("Audit Telemaco"),
			summary: t("Slim Telemaco down to what it does best: reading the web, search and stealth fetches.")
		}
	],
	changelog: [
		{
			date: "2026-11-20",
			summary: t("A new practice, an improvement log for the setup itself, and a pitfall on project settings leaking into the shared global file. Read-only reviews now forbid writing commands too, and a repo without a REVIEW.md gets a first version proposed from its fix commits."),
			sections: ["improvement-log", "global-settings-drift", "second-opinion", "review-md"]
		},
		{
			date: "2026-11-18",
			summary: t("Two new practices, a Stop hook in observe mode and a REVIEW.md read from the base branch, and a pitfall on secrets in the transcript. The second opinion now sizes the model to the task, the browser tool decision is in the global rules, and the Playwright setup matches the real one."),
			sections: ["verify-gate", "review-md", "secrets-in-transcript", "second-opinion", "browser-tool", "claude-md-rules"]
		},
		{
			date: "2026-11-17",
			summary: t("First edition: six practices, four pitfalls and a roadmap, on a page of its own with a link for every section.")
		}
	]
};

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
	howWeBuild,
	links,
	version,
	downloadCv
};
