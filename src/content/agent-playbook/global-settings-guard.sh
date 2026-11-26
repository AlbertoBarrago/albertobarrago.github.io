# The global settings file lives in a git repo and is symlinked on every machine:
#   ~/.claude/settings.json -> <your-config-repo>/claude/settings.json
# Project-specific permissions and domains go in the project instead, and stay out of git:
#   <repo>/.claude/settings.local.json
#
# Check where a setting is read from before moving it. Auto mode reads `autoMode`
# only from user settings, so a block in a project is dead config. Keep a small
# user-wide block, and express project risks as permission rules plus context:
#   <repo>/.claude/settings.local.json   {"permissions": {"ask": ["Bash(./deploy.sh *)"]}}
#   <repo>/CLAUDE.md                     "db.example.com is the production database."

# One guard script, registered on three events: a built-in command can rewrite
# the file mid-session without any tool call. If the script is missing (another
# machine pulled the settings before linking it), the hook exits quietly.
{
  "hooks": {
    "SessionStart":     [{ "hooks": [{ "type": "command", "command": "f=\"$HOME/.claude/hooks/check-global-settings.sh\"; [ -f \"$f\" ] || exit 0; sh \"$f\"", "timeout": 5 }] }],
    "UserPromptSubmit": [{ "hooks": [{ "type": "command", "command": "f=\"$HOME/.claude/hooks/check-global-settings.sh\"; [ -f \"$f\" ] || exit 0; sh \"$f\"", "timeout": 5 }] }],
    "Stop":             [{ "hooks": [{ "type": "command", "command": "f=\"$HOME/.claude/hooks/check-global-settings.sh\"; [ -f \"$f\" ] || exit 0; sh \"$f\"", "timeout": 5 }] }]
  }
}

# check-global-settings.sh: warn, never block. Its stdout reaches the agent.
d="$HOME/path/to/your-config-repo"
[ -d "$d/.git" ] || exit 0
git -C "$d" diff --quiet -- claude/settings.json 2>/dev/null && exit 0
echo 'WARNING: the shared global settings have uncommitted changes. Tell the user and show the diff stat. Project permissions belong in the project .claude/settings.local.json, project context in its CLAUDE.md.'
exit 0

# The matching rule in the global CLAUDE.md:
#   Never write project-specific settings into the global settings file:
#   it is shared between machines. Use the project's .claude/settings.local.json.
