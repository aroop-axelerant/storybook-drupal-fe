import data from "./three-col.json";

const col = (label) =>
  `<div style="background:rgba(0,91,75,.1);border:1px dashed #005b4b;padding:var(--sp-6);text-align:center;font-family:var(--font-sans);color:#005b4b;border-radius:var(--radius-s);min-height:140px;display:flex;align-items:center;justify-content:center">${label}</div>`;

const render = ({ variant = "equal", items = [] }) => {
  const mod = variant !== "equal" ? ` layout-three-col--${variant}` : "";
  const cols = items.length
    ? items.map((it) => col(it.content)).join("")
    : `${col("Column 1")}${col("Column 2")}${col("Column 3")}`;
  return `
<div class="layout-container">
  <div class="layout-three-col${mod}">
    ${cols}
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
