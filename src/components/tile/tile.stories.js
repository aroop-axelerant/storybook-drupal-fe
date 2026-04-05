import "../../../scss/main.scss";
import data from "./tile.json";

const ICON_BG_CYCLE = [
  "var(--color-zingy-yellow-50)",
  "var(--color-bg-peach)",
  "var(--color-bg-violet)",
  "var(--color-charcoal-20)",
];

const styles = `
  <style>
    .tile {
      display: flex;
      flex-direction: column;
      gap: var(--sp-24);
      padding: var(--sp-32);
      max-width: 400px;
      border-right: 1px solid var(--color-border);
    }

    .tile__icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--sp-96);
      height: var(--sp-96);
      border-radius: var(--radius-m);
      flex-shrink: 0;
      color: var(--color-charcoal);
    }

    .tile__heading {
      margin: 0;
      font-family: var(--font-sans);
      font-size: var(--text-h3);
      font-weight: var(--fw-bold);
      line-height: var(--lh-heading);
      color: var(--color-charcoal);
    }

    .tile--inverse .tile__heading {
      color: var(--color-white);
    }

    .tile__body {
      margin: 0;
      font-family: var(--font-sans);
      font-size: var(--text-body-lg);
      line-height: var(--lh-body-lg);
      color: var(--color-charcoal-60);
    }

    .tile--inverse .tile__body {
      color: rgba(255, 255, 255, 0.75);
    }

    .tile--inverse {
      border-right-color: rgba(255, 255, 255, 0.15);
    }
  </style>
`;

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
