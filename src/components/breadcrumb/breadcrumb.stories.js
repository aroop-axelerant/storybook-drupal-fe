import "../../main.scss";
import data from "./breadcrumb.json";

export default {
  title: "Components/Breadcrumb",
  excludeStories: ["buildBreadcrumb"],
};

// =============================================================================
// Styles
// =============================================================================

// =============================================================================
// HTML builder
// =============================================================================

const sepIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <polyline points="9 18 15 12 9 6"/>
</svg>`;

export function buildBreadcrumb(items, inverse = false) {
  // Intermediate items: index > 0 and not last
  const hiddenItems = items.filter((_, i) => i > 0 && i < items.length - 1);

  const crumbs = items.map((item, i) => {
    const isFirst = i === 0;
    const isLast = i === items.length - 1;
    const isIntermediate = !isFirst && !isLast;

    const crumb = item.href && !isLast
      ? `<a href="${item.href}" class="breadcrumb__link">${item.label}</a>`
      : `<span class="breadcrumb__current" aria-current="page">${item.label}</span>`;
    const sep = !isLast
      ? `<span class="breadcrumb__sep" aria-hidden="true">${sepIcon}</span>`
      : '';

    // After the first item, inject the ellipsis button (only once)
    let ellipsis = '';
    if (isFirst && hiddenItems.length > 0) {
      const dropdownLinks = hiddenItems.map(h =>
        `<a href="${h.href}" class="breadcrumb__dropdown-link">${h.label}</a>`
      ).join('');
      ellipsis = `
        <li class="breadcrumb__ellipsis-item" data-breadcrumb-ellipsis>
          <span class="breadcrumb__sep" aria-hidden="true">${sepIcon}</span>
          <button class="breadcrumb__ellipsis-btn"
                  aria-label="Show more breadcrumbs"
                  aria-expanded="false"
                  aria-haspopup="true">
            &hellip;
          </button>
          <div class="breadcrumb__dropdown" role="menu">
            ${dropdownLinks}
          </div>
          <span class="breadcrumb__sep" aria-hidden="true">${sepIcon}</span>
        </li>`;
    }

    return `<li class="breadcrumb__item${isIntermediate ? ' breadcrumb__item--hidden' : ''}">${crumb}${sep}</li>${ellipsis}`;
  }).join('');

  return `
    <nav class="breadcrumb${inverse ? ' breadcrumb--inverse' : ''}"
         aria-label="Breadcrumb">
      <ol class="breadcrumb__list">
        ${crumbs}
      </ol>
    </nav>
    <script>
      (function() {
        document.querySelectorAll('[data-breadcrumb-ellipsis]').forEach(function(item) {
          var btn = item.querySelector('.breadcrumb__ellipsis-btn');
          var dropdown = item.querySelector('.breadcrumb__dropdown');
          function close() {
            item.classList.remove('is-open');
            btn.setAttribute('aria-expanded', 'false');
          }
          btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var open = item.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          });
          document.addEventListener('click', close);
          document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') close();
          });
        });
      })();
    </script>`;
}

// =============================================================================
// Stories
// =============================================================================

const d = data.default;
const v = data.variants;

/**
 * Default — light background, charcoal text
 */
export const Default = () => `
  <div style="background:var(--color-charcoal-10);font-family:var(--font-sans)">
    ${buildBreadcrumb(d.items)}
  </div>
`;

/**
 * Inverse — white text for use on dark or coloured backgrounds
 */
export const Inverse = () => `
  <div style="background:var(--color-charcoal-80);font-family:var(--font-sans)">
    ${buildBreadcrumb(v.inverse.items, true)}
  </div>
`;
