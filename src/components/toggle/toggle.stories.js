// Toggle component documentation
import "../../../scss/main.scss";

export default {
  title: "Components/Form/Toggle",
};

const formStyles = `<style>
  *,*::before,*::after{box-sizing:border-box}
  .form-group{display:flex;flex-direction:column;gap:var(--sp-8)}
  .form-label{font-size:var(--text-small);font-weight:600;color:var(--color-charcoal-80);letter-spacing:0.02em}
  .form-hint{font-size:var(--text-caption);color:var(--color-charcoal-60)}
  .form-error-msg{font-size:var(--text-caption);color:var(--color-error);display:flex;align-items:center;gap:var(--sp-4)}
  .toggle-group{display:flex;align-items:center;gap:var(--sp-12);cursor:pointer}
  .toggle{position:relative;width:44px;height:24px;border-radius:var(--radius-l);background:var(--color-charcoal-20);border:2px solid transparent;cursor:pointer;padding:0;transition:background var(--duration-fast) var(--ease-out),border-color var(--duration-fast) var(--ease-out);flex-shrink:0;outline:none}
  .toggle:focus-visible{outline:2px solid var(--color-powdered-blue);outline-offset:4px}
  .toggle[aria-checked="true"]{background:var(--color-action-primary)}
  .toggle--error{border-color:var(--color-error)!important}
  .toggle[disabled]{opacity:var(--opacity-disabled,0.4);cursor:not-allowed}
  .toggle__thumb{position:absolute;top:3px;left:3px;width:14px;height:14px;border-radius:50%;background:var(--color-white);box-shadow:0 1px 3px rgba(0,0,0,0.2);transition:transform var(--duration-fast) var(--ease-out)}
  .toggle[aria-checked="true"] .toggle__thumb{transform:translateX(20px)}
  .toggle-label{font-size:var(--text-body);color:var(--color-charcoal);line-height:1.5;user-select:none}
  .toggle-label--disabled{color:var(--color-charcoal-40)}
  .toggle-list{display:flex;flex-direction:column;gap:var(--sp-16)}
</style>`;

const statesTable = (rows) => `
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);overflow:hidden">
    <div style="display:grid;grid-template-columns:160px 1fr 1fr;padding:var(--sp-12) var(--sp-32);background:var(--color-charcoal-10);border-bottom:1px solid var(--color-border)">
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">State</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Track</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Properties</p>
    </div>
    ${rows.map(([state, swatch, token, props]) => `
      <div style="display:grid;grid-template-columns:160px 1fr 1fr;padding:var(--sp-12) var(--sp-32);border-bottom:1px solid var(--color-border);align-items:center">
        <p style="font-size:var(--text-label-s);font-weight:600;color:var(--color-text-secondary);margin:0">${state}</p>
        <div style="display:flex;align-items:center;gap:var(--sp-8)">
          <div style="width:14px;height:14px;border-radius:var(--radius-l);background:${swatch};flex-shrink:0;border:1px solid rgba(0,0,0,0.1)"></div>
          <code style="font-size:11px;color:var(--color-text-secondary)">${token}</code>
        </div>
        <p style="font-size:11px;color:var(--color-text-tertiary);margin:0;line-height:1.5">${props}</p>
      </div>`).join('')}
  </div>`;

// Click handler: toggles aria-checked and thumb position
const onToggle = `
  var c=this.getAttribute('aria-checked')==='true';
  this.setAttribute('aria-checked',String(!c));
  this.style.background=!c?'var(--color-action-primary)':'var(--color-charcoal-20)';
  this.querySelector('.toggle__thumb').style.transform=!c?'translateX(20px)':'translateX(0)'
`.replace(/\s+/g,' ').trim();

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
${formStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Toggle — Default</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Binary on/off control. Uses <code>role="switch"</code> with <code>aria-checked</code> for accessibility. Track: 44×24px pill. Thumb: 14px white circle, translates 20px on activation. Click the toggles below to interact.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-32)">
    <div class="form-group">
      <p class="form-label">Notification preferences</p>
      <div class="toggle-list">
        <div class="toggle-group">
          <button class="toggle" role="switch" aria-checked="true" aria-label="Email updates" onclick="${onToggle}">
            <span class="toggle__thumb"></span>
          </button>
          <span class="toggle-label">Email updates</span>
        </div>
        <div class="toggle-group">
          <button class="toggle" role="switch" aria-checked="false" aria-label="SMS alerts" onclick="${onToggle}">
            <span class="toggle__thumb"></span>
          </button>
          <span class="toggle-label">SMS alerts</span>
        </div>
        <div class="toggle-group">
          <button class="toggle" role="switch" aria-checked="false" aria-label="Push notifications" onclick="${onToggle}">
            <span class="toggle__thumb"></span>
          </button>
          <span class="toggle-label">Push notifications</span>
        </div>
      </div>
    </div>
    <div class="form-group">
      <p class="form-label">Accessibility settings</p>
      <div class="toggle-list">
        <div class="toggle-group">
          <button class="toggle" role="switch" aria-checked="true" aria-label="Reduce motion" disabled>
            <span class="toggle__thumb" style="transform:translateX(20px)"></span>
          </button>
          <span class="toggle-label toggle-label--disabled">Reduce motion (locked)</span>
        </div>
        <div class="toggle-group">
          <button class="toggle" role="switch" aria-checked="false" aria-label="High contrast" disabled>
            <span class="toggle__thumb"></span>
          </button>
          <span class="toggle-label toggle-label--disabled">High contrast (locked)</span>
        </div>
      </div>
    </div>
  </div>

  ${statesTable([
    ['Off',           'var(--color-charcoal-20)',   '--color-charcoal-20',   'track: charcoal-20 · thumb: left (translateX 0) · aria-checked: false'],
    ['On',            'var(--color-action-primary)','--color-action-primary','track: forest-green · thumb: right (translateX 20px) · aria-checked: true'],
    ['Hover',         'var(--color-charcoal-20)',   '--color-charcoal-20',   'opacity: var(--opacity-hover, 0.8) · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',         'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible)'],
    ['Disabled Off',  'var(--color-charcoal-20)',   '--color-charcoal-20',   'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
    ['Disabled On',   'var(--color-action-primary)','--color-action-primary','opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;

// ── Error Variant ──────────────────────────────────────────────────────────────
export const Error = () => `
${formStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Toggle — Error</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Error state when a required toggle has not been activated — e.g. terms and conditions must be accepted. A 2px <code>--color-error</code> border rings the track with the error message displayed beneath.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);max-width:480px">
    <div class="form-group">
      <div class="toggle-list" style="margin-block-end:var(--sp-8)">
        <div class="toggle-group">
          <button class="toggle toggle--error" role="switch" aria-checked="false" aria-invalid="true" aria-describedby="sb-toggle-err" onclick="${onToggle}">
            <span class="toggle__thumb"></span>
          </button>
          <span class="toggle-label">I accept the terms and conditions <span style="color:var(--color-error)">*</span></span>
        </div>
      </div>
      <span class="form-error-msg" id="sb-toggle-err" role="alert">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        You must accept the terms and conditions to continue
      </span>
    </div>
  </div>

  ${statesTable([
    ['Error Off',   'var(--color-charcoal-20)', '--color-charcoal-20', 'track: charcoal-20 · border: 2px solid error-red · aria-invalid: true'],
    ['Error Hover', 'var(--color-charcoal-20)', '--color-charcoal-20', 'border: error-red maintained · opacity: var(--opacity-hover, 0.8)'],
    ['Error Focus', 'var(--color-powdered-blue)', '--color-powdered-blue', 'border: error-red · outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Error On',    'var(--color-action-primary)','--color-action-primary','track: forest-green · border: error-red until re-validated · aria-checked: true'],
  ])}
</div>`;
