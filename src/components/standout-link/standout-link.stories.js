// Standout Link component documentation
import "../../main.scss";

export default {
  title: "Components/Link/Standout Link",
};

const focusStyle = '';

const arrowSvg = (color) => `
  <svg width="20" height="20" viewBox="0 0 24 24" style="stroke:${color};stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0;transition:transform 200ms ease-out,stroke 200ms ease-out">
    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
  </svg>`;

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Standout Link — Default</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Forest green on light backgrounds. Use for primary CTAs within standard content areas.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-24);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;min-height:80px">
    <a href="#"
      style="display:inline-flex;align-items:center;gap:var(--sp-8);color:var(--color-forest-green);font-weight:600;font-size:var(--text-body);text-decoration:none;cursor:pointer;border-radius:var(--radius-s);transition:opacity 200ms ease-out,transform var(--duration-fast) var(--ease-out)"
      onmouseover="this.style.opacity='var(--opacity-hover, 0.8)';this.querySelector('svg').style.transform='translateX(6px)'"
      onmouseout="this.style.opacity='1';this.style.transform='';this.querySelector('svg').style.transform='translateX(0)'"
      onmousedown="this.style.transform='scale(0.98)'"
      onmouseup="this.style.transform=''">
      Download prospectus
      ${arrowSvg('var(--color-forest-green)')}
    </a>
  </div>

  <!-- States table -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);overflow:hidden">
    <div style="display:grid;grid-template-columns:140px 1fr 1fr;padding:var(--sp-12) var(--sp-32);background:var(--color-charcoal-10);border-bottom:1px solid var(--color-border)">
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">State</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Color</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-text-secondary);margin:0">Properties</p>
    </div>
    ${[
      ['Default',        'var(--color-forest-green)',  '--color-forest-green',  'font-weight: 600 · gap: var(--sp-12) · no underline'],
      ['Hover',          'var(--color-forest-green)',  '--color-forest-green',  'opacity: var(--opacity-hover, 0.8) · arrow: translateX(6px) · WCAG AA compliant (≥4.5:1)'],
      ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
      ['Active/Pressed', 'var(--color-forest-green)',  '--color-forest-green',  'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
      ['Disabled',       'var(--color-charcoal-50)',   '--color-charcoal-50',   'opacity: 1 · cursor: not-allowed · pointer-events: none · contrast: 4.6:1 (WCAG AA)'],
    ].map(([state, swatch, token, props]) => `
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;padding:var(--sp-12) var(--sp-32);border-bottom:1px solid var(--color-border);align-items:center">
        <p style="font-size:var(--text-label-s);font-weight:600;color:var(--color-text-secondary);margin:0">${state}</p>
        <div style="display:flex;align-items:center;gap:var(--sp-8)">
          <div style="width:14px;height:14px;border-radius:var(--radius-s);background:${swatch};flex-shrink:0;border:1px solid rgba(0,0,0,0.1)"></div>
          <code style="font-size:11px;color:var(--color-text-secondary)">${token}</code>
        </div>
        <p style="font-size:11px;color:var(--color-text-tertiary);margin:0;line-height:1.5">${props}</p>
      </div>`).join('')}
  </div>
</div>
`;

// ── Inverse Variant ────────────────────────────────────────────────────────────
export const Inverse = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-charcoal);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8);color:var(--color-white)">Standout Link — Inverse</h1>
  <p style="color:var(--color-charcoal-30);margin-block-end:var(--sp-48)">Zingy yellow on dark backgrounds. Use for prominent CTAs on hero sections and dark content areas.</p>

  <!-- Live component -->
  <div style="background:var(--color-charcoal-90);border-radius:var(--radius-m);border:1px solid var(--color-charcoal-80);padding:var(--sp-24);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;min-height:80px">
    <a href="#"
      style="display:inline-flex;align-items:center;gap:var(--sp-8);color:var(--color-zingy-yellow);font-weight:600;font-size:var(--text-body);text-decoration:none;cursor:pointer;border-radius:var(--radius-s);transition:opacity 200ms ease-out,transform var(--duration-fast) var(--ease-out)"
      onmouseover="this.style.opacity='var(--opacity-hover, 0.8)';this.querySelector('svg').style.transform='translateX(6px)'"
      onmouseout="this.style.opacity='1';this.style.transform='';this.querySelector('svg').style.transform='translateX(0)'"
      onmousedown="this.style.transform='scale(0.98)'"
      onmouseup="this.style.transform=''">
      Explore Regent&#39;s Park campus
      ${arrowSvg('var(--color-zingy-yellow)')}
    </a>
  </div>

  <!-- States table -->
  <div style="background:var(--color-charcoal-90);border-radius:var(--radius-m);border:1px solid var(--color-charcoal-80);overflow:hidden">
    <div style="display:grid;grid-template-columns:140px 1fr 1fr;padding:var(--sp-12) var(--sp-32);background:var(--color-charcoal-80);border-bottom:1px solid var(--color-charcoal-70)">
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-charcoal-30);margin:0">State</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-charcoal-30);margin:0">Color</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:var(--color-charcoal-30);margin:0">Properties</p>
    </div>
    ${[
      ['Default',        'var(--color-zingy-yellow)',  '--color-zingy-yellow',  'font-weight: 600 · gap: var(--sp-12) · no underline'],
      ['Hover',          'var(--color-zingy-yellow)',  '--color-zingy-yellow',  'opacity: var(--opacity-hover, 0.8) · arrow: translateX(6px) · WCAG AA compliant (≥4.5:1)'],
      ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
      ['Active/Pressed', 'var(--color-zingy-yellow)',  '--color-zingy-yellow',  'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
      ['Disabled',       'var(--color-charcoal-40)',   '--color-charcoal-40',   'opacity: 1 · cursor: not-allowed · pointer-events: none · contrast: 5.1:1 (WCAG AA)'],
    ].map(([state, swatch, token, props]) => `
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;padding:var(--sp-12) var(--sp-32);border-bottom:1px solid var(--color-charcoal-80);align-items:center">
        <p style="font-size:var(--text-label-s);font-weight:600;color:var(--color-charcoal-30);margin:0">${state}</p>
        <div style="display:flex;align-items:center;gap:var(--sp-8)">
          <div style="width:14px;height:14px;border-radius:var(--radius-s);background:${swatch};flex-shrink:0;border:1px solid rgba(255,255,255,0.1)"></div>
          <code style="font-size:11px;color:var(--color-charcoal-40)">${token}</code>
        </div>
        <p style="font-size:11px;color:var(--color-charcoal-50);margin:0;line-height:1.5">${props}</p>
      </div>`).join('')}
  </div>
</div>
`;
