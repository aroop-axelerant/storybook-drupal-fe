import "../../main.scss";
import data from "./course-details.json";
import { headerStyles, buildHeader, buildMegaMenu, headerScript } from "../../components/header/header.stories.js";
import { footerStyles, buildFooter } from "../../components/footer/footer.stories.js";
import { buildBreadcrumb } from "../../components/breadcrumb/breadcrumb.stories.js";

// =============================================================================
// Icons
// =============================================================================

const iconPaths = {
  calendar: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
  book:     `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
  clock:    `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  ucas:     `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3m0 4h4V14h-4"/>`,
};

// =============================================================================
// Builder helpers
// =============================================================================

function buildCourseHero(hero) {
  const highlights = hero.highlights.map(h => `
    <div class="hero__highlight">
      <span class="hero__highlight-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${iconPaths[h.icon] || ''}
        </svg>
      </span>
      <span class="hero__highlight-label">${h.label}</span>
      <span class="hero__highlight-value">${h.value}</span>
    </div>`).join('');

  return `
  <section class="hero hero--course" aria-label="${hero.title}">
    <div class="hero__inner">
      <div class="hero__content">
        ${hero.overline ? `<span class="hero__overline">${hero.overline}</span>` : ''}
        <h1 class="hero__title">${hero.title}</h1>
        ${hero.subtitle ? `<p class="hero__subtitle">${hero.subtitle}</p>` : ''}
        <div class="hero__highlights" role="list" aria-label="Course details">
          ${highlights}
        </div>
      </div>
      <div class="hero__fg">
        <img src="${hero.fg_image_src}" alt="${hero.fg_image_alt}" class="hero__fg-img" loading="eager">
      </div>
    </div>
  </section>`;
}

function buildInPageNav(items) {
  const tabs = items.map((item, i) =>
    `<a class="tab__item${i === 0 ? ' is-active' : ''}" href="${item.href}" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}">${item.label}</a>`
  ).join('');

  return `
  <nav class="cd-inpage-nav" aria-label="On this page">
    <div class="cd-inpage-nav__inner">
      <div class="tab tab--underline-inverse" role="tablist">
        ${tabs}
      </div>
    </div>
  </nav>`;
}

// =============================================================================
// In-page nav active-state scroll script
// =============================================================================

const inPageNavScript = `
<script>
(function () {
  var navLinks = Array.from(document.querySelectorAll('.cd-inpage-nav .tab__item'));
  if (!navLinks.length) return;

  var sections = navLinks.map(function (link) {
    var id = link.getAttribute('href').replace('#', '');
    return document.getElementById(id);
  }).filter(Boolean);

  function onScroll() {
    var scrollY = window.scrollY;
    var active = sections[0];

    sections.forEach(function (section) {
      if (section && section.offsetTop - 120 <= scrollY) {
        active = section;
      }
    });

    navLinks.forEach(function (link) {
      var id = link.getAttribute('href').replace('#', '');
      link.classList.toggle('is-active', active && active.id === id);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth-scroll on click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').replace('#', '');
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
</script>`;

// =============================================================================
// Course styles (re-used from hero.stories.js — inlined here for template self-containment)
// =============================================================================

const courseHeroStyles = `
<style>
  .hero--course {
    background: var(--color-off-white);
    min-height: 620px;
    align-items: stretch;
    overflow: hidden;
  }
  .hero--course .hero__bg { display: none; }
  .hero--course .hero__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    padding: 0;
    max-width: var(--grid-max, 1312px);
    width: 100%;
  }
  .hero--course .hero__content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--sp-96) var(--sp-64) var(--sp-64) var(--sp-64);
  }
  .hero--course .hero__overline { color: var(--color-forest-green); }
  .hero--course .hero__title { color: var(--color-charcoal); margin-bottom: var(--sp-16); }
  .hero--course .hero__subtitle { color: var(--color-charcoal-60); margin-bottom: var(--sp-32); }
  .hero__highlights {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--sp-24);
    padding-top: var(--sp-32);
  }
  .hero__highlight { display: flex; flex-direction: column; gap: var(--sp-4); }
  .hero__highlight-icon { display: flex; align-items: center; color: var(--color-charcoal); width: 28px; height: 28px; }
  .hero__highlight-icon svg { width: 28px; height: 28px; flex-shrink: 0; }
  .hero__highlight-label { font-size: var(--text-body-sm); font-weight: var(--fw-regular); color: var(--color-charcoal-60); line-height: var(--lh-body-sm); }
  .hero__highlight-value { font-size: var(--text-h5); font-weight: var(--fw-bold); color: var(--color-charcoal); line-height: var(--lh-h5); }
  .hero--course .hero__fg { position: relative; align-self: stretch; display: flex; align-items: flex-end; padding: var(--sp-48) var(--sp-48) 0 var(--sp-24); }
  .hero--course .hero__fg-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; display: block; border-radius: var(--radius-l) var(--radius-l) 0 0; filter: none; transform: none; align-self: stretch; min-height: 0; }
  @media (max-width: 1023px) {
    .hero--course { min-height: 500px; }
    .hero--course .hero__content { padding: var(--sp-64) var(--sp-32) var(--sp-48) var(--sp-32); }
    .hero--course .hero__fg { padding: var(--sp-32) var(--sp-32) 0 var(--sp-16); }
  }
  @media (max-width: 767px) {
    .hero--course .hero__inner { grid-template-columns: 1fr; }
    .hero--course .hero__content { padding: var(--sp-48) var(--sp-16) var(--sp-32); }
    .hero--course .hero__fg { padding: 0 var(--sp-16) 0; height: 280px; }
    .hero__highlights { grid-template-columns: repeat(2, 1fr); gap: var(--sp-16); }
  }
</style>`;

// =============================================================================
// Placeholder body sections (so in-page nav links resolve to real anchors)
// =============================================================================

const sectionContent = {
  overview: `
    <h2 style="font-family:var(--font-serif);font-size:var(--text-h2);color:var(--color-charcoal);margin-bottom:var(--sp-24)">Overview</h2>
    <p style="font-family:var(--font-serif);font-size:var(--text-h3);font-weight:400;color:var(--color-charcoal);line-height:1.35;margin-bottom:var(--sp-24);max-width:720px">Become a leader and innovator in global luxury.</p>
    <p style="font-size:var(--text-body);color:var(--color-charcoal-60);max-width:640px;line-height:var(--lh-body)">Step into one of the most prestigious industries and get to grips with what makes luxury so distinct. This CMI-accredited course blends core business principles with specialist insight into luxury brand strategy, marketing and management – giving you the understanding, creativity and connections to excel in the luxury world.</p>`,
};

function buildPlaceholderSections(navItems) {
  const colours = [
    'var(--color-white)',
    'var(--color-off-white)',
    'var(--color-white)',
    'var(--color-off-white)',
    'var(--color-white)',
    'var(--color-off-white)',
  ];
  return navItems.map((item, i) => {
    const id = item.href.replace('#', '');
    const body = sectionContent[id] || `
    <h2 style="font-family:var(--font-serif);font-size:var(--text-h2);color:var(--color-charcoal);margin-bottom:var(--sp-24)">${item.label}</h2>
    <p style="font-size:var(--text-body);color:var(--color-charcoal-60);max-width:640px;line-height:var(--lh-body)">
      This section will contain the ${item.label.toLowerCase()} content for the course. Placeholder content — replace with real Drupal field output.
    </p>`;
    return `
  <section id="${id}" style="background:${colours[i] || 'var(--color-white)'};padding:var(--sp-96) var(--grid-gutter);max-width:var(--grid-max);margin-inline:auto;min-height:400px">
    ${body}
  </section>`;
  }).join('');
}

// =============================================================================
// Render
// =============================================================================

const render = (d) => `
${courseHeroStyles}
${headerStyles}
${footerStyles}
<div class="t-course-details">
  ${buildHeader()}
  ${buildMegaMenu()}
  ${buildCourseHero(d.hero)}
  <div class="cd-breadcrumb">${buildBreadcrumb(d.breadcrumb)}</div>
  ${buildInPageNav(d.in_page_nav)}
  <div style="background:var(--color-off-white)">
    ${buildPlaceholderSections(d.in_page_nav)}
  </div>
  ${buildFooter()}
</div>
${headerScript}
${inPageNavScript}`;

// =============================================================================
// Story
// =============================================================================

export default {
  title: "Templates/Course Details",
  render,
  parameters: { layout: "fullscreen" },
};

export const Default = { args: data.default };
