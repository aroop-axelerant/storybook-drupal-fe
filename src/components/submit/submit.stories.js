// Submit component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Submit",
};

const formStyles = `<style>
  *,*::before,*::after{box-sizing:border-box}
  .submit-btn{display:inline-flex;align-items:center;justify-content:center;gap:var(--sp-8);font-family:var(--font-sans);font-size:var(--text-body);font-weight:600;line-height:1;padding:var(--sp-12) var(--sp-24);border-radius:var(--radius-l);border:none;cursor:pointer;text-decoration:none;white-space:nowrap;transition:background var(--duration-fast) var(--ease-out),opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out);background:var(--color-action-primary);color:var(--color-white);outline:none}
  .submit-btn:hover{background:var(--color-action-primary-hover)}
  .submit-btn:focus-visible{outline:2px solid var(--color-powdered-blue);outline-offset:4px}
  .submit-btn:active{transform:scale(0.98)}
  .submit-btn[disabled]{background:var(--color-charcoal-30);cursor:not-allowed;pointer-events:none}
  .submit-btn--loading{cursor:wait;pointer-events:none;opacity:var(--opacity-hover,0.8)}
  @keyframes sb-spin{to{transform:rotate(360deg)}}
  .spinner{width:18px;height:18px;border:2px solid rgba(255,255,255,0.3);border-top-color:white;border-radius:50%;animation:sb-spin var(--duration-slower,500ms) linear infinite;flex-shrink:0}
</style>`;

const statesTable = (rows) => `
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);overflow:hidden">
    <div style="display:grid;grid-template-columns:160px 1fr 1fr;padding:var(--sp-12) var(--sp-32);background:var(--color-charcoal-10);border-bottom:1px solid var(--color-border)">
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">State</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Background</p>
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

const iconCheck = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
${formStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Submit</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Form submission button. Uses Primary button styling — <code>--color-action-primary</code> fill. A form should have exactly one submit action. Use a loading state to prevent duplicate submissions. Always use <code>type="submit"</code> inside a <code>&lt;form&gt;</code>.</p>

  <!-- Live components — all interactive states -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48)">
    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-24)">Interactive states</p>
    <div style="display:flex;align-items:center;gap:var(--sp-16);flex-wrap:wrap">

      <!-- Default -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:var(--sp-8)">
        <button type="submit" class="submit-btn"
          onmouseover="this.style.background='var(--color-action-primary-hover)'"
          onmouseout="this.style.background='var(--color-action-primary)';this.style.transform=''"
          onmousedown="this.style.transform='scale(0.98)'"
          onmouseup="this.style.transform=''">
          Submit Application
        </button>
        <span style="font-size:11px;color:var(--color-text-tertiary)">Default</span>
      </div>

      <!-- With icon -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:var(--sp-8)">
        <button type="submit" class="submit-btn"
          onmouseover="this.style.background='var(--color-action-primary-hover)'"
          onmouseout="this.style.background='var(--color-action-primary)';this.style.transform=''"
          onmousedown="this.style.transform='scale(0.98)'"
          onmouseup="this.style.transform=''">
          Submit Application ${iconCheck}
        </button>
        <span style="font-size:11px;color:var(--color-text-tertiary)">With icon</span>
      </div>

      <!-- Loading -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:var(--sp-8)">
        <button type="submit" class="submit-btn submit-btn--loading" disabled aria-busy="true" aria-label="Submitting application…">
          <span class="spinner"></span>
          Submitting…
        </button>
        <span style="font-size:11px;color:var(--color-text-tertiary)">Loading</span>
      </div>

      <!-- Disabled -->
      <div style="display:flex;flex-direction:column;align-items:center;gap:var(--sp-8)">
        <button type="submit" class="submit-btn" disabled>
          Submit Application
        </button>
        <span style="font-size:11px;color:var(--color-text-tertiary)">Disabled</span>
      </div>

    </div>
  </div>

  ${statesTable([
    ['Default',        'var(--color-action-primary)',       '--color-action-primary',       'bg: forest-green · color: white · radius: radius-l · padding: var(--sp-12) var(--sp-24)'],
    ['Hover',          'var(--color-action-primary-hover)', '--color-action-primary-hover',  'bg darkens to #004a3c · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',          'var(--color-action-primary)',       '--color-action-primary',        'outline: 2px solid powdered-blue · outline-offset: 4px (focus-visible)'],
    ['Active/Pressed', 'var(--color-action-primary)',       '--color-action-primary',        'transform: scale(0.98) · var(--duration-fast) var(--ease-out)'],
    ['Loading',        'var(--color-action-primary)',       '--color-action-primary',        'spinner visible · opacity: 0.8 · aria-busy: true · pointer-events: none'],
    ['Disabled',       'var(--color-charcoal-30)',          '--color-charcoal-30',           'bg: charcoal-30 · cursor: not-allowed · pointer-events: none · WCAG AA'],
  ])}
</div>`;
