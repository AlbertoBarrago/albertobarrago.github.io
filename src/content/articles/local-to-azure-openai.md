---
title: From Ollama to Azure OpenAI in a Day, All of It Scripted
date: 2026-11-20
tags: ai, rag, azure, infrastructure-as-code, ai-agents
label: AI-assisted, human-reviewed
---

*Notes from a migration: a RAG assistant built and measured locally, moved onto a large client's cloud models without creating anything by hand in the portal.*

For months the assistant ran on my Mac: Ollama, bge-m3 for embeddings, gemma3:12b for chat, an Elasticsearch index and an evaluation set of 50 questions. Then it was time to move it onto the client's Azure models, with a three-line brief: get in, create what you need, and if you lack permissions, say so. And make all of it scriptable and repeatable.

That last sentence turned out to be the important one. Here is what I learned in a day.

## Reconnaissance first, read-only

Before creating a single resource I spent an hour with the Azure CLI just looking: roles, subscription, registered providers, model catalog and quotas in the EU regions.

First surprise: you join the client's tenant as a guest, and the portal shows your home directory. "Nothing is there" until you switch directory.

Second surprise, the one that mattered: the models picked a few weeks earlier were still in the catalog, but with no quota you could activate. Batch only. The plan changed before I wrote a line, and two newer models took their place: gpt-5.4-mini as the main one, gpt-5.5 for comparison.

Found later, the same fact would have meant redoing the work. And the manual exploration immediately became a script, `discover.sh`, that anyone can run again.

## Decisions, written in code

The infrastructure is Bicep: native to Azure, no state file to look after, and `what-if` to preview a change before applying it. Some decisions I wanted to be hard to undo by accident:

- **Data stays in the EU**: DataZone Standard EU deployments, so prompts and responses are processed inside the EU data zone. The Bicep type accepts only that SKU: moving to Global takes a reviewed change, not one word edited in a parameter file.
- **Pinned model versions**, no automatic upgrades: benchmarks stay comparable.
- **The key lives in Key Vault**, never in deployment outputs, never printed, not even by the smoke test.
- **Who can call the models is a list in the parameter file**, not a click in the portal: you read it in git, with a date and a reason.

Everything goes through `deploy.sh`: what-if, confirm, apply. Running it again changes nothing when nothing changed.

## Real errors only show up in a real deploy

The what-if was clean. The first deploy failed anyway.

Azure reports the AI account as "created" before it is actually ready, and reading its key failed with `RequestConflict`. The models and the vault were there, the secret was not. At first I read that `Failed` as a retry that had succeeded: wrong, and I said so. The fix was a dependency: the secret is written after the model deployments, when the account is certainly ready. Without it, every new environment, production included, would have broken at the same point.

Two smaller snags, useful all the same. A `[y/N]` prompt run without a terminal got end of input and exited silently: now it says so and suggests `--yes`. And two deploys started in parallel: Azure rejected the second one, no harm done.

## Abstractions written months ago pay off

In the backend, chat and embeddings were already two interfaces, and the index mapping took its dimensions from the active provider. The migration meant adding two implementations, picked by a configuration property. No refactor.

The details that mattered:

- gpt-5.5 rejects `temperature: 0.1` and accepts only the default: temperature is configured per model, and sent only when set.
- Azure's embeddings have 3072 dimensions against bge-m3's 1024: that takes a new index, and the old one stays for comparisons.
- Returned vectors are sorted by `index`, not by position. On a 429 the client waits as long as `Retry-After` says, but only during a reindex: a user's question should fail fast.
- If the endpoint or the key is missing, the backend refuses to start. A failed boot beats a 503 on every question.

## Measure again, don't assume

Change the embedding model and the score distribution changes too. The relevance threshold, which drops off-topic questions before they reach the model, was tuned on the old one. I measured it again with 8 off-topic questions ("a carbonara recipe") and 10 on-topic ones: between the highest off-topic score and the lowest on-topic one there is a gap of 0.05, and the old threshold sits right in it. Confirmed, but now it is a measurement, not a hope.

Then the benchmark: the same 50 questions, three runs, graded by hand.

| | gemma3:12b, local | gpt-5.4-mini | gpt-5.5 |
|---|---|---|---|
| Score | 93/100 | 95, 95, 95 | 99, 99, 99 |
| Serious errors | at least one | 0 | 0 |
| Median time | about 17 s | 1.4 s | 5.5 s |

The most useful number is not the score, it is the stability. Three identical runs say the partial answers are structural (retrieval, prompt), not sampling bad luck. Indeed, one of them no model can fix: the right document never reaches the sources.

The final pick was not mine to make, and rightly so. gpt-5.5 fixes four of the five partial answers, but it costs about ten times as much per question (a couple of euro cents against two tenths of a cent) and it is four times slower. Quality against cost and speed is the client's call: until then gpt-5.5 is the default, and switching is one line of configuration.

## A second opinion, verified

The diff of the scripts, and later the backend's, went through a second model, read-only and explicitly forbidden from running commands. About half of its findings were real: a README that taught a command printing the key, a smoke test that could go green without making a single call, the API key inside a Lombok-generated `toString()`. I rejected the rest after checking them against the code. That is the only way a second opinion is worth having.

Before the merge, the whole body of work (seventy commits) went through a deeper review with Codex. Fifteen findings, seven of them merge blockers, none of them noise. The most serious were domain logic defects no test had seen: content marked as no longer valid was indexed as if it were current. Next to them, the classics you write in a hurry: the assistant endpoint open to every role instead of operators only, question text in the audit logs, images and links in the model's Markdown rendered as HTML, a saved answer in the browser that survived a change of user in the same tab. Seven fixes, seven separate commits, then the merge. The broader findings, about answer correctness on complex cases, are planned for the production phase instead of being rushed in.

## Monitoring pays off on first use

The last script reads Azure Monitor: requests and tokens per model, HTTP outcomes. On its first run it showed four 500 errors on embeddings during the reindex: they were why two documents were missing from the new index. The provider retried only on 429, now it retries on 5xx too. A resumable reindex recovered the two documents, and the new index now matches the old one document by document. Over a few thousand requests, the "rare" error happens.

The same metrics, priced with the official price list, give the real cost of the day: about 5 euros in total, two full reindexes and every benchmark included. One full reindex costs about a euro. (A CLI gotcha: without an explicit `--end-time`, Azure Monitor returns empty series.)

And "if you lack permissions, say so"? The monthly budget with alerts is written in the Bicep, but with our roles Azure answers that we cannot read prices. So it became optional, and whoever handles billing will turn it on. Meanwhile the real cap is each deployment's capacity: past it, Azure answers 429 and does not bill.

## The handover

The backend knows nothing about Azure until the cluster tells it: three configuration values and one secret, loaded by a mechanism that was already there, no code to change. The values are ready and go to the people who run the platform, with two notes: the key goes in the Secret, not the ConfigMap, and it never travels through chat. Along with them, an operations guide for colleagues.

To the question "so is everything exposed to the internet now?" the answer was short: only the model endpoint, protected by a key. The backend and the data stay where they were, and an IP allowlist is optional hardening.

One known limit remains, written down rather than hidden: a question about a single paragraph of a very long text does not retrieve that paragraph. It is a retrieval problem, and no model solves it on its own.

## What I take home

- Anything you do by hand in the portal is debt: if it is not in a script, you will redo it for the next environment.
- Read-only reconnaissance comes first, because it can change the plan.
- What-if does not see races: only a real deploy finds them.
- The right interfaces, written when nobody needed them, are what make a one-day migration possible.
- A deep review before the merge finds what tests don't know to look for: the domain logic.
- When you misread a result, say so out loud and fix it. It costs less than defending it.
