# Assets Directory

This directory contains all project assets including fonts, images, and graphics that are used throughout the design system.

## Directory Structure

```
assets/
├── fonts/          # Font files (WOFF, WOFF2)
├── images/         # Raster images (PNG, JPG, WebP)
├── graphics/       # SVG assets and illustrations
└── README.md       # This file
```

## Fonts (`fonts/`)

Contains self-hosted web font files for:
- **Magnole Serif** — Display and heading font
- **Avenir Next** — Body and UI text font

Font files should be provided in multiple formats for browser compatibility:
- `.woff2` — Modern, compressed format (recommended)
- `.woff` — Fallback for older browsers

Fonts are declared in `src/foundation/tokens/_fonts.scss` using `@font-face` rules.

### Adding Fonts

1. Place font files in the `fonts/` directory
2. Name files as: `{fontname}-{weight}.{extension}`
   - Example: `avenir-next-bold.woff2`, `magnole-serif-regular.woff`
3. Add corresponding `@font-face` declarations to `src/foundation/tokens/_fonts.scss`

## Images (`images/`)

Contains raster image assets:
- Product photos
- Placeholder images
- Background images
- Hero section images

Use optimized formats:
- `.webp` — Modern, compressed format (primary)
- `.jpg` — Fallback for older browsers
- `.png` — For images requiring transparency

## Graphics (`graphics/`)

Contains vector assets and illustrations:
- SVG illustrations
- Icon assets
- Custom graphics
- Decorative elements

Keep SVGs uncompressed for easy editing. Compress SVGs before deployment if necessary.

---

**Note:** Ensure all font files are properly optimized and licensed for web use. Use `font-display: swap` in `@font-face` declarations for better performance.
