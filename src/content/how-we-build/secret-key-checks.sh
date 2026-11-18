# Everything that enters the transcript goes to the model provider and cannot
# be taken back. Check secrets by name or count, never by value.
ENV_FILE=path/to/your/env/file

# Never: these print values into the conversation.
#   cat "$ENV_FILE"    grep TOKEN "$ENV_FILE"    env    printenv    echo "$API_KEY"

test -r "$ENV_FILE" || echo "cannot read $ENV_FILE"

# Is the key there? Exit code only.
grep -q '^STRIPE_API_KEY=' "$ENV_FILE" && echo present || echo missing

# How many times is it defined? A count, no value.
grep -c '^STRIPE_API_KEY=' "$ENV_FILE"

# Which keys exist? Names only.
grep -o '^[A-Z_]*=' "$ENV_FILE"

# Anchor the pattern to the exact key, and still never print the line:
#   grep STRIPE "$ENV_FILE"                  also hits STRIPE_WEBHOOK_SECRET, and prints its value
#   grep -c '^STRIPE_API_KEY=' "$ENV_FILE"   one key, a count, no value

# If a value does get printed: say so at once and rotate the secret.
