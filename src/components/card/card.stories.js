import "../../main.scss";
import data from "./card.json";

export default {
  title: "Components/Card",
  excludeStories: ["buildVideoCard", "buildCourseCard"],
};

// =============================================================================
// Styles
// =============================================================================


// =============================================================================
// Icons
// =============================================================================

const iconMuteOff = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true">
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
  <line x1="23" y1="9" x2="17" y2="15"/>
  <line x1="17" y1="9" x2="23" y2="15"/>
</svg>`;

const iconMuteOn = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true">
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
</svg>`;

const iconArrow = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true">
  <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12 5 19 12 12 19"/>
</svg>`;

const iconMail = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <polyline points="2,4 12,13 22,4"/>
</svg>`;

const iconClock = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="12 6 12 12 16 14"/>
</svg>`;

const iconPin = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true">
  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>`;

// =============================================================================
// HTML builders
// =============================================================================

function buildSimpleCard(card) {
  return `
    <article class="card card--simple">
      <a href="${card.cta.href}" class="card__image-link" tabindex="-1" aria-hidden="true">
        <div class="card__media">
          <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
        </div>
      </a>
      <div class="card__body">
        <span class="tag tag--brand">${card.overline}</span>
        <h3 class="card__heading">
          <a href="${card.cta.href}" class="card__heading-link">${card.heading}</a>
        </h3>
        <p class="card__excerpt">${card.excerpt}</p>
        <div class="card__spacer"></div>
        <a href="${card.cta.href}" class="card__cta" tabindex="-1" aria-hidden="true">
          ${card.cta.label} ${iconArrow}
        </a>
      </div>
    </article>`;
}

function buildCourseCard(card) {
  const highlights = card.highlights.map(h => `
    <li class="card__highlight">
      <span class="card__highlight-label">${h.label}</span>
      <span class="card__highlight-value">${h.value}</span>
    </li>`).join('');

  return `
    <article class="card card--course">
      <div class="card__body">
        <span class="tag tag--default">${card.qualification}</span>
        <h3 class="card__heading">
          <a href="${card.cta.href}" class="card__heading-link">${card.heading}</a>
        </h3>
        <p class="card__excerpt">${card.description}</p>
        <ul class="card__highlights" aria-label="Course details">
          ${highlights}
        </ul>
        <div class="card__spacer"></div>
        <a href="${card.cta.href}" class="card__cta-btn" tabindex="-1" aria-hidden="true">
          ${card.cta.label} ${iconArrow}
        </a>
      </div>
    </article>`;
}

function buildProfileCard(card) {
  return `
    <article class="card card--profile">
      <div class="card__media card__media--profile">
        <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
      </div>
      <div class="card__body">
        <span class="card__department">${card.department}</span>
        <h3 class="card__heading">${card.name}</h3>
        <p class="card__role">${card.role}</p>
        <a href="mailto:${card.email}" class="card__contact">
          ${iconMail} ${card.email}
        </a>
      </div>
    </article>`;
}

function buildArticleCard(card) {
  const mediaHtml = card.image ? `
    <a href="#" class="card__image-link" tabindex="-1" aria-hidden="true">
      <div class="card__media">
        <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
      </div>
    </a>` : '';

  return `
    <article class="card card--article${card.image ? '' : ' card--no-image'}">
      ${mediaHtml}
      <div class="card__body">
        <span class="tag tag--violet">${card.overline}</span>
        <h3 class="card__heading">
          <a href="#" class="card__heading-link">${card.heading}</a>
        </h3>
        <div class="card__meta">
          <time class="card__date">${card.date}</time>
        </div>
      </div>
    </article>`;
}

function buildEventCard(card) {
  const dateBadge = (cls = '') => `
    <div class="card__date-badge${cls}" aria-label="${card.day} ${card.month} ${card.year}">
      <span class="card__date-day">${card.day}</span>
      <span class="card__date-month">${card.month}</span>
    </div>`;

  const mediaHtml = card.image ? `
    <div class="card__media-wrap">
      <a href="${card.cta.href}" class="card__image-link" tabindex="-1" aria-hidden="true">
        <div class="card__media">
          <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
        </div>
      </a>
      ${dateBadge()}
    </div>` : '';

  const inlineBadge = !card.image
    ? `<div class="card__event-date-wrap">
        <div class="card__date-badge--inline" aria-label="${card.day} ${card.month} ${card.year}">
          <span class="card__date-day">${card.day}</span>
          <span class="card__date-month">${card.month}</span>
        </div>
      </div>`
    : '';

  return `
    <article class="card card--event">
      ${mediaHtml}
      ${inlineBadge}
      <div class="card__body">
        <h3 class="card__heading">
          <a href="${card.cta.href}" class="card__heading-link">${card.heading}</a>
        </h3>
        <div class="card__event-meta">
          <div class="card__event-meta-item">${iconClock} ${card.time}</div>
          <div class="card__event-meta-item">${iconPin} ${card.location}</div>
        </div>
        <div class="card__spacer"></div>
        <a href="${card.cta.href}" class="card__cta-btn" tabindex="-1" aria-hidden="true">
          ${card.cta.label} ${iconArrow}
        </a>
      </div>
    </article>`;
}

function buildVideoCard(card, index) {
  const id = `vc-${index}`;
  return `
    <article class="card card--video" id="${id}"
      onclick="
        var vid = document.getElementById('${id}').querySelector('.card__video');
        if (vid.paused) { vid.play(); }
      "
    >
      <video class="card__video" src="${card.video.src}" poster="${card.video.poster}"
        muted playsinline preload="none" aria-label="${card.name}"></video>
      <div class="card__video-controls">
        <span class="tag tag--default">${card.tag}</span>
        <button
          class="card__mute-btn"
          aria-label="Muted — click to unmute"
          aria-pressed="true"
          data-muted="true"
          onclick="
            event.stopPropagation();
            var btn = this;
            var vid = btn.closest('.card--video').querySelector('.card__video');
            var isMuted = btn.dataset.muted === 'true';
            vid.muted = !isMuted;
            btn.dataset.muted = String(!isMuted);
            btn.setAttribute('aria-label', !isMuted ? 'Muted — click to unmute' : 'Unmuted — click to mute');
            btn.setAttribute('aria-pressed', String(!isMuted));
          "
        >
          <span class="icon-mute-off">${iconMuteOff}</span>
          <span class="icon-mute-on">${iconMuteOn}</span>
        </button>
      </div>
      <div class="card__body">
        <h3 class="card__heading">${card.name}</h3>
        <p class="card__excerpt">${card.quote}</p>
      </div>
    </article>`;
}

function buildOverlayCard(card) {
  return `
    <a href="${card.cta.href}" class="card card--overlay">
      <div class="card__media">
        <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
      </div>
      <div class="card__body">
        <h3 class="card__heading">${card.heading}</h3>
        <div class="card__overlay-reveal">
          <p class="card__excerpt">${card.summary}</p>
          <span class="card__cta" aria-hidden="true">
            ${card.cta.label} ${iconArrow}
          </span>
        </div>
      </div>
    </a>`;
}

function buildStepCountCard(card) {
  return `
    <article class="card card--step-count">
      <div class="card__step-image">
        <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
      </div>
      <div class="card__body card__body--${card.bodyBg}">
        <span class="card__step-label">${card.step}</span>
        <h3 class="card__heading">
          <a href="${card.cta.href}" class="card__heading-link">${card.heading}</a>
        </h3>
        <p class="card__excerpt">${card.summary}</p>
        <a href="${card.cta.href}" class="card__step-cta" tabindex="-1" aria-hidden="true">
          ${card.cta.label}
        </a>
      </div>
    </article>`;
}

// =============================================================================
// Stories
// =============================================================================

const v = data.variants;

/**
 * Video — portrait 9:16 card with full-bleed video. Clicking the card plays
 * the video and switches to the unmuted icon. The mute button toggles audio
 * independently. Name uses card heading scale; quote uses excerpt scale.
 */
export const Video = () => `
  <div class="sb-canvas">
    <div style="display:grid;grid-template-columns:repeat(3,minmax(0,360px));gap:var(--sp-32);">
      ${v.video.map((card, i) => buildVideoCard(card, i)).join('')}
    </div>
  </div>
`;

/**
 * Overlay — full-bleed background image with gradient scrim. Heading is always
 * visible; summary and Standout Link are revealed on hover.
 */
export const Overlay = () => `
  <div class="cards-grid">
    ${v.overlay.map(buildOverlayCard).join('')}
  </div>
`;

/**
 * Simple — featured content cards with image, overline, heading, excerpt and CTA.
 */
export const Simple = () => `
  <div class="cards-grid">
    ${v.simple.map(buildSimpleCard).join('')}
  </div>
`;

/**
 * Course — no image; level badge, qualification, heading,
 * highlights list separated by dividers, and CTA button.
 */
export const Course = () => `
  <div class="cards-grid">
    ${v.course.map(buildCourseCard).join('')}
  </div>
`;

/**
 * Profile — staff/people card with portrait image, name, role, department and email.
 */
export const Profile = () => `
  <div class="cards-grid">
    ${v.profile.map(buildProfileCard).join('')}
  </div>
`;

/**
 * Article — category overline, heading, excerpt, author and date.
 * Third card demonstrates the image-optional state.
 */
export const Article = () => `
  <div class="cards-grid">
    ${v.article.map(buildArticleCard).join('')}
  </div>
`;

/**
 * Step Count — arch-shaped image with overlapping zingy-light content body.
 * Overline shows the step number, followed by heading, summary and standout link.
 */
export const StepCount = () => `
  <div class="cards-grid">
    ${v['step-count'].map(buildStepCountCard).join('')}
  </div>
`;

/**
 * Event — prominent date badge (overlaid on image or inline),
 * time, location and register CTA.
 * Second card demonstrates the image-optional state.
 */
export const Event = () => `
  <div class="cards-grid">
    ${v.event.map(buildEventCard).join('')}
  </div>
`;

export { buildVideoCard, buildCourseCard };
