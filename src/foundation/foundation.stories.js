// Foundation token documentation for Storybook
// Imports the compiled CSS (Storybook build pipeline compiles src/main.scss)
import "../main.scss";

export default {
  title: "Foundation/Design Tokens",
};

// ── Colors ────────────────────────────────────────────────────────────────────
const colorCard = (token, name, hex) => `
  <div style="background:var(--color-white);border-radius:var(--radius-m);overflow:hidden;box-shadow:var(--shadow-sm)">
    <div style="height:80px;background:var(${token});border-bottom:1px solid var(--color-border)"></div>
    <div style="padding:var(--sp-4) var(--sp-8)">
      <strong style="font-size:0.75rem;display:block;margin-block-end:var(--sp-4)">${name}</strong>
      <code style="font-size:0.65rem;color:var(--color-text-secondary);display:block">${token}</code>
      <span style="font-size:0.65rem;color:var(--color-text-tertiary)">${hex}</span>
    </div>
  </div>`;

export const Colors = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh;max-width:1200px;margin:0 auto">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-32)">Color Tokens</h2>

  <h3 style="font-size:var(--text-h4);font-weight:600;margin-block-end:var(--sp-16)">Neutrals</h3>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:var(--sp-16);margin-block-end:var(--sp-40)">
    ${colorCard("--color-white",        "White",          "#ffffff")}
    ${colorCard("--color-off-white",    "Off White",      "#f9f2e8")}
    ${colorCard("--color-charcoal",     "Charcoal Black", "#0b191a")}
  </div>

  <h3 style="font-size:var(--text-h4);font-weight:600;margin-block-end:var(--sp-16)">Monochrome Scale</h3>
  <div style="display:grid;grid-template-columns:repeat(9,1fr);gap:var(--sp-4);margin-block-end:var(--sp-40)">
    ${["10","20","30","40","50","60","70","80","90"].map(s => `
      <div>
        <div style="height:56px;background:var(--color-charcoal-${s})"></div>
        <span style="font-size:0.65rem;display:block;text-align:center;margin-top:var(--sp-4);color:var(--color-text-secondary)">${s}</span>
      </div>`).join("")}
  </div>

  <h3 style="font-size:var(--text-h4);font-weight:600;margin-block-end:var(--sp-16)">Youthful Brights</h3>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:var(--sp-16);margin-block-end:var(--sp-40)">
    ${colorCard("--color-zingy-yellow",    "Zingy Yellow",    "#e0f94c")}
    ${colorCard("--color-zingy-yellow-50", "Zingy Yellow 50", "#f0fcab")}
    ${colorCard("--color-violet",          "Violet",          "#deccf3")}
    ${colorCard("--color-soft-peach",      "Soft Peach",      "#ffb38f")}
    ${colorCard("--color-soft-peach-50",   "Soft Peach 50",   "#ffd9c9")}
  </div>

  <h3 style="font-size:var(--text-h4);font-weight:600;margin-block-end:var(--sp-16)">Legacy Palette</h3>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:var(--sp-16);margin-block-end:var(--sp-40)">
    ${colorCard("--color-forest-green",     "Forest Green",     "#005b4b")}
    ${colorCard("--color-powdered-blue",    "Powdered Blue",    "#46adeb")}
    ${colorCard("--color-powdered-blue-50", "Powdered Blue 50", "#abd6f5")}
    ${colorCard("--color-deep-red",         "Deep Red",         "#851811")}
    ${colorCard("--color-deep-red-50",      "Deep Red 50",      "#caa4a4")}
  </div>

  <h3 style="font-size:var(--text-h4);font-weight:600;margin-block-end:var(--sp-16)">Semantic Color Map</h3>
  <table style="width:100%;border-collapse:collapse">
    <thead>
      <tr style="border-bottom:2px solid var(--color-border)">
        <th style="padding:var(--sp-8) 0;text-align:left;font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary);width:40px"></th>
        <th style="padding:var(--sp-8) 0;text-align:left;font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary)">Token</th>
        <th style="padding:var(--sp-8) 0;text-align:left;font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary)">Resolves To</th>
        <th style="padding:var(--sp-8) 0;text-align:left;font-size:0.65rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--color-text-secondary)">Usage</th>
      </tr>
    </thead>
    <tbody>
      ${[
        ["--color-bg",                   "--color-off-white",       "Page background"],
        ["--color-bg-surface",           "--color-white",           "Card / panel surfaces"],
        ["--color-bg-dark",              "--color-charcoal",        "Dark section backgrounds"],
        ["--color-bg-accent",            "--color-zingy-yellow",    "Accent / highlight bg"],
        ["--color-bg-brand",             "--color-forest-green",    "Brand section bg"],
        ["--color-bg-zingy-light",       "--color-zingy-yellow-50", "Youthful Brights \u2013 subtle highlight \u00b7 journey cards, feature panels"],
        ["--color-bg-violet",            "--color-violet",          "Youthful Brights \u2013 violet accent \u00b7 journey cards, chips"],
        ["--color-bg-peach",             "--color-soft-peach-50",   "Youthful Brights \u2013 warm peach accent \u00b7 journey cards"],
        ["--color-text",                 "--color-charcoal",        "Primary body text"],
        ["--color-text-secondary",       "--color-charcoal-60",     "Secondary / metadata text"],
        ["--color-text-inverted",        "--color-white",           "Text on dark backgrounds"],
        ["--color-text-brand",           "--color-forest-green",    "Brand accent text / links"],
        ["--color-action-primary",       "--color-forest-green",    "Primary buttons, checked inputs, active tabs"],
        ["--color-action-primary-hover", "#004a3c",                 "Primary action hover state"],
        ["--color-border",               "--color-charcoal-20",     "Default borders / dividers"],
        ["--color-border-focus",         "--color-zingy-yellow",    "Focus ring / outline"],
        ["--color-error",                "#d63b3b",                 "Error states"],
      ].map(([token, resolves, usage]) => `
        <tr style="border-bottom:1px solid var(--color-border)">
          <td style="padding:var(--sp-8) 0">
            <div style="width:32px;height:32px;border-radius:var(--radius-s);background:var(${token});border:1px solid var(--color-border);flex-shrink:0"></div>
          </td>
          <td style="padding:var(--sp-8) var(--sp-16);background:none"><code style="font-size:0.75rem">${token}</code></td>
          <td style="padding:var(--sp-8) var(--sp-16);background:none"><code style="font-size:0.75rem;color:var(--color-text-secondary)">${resolves}</code></td>
          <td style="padding:var(--sp-8) var(--sp-16);font-size:0.8rem;color:var(--color-text);background:none">${usage}</td>
        </tr>`).join("")}
    </tbody>
  </table>
</div>
`;

// ── Gradients ──────────────────────────────────────────────────────────────────
export const Gradients = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-32)">Gradient Tokens</h2>
  <div style="display:grid;gap:var(--sp-48)">
    <!-- Editorial & Hero Gradients -->
    <section style="display:grid;gap:var(--sp-16)">
      <h3 style="font-size:var(--text-h4);margin:0">Editorial & Hero Gradients</h3>
      <div style="display:grid;gap:var(--sp-16)">
        ${[
          ["editorial","Hero Image Section","violet → soft-peach → forest-green · 100deg","Vibrant multi-color gradient for hero sections, featured images, and high-impact backgrounds"],
          ["hero-dark","Overlay Hero Background","charcoal-90 → charcoal-70 · 135deg","Dark overlay gradient for text legibility over hero images, creating depth and visual hierarchy"]
        ].map(([k,title,colors,usage]) => `
          <div style="display:grid;grid-template-columns:150px 1fr 1fr;gap:var(--sp-16);align-items:center">
            <code style="font-size:var(--text-label-s);color:var(--color-text-secondary);word-break:break-word">--gradient-${k}</code>
            <div style="background:var(--gradient-${k});border-radius:var(--radius-m);padding:var(--sp-32);height:80px;box-shadow:var(--shadow-sm)"></div>
            <div style="font-size:11px;line-height:1.5">
              <p style="color:var(--color-text);font-weight:500;margin:0;margin-block-end:var(--sp-4)">${title}</p>
              <p style="color:var(--color-text-secondary);margin:0;margin-block-end:var(--sp-4)">${colors}</p>
              <p style="color:var(--color-text-tertiary);margin:0;line-height:1.4">${usage}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Accent & Section Gradients -->
    <section style="display:grid;gap:var(--sp-16)">
      <h3 style="font-size:var(--text-h4);margin:0">Accent & Section Gradients</h3>
      <div style="display:grid;gap:var(--sp-16)">
        ${[
          ["accent","Section Accents","violet → soft-peach-50 · 180deg","Subtle purple-to-pink gradient for section backgrounds, preview cards, and gentle accent areas"],
          ["warm","Warm Editorial Moments","soft-peach-50 → soft-peach · 135deg","Warm peachy gradient for editorial content, highlight sections, and warm-toned feature areas"]
        ].map(([k,title,colors,usage]) => `
          <div style="display:grid;grid-template-columns:150px 1fr 1fr;gap:var(--sp-16);align-items:center">
            <code style="font-size:var(--text-label-s);color:var(--color-text-secondary);word-break:break-word">--gradient-${k}</code>
            <div style="background:var(--gradient-${k});border-radius:var(--radius-m);padding:var(--sp-32);height:80px;box-shadow:var(--shadow-sm)"></div>
            <div style="font-size:11px;line-height:1.5">
              <p style="color:var(--color-text);font-weight:500;margin:0;margin-block-end:var(--sp-4)">${title}</p>
              <p style="color:var(--color-text-secondary);margin:0;margin-block-end:var(--sp-4)">${colors}</p>
              <p style="color:var(--color-text-tertiary);margin:0;line-height:1.4">${usage}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Brand & Utility Gradients -->
    <section style="display:grid;gap:var(--sp-16)">
      <h3 style="font-size:var(--text-h4);margin:0">Brand & Utility Gradients</h3>
      <div style="display:grid;gap:var(--sp-16)">
        ${[
          ["ocean","Brand Heritage","forest-green → powdered-blue · 135deg","Brand-aligned gradient combining primary and secondary colors for international messaging and heritage content"],
          ["neutral","Utility & Placeholders","charcoal-10 → charcoal-20 · 135deg","Subtle neutral gradient for image placeholders, skeleton loaders, and light-touch background elements"]
        ].map(([k,title,colors,usage]) => `
          <div style="display:grid;grid-template-columns:150px 1fr 1fr;gap:var(--sp-16);align-items:center">
            <code style="font-size:var(--text-label-s);color:var(--color-text-secondary);word-break:break-word">--gradient-${k}</code>
            <div style="background:var(--gradient-${k});border-radius:var(--radius-m);padding:var(--sp-32);height:80px;box-shadow:var(--shadow-sm)"></div>
            <div style="font-size:11px;line-height:1.5">
              <p style="color:var(--color-text);font-weight:500;margin:0;margin-block-end:var(--sp-4)">${title}</p>
              <p style="color:var(--color-text-secondary);margin:0;margin-block-end:var(--sp-4)">${colors}</p>
              <p style="color:var(--color-text-tertiary);margin:0;line-height:1.4">${usage}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  </div>
</div>
`;

// ── Typography ─────────────────────────────────────────────────────────────────
export const Typography = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh;max-width:1400px;margin:0 auto">
  <h1 style="font-size:var(--text-h2);margin-block-end:var(--sp-8)">Typography</h1>
  <p style="font-size:var(--text-body-lg);color:var(--color-text-secondary);margin-block-end:var(--sp-48)">Complete typography scale with responsive breakpoints. Display: Magnole Serif · Headings & Body: Avenir Next Sans</p>

  <!-- Display Sizes – Magnole Serif, Weight 400 -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h3);padding-block-end:var(--sp-16);border-bottom:2px solid var(--color-border);margin-block-end:var(--sp-24)">Display — Magnole Serif, Weight 400</h2>
    <div style="display:grid;gap:var(--sp-24)">
      ${[["2xl","d-2xl","96px","1.0","-0.03em"],["xl","d-xl","80px","1.05","-0.03em"],["l","d-l","64px","1.1","-0.02em"],["m","d-m","48px","1.15","-0.02em"],["s","d-s","40px","1.2","-0.01em"]].map(([s,token,px,lh,ls]) => `
        <div style="background:var(--color-white);padding:var(--sp-24);border-radius:var(--radius-m)">
          <p style="font-family:var(--font-serif);font-size:var(--text-display-${s});line-height:var(--lh-display-${s});letter-spacing:var(--ls-display-${s});color:var(--color-text);margin:0;margin-block-end:var(--sp-16)">
            Display ${s.toUpperCase()}
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:var(--sp-12);font-size:var(--text-label-s);color:var(--color-text-secondary)">
            <span><strong>Token:</strong> <code>${token}</code></span>
            <span><strong>Size:</strong> ${px}</span>
            <span><strong>LH:</strong> ${lh}</span>
            <span><strong>LS:</strong> ${ls}</span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Headings – Avenir Next Sans, Weight 500 (600 for H6) -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h3);padding-block-end:var(--sp-16);border-bottom:2px solid var(--color-border);margin-block-end:var(--sp-24)">Headings — Avenir Next Sans</h2>
    <div style="display:grid;gap:var(--sp-24)">
      ${[["1","h1","40px","1.2","-0.01em","500"],["2","h2","32px","1.25","-0.01em","500"],["3","h3","24px","1.3","0em","500"],["4","h4","20px","1.4","0em","500"],["5","h5","16px","1.5","+0.01em","500"],["6","h6","13px","1.5","+0.06em","600"]].map(([n,token,px,lh,ls,fw]) => `
        <div style="background:var(--color-white);padding:var(--sp-24);border-radius:var(--radius-m)">
          <h${n} style="font-size:var(--text-h${n});line-height:var(--lh-h${n});letter-spacing:var(--ls-h${n});font-weight:${fw};color:var(--color-text);margin:0;margin-block-end:var(--sp-16)">
            Heading H${n} ${n === '6' ? '(UPPERCASE)' : ''}
          </h${n}>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:var(--sp-12);font-size:var(--text-label-s);color:var(--color-text-secondary)">
            <span><strong>Token:</strong> <code>${token}</code></span>
            <span><strong>Size:</strong> ${px}</span>
            <span><strong>Weight:</strong> ${fw}</span>
            <span><strong>LH:</strong> ${lh}</span>
            <span><strong>LS:</strong> ${ls}</span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Body Text – Avenir Next Sans, Weight 400 -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h3);padding-block-end:var(--sp-16);border-bottom:2px solid var(--color-border);margin-block-end:var(--sp-24)">Body Text — Avenir Next Sans, Weight 400</h2>
    <div style="display:grid;gap:var(--sp-24);max-width:700px">
      ${[["body-xl","Subtitle / Lead","28px","1.75","0em"],["body-lg","Large Body","18px","1.7","0em"],["body","Body (Default)","16px","1.65","0em"],["body-sm","Small","14px","1.6","0em"],["body-xs","Caption","12px","1.5","+0.01em"]].map(([token,name,px,lh,ls]) => `
        <div style="background:var(--color-white);padding:var(--sp-24);border-radius:var(--radius-m)">
          <p style="font-size:var(--text-${token});line-height:var(--lh-${token});letter-spacing:var(--ls-${token});color:var(--color-text);margin:0;margin-block-end:var(--sp-16)">
            ${name} — An internationally recognised private university in the heart of London's Regent's Park.
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:var(--sp-12);font-size:var(--text-label-s);color:var(--color-text-secondary)">
            <span><strong>Token:</strong> <code>--text-${token}</code></span>
            <span><strong>Size:</strong> ${px}</span>
            <span><strong>LH:</strong> ${lh}</span>
            <span><strong>LS:</strong> ${ls}</span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Pull Quote – Magnole Serif Italic, Weight 400 -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h3);padding-block-end:var(--sp-16);border-bottom:2px solid var(--color-border);margin-block-end:var(--sp-24)">Pull Quote — Magnole Serif Italic, Weight 400</h2>
    <div style="display:grid;gap:var(--sp-24);max-width:700px">
      ${[["quote-l","Large Quote","28px","1.55","-0.01em"],["quote-m","Medium Quote","22px","1.55","-0.01em"]].map(([token,name,px,lh,ls]) => `
        <div style="background:var(--color-white);padding:var(--sp-24);border-radius:var(--radius-m)">
          <p style="font-family:var(--font-serif);font-style:italic;font-size:var(--text-${token});line-height:var(--lh-${token});letter-spacing:var(--ls-${token});color:var(--color-text);margin:0;margin-block-end:var(--sp-16)">
            "Regent's gave me the confidence to lead globally."
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:var(--sp-12);font-size:var(--text-label-s);color:var(--color-text-secondary)">
            <span><strong>Token:</strong> <code>--text-${token}</code></span>
            <span><strong>Size:</strong> ${px}</span>
            <span><strong>LH:</strong> ${lh}</span>
            <span><strong>LS:</strong> ${ls}</span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- UI Typography – Avenir Next Sans -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h3);padding-block-end:var(--sp-16);border-bottom:2px solid var(--color-border);margin-block-end:var(--sp-24)">UI & Functional — Avenir Next Sans</h2>
    <div style="display:grid;gap:var(--sp-24);max-width:700px">
      ${[["overline","Overline","11px","1.0","+0.10em","600"],["label-l","Label Large","16px","1.0","0em","500"],["label-m","Label Medium","14px","1.0","0em","500"],["label-s","Label Small","12px","1.0","+0.01em","500"]].map(([token,name,px,lh,ls,fw]) => `
        <div style="background:var(--color-white);padding:var(--sp-24);border-radius:var(--radius-m)">
          <p style="font-size:var(--text-${token});line-height:var(--lh-${token});letter-spacing:var(--ls-${token});font-weight:${fw};color:var(--color-text);margin:0;margin-block-end:var(--sp-16);${token === 'overline' ? 'text-transform:uppercase' : ''}">
            ${token === 'overline' ? 'Overline' : name}
          </p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:var(--sp-12);font-size:var(--text-label-s);color:var(--color-text-secondary)">
            <span><strong>Token:</strong> <code>--text-${token}</code></span>
            <span><strong>Size:</strong> ${px}</span>
            <span><strong>Weight:</strong> ${fw}</span>
            <span><strong>LH:</strong> ${lh}</span>
            <span><strong>LS:</strong> ${ls}</span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Responsive Scale Reference -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h3);padding-block-end:var(--sp-16);border-bottom:2px solid var(--color-border);margin-block-end:var(--sp-24)">Responsive Scale Reference</h2>
    <div style="overflow-x:auto;background:var(--color-white);border-radius:var(--radius-m);padding:var(--sp-16)">
      <table style="width:100%;border-collapse:collapse;font-size:var(--text-label-s)">
        <thead>
          <tr style="border-bottom:2px solid var(--color-border)">
            <th style="padding:var(--sp-12);text-align:left;font-weight:600;color:var(--color-text)">Token</th>
            <th style="padding:var(--sp-12);text-align:center;font-weight:600;color:var(--color-text)">Desktop<br/>(1920px)</th>
            <th style="padding:var(--sp-12);text-align:center;font-weight:600;color:var(--color-text)">Tablet<br/>(1024px)</th>
            <th style="padding:var(--sp-12);text-align:center;font-weight:600;color:var(--color-text)">Mobile<br/>(375px)</th>
            <th style="padding:var(--sp-12);text-align:center;font-weight:600;color:var(--color-text)">LH</th>
            <th style="padding:var(--sp-12);text-align:center;font-weight:600;color:var(--color-text)">LS</th>
          </tr>
        </thead>
        <tbody>
          ${[
            ["--text-display-2xl","96px","64px","48px","1.0","-0.03em"],
            ["--text-display-xl","80px","56px","40px","1.05","-0.03em"],
            ["--text-display-l","64px","48px","36px","1.1","-0.02em"],
            ["--text-display-m","48px","36px","28px","1.15","-0.02em"],
            ["--text-display-s","40px","28px","24px","1.2","-0.01em"],
            ["--text-h1","40px","32px","28px","1.2","-0.01em"],
            ["--text-h2","32px","24px","22px","1.25","-0.01em"],
            ["--text-h3","24px","20px","18px","1.3","0em"],
            ["--text-h4","20px","18px","16px","1.4","0em"],
            ["--text-h5","16px","16px","14px","1.5","+0.01em"],
            ["--text-h6","13px","13px","12px","1.5","+0.06em"],
            ["--text-body-xl","28px","18px","18px","1.75","0em"],
            ["--text-body-lg","18px","17px","16px","1.7","0em"],
            ["--text-body","16px","16px","15px","1.65","0em"],
            ["--text-body-sm","14px","14px","13px","1.6","0em"],
            ["--text-body-xs","12px","12px","12px","1.5","+0.01em"],
            ["--text-quote-l","28px","22px","20px","1.55","-0.01em"],
            ["--text-quote-m","22px","18px","17px","1.55","-0.01em"],
          ].map(([token,desk,tab,mob,lh,ls]) => `
            <tr style="border-bottom:1px solid var(--color-border)">
              <td style="padding:var(--sp-12);text-align:left"><code>${token}</code></td>
              <td style="padding:var(--sp-12);text-align:center">${desk}</td>
              <td style="padding:var(--sp-12);text-align:center">${tab}</td>
              <td style="padding:var(--sp-12);text-align:center">${mob}</td>
              <td style="padding:var(--sp-12);text-align:center">${lh}</td>
              <td style="padding:var(--sp-12);text-align:center"><code>${ls}</code></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  </section>

  <!-- Font Weights -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h3);padding-block-end:var(--sp-16);border-bottom:2px solid var(--color-border);margin-block-end:var(--sp-24)">Font Weights — Avenir Next</h2>
    <div style="display:grid;gap:var(--sp-16);max-width:600px">
      ${[["400","Regular"],["500","Medium"],["600","Demi Bold"],["700","Bold"]].map(([fw,name]) => `
        <div style="background:var(--color-white);padding:var(--sp-16);border-radius:var(--radius-m)">
          <p style="font-weight:${fw};font-size:var(--text-body-lg);color:var(--color-text);margin:0">${name} (${fw}) — The quick brown fox jumps over the lazy dog</p>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Letter Spacing -->
  <section>
    <h2 style="font-size:var(--text-h3);padding-block-end:var(--sp-16);border-bottom:2px solid var(--color-border);margin-block-end:var(--sp-24)">Letter Spacing Scale</h2>
    <div style="display:grid;gap:var(--sp-16);max-width:600px">
      ${[["tighter","-0.03em"],["tight","-0.02em"],["snug","-0.01em"],["normal","0em"],["wide","0.01em"],["wider","0.06em"],["widest","0.10em"]].map(([name,val]) => `
        <div style="background:var(--color-white);padding:var(--sp-16);border-radius:var(--radius-m)">
          <p style="letter-spacing:var(--ls-${name});font-size:var(--text-body-lg);color:var(--color-text);margin:0">
            Letter Spacing ${name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
          <span style="font-size:var(--text-label-s);color:var(--color-text-secondary)">--ls-${name} (${val})</span>
        </div>
      `).join("")}
    </div>
  </section>
</div>
`;

// ── Spacing ────────────────────────────────────────────────────────────────────
export const Spacing = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-32)">Spacing Scale</h2>
  ${[["4","4px"],["8","8px"],["16","16px"],["24","24px"],["32","32px"],["48","48px"],["64","64px"],["96","96px"]].map(([s, px]) => `
    <div style="display:flex;align-items:center;margin-block-end:var(--sp-16)">
      <code style="font-size:var(--text-label-s);color:var(--color-text-secondary);width:80px;flex-shrink:0">--sp-${s}</code>
      <div style="width:var(--sp-${s});height:var(--sp-${s});background:var(--color-zingy-yellow);border-radius:2px;flex-shrink:0"></div>
      <span style="font-size:var(--text-label-s);color:var(--color-text-secondary);margin-inline-start:auto;padding-inline-start:var(--sp-24)">${px}</span>
    </div>`).join("")}
</div>
`;

// ── Elevation ─────────────────────────────────────────────────────────────────
export const Elevation = () => `
<div style="padding:var(--sp-64);background:var(--color-bg);font-family:var(--font-sans)">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-32)">Elevation / Shadows</h2>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:var(--sp-48)">
    ${[
      ["sm","Subtle","0 1px 4px rgba(11, 25, 26, 0.07)","Used for subtle elevation on cards, input focus states, and hover effects"],
      ["md","Standard","0 4px 16px rgba(11, 25, 26, 0.10)","Used for modals, dropdowns, floating actions, and primary containers"],
      ["lg","Prominent","0 12px 40px rgba(11, 25, 26, 0.14)","Used for emphasized overlays, floating elements, and top-level dialogs"],
      ["inset","Inset","inset 0 1px 2px rgba(11, 25, 26, 0.40)","Used for recessed/pressed elements, form inputs, and inset details"]
    ].map(([k,n,css,usage]) => `
      <div style="display:grid;gap:var(--sp-16)">
        <div style="background:var(--color-bg-surface);border-radius:var(--radius-s);padding:var(--sp-32);box-shadow:var(--shadow-${k});width:100%;height:120px;min-width:120px"></div>
        <div>
          <code style="font-size:var(--text-small);color:var(--color-text-secondary);display:block;margin-block-end:var(--sp-8)">--shadow-${k}</code>
          <p style="font-size:var(--text-label-s);color:var(--color-text-primary);font-weight:500;margin:0;margin-block-end:var(--sp-8)">${n}</p>
          <code style="font-size:var(--text-caption);color:var(--color-text-secondary);display:block;background:var(--color-charcoal-10);padding:var(--sp-8);border-radius:var(--radius-s);margin-block-end:var(--sp-8);word-break:break-all">${css}</code>
          <p style="font-size:var(--text-caption);color:var(--color-text-tertiary);margin:0;line-height:1.4">${usage}</p>
        </div>
      </div>`).join("")}
  </div>
</div>
`;

// ── Border ─────────────────────────────────────────────────────────────────────
export const Border = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <!-- Border Radius -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h2);margin-block-end:var(--sp-32)">Border Radius</h2>
    <div style="display:flex;gap:var(--sp-32);flex-wrap:wrap;align-items:flex-end">
      ${[["xs","4px"],["s","8px"],["m","16px"],["l","999px (pill)"]].map(([k,v]) => `
        <div style="display:grid;gap:var(--sp-16);align-items:center">
          <div style="width:100px;height:100px;background:var(--color-charcoal);border-radius:var(--radius-${k})"></div>
          <div style="text-align:center">
            <code style="font-size:var(--text-label-s);color:var(--color-text-secondary);display:block">--radius-${k}</code>
            <span style="font-size:var(--text-label-s);color:var(--color-text-tertiary)">${v}</span>
          </div>
        </div>`).join("")}
    </div>
  </section>

  <!-- Border Widths -->
  <section>
    <h2 style="font-size:var(--text-h2);margin-block-end:var(--sp-32)">Border Widths</h2>
    <div style="display:grid;gap:var(--sp-24);max-width:1000px">
      ${[["xs","1px"],["s","2px"],["m","4px"],["l","8px"]].map(([k,v]) => `
        <div style="display:flex;align-items:center;gap:var(--sp-24)">
          <code style="font-size:var(--text-label-s);color:var(--color-text-secondary);width:80px;flex-shrink:0">--border-${k}</code>
          <div style="height:var(--border-${k});background:var(--color-charcoal);flex:1"></div>
          <span style="font-size:var(--text-label-s);color:var(--color-text-secondary);width:50px;text-align:right">${v}</span>
        </div>`).join("")}
    </div>
  </section>
</div>
`;

// Helper function for icon paths
const iconPaths = {
  'home': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
  'search': '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  'menu': '<line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
  'close': '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"></polyline>',
  'chevron-left': '<polyline points="15 18 9 12 15 6"></polyline>',
  'chevron-down': '<polyline points="6 9 12 15 18 9"></polyline>',
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
  'user': '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
  'location': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
  'calendar': '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
  'clock': '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  'mail': '<rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>',
  'facebook': '<path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z"></path>',
  'instagram': '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1.5"></circle>',
  'linkedin': '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
  'youtube': '<path d="M23 7a6.77 6.77 0 0 0-.75-2.905 2.405 2.405 0 0 0-1.709-1.344C15.67 2 12 2 12 2s-3.67 0-8.561.75a2.4 2.4 0 0 0-1.709 1.344A6.785 6.785 0 0 0 1 7v4a6.785 6.785 0 0 0 .75 2.905 2.405 2.405 0 0 0 1.709 1.344c4.89.75 8.561.75 8.561.75s3.67 0 8.561-.75a2.4 2.4 0 0 0 1.709-1.344A6.885 6.885 0 0 0 23 11v-4z"></path><polygon points="9.545 15.568 15.568 11.6 9.545 7.632 9.545 15.568"></polygon>',
  'check': '<polyline points="20 6 9 17 4 12"></polyline>',
  'info': '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
  'warning': '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3.05h16.94a2 2 0 0 0 1.71-3.05l-8.47-14.14a2 2 0 0 0-3.41 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
  'chat': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
  'activity': '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
  'book': '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
};

// ── Icons ─────────────────────────────────────────────────────────────────────
export const Icons = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <!-- Icon Sizes -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h2);margin-block-end:var(--sp-32)">Icon Sizes</h2>
    <div style="background:var(--color-white);padding:var(--sp-48);border-radius:var(--radius-m);display:flex;gap:var(--sp-32);flex-wrap:wrap;align-items:flex-end">
      ${[["12px","Caption"],["16px","Small / UI"],["20px","Body"],["24px","Default"],["32px","Feature"],["48px","Hero"]].map(([sz,use]) => `
        <div style="display:grid;gap:var(--sp-16);align-items:center;text-align:center">
          <svg width="${sz}" height="${sz}" viewBox="0 0 24 24" style="margin:0 auto;stroke:var(--color-charcoal);stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 8v4m0 4v.01"></path>
          </svg>
          <div>
            <div style="font-size:var(--text-label-s);font-weight:600;color:var(--color-text)">${sz}</div>
            <div style="font-size:var(--text-label-s);color:var(--color-text-secondary)">${use}</div>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Icon Library -->
  <section>
    <h2 style="font-size:var(--text-h2);margin-block-end:var(--sp-32)">Icon Library (Navigation & UI)</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:var(--sp-16)">
      ${[
        ["home","Home"],
        ["search","Search"],
        ["menu","Menu"],
        ["close","Close"],
        ["chevron-right","Chevron Right"],
        ["chevron-left","Chevron Left"],
        ["chevron-down","Chevron Down"],
        ["arrow-right","Arrow Right"],
        ["user","User"],
        ["location","Location"],
        ["calendar","Calendar"],
        ["clock","Clock"],
        ["phone","Phone"],
        ["mail","Mail"],
        ["facebook","Facebook"],
        ["instagram","Instagram"],
        ["linkedin","LinkedIn"],
        ["youtube","YouTube"],
        ["check","Check"],
        ["info","Info"],
        ["warning","Warning"],
        ["chat","Chat"],
        ["activity","Activity"],
        ["book","Book"],
      ].map(([icon,label]) => `
        <div style="background:var(--color-white);padding:var(--sp-20);border-radius:var(--radius-s);display:flex;flex-direction:column;align-items:center;gap:var(--sp-12);border:1px solid var(--color-border)">
          <svg width="24" height="24" viewBox="0 0 24 24" style="stroke:var(--color-charcoal);stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round">
            ${iconPaths[icon] || ''}
          </svg>
          <span style="font-size:var(--text-label-s);color:var(--color-text-secondary);text-align:center">${label}</span>
        </div>
      `).join("")}
    </div>
  </section>
</div>
`;

// ── Grid System ────────────────────────────────────────────────────────────────
export const Grid = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <!-- Breakpoints -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h2);margin-block-end:var(--sp-32)">Breakpoints</h2>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--sp-24)">
      ${[
        {name:"Wide Desktop",range:"≥ 1600px",canvas:"1600px",cols:12,gutter:"208px",gap:"32px",colWidth:"96px",totalWidth:"1504px"},
        {name:"Desktop",range:"1366 – 1599px",canvas:"1440px",cols:12,gutter:"64px",gap:"32px",colWidth:"80px",totalWidth:"1312px"},
        {name:"Tablet",range:"768 – 1365px",canvas:"1024px",cols:12,gutter:"32px",gap:"24px",colWidth:"61px",totalWidth:"1088px"},
        {name:"Mobile",range:"< 768px",canvas:"375px",cols:"4 (full)",gutter:"16px",gap:"16px",colWidth:"full",totalWidth:"361px ref"},
      ].map(bp => `
        <div style="background:var(--color-white);border-radius:var(--radius-m);overflow:hidden;border:3px solid var(--color-forest-green)">
          <div style="background:var(--color-forest-green);padding:var(--sp-16);color:var(--color-white)">
            <div style="font-size:var(--text-label-m);text-transform:uppercase;letter-spacing:0.05em;font-weight:600;margin-block-end:var(--sp-4)">${bp.name}</div>
            <div style="font-size:var(--text-body);font-weight:600">${bp.range}</div>
          </div>
          <div style="padding:var(--sp-24);display:grid;gap:var(--sp-12);font-size:var(--text-label-s)">
            <div><strong>Canvas:</strong> ${bp.canvas}</div>
            <div><strong>Columns:</strong> ${bp.cols}</div>
            <div><strong>Gutter:</strong> ${bp.gutter}</div>
            <div><strong>Gap:</strong> ${bp.gap}</div>
            <div><strong>Col width:</strong> ${bp.colWidth}</div>
            <div><strong>12col width:</strong> ${bp.totalWidth}</div>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- 12-Column Grid -->
  <section style="margin-block-end:var(--sp-48)">
    <h2 style="font-size:var(--text-h2);margin-block-end:var(--sp-32)">12-Column Grid</h2>
    <div style="background:var(--color-white);border-radius:var(--radius-m);padding:var(--sp-32);border:1px solid var(--color-border)">
      <!-- Grid visualization -->
      <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:var(--sp-16);margin-block-end:var(--sp-32)">
        ${Array(12).fill(0).map((_, i) => `
          <div style="background:var(--color-zingy-yellow-50);padding:var(--sp-16);border-radius:var(--radius-s);text-align:center;font-size:var(--text-label-s);color:var(--color-text-secondary);font-weight:600">${i + 1}</div>
        `).join("")}
      </div>

      <!-- Column span examples -->
      <div style="display:grid;gap:var(--sp-16)">
        ${[
          {cols:12,label:"12 col – Full width",width:"1504px@1600 / 1312px@1440 / 1088px@1024 / 361px@375",color:"var(--color-zingy-yellow)"},
          {cols:10,label:"10 col – Content max",width:"1248px@1600 / 1088px@1440 / 904px@1024 / –",color:"var(--color-powdered-blue)"},
          {cols:8,label:"8 col – Editorial",width:"992px@1600 / 864px@1440 / 720px@1024 / –",color:"var(--color-soft-peach)"},
          {cols:6,label:"6 col – Half",width:"736px@1600 / 640px@1440 / 536px@1024 / –",color:"var(--color-violet)"},
          {cols:4,label:"4 col – Card / sidebar",width:"480px@1600 / 416px@1440 / 352px@1024 / 361px@375",color:"var(--color-forest-green)"},
          {cols:3,label:"3 col – Narrow card",width:"352px@1600 / 304px@1440 / 246px@1024 / 255px@375",color:"var(--color-deep-red-50)"},
        ].map(example => `
          <div>
            <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:var(--sp-8);margin-block-end:var(--sp-12)">
              ${Array(example.cols).fill(0).map(() => `
                <div style="background:${example.color};padding:var(--sp-16);border-radius:var(--radius-s)"></div>
              `).join("")}
            </div>
            <div style="font-size:var(--text-label-s);color:var(--color-text-secondary)">
              <strong>${example.label}</strong> • ${example.width}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  </section>

  <!-- Grid Guide -->
  <section>
    <h2 style="font-size:var(--text-h2);margin-block-end:var(--sp-32)">Grid Usage Guide</h2>
    <div style="background:var(--color-white);border-radius:var(--radius-m);padding:var(--sp-32);border:1px solid var(--color-border)">
      <div style="display:grid;gap:var(--sp-24)">
        <div>
          <h3 style="font-size:var(--text-h4);margin-block-end:var(--sp-12)">Responsive Approach</h3>
          <p style="margin:0;color:var(--color-text-secondary)">The grid system uses a mobile-first approach with 4 breakpoints. Each breakpoint defines canvas width, gutter spacing, and column width to maintain proper proportions across devices.</p>
        </div>
        <div>
          <h3 style="font-size:var(--text-h4);margin-block-end:var(--sp-12)">CSS Variables</h3>
          <p style="margin:0;color:var(--color-text-secondary)">Use grid CSS variables for consistent spacing: <code style="background:var(--color-charcoal-10);padding:2px 8px;border-radius:4px">--grid-12col-desktop</code>, <code style="background:var(--color-charcoal-10);padding:2px 8px;border-radius:4px">--grid-gutter-desktop</code>, <code style="background:var(--color-charcoal-10);padding:2px 8px;border-radius:4px">--grid-gap-desktop</code></p>
        </div>
        <div>
          <h3 style="font-size:var(--text-h4);margin-block-end:var(--sp-12)">Common Layouts</h3>
          <ul style="margin:0;padding-left:var(--sp-16);color:var(--color-text-secondary)">
            <li><strong>Hero/Banner:</strong> 12-column full width</li>
            <li><strong>Content Area:</strong> 10-column centered</li>
            <li><strong>Editorial:</strong> 8-column for body content</li>
            <li><strong>Sidebar Layout:</strong> 8 + 4 columns</li>
            <li><strong>Card Grid:</strong> 4-column cards (3 per row on desktop)</li>
            <li><strong>Featured Cards:</strong> 6-column half-width cards</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
`;

// ── Motion ─────────────────────────────────────────────────────────────────────
export const Motion = () => `
<div style="padding:var(--sp-32);font-family:var(--font-sans);background:var(--color-off-white);min-height:100vh">
  <h2 style="font-size:var(--text-h3);margin-block-end:var(--sp-32)">Motion & Transitions</h2>

  <!-- Duration Tiers -->
  <section style="margin-block-end:var(--sp-48)">
    <h3 style="font-size:var(--text-h4);margin-block-end:var(--sp-24)">Duration Tiers</h3>
    <div style="display:grid;gap:var(--sp-16)">
      ${[
        ["Micro","100ms","Icon changes, focus states, micro-interactions"],
        ["Fast","150ms","Quick feedback, button press, fast hover effects"],
        ["Standard","200ms","Default interaction transitions, state changes"],
        ["Slow","380ms","Deliberate motion, modals, large elements"],
        ["Slower","500ms","Complex animations, page transitions"]
      ].map(([name,duration,use]) => `
        <div style="display:grid;grid-template-columns:120px 100px 1fr;gap:var(--sp-16);align-items:center;padding:var(--sp-16);background:var(--color-white);border-radius:var(--radius-s);border:1px solid var(--color-border)">
          <div style="font-weight:600;color:var(--color-text)">${name}</div>
          <code style="font-size:var(--text-label-s);color:var(--color-text-secondary)">${duration}</code>
          <div style="font-size:11px;color:var(--color-text-tertiary)">${use}</div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Easing Functions -->
  <section style="margin-block-end:var(--sp-48)">
    <h3 style="font-size:var(--text-h4);margin-block-end:var(--sp-24)">Easing Functions</h3>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--sp-24)">
      ${[
        ["ease-out","cubic-bezier(0, 0, 0.2, 1)","Elements entering—feels responsive and natural","Entrance animations"],
        ["ease-in","cubic-bezier(0.4, 0, 1, 1)","Elements exiting—feels intentional","Exit animations"],
        ["ease-in-out","cubic-bezier(0.4, 0, 0.2, 1)","Continuous motion—smooth back-and-forth","Bidirectional transitions"],
        ["ease-bounce","cubic-bezier(0.68, -0.55, 0.265, 1.55)","Playful bounce—adds personality","Playful interactions"],
        ["ease-elastic","cubic-bezier(0.175, 0.885, 0.32, 1.275)","Spring-like—energetic feel","Emphasized feedback"]
      ].map(([name,curve,desc,use]) => `
        <div style="background:var(--color-white);border-radius:var(--radius-m);padding:var(--sp-24);border:1px solid var(--color-border)">
          <div style="display:grid;gap:var(--sp-16)">
            <div>
              <div style="font-weight:600;color:var(--color-text);margin-block-end:var(--sp-4)">${name}</div>
              <code style="font-size:11px;color:var(--color-text-secondary);display:block;background:var(--color-charcoal-10);padding:var(--sp-8);border-radius:var(--radius-s);word-break:break-all;margin-block-end:var(--sp-8)">${curve}</code>
              <p style="font-size:11px;color:var(--color-text-tertiary);margin:0;line-height:1.4">${desc}</p>
              <p style="font-size:11px;color:var(--color-text-secondary);margin:0;margin-block-start:var(--sp-8)"><strong>Use:</strong> ${use}</p>
            </div>
            <div style="background:var(--color-charcoal-10);border-radius:var(--radius-s);padding:var(--sp-24);cursor:pointer;height:100px;display:flex;align-items:center;justify-content:flex-start;overflow:hidden" onmouseover="this.querySelector('div').style.transform='translateX(80px)'" onmouseout="this.querySelector('div').style.transform='translateX(0)'">
              <div style="width:40px;height:40px;background:var(--color-forest-green);border-radius:var(--radius-s);transition:transform 200ms ${curve}"></div>
            </div>
            <span style="font-size:11px;color:var(--color-text-secondary);text-align:center">Hover to see animation</span>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Animation Types -->
  <section style="margin-block-end:var(--sp-48)">
    <h3 style="font-size:var(--text-h4);margin-block-end:var(--sp-24)">Animation Types</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--sp-24)">
      ${[
        ["Fade In","Entrance—opacity change","--animation-fade-in","fade-in 400ms ease-in-out infinite alternate"],
        ["Slide Up","Entrance—vertical movement","--animation-slide-up","slide-up 400ms ease-in-out infinite alternate"],
        ["Scale In","Entrance—size growth","--animation-scale-in","scale-in 400ms ease-in-out infinite alternate"]
      ].map(([type,desc,token,anim]) => `
        <div style="background:var(--color-white);border-radius:var(--radius-m);padding:var(--sp-24);border:1px solid var(--color-border)">
          <div style="display:grid;gap:var(--sp-16);height:100%">
            <div>
              <div style="font-weight:600;color:var(--color-text);margin-block-end:var(--sp-4)">${type}</div>
              <p style="font-size:11px;color:var(--color-text-secondary);margin:0;margin-block-end:var(--sp-8)">${desc}</p>
              <code style="font-size:10px;color:var(--color-text-tertiary);display:block">${token}</code>
            </div>
            <div style="height:80px;background:var(--color-zingy-yellow);border-radius:var(--radius-s);display:flex;align-items:center;justify-content:center;animation:${anim};font-weight:600;color:var(--color-text);margin-top:auto">${type}</div>
          </div>
        </div>
      `).join("")}
    </div>
  </section>

  <!-- Transition Properties -->
  <section>
    <h3 style="font-size:var(--text-h4);margin-block-end:var(--sp-24)">Transition Properties</h3>
    <div style="background:var(--color-white);border-radius:var(--radius-m);padding:var(--sp-32);border:1px solid var(--color-border)">
      <div style="display:grid;gap:var(--sp-24)">
        ${[
          ["--transition-color","color var(--transition)","Smooth color state changes"],
          ["--transition-background","background var(--transition)","Background color transitions"],
          ["--transition-border","border-color var(--transition)","Border color state feedback"],
          ["--transition-shadow","box-shadow var(--transition)","Elevation/depth changes"],
          ["--transition-transform","transform var(--transition)","Scale, rotate, translate effects"],
          ["--transition-opacity","opacity var(--transition)","Fade in/out effects"],
          ["--transition-all","all var(--transition)","All properties (use sparingly)"]
        ].map(([token,value,use]) => `
          <div>
            <code style="font-size:var(--text-label-s);color:var(--color-text-secondary);display:block;margin-block-end:var(--sp-8)">${token}</code>
            <p style="font-size:11px;color:var(--color-text-tertiary);margin:0;margin-block-end:var(--sp-8)"><strong>CSS:</strong> transition: ${value};</p>
            <p style="font-size:11px;color:var(--color-text-secondary);margin:0"><strong>Use:</strong> ${use}</p>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
</div>
`;

