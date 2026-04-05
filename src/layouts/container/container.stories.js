import data from "./container.json";

const placeholder = (label) =>
  `<div style="background:rgba(0,91,75,.12);border:1px dashed var(--color-forest-green);padding:var(--sp-16);text-align:center;font-family:var(--font-sans);font-size:var(--text-body-sm);color:var(--color-forest-green);border-radius:var(--radius-s)">${label}</div>`;

const maxWidths = {
  default: "--grid-max (1312px)",
  narrow:  "768px",
  wide:    "1600px",
  full:    "none — full bleed",
};

const render = ({ variant = "default" }) => {
  const mod = variant !== "default" ? ` layout-container--${variant}` : "";
  return `
<div style="background:var(--color-off-white);padding:var(--sp-32) 0;font-family:var(--font-sans)">
  <div class="layout-container${mod}">
    ${placeholder(`layout-container${mod.trim() ? `--${variant}` : ""} · max-width: ${maxWidths[variant]} · gutter: --grid-gutter`)}
  </div>
</div>`;
};

export default {
  title: "Layouts/Container",
  render,
  argTypes: {
    variant: { control: "select", options: ["default", "narrow", "wide", "full"] },
  },
};

export const Default = { args: data.default };
export const Narrow  = { args: { ...data.default, ...data.variants.narrow } };
export const Wide    = { args: { ...data.default, ...data.variants.wide } };
export const Full    = { args: { ...data.default, ...data.variants.full } };
