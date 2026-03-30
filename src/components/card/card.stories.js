import data from "./card.json";

const chipsHtml = (chips = []) =>
  chips.length ? `<div class="card__chips">${chips.map(c => `<span class="chip chip--${c.variant}">${c.label}</span>`).join("")}</div>` : "";

const render = ({ variant = "article", title, desc, image, chips, cta, date_badge, role, journey_colour }) => {
  if (variant === "leader") {
    return `
<div class="card card--leader">
  <div class="card__image-wrap">
    ${image ? `<img src="${image.src}" alt="${image.alt}" loading="lazy" />` : `<div class="card__image-wrap--placeholder"><span class="card__initials">SM</span></div>`}
  </div>
  <div class="card__body">
    <h3 class="card__title">${title}</h3>
    ${role ? `<p class="card__role">${role}</p>` : ""}
  </div>
</div>`;
  }

  if (variant === "journey") {
    return `
<div class="card card--journey card--journey-${journey_colour || "yellow"}">
  ${image ? `<div class="card__image-wrap"><img src="${image.src}" alt="${image.alt}" loading="lazy" /></div>` : `<div class="card__image-wrap" style="background:var(--gradient-editorial);height:300px"></div>`}
  <div class="card__body">
    <h3 class="card__title">${title}</h3>
    <p class="card__desc">${desc}</p>
    ${cta ? `<div class="card__actions"><a class="btn btn--outline-dark btn--sm" href="${cta.href}">${cta.label}</a></div>` : ""}
  </div>
</div>`;
  }

  return `
<div class="card card--${variant}">
  <div class="card__image-wrap">
    ${date_badge ? `<div class="card__date-badge"><span>${date_badge.day}</span><span>${date_badge.month}</span></div>` : ""}
    ${image ? `<img src="${image.src}" alt="${image.alt}" loading="lazy" />` : `<div style="height:200px;background:var(--gradient-neutral)"></div>`}
  </div>
  <div class="card__body">
    ${chipsHtml(chips)}
    <h3 class="card__title">${title}</h3>
    <p class="card__desc">${desc}</p>
    ${cta ? `<div class="card__actions"><a class="btn btn--outline-green btn--sm" href="${cta.href}">${cta.label}</a></div>` : ""}
  </div>
</div>`;
};

export default {
  title: "Components/Card",
  render,
  argTypes: {
    variant: { control: "select", options: ["article","course","event","leader","journey"] },
  },
};

export const Default       = { args: data.default };
export const Article       = { args: { ...data.default, ...data.variants.article } };
export const Course        = { args: { ...data.default, ...data.variants.course } };
export const Event         = { args: { ...data.default, ...data.variants.event } };
export const Leader        = { args: { ...data.default, ...data.variants.leader } };
export const JourneyYellow = { args: { ...data.default, ...data.variants["journey-yellow"] } };
export const JourneyViolet = { args: { ...data.default, ...data.variants["journey-violet"] } };
