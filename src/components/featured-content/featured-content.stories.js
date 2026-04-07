import "../../main.scss";
import data from "./featured-content.json";

// =============================================================================
// Styles
// =============================================================================

const styles = '';

// =============================================================================
// HTML builder
// =============================================================================

const render = ({ variant = "default", heading, body, highlights }) => {
  const mod = variant !== "default" ? ` featured-content--${variant}` : "";

  const highlightItems = highlights.map(({ stat, description }) => `
    <li class="featured-content__highlight">
      <span class="featured-content__stat">${stat}</span>
      <span class="featured-content__desc">${description}</span>
    </li>`).join("");

  return `
${styles}
<section class="featured-content${mod}">
  <div class="featured-content__inner">
    <div class="featured-content__lead">
      <h2 class="featured-content__heading">${heading}</h2>
      <p class="featured-content__body">${body}</p>
    </div>
    <ul class="featured-content__highlights" aria-label="Key statistics">
      ${highlightItems}
    </ul>
  </div>
</section>`;
};

// =============================================================================
// Stories
// =============================================================================

export default {
  title: "Components/Featured Content/Highlights",
  render,
  argTypes: {
    variant: { control: "select", options: ["default", "inverse", "accent"] },
  },
};

const base = data.default;

/** Default — white background, charcoal text, forest-green stats. */
export const Default = { args: base };

/** Inverse — forest-green brand background, all-white text. */
export const Inverse = { args: { ...base, ...data.variants.inverse } };

/** Accent — violet background, charcoal text. */
export const Accent = { args: { ...base, ...data.variants.accent } };
