import data from "./button.json";

const render = ({ label, variant = "primary", size = "md", disabled = false, icon = null, href = null }) => {
  const tag = href ? "a" : "button";
  const attrs = [
    `class="btn btn--${variant} btn--${size}"`,
    href ? `href="${href}"` : `type="button"`,
    disabled ? "disabled" : "",
    `aria-disabled="${disabled}"`,
  ].filter(Boolean).join(" ");

  return `
<${tag} ${attrs}>
  ${icon ? `<span class="btn__icon" aria-hidden="true">${icon}</span>` : ""}
  <span class="btn__label">${label}</span>
</${tag}>`;
};

export default {
  title: "Components/Button",
  render,
  argTypes: {
    variant: { control: "select", options: ["primary","primary-inverted","secondary-inverted","outline-dark","outline-green","ghost"] },
    size:    { control: "select", options: ["sm","md","lg"] },
    disabled:{ control: "boolean" },
    href:    { control: "text" },
  },
};

export const Default           = { args: data.default };
export const Primary           = { args: { ...data.default, ...data.variants.primary } };
export const PrimaryInverted   = { args: { ...data.default, ...data.variants["primary-inverted"] }, parameters: { backgrounds: { default: "charcoal" } } };
export const SecondaryInverted = { args: { ...data.default, ...data.variants["secondary-inverted"] }, parameters: { backgrounds: { default: "charcoal" } } };
export const OutlineDark       = { args: { ...data.default, ...data.variants["outline-dark"] } };
export const OutlineGreen      = { args: { ...data.default, ...data.variants["outline-green"] } };
export const Ghost             = { args: { ...data.default, ...data.variants.ghost } };
export const Small             = { args: { ...data.default, ...data.variants.small } };
export const Large             = { args: { ...data.default, ...data.variants.large } };
export const Disabled          = { args: { ...data.default, disabled: true } };
