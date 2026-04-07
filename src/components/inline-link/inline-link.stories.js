// Inline Link component documentation
import "../../main.scss";

export default {
  title: "Components/Link/Inline Link",
};

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
  <h1 class="sb-canvas__title">Inline Link — Default</h1>
  <p class="sb-canvas__desc">Forest green on light backgrounds. Underline visible by default, fades out on hover to reduce visual noise on interaction.</p>

  <!-- Live component -->
  <div class="sb-card">
    <p style="font-size:var(--text-body);margin:0;line-height:1.6;color:var(--color-text)">
      Discover more about
      <a href="#" class="inline-link">our academic programmes</a>
      at Regent's University London.
    </p>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)', '--color-forest-green', 'font-weight: 600 · underline visible · text-underline-offset: 3px · thickness: 1px'],
    ['Hover',          'var(--color-forest-green)', '--color-forest-green', 'underline fades out · opacity: var(--opacity-hover, 0.8) · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px · underline retained'],
    ['Active/Pressed', 'var(--color-forest-green)', '--color-forest-green', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-50)',  '--color-charcoal-50',  'opacity: 1 · cursor: not-allowed · pointer-events: none · contrast: 4.6:1 (WCAG AA)'],
  ])}
</div>
`;

// ── Inverse Variant ────────────────────────────────────────────────────────────
export const Inverse = () => `
<div class="sb-canvas sb-canvas--dark">
  <h1 class="sb-canvas__title">Inline Link — Inverse</h1>
  <p class="sb-canvas__desc">White on dark backgrounds. Underline visible by default, fades out on hover. Use on hero sections, dark panels, and image overlays.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--dark">
    <p style="font-size:var(--text-body);margin:0;line-height:1.6;color:var(--color-white)">
      Discover more about
      <a href="#" class="inline-link inline-link--inverse">our academic programmes</a>
      at Regent's University London.
    </p>
  </div>

  ${statesTable([
    ['Default',        'var(--color-zingy-yellow)', '--color-zingy-yellow', 'font-weight: 600 · underline visible · text-underline-offset: 3px · thickness: 1px'],
    ['Hover',          'var(--color-zingy-yellow)', '--color-zingy-yellow', 'underline fades out · opacity: var(--opacity-hover, 0.8) · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px · underline retained'],
    ['Active/Pressed', 'var(--color-zingy-yellow)', '--color-zingy-yellow', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-40)',  '--color-charcoal-40',  'opacity: 1 · cursor: not-allowed · pointer-events: none · contrast: 5.1:1 (WCAG AA)'],
  ], true)}
</div>
`;
