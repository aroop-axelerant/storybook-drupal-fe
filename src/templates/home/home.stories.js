import "../../main.scss";
import data from "./home.json";
import { headerStyles, buildHeader, buildMegaMenu, headerScript } from "../../components/header/header.stories.js";
import { videoCarouselStyles, buildVideoCarousel } from "../../components/video-carousel/video-carousel.stories.js";
import { buildCourseCard } from "../../components/card/card.stories.js";
import { videoStyles, buildCompactVideo } from "../../components/video/video.stories.js";
import { ctaBannerStyles, buildCtaBanner } from "../../components/cta-banner/cta-banner.stories.js";
import { footerStyles, buildFooter } from "../../components/footer/footer.stories.js";

// =============================================================================
// Icons
// =============================================================================

const iconArrow = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

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

const iconInstagram = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
const iconLinkedin = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
const iconYoutube = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`;
const iconPhone = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
const iconMail = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;

// =============================================================================
// Styles
// =============================================================================

const styles = '';

// =============================================================================
// Section icon bg cycle (matches content-tiles component)
// =============================================================================

const ICON_BG_CYCLE = [
  "var(--color-zingy-yellow-50)",
  "var(--color-bg-peach)",
  "var(--color-bg-violet)",
];

// =============================================================================
// Section builders
// =============================================================================

const iconSearchHero = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
</svg>`;

function buildHeroBackground({ image_src, youtube_id }) {
  if (youtube_id) {
    const src = `https://www.youtube-nocookie.com/embed/${youtube_id}?autoplay=1&mute=1&loop=1&playlist=${youtube_id}&controls=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`;
    return `<div class="hero__bg" aria-hidden="true">
      ${image_src ? `<img src="${image_src}" alt="" class="hero__img">` : ""}
      <div class="hero__yt-wrap" data-yt-src="${src}"></div>
    </div>`;
  }
  return `<div class="hero__bg" aria-hidden="true">
    <img src="${image_src}" alt="" class="hero__img">
  </div>`;
}

function buildHeroActions(actions) {
  if (!actions) return "";
  if (actions.type === "buttons") {
    return `<div class="hero__actions">
      <a href="${actions.primary_href}" class="hero__btn hero__btn--primary">${actions.primary_label} ${iconArrow}</a>
      ${actions.secondary_label ? `<a href="${actions.secondary_href}" class="hero__btn hero__btn--secondary">${actions.secondary_label}</a>` : ""}
    </div>`;
  }
  if (actions.type === "search") {
    return `<div class="search">
      <label class="sr-only" for="hero-search">Search</label>
      <div class="search__field">
        <span class="search__icon" aria-hidden="true">${iconSearchHero}</span>
        <input class="search__input" id="hero-search" type="search" name="search"
          placeholder="${actions.search_placeholder}" autocomplete="off" spellcheck="false">
        <button class="search__submit" type="submit" aria-label="${actions.search_button_label}">
          ${iconArrow}
        </button>
      </div>
    </div>`;
  }
  return "";
}

function buildHero(hero) {
  return `
  <section class="hero" aria-label="${hero.overline || hero.title}">
    ${buildHeroBackground(hero)}
    <div class="hero__inner">
      <div class="hero__content">
        ${hero.overline ? `<span class="hero__overline">${hero.overline}</span>` : ""}
        <h1 class="hero__title">${hero.title}</h1>
        ${hero.subtitle ? `<p class="hero__subtitle">${hero.subtitle}</p>` : ""}
        ${buildHeroActions(hero.actions)}
      </div>
    </div>
  </section>
  <script>
  (function () {
    var searchInput = document.querySelector('.search__input');
    if (searchInput) {
      var field = searchInput.closest('.search__field');
      if (field) {
        searchInput.addEventListener('focus', function () { field.classList.add('is-focused'); });
        searchInput.addEventListener('blur',  function () { field.classList.remove('is-focused'); });
      }
    }
    var ytWrap = document.querySelector('.hero__yt-wrap[data-yt-src]');
    if (ytWrap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      var iframe = document.createElement('iframe');
      iframe.className = 'hero__yt-frame';
      iframe.src = ytWrap.getAttribute('data-yt-src');
      iframe.title = 'Background video';
      iframe.allow = 'autoplay; encrypted-media';
      iframe.setAttribute('allowfullscreen', '');
      ytWrap.appendChild(iframe);
      setTimeout(function () { iframe.classList.add('is-ready'); }, 1500);
    }
  })();
  </script>`;
}

function buildContentTiles(ct) {
  const tiles = ct.tiles.map((tile, i) => {
    const bg = ICON_BG_CYCLE[i % ICON_BG_CYCLE.length];
    return `
    <div class="content-tiles__tile">
      <div class="content-tiles__icon-wrap" style="background: ${bg};">${tile.icon}</div>
      <h3 class="content-tiles__tile-heading">${tile.heading}</h3>
      <p class="content-tiles__tile-body">${tile.body}</p>
    </div>`;
  }).join("");

  return `
  <section class="content-tiles" aria-label="Why Regent's">
    <div class="content-tiles__inner">
      <div class="content-tiles__header">
        ${ct.overline ? `<span class="content-tiles__overline">${ct.overline}</span>` : ""}
        <h2 class="content-tiles__heading">${ct.heading}</h2>
        ${ct.body ? `<p class="content-tiles__body">${ct.body}</p>` : ""}
      </div>
      <div class="content-tiles__grid" data-tile-count="${ct.tiles.length}">
        ${tiles}
      </div>
    </div>
  </section>`;
}

function buildWhoWeAre(section) {
  const { video, highlights, overline, heading, cta } = section;

  const statsHtml = highlights.items.map(({ stat, description }) => `
    <li class="who-we-are__stat-row">
      <span class="who-we-are__stat">${stat}</span>
      <span class="who-we-are__desc">${description}</span>
    </li>`).join("");

  const videoId = `wwa-video`;
  const embedSrc = video.youtube_id
    ? `https://www.youtube.com/embed/${video.youtube_id}`
    : "";

  return `
  <section class="who-we-are" aria-label="${heading}">
    <div class="who-we-are__inner">
      <!-- Full-width video -->
      <div class="who-we-are__video">
        <div class="video video--compact" id="${videoId}">
          <div class="video__thumbnail">
            <img class="video__thumbnail-img" src="${video.poster}" alt="" aria-hidden="true" loading="lazy">
            <button class="video__play" type="button" aria-label="Play video">
              <span class="video__play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="6,4 20,12 6,20" fill="currentColor"/>
                </svg>
              </span>
            </button>
          </div>
          <div class="video__modal" role="dialog" aria-modal="true" aria-label="${video.title}" aria-hidden="true" hidden>
            <div class="video__modal-inner">
              <button class="video__modal-close" type="button" aria-label="Close video">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <div class="video__embed-wrap">
                <iframe class="video__iframe" src="" data-src="${embedSrc}?autoplay=1&rel=0"
                  title="${video.title}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Two-column: header+summary left, stats right -->
      <div class="who-we-are__grid">
        <div>
          ${overline ? `<span class="section-header__overline">${overline}</span>` : ""}
          <h2 class="section-header__heading" style="margin-top:var(--sp-8);margin-bottom:var(--sp-32);">${heading}</h2>
          ${(Array.isArray(highlights.body) ? highlights.body : [highlights.body])
            .map((p, i) => `<p class="who-we-are__body"${i > 0 ? ' style="margin-top:var(--sp-32);"' : ''}>${p}</p>`).join("\n          ")}
          ${cta ? `<a href="${cta.href}"
            style="display:inline-flex;align-items:center;gap:var(--sp-8);margin-top:var(--sp-32);color:var(--color-forest-green);font-weight:600;font-size:var(--text-body);text-decoration:none;cursor:pointer;border-radius:var(--radius-s);transition:opacity 200ms ease-out,transform var(--duration-fast) var(--ease-out)"
            onmouseover="this.style.opacity='0.8';this.querySelector('svg').style.transform='translateX(6px)'"
            onmouseout="this.style.opacity='1';this.querySelector('svg').style.transform='translateX(0)'"
            onmousedown="this.style.transform='scale(0.98)'"
            onmouseup="this.style.transform=''">
            ${cta.label}
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" style="stroke:var(--color-forest-green);stroke-width:2;fill:none;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0;transition:transform 200ms ease-out">
              <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>` : ""}
        </div>
        <ul class="who-we-are__highlights" aria-label="Key statistics">
          ${statsHtml}
        </ul>
      </div>
    </div>
  </section>
  <script>
  (function () {
    var wrap = document.getElementById('${videoId}');
    if (!wrap) return;
    var playBtn = wrap.querySelector('.video__play');
    var modal   = wrap.querySelector('.video__modal');
    var closeBtn = wrap.querySelector('.video__modal-close');
    var iframe  = wrap.querySelector('.video__iframe');
    function openModal() {
      iframe.src = iframe.getAttribute('data-src');
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
    }
    function closeModal() {
      iframe.src = '';
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      playBtn.focus();
    }
    playBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
  })();
  </script>`;
}

function buildOverlayCards(section) {
  const cards = section.cards.map(card => `
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
    </a>`).join("");

  return `
  <section class="t-section" aria-label="${section.heading}">
    <div class="t-section__inner">
      <div class="section-header">
        ${section.overline ? `<span class="section-header__overline">${section.overline}</span>` : ""}
        <h2 class="section-header__heading">${section.heading}</h2>
      </div>
      <div class="cards-grid--4up">
        ${cards}
      </div>
    </div>
  </section>`;
}

function buildVideoCarouselSection(section) {
  return `
  <section class="t-section" aria-label="${section.heading}">
    <div class="t-section__inner">
      <div class="section-header">
        ${section.overline ? `<span class="section-header__overline">${section.overline}</span>` : ""}
        <h2 class="section-header__heading">${section.heading}</h2>
      </div>
      ${buildVideoCarousel(section.cards, 'alumni-carousel')}
    </div>
  </section>`;
}

function buildCourseCards(section) {
  const cards = section.cards.map(buildCourseCard).join("");

  return `
  <section class="t-section" style="background:var(--color-charcoal);" aria-label="${section.heading}">
    <div class="t-section__inner">
      <div class="section-header">
        ${section.overline ? `<span class="section-header__overline" style="color:var(--color-charcoal-30);">${section.overline}</span>` : ""}
        <h2 class="section-header__heading" style="color:var(--color-white);">${section.heading}</h2>
      </div>
      <div class="cards-grid">${cards}</div>
    </div>
  </section>`;
}

function buildOpenDays(section) {
  return `
  <section class="cta-banner cta-banner--boxed" aria-label="${section.heading}">
    <div class="cta-banner__inner">
      <div class="cta-banner__content">
        ${section.eyebrow ? `<p class="cta-banner__eyebrow">${section.eyebrow}</p>` : ""}
        <h2 class="cta-banner__heading">${section.heading}</h2>
        <p class="cta-banner__body">${section.body}</p>
        <div class="cta-banner__actions">
          ${section.cta_primary ? `<a href="${section.cta_primary.href}" class="cta-banner__btn cta-banner__btn--primary">${section.cta_primary.label} ${iconArrow}</a>` : ""}
          ${section.cta_secondary ? `<a href="${section.cta_secondary.href}" class="cta-banner__btn cta-banner__btn--secondary">${section.cta_secondary.label}</a>` : ""}
        </div>
      </div>
    </div>
  </section>`;
}

function buildArticleCards(section) {
  const cards = section.cards.map(card => `
    <article class="card card--article${card.image ? "" : " card--no-image"}">
      ${card.image ? `
      <a href="${card.cta.href}" class="card__image-link" tabindex="-1" aria-hidden="true">
        <div class="card__media">
          <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
        </div>
      </a>` : ""}
      <div class="card__body">
        <div class="card__tags">
          ${(card.tags || [card.overline]).map(t => `<span class="tag tag--violet">${t}</span>`).join("")}
        </div>
        <h3 class="card__heading">
          <a href="${card.cta.href}" class="card__heading-link">${card.heading}</a>
        </h3>
        ${card.excerpt ? `<p class="card__excerpt">${card.excerpt}</p>` : ""}
        ${card.date ? `<div class="card__meta"><time class="card__date">${card.date}</time></div>` : ""}
      </div>
    </article>`).join("");

  return `
  <section class="t-section" aria-label="${section.heading}">
    <div class="t-section__inner">
      <div class="section-header">
        ${section.overline ? `<span class="section-header__overline">${section.overline}</span>` : ""}
        <h2 class="section-header__heading">${section.heading}</h2>
        ${section.description ? `<p class="section-header__body">${section.description}</p>` : ""}
      </div>
      <div class="cards-grid--4">${cards}</div>
    </div>
  </section>`;
}

function buildAccreditations(section) {
  const items = section.items.map(item => `
    <span class="logo-ticker__item">${item.name}</span>`).join("");
  // Duplicate items for seamless infinite loop
  const track = items + items;

  return `
  <section class="t-section accreditations" aria-label="${section.heading}">
    <div class="t-section__inner">
      <div class="section-header">
        ${section.overline ? `<span class="section-header__overline">${section.overline}</span>` : ""}
        <h2 class="section-header__heading">${section.heading}</h2>
        ${section.description ? `<p class="section-header__body">${section.description}</p>` : ""}
      </div>
    </div>
    <div class="logo-ticker" role="region" aria-label="Accreditation logos">
      <div class="logo-ticker__track" aria-hidden="true">
        ${track}
      </div>
    </div>
  </section>`;
}

function buildViceChancellor(section) {
  return `
  <section class="t-section" aria-label="${section.heading}">
    <div class="t-section__inner">
      <div class="vice-chancellor__video">
        ${buildCompactVideo({
          id: "vc-video",
          poster: section.video.poster,
          title: section.video.title,
          youtubeId: section.video.youtube_id,
        })}
      </div>
      <div class="vice-chancellor__two-col">
        <div>
          <h2 class="vice-chancellor__col-heading">${section.col_heading}</h2>
        </div>
        <div>
          <p class="vice-chancellor__col-body">${section.col_body}</p>
        </div>
      </div>
    </div>
  </section>`;
}

export function buildStepCountCards(section) {
  const cards = section.cards.map(card => `
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
    </article>`).join("");

  return `
  <section class="t-section" aria-label="${section.heading}">
    <div class="t-section__inner">
      <div class="section-header">
        ${section.overline ? `<span class="section-header__overline">${section.overline}</span>` : ""}
        <h2 class="section-header__heading">${section.heading}</h2>
        ${section.body ? `<p class="section-header__body">${section.body}</p>` : ""}
      </div>
      <div class="cards-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}

function buildSimpleCards(section) {
  const cards = section.cards.map(card => `
    <article class="card card--simple">
      ${card.image ? `
      <a href="${card.cta.href}" class="card__image-link" tabindex="-1" aria-hidden="true">
        <div class="card__media">
          <img src="${card.image.src}" alt="${card.image.alt}" loading="lazy">
        </div>
      </a>` : ""}
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
    </article>`).join("");

  return `
  <section class="t-section" aria-label="${section.heading}">
    <div class="t-section__inner">
      <div class="section-header">
        ${section.overline ? `<span class="section-header__overline">${section.overline}</span>` : ""}
        <h2 class="section-header__heading">${section.heading}</h2>
      </div>
      <div class="cards-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}


// =============================================================================
// Render
// =============================================================================

const render = (d) => `
${headerStyles}
${videoCarouselStyles}
${videoStyles}
${ctaBannerStyles}
${footerStyles}
${styles}
<div class="t-home">
  ${buildHeader()}
  ${buildMegaMenu()}
  <main id="main-content">
    ${buildHero(d.hero)}
    ${buildWhoWeAre(d.who_we_are)}
    ${buildContentTiles(d.content_tiles)}
    ${buildOverlayCards(d.study_pathways)}
    ${buildVideoCarouselSection(d.alumni)}
    ${buildCourseCards(d.new_courses)}
    ${buildOpenDays(d.open_days)}
    ${buildArticleCards(d.insights)}
    ${buildAccreditations(d.accreditations)}
    ${buildViceChancellor(d.vice_chancellor)}
    ${buildStepCountCards(d.apply_journey)}
    ${buildCtaBanner()}
  </main>
  ${buildFooter()}
</div>
${headerScript}`;

// =============================================================================
// Story
// =============================================================================

export default {
  title: "Templates/Home",
  render,
  excludeStories: ["buildStepCountCards"],
};

export const Default = { args: data.default };
