---
title: The Skill Delusion: Why the Blank Slate Beats Packaged AI Prompts
date: 2026-10-05
tags: opinion, ai, agents, architecture, engineering
label: human-written, AI-reviewed
---

A comforting illusion has taken over AI tooling during the last eighteen months: the belief that large language models need "skills."

You see them everywhere. Skills, personas, agent packages, specialized prompt directories. They are sold as secret sauces or shared in GitHub repositories with thousands of stars: "the ultimate senior React architect," "the cloud migration persona," "the production Go refactoring toolkit." People download folders of markdown files, drop them into their agent config, and convince themselves they just upgraded their model with twenty years of domain expertise.

It is snake oil. In fact, it is worse than snake oil. In the best case, packaged skills are dead weight sitting in your context window. In the worst case, they actively degrade reasoning, pollute the attention mechanism, and ruin your output.

Skills do nothing. The blank canvas beats them every single time.

## The semantic telephone game

When you inject a third-party skill into your agent loop, you are not giving the model more knowledge. You are surrendering semantic fidelity. You are letting an anonymous stranger decide how the model should interpret your intent.

Consider what happens when you ask a frontier model to do something concrete:

> "Make this state machine deterministic and remove all implicit mutations."

With a clean context, the model allocates its full attention budget to your codebase and your exact constraint. Every token of reasoning goes toward analyzing your data structures, your state transitions, and your invariants.

Now imagine running that same instruction through a typical "expert architecture skill." Before the model even touches your code, fifteen hundred tokens of canned dogma get shoved into the context: generic defensive programming rules, mandatory boilerplate conventions, advice on keeping functions under twenty lines, abstract enterprise patterns, and three separate instructions on how to structure explanations.

Now the model is no longer solving your problem. It is playing a telephone game.

Instead of writing deterministic code, it is busy balancing your prompt against someone else's pet peeves. It introduces unnecessary wrapper classes because the skill told it to be modular. It splits clean logic across four files because the skill prescribed separation of concerns. It hallucinates edge cases that do not exist in your domain because the skill told it to be cautious.

You did not get a better result. You got someone else's opinions getting in the way of your machine.

## The harness versus the skill

The people selling and collecting skills are confusing two completely different things: the harness and the prompt.

An agent harness is real. It is the execution loop:
- It gives the model access to the filesystem.
- It provides a shell where commands can execute.
- It runs the compiler, the test suite, and the linter.
- It captures stderr and returns the exit code.

The harness does not tell the model what to think. It provides a feedback loop against reality. When a model writes broken code inside a good harness, the compiler complains, the tests fail, and the model reads the trace to correct itself. That is objective. That is verified.

A skill does none of that. A skill is just static text. It is someone writing "remember to write robust error handling" in a markdown file. It gives the model zero new capabilities, zero feedback mechanisms, and zero validation.

A frontier model inside a lean harness is an engineer with a working terminal. A model loaded with twenty skills is that same engineer forced to work while someone recites a generic textbook into their ear.

## What the benchmarks actually tell us

This is not just personal preference. Every serious data point from 2025 and 2026 points in the same direction.

Look at the SWE-bench leaderboards and the tools that actually ship working code: Claude Code, Aider, and SWE-agent. None of them rely on libraries of prepackaged domain personas. They do not have a "Rust persona" or a "Django skill." They run simple, tight loops around basic primitives: read file, edit file, run bash command, inspect diff.

The most telling proof came from Princeton and Stanford with mini-swe-agent. They built a fully capable coding agent in roughly one hundred lines of Python. No complex agent frameworks, no persona routing, no skill modules. Just a basic loop giving the model direct access to bash commands. That hundred-line script hit over seventy percent on SWE-bench Verified, rivaling massive modular frameworks.

Recent evaluations on SWE-bench Pro and Verified show that swapping out the harness architecture can swing performance by more than twenty-two percentage points on the exact same model. Meanwhile, swapping between top-tier frontier models on the same harness often moves the needle by less than one percent. The harness is the differentiator. Prepackaged skills do not move the needle at all.

In their research paper on building effective agents, Anthropic arrived at the exact same conclusion: keep agent architectures simple. The moment you introduce complex persona routing, multi-agent debates, and rigid prompt abstractions, failure rates skyrocket.

Then there is Rich Sutton's *The Bitter Lesson*: the biggest lesson from AI history is that general methods leveraging compute consistently beat human-engineered heuristics. Handcrafted knowledge always loses. Packaged skills are nothing more than handcrafted heuristics pretending to be software.

## Context rot and attention economy

Every token in your system prompt carries a cost. Not just financial cost, but cognitive cost.

In July 2025, Chroma Research published their study on Context Rot, evaluating eighteen frontier models across increasing context lengths. The findings were stark: every single model experiences performance degradation and hits sharp accuracy cliffs long before reaching its advertised context window. Attention gets diluted as the prompt grows.

In early 2026, LOCA-bench confirmed the same reality for autonomous agents: piling up instructions, state history, and redundant guidelines causes catastrophic task drift.

When you fill the prompt with hundreds of lines of canned instructions, two things happen:

1. **Instruction drift:** The model has to compromise between conflicting negative constraints. If your skill says "always use functional patterns" and your codebase uses an object-oriented state machine, the model wastes reasoning tokens resolving an artificial contradiction.
2. **Loss of nuance:** When your context is clean, subtle constraints in your user prompt hit the model with maximum weight. When your context is drowned in boilerplate, those subtle constraints get averaged out.

A blank slate gives you instantaneous time-to-first-token, reliable prompt caching, and zero context pollution. The model responds to what you say, not to what someone else said six months ago.

## Stop buying other people's words

The urge to collect skills comes from a misunderstanding of what programming with AI actually is.

If you know what you are building, you do not need someone else's prompt. You need your own domain knowledge: your invariants, your schemas, your test suites, and your constraints. You write the specification, you run the harness, you review the diff.

And if you do not know what you are building, no prepackaged "Senior Architect" skill is going to know it for you. It will only give you confident, generic mediocrity at three times the token cost.

Ditch the skill packs. Keep the harness lean, keep the terminal open, and start from a blank canvas.

## Sources

- [Chroma Research, Context Rot: How Increasing Input Tokens Impacts LLM Performance (July 2025)](https://research.trychroma.com/context-rot)
- [LOCA-bench: Benchmarking Language Agents Under Controllable and Extreme Context Growth (February 2026)](https://arxiv.org/abs/2602.04948)
- [Princeton NLP and Stanford, mini-swe-agent: A radically simple coding agent in 100 lines of Python](https://github.com/SWE-agent/mini-swe-agent)
- [Anthropic, Building Effective Agents (December 2024)](https://www.anthropic.com/research/building-effective-agents)
- [SWE-bench, Software Engineering Benchmark for Language Models](https://www.swebench.com/)
- [Rich Sutton, The Bitter Lesson (2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
- [Aider, AI pair programming in your terminal](https://aider.chat/)
