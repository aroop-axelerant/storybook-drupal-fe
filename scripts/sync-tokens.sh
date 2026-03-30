#!/usr/bin/env bash
# Generates a CSS custom-property bundle from the design tokens for use in
# non-SCSS environments (e.g. vanilla JS prototypes, emails, Drupal inline styles).
# Output: dist/tokens.css
# Usage: npm run sync-tokens  (or add to drupal:export pipeline)

set -e

DIST="dist"
OUTPUT="$DIST/tokens.css"
SCSS_ENTRY="scss/foundation/tokens/_index.scss"
TEMP_FILE="$DIST/_tokens-compile.scss"

mkdir -p "$DIST"

# Build a tiny SCSS file that only outputs the :root block with all tokens
cat > "$TEMP_FILE" << 'SCSS'
@use "../scss/foundation/tokens/index" as *;

:root {
  // Token values are forwarded as CSS custom properties by foundation/tokens/_index.scss
  // This file is compiled purely to extract the :root block.
}
SCSS

# Use sass CLI to compile (installed as devDependency via package.json)
npx sass --no-source-map --style=compressed "$TEMP_FILE" "$OUTPUT"
rm -f "$TEMP_FILE"

echo "✓ Tokens written to $OUTPUT"
