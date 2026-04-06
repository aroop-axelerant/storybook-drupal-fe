// Tag — Accent component documentation
import "../../main.scss";

export default {
  title: "Components/Tag/Accent",
};

const tagStyles = `<style>
  *,*::before,*::after{box-sizing:border-box}
  .tag{display:inline-flex;align-items:center;gap:var(--sp-4);font-family:var(--font-sans);font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:var(--sp-4) var(--sp-12);border-radius:var(--radius-l);border:1px solid transparent;white-space:nowrap;line-height:1;text-decoration:none;cursor:default;transition:background var(--duration-fast) var(--ease-out),opacity var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out)}
  .tag--interactive{cursor:pointer;outline:none}
  .tag--interactive:focus-visible{outline:2px solid var(--color-powdered-blue);outline-offset:3px}
  .tag--interactive:active{transform:scale(0.98)}
  /* Zingy Yellow */
  .tag--yellow{background:var(--color-zingy-yellow);color:var(--color-charcoal-90)}
  .tag--yellow.tag--interactive:hover{background:var(--color-zingy-yellow-50)}
  /* Violet */
  .tag--violet{background:var(--color-violet);color:var(--color-charcoal-90)}
  .tag--violet.tag--interactive:hover{background:#e8daf7}
  /* Peach */
  .tag--peach{background:var(--color-soft-peach-50);color:var(--color-charcoal-90)}
  .tag--peach.tag--interactive:hover{background:#ffc8b3}
  /* Disabled */
  .tag--disabled{opacity:var(--opacity-disabled,0.4);cursor:not-allowed;pointer-events:none}
  /* Dismissible */
  .tag--dismissible{padding-inline-end:var(--sp-8)}
  .tag__dismiss{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;background:rgba(0,0,0,0.1);border:none;padding:0;cursor:pointer;color:inherit;transition:background var(--duration-fast) var(--ease-out);flex-shrink:0}
  .tag__dismiss:hover{background:rgba(0,0,0,0.2)}
  .tag__dismiss:focus-visible{outline:2px solid var(--color-powdered-blue);outline-offset:2px}
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
          <div style="width:14px;height:14px;border-radius:var(--radius-l);background:${swatch};flex-shrink:0;border:1px solid rgba(0,0,0,0.08)"></div>
          <code style="font-size:11px;color:var(--color-text-secondary)">${token}</code>
        </div>
        <p style="font-size:11px;color:var(--color-text-tertiary);margin:0;line-height:1.5">${props}</p>
      </div>`).join('')}
  </div>`;

const dismissSvg = `<svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="1" y1="1" x2="9" y2="9"/><line x1="9" y1="1" x2="1" y2="9"/></svg>`;

// ── Zingy Yellow Variant ───────────────────────────────────────────────────────
export const ZingyYellow = () => `
${tagStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Tag — Zingy Yellow</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)"><code>--color-zingy-yellow</code> background with <code>--color-charcoal-90</code> text. Use for high-energy highlights, new features, and key callout labels. One accent tag per content cluster maximum.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48)">

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Static — label use</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--yellow">New 2025</span>
      <span class="tag tag--yellow">Featured</span>
      <span class="tag tag--yellow">Scholarship available</span>
      <span class="tag tag--yellow">Open Day</span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Interactive — filter / clickable</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <button class="tag tag--yellow tag--interactive"
        onmouseover="this.style.background='var(--color-zingy-yellow-50)'"
        onmouseout="this.style.background='var(--color-zingy-yellow)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">New 2025</button>
      <button class="tag tag--yellow tag--interactive"
        onmouseover="this.style.background='var(--color-zingy-yellow-50)'"
        onmouseout="this.style.background='var(--color-zingy-yellow)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Featured</button>
      <button class="tag tag--yellow tag--interactive"
        onmouseover="this.style.background='var(--color-zingy-yellow-50)'"
        onmouseout="this.style.background='var(--color-zingy-yellow)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Open Day</button>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Dismissible — active filter</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--yellow tag--dismissible">New 2025 <button class="tag__dismiss" aria-label="Remove New 2025 filter">${dismissSvg}</button></span>
      <span class="tag tag--yellow tag--dismissible">Featured <button class="tag__dismiss" aria-label="Remove Featured filter">${dismissSvg}</button></span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">On dark background</p>
    <div style="background:var(--color-charcoal);border-radius:var(--radius-m);padding:var(--sp-24);display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap">
      <span class="tag tag--yellow">New 2025</span>
      <span class="tag tag--yellow">Scholarship available</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'bg: zingy-yellow (#e0f94c) · color: charcoal-90 · border: transparent · radius: radius-l'],
    ['Hover',      'var(--color-zingy-yellow-50)', '--color-zingy-yellow-50', 'bg: zingy-yellow-50 (#f0fcab) · transition: var(--duration-fast) var(--ease-out) · interactive only'],
    ['Focus',      'var(--color-powdered-blue)',   '--color-powdered-blue',   'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-zingy-yellow)',    '--color-zingy-yellow',    '× button: rgba(0,0,0,0.1) bg · darkens to 0.2 on hover'],
    ['Disabled',   'var(--color-zingy-yellow)',    '--color-zingy-yellow',    'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;

// ── Violet Variant ─────────────────────────────────────────────────────────────
export const Violet = () => `
${tagStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Tag — Violet</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)"><code>--color-violet</code> background with <code>--color-charcoal-90</code> text. Use for editorial labels, journey cards, subject areas in arts and social sciences, and lifestyle content.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48)">

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Static — label use</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--violet">Arts &amp; Humanities</span>
      <span class="tag tag--violet">Postgraduate</span>
      <span class="tag tag--violet">Student Life</span>
      <span class="tag tag--violet">Research</span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Interactive — filter / clickable</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <button class="tag tag--violet tag--interactive"
        onmouseover="this.style.background='#e8daf7'"
        onmouseout="this.style.background='var(--color-violet)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Arts &amp; Humanities</button>
      <button class="tag tag--violet tag--interactive"
        onmouseover="this.style.background='#e8daf7'"
        onmouseout="this.style.background='var(--color-violet)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Student Life</button>
      <button class="tag tag--violet tag--interactive"
        onmouseover="this.style.background='#e8daf7'"
        onmouseout="this.style.background='var(--color-violet)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Research</button>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Dismissible — active filter</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--violet tag--dismissible">Arts &amp; Humanities <button class="tag__dismiss" aria-label="Remove Arts &amp; Humanities filter">${dismissSvg}</button></span>
      <span class="tag tag--violet tag--dismissible">Research <button class="tag__dismiss" aria-label="Remove Research filter">${dismissSvg}</button></span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Disabled</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap">
      <span class="tag tag--violet tag--disabled">Arts &amp; Humanities</span>
      <span class="tag tag--violet tag--disabled">Research</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-violet)', '--color-violet', 'bg: violet (#deccf3) · color: charcoal-90 · border: transparent · radius: radius-l'],
    ['Hover',      '#e8daf7',             'violet tint +8%', 'bg lightens · transition: var(--duration-fast) var(--ease-out) · interactive only'],
    ['Focus',      'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-violet)', '--color-violet',  'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-violet)', '--color-violet',  '× button: rgba(0,0,0,0.1) bg · darkens to 0.2 on hover'],
    ['Disabled',   'var(--color-violet)', '--color-violet',  'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;

// ── Peach Variant ──────────────────────────────────────────────────────────────
export const Peach = () => `
${tagStyles}
<div style="padding:var(--sp-48);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h1 style="font-size:var(--text-h3);margin-block-end:var(--sp-8)">Tag — Peach</h1>
  <p style="color:var(--color-text-secondary);margin-block-end:var(--sp-48)"><code>--color-soft-peach-50</code> background with <code>--color-charcoal-90</code> text. Use for warm editorial content, wellbeing topics, lifestyle categories, and community-focused labels.</p>

  <!-- Live component -->
  <div style="background:var(--color-white);border-radius:var(--radius-m);border:1px solid var(--color-border);padding:var(--sp-32);margin-block-end:var(--sp-48)">

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Static — label use</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--peach">Wellbeing</span>
      <span class="tag tag--peach">Community</span>
      <span class="tag tag--peach">Student Stories</span>
      <span class="tag tag--peach">Campus Life</span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Interactive — filter / clickable</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <button class="tag tag--peach tag--interactive"
        onmouseover="this.style.background='#ffc8b3'"
        onmouseout="this.style.background='var(--color-soft-peach-50)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Wellbeing</button>
      <button class="tag tag--peach tag--interactive"
        onmouseover="this.style.background='#ffc8b3'"
        onmouseout="this.style.background='var(--color-soft-peach-50)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Student Stories</button>
      <button class="tag tag--peach tag--interactive"
        onmouseover="this.style.background='#ffc8b3'"
        onmouseout="this.style.background='var(--color-soft-peach-50)';this.style.transform=''"
        onmousedown="this.style.transform='scale(0.98)'" onmouseup="this.style.transform=''">Campus Life</button>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Dismissible — active filter</p>
    <div style="display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap;margin-block-end:var(--sp-32)">
      <span class="tag tag--peach tag--dismissible">Wellbeing <button class="tag__dismiss" aria-label="Remove Wellbeing filter">${dismissSvg}</button></span>
      <span class="tag tag--peach tag--dismissible">Campus Life <button class="tag__dismiss" aria-label="Remove Campus Life filter">${dismissSvg}</button></span>
    </div>

    <p style="font-size:var(--text-small);font-weight:600;color:var(--color-text-secondary);margin:0 0 var(--sp-16)">Accent tags together — editorial combination</p>
    <div style="background:var(--color-off-white);border-radius:var(--radius-m);padding:var(--sp-24);display:flex;align-items:center;gap:var(--sp-12);flex-wrap:wrap">
      <span class="tag tag--yellow">New 2025</span>
      <span class="tag tag--violet">Arts &amp; Humanities</span>
      <span class="tag tag--peach">Student Stories</span>
    </div>

  </div>

  ${statesTable([
    ['Default',    'var(--color-soft-peach-50)', '--color-soft-peach-50', 'bg: soft-peach-50 (#ffd9c9) · color: charcoal-90 · border: transparent · radius: radius-l'],
    ['Hover',      '#ffc8b3',                   'peach tint +10%',        'bg deepens to #ffc8b3 · transition: var(--duration-fast) var(--ease-out) · interactive only'],
    ['Focus',      'var(--color-powdered-blue)', '--color-powdered-blue', 'outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible, interactive only)'],
    ['Active',     'var(--color-soft-peach-50)', '--color-soft-peach-50', 'transform: scale(0.98) · var(--duration-fast) var(--ease-out) · interactive only'],
    ['Dismissible','var(--color-soft-peach-50)', '--color-soft-peach-50', '× button: rgba(0,0,0,0.1) bg · darkens to 0.2 on hover'],
    ['Disabled',   'var(--color-soft-peach-50)', '--color-soft-peach-50', 'opacity: var(--opacity-disabled, 0.4) · cursor: not-allowed · pointer-events: none'],
  ])}
</div>`;
