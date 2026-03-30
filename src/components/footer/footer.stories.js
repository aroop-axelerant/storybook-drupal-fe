import data from "./footer.json";

const socialIcon = (platform) => {
  const icons = {
    instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
    linkedin:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.5"/><path d="M7 10v7M7 7v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    youtube:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="4" stroke="currentColor" stroke-width="1.5"/><path d="M10 9l5 3-5 3V9z" fill="currentColor"/></svg>`,
  };
  return icons[platform] || "";
};

const render = ({ brand, columns = [], social = [], legal = [], copyright }) => `
<footer class="site-footer" role="contentinfo">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      <a href="/" class="site-footer__logo" aria-label="${brand?.alt || "Regent's University London home"}">
        <img src="${brand?.logo?.src || '/assets/full-logo-white.svg'}" alt="${brand?.logo?.alt || "Regent's University London"}" />
      </a>
      ${brand?.tagline ? `<p class="site-footer__tagline">${brand.tagline}</p>` : ""}
      <ul class="site-footer__social" aria-label="Social media links">
        ${social.map(s => `
        <li>
          <a href="${s.href}" class="site-footer__social-link" aria-label="${s.label}" target="_blank" rel="noopener noreferrer">
            ${socialIcon(s.platform)}
          </a>
        </li>`).join("")}
      </ul>
    </div>
    <div class="site-footer__nav" aria-label="Footer navigation">
      ${columns.map(col => `
      <div class="site-footer__col">
        <h3 class="site-footer__col-heading">${col.heading}</h3>
        <ul class="site-footer__links">
          ${col.links.map(l => `<li><a href="${l.href}" class="site-footer__link">${l.label}</a></li>`).join("")}
        </ul>
      </div>`).join("")}
    </div>
  </div>
  <div class="site-footer__legal">
    <p class="site-footer__copyright">${copyright || ""}</p>
    <ul class="site-footer__legal-links" aria-label="Legal links">
      ${legal.map(l => `<li><a href="${l.href}" class="site-footer__legal-link">${l.label}</a></li>`).join("")}
    </ul>
  </div>
</footer>`;

export default {
  title: "Components/Footer",
  render,
  parameters: { layout: "fullscreen", backgrounds: { default: "forest-green" } },
};

export const Default = { args: data.default };
