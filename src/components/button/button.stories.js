// Button component documentation
import "../../main.scss";

export default {
  title: "Components/Button",
};

// ── Shared helpers ─────────────────────────────────────────────────────────────
const iconSearch = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>`;
const iconArrow  = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
const iconPlus   = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;

// States table renderer
const statesTable = (rows, dark = false) => `
  <div class="sb-table${dark ? ' sb-table--dark' : ''}">
    <div class="sb-table__head">
      <p class="sb-table__head-cell">State</p>
      <p class="sb-table__head-cell">Color</p>
      <p class="sb-table__head-cell">Properties</p>
    </div>
    ${rows.map(([state, swatch, token, props]) => `
      <div class="sb-table__row">
        <p class="sb-table__state">${state}</p>
        <div class="sb-table__swatch-cell">
          <div class="sb-table__swatch" style="background:${swatch}"></div>
          <code class="sb-table__token">${token}</code>
        </div>
        <p class="sb-table__props">${props}</p>
      </div>`).join('')}
  </div>`;

// ── 1. Primary ─────────────────────────────────────────────────────────────────
export const Primary = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Button — Primary</h1>
  <p class="sb-canvas__desc">Highest visual weight. Use for the single most important action on a page.</p>

  <div class="sb-card sb-card--row">
    <button class="btn btn--primary">Book Open Day</button>
    <button class="btn btn--primary">Apply Now ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)',       '--color-forest-green',       'background: forest-green · color: white · border: transparent'],
    ['Hover',          'var(--color-forest-green-hover)', '--color-forest-green-hover',  'background darkens · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)',      '--color-powdered-blue',       'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)',       '--color-forest-green',        'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)',        '--color-charcoal-30',         'background: charcoal-30 · color: white · cursor: not-allowed · contrast: WCAG AA'],
  ])}
</div>`;

// ── 2. Primary Inverse ─────────────────────────────────────────────────────────
export const PrimaryInverse = () => `
<div class="sb-canvas sb-canvas--dark">
  <h1 class="sb-canvas__title">Button — Primary Inverse</h1>
  <p class="sb-canvas__desc">Highest visual weight on dark backgrounds. Use on hero sections and dark panels.</p>

  <div class="sb-card sb-card--dark sb-card--row">
    <button class="btn btn--primary-inverted">Book Open Day</button>
    <button class="btn btn--primary-inverted">Apply Now ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-zingy-yellow)',       '--color-zingy-yellow',        'background: zingy-yellow · color: charcoal · border: transparent'],
    ['Hover',          'var(--color-zingy-yellow)',       '--color-zingy-yellow',        'opacity: var(--opacity-hover, 0.8) · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)',      '--color-powdered-blue',       'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-zingy-yellow)',       '--color-zingy-yellow',        'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-50)',        '--color-charcoal-50',         'background: charcoal-50 · color: charcoal-90 · cursor: not-allowed · contrast: WCAG AA'],
  ], true)}
</div>`;

// ── 3. Secondary ───────────────────────────────────────────────────────────────
export const Secondary = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Button — Secondary</h1>
  <p class="sb-canvas__desc">Medium visual weight. Use alongside a Primary button for supporting actions.</p>

  <div class="sb-card sb-card--row">
    <button class="btn btn--secondary">Learn More</button>
    <button class="btn btn--secondary">View Course ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-charcoal)',    '--color-charcoal',    'background: white · color: charcoal · border: 2px solid charcoal'],
    ['Hover',          'var(--color-charcoal)',    '--color-charcoal',    'background fills charcoal-10 · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-charcoal)',    '--color-charcoal',    'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)', '--color-charcoal-30', 'border: charcoal-30 · color: charcoal-30 · cursor: not-allowed · contrast: WCAG AA'],
  ])}
</div>`;

// ── 4. Secondary Inverse ───────────────────────────────────────────────────────
export const SecondaryInverse = () => `
<div class="sb-canvas sb-canvas--dark">
  <h1 class="sb-canvas__title">Button — Secondary Inverse</h1>
  <p class="sb-canvas__desc">Medium visual weight on dark backgrounds. Use alongside Primary Inverse for supporting actions.</p>

  <div class="sb-card sb-card--dark sb-card--row">
    <button class="btn btn--secondary-inverted">Learn More</button>
    <button class="btn btn--secondary-inverted">View Course ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-white)', '--color-white', 'background: transparent · color: white · border: 2px solid white'],
    ['Hover',          'var(--color-white)', '--color-white', 'background fills light-40 · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-white)', '--color-white', 'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-40)', '--color-charcoal-40', 'border: charcoal-40 · color: charcoal-40 · cursor: not-allowed · contrast: WCAG AA'],
  ], true)}
</div>`;

// ── 5. Ghost ───────────────────────────────────────────────────────────────────
export const Ghost = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Button — Ghost</h1>
  <p class="sb-canvas__desc">Lowest visual weight on light backgrounds. Use for tertiary or inline actions where minimal visual impact is needed.</p>

  <div class="sb-card sb-card--row">
    <button class="btn btn--ghost">Cancel</button>
    <button class="btn btn--ghost">Skip for now ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)', '--color-forest-green', 'background: transparent · color: forest-green · no border'],
    ['Hover',          'var(--color-forest-green)', '--color-forest-green', 'background: charcoal-10 · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)', '--color-forest-green', 'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-50)',  '--color-charcoal-50',  'color: charcoal-50 · cursor: not-allowed · contrast: 4.6:1 (WCAG AA)'],
  ])}
</div>`;

// ── 6. Ghost Inverse ───────────────────────────────────────────────────────────
export const GhostInverse = () => `
<div class="sb-canvas sb-canvas--dark">
  <h1 class="sb-canvas__title">Button — Ghost Inverse</h1>
  <p class="sb-canvas__desc">Lowest visual weight on dark backgrounds. Use for tertiary actions on hero sections and dark panels.</p>

  <div class="sb-card sb-card--dark sb-card--row">
    <button class="btn btn--ghost-inverse">Cancel</button>
    <button class="btn btn--ghost-inverse">Skip for now ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-zingy-yellow)', '--color-zingy-yellow', 'background: transparent · color: zingy-yellow · no border'],
    ['Hover',          'var(--color-zingy-yellow)', '--color-zingy-yellow', 'background: zingy-yellow at 12% opacity · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-zingy-yellow)', '--color-zingy-yellow', 'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-40)',  '--color-charcoal-40',  'color: charcoal-40 · cursor: not-allowed · contrast: 5.1:1 (WCAG AA)'],
  ], true)}
</div>`;

// ── 7. Icon Fill ───────────────────────────────────────────────────────────────
export const IconFill = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Button — Icon Fill</h1>
  <p class="sb-canvas__desc">Icon-only button. Filled style matches Primary variant — forest green background. Always include a visually hidden label or aria-label for accessibility.</p>

  <div class="sb-card sb-card--row">
    <button class="btn btn--primary btn--icon" aria-label="Search">${iconSearch}</button>
    <button class="btn btn--primary btn--icon" aria-label="Add">${iconPlus}</button>
    <button class="btn btn--primary btn--icon" aria-label="Next">${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)',       '--color-forest-green',       'background: forest-green · color: white · padding: var(--sp-12) · border-radius: 50%'],
    ['Hover',          'var(--color-forest-green-hover)', '--color-forest-green-hover',  'background darkens · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)',      '--color-powdered-blue',       'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)',       '--color-forest-green',        'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)',        '--color-charcoal-30',         'background: charcoal-30 · cursor: not-allowed · aria-disabled: true'],
  ])}
</div>`;

// ── 8. Icon Fill Inverse ───────────────────────────────────────────────────────
export const IconFillInverse = () => `
<div class="sb-canvas sb-canvas--dark">
  <h1 class="sb-canvas__title">Button — Icon Fill Inverse</h1>
  <p class="sb-canvas__desc">Icon-only button for use on dark backgrounds. Zingy yellow background with charcoal icon — high contrast, brand-forward. Always include aria-label for accessibility.</p>

  <div class="sb-card sb-card--dark sb-card--row">
    <button class="btn btn--primary-inverted btn--icon" aria-label="Search">${iconSearch}</button>
    <button class="btn btn--primary-inverted btn--icon" aria-label="Add">${iconPlus}</button>
    <button class="btn btn--primary-inverted btn--icon" aria-label="Next">${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'background: zingy-yellow · color: charcoal · padding: var(--sp-12) · border-radius: 50%'],
    ['Hover',          'var(--color-zingy-yellow-50)', '--color-zingy-yellow-50', 'background lightens to zingy-yellow-50 · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)',   '--color-powdered-blue',   'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)',     '--color-charcoal-30',     'background: charcoal-30 · cursor: not-allowed · aria-disabled: true'],
  ], true)}
</div>`;

IconFillInverse.storyName = 'Icon Fill Inverse';

// ── 9. Icon Outline ────────────────────────────────────────────────────────────
export const IconOutline = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Button — Icon Outline</h1>
  <p class="sb-canvas__desc">Icon-only button. Outline style matches Secondary variant — charcoal border, fills on hover. Always include aria-label for accessibility.</p>

  <div class="sb-card sb-card--row">
    <button class="btn btn--secondary btn--icon" aria-label="Search">${iconSearch}</button>
    <button class="btn btn--secondary btn--icon" aria-label="Add">${iconPlus}</button>
    <button class="btn btn--secondary btn--icon" aria-label="Next">${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-charcoal)', '--color-charcoal', 'background: white · color: charcoal · border: 2px solid charcoal · padding: var(--sp-12) · border-radius: 50%'],
    ['Hover',          'var(--color-charcoal)', '--color-charcoal', 'background fills charcoal-10 · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-charcoal)', '--color-charcoal', 'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)', '--color-charcoal-30', 'border: charcoal-30 · color: charcoal-30 · cursor: not-allowed · WCAG AA'],
  ])}
</div>`;

// ── 10. Icon Ghost ─────────────────────────────────────────────────────────────
export const IconGhost = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Button — Icon Ghost</h1>
  <p class="sb-canvas__desc">Icon-only button. Ghost style — no background or border at rest, subtle fill on hover. Use for low-priority icon actions like close, filter, or collapse. Always include aria-label for accessibility.</p>

  <div class="sb-card sb-card--row">
    <button class="btn btn--ghost btn--icon" aria-label="Search">${iconSearch}</button>
    <button class="btn btn--ghost btn--icon" aria-label="Add">${iconPlus}</button>
    <button class="btn btn--ghost btn--icon" aria-label="Next">${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)', '--color-forest-green', 'background: transparent · color: forest-green · no border · padding: var(--sp-12) · border-radius: 50%'],
    ['Hover',          'var(--color-forest-green)', '--color-forest-green', 'background: charcoal-10 · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)', '--color-forest-green', 'transform: scale(0.97) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-50)',  '--color-charcoal-50',  'color: charcoal-50 · cursor: not-allowed · contrast: 4.6:1 (WCAG AA)'],
  ])}
</div>`;
