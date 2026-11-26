# Two reviewers with different roles:
#   Codex     the default reviewer: any non-trivial diff, a plan check, a stuck debug session;
#             one call per review, its quota is limited.
#   opencode  free models for light questions, delegated edits in a worktree,
#             and parallel or control runs.

# Size the model to the task, and use only providers that keep no data and do not train on it:
#   light     explain a snippet, a small question, a trivial edit      one small free model
#   standard  review of a small or medium diff                          Codex
#   deep      branch review, debug after failed hypotheses, a plan      Codex, plus two free models
#                                                                       in parallel as a control run

# Review a diff, read-only: opencode's built-in `plan` agent cannot edit files,
# but it can still run shell commands. The prompt forbids every writing command,
# and no review runs while a build or test run is using the same tree.
# If the repo has a REVIEW.md, send it from the base branch, never from the working tree.
# `git diff main` covers commits and uncommitted work; an empty diff is no review.
git diff main > /tmp/change.diff
test -s /tmp/change.diff || echo "empty diff: nothing to review"
git show main:REVIEW.md > /tmp/review-rules.md 2>/dev/null
opencode run --agent plan -m <model> \
  "Review the diff in /tmp/change.diff for correctness bugs, unescaped input and missing tests. \
If /tmp/review-rules.md is not empty, apply the rules whose trigger matches a path in the diff. \
Give each finding a file:line, a severity (must-fix / should-fix / nit) and a concrete failure scenario. \
Do not edit files. Do not run build, clean, install or any other command that writes; \
if you must compile, use a separate build directory." > review.md

# Delegate a scoped task with write access, only inside a separate git worktree.
opencode run -w <worktree-name> -m <model> "<task, files, what is already ruled out>"

# Codex, the default: read-only sandbox, findings written to a file.
# Nobody is at the keyboard: close stdin, keep the log in a file (never /dev/null),
# and run it in the background under a timeout, or it can wait for input forever.
perl -e 'alarm shift; exec @ARGV' 900 \
  codex exec -s read-only -C . -o codex.md "<same review prompt>" \
  < /dev/null > codex.log 2>&1 &
# `codex review --base main` is quicker but takes no rules file: prefer `codex exec`
# with the same prompt when the repo has a REVIEW.md.
