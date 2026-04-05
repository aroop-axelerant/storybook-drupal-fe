// Button component documentation
import "../../../scss/main.scss";

export default {
  title: "Components/Button",
};

// ── Shared helpers ─────────────────────────────────────────────────────────────
const iconSearch = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>`;
const iconArrow  = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
const iconPlus   = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;

// Base button style pieces
const focusStyle = `<style>button:focus-visible{outline:2px solid var(--color-powdered-blue)!important;outline-offset:4px!important}</style>`;
const base = `display:inline-flex;align-items:center;justify-content:center;gap:var(--sp-8);font-family:var(--font-sans);font-size:var(--text-body);font-weight:600;line-height:1;padding:var(--sp-12) var(--sp-24);border-radius:var(--radius-l);border:2px solid transparent;cursor:pointer;text-decoration:none;transition:background 200ms ease-out,color 200ms ease-out,border-color 200ms ease-out,opacity 200ms ease-out,transform var(--duration-fast) var(--ease-out);white-space:nowrap`;
const iconBase = `display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-sans);border:2px solid transparent;cursor:pointer;border-radius:var(--radius-l);padding:var(--sp-12);transition:background 200ms ease-out,color 200ms ease-out,border-color 200ms ease-out,opacity 200ms ease-out,transform var(--duration-fast) var(--ease-out)`;

// Hover/active handlers by style
const handlers = {
  primary:         `onmouseover="this.style.background='var(--color-forest-green-hover)'" onmouseout="this.style.background='var(--color-forest-green)';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''"`,
  primaryInverse:  `onmouseover="this.style.opacity='var(--opacity-hover,0.8)'" onmouseout="this.style.opacity='1';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''"`,
  secondary:       `onmouseover="this.style.background='var(--color-charcoal)';this.style.color='var(--color-white)'" onmouseout="this.style.background='var(--color-white)';this.style.color='var(--color-charcoal)';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''"`,
  secondaryInverse:`onmouseover="this.style.background='var(--color-white)';this.style.color='var(--color-charcoal)'" onmouseout="this.style.background='transparent';this.style.color='var(--color-white)';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''"`,
  ghost:           `onmouseover="this.style.background='rgba(0,91,75,0.08)'" onmouseout="this.style.background='transparent';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''"`,
  ghostInverse:    `onmouseover="this.style.background='rgba(224,249,76,0.12)'" onmouseout="this.style.background='transparent';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''"`,
};

// States table renderer
const statesTable = (rows, dark = false) => {
  const headerBg    = dark ? 'var(--color-charcoal-80)'  : 'var(--color-charcoal-10)';
  const headerBdr   = dark ? 'var(--color-charcoal-70)'  : 'var(--color-border)';
  const rowBdr      = dark ? 'var(--color-charcoal-80)'  : 'var(--color-border)';
  const labelColor  = dark ? 'var(--color-charcoal-30)'  : 'var(--color-text-secondary)';
  const propColor   = dark ? 'var(--color-charcoal-50)'  : 'var(--color-text-tertiary)';
  const tableBg     = dark ? 'var(--color-charcoal-90)'  : 'var(--color-white)';
  const tableBdr    = dark ? 'var(--color-charcoal-80)'  : 'var(--color-border)';
  const codeColor   = dark ? 'var(--color-charcoal-40)'  : 'var(--color-text-secondary)';

  return `
  <div style="background:${tableBg};border-radius:var(--radius-m);border:1px solid ${tableBdr};overflow:hidden">
    <div style="display:grid;grid-template-columns:140px 1fr 1fr;padding:var(--sp-12) var(--sp-32);background:${headerBg};border-bottom:1px solid ${headerBdr}">
      <p style="font-size:var(--text-label-s);font-weight:700;color:${labelColor};margin:0">State</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:${labelColor};margin:0">Color</p>
      <p style="font-size:var(--text-label-s);font-weight:700;color:${labelColor};margin:0">Properties</p>
    </div>
    ${rows.map(([state, swatch, token, props]) => `
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;padding:var(--sp-12) var(--sp-32);border-bottom:1px solid ${rowBdr};align-items:center">
        <p style="font-size:var(--text-label-s);font-weight:600;color:${labelColor};margin:0">${state}</p>
        <div style="display:flex;align-items:center;gap:var(--sp-8)">
          <div style="width:14px;height:14px;border-radius:var(--radius-s);background:${swatch};flex-shrink:0;border:1px solid rgba(128,128,128,0.2)"></div>
          <code style="font-size:11px;color:${codeColor}">${token}</code>
        </div>
        <p style="font-size:11px;color:${propColor};margin:0;line-height:1.5">${props}</p>
      </div>`).join('')}
  </div>`;
};

// ── 1. Primary ─────────────────────────────────────────────────────────────────
export const Primary = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Button — Primary</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Highest visual weight. Use for the single most important action on a page.</p>

  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px;flex-wrap:wrap">
    <button style="${base};background:var(--color-forest-green);color:var(--color-white)" ${handlers.primary}>Book Open Day</button>
    <button style="${base};background:var(--color-forest-green);color:var(--color-white)" ${handlers.primary}>Apply Now ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)',       '--color-forest-green',       'background: forest-green · color: white · border: transparent'],
    ['Hover',          'var(--color-forest-green-hover)', '--color-forest-green-hover',  'background darkens · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)',      '--color-powdered-blue',       'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)',       '--color-forest-green',        'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)',        '--color-charcoal-30',         'background: charcoal-30 · color: white · cursor: not-allowed · contrast: WCAG AA'],
  ])}
</div>`;

// ── 2. Primary Inverse ─────────────────────────────────────────────────────────
export const PrimaryInverse = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-charcoal);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8);color:var(--color-white)">Button — Primary Inverse</h1>
  <p style="color:var(--color-charcoal-30);margin-block-end:var(--sp-48)">Highest visual weight on dark backgrounds. Use on hero sections and dark panels.</p>

  <div style="background:var(--color-charcoal-90);border-radius:var(--radius-m);border:1px solid var(--color-charcoal-80);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px;flex-wrap:wrap">
    <button style="${base};background:var(--color-zingy-yellow);color:var(--color-charcoal)" ${handlers.primaryInverse}>Book Open Day</button>
    <button style="${base};background:var(--color-zingy-yellow);color:var(--color-charcoal)" ${handlers.primaryInverse}>Apply Now ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-zingy-yellow)',       '--color-zingy-yellow',        'background: zingy-yellow · color: charcoal · border: transparent'],
    ['Hover',          'var(--color-zingy-yellow)',       '--color-zingy-yellow',        'opacity: var(--opacity-hover, 0.8) · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)',      '--color-powdered-blue',       'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-zingy-yellow)',       '--color-zingy-yellow',        'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-50)',        '--color-charcoal-50',         'background: charcoal-50 · color: charcoal-90 · cursor: not-allowed · contrast: WCAG AA'],
  ], true)}
</div>`;

// ── 3. Secondary ───────────────────────────────────────────────────────────────
export const Secondary = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Button — Secondary</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Medium visual weight. Use alongside a Primary button for supporting actions.</p>

  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px;flex-wrap:wrap">
    <button style="${base};background:var(--color-white);color:var(--color-charcoal);border-color:var(--color-charcoal)" ${handlers.secondary}>Learn More</button>
    <button style="${base};background:var(--color-white);color:var(--color-charcoal);border-color:var(--color-charcoal)" ${handlers.secondary}>View Course ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-charcoal)',    '--color-charcoal',    'background: white · color: charcoal · border: 2px solid charcoal'],
    ['Hover',          'var(--color-charcoal)',    '--color-charcoal',    'background fills charcoal · color: white · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-charcoal)',    '--color-charcoal',    'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)', '--color-charcoal-30', 'border: charcoal-30 · color: charcoal-30 · cursor: not-allowed · contrast: WCAG AA'],
  ])}
</div>`;

// ── 4. Secondary Inverse ───────────────────────────────────────────────────────
export const SecondaryInverse = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-charcoal);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8);color:var(--color-white)">Button — Secondary Inverse</h1>
  <p style="color:var(--color-charcoal-30);margin-block-end:var(--sp-48)">Medium visual weight on dark backgrounds. Use alongside Primary Inverse for supporting actions.</p>

  <div style="background:var(--color-charcoal-90);border-radius:var(--radius-m);border:1px solid var(--color-charcoal-80);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px;flex-wrap:wrap">
    <button style="${base};background:transparent;color:var(--color-white);border-color:var(--color-white)" ${handlers.secondaryInverse}>Learn More</button>
    <button style="${base};background:transparent;color:var(--color-white);border-color:var(--color-white)" ${handlers.secondaryInverse}>View Course ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-white)', '--color-white', 'background: transparent · color: white · border: 2px solid white'],
    ['Hover',          'var(--color-white)', '--color-white', 'background fills white · color: charcoal · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-white)', '--color-white', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-40)', '--color-charcoal-40', 'border: charcoal-40 · color: charcoal-40 · cursor: not-allowed · contrast: WCAG AA'],
  ], true)}
</div>`;

// ── 5. Ghost ───────────────────────────────────────────────────────────────────
export const Ghost = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Button — Ghost</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Lowest visual weight on light backgrounds. Use for tertiary or inline actions where minimal visual impact is needed.</p>

  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px;flex-wrap:wrap">
    <button style="${base};background:transparent;color:var(--color-forest-green);border-color:transparent" ${handlers.ghost}>Cancel</button>
    <button style="${base};background:transparent;color:var(--color-forest-green);border-color:transparent" ${handlers.ghost}>Skip for now ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)', '--color-forest-green', 'background: transparent · color: forest-green · no border'],
    ['Hover',          'var(--color-forest-green)', '--color-forest-green', 'background: forest-green at 8% opacity · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)', '--color-forest-green', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-50)',  '--color-charcoal-50',  'color: charcoal-50 · cursor: not-allowed · contrast: 4.6:1 (WCAG AA)'],
  ])}
</div>`;

// ── 6. Ghost Inverse ───────────────────────────────────────────────────────────
export const GhostInverse = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-charcoal);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8);color:var(--color-white)">Button — Ghost Inverse</h1>
  <p style="color:var(--color-charcoal-30);margin-block-end:var(--sp-48)">Lowest visual weight on dark backgrounds. Use for tertiary actions on hero sections and dark panels.</p>

  <div style="background:var(--color-charcoal-90);border-radius:var(--radius-m);border:1px solid var(--color-charcoal-80);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px;flex-wrap:wrap">
    <button style="${base};background:transparent;color:var(--color-zingy-yellow);border-color:transparent" ${handlers.ghostInverse}>Cancel</button>
    <button style="${base};background:transparent;color:var(--color-zingy-yellow);border-color:transparent" ${handlers.ghostInverse}>Skip for now ${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-zingy-yellow)', '--color-zingy-yellow', 'background: transparent · color: zingy-yellow · no border'],
    ['Hover',          'var(--color-zingy-yellow)', '--color-zingy-yellow', 'background: zingy-yellow at 12% opacity · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-zingy-yellow)', '--color-zingy-yellow', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-40)',  '--color-charcoal-40',  'color: charcoal-40 · cursor: not-allowed · contrast: 5.1:1 (WCAG AA)'],
  ], true)}
</div>`;

// ── 7. Icon Fill ───────────────────────────────────────────────────────────────
export const IconFill = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Button — Icon Fill</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Icon-only button. Filled style matches Primary variant — forest green background. Always include a visually hidden label or aria-label for accessibility.</p>

  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px">
    <button aria-label="Search" style="${iconBase};background:var(--color-forest-green);color:var(--color-white)" ${handlers.primary}>${iconSearch}</button>
    <button aria-label="Add" style="${iconBase};background:var(--color-forest-green);color:var(--color-white)" ${handlers.primary}>${iconPlus}</button>
    <button aria-label="Next" style="${iconBase};background:var(--color-forest-green);color:var(--color-white)" ${handlers.primary}>${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)',       '--color-forest-green',       'background: forest-green · color: white · padding: var(--sp-12) · border-radius: var(--radius-l)'],
    ['Hover',          'var(--color-forest-green-hover)', '--color-forest-green-hover',  'background darkens · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)',      '--color-powdered-blue',       'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)',       '--color-forest-green',        'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)',        '--color-charcoal-30',         'background: charcoal-30 · cursor: not-allowed · aria-disabled: true'],
  ])}
</div>`;

// ── 8. Icon Fill Inverse ───────────────────────────────────────────────────────
export const IconFillInverse = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-charcoal);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8);color:var(--color-white)">Button — Icon Fill Inverse</h1>
  <p style="color:var(--color-charcoal-30);margin-block-end:var(--sp-48)">Icon-only button for use on dark backgrounds. Zingy yellow background with charcoal icon — high contrast, brand-forward. Always include aria-label for accessibility.</p>

  <div style="background:var(--color-charcoal-90);border-radius:var(--radius-m);border:1px solid rgba(255,255,255,0.08);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px">
    <button aria-label="Search" style="${iconBase};background:var(--color-zingy-yellow);color:var(--color-charcoal)" onmouseover="this.style.background='var(--color-zingy-yellow-50)'" onmouseout="this.style.background='var(--color-zingy-yellow)';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">${iconSearch}</button>
    <button aria-label="Add" style="${iconBase};background:var(--color-zingy-yellow);color:var(--color-charcoal)" onmouseover="this.style.background='var(--color-zingy-yellow-50)'" onmouseout="this.style.background='var(--color-zingy-yellow)';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">${iconPlus}</button>
    <button aria-label="Next" style="${iconBase};background:var(--color-zingy-yellow);color:var(--color-charcoal)" onmouseover="this.style.background='var(--color-zingy-yellow-50)'" onmouseout="this.style.background='var(--color-zingy-yellow)';this.style.transform=''" onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'background: zingy-yellow · color: charcoal · padding: var(--sp-12) · border-radius: var(--radius-l)'],
    ['Hover',          'var(--color-zingy-yellow-50)', '--color-zingy-yellow-50', 'background lightens to zingy-yellow-50 · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)',   '--color-powdered-blue',   'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)',     '--color-charcoal-30',     'background: charcoal-30 · cursor: not-allowed · aria-disabled: true'],
  ], true)}
</div>`;

IconFillInverse.storyName = 'Icon Fill Inverse';

// ── 9. Icon Outline ────────────────────────────────────────────────────────────
export const IconOutline = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Button — Icon Outline</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Icon-only button. Outline style matches Secondary variant — charcoal border, fills on hover. Always include aria-label for accessibility.</p>

  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px">
    <button aria-label="Search" style="${iconBase};background:var(--color-white);color:var(--color-charcoal);border-color:var(--color-charcoal)" ${handlers.secondary}>${iconSearch}</button>
    <button aria-label="Add" style="${iconBase};background:var(--color-white);color:var(--color-charcoal);border-color:var(--color-charcoal)" ${handlers.secondary}>${iconPlus}</button>
    <button aria-label="Next" style="${iconBase};background:var(--color-white);color:var(--color-charcoal);border-color:var(--color-charcoal)" ${handlers.secondary}>${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-charcoal)', '--color-charcoal', 'background: white · color: charcoal · border: 2px solid charcoal · padding: var(--sp-12) · border-radius: var(--radius-l)'],
    ['Hover',          'var(--color-charcoal)', '--color-charcoal', 'background fills charcoal · color: white · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-charcoal)', '--color-charcoal', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-30)', '--color-charcoal-30', 'border: charcoal-30 · color: charcoal-30 · cursor: not-allowed · WCAG AA'],
  ])}
</div>`;

// ── 9. Icon Ghost ──────────────────────────────────────────────────────────────
export const IconGhost = () => `
${focusStyle}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Button — Icon Ghost</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Icon-only button. Ghost style — no background or border at rest, subtle fill on hover. Use for low-priority icon actions like close, filter, or collapse. Always include aria-label for accessibility.</p>

  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48);display:flex;align-items:center;justify-content:center;gap:var(--sp-24);min-height:100px">
    <button aria-label="Search" style="${iconBase};background:transparent;color:var(--color-forest-green)" ${handlers.ghost}>${iconSearch}</button>
    <button aria-label="Add" style="${iconBase};background:transparent;color:var(--color-forest-green)" ${handlers.ghost}>${iconPlus}</button>
    <button aria-label="Next" style="${iconBase};background:transparent;color:var(--color-forest-green)" ${handlers.ghost}>${iconArrow}</button>
  </div>

  ${statesTable([
    ['Default',        'var(--color-forest-green)', '--color-forest-green', 'background: transparent · color: forest-green · no border · padding: var(--sp-12) · border-radius: var(--radius-l)'],
    ['Hover',          'var(--color-forest-green)', '--color-forest-green', 'background: forest-green at 8% opacity · transition: 200ms ease-out'],
    ['Focus',          'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
    ['Active/Pressed', 'var(--color-forest-green)', '--color-forest-green', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · tactile press feedback'],
    ['Disabled',       'var(--color-charcoal-50)',  '--color-charcoal-50',  'color: charcoal-50 · cursor: not-allowed · contrast: 4.6:1 (WCAG AA)'],
  ])}
</div>`;
