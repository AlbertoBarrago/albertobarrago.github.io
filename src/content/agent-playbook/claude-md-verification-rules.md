## Verification
- After any non-trivial change: run build/typecheck and relevant tests before declaring it done
- If you can't verify, say so explicitly instead of assuming it works
- Don't edit tests just to make them pass: if a test fails, understand why before touching it
- Add/update tests when changing public behavior
- **Verify by running**: if the repo has a `.claude/skills/verify` skill, run it before saying "ready for testing". Otherwise drive the real app (a browser automation tool for anything web) when the change is user-visible. Always state how the change was verified
- **Three rounds, then stop**: if a check still fails after three fix attempts, stop and bring me in with the failing output and what you tried
- **Flaky tests**: never add retries, sleeps or skips to make them pass. Find the root cause; if you can't, propose deleting the test with the reason written down, and wait for my confirmation
- **Checks are out of reach**: a change must not weaken or rewrite, in the same commit, the existing tests, lint/typecheck config, `verify` skill or `REVIEW.md` that judge it (adding new tests for new behavior is fine). If an existing check genuinely needs changing, do it in a separate commit and flag it to me

## Commit Messages
- Every commit ends with a `Verified:` trailer stating how the change was checked: `verify` (verify skill or end-to-end run), `tests` (automated tests only), `manual` (I tested it), or `none (<reason>)`. It is a verification stamp, not an attribution line
