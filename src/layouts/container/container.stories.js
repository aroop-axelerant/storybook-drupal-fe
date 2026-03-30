import data from "./container.json";

const placeholder = (label) =>
  `<div style="background:rgba(0,91,75,.12);border:1px dashed #005b4b;padding:var(--sp-6);text-align:center;font-family:var(--font-sans);color:#005b4b;border-radius:var(--radius-s)">${label}</div>`;

const render = ({ variant = "default" }) => `
<div class="layout-container${variant !== "default" ? ` layout-container--${variant}` : ""}">
  ${placeholder(`layout-container${variant !== "default" ? `--${variant}` : ""} — max-width: ${
    { default: "1440px", narrow: "800px", wide: "1600px", full: "none" }[variant] || "1440px"
  }`)}
</div>`;

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
