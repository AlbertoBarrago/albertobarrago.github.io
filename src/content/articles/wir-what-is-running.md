---
title: wir: What Is Running, a Port and Process Inspector Written in C
date: 2025-12-30
tags: c, systems-programming, cli, opensource
---

I recently released **wir** (What Is Running), a command-line tool written in C to inspect what's running on specific ports and get detailed process information. A project born from a practical need that turned into an opportunity to explore system programming in C.

## The Problem

How many times have you had a port occupied without knowing which process is using it? Or needed to trace a process hierarchy to understand who spawned what? We usually resort to combinations of `lsof`, `netstat`, and `ps`, but why not have everything in a single command?

## The Solution

`wir` is a cross-platform tool (macOS and Linux) that allows you to:

- Discover which process is using a specific port
- Get detailed information about a PID
- Visualize the complete ancestry tree of a process
- List all running processes
- View a process's environment variables
- Output in normal, short, JSON, or tree format
- Receive security warnings for potentially risky configurations

## Practical Examples

```bash
# Who's using port 8080?
wir --port 8080

# Info about a specific process
wir --pid 1234

# Show the process ancestry tree
wir --pid 1234 --tree

# JSON output for scripting
wir --port 3000 --json

# List all processes (short format)
wir --all --short

# Security warnings only
wir --port 8080 --warnings
```

## The Architecture

The project is structured in a modular way:

- **Platform abstraction layer**: handles differences between Linux (`/proc` parsing) and macOS (`libproc` and `sysctl`)
- **Output formatting**: supports multiple display modes without duplicating logic
- **Consistent error handling**: every allocation is checked, every resource is freed
- **Strict memory management**: no leaks, no undefined behavior

## What I Learned

Writing `wir` was an excellent opportunity to practice fundamental concepts:

1. **System programming**: interfacing with `/proc`, system calls, process management
2. **Cross-platform development**: conditional compilation and different APIs for each OS
3. **Memory safety in C**: manual memory management without a garbage collector
4. **Build systems**: Makefile with automatic platform detection
5. **API design**: clean and composable interface

## I Don't Memorize Commands

As my approach goes: I'm not interested in memorizing the exact `lsof` or `netstat` commands. I prefer understanding the underlying architecture and building tools that solve the problem more elegantly. `wir` isn't just a wrapper, it's an abstraction that hides the complexity of OS differences.

## The Future

The project is open to extensions:

- UDP port support
- Advanced process filtering
- Support for other OSes (BSD, etc.)
- Performance optimizations
- Additional output formats

## Try It Out

[wir](https://github.com/AlbertoBarrago/wir)

It's a learning project, so feel free to experiment and extend it. Building system tools in C is a great way to understand what's really happening under the hood.

```bash
# Build and install
brew tap AlbertoBarrago/tap
brew install wir

# Start using it
wir --port 3000
```
