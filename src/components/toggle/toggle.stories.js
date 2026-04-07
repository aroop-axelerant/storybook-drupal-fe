// Toggle component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Toggle",
};

const statesTable = (rows) => `
  <div class="sb-table">
    <div class="sb-table__head sb-table__head--wide">
      <p class="sb-table__head-cell">State</p>
      <p class="sb-table__head-cell">Track</p>
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

// Click handler: toggles aria-checked and thumb position
const onToggle = `
  var c=this.getAttribute('aria-checked')==='true';
  this.setAttribute('aria-checked',String(!c));
  this.style.background=!c?'var(--color-action-primary)':'var(--color-charcoal-20)';
  this.querySelector('.toggle__thumb').style.transform=!c?'translateX(20px)':'translateX(0)'
`.replace(/\s+/g,' ').trim();

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Toggle — Default</h1>
  <p class="sb-canvas__desc">Binary on/off control. Uses <code>role="switch"</code> with <code>aria-checked</code> for accessibility. Track: 44×24px pill. Thumb: 14px white circle, translates 20px on activation. Click the toggles below to interact.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--grid-2">
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
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Toggle — Error</h1>
  <p class="sb-canvas__desc">Error state when a required toggle has not been activated — e.g. terms and conditions must be accepted. A 2px <code>--color-error</code> border rings the track with the error message displayed beneath.</p>

  <!-- Live component -->
  <div class="sb-card sb-card--narrow">
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
