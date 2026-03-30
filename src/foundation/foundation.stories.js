// Foundation token documentation for Storybook
// Imports the compiled CSS (Storybook build pipeline compiles scss/main.scss)
import "../../scss/main.scss";

export default {
  title: "Foundation/Design Tokens",
};

// ── Colors ────────────────────────────────────────────────────────────────────
export const Colors = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans)">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-24)">Color Tokens</h2>

  <h3 style="font-size:var(--text-label-m);text-transform:uppercase;letter-spacing:var(--ls-widest);margin-block-end:var(--sp-16);color:var(--color-text-secondary)">Brand</h3>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--sp-12);margin-block-end:var(--sp-32)">
    ${[
      ["--color-forest-green","Forest Green"],
      ["--color-zingy-yellow","Zingy Yellow"],
      ["--color-violet","Violet"],
      ["--color-soft-peach","Soft Peach"],
      ["--color-powdered-blue","Powdered Blue"],
      ["--color-charcoal","Charcoal"],
      ["--color-off-white","Off White"],
    ].map(([t,n]) => `
      <div>
        <div style="height:56px;border-radius:var(--radius-s);background:var(${t});border:1px solid var(--color-border)"></div>
        <code style="font-size:0.65rem;display:block;margin-top:var(--sp-4);color:var(--color-text-secondary)">${t}</code>
        <span style="font-size:0.7rem;color:var(--color-text-tertiary)">${n}</span>
      </div>`).join("")}
  </div>

  <h3 style="font-size:var(--text-label-m);text-transform:uppercase;letter-spacing:var(--ls-widest);margin-block-end:var(--sp-16);color:var(--color-text-secondary)">Charcoal Scale</h3>
  <div style="display:grid;grid-template-columns:repeat(9,1fr);gap:var(--sp-4);margin-block-end:var(--sp-32)">
    ${["90","80","70","60","50","40","30","20","10"].map(s => `
      <div>
        <div style="height:40px;background:var(--color-charcoal-${s})"></div>
        <code style="font-size:0.6rem;display:block;margin-top:var(--sp-4);text-align:center">-${s}</code>
      </div>`).join("")}
  </div>

  <h3 style="font-size:var(--text-label-m);text-transform:uppercase;letter-spacing:var(--ls-widest);margin-block-end:var(--sp-16);color:var(--color-text-secondary)">Semantic</h3>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--sp-12)">
    ${[
      ["--color-action","Action"],
      ["--color-action-hover","Action Hover"],
      ["--color-bg","Background"],
      ["--color-bg-surface","Surface"],
      ["--color-bg-dark","Dark"],
      ["--color-text","Text"],
      ["--color-text-secondary","Text Secondary"],
      ["--color-border","Border"],
      ["--color-border-focus","Border Focus"],
      ["--color-error","Error"],
      ["--color-success","Success"],
    ].map(([t,n]) => `
      <div>
        <div style="height:40px;border-radius:var(--radius-s);background:var(${t});border:1px solid var(--color-border)"></div>
        <code style="font-size:0.65rem;display:block;margin-top:var(--sp-4)">${t}</code>
        <span style="font-size:0.7rem;color:var(--color-text-tertiary)">${n}</span>
      </div>`).join("")}
  </div>
</div>
`;

// ── Typography ─────────────────────────────────────────────────────────────────
export const Typography = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);max-width:800px">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-24)">Typography Scale</h2>

  <h3 style="font-size:var(--text-label-m);text-transform:uppercase;letter-spacing:var(--ls-widest);color:var(--color-text-secondary);margin-block-end:var(--sp-16)">Display — Magnole Serif</h3>
  ${["2xl","xl","l","m","s"].map(s => `
    <p style="font-family:var(--font-serif);font-size:var(--text-display-${s});line-height:var(--lh-display-${s});color:var(--color-text);margin-block:0 var(--sp-8)">
      Display ${s.toUpperCase()}
    </p>`).join("")}

  <h3 style="font-size:var(--text-label-m);text-transform:uppercase;letter-spacing:var(--ls-widest);color:var(--color-text-secondary);margin-block:var(--sp-32) var(--sp-16)">Headings — Avenir Next</h3>
  ${["1","2","3","4","5","6"].map(n => `
    <p style="font-size:var(--text-h${n});line-height:var(--lh-h${n < 5 ? n : "4"});color:var(--color-text);margin-block:0 var(--sp-8)">
      Heading H${n}
    </p>`).join("")}

  <h3 style="font-size:var(--text-label-m);text-transform:uppercase;letter-spacing:var(--ls-widest);color:var(--color-text-secondary);margin-block:var(--sp-32) var(--sp-16)">Body — Avenir Next</h3>
  ${[["xl","Lead text"],["lg","Large body"],["","Default body"],["small","Small"],["caption","Caption"],["overline","Overline"]].map(([s,n]) => `
    <p style="font-size:var(--text-body${s ? "-"+s : ""});line-height:var(--lh-body);color:var(--color-text);margin-block:0 var(--sp-4)">
      ${n} — The quick brown fox jumps over the lazy dog
    </p>`).join("")}
</div>
`;

// ── Spacing ────────────────────────────────────────────────────────────────────
export const Spacing = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans)">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-24)">Spacing Scale</h2>
  ${["0","4","8","16","24","32","48","64","96"].map(s => `
    <div style="display:flex;align-items:center;gap:var(--sp-16);margin-block-end:var(--sp-8)">
      <div style="width:var(--sp-${s});height:24px;background:var(--color-action);border-radius:2px;flex-shrink:0;min-width:2px"></div>
      <code style="font-size:var(--text-small);color:var(--color-text-secondary)">--sp-${s} = ${s}px</code>
    </div>`).join("")}
</div>
`;

// ── Radius ─────────────────────────────────────────────────────────────────────
export const Radius = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans)">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-24)">Border Radius</h2>
  <div style="display:flex;gap:var(--sp-24);flex-wrap:wrap">
    ${[["xs","4px"],["s","8px"],["m","16px"],["l","pill"]].map(([k,v]) => `
      <div style="text-align:center">
        <div style="width:80px;height:80px;background:var(--color-action);border-radius:var(--radius-${k});display:flex;align-items:center;justify-content:center">
          <code style="font-size:0.6rem;color:var(--color-white)">--radius-${k}</code>
        </div>
        <span style="font-size:var(--text-small);color:var(--color-text-secondary);display:block;margin-top:var(--sp-8)">${v}</span>
      </div>`).join("")}
  </div>
</div>
`;

// ── Elevation ─────────────────────────────────────────────────────────────────
export const Elevation = () => `
<div style="padding:var(--sp-64);background:var(--color-bg);font-family:var(--font-sans)">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-32)">Elevation / Shadows</h2>
  <div style="display:flex;gap:var(--sp-32);flex-wrap:wrap;align-items:flex-end">
    ${[["sm","Subtle"],["md","Standard"],["lg","Prominent"]].map(([k,n]) => `
      <div style="background:var(--color-bg-surface);border-radius:var(--radius-s);padding:var(--sp-32);box-shadow:var(--shadow-${k});width:160px;text-align:center">
        <code style="font-size:var(--text-small);color:var(--color-text-secondary)">--shadow-${k}</code>
        <p style="font-size:var(--text-caption);color:var(--color-text-tertiary);margin-block-start:var(--sp-4)">${n}</p>
      </div>`).join("")}
  </div>
</div>
`;
