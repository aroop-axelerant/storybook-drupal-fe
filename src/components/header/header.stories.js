import data from "./header.json";

const navHtml = (nav = []) => nav.map(item => `
  <li>
    <a href="${item.href}" class="site-header__nav-link">${item.label}</a>
  </li>`).join("");

const render = ({ variant = "light", logo, nav, cta, scrolled }) => `
<header class="site-header site-header--${variant}${scrolled ? " site-header--scrolled" : ""}" role="banner">
  <!-- Left pill: logo + nav -->
  <div class="site-header__pill">
    <a href="/" class="site-header__logo" aria-label="Regent's University London home">
      <img src="${logo?.src || '/assets/full-logo.svg'}" alt="${logo?.alt || "Regent's University London"}" />
    </a>
    <div class="site-header__pill-divider" aria-hidden="true"></div>
    <nav aria-label="Primary navigation">
      <ul class="site-header__nav">
        ${navHtml(nav)}
      </ul>
    </nav>
  </div>

  <!-- Right pill: CTA + controls -->
  <div class="site-header__pill">
    ${cta ? `<a href="${cta.href}" class="btn btn--primary btn--sm">${cta.label}</a>` : ""}
    <button class="site-header__icon-btn" aria-label="Search" type="button">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5"/>
        <path d="M12.5 12.5L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
    <button class="site-header__icon-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mega-menu" type="button">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
</header>`;

export default {
  title: "Components/Header",
  render,
  parameters: { layout: "fullscreen", backgrounds: { default: "forest-green" } },
  argTypes: {
    variant:  { control: "select", options: ["light","dark"] },
    scrolled: { control: "boolean" },
  },
};

export const Default  = { args: data.default };
export const Light    = { args: { ...data.default, ...data.variants.light } };
export const Dark     = { args: { ...data.default, ...data.variants.dark }, parameters: { backgrounds: { default: "white" } } };
export const Scrolled = { args: { ...data.default, ...data.variants.scrolled } };
