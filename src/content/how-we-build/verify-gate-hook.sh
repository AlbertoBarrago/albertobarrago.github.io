# A Stop hook that only watches: it runs at the end of every turn, never
# blocks, never prints, always exits 0. It reads the session transcript and
# appends one JSON line per repo the turn edited, with a verdict:
#
#   verify     the repo's `verify` skill ran after the last edit
#   commands   a test/build/lint/typecheck command ran after the last edit
#   docs-only  only documentation files were edited
#   none       code was edited and nothing checked it afterwards
#
# Only edits made by this session count (Edit, Write, NotebookEdit calls in
# its own transcript), so other sessions on the same repo raise no false alarms.

# Merge this into the "hooks" object of ~/.claude/settings.json, next to your
# other hooks: do not overwrite the file. The guard matters: a Stop hook that
# exits 2 sends the agent back to work, and python3 exits 2 when the script is
# missing, so a hook meant to only watch would block every turn.
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "f=\"$HOME/.claude/hooks/verify-gate.py\"; [ -f \"$f\" ] && python3 \"$f\"; exit 0",
          "timeout": 10
        }
      ]
    }
  ]
}

# After a week or two, read the verdicts per repo before deciding to enforce:
python3 ~/.claude/hooks/verify-gate.py --report
