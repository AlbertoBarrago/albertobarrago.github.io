---
title: The Problem Isn't How Much Code AI Writes. It's How Much of It We Understand.
date: 2026-11-13
tags: opinion, ai, agents, engineering
label: AI-translated, author-reviewed
---

*A reflection on AI in software development, on the risk of losing skills, and on what it really means to be a developer today.*

I read [Is There a Right Amount of AI?](https://coyotetracks.org/blog/right-amount-of-ai/) on Coyote Tracks. It's an article that raises legitimate questions about using artificial intelligence in software development: code quality, skill loss, technical debt, and accountability.

I share many of the author's concerns. But I think there's one point worth looking at differently.

**I don't think the problem is how much code we generate with AI. I think the problem is how much of that code we are still able to understand, evaluate, and maintain.**

## Writing code was never the real goal

For years we have measured developer productivity, at least implicitly, by the ability to produce code.

The faster you shipped a feature, the more productive you were considered.

But writing code is only one part of our job.

Before we even open an editor, we have to understand a problem, identify constraints, weigh trade-offs, design solutions, and anticipate what could go wrong.

Code is the concrete representation of those decisions.

If an AI agent can produce that representation faster than I can, why should I necessarily see it as a problem?

The question becomes a different one: **am I still the one making the decisions?**

## The de-skilling risk is real

On this point I agree with the author.

Constantly delegating tasks we don't understand can make us lose skills, or never develop them in the first place.

If we ask an agent to implement an authentication system without understanding sessions, tokens, revocation, and error handling, we have a problem.

If we accept a change just because the tests pass, without understanding which behaviors those tests cover, we have another problem.

But I don't think the solution is necessarily to write more code by hand.

I think it's to **keep the reasoning process active**.

One developer can personally write thousands of lines without really understanding the overall architecture. Another can have most of them generated and know every important decision inside out.

The amount of code typed is not a reliable measure of competence.

Of course, this doesn't mean that reading a diff is always equivalent to knowing how to implement what it contains. Practical skills require practice, and systematically delegating tasks we never learned to do ourselves can make us dependent on our tools.

It's a risk to acknowledge, not to ignore.

## From code author to system owner

Lately the way I develop has changed quite a bit.

I use AI agents every day. I write less code directly and spend much more time reading diffs, verifying implementations, reasoning about architectures, and spotting unexpected behavior.

At first this transition felt risky.

Today I see it as an evolution of the way I work, not as giving up the role of developer.

But there's one fundamental condition: I can't afford to become a mere rubber stamp for the changes agents propose.

I have to keep asking myself:

- Why was this solution chosen?
- Which alternatives were discarded?
- What happens when a service doesn't respond?
- Does this change introduce unnecessary dependencies?
- Which regressions could slip past the tests?
- Will I be able to step in when something breaks in production?

If I can't answer, the fact that the code works today is not enough.

And if I can't explain an architectural decision without asking the agent again, I probably haven't understood that part of the system well enough yet.

## Generated code is not verified code

Another point where I agree with the article is technical debt.

Agents can produce redundant code, introduce useless abstractions, duplicate existing functionality, and solve local problems while creating global inconsistencies.

Sometimes they do it with surprising confidence.

But here an important distinction emerges: **generation and validation are two different responsibilities**.

We can delegate the first far more easily than the second.

A green test doesn't prove an architecture is correct. A seemingly clean diff doesn't guarantee no regressions were introduced. And a convincing explanation from the agent is not an independent verification.

We need clear contracts, meaningful tests, observability, reviews and, above all, someone capable of challenging the result.

This doesn't eliminate mistakes, but it makes the process controllable.

## Not everything has to be delegated

I'm not arguing that using more AI is necessarily better.

There are tasks I prefer to do myself, others where I want to experiment, and others still that I delegate without much hesitation.

Sometimes I write code simply because I want to understand a technology better.

Other times I let an agent produce an implementation and focus on the constraints and on its correctness.

I don't see a contradiction.

The problem arises when delegation becomes automatic, regardless of complexity, risk, or our ability to evaluate the result.

And the opposite holds too: refusing a tool just to preserve a way of working doesn't guarantee higher quality.

## Accountability can't be delegated

The ethical questions raised by the article deserve a discussion of their own.

Resource consumption, copyright, the economic impact on independent developers, and the concentration of power in the companies that build models don't disappear because we use AI competently.

They are real problems, and we can't dismiss them with a simple boost in productivity.

But on a strictly engineering level, I believe the fundamental principle stays the same.

If I ship an application, I'm accountable for it.

It doesn't matter whether a function was written by me, suggested by a colleague, copied from documentation, or generated by a model.

If it introduces a vulnerability, loses data, or stops working, I can't blame the tool that produced it.

AI can help me build software.

It can't take responsibility for my decisions.

## The real question

Maybe in a few years we'll write by hand only a small part of the code we ship.

Maybe we'll keep writing much more of it than we imagine.

I don't think that's the decisive point.

Our profession has already changed many times. We introduced high-level languages, frameworks, libraries, generators, automation tools, and infrastructure that hides enormous complexity.

Every abstraction let us stop dealing directly with some details, but it also demanded new skills.

AI might represent a deeper change, because it doesn't just automate repetitive operations: it takes part in building solutions and proposes technical decisions.

That's exactly why we need to be even more rigorous in evaluating them.

I don't want to measure my competence by counting the lines of code I wrote myself.

I want to measure it by my ability to understand a system, change it, find its limits, and take responsibility for how it works.

**The risk isn't that we stop typing code.**

**The risk is that we stop being able to judge it.**

---

*A response to [Is There a Right Amount of AI?](https://coyotetracks.org/blog/right-amount-of-ai/), published on Coyote Tracks.*
