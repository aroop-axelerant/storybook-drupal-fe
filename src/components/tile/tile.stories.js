import "../../main.scss";
import data from "./tile.json";

const ICON_BG_CYCLE = [
  "var(--color-zingy-yellow-50)",
  "var(--color-bg-peach)",
  "var(--color-bg-violet)",
  "var(--color-charcoal-20)",
];

const styles = '';

const renderTile = ({ variant, icon, heading, body, index = 0 }) => {
  const isInverse = variant === "inverse";
  const iconBg = ICON_BG_CYCLE[index % ICON_BG_CYCLE.length];
  return `
<div class="tile${isInverse ? " tile--inverse" : ""}">
  <div class="tile__icon-wrap" style="background: ${iconBg};">
    ${icon}
  </div>
  <h3 class="tile__heading">${heading}</h3>
  <p class="tile__body">${body}</p>
</div>`;
};

const render = ({ variant = "default", items = [] }) => {
  const tiles = (items.length ? items : data.default.items)
    .map((item, index) => renderTile({ variant, ...item, index }))
    .join("\n");

  const bg = variant === "inverse"
    ? `background: var(--color-charcoal);`
    : `background: var(--color-off-white);`;

  return `
${styles}
<div style="${bg} padding: var(--sp-64) var(--sp-32); font-family: var(--font-sans);">
  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0; max-width: var(--grid-max); margin-inline: auto; overflow: hidden;">
    ${tiles}
  </div>
</div>`;
};

export default {
  title: "Components/Tile",
  render,
  argTypes: {
    variant: { control: "select", options: ["default", "inverse"] },
  },
};

export const Default = { args: data.default };
export const Inverse = { args: { ...data.default, ...data.variants.inverse } };
