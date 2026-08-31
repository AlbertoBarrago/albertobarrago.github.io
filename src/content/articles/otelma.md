---
title: Otelma — building a local LLM runtime from scratch
date: 2026-08-31
tags: go, llm, llama-cpp, apple-silicon, ai
---

**Otelma** is a local LLM inference runtime I'm building in Go.

The idea is deliberately smaller than Ollama: understand what actually sits between a GGUF file and a local application using an LLM, while treating unified memory as a real, finite resource rather than something the OS will eventually deal with.

It currently runs on Apple Silicon, uses `llama.cpp` as its first inference backend, and exposes both its own local API and a minimal OpenAI-compatible interface.

## The Architecture

Otelma is split into four main layers:

* **CLI** — `pull`, `list`, `ps`, `run`, `chat`, `serve`, `config`, `version`
* **local runtime API** — model lifecycle, scheduling, memory accounting, and HTTP endpoints
* **inference backend** — an abstraction over the actual inference engine; `llama.cpp` today, MLX planned
* **model storage** — local GGUF metadata, checksums, sizes, and Hugging Face downloads

Even local CLI commands go through the HTTP API.

Running:

`otelma run qwen2.5-0.5b "What is the capital of Italy?"`

doesn't bypass the runtime and invoke `llama.cpp` directly. The CLI talks to the same API an external application would use.

If the server isn't running yet, Otelma starts it automatically in the background.

## Model Lifecycle as a State Machine

One thing I didn't want was model management hidden behind a collection of booleans and process checks.

Each model instead moves through an explicit state machine:

`NOT_PRESENT → DOWNLOADED → LOADING → READY → BUSY → UNLOADING`

The model manager owns those transitions.

That gives the runtime one place to answer questions such as:

* is this model actually available locally?
* is it already loaded?
* can another request use it?
* is it currently generating?
* can it be unloaded safely?

The registry is persisted to disk, so downloaded models survive runtime restarts without having to rediscover everything from scratch.

## Unified Memory Is Part of the Architecture

Apple Silicon makes local inference convenient because CPU and GPU share unified memory.

It also means pretending memory is unlimited is a bad abstraction.

On a machine with 24GB of unified memory, loading multiple large models at once can very quickly become the operating system's problem.

Otelma therefore has an explicit memory `Budget`.

Before loading a model, the manager reserves its expected memory usage. If the reservation would exceed the configured ceiling, the load is rejected before the inference process starts.

The important distinction is that memory pressure becomes a runtime decision:

`canLoad(model) → yes/no`

rather than an eventual OOM.

That constraint influenced the architecture much more than I initially expected.

## llama.cpp Is a Backend, Not the Runtime

Otelma doesn't implement tensor operations or transformer inference itself.

For real inference, the current backend launches `llama-server` from `llama.cpp`.

But the rest of Otelma doesn't know that.

The runtime talks through a backend interface responsible for loading, unloading, and generating with a model. `llama.cpp` is simply the first implementation.

This separation should make it possible to add an MLX backend later without changing model management, scheduling, storage, or the public API.

That distinction was one of the main reasons for building the project: an inference engine and an inference runtime solve different problems.

## OpenAI-Compatible by Default

Otelma also exposes a minimal subset of the OpenAI API:

`POST /v1/chat/completions`

and:

`GET /v1/models`

The goal isn't to reproduce the entire OpenAI API.

It's to make the runtime immediately usable by software that already supports a custom OpenAI endpoint.

The application shouldn't need to know whether the model behind that endpoint is running in the cloud, through `llama.cpp`, or eventually through MLX.

## Pull, Run, Chat

The current workflow is intentionally small:

`otelma list`

`otelma pull qwen2.5-0.5b`

`otelma run qwen2.5-0.5b "What is the capital of Italy?"`

or for an interactive session:

`otelma chat qwen2.5-0.5b`

Models can also be pulled directly from Hugging Face, while the built-in catalog provides a simpler name-based path for known models.

At this point the complete pipeline works end-to-end:

`pull → load → inference → unload`

with persistent model metadata, multi-turn context, background server startup, and real inference.

## Why Build This?

There are already excellent tools for running LLMs locally.

That's precisely why Otelma is intentionally small.

I didn't want another UI around an existing runtime. I wanted to understand the runtime itself: model lifecycle, process management, memory reservations, scheduling, storage, API compatibility, and where the actual inference engine should begin and end.

Building the smaller version makes those boundaries visible.

## What's Next

The current scheduler deliberately serializes requests and is still based on a single mutex.

That's enough to make the lifecycle deterministic, but it's also the obvious next architectural constraint to remove.

After that: better scheduling, model removal, streaming responses, and an MLX backend.

The project is still small enough that every abstraction has a reason to exist — which is exactly where I want it for now.
