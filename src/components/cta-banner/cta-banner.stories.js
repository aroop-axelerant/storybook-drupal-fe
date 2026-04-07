import "../../main.scss";

export default {
  title: "Components/CTA Banner",
  excludeStories: ["ctaBannerStyles", "buildCtaBanner"],
};

// =============================================================================
// Helpers
// =============================================================================

function banner({ variant, inputState = "default" }) {
  const inputAttrs = inputState === "focus"
    ? `style="border-color:var(--color-action-primary);outline:2px solid var(--color-powdered-blue);outline-offset:4px;"`
    : inputState === "error"
    ? `aria-invalid="true" style="border-color:var(--color-error-red,#d63b3b);"`
    : inputState === "filled"
    ? `value="sarah.mackenzie@email.com"`
    : "";

  const errorMsg = inputState === "error"
    ? `<p class="cta-banner__error" role="alert">Please enter a valid email address.</p>`
    : "";

  const successContent = inputState === "success"
    ? `<p class="cta-banner__success" role="status">You're subscribed! Check your inbox for a confirmation.</p>`
    : `<form class="cta-banner__form" novalidate>
        <label class="cta-banner__label" for="cta-email-${variant}">Email address</label>
        <div class="cta-banner__field-row">
          <input
            class="cta-banner__input"
            id="cta-email-${variant}"
            type="email"
            placeholder="Enter email …"
            autocomplete="email"
            aria-required="true"
            ${inputAttrs}
          >
          <button
            class="cta-banner__submit"
            type="submit"
            onclick="event.preventDefault()"
          >Subscribe</button>
        </div>
      </form>${errorMsg}`;

  const inner = `
    <div class="cta-banner__inner">
      <div class="cta-banner__content">
        <p class="cta-banner__eyebrow">Stay Connected</p>
        <h2 class="cta-banner__heading">For the latest from Regent's, sign up to our newsletter.</h2>
        <p class="cta-banner__body">Get open day invites, course updates, and student life news straight to your inbox.</p>
      </div>
      <div class="cta-banner__action">
        ${successContent}
      </div>
    </div>`;

  return `<section class="cta-banner cta-banner--${variant}" aria-label="Stay connected newsletter signup">${inner}</section>`;
}

function statesTable(rows) {
  return `
    <table class="sb-table-el">
      <thead>
        <tr>
          <th>State</th>
          <th>Token</th>
          <th>Properties</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(([state, colorVar, token, props]) => `
          <tr>
            <td>${state}</td>
            <td>
              <span class="sb-table-el__swatch-cell">
                <span class="sb-table-el__swatch" style="background:${colorVar}"></span>
                <code class="sb-table-el__token">${token}</code>
              </span>
            </td>
            <td>${props}</td>
          </tr>`).join("")}
      </tbody>
    </table>`;
}

function section(title, content) {
  return `
    <div class="sb-section">
      <h3 class="sb-section-title">${title}</h3>
      ${content}
    </div>`;
}

export const ctaBannerStyles = '';
export { buildCtaBanner };

function buildCtaBanner() {
  return banner({ variant: "full-bleed" });
}

// =============================================================================
// FULL BLEED
// =============================================================================

export const FullBleed = () => `
  <div class="sb-canvas sb-canvas--flush">

    ${section("Live example — Full Bleed", banner({ variant: "full-bleed" }))}

    <div style="padding:0 var(--sp-32);">

      ${section("Input states", `
        <div style="display:flex; flex-direction:column; gap:var(--sp-24);">

          <div>
            <p class="sb-state-label">Default</p>
            ${banner({ variant: "full-bleed" })}
          </div>

          <div>
            <p class="sb-state-label">Input Focus</p>
            ${banner({ variant: "full-bleed", inputState: "focus" })}
          </div>

          <div>
            <p class="sb-state-label">Input Filled</p>
            ${banner({ variant: "full-bleed", inputState: "filled" })}
          </div>

          <div>
            <p class="sb-state-label">Error — Invalid email</p>
            ${banner({ variant: "full-bleed", inputState: "error" })}
          </div>

          <div>
            <p class="sb-state-label">Success — Subscribed</p>
            ${banner({ variant: "full-bleed", inputState: "success" })}
          </div>

        </div>
      `)}

      ${section("Colour & property tokens", statesTable([
        ["Background",      "var(--color-violet)",          "--gradient-accent",          "linear-gradient(100deg, --color-violet → --color-soft-peach-50) · full viewport width"],
        ["Eyebrow",         "var(--color-charcoal-60)",     "--color-charcoal-60",        "font-sans · 11px · fw-bold · uppercase · letter-spacing: 0.1em"],
        ["Heading",         "var(--color-charcoal-90)",     "--color-charcoal-90",        "font-serif · clamp(1.75rem, 3vw, 2.5rem) · fw-regular · line-height: 1.15"],
        ["Body",            "var(--color-charcoal-60)",     "--color-charcoal-60",        "font-sans · 1rem · fw-regular · line-height: 1.6"],
        ["Input default",   "var(--color-white)",           "--color-white",              "bg: white · border: 2px solid transparent · radius: --radius-l"],
        ["Input hover",     "var(--color-charcoal-20)",     "--color-charcoal-20",        "border-color: charcoal-20 · transition: var(--duration-fast) var(--ease-out)"],
        ["Input focus",     "var(--color-powdered-blue)",   "--color-powdered-blue",      "border-color: forest-green · outline: 2px solid --color-powdered-blue · outline-offset: 4px"],
        ["Input error",     "var(--color-error-red)",       "--color-error-red",          "border-color: error-red · aria-invalid: true · error message visible"],
        ["Button default",  "var(--color-forest-green)",    "--color-forest-green",       "bg: forest-green · color: white · radius: --radius-l · fw-semibold"],
        ["Button hover",    "var(--color-forest-green-hover)", "--color-forest-green-hover", "bg darkens · transition: var(--duration-fast) var(--ease-out)"],
        ["Button focus",    "var(--color-powdered-blue)",   "--color-powdered-blue",      "outline: 2px solid --color-powdered-blue · outline-offset: 4px"],
        ["Button press",    "var(--color-forest-green)",    "--color-forest-green",       "transform: scale(0.98) · var(--duration-fast) var(--ease-out)"],
        ["Success",         "var(--color-charcoal-90)",     "--color-charcoal-90",        "form hidden · success message: fw-semibold · role: status"],
        ["Error message",   "var(--color-deep-red)",        "--color-deep-red",           "role: alert · font-size: 0.875rem · margin-top: var(--sp-8)"],
      ]))}

    </div>
  </div>
`;

// =============================================================================
// BOXED
// =============================================================================

export const Boxed = () => `
  <div class="sb-canvas sb-canvas--flush">

    ${section("Live example — Boxed", banner({ variant: "boxed" }))}

    <div style="padding:0 var(--sp-32);">

      ${section("Input states", `
        <div style="display:flex; flex-direction:column; gap:var(--sp-24);">

          <div>
            <p class="sb-state-label">Default</p>
            ${banner({ variant: "boxed" })}
          </div>

          <div>
            <p class="sb-state-label">Input Focus</p>
            ${banner({ variant: "boxed", inputState: "focus" })}
          </div>

          <div>
            <p class="sb-state-label">Input Filled</p>
            ${banner({ variant: "boxed", inputState: "filled" })}
          </div>

          <div>
            <p class="sb-state-label">Error — Invalid email</p>
            ${banner({ variant: "boxed", inputState: "error" })}
          </div>

          <div>
            <p class="sb-state-label">Success — Subscribed</p>
            ${banner({ variant: "boxed", inputState: "success" })}
          </div>

        </div>
      `)}

      ${section("Boxed vs Full Bleed differences", statesTable([
        ["Container",   "var(--color-charcoal-10)",  "--grid-max",      "max-width: 1312px · margin: 0 auto · padding: var(--sp-32)"],
        ["Background",  "var(--color-violet)",       "--gradient-accent", "gradient applied to inner wrapper · border-radius: var(--radius-m)"],
        ["Padding",     "var(--color-off-white)",    "--sp-64",         "inner padding: var(--sp-64) · page bg visible around component"],
      ]))}

    </div>
  </div>
`;
