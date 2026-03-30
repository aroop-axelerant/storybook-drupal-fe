import data from "./course-details.json";

const chipHtml = (label) => `<span class="chip chip--green">${label}</span>`;

const cardHtml = (card) => `
<article class="card card--${card.variant || "course"}">
  ${card.image ? `<div class="card__media"><img src="${card.image.src}" alt="${card.image.alt}" loading="lazy" /></div>` : ""}
  <div class="card__body">
    ${card.tag ? chipHtml(card.tag) : ""}
    <h3 class="card__heading">${card.heading}</h3>
    ${card.body ? `<p class="card__text">${card.body}</p>` : ""}
    ${card.cta ? `<a href="${card.cta.href}" class="btn btn--outline-dark btn--sm">${card.cta.label}</a>` : ""}
  </div>
</article>`;

const statsHtml = (stats = []) => stats.length ? `
<div class="hero__stats">
  ${stats.map(s => `<div class="hero__stat"><span class="hero__stat-value">${s.value}</span><span class="hero__stat-label">${s.label}</span></div>`).join("")}
</div>` : "";

const render = ({ header, hero, course_info, related_courses = [], footer }) => `
<div class="t-course-details">
  <header class="site-header site-header--${header?.variant || "light"}" role="banner">
    <div class="site-header__pill">
      <a href="/" class="site-header__logo" aria-label="Regent's University London home">
        <img src="${header?.logo?.src || '/assets/full-logo.svg'}" alt="${header?.logo?.alt || "Regent's"}" />
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
        ${statsHtml(hero?.stats)}
      </div>
    </section>

    <div class="layout-container" style="padding-block:var(--sp-12)">
      <div class="layout-two-col layout-two-col--editorial">
        <div>
          ${course_info?.overview ? `
          <section class="section" style="margin-bottom:var(--sp-10)">
            <h2 class="section__heading">Programme Overview</h2>
            <p>${course_info.overview}</p>
          </section>` : ""}

          ${course_info?.modules ? `
          <section class="section" style="margin-bottom:var(--sp-10)">
            <h2 class="section__heading">Modules</h2>
            ${course_info.modules.map(yr => `
            <h3>${yr.year}</h3>
            <ul>${yr.items.map(i => `<li>${i}</li>`).join("")}</ul>`).join("")}
          </section>` : ""}

          ${course_info?.entry_requirements ? `
          <section class="section" style="margin-bottom:var(--sp-10)">
            <h2 class="section__heading">Entry Requirements</h2>
            <p>${course_info.entry_requirements}</p>
          </section>` : ""}

          ${course_info?.careers ? `
          <section class="section" style="margin-bottom:var(--sp-10)">
            <h2 class="section__heading">Career Pathways</h2>
            <div style="display:flex;flex-wrap:wrap;gap:var(--sp-2)">
              ${course_info.careers.map(chipHtml).join("")}
            </div>
          </section>` : ""}
        </div>

        <aside style="display:flex;flex-direction:column;gap:var(--sp-3);padding-top:var(--sp-2)">
          <a href="/apply"      class="btn btn--primary btn--lg" style="width:100%;justify-content:center">Apply Now</a>
          <a href="/prospectus" class="btn btn--outline-dark btn--lg" style="width:100%;justify-content:center">Download Prospectus</a>
        </aside>
      </div>
    </div>

    ${related_courses.length ? `
    <section class="section section--related" style="padding-block:var(--sp-12);background:var(--color-bg-subtle)">
      <div class="layout-container">
        <h2 class="section__heading">Related Programmes</h2>
        <div class="layout-three-col">
          ${related_courses.map(cardHtml).join("")}
        </div>
      </div>
    </section>` : ""}
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
  title: "Templates/Course Details",
  render,
  parameters: { layout: "fullscreen", backgrounds: { default: "off-white" } },
};

export const Default = { args: data.default };
