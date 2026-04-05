# Icon Library

Consistent iconography set for the Regent's University design system.

## Specifications

- **Grid**: 24×24px
- **Stroke Weight**: 2px
- **Style**: Line art, open paths
- **Stroke Caps**: Rounded

## Icon Sizes

- `--icon-caption`: 12px (captions, very small UI)
- `--icon-small`: 16px (small UI, labels)
- `--icon-body`: 20px (body text icons)
- `--icon-default`: 24px (most common usage)
- `--icon-feature`: 32px (featured actions)
- `--icon-hero`: 48px (large focal points)

## Icon Categories

### Navigation (8)
- home
- search
- menu
- close
- chevron-right
- chevron-left
- chevron-down
- arrow-right

### User & Profile (1)
- user

### Communication & Contact (5)
- location
- calendar
- clock
- phone
- mail

### Social Media (4)
- facebook
- instagram
- linkedin
- youtube

### Status & Feedback (4)
- check
- info
- warning
- chat

### Content (2)
- activity
- book

## Usage in Components

```html
<!-- Basic usage -->
<svg class="icon" width="24" height="24" viewBox="0 0 24 24">
  <use xlink:href="../../assets/graphics/icons/home.svg#icon"></use>
</svg>

<!-- With size variant -->
<svg class="icon icon--small" width="16" height="16" viewBox="0 0 24 24">
  <use xlink:href="../../assets/graphics/icons/home.svg#icon"></use>
</svg>
```

## Adding New Icons

1. Create SVG with 24×24 viewBox
2. Use 2px stroke weight
3. Name with kebab-case
4. Save in this directory
5. Update this README

## Color & Styling

Icons use `currentColor` for stroke, allowing them to inherit text color from parent element.

```css
.icon {
  color: inherit;
  stroke: currentColor;
}

.icon--primary {
  color: var(--color-action-primary);
}
```
