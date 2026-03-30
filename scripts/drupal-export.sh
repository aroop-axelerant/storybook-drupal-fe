#!/usr/bin/env bash
# Exports compiled assets and component files to a Drupal theme directory.
# Usage: DRUPAL_THEME=/path/to/drupal/web/themes/custom/regents npm run drupal:export

set -e

if [[ -z "$DRUPAL_THEME" ]]; then
  echo "Error: DRUPAL_THEME env variable is not set."
  echo "Usage: DRUPAL_THEME=/path/to/drupal/web/themes/custom/regents npm run drupal:export"
  exit 1
fi

SRC_SCSS="scss"
DIST_CSS="dist"
SRC_COMPONENTS="src/components"
DEST_COMPONENTS="$DRUPAL_THEME/components"

echo "→ Building SCSS..."
npm run scss:build

echo "→ Copying compiled CSS..."
mkdir -p "$DRUPAL_THEME/css"
cp "$DIST_CSS/main.css" "$DRUPAL_THEME/css/design-system.css"

echo "→ Exporting components..."
for component_dir in "$SRC_COMPONENTS"/*/; do
  name=$(basename "$component_dir")
  dest="$DEST_COMPONENTS/$name"
  mkdir -p "$dest"

  # Copy Twig template
  [[ -f "$component_dir$name.twig" ]] && cp "$component_dir$name.twig" "$dest/$name.twig"

  # Copy JS (Drupal behavior wrapper will be applied separately)
  [[ -f "$component_dir$name.js" ]] && cp "$component_dir$name.js" "$dest/$name.js"

  # Generate component.yml from JSON if it doesn't exist
  if [[ -f "$component_dir$name.json" ]]; then
    node scripts/json-to-yml.js "$component_dir$name.json"
    cp "$component_dir$name.component.yml" "$dest/$name.component.yml" 2>/dev/null || true
  fi

  echo "  ✓ $name"
done

echo ""
echo "✓ Export complete → $DRUPAL_THEME"
