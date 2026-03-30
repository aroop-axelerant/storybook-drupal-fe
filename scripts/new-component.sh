#!/usr/bin/env bash
# Usage: npm run new-component -- <component-name>
# Creates the 5-file scaffold for a new component.

set -e

NAME="${1:-}"
if [[ -z "$NAME" ]]; then
  echo "Error: component name required."
  echo "Usage: npm run new-component -- <component-name>"
  exit 1
fi

# Validate kebab-case
if [[ ! "$NAME" =~ ^[a-z][a-z0-9-]*$ ]]; then
  echo "Error: name must be kebab-case (e.g. article-card)"
  exit 1
fi

SRC="src/components/$NAME"
SCSS="scss/components/$NAME"

if [[ -d "$SRC" ]]; then
  echo "Error: $SRC already exists."
  exit 1
fi

mkdir -p "$SRC" "$SCSS"

# --- SCSS partial ---
cat > "$SCSS/_$NAME.scss" << EOF
.${NAME} {
  // TODO: Add styles using var(--token-name) only — no raw values.
}
EOF

# --- JS module ---
cat > "$SRC/$NAME.js" << EOF
export function init$(echo "$NAME" | sed -E 's/(^|-)([a-z])/\U\2/g')(el) {}
EOF

# --- JSON data ---
cat > "$SRC/$NAME.json" << EOF
{
  "default": {},
  "variants": {}
}
EOF

# --- Stories ---
cat > "$SRC/$NAME.stories.js" << EOF
import data from "./$NAME.json";

const render = (args) => \`<div class="$NAME">\${JSON.stringify(args)}</div>\`;

export default {
  title: "Components/$(echo "$NAME" | sed -E 's/(^|-)([a-z])/\U\2/g')",
  render,
};

export const Default = { args: data.default };
EOF

# --- Twig template ---
cat > "$SRC/$NAME.twig" << EOF
{#
 * ${NAME} component
 *
 * Props:
 * - (add props here)
 #}
<div class="${NAME}">
  {{ content }}
</div>
EOF

echo ""
echo "✓ Component scaffold created:"
echo "  $SCSS/_$NAME.scss"
echo "  $SRC/$NAME.js"
echo "  $SRC/$NAME.json"
echo "  $SRC/$NAME.stories.js"
echo "  $SRC/$NAME.twig"
echo ""
echo "Next: add  @use \"components/$NAME/$NAME\";  to scss/main.scss"
