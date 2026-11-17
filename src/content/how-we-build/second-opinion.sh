# Two reviewers with different roles:
#   Codex     the long-term reviewer for deep and critical reviews (a branch, a plan, security);
#   opencode  free models, run alongside as an experiment on smaller diffs and scoped tasks.

# Review a diff, read-only: opencode's built-in `plan` agent cannot edit files.
# Pick a model whose provider keeps no data and does not train on it.
git diff > /tmp/change.diff
opencode run --agent plan -m <model> \
  "Review the diff in /tmp/change.diff for correctness bugs, unescaped input and missing tests. \
Give each finding a file:line, a severity (must-fix / should-fix / nit) and a concrete failure scenario. \
Do not edit files." > review.md

# Delegate a scoped task with write access, only inside a separate git worktree.
opencode run -w <worktree-name> -m <model> "<task, files, what is already ruled out>"

# Codex for deep or critical reviews: read-only sandbox, findings written to a file.
codex exec -s read-only -C . -o codex.md "<same review prompt>"
codex review --uncommitted
