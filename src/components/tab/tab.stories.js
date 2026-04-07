import "../../main.scss";

export default {
  title: "Components/Tab",
};

// =============================================================================
// Shared styles
// =============================================================================

const baseStyles = '';

// =============================================================================
// Helpers
// =============================================================================

function tabItem(label, modifiers = "") {
  return `<button class="tab__item${modifiers}" role="tab" aria-selected="${modifiers.includes("is-active") ? "true" : "false"}" tabindex="${modifiers.includes("is-active") ? "0" : "-1"}"${modifiers.includes("is-disabled") ? ' disabled aria-disabled="true"' : ""}>${label}</button>`;
}

function statesTable(rows) {
  const rowsHtml = rows
    .map(
      ({ state, token, props }) => `
      <tr>
        <td style="padding: var(--sp-12) var(--sp-16); font-family: var(--font-sans); font-size: 0.875rem; color: var(--color-charcoal-90); border-bottom: 1px solid var(--color-charcoal-10);">${state}</td>
        <td style="padding: var(--sp-12) var(--sp-16); border-bottom: 1px solid var(--color-charcoal-10);">${token}</td>
        <td style="padding: var(--sp-12) var(--sp-16); font-family: var(--font-sans); font-size: 0.75rem; color: var(--color-charcoal-60); border-bottom: 1px solid var(--color-charcoal-10);">${props}</td>
      </tr>`
    )
    .join("");

  return `
    <table style="width:100%; border-collapse: collapse; background: var(--color-white); border-radius: var(--radius-s); overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08);">
      <thead>
        <tr style="background: var(--color-charcoal-10);">
          <th style="padding: var(--sp-8) var(--sp-16); text-align: left; font-family: var(--font-sans); font-size: 0.75rem; font-weight: 600; color: var(--color-charcoal-60); text-transform: uppercase; letter-spacing: 0.06em;">State</th>
          <th style="padding: var(--sp-8) var(--sp-16); text-align: left; font-family: var(--font-sans); font-size: 0.75rem; font-weight: 600; color: var(--color-charcoal-60); text-transform: uppercase; letter-spacing: 0.06em;">Token</th>
          <th style="padding: var(--sp-8) var(--sp-16); text-align: left; font-family: var(--font-sans); font-size: 0.75rem; font-weight: 600; color: var(--color-charcoal-60); text-transform: uppercase; letter-spacing: 0.06em;">Properties</th>
        </tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
    </table>`;
}

function swatch(colorVar, label) {
  return `<span style="display:inline-flex; align-items:center; gap: var(--sp-8);">
    <span style="display:inline-block; width:16px; height:16px; border-radius:3px; background: var(${colorVar}); border: 1px solid rgba(0,0,0,0.1); flex-shrink:0;"></span>
    <code style="font-size:0.75rem; color: var(--color-charcoal-60);">${label}</code>
  </span>`;
}

function section(title, content) {
  return `
    <div style="margin-bottom: var(--sp-48);">
      <h3 style="font-family: var(--font-sans); font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-charcoal-40); margin-bottom: var(--sp-16);">${title}</h3>
      ${content}
    </div>`;
}

// =============================================================================
// UNDERLINE
// =============================================================================

export const Underline = () => {
  const pseudoStyles = `
    <style>
      /* Simulated hover via .is-hover class for Storybook pseudo-states */
      .tab--underline .tab__item.is-hover:not(.is-active):not(:disabled) {
        color: var(--color-charcoal-90);
      }
      .tab--underline .tab__item.is-focus {
        outline: 2px solid var(--color-powdered-blue);
        outline-offset: 4px;
        border-radius: 2px;
      }
    </style>
  `;

  return `
    ${baseStyles}
    ${pseudoStyles}
    <div style="padding: var(--sp-32); background: var(--color-off-white); min-height: 100vh;">
      <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--sp-48);">

        ${section("Live example — Underline", `
          <div class="tab tab--underline" role="tablist" aria-label="Course navigation">
            ${tabItem("Overview", " is-active")}
            ${tabItem("Entry Requirements")}
            ${tabItem("Fees & Funding")}
            ${tabItem("How to Apply", " is-disabled")}
          </div>
        `)}

        ${section("States", `
          <div style="display: flex; flex-direction: column; gap: var(--sp-16);">

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Default</span>
              <div class="tab tab--underline" role="tablist">
                ${tabItem("Tab Label")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Active</span>
              <div class="tab tab--underline" role="tablist">
                ${tabItem("Tab Label", " is-active")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Hover</span>
              <div class="tab tab--underline" role="tablist">
                ${tabItem("Tab Label", " is-hover")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Focus</span>
              <div class="tab tab--underline" role="tablist">
                ${tabItem("Tab Label", " is-focus")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Disabled</span>
              <div class="tab tab--underline" role="tablist">
                ${tabItem("Tab Label", " is-disabled")}
              </div>
            </div>

          </div>
        `)}

        ${section("Colour tokens", statesTable([
          {
            state: "Default",
            token: swatch("--color-charcoal-60", "--color-charcoal-60"),
            props: "color; border-bottom: 3px solid transparent",
          },
          {
            state: "Hover",
            token: swatch("--color-charcoal-90", "--color-charcoal-90"),
            props: "color",
          },
          {
            state: "Active",
            token: swatch("--color-action-primary", "--color-action-primary"),
            props: "color; border-bottom: 3px solid var(--color-action-primary)",
          },
          {
            state: "Focus",
            token: swatch("--color-powdered-blue", "--color-powdered-blue"),
            props: "outline: 2px solid; outline-offset: 4px",
          },
          {
            state: "Disabled",
            token: swatch("--color-charcoal-30", "--color-charcoal-30"),
            props: "color; pointer-events: none",
          },
        ]))}

      </div>
    </div>
  `;
};

// =============================================================================
// UNDERLINE INVERSE
// =============================================================================

export const UnderlineInverse = () => {
  const pseudoStyles = `
    <style>
      .tab--underline-inverse .tab__item.is-hover:not(.is-active):not(:disabled) {
        color: var(--color-white);
      }
      .tab--underline-inverse .tab__item.is-focus {
        outline: 2px solid var(--color-powdered-blue);
        outline-offset: 4px;
        border-radius: 2px;
      }
    </style>
  `;

  return `
    ${baseStyles}
    ${pseudoStyles}
    <style>
      /* Override section label colour for dark canvas */
      .inv-canvas h3 { color: rgba(255,255,255,0.4) !important; }
    </style>
    <div class="inv-canvas" style="padding: var(--sp-32); background: var(--color-charcoal); min-height: 100vh;">
      <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--sp-48);">

        ${section("Live example — Underline Inverse", `
          <div class="tab tab--underline-inverse" role="tablist" aria-label="Course navigation">
            ${tabItem("Overview", " is-active")}
            ${tabItem("Entry Requirements")}
            ${tabItem("Fees & Funding")}
            ${tabItem("How to Apply", " is-disabled")}
          </div>
        `)}

        ${section("States", `
          <div style="display: flex; flex-direction: column; gap: var(--sp-16);">

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: rgba(255,255,255,0.55); width: 90px; flex-shrink: 0;">Default</span>
              <div class="tab tab--underline-inverse" role="tablist">
                ${tabItem("Tab Label")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: rgba(255,255,255,0.55); width: 90px; flex-shrink: 0;">Active</span>
              <div class="tab tab--underline-inverse" role="tablist">
                ${tabItem("Tab Label", " is-active")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: rgba(255,255,255,0.55); width: 90px; flex-shrink: 0;">Hover</span>
              <div class="tab tab--underline-inverse" role="tablist">
                ${tabItem("Tab Label", " is-hover")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: rgba(255,255,255,0.55); width: 90px; flex-shrink: 0;">Focus</span>
              <div class="tab tab--underline-inverse" role="tablist">
                ${tabItem("Tab Label", " is-focus")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: rgba(255,255,255,0.55); width: 90px; flex-shrink: 0;">Disabled</span>
              <div class="tab tab--underline-inverse" role="tablist">
                ${tabItem("Tab Label", " is-disabled")}
              </div>
            </div>

          </div>
        `)}

        ${section("Colour tokens", statesTable([
          {
            state: "Default",
            token: `<code style="font-size:0.75rem;color:rgba(255,255,255,0.55)">rgba(255,255,255,0.55)</code>`,
            props: "color; border-bottom: 3px solid transparent",
          },
          {
            state: "Hover",
            token: `<code style="font-size:0.75rem;color:rgba(255,255,255,0.55)">rgba(255,255,255,1)</code>`,
            props: "color: white",
          },
          {
            state: "Active",
            token: swatch("--color-zingy-yellow", "--color-zingy-yellow"),
            props: "color: white; border-bottom: 3px solid var(--color-zingy-yellow)",
          },
          {
            state: "Focus",
            token: swatch("--color-powdered-blue", "--color-powdered-blue"),
            props: "outline: 2px solid; outline-offset: 4px",
          },
          {
            state: "Disabled",
            token: `<code style="font-size:0.75rem;color:rgba(255,255,255,0.55)">rgba(255,255,255,0.25)</code>`,
            props: "color: rgba(white, 0.25); pointer-events: none",
          },
        ]))}

      </div>
    </div>
  `;
};

UnderlineInverse.storyName = 'Underline Inverse';

// =============================================================================
// PILL
// =============================================================================

export const Pill = () => {
  const pseudoStyles = `
    <style>
      .tab--pill .tab__item.is-hover:not(.is-active):not(:disabled) {
        background: var(--color-charcoal-20);
        color: var(--color-charcoal-90);
      }
      .tab--pill .tab__item.is-focus {
        outline: 2px solid var(--color-powdered-blue);
        outline-offset: 4px;
      }
    </style>
  `;

  return `
    ${baseStyles}
    ${pseudoStyles}
    <div style="padding: var(--sp-32); background: var(--color-off-white); min-height: 100vh;">
      <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: var(--sp-48);">

        ${section("Live example — Pill", `
          <div class="tab tab--pill" role="tablist" aria-label="Course filter">
            ${tabItem("All Courses", " is-active")}
            ${tabItem("Undergraduate")}
            ${tabItem("Postgraduate")}
            ${tabItem("Short Courses", " is-disabled")}
          </div>
        `)}

        ${section("States", `
          <div style="display: flex; flex-direction: column; gap: var(--sp-16);">

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Default</span>
              <div class="tab tab--pill" role="tablist">
                ${tabItem("Tab Label")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Active</span>
              <div class="tab tab--pill" role="tablist">
                ${tabItem("Tab Label", " is-active")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Hover</span>
              <div class="tab tab--pill" role="tablist">
                ${tabItem("Tab Label", " is-hover")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Focus</span>
              <div class="tab tab--pill" role="tablist">
                ${tabItem("Tab Label", " is-focus")}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: var(--sp-24);">
              <span style="font-family: var(--font-sans); font-size: 0.8125rem; color: var(--color-charcoal-60); width: 90px; flex-shrink: 0;">Disabled</span>
              <div class="tab tab--pill" role="tablist">
                ${tabItem("Tab Label", " is-disabled")}
              </div>
            </div>

          </div>
        `)}

        ${section("Colour tokens", statesTable([
          {
            state: "Default",
            token: swatch("--color-charcoal-90", "--color-charcoal-90"),
            props: "color; background: transparent",
          },
          {
            state: "Hover",
            token: swatch("--color-charcoal-20", "--color-charcoal-20"),
            props: "background: var(--color-charcoal-20); color: var(--color-charcoal-90)",
          },
          {
            state: "Active",
            token: swatch("--color-action-primary", "--color-action-primary"),
            props: "background: var(--color-action-primary); color: var(--color-white)",
          },
          {
            state: "Focus",
            token: swatch("--color-powdered-blue", "--color-powdered-blue"),
            props: "outline: 2px solid; outline-offset: 4px",
          },
          {
            state: "Disabled",
            token: swatch("--color-charcoal-30", "--color-charcoal-30"),
            props: "color; pointer-events: none",
          },
        ]))}

      </div>
    </div>
  `;
};
