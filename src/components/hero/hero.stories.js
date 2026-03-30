import data from "./hero.json";

const statsHtml = (stats = []) => stats.length ? `
<div class="hero__stats">
  ${stats.map(s => `
  <div class="hero__stat">
    <span class="hero__stat-value">${s.value}</span>
    <span class="hero__stat-label">${s.label}</span>
  </div>`).join("")}
</div>` : "";

const render = ({ variant = "dark", eyebrow, title, subtitle, cta_primary, cta_secondary, bg_gradient, stats }) => `
<section class="hero hero--${variant}">
  <div class="hero__bg hero__bg--${bg_gradient || variant}"></div>
  <div class="hero__inner">
    ${eyebrow ? `<span class="hero__eyebrow">${eyebrow}</span>` : ""}
    <h1 class="hero__title">${title}</h1>
    ${subtitle ? `<p class="hero__subtitle">${subtitle}</p>` : ""}
    ${(cta_primary || cta_secondary) ? `
    <div class="hero__actions">
      ${cta_primary ? `<a class="btn btn--primary-inverted btn--lg" href="${cta_primary.href}">${cta_primary.label}</a>` : ""}
      ${cta_secondary ? `<a class="btn btn--secondary-inverted btn--lg" href="${cta_secondary.href}">${cta_secondary.label}</a>` : ""}
    </div>` : ""}
    ${statsHtml(stats)}
  </div>
</section>`;

export default {
  title: "Components/Hero",
  render,
  parameters: { layout: "fullscreen" },
  argTypes: {
    variant: { control: "select", options: ["dark","editorial"] },
    bg_gradient: { control: "select", options: ["hero-dark","editorial","warm","ocean","neutral"] },
  },
};

export const Default       = { args: data.default };
export const Dark          = { args: { ...data.default, ...data.variants.dark } };
export const Editorial     = { args: { ...data.default, ...data.variants.editorial } };
export const CourseDetails = { args: { ...data.default, ...data.variants["course-details"] } };
