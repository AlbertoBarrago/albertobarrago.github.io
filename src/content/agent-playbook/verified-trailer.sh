# The last line of every commit message says how the change was checked:
#   Verified: verify          verify skill or end-to-end run passed
#   Verified: tests           automated tests only
#   Verified: manual          a human tried it
#   Verified: none (<reason>) not verified, and why
git commit -m "feat: add the agent playbook" -m "Verified: tests"

# How was each recent commit verified?
git log -20 --format='%h %<(10,trunc)%(trailers:key=Verified,valueonly,separator=%x20) %s'

# Commits that shipped unverified, with their reason
git log --grep='^Verified: none' --format='%h %s  [%(trailers:key=Verified,valueonly,separator=%x20)]'
