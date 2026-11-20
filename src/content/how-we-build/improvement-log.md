# Improvement log

What in this setup (rules, hooks, scripts, release flows) should get better.
One entry per issue, newest at the bottom. Each fix is its own task and branch.

Status: `open`, `done <sha or PR>`, or `dropped (<reason>)`.

## YYYY-MM-DD: <short title of what went wrong>

- **What happened:** the agent committed before the user confirmed, against
  the commit rule. Caught at once, nothing was pushed.
- **Proposal:** a hook on `git commit` that always asks for confirmation, so
  the rule no longer depends on the agent remembering it.
- **Status:** open

## YYYY-MM-DD: <a release step that is still manual>

- **What happened:** the release script tagged a version with no changelog
  section; someone noticed by hand.
- **Proposal:** the script refuses to start when the changelog has no section
  for the version.
- **Status:** done <sha or PR>
