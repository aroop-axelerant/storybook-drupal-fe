import data from "./newsletter.json";

const render = ({ variant = "gradient", eyebrow, heading, body, input_placeholder, submit_label, privacy_note }) => `
<section class="newsletter newsletter--${variant}">
  <div class="newsletter__inner">
    <div class="newsletter__copy">
      ${eyebrow ? `<span class="newsletter__eyebrow">${eyebrow}</span>` : ""}
      <h2 class="newsletter__heading">${heading}</h2>
      ${body ? `<p class="newsletter__body">${body}</p>` : ""}
    </div>
    <div class="newsletter__form-wrap">
      <form class="newsletter__form" novalidate>
        <div class="newsletter__input-group">
          <label for="newsletter-email" class="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            class="newsletter__input"
            placeholder="${input_placeholder || "Your email address"}"
            autocomplete="email"
            required
          />
          <button type="submit" class="newsletter__submit btn btn--primary btn--sm">
            ${submit_label || "Subscribe"}
          </button>
        </div>
        ${privacy_note ? `<p class="newsletter__privacy">${privacy_note}</p>` : ""}
      </form>
    </div>
  </div>
</section>`;

export default {
  title: "Components/Newsletter",
  render,
  parameters: { layout: "fullscreen" },
  argTypes: {
    variant: { control: "select", options: ["gradient", "dark", "light"] },
  },
};

export const Default  = { args: data.default };
export const Gradient = { args: { ...data.default, ...data.variants.gradient } };
export const Dark     = { args: { ...data.default, ...data.variants.dark },  parameters: { backgrounds: { default: "charcoal" } } };
export const Light    = { args: { ...data.default, ...data.variants.light }, parameters: { backgrounds: { default: "off-white" } } };
