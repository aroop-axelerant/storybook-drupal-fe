# Images

Raster image assets for the project.

## Directory Structure

Organize images by category:

```
images/
├── hero/              # Hero section images
├── cards/             # Card component images
├── backgrounds/       # Background images
├── team/              # Team member photos
├── placeholders/      # Placeholder images
└── README.md
```

## Image Formats

Use modern, optimized formats:

- **WebP** — Modern format with best compression (primary)
- **JPEG** — Fallback for photographs and complex images
- **PNG** — For images requiring transparency

## Best Practices

1. **Optimize** — Use image optimization tools before committing
   - Recommended: TinyPNG, ImageOptim, or similar tools
   - Target file sizes: < 200KB for web images

2. **Responsive** — Provide multiple sizes for different viewports
   - Example: `image-320w.jpg`, `image-640w.jpg`, `image-1280w.jpg`

3. **Naming** — Use descriptive, kebab-case filenames
   - Good: `hero-section-home.jpg`
   - Bad: `img1.jpg`, `image_final_v2.png`

4. **Lazy Loading** — Use `loading="lazy"` in HTML for off-screen images

5. **Alt Text** — Always provide meaningful alt text for accessibility

## Usage Examples

### In Twig/HTML
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### In SCSS
```scss
background-image: url('../../assets/images/background.jpg');
```

## File Size Guidelines

- Hero images: < 500KB
- Card images: < 150KB
- Thumbnails: < 50KB
- Icons/graphics: < 10KB

Optimize accordingly to maintain good page performance.
