import "../../main.scss";

export default {
  title: "Components/Tab",
};

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
        <td>${state}</td>
        <td>${token}</td>
        <td>${props}</td>
      </tr>`
    )
    .join("");

  return `
    <table class="sb-table-el">
      <thead>
        <tr>
          <th>State</th>
          <th>Token</th>
          <th>Properties</th>
        </tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
    </table>`;
}

function swatch(colorVar, label) {
  return `<span class="sb-table-el__swatch-cell">
    <span class="sb-table-el__swatch" style="background: var(${colorVar})"></span>
    <code class="sb-table-el__token">${label}</code>
  </span>`;
}

function section(title, content) {
  return `
    <div class="sb-section">
      <h3 class="sb-section-title">${title}</h3>
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
    ${pseudoStyles}
    <div class="sb-canvas" style="padding:var(--sp-32)">
      <div class="sb-canvas__inner" style="max-width:800px">

        ${section("Live example — Underline", `
          <div class="tab tab--underline" role="tablist" aria-label="Course navigation">
            ${tabItem("Overview", " is-active")}
            ${tabItem("Entry Requirements")}
            ${tabItem("Fees & Funding")}
            ${tabItem("How to Apply", " is-disabled")}
          </div>
        `)}

        ${section("States", `
          <div class="sb-state-rows">
            <div class="sb-state-row">
              <span class="sb-state-name">Default</span>
              <div class="tab tab--underline" role="tablist">${tabItem("Tab Label")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name">Active</span>
              <div class="tab tab--underline" role="tablist">${tabItem("Tab Label", " is-active")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name">Hover</span>
              <div class="tab tab--underline" role="tablist">${tabItem("Tab Label", " is-hover")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name">Focus</span>
              <div class="tab tab--underline" role="tablist">${tabItem("Tab Label", " is-focus")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name">Disabled</span>
              <div class="tab tab--underline" role="tablist">${tabItem("Tab Label", " is-disabled")}</div>
            </div>
          </div>
        `)}

        ${section("Colour tokens", statesTable([
          { state: "Default",  token: swatch("--color-charcoal-60",   "--color-charcoal-60"),   props: "color; border-bottom: 3px solid transparent" },
          { state: "Hover",    token: swatch("--color-charcoal-90",   "--color-charcoal-90"),   props: "color" },
          { state: "Active",   token: swatch("--color-action-primary","--color-action-primary"), props: "color; border-bottom: 3px solid var(--color-action-primary)" },
          { state: "Focus",    token: swatch("--color-powdered-blue", "--color-powdered-blue"), props: "outline: 2px solid; outline-offset: 4px" },
          { state: "Disabled", token: swatch("--color-charcoal-30",   "--color-charcoal-30"),   props: "color; pointer-events: none" },
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
      /* Override section title colour for dark canvas */
      .sb-canvas--dark .sb-section-title { color: rgba(255,255,255,0.4); }
    </style>
  `;

  return `
    ${pseudoStyles}
    <div class="sb-canvas sb-canvas--dark" style="padding:var(--sp-32)">
      <div class="sb-canvas__inner" style="max-width:800px">

        ${section("Live example — Underline Inverse", `
          <div class="tab tab--underline-inverse" role="tablist" aria-label="Course navigation">
            ${tabItem("Overview", " is-active")}
            ${tabItem("Entry Requirements")}
            ${tabItem("Fees & Funding")}
            ${tabItem("How to Apply", " is-disabled")}
          </div>
        `)}

        ${section("States", `
          <div class="sb-state-rows">
            <div class="sb-state-row">
              <span class="sb-state-name sb-state-name--dark">Default</span>
              <div class="tab tab--underline-inverse" role="tablist">${tabItem("Tab Label")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name sb-state-name--dark">Active</span>
              <div class="tab tab--underline-inverse" role="tablist">${tabItem("Tab Label", " is-active")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name sb-state-name--dark">Hover</span>
              <div class="tab tab--underline-inverse" role="tablist">${tabItem("Tab Label", " is-hover")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name sb-state-name--dark">Focus</span>
              <div class="tab tab--underline-inverse" role="tablist">${tabItem("Tab Label", " is-focus")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name sb-state-name--dark">Disabled</span>
              <div class="tab tab--underline-inverse" role="tablist">${tabItem("Tab Label", " is-disabled")}</div>
            </div>
          </div>
        `)}

        ${section("Colour tokens", statesTable([
          { state: "Default",  token: `<code class="sb-table-el__token">rgba(255,255,255,0.55)</code>`,   props: "color; border-bottom: 3px solid transparent" },
          { state: "Hover",    token: `<code class="sb-table-el__token">rgba(255,255,255,1)</code>`,      props: "color: white" },
          { state: "Active",   token: swatch("--color-zingy-yellow",  "--color-zingy-yellow"),             props: "color: white; border-bottom: 3px solid var(--color-zingy-yellow)" },
          { state: "Focus",    token: swatch("--color-powdered-blue", "--color-powdered-blue"),            props: "outline: 2px solid; outline-offset: 4px" },
          { state: "Disabled", token: `<code class="sb-table-el__token">rgba(255,255,255,0.25)</code>`,   props: "color: rgba(white, 0.25); pointer-events: none" },
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
    ${pseudoStyles}
    <div class="sb-canvas" style="padding:var(--sp-32)">
      <div class="sb-canvas__inner" style="max-width:800px">

        ${section("Live example — Pill", `
          <div class="tab tab--pill" role="tablist" aria-label="Course filter">
            ${tabItem("All Courses", " is-active")}
            ${tabItem("Undergraduate")}
            ${tabItem("Postgraduate")}
            ${tabItem("Short Courses", " is-disabled")}
          </div>
        `)}

        ${section("States", `
          <div class="sb-state-rows">
            <div class="sb-state-row">
              <span class="sb-state-name">Default</span>
              <div class="tab tab--pill" role="tablist">${tabItem("Tab Label")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name">Active</span>
              <div class="tab tab--pill" role="tablist">${tabItem("Tab Label", " is-active")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name">Hover</span>
              <div class="tab tab--pill" role="tablist">${tabItem("Tab Label", " is-hover")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name">Focus</span>
              <div class="tab tab--pill" role="tablist">${tabItem("Tab Label", " is-focus")}</div>
            </div>
            <div class="sb-state-row">
              <span class="sb-state-name">Disabled</span>
              <div class="tab tab--pill" role="tablist">${tabItem("Tab Label", " is-disabled")}</div>
            </div>
          </div>
        `)}

        ${section("Colour tokens", statesTable([
          { state: "Default",  token: swatch("--color-charcoal-90",   "--color-charcoal-90"),   props: "color; background: transparent" },
          { state: "Hover",    token: swatch("--color-charcoal-20",   "--color-charcoal-20"),   props: "background: var(--color-charcoal-20); color: var(--color-charcoal-90)" },
          { state: "Active",   token: swatch("--color-action-primary","--color-action-primary"), props: "background: var(--color-action-primary); color: var(--color-white)" },
          { state: "Focus",    token: swatch("--color-powdered-blue", "--color-powdered-blue"), props: "outline: 2px solid; outline-offset: 4px" },
          { state: "Disabled", token: swatch("--color-charcoal-30",   "--color-charcoal-30"),   props: "color; pointer-events: none" },
        ]))}

      </div>
    </div>
  `;
};
