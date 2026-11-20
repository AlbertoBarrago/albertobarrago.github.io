# The global settings file lives in a git repo and is symlinked on every machine:
#   ~/.claude/settings.json -> <your-config-repo>/claude/settings.json
# Project-specific settings (permissions, domains, auto mode environment) go in
# the project instead, and stay out of git:
#   <repo>/.claude/settings.local.json

# A SessionStart hook in the global settings: if the shared file has uncommitted
# changes, the agent sees a warning before anything else. It never blocks.
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "d=\"$HOME/path/to/your-config-repo\"; [ -d \"$d/.git\" ] || exit 0; git -C \"$d\" diff --quiet -- claude/settings.json && exit 0; echo 'WARNING: the shared global settings have uncommitted changes. Tell the user and show the diff stat. Project settings belong in the project .claude/settings.local.json.'; exit 0",
            "timeout": 5
          }
        ]
      }
    ]
  }
}

# The matching rule in the global CLAUDE.md:
#   Never write project-specific settings into the global settings file:
#   it is shared between machines. Use the project's .claude/settings.local.json.
