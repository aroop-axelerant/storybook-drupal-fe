import "../../../scss/main.scss";
import data from "./content-tiles.json";

// =============================================================================
// Styles
// =============================================================================

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ul, ol { list-style: none; }
  img { display: block; width: 100%; }

  /* ── Section wrapper ──────────────────────────────────────────────────── */
  .content-tiles {
    padding: var(--sp-96) 0;
    background: var(--color-off-white);
    font-family: var(--font-sans);
  }

  .content-tiles__inner {
    max-width: var(--grid-max);
    margin-inline: auto;
    padding-inline: var(--grid-gutter);
  }

  /* ── Header ───────────────────────────────────────────────────────────── */
  .content-tiles__header {
    display: flex;
    flex-direction: column;
    gap: var(--sp-8);
    margin-bottom: var(--sp-48);
    padding-bottom: var(--sp-48);
    border-bottom: 1px solid var(--color-border);
  }

  .content-tiles__overline {
    font-size: var(--text-overline);
    font-weight: var(--fw-overline);
    letter-spacing: var(--ls-overline);
    text-transform: uppercase;
    color: var(--color-charcoal-60);
  }

  .content-tiles__heading {
    font-family: var(--font-serif);
    font-size: var(--text-display-s);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-s);
    letter-spacing: var(--ls-display-s);
    color: var(--color-charcoal);
  }

  .content-tiles__body {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
    max-width: 65ch;
  }

  /* ── Tiles grid — auto-fit columns between 2-5 tiles ──────────────────── */
  .content-tiles__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0;
    border-bottom: 1px solid var(--color-border);
  }

  /* Override: ensure 2-5 tiles always display in a single row at desktop */
  .content-tiles__grid[data-tile-count="2"] { grid-template-columns: repeat(2, 1fr); }
  .content-tiles__grid[data-tile-count="3"] { grid-template-columns: repeat(3, 1fr); }
  .content-tiles__grid[data-tile-count="4"] { grid-template-columns: repeat(4, 1fr); }
  .content-tiles__grid[data-tile-count="5"] { grid-template-columns: repeat(5, 1fr); }

  .content-tiles__tile {
    display: flex;
    flex-direction: column;
    gap: var(--sp-24);
    padding: var(--sp-32);
    border-right: 1px solid var(--color-border);
  }

  .content-tiles__tile:last-child {
    border-right: none;
  }

  .content-tiles__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--sp-96);
    height: var(--sp-96);
    border-radius: var(--radius-m);
    color: var(--color-charcoal);
  }

  .content-tiles__icon-wrap svg {
    width: 40px;
    height: 40px;
  }

  .content-tiles__tile-heading {
    font-family: var(--font-sans);
    font-size: var(--text-h3);
    font-weight: var(--fw-semibold);
    line-height: var(--lh-h3);
    letter-spacing: var(--ls-h3);
    color: var(--color-charcoal);
  }

  .content-tiles__tile-body {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
  }

  /* ── Responsive ───────────────────────────────────────────────────────── */
  @media (max-width: 1023px) {
    .content-tiles {
      padding: var(--sp-64) 0;
    }

    .content-tiles__header {
      margin-bottom: var(--sp-32);
      padding-bottom: var(--sp-32);
    }

    /* Tablet: 2 cols for 4-5 tiles, 1 col for 2-3 tiles */
    .content-tiles__grid[data-tile-count="2"],
    .content-tiles__grid[data-tile-count="3"] {
      grid-template-columns: 1fr;
    }

    .content-tiles__grid[data-tile-count="4"],
    .content-tiles__grid[data-tile-count="5"] {
      grid-template-columns: repeat(2, 1fr);
    }

    .content-tiles__tile {
      padding: var(--sp-24);
      border-right: none;
      border-bottom: 1px solid var(--color-border);
    }

    .content-tiles__tile:nth-child(odd):last-child {
      border-bottom: none;
    }

    .content-tiles__grid[data-tile-count="2"] .content-tiles__tile:last-child,
    .content-tiles__grid[data-tile-count="3"] .content-tiles__tile:last-child,
    .content-tiles__grid[data-tile-count="4"] .content-tiles__tile:last-child,
    .content-tiles__grid[data-tile-count="5"] .content-tiles__tile:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 767px) {
    .content-tiles {
      padding: var(--sp-48) 0;
    }

    .content-tiles__tile {
      padding: var(--sp-16);
      gap: var(--sp-16);
    }

    .content-tiles__icon-wrap {
      width: var(--sp-64);
      height: var(--sp-64);
    }

    .content-tiles__icon-wrap svg {
      width: 32px;
      height: 32px;
    }
  }
</style>`;

// =============================================================================
// Tile builder
// =============================================================================

const ICON_BG_CYCLE = [
  "var(--color-zingy-yellow-50)",
  "var(--color-bg-peach)",
  "var(--color-bg-violet)",
];

function buildTile({ icon, heading, body }, index) {
  const bgColor = ICON_BG_CYCLE[index % ICON_BG_CYCLE.length];
  return `
    <div class="content-tiles__tile">
      <div class="content-tiles__icon-wrap" style="background: ${bgColor};">
        ${icon}
      </div>
      <h3 class="content-tiles__tile-heading">${heading}</h3>
      <p class="content-tiles__tile-body">${body}</p>
    </div>`;
}

// =============================================================================
// Render
// =============================================================================

const render = ({ variant = "default", overline, heading, body, tiles = [] }) => `
${styles}
<section class="content-tiles">
  <div class="content-tiles__inner">
    <div class="content-tiles__header">
      ${overline ? `<span class="content-tiles__overline">${overline}</span>` : ""}
      <h2 class="content-tiles__heading">${heading}</h2>
      ${body ? `<p class="content-tiles__body">${body}</p>` : ""}
    </div>
    <div class="content-tiles__grid" data-tile-count="${tiles.length}">
      ${tiles.map(buildTile).join("")}
    </div>
  </div>
</section>`;

// =============================================================================
// Story
// =============================================================================

export default {
  title: "Components/Featured Content/Tiles",
  render,
};

export const Default = { args: data.default };
