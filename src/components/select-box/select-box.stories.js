// Select Box component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Select Box",
};

const statesTable = (rows) => `
  <div class="sb-table">
    <div class="sb-table__head">
      <p class="sb-table__head-cell">State</p>
      <p class="sb-table__head-cell">Border</p>
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
  <h1 class="sb-canvas__title">Select Box — Default</h1>
  <p class="sb-canvas__desc">Dropdown select. The chevron is rendered via a CSS pseudo-element on the wrapper — native <code>&lt;select&gt;</code> appearance is fully suppressed. Shares the same border and focus tokens as the text input.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--grid-2">
    <div class="form-group">
      <label class="form-label" for="sb-country">Country of residence</label>
      <div class="select-wrap">
        <select class="input" id="sb-country">
          <option value="">Select country…</option>
          <option>United Kingdom</option>
          <option>United States</option>
          <option>Germany</option>
          <option>France</option>
        </select>
      </div>
      <span class="form-hint">Where you currently live</span>
    </div>
    <div class="form-group">
      <label class="form-label" for="sb-country-dis">Preferred campus</label>
      <div class="select-wrap">
        <select class="input" id="sb-country-dis" disabled>
          <option>Regent's Park</option>
        </select>
      </div>
      <span class="form-hint">Only one campus available</span>
    </div>
  </div>

  ${statesTable([
    ['Default',  'var(--color-charcoal-20)', '--color-charcoal-20', 'border: 2px solid charcoal-20 · chevron: charcoal-60 rotated diamond · padding-end: sp-48'],
    ['Hover',    'var(--color-charcoal-40)', '--color-charcoal-40', 'border-color: charcoal-40 · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',    'var(--color-powdered-blue)', '--color-powdered-blue', 'border-color: forest-green · outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Selected', 'var(--color-charcoal-20)', '--color-charcoal-20', 'value displayed · border: charcoal-20 · color: charcoal'],
    ['Disabled', 'var(--color-charcoal-20)', '--color-charcoal-20', 'bg: charcoal-10 · color: charcoal-40 · cursor: not-allowed'],
  ])}
</div>`;

// ── Error Variant ──────────────────────────────────────────────────────────────
export const Error = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Select Box — Error</h1>
  <p class="sb-canvas__desc">Error state when a required selection has not been made. Same pattern as Input Field: <code>aria-invalid="true"</code> with a linked error message via <code>aria-describedby</code>.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--narrow">
    <div class="form-group">
      <label class="form-label form-label--required" for="sb-intake">Entry year</label>
      <div class="select-wrap">
        <select class="input input--error" id="sb-intake" aria-describedby="sb-intake-err" aria-invalid="true">
          <option value="">Select entry year…</option>
          <option>September 2025</option>
          <option>January 2026</option>
        </select>
      </div>
      <span class="form-error-msg" id="sb-intake-err" role="alert">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Please select an entry year
      </span>
    </div>
  </div>

  ${statesTable([
    ['Error Default', 'var(--color-error)',        '--color-error',        'border: 2px solid error-red · aria-invalid: true · error message visible'],
    ['Error Hover',   'var(--color-error)',        '--color-error',        'border-color: error-red maintained · no change on hover'],
    ['Error Focus',   'var(--color-deep-red)',     '--color-deep-red',     'border-color: error-red · outline: 2px solid --color-deep-red · outline-offset: 4px'],
    ['Error Disabled','var(--color-charcoal-20)', '--color-charcoal-20',   'disabled overrides error · bg: charcoal-10 · cursor: not-allowed'],
  ])}
</div>`;
