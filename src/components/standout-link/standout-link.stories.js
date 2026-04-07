// Standout Link component documentation
import "../../main.scss";

export default {
  title: "Components/Link/Standout Link",
};

const arrowSvg = `<svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
</svg>`;

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

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Standout Link — Default</h1>
  <p class="sb-canvas__desc">Forest green on light backgrounds. Use for primary CTAs within standard content areas.</p>

  <!-- Live component -->
  <div class="sb-card">
    <a href="#" class="standout-link">
      Download prospectus
      ${arrowSvg}
    </a>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)',  '--color-forest-green',  'font-weight: 600 · gap: var(--sp-8) · no underline'],
    ['Hover',          'var(--color-forest-green)',  '--color-forest-green',  'opacity: var(--opacity-hover, 0.8) · arrow: translateX(6px) · WCAG AA compliant (≥4.5:1)'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)',  '--color-forest-green',  'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-50)',   '--color-charcoal-50',   'opacity: 1 · cursor: not-allowed · pointer-events: none · contrast: 4.6:1 (WCAG AA)'],
  ])}
</div>
`;

// ── Inverse Variant ────────────────────────────────────────────────────────────
export const Inverse = () => `
<div class="sb-canvas sb-canvas--dark">
  <h1 class="sb-canvas__title">Standout Link — Inverse</h1>
  <p class="sb-canvas__desc">Zingy yellow on dark backgrounds. Use for prominent CTAs on hero sections and dark content areas.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--dark">
    <a href="#" class="standout-link standout-link--inverse">
      Explore Regent&#39;s Park campus
      ${arrowSvg}
    </a>
  </div>

  ${statesTable([
    ['Default',        'var(--color-zingy-yellow)',  '--color-zingy-yellow',  'font-weight: 600 · gap: var(--sp-8) · no underline'],
    ['Hover',          'var(--color-zingy-yellow)',  '--color-zingy-yellow',  'opacity: var(--opacity-hover, 0.8) · arrow: translateX(6px) · WCAG AA compliant (≥4.5:1)'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-zingy-yellow)',  '--color-zingy-yellow',  'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-40)',   '--color-charcoal-40',   'opacity: 1 · cursor: not-allowed · pointer-events: none · contrast: 5.1:1 (WCAG AA)'],
  ], true)}
</div>
`;
