// Radio Button component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Radio Button",
};

const statesTable = (rows) => `
  <div class="sb-table">
    <div class="sb-table__head sb-table__head--wide">
      <p class="sb-table__head-cell">State</p>
      <p class="sb-table__head-cell">Fill</p>
      <p class="sb-table__head-cell">Properties</p>
    </div>
    ${rows.map(([state, swatch, token, props]) => `
      <div class="sb-table__row sb-table__row--wide">
        <p class="sb-table__state">${state}</p>
        <div class="sb-table__swatch-cell">
          <div class="sb-table__swatch sb-table__swatch--circle" style="background:${swatch}"></div>
          <code class="sb-table__token">${token}</code>
        </div>
        <p class="sb-table__props">${props}</p>
      </div>`).join('')}
  </div>`;

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Radio Button — Default</h1>
  <p class="sb-canvas__desc">Use for mutually exclusive single-select options. All radios in a group share the same <code>name</code> attribute. Checked state fills with <code>--color-action-primary</code> and a centred white dot via <code>::after</code> on <code>.radio-circle</code>.</p>

  <div class="sb-card sb-card--grid-2">
    <div class="form-group">
      <p class="form-label">Entry year</p>
      <div class="radio-list">
        <label class="radio-group">
          <input class="radio-input" type="radio" name="sb-year" checked>
          <span class="radio-circle" aria-hidden="true"></span>
          <span class="radio-label">September 2025</span>
        </label>
        <label class="radio-group">
          <input class="radio-input" type="radio" name="sb-year">
          <span class="radio-circle" aria-hidden="true"></span>
          <span class="radio-label">January 2026</span>
        </label>
        <label class="radio-group">
          <input class="radio-input" type="radio" name="sb-year">
          <span class="radio-circle" aria-hidden="true"></span>
          <span class="radio-label">September 2026</span>
        </label>
      </div>
    </div>
    <div class="form-group">
      <p class="form-label">Study mode</p>
      <div class="radio-list">
        <label class="radio-group">
          <input class="radio-input" type="radio" name="sb-mode" checked disabled>
          <span class="radio-circle" aria-hidden="true"></span>
          <span class="radio-label radio-label--disabled">Full-time (pre-selected)</span>
        </label>
        <label class="radio-group">
          <input class="radio-input" type="radio" name="sb-mode" disabled>
          <span class="radio-circle" aria-hidden="true"></span>
          <span class="radio-label radio-label--disabled">Part-time (not available)</span>
        </label>
      </div>
    </div>
  </div>

  ${statesTable([
    ['Unselected',          'var(--color-white)',          '--color-white',           'border: 2px solid charcoal-40 · bg: white · 20×20px · border-radius: 50%'],
    ['Hover',               'var(--color-white)',          '--color-white',           'border-color: charcoal-60 · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',               'var(--color-powdered-blue)',  '--color-powdered-blue',   'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible only)'],
    ['Selected',            'var(--color-action-primary)', '--color-action-primary',  'bg: forest-green · border: forest-green · 8px white dot centred via ::after on .radio-circle'],
    ['Disabled Unselected', 'var(--color-charcoal-10)',    '--color-charcoal-10',     'bg: charcoal-10 · border: charcoal-20 · cursor: not-allowed'],
    ['Disabled Selected',   'var(--color-charcoal-30)',    '--color-charcoal-30',     'bg: charcoal-30 · border: charcoal-30 · cursor: not-allowed'],
  ])}
</div>`;

// ── Error Variant ──────────────────────────────────────────────────────────────
export const Error = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Radio Button — Error</h1>
  <p class="sb-canvas__desc">Error state when a required radio group has no selection. Apply <code>--error</code> modifier to all inputs in the group and render the error message beneath the group.</p>

  <div class="sb-card sb-card--narrow">
    <div class="form-group">
      <p class="form-label">Entry year <span style="color:var(--color-error)">*</span></p>
      <div class="radio-list" style="margin-block-end:var(--sp-8)">
        <label class="radio-group">
          <input class="radio-input radio-input--error" type="radio" name="sb-year-err" aria-invalid="true" aria-describedby="sb-radio-err">
          <span class="radio-circle" aria-hidden="true"></span>
          <span class="radio-label">September 2025</span>
        </label>
        <label class="radio-group">
          <input class="radio-input radio-input--error" type="radio" name="sb-year-err" aria-invalid="true">
          <span class="radio-circle" aria-hidden="true"></span>
          <span class="radio-label">January 2026</span>
        </label>
        <label class="radio-group">
          <input class="radio-input radio-input--error" type="radio" name="sb-year-err" aria-invalid="true">
          <span class="radio-circle" aria-hidden="true"></span>
          <span class="radio-label">September 2026</span>
        </label>
      </div>
      <span class="form-error-msg" id="sb-radio-err" role="alert">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Please select an entry year
      </span>
    </div>
  </div>

  ${statesTable([
    ['Error Unselected', 'var(--color-white)',         '--color-white',         'border: 2px solid error-red · aria-invalid: true · error message on group'],
    ['Error Hover',      'var(--color-white)',         '--color-white',         'border-color: error-red maintained · no change on hover'],
    ['Error Focus',      'var(--color-powdered-blue)', '--color-powdered-blue', 'border: error-red · outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Error Selected',   'var(--color-error)',         '--color-error',         'bg: error-red · border: error-red · white dot · resolves on re-validation'],
  ])}
</div>`;
