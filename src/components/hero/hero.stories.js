import "../../main.scss";
import data from "./hero.json";

export default {
  title: "Components/Hero",
};

// =============================================================================
// Styles
// =============================================================================

const styles = '';

// Split View variant — additional styles
const splitStyles = `
<style>
  /* ── Split View hero ──────────────────────────────────────────────────── */
  .hero--split {
    background: var(--color-forest-green);
    min-height: 620px;
    align-items: stretch;
    overflow: hidden;
  }

  /* No background image / overlay needed — solid brand colour */
  .hero--split .hero__bg { display: none; }

  .hero--split .hero__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    padding: 0;
    max-width: var(--grid-max, 1312px);
    width: 100%;
  }

  /* ── Left: text ───────────────────────────────────────────────────────── */
  .hero--split .hero__content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--sp-96) var(--sp-64) var(--sp-64) var(--sp-64);
    gap: 0;
  }

  /* Overline, title, subtitle inherit white from base hero styles */

  /* ── Right: foreground image ──────────────────────────────────────────── */
  .hero__fg {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: flex-end;
    padding: var(--sp-48) var(--sp-48) 0 var(--sp-24);
  }

  .hero__fg-img {
    width: 100%;
    height: 100%;
    max-height: 560px;
    object-fit: cover;
    object-position: center top;
    display: block;
    /* Top fully round, bottom flush to hero edge */
    border-radius: var(--radius-l) var(--radius-l) 0 0;
    /* No blur — this is a featured foreground image */
    filter: none;
    transform: none;
  }

  /* ── Responsive: Tablet ──────────────────────────────────────────────── */
  @media (max-width: 1023px) {
    .hero--split { min-height: 500px; }

    .hero--split .hero__content {
      padding: var(--sp-64) var(--sp-32) var(--sp-48) var(--sp-32);
    }

    .hero__fg {
      padding: var(--sp-32) var(--sp-32) 0 var(--sp-16);
    }
  }

  /* ── Responsive: Mobile — stack vertically ───────────────────────────── */
  @media (max-width: 767px) {
    .hero--split .hero__inner {
      grid-template-columns: 1fr;
    }

    .hero--split .hero__content {
      padding: var(--sp-64) var(--sp-16) var(--sp-32);
    }

    .hero__fg {
      padding: 0 var(--sp-16) 0;
      height: 280px;
    }

    .hero__fg-img {
      max-height: 280px;
    }
  }
</style>`;

// Course variant — additional styles
const courseStyles = `
<style>
  /* ── Course hero ──────────────────────────────────────────────────────── */
  .hero--course {
    background: var(--color-off-white);
    min-height: 620px;
    align-items: stretch;
    overflow: hidden;
  }

  .hero--course .hero__bg { display: none; }

  .hero--course .hero__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    padding: 0;
    max-width: var(--grid-max, 1312px);
    width: 100%;
  }

  /* ── Left: text + highlights ─────────────────────────────────────────── */
  .hero--course .hero__content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--sp-96) var(--sp-64) var(--sp-64) var(--sp-64);
  }

  .hero--course .hero__overline {
    color: var(--color-forest-green);
  }

  .hero--course .hero__title {
    color: var(--color-charcoal);
    margin-bottom: var(--sp-16);
  }

  .hero--course .hero__subtitle {
    color: var(--color-charcoal-60);
    margin-bottom: var(--sp-40, var(--sp-32));
  }

  /* ── Course highlights strip ─────────────────────────────────────────── */
  .hero__highlights {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--sp-24);
    padding-top: var(--sp-32);
  }

  .hero__highlight {
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
  }

  .hero__highlight-icon {
    display: flex;
    align-items: center;
    color: var(--color-charcoal);
    width: 28px;
    height: 28px;
  }

  .hero__highlight-icon svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }

  .hero__highlight-label {
    font-family: var(--font-sans);
    font-size: var(--text-body-sm);
    font-weight: var(--fw-regular);
    color: var(--color-charcoal-60);
    line-height: var(--lh-body-sm);
  }

  .hero__highlight-value {
    font-family: var(--font-sans);
    font-size: var(--text-h5);
    font-weight: var(--fw-bold);
    color: var(--color-charcoal);
    line-height: var(--lh-h5);
  }

  /* ── Right: foreground image ──────────────────────────────────────────── */
  .hero--course .hero__fg {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: flex-end;
    padding: var(--sp-48) var(--sp-48) 0 var(--sp-24);
  }

  .hero--course .hero__fg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    border-radius: var(--radius-l) var(--radius-l) 0 0;
    filter: none;
    transform: none;
    /* Stretch to fill the full fg column height so it touches the hero bottom */
    align-self: stretch;
    min-height: 0;
  }

  /* ── Responsive: Tablet ──────────────────────────────────────────────── */
  @media (max-width: 1023px) {
    .hero--course { min-height: 500px; }

    .hero--course .hero__content {
      padding: var(--sp-64) var(--sp-32) var(--sp-48) var(--sp-32);
    }

    .hero--course .hero__fg {
      padding: var(--sp-32) var(--sp-32) 0 var(--sp-16);
    }
  }

  /* ── Responsive: Mobile ──────────────────────────────────────────────── */
  @media (max-width: 767px) {
    .hero--course .hero__inner {
      grid-template-columns: 1fr;
    }

    .hero--course .hero__content {
      padding: var(--sp-48) var(--sp-16) var(--sp-32);
    }

    .hero--course .hero__fg {
      padding: 0 var(--sp-16) 0;
      height: 280px;
    }

    .hero__highlights {
      grid-template-columns: repeat(2, 1fr);
      gap: var(--sp-16);
    }
  }
</style>`;


// =============================================================================
// HTML builders
// =============================================================================

const arrowIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12 5 19 12 12 19"/>
</svg>`;

const searchIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"/>
  <path d="m21 21-4.35-4.35"/>
</svg>`;

function buildBackground({ image_src, image_alt = '', video_src, youtube_id }) {
  if (youtube_id) {
    // Injected via script to avoid Storybook's nested-iframe blocking.
    // youtube-nocookie.com has a more permissive embedding policy.
    const src = `https://www.youtube-nocookie.com/embed/${youtube_id}?autoplay=1&mute=1&loop=1&playlist=${youtube_id}&controls=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`;
    return `
      <div class="hero__bg" aria-hidden="true">
        ${image_src ? `<img src="${image_src}" alt="" class="hero__img">` : ''}
        <div class="hero__yt-wrap" data-yt-src="${src}"></div>
      </div>`;
  }
  if (video_src) {
    return `
      <div class="hero__bg" aria-hidden="true">
        <video class="hero__video" autoplay muted loop playsinline
               poster="${image_src}">
          <source src="${video_src}" type="video/mp4">
        </video>
      </div>`;
  }
  if (image_src) {
    return `
      <div class="hero__bg" aria-hidden="true">
        <img src="${image_src}" alt="" class="hero__img">
      </div>`;
  }
  return `<div class="hero__bg" aria-hidden="true"></div>`;
}

function buildActions(actions) {
  if (!actions) return '';

  if (actions.type === 'buttons') {
    const secondary = actions.secondary_label
      ? `<a href="${actions.secondary_href}" class="btn btn--secondary-inverted">${actions.secondary_label}</a>`
      : '';
    return `
      <div class="hero__actions">
        <a href="${actions.primary_href}" class="btn btn--primary-inverted">
          ${actions.primary_label}
          ${arrowIcon}
        </a>
        ${secondary}
      </div>`;
  }

  if (actions.type === 'search') {
    return `
      <div class="search">
        <label class="search__label sr-only" for="hero-search">Search</label>
        <div class="search__field">
          <span class="search__icon" aria-hidden="true">${searchIcon}</span>
          <input
            class="search__input"
            id="hero-search"
            type="search"
            name="search"
            placeholder="${actions.search_placeholder}"
            autocomplete="off"
            spellcheck="false"
          >
          <button class="search__submit" type="submit"
                  aria-label="${actions.search_button_label}">
            ${arrowIcon}
          </button>
        </div>
      </div>`;
  }

  return '';
}

function buildHero(props) {
  const { overline, title, subtitle, image_src, image_alt, video_src, youtube_id, actions } = props;

  return `
    <section class="hero" aria-label="${overline || title}">
      ${buildBackground({ image_src, image_alt, video_src, youtube_id })}
      <div class="hero__inner">
        <div class="hero__content">
          ${overline ? `<span class="hero__overline">${overline}</span>` : ''}
          <h1 class="hero__title">${title}</h1>
          ${subtitle ? `<p class="hero__subtitle">${subtitle}</p>` : ''}
          ${buildActions(actions)}
        </div>
      </div>
    </section>`;
}

// =============================================================================
// Inline script — search focus relay + reduced-motion video
// =============================================================================

const script = `
<script>
(function () {
  // Search focus relay
  var searchInput = document.querySelector('.search__input');
  if (searchInput) {
    var searchField = searchInput.closest('.search__field');
    if (searchField) {
      searchInput.addEventListener('focus', function () { searchField.classList.add('is-focused'); });
      searchInput.addEventListener('blur',  function () { searchField.classList.remove('is-focused'); });
    }
  }

  // Reduced-motion: pause native video
  var video = document.querySelector('.hero__video');
  if (video) {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { video.pause(); video.removeAttribute('autoplay'); }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) video.pause();
      else if (!reduced) video.play();
    });
  }

  // YouTube background — inject iframe after load to bypass nested-iframe block
  var ytWrap = document.querySelector('.hero__yt-wrap[data-yt-src]');
  if (ytWrap) {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      var iframe = document.createElement('iframe');
      iframe.className = 'hero__yt-frame';
      iframe.src = ytWrap.getAttribute('data-yt-src');
      iframe.title = 'Background video';
      iframe.allow = 'autoplay; encrypted-media';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('frameborder', '0');
      ytWrap.appendChild(iframe);
      // YouTube cross-origin iframes don't fire a reliable load event.
      // Wait long enough for the player to initialise before fading in.
      setTimeout(function () {
        iframe.classList.add('is-ready');
      }, 1800);
    }
  }
})();
<\/script>`;

// =============================================================================
// Stories
// =============================================================================

const d = data.default;
const v = data.variants;

/**
 * Default — image background with primary + secondary buttons
 */
export const Default = () => `
  ${styles}
  ${buildHero(d)}
  ${script}
`;

/**
 * Home Search — full-viewport hero with YouTube background video and inline search.
 *
 * BACKGROUND VIDEO GUIDELINE
 * ─────────────────────────────────────────────────────────────────────────────
 * Always set `image_src` to the exact first frame of the background video.
 * This image serves two purposes:
 *   1. Poster frame — shown instantly while the YouTube iframe loads, preventing
 *      a blank/black flash on page render.
 *   2. Fallback — displayed permanently if the video is blocked (ad blockers,
 *      corporate firewalls, prefers-reduced-motion, or consent restrictions).
 *
 * To extract the first frame:
 *   - Download the video or screenshot its first frame at full resolution.
 *   - Export as JPEG at ~85% quality and place in src/assets/images/.
 *   - Set `image_src` in hero.json to the matching `/images/filename.jpg` path.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const Home = () => `
  ${styles}
  ${buildHero(v.home)}
  ${script}
`;

Home.storyName = 'Home Search';

/**
 * Landing Page — compact hero used as the default for all inner landing pages.
 *
 * USAGE GUIDELINES
 * ─────────────────────────────────────────────────────────────────────────────
 * PURPOSE
 *   Provides a consistent, branded entry point for every inner page (e.g.
 *   Study, International, Why Regent's, Admissions, Student Life). It
 *   communicates the page topic at a glance without competing with the
 *   body content below.
 *
 * CONTENT
 *   • Title     — the page H1. Use the exact page name; do not add a tagline.
 *   • Summary   — 1–2 sentences (max 30 words) describing what the user will
 *                 find on this page. Plain prose; no bullet points or links.
 *   • No CTAs   — do not add buttons or a search bar to this variant. CTAs
 *                 belong in the body content sections below the hero.
 *   • No overline — the breadcrumb or section label above the page provides
 *                 sufficient context.
 *
 * BACKGROUND
 *   Always use `/images/hero-landing-background.jpg` for this variant.
 *   This is a designed brand asset (violet–peach gradient + forest-green
 *   emblem) and must not be replaced with a photo. There is no overlay —
 *   text uses charcoal directly against the light left portion of the image.
 *
 * ACCESSIBILITY
 *   • The background image is decorative (`alt=""`).
 *   • Ensure the title and summary meet WCAG 2.1 AA contrast (≥ 4.5:1)
 *     against the scrim-adjusted background.
 *   • The `<section>` has `aria-label` set to the page title for landmark
 *     navigation.
 *
 * HEIGHT
 *   Fixed at 420px desktop / 320px mobile — intentionally shorter than the
 *   homepage hero to preserve vertical rhythm on content-heavy pages.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const LandingPage = () => `
  ${styles}
  <section class="hero hero--landing" aria-label="${v.landing.title}">
    <div class="hero__bg" aria-hidden="true">
      <img src="${v.landing.image_src}" alt="" class="hero__img">
    </div>
    <div class="hero__inner">
      <div class="hero__content">
        <h1 class="hero__title">${v.landing.title}</h1>
        <p class="hero__summary">${v.landing.summary}</p>
      </div>
    </div>
  </section>
`;

LandingPage.storyName = 'Landing Page';

/**
 * Split View — forest-green hero with text + CTAs left, foreground image right.
 * Use for high-impact section entries (e.g. Why Regent's, About Us).
 */
export const SplitView = () => {
  const s = v.split;
  const secondaryBtn = s.actions.secondary_label
    ? `<a href="${s.actions.secondary_href}" class="btn btn--secondary-inverted">${s.actions.secondary_label}</a>`
    : '';
  return `
    ${styles}
    ${splitStyles}
    <section class="hero hero--split" aria-label="${s.overline}">
      <div class="hero__inner">

        <!-- Left: text content -->
        <div class="hero__content">
          ${s.overline ? `<span class="hero__overline">${s.overline}</span>` : ''}
          <h1 class="hero__title">${s.title}</h1>
          <p class="hero__subtitle">${s.subtitle}</p>
          <div class="hero__actions">
            <a href="${s.actions.primary_href}" class="btn btn--primary-inverted">
              ${s.actions.primary_label}
              ${arrowIcon}
            </a>
            ${secondaryBtn}
          </div>
        </div>

        <!-- Right: foreground image -->
        <div class="hero__fg">
          <img src="${s.fg_image_src}" alt="${s.fg_image_alt}" class="hero__fg-img">
        </div>

      </div>
    </section>
  `;
};

SplitView.storyName = 'Split View';

/**
 * Course — off-white split hero for course detail pages.
 * Text + course highlights (icon / label / value) left; foreground image right.
 */
export const Course = () => {
  const c = v.course;

  const iconPaths = {
    calendar: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
    book:     `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
    clock:    `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
    ucas:     `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3m0 4h4V14h-4"/>`,
  };

  const highlights = c.highlights.map(h => `
    <div class="hero__highlight">
      <span class="hero__highlight-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${iconPaths[h.icon] || ''}
        </svg>
      </span>
      <span class="hero__highlight-label">${h.label}</span>
      <span class="hero__highlight-value">${h.value}</span>
    </div>`).join('');

  return `
    ${styles}
    ${courseStyles}
    <section class="hero hero--course" aria-label="${c.title}">
      <div class="hero__inner">

        <!-- Left: text + highlights -->
        <div class="hero__content">
          ${c.overline ? `<span class="hero__overline">${c.overline}</span>` : ''}
          <h1 class="hero__title">${c.title}</h1>
          <p class="hero__subtitle">${c.subtitle}</p>
          <div class="hero__highlights" role="list" aria-label="Course details">
            ${highlights}
          </div>
        </div>

        <!-- Right: foreground image -->
        <div class="hero__fg">
          <img src="${c.fg_image_src}" alt="${c.fg_image_alt}" class="hero__fg-img">
        </div>

      </div>
    </section>
  `;
};

Course.storyName = 'Course';
