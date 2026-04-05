import data from "./two-col.json";

const col = (label) =>
  `<div style="background:rgba(0,91,75,.1);border:1px dashed var(--color-forest-green);padding:var(--sp-16);text-align:center;font-family:var(--font-sans);font-size:var(--text-body-sm);color:var(--color-forest-green);border-radius:var(--radius-s);min-height:160px;display:flex;align-items:center;justify-content:center">${label}</div>`;

const columns = {
  equal:        ["Main Content", "Aside / Secondary"],
  editorial:    ["Main Content (2fr)", "Sidebar (1fr)"],
  "sidebar-left": ["Sidebar (1fr)", "Main Content (2fr)"],
  spacious:     ["Main Content", "Aside / Secondary"],
};

const render = ({ variant = "equal" }) => {
  const mod = variant !== "equal" ? ` layout-two-col--${variant}` : "";
  const [left, right] = columns[variant] || columns.equal;
  return `
<div style="background:var(--color-off-white);padding:var(--sp-32) 0;font-family:var(--font-sans)">
  <div class="layout-container">
    <div class="layout-two-col${mod}">
      ${col(left)}
      ${col(right)}
    </div>
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
