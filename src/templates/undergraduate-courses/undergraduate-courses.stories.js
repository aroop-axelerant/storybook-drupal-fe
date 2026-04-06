import "../../main.scss";
import data from "./undergraduate-courses.json";
import { headerStyles, buildHeader, buildMegaMenu, headerScript } from "../../components/header/header.stories.js";
import { footerStyles, buildFooter } from "../../components/footer/footer.stories.js";

// =============================================================================
// Icons
// =============================================================================

const iconSearch = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
const iconFilter = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>`;
const iconClose = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
const iconArrow = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

// =============================================================================
// Styles
// =============================================================================

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ul, ol { list-style: none; }
  img { display: block; width: 100%; }

  /* ── Template root ──────────────────────────────────────────── */
  .t-ug-courses {
    font-family: var(--font-sans);
    background: var(--color-off-white);
  }

  /* ── Shared eyebrow ─────────────────────────────────────────── */
  .ug-eyebrow {
    display: block;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-charcoal-40);
    margin-bottom: var(--sp-8);
  }

  /* ══════════════════════════════════════════════════════════════
     HERO
  ══════════════════════════════════════════════════════════════ */
  .ug-hero {
    background: var(--gradient-editorial);
    padding: var(--sp-96) 0 var(--sp-64);
  }
  .ug-hero__title {
    font-family: var(--font-serif);
    font-size: var(--text-display-m);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-m);
    color: var(--color-white);
    margin-bottom: var(--sp-16);
  }
  .ug-hero__subtitle {
    font-size: var(--text-body-lg, 1.125rem);
    line-height: 1.6;
    color: rgba(255,255,255,0.75);
    max-width: 600px;
  }
  @media (max-width: 767px) {
    .ug-hero { padding: var(--sp-64) 0 var(--sp-48); }
    .ug-hero__title { font-size: var(--text-display-s); }
  }

  /* ══════════════════════════════════════════════════════════════
     BREADCRUMB
  ══════════════════════════════════════════════════════════════ */
  .ug-breadcrumb {
    background: var(--color-white);
    border-bottom: 1px solid var(--color-charcoal-10);
    padding: var(--sp-12) 0;
  }
  .ug-breadcrumb__list {
    display: flex;
    align-items: center;
    gap: var(--sp-8);
    flex-wrap: wrap;
  }
  .ug-breadcrumb__item { display: flex; align-items: center; gap: var(--sp-8); }
  .ug-breadcrumb__link {
    font-size: var(--text-body-sm, 0.875rem);
    color: var(--color-charcoal-60);
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color var(--duration-fast) var(--ease-out);
  }
  .ug-breadcrumb__link:hover { color: var(--color-charcoal); }
  .ug-breadcrumb__sep { font-size: var(--text-body-sm, 0.875rem); color: var(--color-charcoal-30); }
  .ug-breadcrumb__current { font-size: var(--text-body-sm, 0.875rem); color: var(--color-charcoal); font-weight: 500; }

  /* ══════════════════════════════════════════════════════════════
     LISTING SECTION
  ══════════════════════════════════════════════════════════════ */
  .ug-listing {
    padding: var(--sp-48) 0 var(--sp-96);
  }

  /* Mobile bar (filter trigger + search) */
  .ug-listing__mobile-bar {
    display: none;
    align-items: center;
    gap: var(--sp-12);
    margin-bottom: var(--sp-24);
  }
  @media (max-width: 1023px) {
    .ug-listing__mobile-bar { display: flex; }
  }

  /* ── Search ─────────────────────────────────────────────────── */
  .ug-search {
    display: flex;
    align-items: center;
    gap: var(--sp-8);
    flex: 1;
    background: var(--color-white);
    border: 1px solid var(--color-charcoal-20);
    border-radius: var(--radius-l);
    padding: var(--sp-8) var(--sp-16);
    box-shadow: inset 0 1px 2px rgba(11,25,26,0.08);
    transition: border-color var(--duration-fast) var(--ease-out);
  }
  .ug-search:focus-within { border-color: var(--color-charcoal); }
  .ug-search__icon { flex-shrink: 0; color: var(--color-charcoal-40); }
  .ug-search__input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--font-sans);
    font-size: var(--text-body-sm, 0.875rem);
    color: var(--color-charcoal);
  }
  .ug-search__input::placeholder { color: var(--color-charcoal-40); }

  /* Desktop search — hidden on mobile via layout-listing__sidebar hiding */
  .ug-search--desktop {
    margin-bottom: var(--sp-24);
  }
  @media (max-width: 1023px) {
    .ug-search--desktop { display: none; }
  }

  /* ── Mobile filter button ───────────────────────────────────── */
  .ug-filter-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-8);
    padding: var(--sp-8) var(--sp-16);
    font-family: var(--font-sans);
    font-size: var(--text-body-sm, 0.875rem);
    font-weight: 600;
    color: var(--color-action-primary);
    background: transparent;
    border: 2px solid var(--color-action-primary);
    border-radius: var(--radius-l);
    cursor: pointer;
    white-space: nowrap;
    transition: background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);
    flex-shrink: 0;
  }
  .ug-filter-btn:hover { background: var(--color-action-primary); color: var(--color-white); }

  /* ══════════════════════════════════════════════════════════════
     FILTER SIDEBAR
  ══════════════════════════════════════════════════════════════ */
  .ug-filters {
    background: var(--color-white);
    border-radius: var(--radius-m);
    padding: var(--sp-24);
    border: 1px solid var(--color-charcoal-10);
  }
  .ug-filters__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--sp-24);
  }
  .ug-filters__title {
    font-size: var(--text-h4);
    font-weight: 700;
    color: var(--color-charcoal);
  }
  .ug-filters__reset {
    font-size: var(--text-body-sm, 0.875rem);
    font-weight: 600;
    color: var(--color-action-primary);
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;
    padding: 0;
  }
  .ug-filters__reset:hover { opacity: 0.7; }

  .ug-filter-group { margin-bottom: var(--sp-24); }
  .ug-filter-group:last-child { margin-bottom: 0; }
  .ug-filter-group__legend {
    display: block;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-charcoal-40);
    margin-bottom: var(--sp-12);
  }
  .ug-filter-option {
    display: flex;
    align-items: center;
    gap: var(--sp-12);
    padding: var(--sp-8) 0;
    cursor: pointer;
    border-bottom: 1px solid var(--color-charcoal-10);
  }
  .ug-filter-option:last-child { border-bottom: none; }
  .ug-filter-option__label {
    font-size: var(--text-body-sm, 0.875rem);
    color: var(--color-charcoal);
    line-height: 1.4;
  }

  /* ══════════════════════════════════════════════════════════════
     COURSE LIST
  ══════════════════════════════════════════════════════════════ */
  .ug-course-list { border-top: 1px solid var(--color-charcoal-20); }

  .ug-course-row__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-16);
    padding: var(--sp-16) var(--sp-8);
    border-bottom: 1px solid var(--color-charcoal-20);
    text-decoration: none;
    transition: background var(--duration-fast) var(--ease-out);
    border-radius: var(--radius-xs);
  }
  .ug-course-row__link:hover { background: rgba(11,25,26,0.02); }
  .ug-course-row__link:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 2px; }

  .ug-course-row__left {
    display: flex;
    align-items: center;
    gap: var(--sp-12);
    flex-wrap: wrap;
    flex: 1;
  }
  .ug-course-row__title {
    font-size: var(--text-h4);
    font-weight: 600;
    color: var(--color-charcoal);
    line-height: 1.3;
    transition: color var(--duration-fast) var(--ease-out);
  }
  .ug-course-row__link:hover .ug-course-row__title { color: var(--color-action-primary); }

  .ug-course-row__qual {
    font-size: var(--text-body-sm, 0.875rem);
    color: var(--color-charcoal-60);
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* Course badges */
  .ug-course-row__badge {
    display: inline-flex;
    align-items: center;
    font-size: 0.625rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 3px var(--sp-8);
    border-radius: var(--radius-l);
    white-space: nowrap;
    line-height: 1;
  }
  .ug-course-row__badge--green {
    background: var(--color-action-primary);
    color: var(--color-white);
  }
  .ug-course-row__badge--violet {
    background: var(--color-violet);
    color: var(--color-charcoal-80);
  }

  @media (max-width: 767px) {
    .ug-course-row__link { flex-direction: column; align-items: flex-start; gap: var(--sp-4); }
    .ug-course-row__qual { font-size: 0.75rem; }
  }

  /* ══════════════════════════════════════════════════════════════
     MOBILE FILTER DRAWER
  ══════════════════════════════════════════════════════════════ */
  .ug-drawer-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(11,25,26,0.45);
    z-index: 299;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--duration-slow) var(--ease-out),
                visibility var(--duration-slow) var(--ease-out);
  }
  .ug-drawer-backdrop.is-open {
    opacity: 1;
    visibility: visible;
  }
  .ug-drawer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 300;
    background: var(--color-white);
    border-radius: var(--radius-m) var(--radius-m) 0 0;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    transform: translateY(100%);
    visibility: hidden;
    transition: transform var(--duration-slow) cubic-bezier(0.32,0.72,0,1),
                visibility var(--duration-slow) var(--ease-out);
  }
  .ug-drawer:not([hidden]).is-open {
    transform: translateY(0);
    visibility: visible;
  }
  .ug-drawer[hidden] { display: none; }

  .ug-drawer__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--sp-24) var(--sp-24) var(--sp-16);
    flex-shrink: 0;
  }
  .ug-drawer__title {
    font-size: var(--text-h4);
    font-weight: 700;
    color: var(--color-charcoal);
  }
  .ug-drawer__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    border-radius: 50%;
    border: none;
    background: var(--color-charcoal-10);
    cursor: pointer;
    color: var(--color-charcoal);
    transition: background var(--duration-fast) var(--ease-out);
  }
  .ug-drawer__close:hover { background: var(--color-charcoal-20); }
  .ug-drawer__close:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 2px; }

  .ug-drawer__body {
    flex: 1;
    overflow-y: auto;
    padding: var(--sp-8) var(--sp-24);
  }
  .ug-drawer__footer {
    display: flex;
    align-items: center;
    gap: var(--sp-12);
    padding: var(--sp-16) var(--sp-24) var(--sp-24);
    border-top: 1px solid var(--color-charcoal-10);
    flex-shrink: 0;
  }
  .ug-drawer__apply {
    flex: 1;
    padding: var(--sp-12) var(--sp-24);
    background: var(--color-action-primary);
    color: var(--color-white);
    border: none;
    border-radius: var(--radius-l);
    font-family: var(--font-sans);
    font-size: var(--text-body-sm, 0.875rem);
    font-weight: 600;
    cursor: pointer;
    transition: background var(--duration-fast) var(--ease-out);
  }
  .ug-drawer__apply:hover { background: var(--color-forest-green-hover); }
  .ug-drawer__reset {
    font-size: var(--text-body-sm, 0.875rem);
    font-weight: 600;
    color: var(--color-action-primary);
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;
    padding: 0;
  }

  /* ══════════════════════════════════════════════════════════════
     JOURNEY CARDS
  ══════════════════════════════════════════════════════════════ */
  .ug-journey {
    padding: var(--sp-96) 0;
    background: var(--color-white);
  }
  .ug-journey__header {
    margin-bottom: var(--sp-48);
  }
  .ug-journey__heading {
    font-family: var(--font-serif);
    font-size: var(--text-display-s);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-s);
    color: var(--color-charcoal);
  }
  .ug-journey__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--sp-32);
    align-items: stretch;
  }
  @media (max-width: 1023px) {
    .ug-journey__grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 767px) {
    .ug-journey { padding: var(--sp-64) 0; }
    .ug-journey__heading { font-size: var(--text-h2); }
    .ug-journey__grid { grid-template-columns: 1fr; }
  }

  .ug-journey-card {
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-m);
    overflow: hidden;
    transition: transform var(--duration) var(--ease-out);
  }
  .ug-journey-card:hover { transform: translateY(-4px); }

  .ug-journey-card__image {
    width: 100%;
    aspect-ratio: 3/4;
    border-radius: 999px 999px var(--radius-xs) var(--radius-xs);
    overflow: hidden;
    flex-shrink: 0;
  }
  .ug-journey-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .ug-journey-card__body {
    flex: 1;
    margin-top: calc(var(--sp-96) * -1);
    position: relative;
    z-index: 1;
    margin-inline: var(--sp-16);
    border-radius: var(--radius-m);
    padding: var(--sp-32);
    display: flex;
    flex-direction: column;
    gap: var(--sp-12);
  }
  .ug-journey-card--zingy-yellow .ug-journey-card__body { background: var(--color-zingy-yellow-50); }
  .ug-journey-card--violet      .ug-journey-card__body { background: var(--color-violet); }
  .ug-journey-card--peach       .ug-journey-card__body { background: var(--color-soft-peach-50); }

  .ug-journey-card__heading {
    font-size: var(--text-h4);
    font-weight: 600;
    color: var(--color-charcoal);
    line-height: 1.3;
  }
  .ug-journey-card__text {
    font-size: var(--text-body-sm, 0.875rem);
    line-height: 1.6;
    color: var(--color-charcoal-60);
  }

  /* ══════════════════════════════════════════════════════════════
     NEWSLETTER
  ══════════════════════════════════════════════════════════════ */
  .ug-newsletter {
    background: var(--gradient-accent);
    padding: var(--sp-64) 0;
  }
  .ug-newsletter__inner {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--sp-48);
    align-items: center;
  }
  .ug-newsletter__copy { display: flex; flex-direction: column; gap: var(--sp-8); }
  .ug-newsletter__heading {
    font-family: var(--font-serif);
    font-size: clamp(1.5rem, 2.5vw, 2.25rem);
    font-weight: var(--fw-regular);
    color: var(--color-charcoal);
    line-height: 1.2;
  }
  .ug-newsletter__body {
    font-size: var(--text-body-sm, 0.875rem);
    line-height: 1.6;
    color: var(--color-charcoal-60);
    max-width: 48ch;
  }
  .ug-newsletter__form {
    display: flex;
    gap: var(--sp-8);
    align-items: center;
    flex-shrink: 0;
  }
  .ug-newsletter__input {
    padding: var(--sp-12) var(--sp-16);
    border: 1px solid var(--color-charcoal-20);
    border-radius: var(--radius-l);
    background: var(--color-white);
    font-family: var(--font-sans);
    font-size: var(--text-body-sm, 0.875rem);
    color: var(--color-charcoal);
    min-width: 260px;
    outline: none;
    transition: border-color var(--duration-fast) var(--ease-out);
  }
  .ug-newsletter__input:focus { border-color: var(--color-action-primary); }
  .ug-newsletter__input::placeholder { color: var(--color-charcoal-40); }
  .ug-newsletter__submit {
    padding: var(--sp-12) var(--sp-24);
    background: var(--color-action-primary);
    color: var(--color-white);
    border: none;
    border-radius: var(--radius-l);
    font-family: var(--font-sans);
    font-size: var(--text-body-sm, 0.875rem);
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background var(--duration-fast) var(--ease-out);
  }
  .ug-newsletter__submit:hover { background: var(--color-forest-green-hover); }
  .ug-newsletter__submit:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 3px; }
  .ug-newsletter__submit:active { transform: scale(0.98); }

  @media (max-width: 1023px) {
    .ug-newsletter__inner { grid-template-columns: 1fr; gap: var(--sp-32); }
    .ug-newsletter__form { flex-direction: column; align-items: stretch; }
    .ug-newsletter__input { min-width: 0; width: 100%; }
  }
</style>`;

// =============================================================================
// Builder helpers
// =============================================================================

function buildHero(d) {
  return `
  <section class="ug-hero">
    <div class="layout-container">
      <h1 class="ug-hero__title">${d.title}</h1>
      <p class="ug-hero__subtitle">${d.subtitle}</p>
    </div>
  </section>`;
}

function buildBreadcrumb(items) {
  return `
  <nav class="ug-breadcrumb" aria-label="Breadcrumb">
    <div class="layout-container">
      <ol class="ug-breadcrumb__list">
        ${items.map(crumb => `
          <li class="ug-breadcrumb__item">
            ${crumb.href
              ? `<a class="ug-breadcrumb__link" href="${crumb.href}">${crumb.label}</a><span class="ug-breadcrumb__sep" aria-hidden="true">/</span>`
              : `<span class="ug-breadcrumb__current" aria-current="page">${crumb.label}</span>`
            }
          </li>`).join("")}
      </ol>
    </div>
  </nav>`;
}

function buildFilters(filters, idSuffix = "") {
  return `
  <div class="ug-filters">
    <div class="ug-filters__header">
      <span class="ug-filters__title">Filters</span>
      <button class="ug-filters__reset" type="button">Reset Filters</button>
    </div>

    <fieldset style="border:none;padding:0;margin:0">
      <legend class="ug-filter-group__legend">Academic Year Start</legend>
      <div class="ug-filter-group">
        ${filters.year_options.map(opt => `
          <label class="ug-filter-option check-group">
            <input class="check-input" type="radio" name="start${idSuffix}" value="${opt.value}" ${opt.checked ? "checked" : ""}>
            <span class="check-box" aria-hidden="true"></span>
            <span class="ug-filter-option__label check-label">${opt.label}</span>
          </label>`).join("")}
      </div>
    </fieldset>

    <fieldset style="border:none;padding:0;margin:0">
      <legend class="ug-filter-group__legend">Subject Area</legend>
      <div class="ug-filter-group">
        ${filters.field_options.map(opt => `
          <label class="ug-filter-option check-group">
            <input class="check-input" type="checkbox" name="field${idSuffix}" value="${opt.value}" ${opt.checked ? "checked" : ""}>
            <span class="check-box" aria-hidden="true"></span>
            <span class="ug-filter-option__label check-label">${opt.label}</span>
          </label>`).join("")}
      </div>
    </fieldset>
  </div>`;
}

function buildCourseList(courses) {
  return `
  <ol class="ug-course-list">
    ${courses.map(course => `
      <li class="ug-course-row">
        <a class="ug-course-row__link" href="${course.href}">
          <div class="ug-course-row__left">
            <span class="ug-course-row__title">${course.title}</span>
            ${course.badge ? `<span class="ug-course-row__badge ug-course-row__badge--${course.badge === 'Foundation' ? 'violet' : 'green'}">${course.badge}</span>` : ""}
          </div>
          <span class="ug-course-row__qual">${course.qualification}</span>
        </a>
      </li>`).join("")}
  </ol>`;
}

function buildJourneyCards(d) {
  return `
  <section class="ug-journey">
    <div class="layout-container">
      <div class="ug-journey__header">
        <span class="ug-eyebrow">${d.overline}</span>
        <h2 class="ug-journey__heading">${d.heading}</h2>
      </div>
      <div class="ug-journey__grid">
        ${d.cards.map(card => `
          <article class="ug-journey-card ug-journey-card--${card.color}">
            <div class="ug-journey-card__image">
              <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
            </div>
            <div class="ug-journey-card__body">
              <h3 class="ug-journey-card__heading">${card.heading}</h3>
              <p class="ug-journey-card__text">${card.body}</p>
            </div>
          </article>`).join("")}
      </div>
    </div>
  </section>`;
}

function buildNewsletter(d) {
  return `
  <section class="ug-newsletter">
    <div class="layout-container">
      <div class="ug-newsletter__inner">
        <div class="ug-newsletter__copy">
          <span class="ug-eyebrow">${d.eyebrow}</span>
          <h2 class="ug-newsletter__heading">${d.heading}</h2>
          <p class="ug-newsletter__body">${d.body}</p>
        </div>
        <form class="ug-newsletter__form" action="#" method="post">
          <input class="ug-newsletter__input" type="email" placeholder="${d.placeholder}" aria-label="${d.placeholder}" required>
          <button class="ug-newsletter__submit" type="submit">${d.submit}</button>
        </form>
      </div>
    </div>
  </section>`;
}

// =============================================================================
// Drawer script
// =============================================================================

const drawerScript = `
<script>
(function() {
  var btn     = document.querySelector('.ug-filter-btn');
  var drawer  = document.getElementById('ug-drawer');
  var backdrop = document.getElementById('ug-backdrop');
  var closeBtn = drawer && drawer.querySelector('.ug-drawer__close');
  var applyBtn = drawer && drawer.querySelector('.ug-drawer__apply');

  function openDrawer() {
    if (!drawer) return;
    drawer.removeAttribute('hidden');
    requestAnimationFrame(function() {
      drawer.classList.add('is-open');
      backdrop.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
    if (btn) btn.setAttribute('aria-expanded', 'false');
    setTimeout(function() { drawer.setAttribute('hidden', ''); }, 380);
  }

  if (btn)      btn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (applyBtn) applyBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeDrawer(); });
})();
</script>`;

// =============================================================================
// Render
// =============================================================================

const render = (d) => `
${styles}
${headerStyles}
${footerStyles}
<div class="t-ug-courses">
  ${buildHeader()}
  ${buildMegaMenu()}
  ${buildHero(d.hero)}
  ${buildBreadcrumb(d.breadcrumb)}

  <section class="ug-listing">
    <div class="layout-container">

      <div class="ug-listing__mobile-bar">
        <div class="ug-search">
          ${iconSearch}
          <input class="ug-search__input" type="search" placeholder="Search courses…" aria-label="Search courses">
        </div>
        <button class="ug-filter-btn" aria-controls="ug-drawer" aria-expanded="false">
          ${iconFilter} Filters
        </button>
      </div>

      <div class="layout-listing">
        <aside class="layout-listing__sidebar">
          ${buildFilters(d.filters)}
        </aside>
        <div class="layout-listing__main">
          <div class="ug-search ug-search--desktop">
            ${iconSearch}
            <input class="ug-search__input" type="search" placeholder="Search courses…" aria-label="Search courses">
          </div>
          ${buildCourseList(d.courses)}
        </div>
      </div>

    </div>
  </section>

  <div class="ug-drawer-backdrop" id="ug-backdrop" aria-hidden="true"></div>
  <div class="ug-drawer" id="ug-drawer" role="dialog" aria-modal="true" aria-label="Filter courses" hidden>
    <div class="ug-drawer__header">
      <span class="ug-drawer__title">Filters</span>
      <button class="ug-drawer__close" aria-label="Close filters">${iconClose}</button>
    </div>
    <div class="ug-drawer__body">
      ${buildFilters(d.filters, "-m")}
    </div>
    <div class="ug-drawer__footer">
      <button class="ug-drawer__apply">Apply Filters</button>
      <button class="ug-drawer__reset">Reset</button>
    </div>
  </div>

  ${buildJourneyCards(d.journey)}
  ${buildNewsletter(d.newsletter)}
  ${buildFooter()}
</div>
${headerScript}
${drawerScript}`;

// =============================================================================
// Story
// =============================================================================

export default {
  title: "Templates/Undergraduate Courses",
  render,
};

export const Default = { args: data.default };
