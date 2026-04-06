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

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ul, ol { list-style: none; }
  img { display: block; width: 100%; }

  /* ── Template root ────────────────────────────────────────────────────── */
  .t-home {
    font-family: var(--font-sans);
    background: var(--color-off-white);
  }

  /* ── Section heading pattern (shared) ───────────────────────────────── */
  .section-header {
    display: flex;
    flex-direction: column;
    gap: var(--sp-8);
    margin-bottom: var(--sp-48);
  }

  .section-header__overline {
    font-size: var(--text-overline);
    font-weight: var(--fw-overline);
    letter-spacing: var(--ls-overline);
    text-transform: uppercase;
    color: var(--color-charcoal-60);
  }

  .section-header__heading {
    font-family: var(--font-serif);
    font-size: var(--text-display-s);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-s);
    letter-spacing: var(--ls-display-s);
    color: var(--color-charcoal);
  }

  .section-header__body {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
    max-width: 65ch;
  }

  /* ── Padded section wrapper ──────────────────────────────────────────── */
  .t-section {
    padding: var(--sp-96) 0;
  }

  .t-section__inner {
    max-width: var(--grid-max);
    margin-inline: auto;
    padding-inline: var(--grid-gutter);
  }

  @media (max-width: 1023px) {
    .t-section { padding: var(--sp-64) 0; }
    .section-header { margin-bottom: var(--sp-32); }
  }

  @media (max-width: 767px) {
    .t-section { padding: var(--sp-48) 0; }
  }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  HERO                                                                ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .hero {
    position: relative;
    width: 100%;
    min-height: 100svh;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .hero__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: var(--color-charcoal);
  }

  .hero__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: blur(3px);
    transform: scale(1.04);
  }

  .hero__yt-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .hero__yt-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    width: max(100%, calc(100vh * 16 / 9));
    height: max(100%, calc(100vw * 9 / 16));
    transform: translate(-50%, -50%);
    border: 0;
    opacity: 0;
  }

  .hero__yt-frame.is-ready {
    animation: hero-yt-fadein 1200ms var(--ease-out) forwards;
  }

  @keyframes hero-yt-fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

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

  .hero__inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: var(--grid-max, 1312px);
    margin-inline: auto;
    padding: var(--sp-96) var(--sp-64) var(--sp-64);
  }

  .hero__content { max-width: 720px; }

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

  .hero__title {
    font-family: var(--font-serif);
    font-size: var(--text-display-m);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-m);
    letter-spacing: var(--ls-display-m);
    color: var(--color-white);
    margin-bottom: var(--sp-24);
  }

  .hero__subtitle {
    font-family: var(--font-sans);
    font-size: var(--text-body-lg);
    font-weight: var(--fw-regular);
    line-height: var(--lh-body-lg);
    color: rgba(255, 255, 255, 0.80);
    margin-bottom: var(--sp-32);
    max-width: 600px;
  }

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
    outline: none;
    transition: background var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
  }

  .hero__btn:active { transform: scale(0.98); }
  .hero__btn:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 4px; }

  .hero__btn--primary {
    background: var(--color-zingy-yellow);
    color: var(--color-charcoal);
  }

  .hero__btn--primary:hover { opacity: 0.85; }

  .hero__btn--secondary {
    background: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
  }

  .hero__btn--secondary:hover { background: var(--color-white); color: var(--color-charcoal); }

  /* ── Search in hero ────────────────────────────────────────────────────── */
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

  .search__field:hover { border-color: var(--color-charcoal-40); }

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

  .search__field.is-focused .search__icon { color: var(--color-action-primary); }

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
  .search__submit:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 2px; }

  @media (max-width: 1023px) {
    .hero__inner { padding: var(--sp-96) var(--sp-32) var(--sp-48); }
    .hero__content { max-width: 100%; }
  }

  @media (max-width: 767px) {
    .hero { min-height: 100svh; align-items: flex-end; }
    .hero__inner { padding: var(--sp-64) var(--sp-16) var(--sp-48); }
    .hero__title { font-size: var(--text-display-s); line-height: var(--lh-display-s); }
    .hero__subtitle { font-size: var(--text-body); line-height: var(--lh-body); }
    .hero__actions { flex-direction: column; align-items: flex-start; }
    .search { max-width: 100%; }
  }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  CONTENT TILES                                                       ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .content-tiles {
    padding: var(--sp-96) 0;
    background: var(--color-off-white);
    font-family: var(--font-sans);
  }

  .content-tiles__inner {
    max-width: var(--grid-max);
    margin-inline: auto;
    padding-inline: var(--grid-gutter);
  }

  .content-tiles__header {
    display: flex;
    flex-direction: column;
    gap: var(--sp-8);
    margin-bottom: var(--sp-48);
    padding-bottom: var(--sp-48);
    border-bottom: 1px solid var(--color-border);
  }

  .content-tiles__overline {
    font-size: var(--text-overline);
    font-weight: var(--fw-overline);
    letter-spacing: var(--ls-overline);
    text-transform: uppercase;
    color: var(--color-charcoal-60);
  }

  .content-tiles__heading {
    font-family: var(--font-serif);
    font-size: var(--text-display-s);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-s);
    letter-spacing: var(--ls-display-s);
    color: var(--color-charcoal);
  }

  .content-tiles__body {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
    max-width: 65ch;
  }

  .content-tiles__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0;
    border-bottom: 1px solid var(--color-border);
  }

  .content-tiles__grid[data-tile-count="2"] { grid-template-columns: repeat(2, 1fr); }
  .content-tiles__grid[data-tile-count="3"] { grid-template-columns: repeat(3, 1fr); }
  .content-tiles__grid[data-tile-count="4"] { grid-template-columns: repeat(4, 1fr); }
  .content-tiles__grid[data-tile-count="5"] { grid-template-columns: repeat(5, 1fr); }

  .content-tiles__tile {
    display: flex;
    flex-direction: column;
    gap: var(--sp-24);
    padding: var(--sp-32);
    border-right: 1px solid var(--color-border);
  }

  .content-tiles__tile:last-child { border-right: none; }

  .content-tiles__icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--sp-96);
    height: var(--sp-96);
    border-radius: var(--radius-m);
    color: var(--color-charcoal);
  }

  .content-tiles__icon-wrap svg { width: 40px; height: 40px; }

  .content-tiles__tile-heading {
    font-family: var(--font-sans);
    font-size: var(--text-h3);
    font-weight: var(--fw-semibold);
    line-height: var(--lh-h3);
    letter-spacing: var(--ls-h3);
    color: var(--color-charcoal);
  }

  .content-tiles__tile-body {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
  }

  @media (max-width: 1023px) {
    .content-tiles { padding: var(--sp-64) 0; }
    .content-tiles__header { margin-bottom: var(--sp-32); padding-bottom: var(--sp-32); }
    .content-tiles__grid[data-tile-count="2"],
    .content-tiles__grid[data-tile-count="3"] { grid-template-columns: 1fr; }
    .content-tiles__grid[data-tile-count="4"],
    .content-tiles__grid[data-tile-count="5"] { grid-template-columns: repeat(2, 1fr); }
    .content-tiles__tile { padding: var(--sp-24); border-right: none; border-bottom: 1px solid var(--color-border); }
    .content-tiles__tile:last-child { border-bottom: none; }
  }

  @media (max-width: 767px) {
    .content-tiles { padding: var(--sp-48) 0; }
    .content-tiles__tile { padding: var(--sp-16); gap: var(--sp-16); }
    .content-tiles__icon-wrap { width: var(--sp-64); height: var(--sp-64); }
    .content-tiles__icon-wrap svg { width: 32px; height: 32px; }
  }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  FEATURED CONTENT — HIGHLIGHTS                                       ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .featured-content {
    width: 100%;
    padding: var(--sp-96) var(--grid-gutter);
    font-family: var(--font-sans);
  }

  .featured-content__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-96);
    max-width: var(--grid-max);
    margin-inline: auto;
    align-items: center;
  }

  .featured-content--inverse { background: var(--color-forest-green); }

  .featured-content__lead {
    display: flex;
    flex-direction: column;
    gap: var(--sp-32);
  }

  .featured-content__heading {
    font-family: var(--font-serif);
    font-size: var(--text-display-m);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-m);
    letter-spacing: var(--ls-display-m);
    color: var(--color-charcoal);
  }

  .featured-content--inverse .featured-content__heading { color: var(--color-white); }

  .featured-content__body {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
    max-width: 52ch;
  }

  .featured-content--inverse .featured-content__body { color: rgba(255, 255, 255, 0.75); }

  .featured-content__highlights {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .featured-content__highlight {
    display: grid;
    grid-template-columns: minmax(var(--sp-96), 140px) 1fr;
    align-items: center;
    gap: var(--sp-32);
    padding: var(--sp-32) 0;
  }

  .featured-content__highlight + .featured-content__highlight {
    border-top: 1px solid var(--color-border);
  }

  .featured-content--inverse .featured-content__highlight + .featured-content__highlight {
    border-top-color: rgba(255, 255, 255, 0.20);
  }

  .featured-content__stat {
    font-family: var(--font-serif);
    font-size: var(--text-display-s);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-s);
    letter-spacing: var(--ls-display-s);
    color: var(--color-charcoal);
  }

  .featured-content--inverse .featured-content__stat { color: var(--color-white); }

  .featured-content__desc {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
  }

  .featured-content--inverse .featured-content__desc { color: rgba(255, 255, 255, 0.75); }

  @media (max-width: 1023px) {
    .featured-content { padding: var(--sp-64) var(--grid-gutter); }
    .featured-content__inner { grid-template-columns: 1fr; gap: var(--sp-48); }
    .featured-content__highlight { grid-template-columns: minmax(var(--sp-64), 100px) 1fr; gap: var(--sp-24); padding: var(--sp-24) 0; }
  }

  @media (max-width: 767px) {
    .featured-content { padding: var(--sp-48) var(--grid-gutter); }
    .featured-content__highlight { gap: var(--sp-16); padding: var(--sp-16) 0; }
  }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  CARDS — shared base                                                 ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--sp-32);
  }

  .cards-grid--4up {
    display: flex;
    height: 560px;
    gap: var(--sp-16);
  }

  .cards-grid--4up .card--overlay {
    flex: 1 1 0%;
    min-width: 0;
    transition: flex-grow 0.4s ease-out;
  }

  .cards-grid--4up:has(> .card--overlay:hover) .card--overlay {
    flex-grow: 0.3;
  }

  .cards-grid--4up:has(> .card--overlay:hover) .card--overlay:hover {
    flex-grow: 1.6;
    transform: none;
  }

  .card {
    position: relative;
    background: var(--color-white);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-md);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: box-shadow var(--duration) var(--ease-out),
                transform var(--duration) var(--ease-out);
  }

  .card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
  }

  .card--course {
    background: var(--color-bg-brand);
  }

  .card__media {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    flex-shrink: 0;
  }

  .card__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--duration-slow) var(--ease-out);
  }

  .card:hover .card__media img { transform: scale(1.04); }

  .card__body {
    display: flex;
    flex-direction: column;
    gap: var(--sp-12);
    padding: var(--sp-24);
    flex: 1;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    width: auto;
    max-width: 100%;
    align-self: flex-start;
    font-family: var(--font-sans);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    padding: var(--sp-4) var(--sp-12);
    border-radius: var(--radius-l);
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1;
    cursor: default;
  }

  .tag--default {
    background: var(--color-off-white);
    color: var(--color-charcoal-90);
  }

  .tag--brand {
    background: var(--color-forest-green);
    color: var(--color-white);
  }

  .card__heading {
    font-family: var(--font-sans);
    font-size: var(--text-h4);
    font-weight: var(--fw-h4);
    line-height: var(--lh-h4);
    letter-spacing: var(--ls-h4);
    color: var(--color-charcoal);
  }

  .card__heading-link {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  .card__heading-link::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  .card__heading-link:hover { text-decoration: underline; text-underline-offset: 3px; }
  .card__heading-link:focus-visible::after { outline: 2px solid var(--color-powdered-blue); outline-offset: -2px; border-radius: var(--radius-m); }

  .card__excerpt {
    font-size: var(--text-body-sm);
    line-height: var(--lh-body-sm);
    color: var(--color-charcoal-60);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card__cta {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-8);
    font-size: var(--text-body);
    font-weight: 600;
    color: var(--color-forest-green);
    text-decoration: none;
    margin-top: auto;
    padding-top: var(--sp-4);
    position: relative;
    z-index: 1;
    border-radius: var(--radius-s);
    outline: none;
    transition: opacity var(--duration) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
  }

  .card__cta:hover { opacity: 0.8; }
  .card__cta:active { transform: scale(0.98); }
  .card__cta:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 4px; }
  .card__cta svg { flex-shrink: 0; transition: transform 200ms var(--ease-out); }
  .card__cta:hover svg { transform: translateX(6px); }

  .card__spacer { flex: 1; }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  OVERLAY CARDS                                                       ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .card--overlay {
    background: var(--color-charcoal);
    aspect-ratio: 9 / 16;
    box-shadow: var(--shadow-lg);
  }

  .card--overlay .card__media {
    position: absolute;
    inset: 0;
    aspect-ratio: unset;
    width: 100%;
    height: 100%;
  }

  .card--overlay .card__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--duration-slow) var(--ease-out);
  }

  .card--overlay:hover .card__media img { transform: scale(1.06); }

  .card--overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.08) 100%);
    transition: background var(--duration) var(--ease-out);
    pointer-events: none;
    z-index: 1;
  }

  .card--overlay:hover::after {
    background: linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.60) 60%, rgba(0,0,0,0.10) 100%);
  }

  .card--overlay .card__body {
    position: absolute;
    inset: auto 0 0 0;
    z-index: 2;
    padding: var(--sp-32);
    gap: var(--sp-16);
    background: none;
    flex: none;
  }

  .card--overlay .card__heading {
    font-size: var(--text-h3);
    font-weight: var(--fw-h3);
    line-height: var(--lh-h3);
    letter-spacing: var(--ls-h3);
    color: var(--color-white);
  }

  .card--overlay .card__heading-link:hover { color: var(--color-white); }

  .card__overlay-reveal {
    display: flex;
    flex-direction: column;
    gap: var(--sp-16);
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(var(--sp-16));
    transition: max-height var(--duration) var(--ease-out),
                opacity var(--duration) var(--ease-out) 80ms,
                transform var(--duration) var(--ease-out) 80ms;
  }

  .card--overlay:hover .card__overlay-reveal {
    max-height: 200px;
    opacity: 1;
    transform: translateY(0);
  }

  .card--overlay .card__excerpt {
    color: rgba(255,255,255,0.80);
    -webkit-line-clamp: 3;
    opacity: 0;
    transform: translateY(var(--sp-8));
    transition: opacity var(--duration) var(--ease-out) 160ms,
                transform var(--duration) var(--ease-out) 160ms;
  }

  .card--overlay:hover .card__excerpt {
    opacity: 1;
    transform: translateY(0);
  }

  .card--overlay .card__cta {
    color: var(--color-white);
    padding-top: 0;
    margin-top: 0;
    opacity: 0;
    transform: translateY(var(--sp-8));
    transition: opacity var(--duration) var(--ease-out) 220ms,
                transform var(--duration) var(--ease-out) 220ms;
  }

  .card--overlay:hover .card__cta {
    opacity: 1;
    transform: translateY(0);
  }

  .card--overlay .card__cta:hover { opacity: 0.8; }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  VIDEO CARDS                                                         ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .card--video {
    aspect-ratio: 9 / 16;
    background: var(--color-charcoal);
    max-width: 360px;
    cursor: pointer;
  }

  .card--video .card__video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--duration-slow) var(--ease-out);
  }

  .card--video::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(20,32,28,0.95) 0%, rgba(20,32,28,0.50) 45%, rgba(20,32,28,0.10) 100%);
    pointer-events: none;
    z-index: 1;
  }

  .card__video-controls {
    position: absolute;
    top: var(--sp-16);
    left: var(--sp-16);
    right: var(--sp-16);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .card--video .card__body {
    position: absolute;
    inset: auto 0 0 0;
    z-index: 2;
    padding: var(--sp-24) var(--sp-16);
    gap: var(--sp-8);
    background: none;
    flex: none;
  }

  .card__mute-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--sp-4);
    border-radius: 50%;
    background: var(--color-white);
    border: none;
    cursor: pointer;
    color: var(--color-charcoal);
    flex-shrink: 0;
    line-height: 0;
    outline: none;
    transition: background var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
  }

  .card__mute-btn:hover { background: var(--color-off-white); }
  .card__mute-btn:active { transform: scale(0.96); }
  .card__mute-btn:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 2px; }

  .card__mute-btn .icon-mute-off,
  .card__mute-btn .icon-mute-on  { display: none; line-height: 0; }
  .card__mute-btn[data-muted="true"]  .icon-mute-off { display: block; }
  .card__mute-btn[data-muted="false"] .icon-mute-on  { display: block; }

  .card--video .card__heading { color: var(--color-white); }
  .card--video .card__excerpt { color: rgba(255,255,255,0.80); -webkit-line-clamp: unset; }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  STEP COUNT CARDS                                                    ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .card--step-count {
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    overflow: visible;
  }

  .card--step-count:hover { box-shadow: none; transform: none; }

  .card__step-image {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 999px 999px var(--radius-s) var(--radius-s);
    aspect-ratio: 3 / 4;
  }

  .card__step-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform var(--duration-slow) var(--ease-out);
  }

  .card--step-count:hover .card__step-image img { transform: scale(1.04); }

  .card--step-count .card__body {
    border-radius: var(--radius-m);
    margin-top: calc(-1 * var(--sp-64));
    margin-left: var(--sp-24);
    margin-right: var(--sp-24);
    position: relative;
    z-index: 1;
    gap: var(--sp-16);
    padding: var(--sp-24);
    transition: box-shadow var(--duration) var(--ease-out),
                transform var(--duration) var(--ease-out);
  }

  .card__body--zingy-light { background: var(--color-bg-zingy-light); }
  .card__body--violet      { background: var(--color-bg-violet); }
  .card__body--peach       { background: var(--color-bg-peach); }

  .card--step-count:hover .card__body { box-shadow: var(--shadow-lg); transform: translateY(-3px); }

  .card__step-label {
    font-family: var(--font-sans);
    font-size: var(--text-overline);
    font-weight: var(--fw-overline);
    letter-spacing: var(--ls-overline);
    line-height: var(--lh-overline);
    text-transform: uppercase;
    color: var(--color-charcoal-80);
  }

  .card--step-count .card__heading {
    font-family: var(--font-sans);
    font-size: var(--text-h3);
    font-weight: var(--fw-h3);
    line-height: var(--lh-h3);
    letter-spacing: var(--ls-h3);
    color: var(--color-charcoal);
  }

  .card--step-count .card__excerpt { color: var(--color-charcoal-60); }

  .card__step-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--sp-8);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: 600;
    line-height: 1;
    color: var(--color-charcoal);
    background: transparent;
    border: 2px solid var(--color-charcoal);
    border-radius: var(--radius-l);
    padding: var(--sp-12) var(--sp-24);
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    width: auto;
    align-self: flex-start;
    margin-top: auto;
    outline: none;
    position: relative;
    z-index: 1;
    transition: background var(--duration) var(--ease-out),
                color var(--duration) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
  }

  .card__step-cta:hover { background: var(--color-charcoal); color: var(--color-white); }
  .card__step-cta:active { transform: scale(0.98); }
  .card__step-cta:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 4px; }

  /* Cards responsive */
  @media (max-width: 1023px) {
    .cards-grid { grid-template-columns: repeat(2, 1fr); }
    .cards-grid--4up { flex-wrap: wrap; }
    .cards-grid--4up .card--overlay { flex: 1 1 calc(50% - var(--sp-8)); transition: none; }
    .cards-grid--4up:has(> .card--overlay:hover) .card--overlay { flex-grow: 1; }
    .cards-grid--4up:has(> .card--overlay:hover) .card--overlay:hover { flex-grow: 1; }
  }
  @media (max-width: 767px) {
    .cards-grid { grid-template-columns: 1fr; }
    .cards-grid--4up { flex-direction: column; height: auto; }
    .cards-grid--4up .card--overlay { flex: none; height: 280px; transition: none; }
    .cards-grid--4up:has(> .card--overlay:hover) .card--overlay { flex: none; }
    .cards-grid--4up:has(> .card--overlay:hover) .card--overlay:hover { flex: none; transform: none; }
  }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  WHO WE ARE — video + highlights two-col                            ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .who-we-are {
    padding: var(--sp-96) 0;
  }

  .who-we-are__inner {
    max-width: var(--grid-max);
    margin-inline: auto;
    padding-inline: var(--grid-gutter);
  }

  .who-we-are__video {
    margin-bottom: var(--sp-64);
    border-radius: var(--radius-m);
    overflow: hidden;
  }

  .video--compact .video__thumbnail {
    aspect-ratio: unset;
    height: 350px;
  }

  @media (max-width: 767px) {
    .video--compact .video__thumbnail {
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }

  .who-we-are__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-64);
    align-items: start;
  }

  /* ── Video component ──────────────────────────────────────────────────── */
  .video {
    position: relative;
    width: 100%;
  }

  .video__thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: var(--color-charcoal);
    border-radius: var(--radius-m);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video__thumbnail-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .video__thumbnail::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(11,25,26,0.90) 0%, rgba(11,25,26,0.60) 30%, rgba(11,25,26,0.0) 65%);
    border-radius: inherit;
    pointer-events: none;
  }

  .video__play {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--color-white);
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    transition: transform var(--duration-fast) var(--ease-out),
                box-shadow var(--duration-fast) var(--ease-out);
    outline: none;
    box-shadow: 0 var(--sp-4) var(--sp-24) rgba(0,0,0,0.4);
  }

  .video__play:hover { transform: scale(1.08); box-shadow: 0 var(--sp-8) var(--sp-32) rgba(0,0,0,0.5); }
  .video__play:active { transform: scale(0.98); }
  .video__play:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 4px; }

  .video__play-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: var(--color-charcoal-90);
    transform: translateX(2px);
  }

  .video__play-icon svg { width: 100%; height: 100%; }

  .video__caption {
    position: absolute;
    bottom: var(--sp-32);
    left: var(--sp-32);
    right: var(--sp-32);
    z-index: 1;
  }

  .video__title {
    font-family: var(--font-serif);
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 400;
    line-height: 1.2;
    color: var(--color-white);
    margin-bottom: var(--sp-8);
  }

  .video__attribution {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 400;
    color: rgba(255,255,255,0.6);
    line-height: 1.4;
  }

  .video__modal {
    position: fixed;
    inset: 0;
    z-index: 9000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(11,25,26,0.72);
    padding: var(--sp-32);
    animation: modal-fade-in var(--duration) var(--ease-out) forwards;
  }

  .video__modal[hidden] { display: none; }

  @keyframes modal-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .video__modal-inner {
    position: relative;
    width: 100%;
    max-width: 960px;
    animation: modal-scale-in var(--duration) var(--ease-out) forwards;
  }

  @keyframes modal-scale-in {
    from { transform: scale(0.96); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }

  .video__modal-close {
    position: absolute;
    top: calc(-1 * var(--sp-48));
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.2);
    color: var(--color-white);
    cursor: pointer;
    transition: background var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .video__modal-close:hover { background: rgba(255,255,255,0.25); }
  .video__modal-close:active { transform: scale(0.95); }
  .video__modal-close:focus-visible { outline: 2px solid var(--color-powdered-blue); outline-offset: 4px; }

  .video__embed-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-m);
    overflow: hidden;
    background: var(--color-charcoal);
  }

  .video__iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  /* ── Who We Are highlights (default — no bg) ──────────────────────────── */
  .who-we-are__highlights {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .who-we-are__stat-row {
    display: grid;
    grid-template-columns: minmax(var(--sp-96), 140px) 1fr;
    align-items: center;
    gap: var(--sp-32);
    padding: var(--sp-32) 0;
  }

  .who-we-are__stat-row + .who-we-are__stat-row {
    border-top: 1px solid var(--color-border);
  }

  .who-we-are__stat {
    font-family: var(--font-serif);
    font-size: var(--text-display-s);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-s);
    letter-spacing: var(--ls-display-s);
    color: var(--color-charcoal);
  }

  .who-we-are__desc {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
  }

  .who-we-are__lead {
    margin-bottom: var(--sp-32);
  }

  .who-we-are__heading {
    font-family: var(--font-serif);
    font-size: var(--text-display-s);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-s);
    letter-spacing: var(--ls-display-s);
    color: var(--color-charcoal);
    margin-bottom: var(--sp-16);
  }

  .who-we-are__body {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
  }

  @media (max-width: 1023px) {
    .who-we-are { padding: var(--sp-64) 0; }
    .who-we-are__grid { grid-template-columns: 1fr; gap: var(--sp-48); }
    .who-we-are__stat-row { grid-template-columns: minmax(var(--sp-64), 100px) 1fr; gap: var(--sp-24); padding: var(--sp-24) 0; }
  }

  @media (max-width: 767px) {
    .who-we-are { padding: var(--sp-48) 0; }
    .who-we-are__stat-row { gap: var(--sp-16); padding: var(--sp-16) 0; }
  }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  VIDEO CAROUSEL                                                      ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  /* Video Carousel styles imported from component */

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  ARTICLE CARDS                                                       ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .cards-grid--4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--sp-32);
  }

  .card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--sp-8);
  }

  .card--article.card--no-image {
    border-left: 3px solid var(--color-charcoal-20);
    border-radius: 0 var(--radius-m) var(--radius-m) 0;
  }

  .card--article .card__meta {
    display: flex;
    align-items: center;
    gap: var(--sp-8);
    margin-top: auto;
    padding-top: var(--sp-8);
  }

  .card__date { font-size: var(--text-body-xs); color: var(--color-charcoal-60); }

  .tag--violet {
    background: var(--color-violet);
    color: var(--color-charcoal-90);
    border-color: transparent;
  }

  @media (max-width: 1023px) {
    .cards-grid--4 { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 767px) {
    .cards-grid--4 { grid-template-columns: 1fr; }
  }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  ACCREDITATIONS                                                      ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .accreditations {
    overflow: hidden;
  }

  .accreditations .section-header {
    margin-bottom: var(--sp-64);
  }

  /* ── Ticker ─────────────────────────────────────────────────────────── */
  .logo-ticker {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
  }

  .logo-ticker__track {
    display: flex;
    gap: var(--sp-32);
    width: max-content;
    animation: ticker-scroll 40s linear infinite;
  }

  .logo-ticker__track:hover { animation-play-state: paused; }

  @keyframes ticker-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .logo-ticker__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 48px;
    padding: var(--sp-8) var(--sp-24);
    border: 1px solid var(--color-charcoal-20);
    border-radius: var(--radius-l);
    background: var(--color-white);
    white-space: nowrap;
    font-family: var(--font-sans);
    font-size: var(--text-body-sm);
    font-weight: var(--fw-semibold);
    color: var(--color-charcoal-60);
    letter-spacing: 0.02em;
    transition: border-color var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out);
  }

  .logo-ticker__item:hover {
    border-color: var(--color-charcoal-40);
    color: var(--color-charcoal);
  }

  /* ╔══════════════════════════════════════════════════════════════════════╗
     ║  VICE-CHANCELLOR                                                     ║
     ╚══════════════════════════════════════════════════════════════════════╝ */
  .vice-chancellor__video {
    margin-bottom: var(--sp-64);
  }

  .vice-chancellor__two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sp-64);
    align-items: start;
  }

  .vice-chancellor__col-heading {
    font-family: var(--font-serif);
    font-size: var(--text-display-s);
    font-weight: var(--fw-regular);
    line-height: var(--lh-display-s);
    letter-spacing: var(--ls-display-s);
    color: var(--color-charcoal);
    margin: 0;
  }

  .vice-chancellor__col-body {
    font-size: var(--text-body-lg);
    line-height: var(--lh-body-lg);
    color: var(--color-charcoal-60);
    margin: 0;
  }

  @media (max-width: 767px) {
    .vice-chancellor__two-col {
      grid-template-columns: 1fr;
      gap: var(--sp-32);
    }
  }

</style>`;

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

function buildStepCountCards(section) {
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
};

export const Default = { args: data.default };
