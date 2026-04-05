import "../../../scss/main.scss";
import data from "./breadcrumb.json";

export default {
  title: "Components/Breadcrumb",
};

// =============================================================================
// Styles
// =============================================================================

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ul, ol { list-style: none; }

  /* ── Breadcrumb ───────────────────────────────────────────────────────── */
  .breadcrumb {
    width: 100%;
    padding: var(--sp-12) 0;
  }

  .breadcrumb__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--sp-4);
    max-width: var(--grid-max, 1312px);
    margin: 0 auto;
    padding: 0 var(--sp-64);
  }

  @media (max-width: 1023px) {
    .breadcrumb__list { padding: 0 var(--sp-32); }
  }

  @media (max-width: 767px) {
    .breadcrumb__list { padding: 0 var(--sp-16); }
  }

  .breadcrumb__item {
    display: flex;
    align-items: center;
    gap: var(--sp-4);
  }

  /* ── Links ────────────────────────────────────────────────────────────── */
  .breadcrumb__link {
    font-family: var(--font-sans);
    font-size: var(--text-body-sm);
    font-weight: var(--fw-regular);
    color: var(--color-charcoal-60);
    text-decoration: none;
    line-height: 1;
    border-radius: var(--radius-xs);
    outline: none;
    transition: color var(--duration-fast) var(--ease-out);
    white-space: nowrap;
  }

  .breadcrumb__link:hover {
    color: var(--color-charcoal);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .breadcrumb__link:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 3px;
  }

  /* ── Current page ─────────────────────────────────────────────────────── */
  .breadcrumb__current {
    font-family: var(--font-sans);
    font-size: var(--text-body-sm);
    font-weight: var(--fw-semibold);
    color: var(--color-charcoal);
    line-height: 1;
    white-space: nowrap;
  }

  /* ── Separator ────────────────────────────────────────────────────────── */
  .breadcrumb__sep {
    display: flex;
    align-items: center;
    color: var(--color-charcoal-30);
    flex-shrink: 0;
  }

  /* ── Ellipsis (mobile only) ───────────────────────────────────────────── */
  .breadcrumb__ellipsis-item {
    display: none;
    align-items: center;
    gap: var(--sp-4);
  }

  .breadcrumb__ellipsis-btn {
    font-family: var(--font-sans);
    font-size: var(--text-body-sm);
    font-weight: var(--fw-regular);
    color: var(--color-charcoal-60);
    background: transparent;
    border: none;
    padding: var(--sp-4) var(--sp-8);
    border-radius: var(--radius-xs);
    cursor: pointer;
    line-height: 1;
    letter-spacing: 0.08em;
    outline: none;
    transition: background var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out);
  }

  .breadcrumb__ellipsis-btn:hover {
    background: rgba(0, 0, 0, 0.06);
    color: var(--color-charcoal);
  }

  .breadcrumb__ellipsis-btn:active {
    transform: scale(0.98);
  }

  .breadcrumb__ellipsis-btn:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 3px;
  }

  /* ── Ellipsis dropdown ────────────────────────────────────────────────── */
  .breadcrumb__dropdown {
    position: absolute;
    top: calc(100% + var(--sp-4));
    left: 0;
    background: var(--color-white);
    border-radius: var(--radius-xs);
    box-shadow: var(--shadow-lg);
    padding: var(--sp-4) 0;
    min-width: 160px;
    z-index: 100;
    display: none;
    flex-direction: column;
  }

  .breadcrumb__ellipsis-item.is-open .breadcrumb__dropdown {
    display: flex;
  }

  .breadcrumb__ellipsis-item {
    position: relative;
  }

  .breadcrumb__dropdown-link {
    font-family: var(--font-sans);
    font-size: var(--text-body-sm);
    font-weight: var(--fw-regular);
    color: var(--color-charcoal-60);
    text-decoration: none;
    padding: var(--sp-8) var(--sp-16);
    display: block;
    white-space: nowrap;
    outline: none;
    transition: background var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out);
  }

  .breadcrumb__dropdown-link:hover {
    background: var(--color-charcoal-10);
    color: var(--color-charcoal);
  }

  .breadcrumb__dropdown-link:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: -2px;
  }

  /* ── Mobile — hide intermediate items, show ellipsis ─────────────────── */
  @media (max-width: 767px) {
    .breadcrumb__item--hidden {
      display: none;
    }

    .breadcrumb__ellipsis-item {
      display: flex;
    }

    /* The first item's trailing sep is replaced by the ellipsis item's own leading sep */
    .breadcrumb__item:first-child .breadcrumb__sep {
      display: none;
    }
  }

  /* ── Inverse — for dark / coloured backgrounds ────────────────────────── */
  .breadcrumb--inverse .breadcrumb__link {
    color: rgba(255, 255, 255, 0.60);
  }

  .breadcrumb--inverse .breadcrumb__link:hover {
    color: var(--color-white);
  }

  .breadcrumb--inverse .breadcrumb__current {
    color: var(--color-white);
  }

  .breadcrumb--inverse .breadcrumb__sep {
    color: rgba(255, 255, 255, 0.35);
  }

  .breadcrumb--inverse .breadcrumb__ellipsis-btn {
    color: rgba(255, 255, 255, 0.60);
  }

  .breadcrumb--inverse .breadcrumb__ellipsis-btn:hover {
    background: rgba(255, 255, 255, 0.10);
    color: var(--color-white);
  }

  .breadcrumb--inverse .breadcrumb__dropdown {
    background: var(--color-charcoal-80);
  }

  .breadcrumb--inverse .breadcrumb__dropdown-link {
    color: rgba(255, 255, 255, 0.60);
  }

  .breadcrumb--inverse .breadcrumb__dropdown-link:hover {
    background: rgba(255, 255, 255, 0.08);
    color: var(--color-white);
  }
</style>`;

// =============================================================================
// HTML builder
// =============================================================================

const sepIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <polyline points="9 18 15 12 9 6"/>
</svg>`;

function buildBreadcrumb(items, inverse = false) {
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
  ${styles}
  <div style="background: var(--color-charcoal-10); font-family: var(--font-sans);">
    ${buildBreadcrumb(d.items)}
  </div>
`;

/**
 * Inverse — white text for use on dark or coloured backgrounds
 */
export const Inverse = () => `
  ${styles}
  <div style="background: var(--color-charcoal-80); font-family: var(--font-sans);">
    ${buildBreadcrumb(v.inverse.items, true)}
  </div>
`;
