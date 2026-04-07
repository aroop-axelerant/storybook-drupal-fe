// Tag — Primary component documentation
import "../../main.scss";

export default {
  title: "Components/Tag/Primary",
};

const statesTable = (rows) => `
  <div class="sb-table">
    <div class="sb-table__head sb-table__head--wide">
      <p class="sb-table__head-cell">State</p>
      <p class="sb-table__head-cell">Background</p>
      <p class="sb-table__head-cell">Properties</p>
    </div>
    ${rows.map(([state, swatch, token, props]) => `
      <div class="sb-table__row sb-table__row--wide">
        <p class="sb-table__state">${state}</p>
        <div class="sb-table__swatch-cell">
          <div class="sb-table__swatch sb-table__swatch--pill" style="background:${swatch}"></div>
          <code class="sb-table__token">${token}</code>
        </div>
        <p class="sb-table__props">${props}</p>
      </div>`).join('')}
  </div>`;

const dismissSvg = `<svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="1" y1="1" x2="9" y2="9"/><line x1="9" y1="1" x2="1" y2="9"/></svg>`;

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Tag — Default</h1>
  <p class="sb-canvas__desc">Off-white background, <code>--color-charcoal-90</code> text, 1px <code>--color-charcoal-20</code> border. Use to label content categories, status, and metadata. Dismissible variant supports active filter patterns.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--padded">

    <p class="sb-label">Static — label use</p>
    <div class="sb-group">
      <span class="tag tag--default">Undergraduate</span>
      <span class="tag tag--default">September 2025</span>
      <span class="tag tag--default">3 years</span>
      <span class="tag tag--default">Full-time</span>
    </div>

    <p class="sb-label">Interactive — filter / clickable</p>
    <div class="sb-group">
      <button class="tag tag--default tag--interactive">Business</button>
      <button class="tag tag--default tag--interactive">Arts &amp; Humanities</button>
      <button class="tag tag--default tag--interactive">Law &amp; Politics</button>
    </div>

    <p class="sb-label">Dismissible — active filter</p>
    <div class="sb-group">
      <span class="tag tag--default tag--dismissible">September 2025 <button class="tag__dismiss" aria-label="Remove September 2025 filter">${dismissSvg}</button></span>
      <span class="tag tag--default tag--dismissible">Full-time <button class="tag__dismiss" aria-label="Remove Full-time filter">${dismissSvg}</button></span>
      <span class="tag tag--default tag--dismissible">Undergraduate <button class="tag__dismiss" aria-label="Remove Undergraduate filter">${dismissSvg}</button></span>
    </div>

    <p class="sb-label">Disabled</p>
    <div class="sb-group sb-group--last">
      <span class="tag tag--default tag--disabled">Undergraduate</span>
      <span class="tag tag--default tag--disabled">September 2025</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-off-white)',    '--color-off-white',    'bg: off-white · color: charcoal-90 · border: 1px solid charcoal-20 · radius: radius-l'],
    ['Hover',      'var(--color-charcoal-10)',  '--color-charcoal-10',  'bg: charcoal-10 · interactive only · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',      'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-off-white)',    '--color-off-white',    'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-off-white)',    '--color-off-white',    '× button: 16px circle · rgba(0,0,0,0.12) bg · darkens to 0.24 on hover'],
    ['Disabled',   'var(--color-off-white)',    '--color-off-white',    'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;

// ── Brand Variant ──────────────────────────────────────────────────────────────
export const Brand = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Tag — Brand</h1>
  <p class="sb-canvas__desc">Forest green background with white text. Use for high-prominence labels: course type, featured content, and primary category indicators.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--padded">

    <p class="sb-label">Static — label use</p>
    <div class="sb-group">
      <span class="tag tag--brand">Undergraduate</span>
      <span class="tag tag--brand">Postgraduate</span>
      <span class="tag tag--brand">New 2025</span>
      <span class="tag tag--brand">Featured</span>
    </div>

    <p class="sb-label">Interactive — filter / clickable</p>
    <div class="sb-group">
      <button class="tag tag--brand tag--interactive">Undergraduate</button>
      <button class="tag tag--brand tag--interactive">Postgraduate</button>
      <button class="tag tag--brand tag--interactive">MBA</button>
    </div>

    <p class="sb-label">Dismissible — active filter</p>
    <div class="sb-group">
      <span class="tag tag--brand tag--dismissible">Undergraduate <button class="tag__dismiss" aria-label="Remove Undergraduate filter">${dismissSvg}</button></span>
      <span class="tag tag--brand tag--dismissible">Postgraduate <button class="tag__dismiss" aria-label="Remove Postgraduate filter">${dismissSvg}</button></span>
    </div>

    <p class="sb-label">On dark background</p>
    <div class="sb-context-pad sb-context-pad--last" style="background:var(--color-charcoal)">
      <span class="tag tag--brand">Undergraduate</span>
      <span class="tag tag--brand">New 2025</span>
      <span class="tag tag--brand">Featured</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-forest-green)',        '--color-forest-green',        'bg: forest-green · color: white · border: transparent · radius: radius-l'],
    ['Hover',      'var(--color-action-primary-hover)','--color-action-primary-hover', 'bg: #004a3c · transition: var(--duration-fast) var(--ease-out) · interactive only'],
    ['Focus',      'var(--color-powdered-blue)',       '--color-powdered-blue',        'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-forest-green)',        '--color-forest-green',         'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-forest-green)',        '--color-forest-green',         '× button: rgba(255,255,255,0.2) bg · brightens to 0.35 on hover'],
    ['Disabled',   'var(--color-forest-green)',        '--color-forest-green',         'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;
