---
title: A Small Toolbox for Claude Code
date: 2026-10-13
tags: ai-agents, claude-code, developer-tools, opensource
label: AI-assisted, human-reviewed
---

When I work with a coding agent, writing code is only part of the job.

Before changing a repository, I want to understand what the change might affect. When I use a library, I want to read its documentation, especially if I don't know it well. And before calling the work done, I want a concrete way to verify it.

Those needs led me to build three projects: **Themis, Serval, and Telemaco**.

I developed them separately, but I think they make sense together. Each addresses a part of the work I ask an agent to do.

The idea is simple: install the tools, make them available to Claude Code, and tell it when to use each one.

## Themis: defining what “done” means

A request in natural language leaves room for interpretation. Even working code can solve a different problem from the one I had in mind.

Themis starts with a specification containing decisions and acceptance criteria. It organizes the agents' work around a verification loop. I approve the plan and the acceptance tests; the tests are then locked, and a verifier checks the result.

Claude Code is currently the supported agent adapter. Themis drives its invocations and runs the verification itself. The project is still in early development and, for now, installs from source.

Source: [github.com/AlbertoBarrago/themis](https://github.com/AlbertoBarrago/themis).

## Serval: understanding the impact of a change

Before touching a file, the question is: what depends on this code?

Serval analyzes a repository locally, combining dependencies, Git history, CI configuration, and rules for critical areas. It produces a risk estimate along with the signals behind it.

I can ask Claude to use that analysis to identify modules worth reading and checks worth running. The score is an indicator: it doesn't guarantee that a change is safe or predict a failure with certainty. It helps decide where to pay attention.

Source: [github.com/AlbertoBarrago/serval](https://github.com/AlbertoBarrago/serval).

## Telemaco: consulting the web while working

When a change depends on a library's behavior or an external API, I want the agent to consult the sources.

Telemaco is a headless browser engine in Rust, built for scraping and AI agents. It offers a CLI and an MCP server for accessing pages and extracting their contents.

In this workflow, it can help Claude retrieve documentation and information from the web. The agent still needs to evaluate that information, cite its sources, and distinguish what it verified from what it inferred.

Source: [github.com/AlbertoBarrago/telemaco](https://github.com/AlbertoBarrago/telemaco).

## One request, three tools

These are separate tools, installed and configured individually. Once they are available, the entry point can be an ordinary request to Claude Code.

For example, this is the kind of instruction I would give it:

> I need to add authentication token renewal.
>
> First, use Serval to analyze the affected files and their dependents. If you need information about the libraries involved, use Telemaco to consult the official documentation and report your sources.
>
> Use Themis to prepare the specification, plan, and acceptance tests. Stop at the required approval gates. After my approval, execute the work through its verification loop.
>
> At the end, show me the diff, the verification results, and any remaining limitations.

This is an example of how I want to compose the tools. To make the workflow repeatable, the agents doing the work need both the instructions and access to the tools. Installing a binary alone doesn't establish that workflow.

Themis owns the execution and verification loop. Serval and Telemaco supply information that can inform the specification, the plan, and the implementation. Their use needs to be reflected in the relevant agent instructions.

## Why put them together?

As individual projects, they describe three different problems. Together, they describe a way of working: understand the impact, consult the sources, define the expected result, and verify it.

I like this composition because each tool keeps a clear responsibility. I can use them together or pick just the one I need.

That's the toolbox I want to build around Claude Code: concrete tools, precise instructions for using them, and visible decisions and checks behind the work.
