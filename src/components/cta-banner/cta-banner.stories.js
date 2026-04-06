import "../../main.scss";

export default {
  title: "Components/CTA Banner",
  excludeStories: ["ctaBannerStyles", "buildCtaBanner"],
};

// =============================================================================
// Shared styles
// =============================================================================

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── Banner shell ──────────────────────────────────────────────────────── */
  .cta-banner {
    width: 100%;
    background: linear-gradient(100deg, var(--color-violet), var(--color-soft-peach-50));
  }

  /* Full bleed — gradient edge-to-edge, content within grid */
  .cta-banner--full-bleed {
    padding: var(--sp-64) var(--sp-32);
  }

  /* Boxed — component constrained to grid max-width with rounded corners */
  .cta-banner--boxed {
    background: transparent;
    padding: var(--sp-32) var(--sp-32);
  }

  .cta-banner--boxed .cta-banner__inner {
    background: linear-gradient(100deg, var(--color-violet), var(--color-soft-peach-50));
    border-radius: var(--radius-m);
    max-width: var(--grid-max, 1312px);
    padding: var(--sp-64) var(--sp-64);
  }

  /* ── Inner layout ──────────────────────────────────────────────────────── */
  .cta-banner__inner {
    max-width: var(--grid-max, 1312px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: var(--sp-64);
  }

  .cta-banner--full-bleed .cta-banner__inner {
    padding: 0 var(--sp-32);
  }

  /* ── Content — left column ─────────────────────────────────────────────── */
  .cta-banner__eyebrow {
    font-family: var(--font-sans);
    font-size: 0.6875rem;
    font-weight: var(--fw-bold, 700);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-charcoal-60);
    margin-bottom: var(--sp-12);
  }

  .cta-banner__heading {
    font-family: var(--font-serif);
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: var(--fw-regular, 400);
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: var(--color-charcoal-90);
    margin-bottom: var(--sp-16);
  }

  .cta-banner__body {
    font-family: var(--font-sans);
    font-size: var(--text-body-m-size, 1rem);
    font-weight: var(--fw-regular, 400);
    line-height: 1.6;
    color: var(--color-charcoal-60);
  }

  /* ── Action — right column ─────────────────────────────────────────────── */
  .cta-banner__label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .cta-banner__field-row {
    display: flex;
    align-items: stretch;
    gap: var(--sp-8);
  }

  /* ── Email input ───────────────────────────────────────────────────────── */
  .cta-banner__input {
    flex: 1;
    font-family: var(--font-sans);
    font-size: var(--text-body-m-size, 1rem);
    font-weight: var(--fw-regular, 400);
    line-height: 1;
    color: var(--color-charcoal);
    background: var(--color-white);
    border: 2px solid transparent;
    border-radius: var(--radius-l);
    padding: var(--sp-12) var(--sp-24);
    outline: none;
    transition:
      border-color var(--duration-fast) var(--ease-out),
      box-shadow   var(--duration-fast) var(--ease-out);
    appearance: none;
    -webkit-appearance: none;
  }

  .cta-banner__input::placeholder {
    color: var(--color-charcoal-40);
  }

  .cta-banner__input:hover {
    border-color: var(--color-charcoal-20);
  }

  .cta-banner__input:focus {
    border-color: var(--color-action-primary);
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }

  .cta-banner__input[aria-invalid="true"] {
    border-color: var(--color-error-red, #d63b3b);
  }

  .cta-banner__input[aria-invalid="true"]:focus {
    outline-color: var(--color-deep-red);
  }

  /* ── Subscribe button ──────────────────────────────────────────────────── */
  .cta-banner__submit {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-sans);
    font-size: var(--text-body-m-size, 1rem);
    font-weight: var(--fw-semibold, 600);
    line-height: 1;
    color: var(--color-white);
    background: var(--color-forest-green);
    border: 2px solid transparent;
    border-radius: var(--radius-l);
    padding: var(--sp-12) var(--sp-24);
    cursor: pointer;
    white-space: nowrap;
    transition:
      background  var(--duration-fast) var(--ease-out),
      transform   var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .cta-banner__submit:hover:not(:disabled) {
    background: var(--color-forest-green-hover);
  }

  .cta-banner__submit:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }

  .cta-banner__submit:active:not(:disabled) {
    transform: scale(0.98);
  }

  .cta-banner__submit:disabled,
  .cta-banner__submit[aria-busy="true"] {
    background: var(--color-charcoal-30);
    cursor: not-allowed;
  }

  /* ── Feedback messages ─────────────────────────────────────────────────── */
  .cta-banner__error {
    margin-top: var(--sp-8);
    font-family: var(--font-sans);
    font-size: 0.875rem;
    color: var(--color-deep-red);
  }

  .cta-banner__success {
    font-family: var(--font-sans);
    font-size: var(--text-body-m-size, 1rem);
    font-weight: var(--fw-semibold, 600);
    color: var(--color-charcoal-90);
    line-height: 1.5;
  }

  /* ── Responsive ────────────────────────────────────────────────────────── */
  @media (max-width: 767px) {
    .cta-banner__inner {
      grid-template-columns: 1fr;
      gap: var(--sp-32);
    }

    .cta-banner--full-bleed {
      padding: var(--sp-48) var(--sp-16);
    }

    .cta-banner--full-bleed .cta-banner__inner {
      padding: 0;
    }

    .cta-banner--boxed .cta-banner__inner {
      padding: var(--sp-48) var(--sp-24);
    }

    .cta-banner__field-row {
      flex-direction: column;
      align-items: stretch;
    }
  }
</style>`;

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
    <table style="width:100%; border-collapse:collapse; background:var(--color-white); border-radius:var(--radius-s); overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <thead>
        <tr style="background:var(--color-charcoal-10);">
          <th style="padding:var(--sp-8) var(--sp-16); text-align:left; font-family:var(--font-sans); font-size:0.75rem; font-weight:600; color:var(--color-charcoal-60); text-transform:uppercase; letter-spacing:0.06em;">State</th>
          <th style="padding:var(--sp-8) var(--sp-16); text-align:left; font-family:var(--font-sans); font-size:0.75rem; font-weight:600; color:var(--color-charcoal-60); text-transform:uppercase; letter-spacing:0.06em;">Token</th>
          <th style="padding:var(--sp-8) var(--sp-16); text-align:left; font-family:var(--font-sans); font-size:0.75rem; font-weight:600; color:var(--color-charcoal-60); text-transform:uppercase; letter-spacing:0.06em;">Properties</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(([state, colorVar, token, props]) => `
          <tr>
            <td style="padding:var(--sp-12) var(--sp-16); font-family:var(--font-sans); font-size:0.875rem; font-weight:600; color:var(--color-charcoal-90); border-bottom:1px solid var(--color-charcoal-10);">${state}</td>
            <td style="padding:var(--sp-12) var(--sp-16); border-bottom:1px solid var(--color-charcoal-10);">
              <span style="display:inline-flex; align-items:center; gap:var(--sp-8);">
                <span style="display:inline-block; width:14px; height:14px; border-radius:3px; background:${colorVar}; border:1px solid rgba(0,0,0,0.1); flex-shrink:0;"></span>
                <code style="font-size:0.75rem; color:var(--color-charcoal-60);">${token}</code>
              </span>
            </td>
            <td style="padding:var(--sp-12) var(--sp-16); font-family:var(--font-sans); font-size:0.75rem; color:var(--color-charcoal-60); border-bottom:1px solid var(--color-charcoal-10); line-height:1.5;">${props}</td>
          </tr>`).join("")}
      </tbody>
    </table>`;
}

function section(title, content) {
  return `
    <div style="margin-bottom:var(--sp-48);">
      <h3 style="font-family:var(--font-sans); font-size:0.6875rem; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-charcoal-40); margin-bottom:var(--sp-16);">${title}</h3>
      ${content}
    </div>`;
}

export { styles as ctaBannerStyles, buildCtaBanner };

function buildCtaBanner() {
  return banner({ variant: "full-bleed" });
}

// =============================================================================
// FULL BLEED
// =============================================================================

export const FullBleed = () => `
  ${styles}
  <div style="font-family:var(--font-sans); min-height:100vh; background:var(--color-off-white);">

    ${section("Live example — Full Bleed", banner({ variant: "full-bleed" }))}

    <div style="padding:0 var(--sp-32) var(--sp-48);">

      ${section("Input states", `
        <div style="display:flex; flex-direction:column; gap:var(--sp-24);">

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Default</p>
            ${banner({ variant: "full-bleed" })}
          </div>

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Input Focus</p>
            ${banner({ variant: "full-bleed", inputState: "focus" })}
          </div>

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Input Filled</p>
            ${banner({ variant: "full-bleed", inputState: "filled" })}
          </div>

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Error — Invalid email</p>
            ${banner({ variant: "full-bleed", inputState: "error" })}
          </div>

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Success — Subscribed</p>
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
  ${styles}
  <div style="font-family:var(--font-sans); min-height:100vh; background:var(--color-off-white);">

    ${section("Live example — Boxed", banner({ variant: "boxed" }))}

    <div style="padding:0 var(--sp-32) var(--sp-48);">

      ${section("Input states", `
        <div style="display:flex; flex-direction:column; gap:var(--sp-24);">

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Default</p>
            ${banner({ variant: "boxed" })}
          </div>

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Input Focus</p>
            ${banner({ variant: "boxed", inputState: "focus" })}
          </div>

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Input Filled</p>
            ${banner({ variant: "boxed", inputState: "filled" })}
          </div>

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Error — Invalid email</p>
            ${banner({ variant: "boxed", inputState: "error" })}
          </div>

          <div>
            <p style="font-family:var(--font-sans); font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-charcoal-40); margin-bottom:var(--sp-12);">Success — Subscribed</p>
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
