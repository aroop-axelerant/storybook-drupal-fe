import data from "./three-col.json";

const col = (label) =>
  `<div style="background:rgba(0,91,75,.1);border:1px dashed var(--color-forest-green);padding:var(--sp-16);text-align:center;font-family:var(--font-sans);font-size:var(--text-body-sm);color:var(--color-forest-green);border-radius:var(--radius-s);min-height:140px;display:flex;align-items:center;justify-content:center">${label}</div>`;

const render = ({ variant = "equal", items = [] }) => {
  const mod = variant !== "equal" ? ` layout-three-col--${variant}` : "";
  const defaultItems =
    variant === "quad"
      ? ["Column 1", "Column 2", "Column 3", "Column 4"]
      : ["Column 1", "Column 2", "Column 3"];
  const cols = (items.length ? items.map((it) => it.content) : defaultItems)
    .map(col)
    .join("");
  return `
<div style="background:var(--color-off-white);padding:var(--sp-32) 0;font-family:var(--font-sans)">
  <div class="layout-container">
    <div class="layout-three-col${mod}">
      ${cols}
    </div>
  </div>
</div>`;
};

export default {
  title: "Layouts/Three Column",
  render,
  argTypes: {
    variant: { control: "select", options: ["equal", "quad", "auto"] },
  },
};

export const Equal = { args: data.default };
export const Quad  = { args: { ...data.default, ...data.variants.quad } };
export const Auto  = { args: { ...data.default, ...data.variants.auto } };
