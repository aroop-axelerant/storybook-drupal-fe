# Graphics

Vector assets and SVG illustrations for the project.

## Directory Structure

Organize graphics by type:

```
graphics/
├── icons/             # SVG icon set
├── illustrations/     # Custom illustrations and artwork
├── patterns/          # Background patterns
├── decorative/        # Decorative elements
└── README.md
```

## SVG Guidelines

### Naming Convention
Use descriptive, kebab-case filenames:
- Good: `arrow-right.svg`, `check-circle.svg`
- Bad: `icon1.svg`, `illustration_final.svg`

### File Organization
- Keep SVGs uncompressed in source for easy editing
- Optimize before deployment if necessary

### Optimization
When deploying SVGs:
1. Remove unnecessary metadata
2. Strip non-essential attributes
3. Use SVGO or similar tools for compression
4. Keep SVGs < 50KB

## Icon System

Store icons in `icons/` subdirectory:

```
icons/
├── 16/                # 16px icons
├── 20/                # 20px icons
├── 24/                # 24px icons
└── 32/                # 32px icons
```

### Icon Best Practices

1. **Consistency** — Maintain consistent stroke width and padding
2. **Scaling** — Create multiple sizes for different uses
3. **Accessibility** — Include `aria-label` or `aria-hidden="true"` in HTML
4. **Naming** — Use clear, descriptive names

### Icon Usage

```html
<!-- Hidden from screen readers (decorative) -->
<svg class="icon" aria-hidden="true">
  <use xlink:href="../../assets/graphics/icons/24/arrow-right.svg#icon"></use>
</svg>

<!-- Visible to screen readers (meaningful) -->
<svg class="icon" aria-label="Next slide">
  <use xlink:href="../../assets/graphics/icons/24/arrow-right.svg#icon"></use>
</svg>
```

## Illustrations

Store custom illustrations in `illustrations/`:
- Maintain consistent art style
- Document the illustrator or tool used
- Keep source files (Figma, Illustrator, etc.) separate if editable

## Patterns

Background patterns in `patterns/`:
- Use for subtle texture/background effects
- Keep file sizes minimal
- Consider using CSS for simple patterns instead of SVG

## Accessibility

All graphics should be accessible:
- Provide alt text for decorative graphics
- Use `aria-label` for icon buttons
- Use `aria-hidden="true"` for purely decorative SVGs
- Ensure sufficient color contrast

## Performance

Optimize all graphics for web:
- SVG file size < 50KB
- Remove unused attributes
- Compress with SVGO before deployment
- Consider using a sprite sheet for multiple small icons
