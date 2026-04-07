// Text Area component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Text Area",
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
  <h1 class="sb-canvas__title">Text Area — Default</h1>
  <p class="sb-canvas__desc">Multi-line text input. Inherits all input tokens. Vertically resizable by the user. Minimum height: 120px. Use a hint to indicate minimum word or character requirements.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--grid-2">
    <div class="form-group">
      <label class="form-label" for="sb-statement">Personal statement</label>
      <textarea class="input" id="sb-statement" rows="4" placeholder="Tell us about yourself…"></textarea>
      <span class="form-hint">Minimum 150 words</span>
    </div>
    <div class="form-group">
      <label class="form-label" for="sb-statement-dis">Previous education</label>
      <textarea class="input" id="sb-statement-dis" rows="4" disabled>A-Level Mathematics (A), A-Level Physics (B), A-Level Economics (A)</textarea>
      <span class="form-hint">Imported from UCAS — not editable</span>
    </div>
  </div>

  ${statesTable([
    ['Default',  'var(--color-charcoal-20)', '--color-charcoal-20', 'border: 2px solid charcoal-20 · min-height: 120px · resize: vertical'],
    ['Hover',    'var(--color-charcoal-40)', '--color-charcoal-40', 'border-color: charcoal-40 · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',    'var(--color-powdered-blue)', '--color-powdered-blue', 'border-color: forest-green · outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Filled',   'var(--color-charcoal-20)', '--color-charcoal-20', 'border: charcoal-20 · color: charcoal · user has entered content'],
    ['Disabled', 'var(--color-charcoal-20)', '--color-charcoal-20', 'bg: charcoal-10 · color: charcoal-40 · cursor: not-allowed · resize: none'],
  ])}
</div>`;

// ── Error Variant ──────────────────────────────────────────────────────────────
export const Error = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Text Area — Error</h1>
  <p class="sb-canvas__desc">Error state when validation fails — e.g. content too short or empty. Uses the same error pattern as Input Field: <code>aria-invalid="true"</code> linked to an error message via <code>aria-describedby</code>.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--narrow">
    <div class="form-group">
      <label class="form-label form-label--required" for="sb-ps-err">Personal statement</label>
      <textarea class="input input--error" id="sb-ps-err" rows="4" aria-describedby="sb-ps-msg" aria-invalid="true">Too short.</textarea>
      <span class="form-error-msg" id="sb-ps-msg" role="alert">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Personal statement must be at least 150 words
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
