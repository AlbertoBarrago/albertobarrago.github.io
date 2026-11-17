# `biome check .` also walks untracked local folders (editor settings, scratch dirs)
# and fails on files that are not part of the project.
# Lint exactly what git knows about: tracked files plus new, non-ignored ones.
git ls-files -z -co --exclude-standard \
  | xargs -0 pnpm exec biome check --files-ignore-unknown=true --no-errors-on-unmatched
