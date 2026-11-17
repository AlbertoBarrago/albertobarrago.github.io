# New project: start with a verify skill from day one.
mkdir -p .claude/skills/verify
cp <path-to-your-template>/SKILL.md .claude/skills/verify/SKILL.md
# Track the skill, ignore the rest of .claude/ (in .gitignore):
#   .claude/*
#   !.claude/skills/

# Work or client repo you don't own: keep the skill local, never commit it.
# .git/info/exclude works like .gitignore but is never shared.
echo ".claude/skills/verify/" >> .git/info/exclude
git status --short .claude   # must print nothing
