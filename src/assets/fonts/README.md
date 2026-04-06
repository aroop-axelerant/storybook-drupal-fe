# Fonts

Self-hosted web fonts for the Regent's University London design system.

## Fonts Included

### Magnole Serif
Display and heading font for visual hierarchy.

**Required files:**
- `magnole-serif-regular.woff2`
- `magnole-serif-regular.woff`
- `magnole-serif-bold.woff2`
- `magnole-serif-bold.woff`
- `magnole-serif-italic.woff2`
- `magnole-serif-italic.woff`

### Avenir Next
Body text and UI component font for readability.

**Required files:**
- `avenir-next-regular.woff2` (weight 400)
- `avenir-next-regular.woff`
- `avenir-next-light.woff2` (weight 300)
- `avenir-next-light.woff`
- `avenir-next-semibold.woff2` (weight 600)
- `avenir-next-semibold.woff`
- `avenir-next-bold.woff2` (weight 700)
- `avenir-next-bold.woff`
- `avenir-next-italic.woff2`
- `avenir-next-italic.woff`

## Font Format Guidelines

- **WOFF2** — Modern, compressed format (primary)
- **WOFF** — Fallback for older browsers (IE 9+)

Both formats are necessary for broad browser support.

## Adding New Font Files

1. Place font files in this directory
2. Ensure filename format: `{fontname}-{weight}.{extension}`
3. Update `src/foundation/tokens/_fonts.scss` with new `@font-face` declarations
4. Test in multiple browsers to ensure proper loading

## Performance Notes

- Font files should be optimized before inclusion
- Use `font-display: swap` to prevent layout shift during font load
- Consider lazy-loading non-critical fonts
- Monitor font file sizes to maintain page load performance

## License

Ensure all font files are properly licensed for web use in production environments.
