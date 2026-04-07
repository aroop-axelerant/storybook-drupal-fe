// Tag — Accent component documentation
import "../../main.scss";

export default {
  title: "Components/Tag/Accent",
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

// ── Zingy Yellow Variant ───────────────────────────────────────────────────────
export const ZingyYellow = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Tag — Zingy Yellow</h1>
  <p class="sb-canvas__desc"><code>--color-zingy-yellow</code> background with <code>--color-charcoal-90</code> text. Use for high-energy highlights, new features, and key callout labels. One accent tag per content cluster maximum.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--padded">

    <p class="sb-label">Static — label use</p>
    <div class="sb-group">
      <span class="tag tag--yellow">New 2025</span>
      <span class="tag tag--yellow">Featured</span>
      <span class="tag tag--yellow">Scholarship available</span>
      <span class="tag tag--yellow">Open Day</span>
    </div>

    <p class="sb-label">Interactive — filter / clickable</p>
    <div class="sb-group">
      <button class="tag tag--yellow tag--interactive">New 2025</button>
      <button class="tag tag--yellow tag--interactive">Featured</button>
      <button class="tag tag--yellow tag--interactive">Open Day</button>
    </div>

    <p class="sb-label">Dismissible — active filter</p>
    <div class="sb-group">
      <span class="tag tag--yellow tag--dismissible">New 2025 <button class="tag__dismiss" aria-label="Remove New 2025 filter">${dismissSvg}</button></span>
      <span class="tag tag--yellow tag--dismissible">Featured <button class="tag__dismiss" aria-label="Remove Featured filter">${dismissSvg}</button></span>
    </div>

    <p class="sb-label">On dark background</p>
    <div class="sb-context-pad sb-context-pad--last" style="background:var(--color-charcoal)">
      <span class="tag tag--yellow">New 2025</span>
      <span class="tag tag--yellow">Scholarship available</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'bg: zingy-yellow (#e0f94c) · color: charcoal-90 · border: transparent · radius: radius-l'],
    ['Hover',      'var(--color-zingy-yellow-50)', '--color-zingy-yellow-50', 'bg: zingy-yellow-50 (#f0fcab) · transition: var(--duration-fast) var(--ease-out) · interactive only'],
    ['Focus',      'var(--color-powdered-blue)',   '--color-powdered-blue',   'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-zingy-yellow)',    '--color-zingy-yellow',    '× button: rgba(0,0,0,0.1) bg · darkens to 0.2 on hover'],
    ['Disabled',   'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;

// ── Violet Variant ─────────────────────────────────────────────────────────────
export const Violet = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Tag — Violet</h1>
  <p class="sb-canvas__desc"><code>--color-violet</code> background with <code>--color-charcoal-90</code> text. Use for editorial labels, journey cards, subject areas in arts and social sciences, and lifestyle content.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--padded">

    <p class="sb-label">Static — label use</p>
    <div class="sb-group">
      <span class="tag tag--violet">Arts &amp; Humanities</span>
      <span class="tag tag--violet">Postgraduate</span>
      <span class="tag tag--violet">Student Life</span>
      <span class="tag tag--violet">Research</span>
    </div>

    <p class="sb-label">Interactive — filter / clickable</p>
    <div class="sb-group">
      <button class="tag tag--violet tag--interactive">Arts &amp; Humanities</button>
      <button class="tag tag--violet tag--interactive">Student Life</button>
      <button class="tag tag--violet tag--interactive">Research</button>
    </div>

    <p class="sb-label">Dismissible — active filter</p>
    <div class="sb-group">
      <span class="tag tag--violet tag--dismissible">Arts &amp; Humanities <button class="tag__dismiss" aria-label="Remove Arts &amp; Humanities filter">${dismissSvg}</button></span>
      <span class="tag tag--violet tag--dismissible">Research <button class="tag__dismiss" aria-label="Remove Research filter">${dismissSvg}</button></span>
    </div>

    <p class="sb-label">Disabled</p>
    <div class="sb-group sb-group--last">
      <span class="tag tag--violet tag--disabled">Arts &amp; Humanities</span>
      <span class="tag tag--violet tag--disabled">Research</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-violet)', '--color-violet', 'bg: violet (#deccf3) · color: charcoal-90 · border: transparent · radius: radius-l'],
    ['Hover',      '#e8daf7',             'violet tint +8%', 'bg lightens · transition: var(--duration-fast) var(--ease-out) · interactive only'],
    ['Focus',      'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-violet)', '--color-violet',  'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-violet)', '--color-violet',  '× button: rgba(0,0,0,0.1) bg · darkens to 0.2 on hover'],
    ['Disabled',   'var(--color-violet)', '--color-violet',  'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;

// ── Peach Variant ──────────────────────────────────────────────────────────────
export const Peach = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Tag — Peach</h1>
  <p class="sb-canvas__desc"><code>--color-soft-peach-50</code> background with <code>--color-charcoal-90</code> text. Use for warm editorial content, wellbeing topics, lifestyle categories, and community-focused labels.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--padded">

    <p class="sb-label">Static — label use</p>
    <div class="sb-group">
      <span class="tag tag--peach">Wellbeing</span>
      <span class="tag tag--peach">Community</span>
      <span class="tag tag--peach">Student Stories</span>
      <span class="tag tag--peach">Campus Life</span>
    </div>

    <p class="sb-label">Interactive — filter / clickable</p>
    <div class="sb-group">
      <button class="tag tag--peach tag--interactive">Wellbeing</button>
      <button class="tag tag--peach tag--interactive">Student Stories</button>
      <button class="tag tag--peach tag--interactive">Campus Life</button>
    </div>

    <p class="sb-label">Dismissible — active filter</p>
    <div class="sb-group">
      <span class="tag tag--peach tag--dismissible">Wellbeing <button class="tag__dismiss" aria-label="Remove Wellbeing filter">${dismissSvg}</button></span>
      <span class="tag tag--peach tag--dismissible">Campus Life <button class="tag__dismiss" aria-label="Remove Campus Life filter">${dismissSvg}</button></span>
    </div>

    <p class="sb-label">Accent tags together — editorial combination</p>
    <div class="sb-context-pad sb-context-pad--last" style="background:var(--color-off-white)">
      <span class="tag tag--yellow">New 2025</span>
      <span class="tag tag--violet">Arts &amp; Humanities</span>
      <span class="tag tag--peach">Student Stories</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-soft-peach-50)', '--color-soft-peach-50', 'bg: soft-peach-50 (#ffd9c9) · color: charcoal-90 · border: transparent · radius: radius-l'],
    ['Hover',      '#ffc8b3',                   'peach tint +10%',        'bg deepens to #ffc8b3 · transition: var(--duration-fast) var(--ease-out) · interactive only'],
    ['Focus',      'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-soft-peach-50)', '--color-soft-peach-50', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-soft-peach-50)', '--color-soft-peach-50', '× button: rgba(0,0,0,0.1) bg · darkens to 0.2 on hover'],
    ['Disabled',   'var(--color-soft-peach-50)', '--color-soft-peach-50', 'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;
