import "../../main.scss";
import data from "./content-tiles.json";

// =============================================================================
// Styles
// =============================================================================


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
