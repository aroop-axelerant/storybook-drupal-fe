import data from "./home.json";

const cardHtml = (card) => `
<article class="card card--${card.variant || "article"}">
  ${card.image ? `<div class="card__media"><img src="${card.image.src}" alt="${card.image.alt}" loading="lazy" /></div>` : ""}
  <div class="card__body">
    ${card.tag ? `<span class="chip chip--green">${card.tag}</span>` : ""}
    <h3 class="card__heading">${card.heading}</h3>
    ${card.body ? `<p class="card__text">${card.body}</p>` : ""}
    ${card.cta ? `<a href="${card.cta.href}" class="btn btn--outline-dark btn--sm">${card.cta.label}</a>` : ""}
  </div>
</article>`;

const render = ({ header, hero, featured_cards = [], newsletter, footer }) => `
<div class="t-home">
  <header class="site-header site-header--${header?.variant || "light"}" role="banner">
    <div class="site-header__pill">
      <a href="/" class="site-header__logo" aria-label="Regent's University London home">
        <img src="${header?.logo?.src || '/assets/full-logo.svg'}" alt="${header?.logo?.alt || "Regent's University London"}" />
      </a>
      <div class="site-header__pill-divider" aria-hidden="true"></div>
      <nav aria-label="Primary navigation">
        <ul class="site-header__nav">
          ${(header?.nav || []).map(i => `<li><a href="${i.href}" class="site-header__nav-link">${i.label}</a></li>`).join("")}
        </ul>
      </nav>
    </div>
    <div class="site-header__pill">
      ${header?.cta ? `<a href="${header.cta.href}" class="btn btn--primary btn--sm">${header.cta.label}</a>` : ""}
    </div>
  </header>

  <main id="main-content">
    <section class="hero hero--${hero?.variant || "dark"}" style="${hero?.bg_image ? `--hero-bg:url(${hero.bg_image})` : ""}">
      <div class="hero__inner layout-container">
        ${hero?.eyebrow ? `<span class="hero__eyebrow">${hero.eyebrow}</span>` : ""}
        <h1 class="hero__heading">${hero?.heading || ""}</h1>
        ${hero?.body ? `<p class="hero__body">${hero.body}</p>` : ""}
        <div class="hero__ctas">
          ${hero?.cta_primary   ? `<a href="${hero.cta_primary.href}"   class="btn btn--primary">${hero.cta_primary.label}</a>` : ""}
          ${hero?.cta_secondary ? `<a href="${hero.cta_secondary.href}" class="btn btn--outline-dark">${hero.cta_secondary.label}</a>` : ""}
        </div>
      </div>
    </section>

    <section class="section section--cards">
      <div class="layout-container">
        <h2 class="section__heading">Featured Programmes</h2>
        <div class="layout-three-col layout-three-col--auto">
          ${featured_cards.map(cardHtml).join("")}
        </div>
      </div>
    </section>

    <section class="newsletter newsletter--${newsletter?.variant || "gradient"}">
      <div class="newsletter__inner">
        <div class="newsletter__copy">
          ${newsletter?.eyebrow ? `<span class="newsletter__eyebrow">${newsletter.eyebrow}</span>` : ""}
          <h2 class="newsletter__heading">${newsletter?.heading || ""}</h2>
          ${newsletter?.body ? `<p class="newsletter__body">${newsletter.body}</p>` : ""}
        </div>
        <div class="newsletter__form-wrap">
          <form class="newsletter__form" novalidate>
            <div class="newsletter__input-group">
              <label for="nl-email" class="sr-only">Email address</label>
              <input id="nl-email" type="email" class="newsletter__input" placeholder="${newsletter?.input_placeholder || "Your email address"}" />
              <button type="submit" class="newsletter__submit btn btn--primary btn--sm">${newsletter?.submit_label || "Subscribe"}</button>
            </div>
            ${newsletter?.privacy_note ? `<p class="newsletter__privacy">${newsletter.privacy_note}</p>` : ""}
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <a href="/" class="site-footer__logo">
          <img src="${footer?.brand?.logo?.src || '/assets/full-logo-white.svg'}" alt="${footer?.brand?.logo?.alt || "Regent's University London"}" />
        </a>
        ${footer?.brand?.tagline ? `<p class="site-footer__tagline">${footer.brand.tagline}</p>` : ""}
      </div>
      <nav class="site-footer__nav" aria-label="Footer navigation">
        ${(footer?.columns || []).map(col => `
        <div class="site-footer__col">
          <h3 class="site-footer__col-heading">${col.heading}</h3>
          <ul class="site-footer__links">
            ${col.links.map(l => `<li><a href="${l.href}" class="site-footer__link">${l.label}</a></li>`).join("")}
          </ul>
        </div>`).join("")}
      </nav>
    </div>
    <div class="site-footer__legal">
      <p class="site-footer__copyright">${footer?.copyright || ""}</p>
      <ul class="site-footer__legal-links">
        ${(footer?.legal || []).map(l => `<li><a href="${l.href}" class="site-footer__legal-link">${l.label}</a></li>`).join("")}
      </ul>
    </div>
  </footer>
</div>`;

export default {
  title: "Templates/Home",
  render,
  parameters: { layout: "fullscreen", backgrounds: { default: "off-white" } },
};

export const Default = { args: data.default };
