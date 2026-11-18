# Two reviewers with different roles:
#   Codex     the long-term reviewer for deep and critical reviews (a branch, a plan, security);
#             one call per review, its subscription quota is limited.
#   opencode  free models for smaller diffs, control runs and scoped tasks.

# Size the model to the task, and use only providers that keep no data and do not train on it:
#   light     explain a snippet, a small question, a trivial edit      one small free model
#   standard  review of a small or medium diff, a scoped task           one stronger free model
#   deep      branch review, debug after failed hypotheses, a plan      Codex, or two free models
#                                                                       in parallel, cross-checked

# Review a diff, read-only: opencode's built-in `plan` agent cannot edit files.
# If the repo has a REVIEW.md, send it from the base branch, never from the working tree.
# `git diff main` covers commits and uncommitted work; an empty diff is no review.
git diff main > /tmp/change.diff
test -s /tmp/change.diff || echo "empty diff: nothing to review"
git show main:REVIEW.md > /tmp/review-rules.md 2>/dev/null
opencode run --agent plan -m <model> \
  "Review the diff in /tmp/change.diff for correctness bugs, unescaped input and missing tests. \
If /tmp/review-rules.md is not empty, apply the rules whose trigger matches a path in the diff. \
Give each finding a file:line, a severity (must-fix / should-fix / nit) and a concrete failure scenario. \
Do not edit files." > review.md

# Delegate a scoped task with write access, only inside a separate git worktree.
opencode run -w <worktree-name> -m <model> "<task, files, what is already ruled out>"

# Codex for deep or critical reviews: read-only sandbox, findings written to a file.
codex exec -s read-only -C . -o codex.md "<same review prompt>"
# `codex review --base main` is quicker but takes no rules file: prefer `codex exec`
# with the same prompt when the repo has a REVIEW.md.
