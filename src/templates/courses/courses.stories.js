import "../../main.scss";
import data from "./courses.json";
import { headerStyles, buildHeader, buildMegaMenu, headerScript } from "../../components/header/header.stories.js";
import { footerStyles, buildFooter } from "../../components/footer/footer.stories.js";
import { buildBreadcrumb } from "../../components/breadcrumb/breadcrumb.stories.js";
import { buildStepCountCards } from "../home/home.stories.js";

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

const styles = '';

// =============================================================================
// Builder helpers
// =============================================================================

function buildHero(d) {
  return `
  <section class="hero hero--landing" aria-label="${d.title}">
    <div class="hero__bg" aria-hidden="true">
      <img src="/images/hero-landing-background.jpg" alt="" class="hero__img">
    </div>
    <div class="hero__inner">
      <div class="hero__content">
        <h1 class="hero__title">${d.title}</h1>
        <p class="hero__summary">${d.subtitle}</p>
      </div>
    </div>
  </section>`;
}

function buildBreadcrumbSection(items) {
  return `<div class="courses-breadcrumb">${buildBreadcrumb(items)}</div>`;
}

function buildFilters(filters, idSuffix = "") {
  return `
  <div class="ug-filters">
    <div class="ug-filters__header">
      <span class="ug-filters__title">Filters</span>
      <button class="ug-filters__reset" type="button">Reset Filters</button>
    </div>

    <div role="group" aria-labelledby="legend-year${idSuffix}">
      <p id="legend-year${idSuffix}" class="ug-filter-group__legend">Academic Year Start</p>
      <div class="check-list">
        ${filters.year_options.map(opt => `
          <label class="check-group">
            <input class="check-input" type="checkbox" name="start${idSuffix}" value="${opt.value}" ${opt.checked ? "checked" : ""}>
            <span class="check-box" aria-hidden="true"></span>
            <span class="check-label">${opt.label}</span>
          </label>`).join("")}
      </div>
    </div>

    <div role="group" aria-labelledby="legend-field${idSuffix}">
      <p id="legend-field${idSuffix}" class="ug-filter-group__legend">Subject Area</p>
      <div class="check-list">
        ${filters.field_options.map(opt => `
          <label class="check-group">
            <input class="check-input" type="checkbox" name="field${idSuffix}" value="${opt.value}" ${opt.checked ? "checked" : ""}>
            <span class="check-box" aria-hidden="true"></span>
            <span class="check-label">${opt.label}</span>
          </label>`).join("")}
      </div>
    </div>
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
  // ── Drawer ──────────────────────────────────────────────────────────────
  var btn      = document.querySelector('.ug-filter-btn');
  var drawer   = document.getElementById('ug-drawer');
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

  // ── Active filter tags ───────────────────────────────────────────────────
  var tagsContainer = document.getElementById('ug-active-filters');
  var dismissSvg = '<svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="1" y1="1" x2="9" y2="9"/><line x1="9" y1="1" x2="1" y2="9"/></svg>';

  // Sidebar inputs (source of truth); drawer inputs are kept in sync
  var sidebar = document.querySelector('.layout-listing__sidebar');

  function getSidebarInputs() {
    return sidebar ? Array.from(sidebar.querySelectorAll('.check-input')) : [];
  }

  function getDrawerInput(name, value) {
    if (!drawer) return null;
    return drawer.querySelector('.check-input[name="' + name + '-m"][value="' + value + '"]');
  }

  function getLabelFor(input) {
    var label = input.closest('.check-group');
    if (!label) return input.value;
    var span = label.querySelector('.check-label');
    return span ? span.textContent.trim() : input.value;
  }

  function addTag(input) {
    if (!tagsContainer) return;
    var existing = tagsContainer.querySelector('[data-filter-name="' + input.name + '"][data-filter-value="' + input.value + '"]');
    if (existing) return;

    var tag = document.createElement('span');
    tag.className = 'tag tag--default tag--dismissible';
    tag.setAttribute('data-filter-name', input.name);
    tag.setAttribute('data-filter-value', input.value);
    tag.textContent = getLabelFor(input) + ' ';

    var dismissBtn = document.createElement('button');
    dismissBtn.className = 'tag__dismiss';
    dismissBtn.setAttribute('aria-label', 'Remove ' + getLabelFor(input) + ' filter');
    dismissBtn.innerHTML = dismissSvg;
    dismissBtn.addEventListener('click', function() {
      // Uncheck sidebar input
      input.checked = false;
      // Uncheck drawer counterpart
      var drawerInput = getDrawerInput(input.name, input.value);
      if (drawerInput) drawerInput.checked = false;
      // Remove tag
      tag.remove();
    });

    tag.appendChild(dismissBtn);
    tagsContainer.appendChild(tag);
  }

  function removeTag(name, value) {
    if (!tagsContainer) return;
    var tag = tagsContainer.querySelector('[data-filter-name="' + name + '"][data-filter-value="' + value + '"]');
    if (tag) tag.remove();
  }

  // Listen on sidebar checkboxes
  getSidebarInputs().forEach(function(input) {
    // Render initial state (pre-checked items)
    if (input.checked) addTag(input);

    input.addEventListener('change', function() {
      // Sync drawer
      var drawerInput = getDrawerInput(input.name, input.value);
      if (drawerInput) drawerInput.checked = input.checked;
      // Update tags
      if (input.checked) {
        addTag(input);
      } else {
        removeTag(input.name, input.value);
      }
    });
  });

  // Listen on drawer checkboxes → sync back to sidebar
  if (drawer) {
    Array.from(drawer.querySelectorAll('.check-input')).forEach(function(drawerInput) {
      drawerInput.addEventListener('change', function() {
        // Derive sidebar name (strip trailing "-m")
        var sidebarName = drawerInput.name.replace(/-m$/, '');
        var sidebarInput = sidebar && sidebar.querySelector('.check-input[name="' + sidebarName + '"][value="' + drawerInput.value + '"]');
        if (sidebarInput) {
          sidebarInput.checked = drawerInput.checked;
          if (drawerInput.checked) {
            addTag(sidebarInput);
          } else {
            removeTag(sidebarName, drawerInput.value);
          }
        }
      });
    });
  }
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
  ${buildBreadcrumbSection(d.breadcrumb)}

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
          <div class="ug-active-filters" id="ug-active-filters" aria-label="Active filters" aria-live="polite"></div>
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

  ${buildStepCountCards(d.apply_journey)}
  ${buildNewsletter(d.newsletter)}
  ${buildFooter()}
</div>
${headerScript}
${drawerScript}`;

// =============================================================================
// Story
// =============================================================================

export default {
  title: "Templates/Courses",
  render,
};

export const Default = { args: data.default };
