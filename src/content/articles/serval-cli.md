---
title: I Built a CLI to Answer One Question: What Will This Change Break?
date: 2026-08-27
tags: programming, devops, go, opensource
---

We've all been there.

You open a repository, change a file that looks completely harmless, run the tests, and open a pull request.

Then someone comments:

> "Careful. That module is also used by the billing pipeline."

Or worse, nobody notices.

The change gets merged.

And something breaks.

The problem isn't necessarily bad code. In large or unfamiliar codebases, understanding the blast radius of a change is surprisingly difficult.

So I started building Serval.

Serval is a local-first CLI that tries to answer one simple question:

*If I change this file, what am I likely to affect?*

## The problem

When I want to understand the impact of a change, I usually end up doing some combination of:

```
rg "someModule"
git log
git blame
```

Then I inspect imports, search CI configuration, check which files usually change together, and rely on whatever knowledge I have about the repository.

That works.

But it is mostly manual.

And on a repository you don't know well, a large part of the process becomes guesswork.

I wanted something closer to:

```
serval inspect src/auth/token.ts
```

and get:

```
Target
  src/auth/token.ts

Direct impact
  src/auth/middleware.ts

Indirect impact
  src/api/client.ts

CI
  integration-auth.yml

Git history
  7 significant changes
  3 frequently co-changed modules

Risk
  HIGH: 82/100

  +28  14 downstream modules
  +20  critical path
  +14  high historical churn
  +12  frequently co-changed modules
  +8   CI workflow affected
```

Not a prediction.

Not:

> "AI thinks this change might be dangerous."

Evidence.

## Four signals instead of one

Looking only at imports isn't enough.

A dependency graph can tell me:

```
A -> B -> C
```

If I change C, I know that B and potentially A are affected.

Useful.

But repositories contain more information than their dependency graph.

### 1. Dependency graph

Serval scans the repository and builds a graph from language-native dependencies.

It currently understands repositories containing:

- JavaScript / TypeScript
- Go
- Python
- Java
- C

For a target file, Serval walks the graph in the opposite direction and calculates its dependents.

That gives us the structural blast radius.

But structure is only the first signal.

### 2. Git history

Git contains something surprisingly close to the memory of a codebase.

If two files repeatedly change together, that's information.

If a module has been modified constantly during the last few months, that's information too.

So Serval looks at things like:

- historical churn
- co-change frequency

Imagine two files with identical dependency graphs.

One hasn't changed in two years.

The other changed nine times during the last 90 days and frequently changes together with 15 other modules.

Those files probably shouldn't receive the same risk score.

### 3. CI configuration

Then there is another graph hiding inside most repositories: CI/CD.

A change can trigger integration tests, builds, deployments or validation pipelines depending on path filters.

Serval currently understands configuration from:

- GitHub Actions
- GitLab CI
- Azure Pipelines
- Jenkins

This gives another useful piece of evidence: which automation does this change actually touch?

### 4. Critical paths

Some parts of a system simply deserve more attention.

Authentication is not the same as changing a README.

Payment logic is not the same as changing a CSS utility.

Serval therefore allows repository-specific critical-path rules through `.serval.yml`.

Again, this isn't trying to prove that something will break.

It is accumulating evidence that says: you should probably look at this change more carefully.

## Why the score is deterministic

This became one of the most important design decisions in the project.

It would have been extremely easy to send the repository context to an LLM and ask:

> "How risky is this change from 0 to 100?"

I deliberately didn't do that.

The core score produced by Serval is deterministic.

The same repository state and configuration produce the same result.

More importantly, every point can be explained.

Something like:

```
Risk
  MEDIUM: 38/100

  +4   2 downstream modules
  +14  high historical churn
  +12  91 frequently co-changed modules
  +8   2 CI workflows affected
```

There is no hidden reasoning behind 38.

You can audit it.

You can disagree with it.

You can change the configuration.

But you can understand where it came from.

For engineering tooling, I think that property matters.

## So... no AI?

Not exactly.

Serval does support AI explanations.

For example:

```
serval inspect src/auth/token.ts --explain
```

The interesting part is the boundary.

The AI cannot change the score.

It only receives the deterministic analysis and explains it in natural language.

And because Serval is local-first, the default provider can be a local Ollama instance.

Other providers can be used through locally installed CLIs such as Claude, Codex or Gemini.

I like this architecture much more than putting an LLM at the center of the system:

```
repository
    ↓
deterministic analysis
    ↓
risk model
    ↓
result
    ↓
optional AI explanation
```

The model explains evidence. It doesn't invent the evidence.

## Local-first was intentional

Serval doesn't require:

- an account
- a SaaS backend
- uploading your repository
- an API key for its core functionality

The analysis happens locally.

That matters for developer tooling because the repository already contains everything needed for most of the analysis:

- source code
- Git history
- CI configuration
- repository configuration

Why send all of that somewhere else if we can calculate the answer locally?

## It can also become a CI gate

The same analysis can run against your current diff:

```
serval diff
```

or produce machine-readable output:

```
serval diff --json
```

And this makes another use case possible:

```
serval diff --fail-on high
```

If one of the changed files reaches HIGH risk, Serval exits with a non-zero status.

That means the tool can move from "interesting information for the developer" to "a deterministic signal inside the delivery pipeline."

I'm particularly interested in exploring this direction. Not as another quality gate that randomly blocks developers, but as a way to make the expected impact of a change visible before merge.

## Installing it

Serval is written in Go and distributed through Homebrew.

```
brew install AlbertoBarrago/tap/serval
```

Then, inside a Git repository:

```
serval inspect path/to/file
```

or simply:

```
serval path/to/file
```

There are also commands for inspecting the graph and history directly:

```
serval graph path/to/file
serval history path/to/file
serval doctor
```

And because I have a soft spot for old-school CLI tooling:

```
man serval
```

exists too.

## What I'm trying to explore

Serval is still young.

I'm less interested in pretending that a 0-100 score can magically predict whether software will break and more interested in a different question:

*How much useful information about change risk is already sitting inside our repositories?*

Dependency graphs tell us what is connected.

Git tells us what historically moves together.

CI tells us what operational machinery is affected.

Repository rules tell us which areas deserve additional attention.

None of these signals is particularly revolutionary on its own.

Combining them into a small, local, explainable tool is the experiment.

And perhaps that's also where AI fits best in this kind of developer tooling: not replacing deterministic analysis, but sitting on top of it when natural-language reasoning is useful.

Serval is open source and MIT licensed.

Project: [albz.it/serval](https://albz.it/serval/)

Source: [github.com/AlbertoBarrago/serval](https://github.com/AlbertoBarrago/serval)

If you work on large repositories, monorepos, legacy systems, or CI-heavy projects, I'd be particularly interested in hearing what signals you use before touching an unfamiliar part of the codebase.
