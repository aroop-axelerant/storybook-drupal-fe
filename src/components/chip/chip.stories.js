import data from "./chip.json";

const render = ({ label, variant = "green", dismissible = false }) => `
<span class="chip chip--${variant}">
  ${label}
  ${dismissible ? `<button class="chip__close" aria-label="Remove ${label}" type="button">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>` : ""}
</span>`;

export default {
  title: "Components/Chip",
  render,
  argTypes: {
    variant: { control: "select", options: ["green","violet","yellow","peach","white","grey","outline","foundation"] },
    dismissible: { control: "boolean" },
  },
};

export const Default     = { args: data.default };
export const Green       = { args: { ...data.default, ...data.variants.green } };
export const Violet      = { args: { ...data.default, ...data.variants.violet } };
export const Yellow      = { args: { ...data.default, ...data.variants.yellow } };
export const Peach       = { args: { ...data.default, ...data.variants.peach } };
export const Grey        = { args: { ...data.default, ...data.variants.grey } };
export const Outline     = { args: { ...data.default, ...data.variants.outline } };
export const Foundation  = { args: { ...data.default, ...data.variants.foundation } };
export const Dismissible = { args: { ...data.default, ...data.variants.dismissible } };
