import "../../main.scss";
import data from "./hero.json";

export default {
  title: "Components/Hero",
};

// =============================================================================
// Styles
// =============================================================================

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ul { list-style: none; }

  /* ── Hero section ─────────────────────────────────────────────────────── */
  .hero {
    position: relative;
    width: 100%;
    min-height: 100svh;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  /* ── Background ───────────────────────────────────────────────────────── */
  .hero__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: var(--gradient-hero-dark); /* fallback gradient */
  }

  .hero__img,
  .hero__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: blur(3px);
    /* Scale up slightly to hide blur edge bleed */
    transform: scale(1.04);
  }

  /* Dark overlay — matches video component scrim for consistent legibility */
  .hero__bg::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(11, 25, 26, 0.90) 0%,
      rgba(11, 25, 26, 0.60) 30%,
      rgba(11, 25, 26, 0.0)  65%
    );
    pointer-events: none;
  }

  /* ── YouTube iframe background ──────────────────────────────────────── */
  .hero__yt-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes hero-yt-fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Keep the 16:9 iframe always larger than the container so it covers */
  .hero__yt-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    width: max(100%, calc(100vh * 16 / 9));
    height: max(100%, calc(100vw * 9 / 16));
    transform: translate(-50%, -50%);
    border: 0;
    opacity: 0;
    /* Do NOT set pointer-events:none on the iframe itself — blocks init */
  }

  .hero__yt-frame.is-ready {
    animation: hero-yt-fadein 1200ms var(--ease-out) forwards;
  }

  /* Reduced-motion: freeze video as static poster */
  @media (prefers-reduced-motion: reduce) {
    .hero__video  { animation: none; }
    .hero__yt-wrap { display: none; }
  }

  /* ── Content wrapper ─────────────────────────────────────────────────── */
  .hero__inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: var(--grid-max, 1312px);
    margin-inline: auto;
    padding: var(--sp-96) var(--sp-64) var(--sp-64);
  }

  /* ── Text content — max 7 of 12 cols (~58%) for readability ─────────── */
  .hero__content {
    max-width: 720px;
  }

  /* ── Overline ─────────────────────────────────────────────────────────── */
  .hero__overline {
    display: block;
    font-family: var(--font-sans);
    font-size: var(--text-overline);
    font-weight: var(--fw-semibold);
    letter-spacing: var(--ls-widest);
    text-transform: uppercase;
    color: var(--color-white);
    margin-bottom: var(--sp-16);
  }

  /* ── Title ────────────────────────────────────────────────────────────── */
  .hero__title {
    font-family: var(--font-serif);
    font-size: var(--text-display-m);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-m);
    letter-spacing: var(--ls-display-m);
    color: var(--color-white);
    margin-bottom: var(--sp-24);
  }

  /* ── Subtitle ─────────────────────────────────────────────────────────── */
  .hero__subtitle {
    font-family: var(--font-sans);
    font-size: var(--text-body-lg);
    font-weight: var(--fw-regular);
    line-height: var(--lh-body-lg);
    color: rgba(255, 255, 255, 0.80);
    margin-bottom: var(--sp-40, var(--sp-32));
    max-width: 600px;
  }

  /* ── Button actions ───────────────────────────────────────────────────── */
  .hero__actions {
    display: flex;
    align-items: center;
    gap: var(--sp-12);
    flex-wrap: wrap;
  }

  .hero__btn {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-8);
    padding: var(--sp-12) var(--sp-24);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-semibold);
    line-height: 1;
    border-radius: var(--radius-l);
    border: 2px solid transparent;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .hero__btn:active { transform: scale(0.98); }

  .hero__btn:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }

  /* Primary Inverse — zingy yellow bg, charcoal text */
  .hero__btn--primary {
    background: var(--color-zingy-yellow);
    color: var(--color-charcoal);
  }

  .hero__btn--primary:hover {
    opacity: 0.85;
  }

  /* Secondary Inverse — transparent, white border */
  .hero__btn--secondary {
    background: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
  }

  .hero__btn--secondary:hover {
    background: var(--color-white);
    color: var(--color-charcoal);
  }

  /* ── Search component (verbatim from search.stories.js) ─────────────── */
  .sr-only {
    position: absolute;
    width: 1px; height: 1px;
    padding: 0; margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .search {
    width: 100%;
    max-width: 520px;
  }

  .search__field {
    display: flex;
    align-items: center;
    background: var(--color-white);
    border: 2px solid var(--color-charcoal-20);
    border-radius: var(--radius-l);
    padding: 0 var(--sp-8) 0 var(--sp-16);
    gap: var(--sp-8);
    transition: border-color var(--duration-fast) var(--ease-out),
                box-shadow var(--duration-fast) var(--ease-out);
  }

  .search__field:hover:not(.search__field--disabled) {
    border-color: var(--color-charcoal-40);
  }

  .search__field.is-focused {
    border-color: var(--color-action-primary);
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .search__icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: var(--color-charcoal-40);
  }

  .search__field.is-focused .search__icon {
    color: var(--color-action-primary);
  }

  .search__input {
    flex: 1;
    min-width: 0;
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-regular);
    line-height: var(--lh-body);
    color: var(--color-charcoal);
    background: transparent;
    border: none;
    outline: none;
    padding: var(--sp-12) 0;
    appearance: none;
    -webkit-appearance: none;
  }

  .search__input::-webkit-search-cancel-button,
  .search__input::-webkit-search-decoration { display: none; }

  .search__input::placeholder { color: var(--color-charcoal-40); }

  .search__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    background: var(--color-zingy-yellow);
    color: var(--color-charcoal);
    border: none;
    border-radius: var(--radius-l);
    cursor: pointer;
    transition: background var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .search__submit:hover { background: var(--color-zingy-yellow-50); }
  .search__submit:active { transform: scale(0.96); }

  .search__submit:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  /* ── Responsive: Tablet ──────────────────────────────────────────────── */
  @media (max-width: 1023px) {
    .hero__inner {
      padding: var(--sp-96) var(--sp-32) var(--sp-48);
    }

    .hero__content {
      max-width: 100%;
    }
  }

  /* ── Responsive: Mobile ──────────────────────────────────────────────── */
  @media (max-width: 767px) {
    .hero {
      min-height: 100svh;
      align-items: flex-end;
    }

    .hero__inner {
      padding: var(--sp-64) var(--sp-16) var(--sp-48);
    }

    .hero__title {
      font-size: var(--text-display-s);
      line-height: var(--lh-display-s);
    }

    .hero__subtitle {
      font-size: var(--text-body);
      line-height: var(--lh-body);
    }

    .hero__actions {
      flex-direction: column;
      align-items: flex-start;
    }

    .hero__search {
      max-width: 100%;
    }
  }
</style>`;

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

// Landing Page variant — additional styles
const landingStyles = `
<style>
  /* ── Landing hero — shorter, centred, no actions ─────────────────────── */
  .hero--landing {
    min-height: 420px;
    align-items: center;
  }

  /* No blur on the branded background — it is already a designed asset */
  .hero--landing .hero__img {
    filter: none;
    transform: none;
  }

  /* No overlay — the background image provides sufficient contrast itself */
  .hero--landing .hero__bg::after {
    display: none;
  }

  .hero--landing .hero__inner {
    padding: var(--sp-64) var(--sp-64);
    display: flex;
    align-items: center;
  }

  .hero--landing .hero__content {
    max-width: 640px;
  }

  .hero--landing .hero__title {
    font-size: var(--text-display-s);
    line-height: var(--lh-display-s);
    letter-spacing: var(--ls-display-s);
    color: var(--color-charcoal);
    margin-bottom: var(--sp-16);
  }

  .hero--landing .hero__summary {
    font-family: var(--font-sans);
    font-size: var(--text-body-lg);
    font-weight: var(--fw-regular);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-80);
    margin: 0;
  }

  @media (max-width: 1023px) {
    .hero--landing .hero__inner { padding: var(--sp-48) var(--sp-32); }
  }

  @media (max-width: 767px) {
    .hero--landing {
      min-height: 320px;
      align-items: flex-end;
    }
    .hero--landing .hero__inner { padding: var(--sp-48) var(--sp-16) var(--sp-40, var(--sp-32)); }
    .hero--landing .hero__title {
      font-size: var(--text-h1);
      line-height: var(--lh-h1);
    }
    .hero--landing .hero__summary {
      font-size: var(--text-body);
      line-height: var(--lh-body);
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
      ? `<a href="${actions.secondary_href}" class="hero__btn hero__btn--secondary">${actions.secondary_label}</a>`
      : '';
    return `
      <div class="hero__actions">
        <a href="${actions.primary_href}" class="hero__btn hero__btn--primary">
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
  ${landingStyles}
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
    ? `<a href="${s.actions.secondary_href}" class="hero__btn hero__btn--secondary">${s.actions.secondary_label}</a>`
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
            <a href="${s.actions.primary_href}" class="hero__btn hero__btn--primary">
              ${s.actions.primary_label}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
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
