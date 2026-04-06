import "../../main.scss";

export default {
  title: "Getting Started",
};

// =============================================================================
// Shared helpers
// =============================================================================

const page = (content) => `
  <div style="padding: var(--sp-64) var(--sp-48); font-family: var(--font-sans); background: var(--color-off-white); min-height: 100vh;">
    <div style="max-width: 860px; margin: 0 auto;">
      ${content}
    </div>
  </div>`;

const h1 = (text) =>
  `<h1 style="font-size: var(--text-h2); font-weight: 700; color: var(--color-charcoal); margin-bottom: var(--sp-16); line-height: 1.2;">${text}</h1>`;

const lead = (text) =>
  `<p style="font-size: var(--text-body-lg); line-height: 1.7; color: var(--color-charcoal-60); margin-bottom: var(--sp-48); max-width: 680px;">${text}</p>`;

const h2 = (text) =>
  `<h2 style="font-size: var(--text-h4); font-weight: 700; color: var(--color-charcoal); margin-top: var(--sp-48); margin-bottom: var(--sp-16);">${text}</h2>`;

const h3 = (text) =>
  `<h3 style="font-size: var(--text-body-lg); font-weight: 600; color: var(--color-charcoal); margin-top: var(--sp-32); margin-bottom: var(--sp-8);">${text}</h3>`;

const p = (text) =>
  `<p style="font-size: var(--text-body); line-height: 1.7; color: var(--color-charcoal-60); margin-bottom: var(--sp-16);">${text}</p>`;

const ul = (items) => `
  <ul style="list-style: none; padding: 0; margin-bottom: var(--sp-24); display: flex; flex-direction: column; gap: var(--sp-8);">
    ${items.map(item => `
      <li style="display: flex; align-items: flex-start; gap: var(--sp-12); font-size: var(--text-body); color: var(--color-charcoal-60); line-height: 1.6;">
        <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--color-action-primary); flex-shrink: 0; margin-top: 9px;"></span>
        ${item}
      </li>`).join("")}
  </ul>`;

const code = (text) =>
  `<code style="font-family: monospace; font-size: 0.875em; background: var(--color-charcoal-10); color: var(--color-charcoal); padding: 2px 6px; border-radius: 4px;">${text}</code>`;

const codeBlock = (text) => `
  <pre style="background: var(--color-charcoal); color: #e2e8f0; font-family: monospace; font-size: 0.8125rem; line-height: 1.7; padding: var(--sp-24); border-radius: var(--radius-m); overflow-x: auto; margin-bottom: var(--sp-24);"><code>${text}</code></pre>`;

const divider = () =>
  `<hr style="border: none; border-top: 1px solid var(--color-charcoal-20); margin: var(--sp-48) 0;">`;

const chip = (text, color = "var(--color-action-primary)") =>
  `<span style="display: inline-block; font-size: 0.75rem; font-weight: 600; color: ${color}; background: ${color}18; padding: 3px 10px; border-radius: 100px; letter-spacing: 0.04em; text-transform: uppercase;">${text}</span>`;

const card = (icon, heading, body) => `
  <div style="background: var(--color-white); border-radius: var(--radius-m); padding: var(--sp-24); border: 1px solid var(--color-charcoal-10);">
    <div style="font-size: 1.5rem; margin-bottom: var(--sp-12);">${icon}</div>
    <strong style="display: block; font-size: var(--text-body); color: var(--color-charcoal); margin-bottom: var(--sp-8);">${heading}</strong>
    <p style="font-size: var(--text-body-sm); line-height: 1.6; color: var(--color-charcoal-60); margin: 0;">${body}</p>
  </div>`;

const grid = (cols, ...children) => `
  <div style="display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: var(--sp-16); margin-bottom: var(--sp-32);">
    ${children.join("")}
  </div>`;

const tag = (label, value) => `
  <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--sp-12) var(--sp-16); background: var(--color-white); border-radius: var(--radius-s); border: 1px solid var(--color-charcoal-10);">
    <span style="font-size: var(--text-body-sm); font-weight: 600; color: var(--color-charcoal);">${label}</span>
    <span style="font-size: var(--text-body-sm); color: var(--color-charcoal-60);">${value}</span>
  </div>`;

// =============================================================================
// Intro
// =============================================================================

export const Intro = () => page(`
  <div style="display: flex; align-items: center; gap: var(--sp-16); margin-bottom: var(--sp-24);">
    <img src="/graphics/brand/logo-emblem.svg" alt="Regent's University London" style="width: 48px; height: 48px;">
    ${chip("v1.0.0")}
  </div>

  ${h1("Regent's University London — Design System")}
  ${lead("A token-first design system built for Storybook and Drupal. Every colour, space, typeface, motion, and radius is expressed as a CSS custom property — components consume tokens, never raw values.")}

  ${grid(3,
    card("🎨", "Design Tokens", "All visual decisions live in <code>src/foundation/tokens/</code> as CSS custom properties and are available globally."),
    card("🧩", "Components", "27 self-contained components each with Twig, SCSS, JS, JSON data, and Storybook stories."),
    card("📐", "Layouts &amp; Templates", "Flexible layout primitives and full-page templates wired to real component data.")
  )}

  ${divider()}

  ${h2("What's in the box")}
  ${ul([
    "<strong>Foundation</strong> — 13 token partials: colours, spacing, typography, radius, motion, elevation, opacity, z-index, grid, icons, fonts, gradients",
    "<strong>27 Components</strong> — Accordion, Breadcrumb, Button, Card, Checkbox, Content Tiles, CTA Banner, Featured Content, Footer, Header, Hero, Inline Link, Input Field, Radio Button, Search, Select Box, Standout Link, Submit, Tab, Table, Tag Accent, Tag Primary, Text Area, Tile, Toggle, Video, Video Carousel",
    "<strong>Layouts</strong> — Container, Two Column, Three Column",
    "<strong>Templates</strong> — Home",
    "<strong>Pages</strong> — Home"
  ])}

  ${divider()}

  ${h2("Technology stack")}
  ${grid(2,
    tag("Storybook", "8.x (HTML / Webpack 5)"),
    tag("Templating", "Drupal Twig"),
    tag("Styles", "SCSS → CSS custom properties"),
    tag("JS", "Vanilla ES modules"),
    tag("Tokens", "CSS custom properties"),
    tag("Accessibility", "WCAG 2.1 AA")
  )}
`);

// =============================================================================
// How to use our design system?
// =============================================================================

export const HowToUse = () => page(`
  ${h1("How to use our design system?")}
  ${lead("Whether you're building a new Drupal component, extending Storybook stories, or consuming tokens in a theme — here's how to get started quickly.")}

  ${h2("1. Run Storybook locally")}
  ${p("Clone the repository and install dependencies:")}
  ${codeBlock(`git clone git@github.com:aroop-axelerant/storybook-drupal-fe.git
cd storybook-drupal-fe
npm install
npm run storybook`)}
  ${p(`Storybook starts at ${code("http://localhost:6006")}. Changes to any ${code(".stories.js")}, ${code(".scss")}, or ${code(".twig")} file hot-reload automatically.`)}

  ${h2("2. Use design tokens")}
  ${p(`All visual values are CSS custom properties defined in ${code("src/foundation/tokens/")}. Never use raw hex, px spacing, or arbitrary values — always reach for a token first:`)}
  ${codeBlock(`.my-component {
  color:       var(--color-charcoal);
  padding:     var(--sp-24);
  font-size:   var(--text-body-m-size);
  border-radius: var(--radius-m);
  transition:  color var(--duration-fast) var(--ease-out);
}`)}

  ${h2("3. Create a new component")}
  ${p(`Every component lives in its own subdirectory under ${code("src/components/[name]/")} and requires exactly 5 files:`)}
  ${codeBlock(`src/components/my-component/
├── my-component.js          ← export function initMyComponent(el) {}
├── my-component.json        ← default + variants data
├── my-component.scss        ← styles (register in src/main.scss)
├── my-component.stories.js  ← Storybook stories
└── my-component.twig        ← Drupal Twig template`)}
  ${p(`After creating the SCSS file, register it in ${code("src/main.scss")}:`)}
  ${codeBlock(`@use "components/my-component/my-component";`)}

  ${h2("4. Consume components in Drupal")}
  ${p("Twig templates use Drupal's component namespace aliases. Components can be included or embedded:")}
  ${codeBlock(`{# Include a component #}
{% include "@components/button/button.twig" with {
  label: "Apply Now",
  variant: "primary",
  href: "/apply"
} %}`)}

  ${h2("5. Build for production")}
  ${codeBlock(`npm run build-storybook`)}
  ${p(`The static build outputs to ${code("storybook-static/")} and can be deployed to any static host.`)}
`);

HowToUse.storyName = "How to use our design system?";

// =============================================================================
// Browser support
// =============================================================================

export const BrowserSupport = () => page(`
  ${h1("Browser support")}
  ${lead("The design system targets all modern evergreen browsers. Legacy browser support (IE 11 and below) is explicitly out of scope.")}

  ${h2("Supported browsers")}

  ${grid(2,
    card("🌐", "Chrome 90+", "Full support. Primary development and testing browser."),
    card("🦊", "Firefox 88+", "Full support. Tested on each component release."),
    card("🧭", "Safari 14+", "Full support. CSS grid and custom properties fully supported."),
    card("🔵", "Edge 90+", "Full support. Chromium-based, matches Chrome behaviour."),
    card("📱", "iOS Safari 14+", "Full support. Mobile viewport tested at 375px."),
    card("🤖", "Chrome for Android", "Full support. Tested at 375px and 412px.")
  )}

  ${divider()}

  ${h2("CSS features used")}
  ${ul([
    `${code("CSS custom properties")} — all tokens; supported in all target browsers`,
    `${code("CSS Grid")} — layout primitives and component internals`,
    `${code("CSS Flexbox")} — component alignment`,
    `${code(":focus-visible")} — keyboard-only focus rings (polyfill-free in target browsers)`,
    `${code("grid-template-rows: 0fr → 1fr")} — accordion height animation`,
    `${code("aspect-ratio")} — video and card image sizing`,
    `${code(":has()")} — used sparingly (Chrome 105+, Safari 15.4+, Firefox 121+)`
  ])}

  ${divider()}

  ${h2("Not supported")}
  ${ul([
    "Internet Explorer 11 and below — CSS custom properties are not supported",
    "Firefox &lt; 88 — older Flexbox gap behaviour",
    "Safari &lt; 14 — missing CSS Grid subgrid and aspect-ratio"
  ])}

  ${p("If legacy browser support is required in future, a CSS custom property polyfill (e.g. <code>css-vars-ponyfill</code>) can be introduced at the Drupal theme layer without changes to component code.")}
`);

// =============================================================================
// Internationalization
// =============================================================================

export const Internationalization = () => page(`
  ${h1("Internationalization")}
  ${lead("The design system is built with internationalisation in mind. Text, layout direction, and typographic scale all adapt cleanly to non-English languages.")}

  ${h2("Language direction (LTR / RTL)")}
  ${p(`Components use logical CSS properties where possible (${code("margin-inline-start")}, ${code("padding-block")}) so that RTL languages such as Arabic and Hebrew flip layout automatically when ${code('dir="rtl"')} is set on the ${code("<html>")} element.`)}
  ${codeBlock(`<!-- Drupal layout template -->
<html lang="{{ language.langcode }}" dir="{{ language.direction }}">`)}

  ${h2("Typography")}
  ${p("The primary typefaces are:")}
  ${ul([
    "<strong>Magnole Serif</strong> — Display and heading font (Latin script only). For non-Latin scripts, the system serif stack is used as fallback.",
    "<strong>Avenir Next</strong> — UI and body text (Latin, Cyrillic). For Arabic/Hebrew, the system sans-serif stack is used."
  ])}
  ${p(`Font stacks are defined in ${code("src/foundation/tokens/_fonts.scss")} and can be extended with language-specific overrides using ${code(":lang()")} selectors.`)}
  ${codeBlock(`:lang(ar), :lang(he) {
  --font-sans: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --font-serif: Georgia, serif;
}`)}

  ${h2("Text length")}
  ${p("German and French translations can be 30–40% longer than English. Components are tested with expanded text to confirm no overflow or truncation occurs. Key patterns used:")}
  ${ul([
    `${code("white-space: normal")} on all text containers — no forced single-line truncation`,
    `${code("min-width: 0")} on flex children to allow text wrapping`,
    `${code("word-break: break-word")} on heading and card contexts`
  ])}

  ${h2("Date, number and currency formatting")}
  ${p("All date, number and currency values are passed as pre-formatted strings from the Drupal layer via Twig data. The design system does not perform any client-side formatting — this keeps i18n logic in the CMS where locale context is available.")}

  ${h2("ARIA and screen reader text")}
  ${p(`Aria labels and screen-reader-only text are passed as Twig props (e.g. ${code("aria_label")}, ${code("sr_label")}) so they can be translated by Drupal's string translation system without modifying templates.`)}
`);

// =============================================================================
// Automatic Component Initialization
// =============================================================================

export const AutomaticInit = () => page(`
  ${h1("Automatic Component Initialization")}
  ${lead(`Every interactive component exports a named ${code("init[Name](el)")} function from its ${code(".js")} file. Drupal's behaviours system — or a lightweight init script — calls these functions once the DOM is ready.`)}

  ${h2("The pattern")}
  ${p("Each component JS file exports a single initialisation function that receives the root element:")}
  ${codeBlock(`// src/components/accordion/accordion.js
export function initAccordion(el) {
  const triggers = el.querySelectorAll('.accordion__trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
    });
  });
}`)}

  ${h2("Drupal Behaviours integration")}
  ${p("In Drupal, wire component init functions to Drupal behaviours in your theme's JS entry point:")}
  ${codeBlock(`// mytheme.js
import { initAccordion } from './components/accordion/accordion.js';
import { initToggle }    from './components/toggle/toggle.js';
import { initTab }       from './components/tab/tab.js';

Drupal.behaviors.designSystem = {
  attach(context) {
    context.querySelectorAll('.accordion').forEach(initAccordion);
    context.querySelectorAll('.toggle').forEach(initToggle);
    context.querySelectorAll('.tab').forEach(initTab);
  }
};`)}
  ${p("Using <code>context</code> (not <code>document</code>) ensures components initialise correctly when content is loaded via AJAX — e.g. views, dialogs, and BigPipe placeholders.")}

  ${h2("Storybook usage")}
  ${p("In Storybook stories, init functions are called directly after rendering via the <code>play</code> function or inline script tags, since Drupal behaviours are not available:")}
  ${codeBlock(`import { initAccordion } from './accordion.js';

export const Default = {
  render: (args) => \`<div class="accordion">…</div>\`,
  play: async ({ canvasElement }) => {
    canvasElement.querySelectorAll('.accordion').forEach(initAccordion);
  }
};`)}

  ${h2("Components with JS")}
  ${ul([
    `${code("accordion")} — toggle ${code("aria-expanded")} + keyboard navigation`,
    `${code("header")} — mega menu open/close, mobile hamburger`,
    `${code("tab")} — keyboard-accessible tab switching`,
    `${code("toggle")} — checked state management`,
    `${code("video")} — YouTube embed and mute/unmute`,
    `${code("video-carousel")} — coverflow layout and navigation`
  ])}

  ${h2("Components without JS")}
  ${p("The following components are purely CSS-driven and export an empty stub:")}
  ${ul([
    "button, breadcrumb, card, checkbox, content-tiles, cta-banner",
    "featured-content, footer, hero, inline-link, input-field",
    "radio-button, search, select-box, standout-link, submit",
    "table, tag-accent, tag-primary, text-area, tile"
  ])}
`);

AutomaticInit.storyName = "Automatic Component Initialization";
