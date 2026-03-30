import data from "./two-col.json";

const col = (label) =>
  `<div style="background:rgba(0,91,75,.1);border:1px dashed #005b4b;padding:var(--sp-6);text-align:center;font-family:var(--font-sans);color:#005b4b;border-radius:var(--radius-s);min-height:160px;display:flex;align-items:center;justify-content:center">${label}</div>`;

const render = ({ variant = "equal" }) => {
  const mod = variant !== "equal" ? ` layout-two-col--${variant}` : "";
  return `
<div class="layout-container">
  <div class="layout-two-col${mod}">
    ${col("Main Content")}
    ${col("Aside / Secondary")}
  </div>
</div>`;
};

export default {
  title: "Layouts/Two Column",
  render,
  argTypes: {
    variant: { control: "select", options: ["equal", "editorial", "sidebar-left", "spacious"] },
  },
};

export const Equal       = { args: data.default };
export const Editorial   = { args: { ...data.default, ...data.variants.editorial } };
export const SidebarLeft = { args: { ...data.default, ...data.variants["sidebar-left"] } };
export const Spacious    = { args: { ...data.default, ...data.variants.spacious } };
