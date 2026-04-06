// Tag — Primary component documentation
import "../../main.scss";

export default {
  title: "Components/Tag/Primary",
};

const tagStyles = `<style>
  *,*::before,*::after{box-sizing:border-box}
  .tag{display:inline-flex;align-items:center;gap:var(--sp-4);font-family:var(--font-sans);font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:var(--sp-4) var(--sp-12);border-radius:var(--radius-l);border:1px solid transparent;white-space:nowrap;line-height:1;text-decoration:none;cursor:default;transition:background var(--duration-fast) var(--ease-out),opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out)}
  .tag--interactive{cursor:pointer;outline:none}
  .tag--interactive:focus-visible{outline:2px solid var(--color-powdered-blue);outline-offset:3px}
  .tag--interactive:active{transform:scale(0.98)}
  /* Default variant */
  .tag--default{background:var(--color-off-white);color:var(--color-charcoal-90);border-color:transparent}
  .tag--default.tag--interactive:hover{background:var(--color-charcoal-10)}
  /* Brand variant */
  .tag--brand{background:var(--color-forest-green);color:var(--color-white);border-color:transparent}
  .tag--brand.tag--interactive:hover{background:var(--color-action-primary-hover)}
  /* Disabled */
  .tag--disabled{opacity:var(--opacity-disabled,0.4);cursor:not-allowed;pointer-events:none}
  /* Dismissible */
  .tag--dismissible{padding-inline-end:var(--sp-8)}
  .tag__dismiss{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:rgba(0,0,0,0.12);border:none;padding:0;cursor:pointer;color:inherit;transition:background var(--duration-fast) var(--ease-out);flex-shrink:0;line-height:1}
  .tag__dismiss:hover{background:rgba(0,0,0,0.24)}
  .tag__dismiss:focus-visible{outline:2px solid var(--color-powdered-blue);outline-offset:2px}
  .tag--brand .tag__dismiss{background:rgba(255,255,255,0.2)}
  .tag--brand .tag__dismiss:hover{background:rgba(255,255,255,0.35)}
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

const dismissSvg = `<svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="1" y1="1" x2="9" y2="9"/><line x1="9" y1="1" x2="1" y2="9"/></svg>`;

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
${tagStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Tag — Default</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Off-white background, <code>--color-charcoal-90</code> text, 1px <code>--color-charcoal-20</code> border. Use to label content categories, status, and metadata. Dismissible variant supports active filter patterns.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48)">

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Static — label use</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--default">Undergraduate</span>
      <span class="tag tag--default">September 2025</span>
      <span class="tag tag--default">3 years</span>
      <span class="tag tag--default">Full-time</span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Interactive — filter / clickable</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <button class="tag tag--default tag--interactive"
        onmouseover="this.style.background='var(--color-charcoal-10)'"
        onmouseout="this.style.background='var(--color-off-white)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Business</button>
      <button class="tag tag--default tag--interactive"
        onmouseover="this.style.background='var(--color-charcoal-10)'"
        onmouseout="this.style.background='var(--color-off-white)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Arts &amp; Humanities</button>
      <button class="tag tag--default tag--interactive"
        onmouseover="this.style.background='var(--color-charcoal-10)'"
        onmouseout="this.style.background='var(--color-off-white)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Law &amp; Politics</button>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Dismissible — active filter</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--default tag--dismissible">September 2025 <button class="tag__dismiss" aria-label="Remove September 2025 filter">${dismissSvg}</button></span>
      <span class="tag tag--default tag--dismissible">Full-time <button class="tag__dismiss" aria-label="Remove Full-time filter">${dismissSvg}</button></span>
      <span class="tag tag--default tag--dismissible">Undergraduate <button class="tag__dismiss" aria-label="Remove Undergraduate filter">${dismissSvg}</button></span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Disabled</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap">
      <span class="tag tag--default tag--disabled">Undergraduate</span>
      <span class="tag tag--default tag--disabled">September 2025</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-off-white)',    '--color-off-white',    'bg: off-white · color: charcoal-90 · border: 1px solid charcoal-20 · radius: radius-l'],
    ['Hover',      'var(--color-charcoal-10)',  '--color-charcoal-10',  'bg: charcoal-10 · interactive only · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',      'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-off-white)',    '--color-off-white',    'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-off-white)',    '--color-off-white',    '× button: 16px circle · rgba(0,0,0,0.12) bg · darkens to 0.24 on hover'],
    ['Disabled',   'var(--color-off-white)',    '--color-off-white',    'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;

// ── Brand Variant ──────────────────────────────────────────────────────────────
export const Brand = () => `
${tagStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Tag — Brand</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Forest green background with white text. Use for high-prominence labels: course type, featured content, and primary category indicators.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48)">

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Static — label use</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--brand">Undergraduate</span>
      <span class="tag tag--brand">Postgraduate</span>
      <span class="tag tag--brand">New 2025</span>
      <span class="tag tag--brand">Featured</span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Interactive — filter / clickable</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <button class="tag tag--brand tag--interactive"
        onmouseover="this.style.background='var(--color-action-primary-hover)'"
        onmouseout="this.style.background='var(--color-forest-green)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Undergraduate</button>
      <button class="tag tag--brand tag--interactive"
        onmouseover="this.style.background='var(--color-action-primary-hover)'"
        onmouseout="this.style.background='var(--color-forest-green)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Postgraduate</button>
      <button class="tag tag--brand tag--interactive"
        onmouseover="this.style.background='var(--color-action-primary-hover)'"
        onmouseout="this.style.background='var(--color-forest-green)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">MBA</button>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Dismissible — active filter</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--brand tag--dismissible">Undergraduate <button class="tag__dismiss" aria-label="Remove Undergraduate filter">${dismissSvg}</button></span>
      <span class="tag tag--brand tag--dismissible">Postgraduate <button class="tag__dismiss" aria-label="Remove Postgraduate filter">${dismissSvg}</button></span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">On dark background</p>
    <div style="background:var(--color-charcoal);border-radius:var(--radius-m);padding:var(--sp-24);display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap">
      <span class="tag tag--brand">Undergraduate</span>
      <span class="tag tag--brand">New 2025</span>
      <span class="tag tag--brand">Featured</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-forest-green)',        '--color-forest-green',        'bg: forest-green · color: white · border: transparent · radius: radius-l'],
    ['Hover',      'var(--color-action-primary-hover)','--color-action-primary-hover', 'bg: #004a3c · transition: var(--duration-fast) var(--ease-out) · interactive only'],
    ['Focus',      'var(--color-powdered-blue)',       '--color-powdered-blue',        'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-forest-green)',        '--color-forest-green',         'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-forest-green)',        '--color-forest-green',         '× button: rgba(255,255,255,0.2) bg · brightens to 0.35 on hover'],
    ['Disabled',   'var(--color-forest-green)',        '--color-forest-green',         'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;
