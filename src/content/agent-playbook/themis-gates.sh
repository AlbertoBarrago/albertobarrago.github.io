themis new                # spec skeleton: goal, verify steps, limits, acceptance criteria
themis check              # every problem with line, column and field
themis init               # generates the judge: verifier + guard, no AI involved

themis plan               # planner agent proposes the task graph
themis approve plan       # gate 1: does the plan make sense?

themis tests              # test-author agent writes tests/acceptance/
git add -A && git commit -m "themis contract"
themis approve tests      # gate 2: digests of tests, spec, verifier and config go into .themis/lock.json
git add -A && git commit -m "lock contract"

themis run                # each task in its own worktree, verifier exit 1 = retry, 2 = blocked
themis status             # gates, tasks, iterations against max_iterations, cost

themis retro              # retro agent turns misses into instruction changes
themis approve retro      # gate 3: apply them, then commit .themis/agents/
