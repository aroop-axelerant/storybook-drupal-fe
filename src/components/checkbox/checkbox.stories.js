// Checkbox component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Checkbox",
};

const formStyles = '';

const statesTable = (rows) => `
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);overflow:hidden">
    <div style="display:grid;grid-template-columns:160px 1fr 1fr;padding:var(--sp-12) var(--sp-32);background:var(--color-charcoal-10);border-bottom:1px solid var(--color-border)">
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">State</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Fill</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Properties</p>
    </div>
    ${rows.map(([state, swatch, token, props]) => `
      <div style="display:grid;grid-template-columns:160px 1fr 1fr;padding:var(--sp-12) var(--sp-32);border-bottom:1px solid var(--color-border);align-items:center">
        <p style="font-size:var(--text-label-s);font-weight:600;color:var(--color-text-secondary);margin:0">${state}</p>
        <div style="display:flex;align-items:center;gap:var(--sp-8)">
          <div style="width:14px;height:14px;border-radius:var(--radius-xs);background:${swatch};flex-shrink:0;border:1px solid rgba(0,0,0,0.1)"></div>
          <code style="font-size:11px;color:var(--color-text-secondary)">${token}</code>
        </div>
        <p style="font-size:11px;color:var(--color-text-tertiary);margin:0;line-height:1.5">${props}</p>
      </div>`).join('')}
  </div>`;

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
${formStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Checkbox — Default</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Use for multi-select options. Native appearance is fully suppressed. Checked state fills with <code>--color-action-primary</code>. Focus ring: <code>outline: 2px solid --color-powdered-blue</code> with <code>outline-offset: 4px</code> on <code>:focus-visible</code>.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-32)">
    <div class="form-group">
      <p class="form-label">Course preferences</p>
      <div class="check-list">
        <label class="check-group">
          <input class="check-input" type="checkbox" checked>
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label">Business &amp; Management</span>
        </label>
        <label class="check-group">
          <input class="check-input" type="checkbox">
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label">Arts &amp; Humanities</span>
        </label>
        <label class="check-group">
          <input class="check-input" type="checkbox">
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label">Law &amp; Politics</span>
        </label>
      </div>
    </div>
    <div class="form-group">
      <p class="form-label">Funding options</p>
      <div class="check-list">
        <label class="check-group">
          <input class="check-input" type="checkbox" checked disabled>
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label check-label--disabled">Student loan (pre-selected)</span>
        </label>
        <label class="check-group">
          <input class="check-input" type="checkbox" disabled>
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label check-label--disabled">Scholarship (not available)</span>
        </label>
      </div>
    </div>
  </div>

  ${statesTable([
    ['Unchecked',         'var(--color-white)',         '--color-white',          'border: 2px solid charcoal-40 · bg: white · 20×20px · radius: xs'],
    ['Hover',             'var(--color-white)',         '--color-white',          'border-color: charcoal-60 · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',             'var(--color-powdered-blue)', '--color-powdered-blue',   'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible only)'],
    ['Checked',           'var(--color-action-primary)','--color-action-primary', 'bg: forest-green · border: forest-green · white tick via ::after on .check-box'],
    ['Checked Hover',     'var(--color-action-primary)','--color-action-primary', 'bg: forest-green · opacity: var(--opacity-hover, 0.8)'],
    ['Disabled Unchecked','var(--color-charcoal-10)',   '--color-charcoal-10',    'bg: charcoal-10 · border: charcoal-20 · cursor: not-allowed'],
    ['Disabled Checked',  'var(--color-charcoal-30)',   '--color-charcoal-30',    'bg: charcoal-30 · border: charcoal-30 · cursor: not-allowed'],
  ])}
</div>`;

// ── Error Variant ──────────────────────────────────────────────────────────────
export const Error = () => `
${formStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Checkbox — Error</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Error state when a required checkbox group has no selection. Apply <code>--error</code> border to all checkboxes in the group and render the error message beneath the group, not each individual item.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);max-width:400px">
    <div class="form-group">
      <p class="form-label">Course preferences <span style="color:var(--color-error)">*</span></p>
      <div class="check-list" style="margin-block-end:var(--sp-8)">
        <label class="check-group">
          <input class="check-input check-input--error" type="checkbox" aria-invalid="true" aria-describedby="sb-chk-err">
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label">Business &amp; Management</span>
        </label>
        <label class="check-group">
          <input class="check-input check-input--error" type="checkbox" aria-invalid="true">
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label">Arts &amp; Humanities</span>
        </label>
        <label class="check-group">
          <input class="check-input check-input--error" type="checkbox" aria-invalid="true">
          <span class="check-box" aria-hidden="true"></span>
          <span class="check-label">Law &amp; Politics</span>
        </label>
      </div>
      <span class="form-error-msg" id="sb-chk-err" role="alert">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Select at least one course preference
      </span>
    </div>
  </div>

  ${statesTable([
    ['Error Unchecked', 'var(--color-white)',  '--color-white', 'border: 2px solid error-red · aria-invalid: true · error message on group'],
    ['Error Hover',     'var(--color-white)',  '--color-white', 'border-color: error-red maintained · no change on hover'],
    ['Error Focus',     'var(--color-powdered-blue)', '--color-powdered-blue', 'border: error-red · outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Error Checked',   'var(--color-error)',  '--color-error', 'bg: error-red · border: error-red · white tick · resolves on re-validation'],
  ])}
</div>`;
