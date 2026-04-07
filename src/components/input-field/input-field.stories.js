// Input Field component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Input Field",
};

const formStyles = '';

const statesTable = (rows) => `
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);overflow:hidden">
    <div style="display:grid;grid-template-columns:140px 1fr 1fr;padding:var(--sp-12) var(--sp-32);background:var(--color-charcoal-10);border-bottom:1px solid var(--color-border)">
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">State</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Border</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Properties</p>
    </div>
    ${rows.map(([state, swatch, token, props]) => `
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;padding:var(--sp-12) var(--sp-32);border-bottom:1px solid var(--color-border);align-items:center">
        <p style="font-size:var(--text-label-s);font-weight:600;color:var(--color-text-secondary);margin:0">${state}</p>
        <div style="display:flex;align-items:center;gap:var(--sp-8)">
          <div style="width:14px;height:14px;border-radius:var(--radius-s);background:${swatch};flex-shrink:0;border:1px solid rgba(0,0,0,0.1)"></div>
          <code style="font-size:11px;color:var(--color-text-secondary)">${token}</code>
        </div>
        <p style="font-size:11px;color:var(--color-text-tertiary);margin:0;line-height:1.5">${props}</p>
      </div>`).join('')}
  </div>`;

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
${formStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Input Field — Default</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Standard text input. Always pair with a visible label. Never rely on placeholder text alone. Focus ring: <code>outline: 2px solid --color-powdered-blue</code> with <code>outline-offset: 4px</code>.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-24)">
    <div class="form-group">
      <label class="form-label form-label--required" for="sb-name">Full name</label>
      <input class="input" id="sb-name" type="text" placeholder="e.g. Sarah Mackenzie" autocomplete="off">
      <span class="form-hint">As it appears on your passport</span>
    </div>
    <div class="form-group">
      <label class="form-label" for="sb-ref">Reference number</label>
      <input class="input" id="sb-ref" type="text" value="REF-2025-00421" disabled>
      <span class="form-hint">Auto-generated — not editable</span>
    </div>
  </div>

  ${statesTable([
    ['Default',  'var(--color-charcoal-20)', '--color-charcoal-20', 'border: 2px solid charcoal-20 · bg: white · placeholder: charcoal-40'],
    ['Hover',    'var(--color-charcoal-40)', '--color-charcoal-40', 'border-color: charcoal-40 · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',    'var(--color-powdered-blue)', '--color-powdered-blue', 'border-color: forest-green · outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Filled',   'var(--color-charcoal-20)', '--color-charcoal-20', 'border: charcoal-20 · color: charcoal · font-weight: regular'],
    ['Disabled', 'var(--color-charcoal-20)', '--color-charcoal-20', 'bg: charcoal-10 · color: charcoal-40 · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;

// ── Error Variant ──────────────────────────────────────────────────────────────
export const Error = () => `
${formStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Input Field — Error</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Error state after failed validation. Use <code>aria-invalid="true"</code> and <code>aria-describedby</code> linking the field to its error message. Error message uses <code>role="alert"</code> for screen readers.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);max-width:400px">
    <div class="form-group">
      <label class="form-label form-label--required" for="sb-ucas">UCAS code</label>
      <input class="input input--error" id="sb-ucas" type="text" value="BA89X1" aria-describedby="sb-ucas-err" aria-invalid="true">
      <span class="form-error-msg" id="sb-ucas-err" role="alert">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Invalid UCAS code format
      </span>
    </div>
  </div>

  ${statesTable([
    ['Error Default', 'var(--color-error)', '--color-error',          'border: 2px solid error-red · aria-invalid: true · error message visible'],
    ['Error Hover',   'var(--color-error)', '--color-error',          'border-color: error-red maintained · no change on hover'],
    ['Error Focus',   'var(--color-deep-red)', '--color-deep-red',       'border-color: error-red · outline: 2px solid --color-deep-red · outline-offset: 4px'],
    ['Error Disabled','var(--color-charcoal-20)', '--color-charcoal-20', 'disabled overrides error · bg: charcoal-10 · cursor: not-allowed'],
  ])}
</div>`;
