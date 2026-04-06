// Text Area component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Text Area",
};

const formStyles = `<style>
  *,*::before,*::after{box-sizing:border-box}
  .form-group{display:flex;flex-direction:column;gap:var(--sp-8)}
  .form-label{font-size:var(--text-small);font-weight:600;color:var(--color-charcoal-80);letter-spacing:0.02em}
  .form-label--required::after{content:' *';color:var(--color-error)}
  .form-hint{font-size:var(--text-caption);color:var(--color-charcoal-60)}
  .form-error-msg{font-size:var(--text-caption);color:var(--color-error);display:flex;align-items:center;gap:var(--sp-4)}
  .input{font-family:var(--font-sans);font-size:var(--text-body);font-weight:400;line-height:var(--lh-body);color:var(--color-charcoal);background:var(--color-white);border:2px solid var(--color-charcoal-20);border-radius:var(--radius-s);padding:var(--sp-12) var(--sp-16);width:100%;transition:border-color var(--duration-fast) var(--ease-out),box-shadow var(--duration-fast) var(--ease-out);appearance:none;-webkit-appearance:none;outline:none}
  .input::placeholder{color:var(--color-charcoal-40)}
  .input:hover{border-color:var(--color-charcoal-40)}
  .input:focus{border-color:var(--color-action-primary);outline:2px solid var(--color-powdered-blue);outline-offset:4px}
  .input--error{border-color:var(--color-error)!important}
  .input--error:focus{outline-color:var(--color-deep-red)!important}
  .input[disabled]{background:var(--color-charcoal-10);color:var(--color-charcoal-40);cursor:not-allowed;border-color:var(--color-charcoal-20)!important;box-shadow:none!important}
  textarea.input{resize:vertical;min-height:120px}
</style>`;

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
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Text Area — Default</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Multi-line text input. Inherits all input tokens. Vertically resizable by the user. Minimum height: 120px. Use a hint to indicate minimum word or character requirements.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-24)">
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
${formStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Text Area — Error</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Error state when validation fails — e.g. content too short or empty. Uses the same error pattern as Input Field: <code>aria-invalid="true"</code> linked to an error message via <code>aria-describedby</code>.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);max-width:480px">
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
    ['Error Default', 'var(--color-error)', '--color-error',          'border: 2px solid error-red · aria-invalid: true · error message visible'],
    ['Error Hover',   'var(--color-error)', '--color-error',          'border-color: error-red maintained · no change on hover'],
    ['Error Focus',   'var(--color-deep-red)', '--color-deep-red',       'border-color: error-red · outline: 2px solid --color-deep-red · outline-offset: 4px'],
    ['Error Disabled','var(--color-charcoal-20)', '--color-charcoal-20', 'disabled overrides error · bg: charcoal-10 · cursor: not-allowed'],
  ])}
</div>`;
