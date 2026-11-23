# Merge a pull request only once its checks have shown up and passed.
pr="$1"

# Right after `gh pr create` the checks may not be registered yet:
# "no checks reported" means "wait", not "green".
for attempt in $(seq 1 12); do
  gh pr checks "$pr" 2>&1 | grep -q 'no checks reported' || break
  sleep 5
done

if gh pr checks "$pr" 2>&1 | grep -q 'no checks reported'; then
  # Still nothing after a minute: fine only when no workflow runs on PRs.
  if grep -qs 'pull_request' .github/workflows/*.yml .github/workflows/*.yaml; then
    echo "workflows run on pull requests but none reported: stop and ask" >&2
    exit 1
  fi
  echo "no CI on this repo"
else
  gh pr checks "$pr" --watch --fail-fast || {
    echo "a check failed: report it, do not merge" >&2
    exit 1
  }
fi

# A green review that took seconds and wrote nothing did not review:
# open its log before trusting it.
gh pr checks "$pr"
