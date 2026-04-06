import "../../main.scss";
import data from "./card.json";

export default {
  title: "Components/Card",
  excludeStories: ["buildVideoCard", "buildCourseCard"],
};

// =============================================================================
// Styles
// =============================================================================

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ul, ol { list-style: none; }
  img { display: block; width: 100%; }

  /* ── Layout wrapper ───────────────────────────────────────────────────── */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--sp-32);
    padding: var(--sp-64);
    background: var(--color-off-white);
    font-family: var(--font-sans);
  }

  @media (max-width: 1023px) {
    .cards-grid { grid-template-columns: repeat(2, 1fr); padding: var(--sp-32); }
  }

  @media (max-width: 767px) {
    .cards-grid { grid-template-columns: 1fr; padding: var(--sp-24) var(--sp-16); }
  }

  /* ── Base card ────────────────────────────────────────────────────────── */
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

  /* ── Media (image container) ──────────────────────────────────────────── */
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

  .card:hover .card__media img {
    transform: scale(1.04);
  }

  .card__image-link {
    display: block;
    outline: none;
  }

  .card__image-link:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: -2px;
  }

  /* ── Body ─────────────────────────────────────────────────────────────── */
  .card__body {
    display: flex;
    flex-direction: column;
    gap: var(--sp-12);
    padding: var(--sp-24);
    flex: 1;
  }

  /* ── Tag (replaces overline) ──────────────────────────────────────────── */
  .tag {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-4);
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
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .tag--default {
    background: var(--color-off-white);
    color: var(--color-charcoal-90);
    border-color: transparent;
  }

  .tag--brand {
    background: var(--color-forest-green);
    color: var(--color-white);
  }

  .tag--violet {
    background: var(--color-violet);
    color: var(--color-charcoal-90);
    border-color: transparent;
  }

  /* ── Heading ──────────────────────────────────────────────────────────── */
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

  /* Stretched link — makes the whole card clickable */
  .card__heading-link::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  .card__heading-link:focus-visible::after {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: -2px;
    border-radius: var(--radius-m);
  }

  .card__heading-link:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  /* ── Excerpt ──────────────────────────────────────────────────────────── */
  .card__excerpt {
    font-size: var(--text-body-sm);
    line-height: var(--lh-body-sm);
    color: var(--color-charcoal-60);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* ── CTA link — matches Standout Link component ───────────────────────── */
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

  .card__cta:hover {
    opacity: var(--opacity-hover, 0.8);
  }

  .card__cta:active {
    transform: scale(0.98);
  }

  .card__cta:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }

  .card__cta svg {
    flex-shrink: 0;
    transition: transform 200ms var(--ease-out);
  }

  .card__cta:hover svg {
    transform: translateX(6px);
  }

  /* ── Spacer pushes CTA to bottom ──────────────────────────────────────── */
  .card__spacer { flex: 1; }


  /* ============================================================
     SIMPLE variant — featured content
     ============================================================ */
  .card--simple .card__body {
    gap: var(--sp-12);
  }


  /* ============================================================
     COURSE variant — dark forest-green card, inverse text
     ============================================================ */
  .card--course {
    background: var(--color-forest-green);
  }

  .card--course .card__body {
    gap: var(--sp-16);
  }

  .card--course .card__heading {
    color: var(--color-white);
  }

  .card--course .card__heading-link:hover {
    color: var(--color-white);
  }

  .card--course .card__excerpt {
    color: rgba(255, 255, 255, 0.80);
  }

  /* Course highlights list — vertical stacked rows */
  .card__highlights {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding: 0;
  }

  .card__highlight {
    display: grid;
    grid-template-columns: minmax(var(--sp-96), 1fr) 2fr;
    align-items: center;
    gap: var(--sp-16);
    padding: var(--sp-16) 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  .card__highlight:last-child {
    border-bottom: none;
  }

  .card__highlight-label {
    font-size: var(--text-body-xs);
    font-weight: var(--fw-regular);
    color: rgba(255, 255, 255, 0.75);
    letter-spacing: var(--ls-body-xs);
    text-transform: uppercase;
  }

  .card__highlight-value {
    font-size: var(--text-label-m);
    font-weight: var(--fw-semibold);
    color: var(--color-white);
  }

  /* Course CTA — Secondary Button Inverse */
  .card__cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    align-self: flex-start;
    gap: var(--sp-8);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: 600;
    line-height: 1;
    color: var(--color-white);
    background: transparent;
    border: 2px solid var(--color-white);
    border-radius: var(--radius-l);
    padding: var(--sp-12) var(--sp-24);
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    position: relative;
    z-index: 1;
    margin-top: auto;
    transition: background var(--duration) var(--ease-out),
                color var(--duration) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
  }

  .card__cta-btn:hover {
    background: var(--color-white);
    color: var(--color-charcoal);
  }

  .card__cta-btn:active {
    transform: scale(0.98);
  }

  .card__cta-btn:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }


  /* ============================================================
     PROFILE variant — staff/people
     ============================================================ */
  .card--profile {
    text-align: center;
  }

  .card__media--profile {
    aspect-ratio: 4 / 3;
  }

  .card--profile .card__body {
    align-items: center;
    gap: var(--sp-8);
    padding: var(--sp-24) var(--sp-24) var(--sp-32);
  }

  .card__department {
    display: inline-block;
    font-size: var(--text-label-s);
    font-weight: var(--fw-label-s);
    letter-spacing: var(--ls-label-s);
    color: var(--color-charcoal-60);
    background: var(--color-charcoal-10);
    padding: var(--sp-4) var(--sp-12);
    border-radius: var(--radius-l);
    line-height: 1;
  }

  .card--profile .card__heading {
    margin-top: var(--sp-4);
  }

  .card__role {
    font-size: var(--text-body-sm);
    line-height: var(--lh-body-sm);
    color: var(--color-charcoal-60);
  }

  .card__contact {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-4);
    font-size: var(--text-body-sm);
    color: var(--color-forest-green);
    text-decoration: none;
    margin-top: var(--sp-8);
    position: relative;
    z-index: 1;
    outline: none;
    transition: color var(--duration-fast) var(--ease-out);
  }

  .card__contact:hover {
    color: var(--color-charcoal);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .card__contact:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 3px;
    border-radius: var(--radius-xs);
  }


  /* ============================================================
     ARTICLE variant — optional image
     ============================================================ */
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

  .card__author {
    font-size: var(--text-body-xs);
    font-weight: var(--fw-semibold);
    color: var(--color-charcoal);
  }

  .card__meta-sep {
    font-size: var(--text-body-xs);
    color: var(--color-charcoal-30);
  }

  .card__date {
    font-size: var(--text-body-xs);
    color: var(--color-charcoal-60);
  }


  /* ============================================================
     EVENT variant — optional image, date badge
     ============================================================ */
  .card--event .card__media-wrap {
    position: relative;
    flex-shrink: 0;
  }

  .card--event .card__date-badge,
  .card--event .card__date-badge--inline {
    background-color: var(--color-zingy-yellow);
    color: var(--color-charcoal);
  }

  .card__date-badge {
    position: absolute;
    top: auto;
    bottom: var(--sp-16);
    left: var(--sp-16);
    width: fit-content;
    height: fit-content;
    border-radius: var(--radius-s);
    padding: var(--sp-8) var(--sp-12);
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1;
    box-shadow: var(--shadow-md);
  }

  /* No-image: badge sits outside card body as a sibling, in its own padded row */
  .card__event-date-wrap {
    padding: var(--sp-24) var(--sp-24) var(--sp-16);
    flex-shrink: 0;
  }

  /* Remove redundant top padding from body when inline badge wrap precedes it */
  .card__event-date-wrap + .card__body {
    padding-top: 0;
  }

  .card__date-badge--inline {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    height: fit-content;
    border-radius: var(--radius-s);
    padding: var(--sp-12) var(--sp-16);
    line-height: 1;
  }

  .card__date-day {
    font-family: var(--font-serif);
    font-size: var(--text-h2);
    font-weight: 400;
    color: var(--color-charcoal);
    line-height: 1;
  }

  .card__date-month {
    font-size: var(--text-body-xs);
    font-weight: var(--fw-semibold);
    color: var(--color-charcoal);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: var(--sp-4);
  }

  .card--event .card__body {
    gap: var(--sp-12);
  }

  /* Event CTA — Secondary button (light bg) */
  .card--event .card__cta-btn {
    background: var(--color-white);
    color: var(--color-charcoal);
    border-color: var(--color-charcoal);
  }

  .card--event .card__cta-btn:hover {
    background: var(--color-charcoal);
    color: var(--color-white);
  }

  .card__event-meta {
    display: flex;
    flex-direction: column;
    gap: var(--sp-4);
    margin-top: var(--sp-4);
  }

  .card__event-meta-item {
    display: flex;
    align-items: flex-start;
    gap: var(--sp-8);
    font-size: var(--text-body-sm);
    color: var(--color-charcoal-60);
    line-height: var(--lh-body-sm);
  }

  .card__event-meta-item svg {
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--color-charcoal-40);
  }


  /* ============================================================
     STEP COUNT variant — arch image, overlapping zingy-light body
     ============================================================ */
  .card--step-count {
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    overflow: visible;
  }

  .card--step-count:hover {
    box-shadow: none;
    transform: none;
  }

  /* Arch-shaped image container */
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

  .card--step-count:hover .card__step-image img {
    transform: scale(1.04);
  }

  /* Content body overlaps the lower portion of the image, narrower than the arch */
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

  /* Body background variants */
  .card__body--zingy-light { background: var(--color-bg-zingy-light); }
  .card__body--violet      { background: var(--color-bg-violet); }
  .card__body--peach       { background: var(--color-bg-peach); }

  .card--step-count:hover .card__body {
    box-shadow: var(--shadow-lg);
    transform: translateY(-3px);
  }

  /* Step overline — plain text, not a tag */
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

  .card--step-count .card__excerpt {
    color: var(--color-charcoal-60);
  }

  /* Secondary button — matches Secondary Button component spec */
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

  .card__step-cta:hover {
    background: var(--color-charcoal);
    color: var(--color-white);
  }

  .card__step-cta:active {
    transform: scale(0.98);
  }

  .card__step-cta:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }


  /* ============================================================
     VIDEO variant — portrait video card with mute toggle
     ============================================================ */
  .card--video {
    aspect-ratio: 9 / 16;
    background: var(--color-charcoal);
    max-width: 360px;
  }

  /* Full-bleed video/poster fills the whole card */
  .card--video .card__video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--duration-slow) var(--ease-out);
  }

  /* Gradient scrim — stronger at bottom for legibility */
  .card--video::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(20, 32, 28, 0.95) 0%,
      rgba(20, 32, 28, 0.50) 45%,
      rgba(20, 32, 28, 0.10) 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  /* Top controls row — tag + mute button */
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

  /* Click-to-play cursor on the card surface */
  .card--video {
    cursor: pointer;
  }

  /* Bottom content */
  .card--video .card__body {
    position: absolute;
    inset: auto 0 0 0;
    z-index: 2;
    padding: var(--sp-24) var(--sp-16);
    gap: var(--sp-8);
    background: none;
    flex: none;
  }

  /* Mute button — circular, matches tag height via equal padding */
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

  .card__mute-btn:hover {
    background: var(--color-off-white);
  }

  .card__mute-btn:active {
    transform: scale(0.96);
  }

  .card__mute-btn:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .card__mute-btn .icon-mute-off,
  .card__mute-btn .icon-mute-on  { display: none; line-height: 0; }

  .card__mute-btn[data-muted="true"]  .icon-mute-off { display: block; }
  .card__mute-btn[data-muted="false"] .icon-mute-on  { display: block; }

  /* Name — matches card__heading scale */
  .card--video .card__heading {
    color: var(--color-white);
  }

  /* Quote — matches card__excerpt scale but white */
  .card--video .card__excerpt {
    color: rgba(255, 255, 255, 0.80);
    -webkit-line-clamp: unset;
  }

  /* ============================================================
     OVERLAY variant — full-bleed image, gradient, reveal on hover
     ============================================================ */
  .card--overlay {
    background: var(--color-charcoal);
    height: 560px;
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 1023px) {
    .card--overlay { height: auto; aspect-ratio: 3 / 4; }
  }

  /* Full-bleed image fills the whole card */
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

  .card--overlay:hover .card__media img {
    transform: scale(1.06);
  }

  /* Gradient scrim — taller on hover to accommodate revealed content */
  .card--overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.82) 0%,
      rgba(0, 0, 0, 0.42) 50%,
      rgba(0, 0, 0, 0.08) 100%
    );
    transition: background var(--duration) var(--ease-out);
    pointer-events: none;
    z-index: 1;
  }

  .card--overlay:hover::after {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.90) 0%,
      rgba(0, 0, 0, 0.60) 60%,
      rgba(0, 0, 0, 0.10) 100%
    );
  }

  /* Body sits above the gradient scrim */
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
    font-size: var(--text-h2);
    font-weight: var(--fw-h2);
    line-height: var(--lh-h2);
    letter-spacing: var(--ls-h2);
    color: var(--color-white);
  }

  /* Revealed content — hidden by default, slides up on hover */
  .card__overlay-reveal {
    display: flex;
    flex-direction: column;
    gap: var(--sp-16);
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(var(--sp-16));
    transition: max-height var(--duration) var(--ease-out),
                opacity var(--duration) var(--ease-out),
                transform var(--duration) var(--ease-out);
  }

  .card--overlay:hover .card__overlay-reveal {
    max-height: 200px;
    opacity: 1;
    transform: translateY(0);
  }

  .card--overlay .card__excerpt {
    color: rgba(255, 255, 255, 0.80);
    -webkit-line-clamp: 3;
  }

  /* Standout Link — white on dark overlay */
  .card--overlay .card__cta {
    color: var(--color-white);
    padding-top: 0;
    margin-top: 0;
  }

  .card--overlay .card__cta:hover {
    opacity: 0.8;
  }
</style>`;

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
  ${styles}
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,360px));gap:var(--sp-32);padding:var(--sp-64);background:var(--color-off-white);font-family:var(--font-sans);">
    ${v.video.map((card, i) => buildVideoCard(card, i)).join('')}
  </div>
`;

/**
 * Overlay — full-bleed background image with gradient scrim. Heading is always
 * visible; summary and Standout Link are revealed on hover.
 */
export const Overlay = () => `
  ${styles}
  <div class="cards-grid">
    ${v.overlay.map(buildOverlayCard).join('')}
  </div>
`;

/**
 * Simple — featured content cards with image, overline, heading, excerpt and CTA.
 */
export const Simple = () => `
  ${styles}
  <div class="cards-grid">
    ${v.simple.map(buildSimpleCard).join('')}
  </div>
`;

/**
 * Course — no image; level badge, qualification, heading,
 * highlights list separated by dividers, and CTA button.
 */
export const Course = () => `
  ${styles}
  <div class="cards-grid">
    ${v.course.map(buildCourseCard).join('')}
  </div>
`;

/**
 * Profile — staff/people card with portrait image, name, role, department and email.
 */
export const Profile = () => `
  ${styles}
  <div class="cards-grid">
    ${v.profile.map(buildProfileCard).join('')}
  </div>
`;

/**
 * Article — category overline, heading, excerpt, author and date.
 * Third card demonstrates the image-optional state.
 */
export const Article = () => `
  ${styles}
  <div class="cards-grid">
    ${v.article.map(buildArticleCard).join('')}
  </div>
`;

/**
 * Step Count — arch-shaped image with overlapping zingy-light content body.
 * Overline shows the step number, followed by heading, summary and standout link.
 */
export const StepCount = () => `
  ${styles}
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
  ${styles}
  <div class="cards-grid">
    ${v.event.map(buildEventCard).join('')}
  </div>
`;

export { buildVideoCard, buildCourseCard };
