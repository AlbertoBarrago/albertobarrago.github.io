<!--
Copy it to <repo>/REVIEW.md, replace the placeholders, delete this comment.

How it is used: the reviewer (Codex, opencode, /code-review) gets the diff plus
this file read from the base branch (`git show <base>:REVIEW.md`), never from
the branch under review, so a change cannot rewrite the rules that judge it.
Change REVIEW.md in its own commit, never together with the code it judges.

Writing rules:
- Every rule comes from a real bug (cite the fix commits) or a stated project
  constraint (cite CLAUDE.md, an ADR, a spec). No generic advice.
- A rule must be checkable from a diff: concrete trigger paths, concrete check.
- Keep it under about 15 rules. When a bug slips through review, add or sharpen
  a rule; when a rule never triggers or only produces noise, delete it.
-->

# Review guide: <PROJECT>

Check only the rules whose trigger matches a path in the diff. For each finding, name the rule (R1, R2, ...) or say "outside REVIEW.md" when it is a bug no rule covers. Report real defects with a concrete failure scenario; skip anything listed under "Do not flag".

## Rules

### R1: <short title>
Trigger: <paths or globs>
Check: <what must hold in the diff>
Why: <the failure it prevents> (fixes: <sha>, <sha> | source: <CLAUDE.md, ADR, spec section>)

## Do not flag

- Formatting, import order and lint-level style: <linter> enforces them in CI.
- <Deliberate convention that looks wrong but is intended, with its source.>
