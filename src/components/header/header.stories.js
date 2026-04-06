import "../../main.scss";
import data from "./header.json";

// =============================================================================
// Logo — inlined from src/assets/graphics/brand/logo-emblem.svg
// fill="currentColor" inherits white from the pill's text colour context.
// =============================================================================
const logoSvg = `<svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="color:var(--color-white)">
  <path d="M6.91022 12.7118C7.63661 11.0836 8.77482 9.67207 10.213 8.61585C11.6512 7.55964 13.34 6.89507 15.1133 6.68744C14.9838 5.69776 13.3289 3.6529 13.1022 3.59487C11.3501 4.01436 9.69923 4.77819 8.24615 5.84173C6.79307 6.90527 5.56688 8.2472 4.6392 9.78913C4.58356 9.98806 6.01095 12.2866 6.91022 12.7118Z" fill="currentColor"/>
  <path d="M16.2268 21.3297C15.0705 21.3279 13.9623 20.8677 13.1459 20.0503C12.3296 19.2329 11.8719 18.1252 11.8737 16.971C11.8754 15.8168 12.3365 14.7105 13.1553 13.8956C13.9742 13.0806 15.0838 12.6238 16.2401 12.6256C17.3964 12.6273 18.5046 13.0875 19.321 13.905C20.1374 14.7224 20.595 15.83 20.5932 16.9843C20.5915 18.1385 20.1305 19.2448 19.3116 20.0597C18.4927 20.8746 17.3831 21.3315 16.2268 21.3297ZM16.2268 7.99874C11.2613 8.0004 7.23738 12.0205 7.23821 16.9772C7.23987 21.934 11.2654 25.9516 16.231 25.9516C21.1965 25.9516 25.2221 21.9331 25.2237 16.9764C25.2247 15.7969 24.9926 14.6287 24.5408 13.5389C24.089 12.449 23.4263 11.4588 22.5906 10.6249C21.7549 9.79098 20.7627 9.1298 19.6707 8.67917C18.5787 8.22854 17.4084 7.99732 16.2268 7.99874ZM16.187 6.06495C16.4444 4.51825 18.1333 2.95083 18.1333 2.95083C18.1333 1.12397 16.187 0 16.187 0C16.187 0 14.2506 1.12397 14.2506 2.95083C14.2506 2.95083 15.9287 4.5224 16.187 6.06495Z" fill="currentColor"/>
  <path d="M9.36309 24.6386C8.03146 23.4159 7.04136 21.8685 6.49004 20.1483C5.93873 18.4281 5.84516 16.5943 6.21854 14.8271C5.24038 14.6431 2.78086 15.6195 2.67707 15.8284C2.37004 19.4886 3.52516 23.1215 5.89054 25.935C6.14879 26.0212 8.71376 25.3771 9.36309 24.6461M9.80401 25.9093C8.72953 26.9993 6.46598 27.2454 6.46598 27.2454C5.45627 28.7225 6.39125 30.8221 6.39125 30.8221C6.39125 30.8221 8.59501 31.1039 9.61884 29.6169C9.61884 29.6169 9.14056 27.3151 9.79903 25.9093M21.4913 29.6608C21.6465 29.5323 21.84 26.8186 21.3534 25.9333C19.8001 26.8494 18.0289 27.3326 16.2247 27.3326C14.4206 27.3326 12.6494 26.8494 11.096 25.9333C10.6186 26.826 10.8121 29.5323 10.9673 29.6608L10.9582 29.6815C12.6248 30.3815 14.4146 30.742 16.2227 30.742C18.0307 30.742 19.8206 30.3815 21.4871 29.6815L21.4913 29.6608ZM22.6521 25.8695C23.7233 26.9636 25.9835 27.2048 25.9835 27.2048C27.0048 28.6827 26.0715 30.7848 26.0715 30.7848C26.0715 30.7848 23.8644 31.0691 22.8315 29.5829C22.8315 29.5829 23.3164 27.2745 22.6521 25.8695ZM29.7757 15.8334C29.6944 15.6361 27.2108 14.6431 26.2326 14.8271C26.6139 16.5938 26.5246 18.4295 25.9736 20.151C25.4225 21.8726 24.4291 23.4199 23.0922 24.6386C23.8005 25.3564 26.3447 26.0253 26.5614 25.9267C28.6752 23.4237 29.8325 20.2542 29.828 16.9805C29.828 16.5934 29.8139 16.1939 29.7849 15.8201L29.7757 15.8334ZM25.5351 12.696C26.4211 12.275 27.802 10.1024 27.8236 9.80322C26.8972 8.25909 25.6718 6.91475 24.219 5.84878C22.7662 4.78281 21.1151 4.01658 19.3622 3.59487C19.1364 3.62969 17.4723 5.68698 17.3378 6.68661C19.1095 6.89099 20.7972 7.55268 22.2346 8.60646C23.672 9.66024 24.8096 11.0697 25.5351 12.696ZM5.73693 13.5357C4.36435 12.8535 3.43103 10.7813 3.43103 10.7813C1.71219 10.2807 0 11.8224 0 11.8224C0 11.8224 0.411857 13.999 2.14647 14.5146C2.14647 14.5146 4.19662 13.3533 5.73693 13.5357ZM26.6478 13.5357C28.0212 12.8535 28.9545 10.7813 28.9545 10.7813C30.6775 10.2807 32.3855 11.8224 32.3855 11.8224C32.3855 11.8224 31.9737 13.999 30.2366 14.5146C30.2366 14.5146 28.1889 13.3533 26.6478 13.5357Z" fill="currentColor"/>
</svg>`;

export default {
  title: "Components/Header",
  excludeStories: ["headerStyles", "buildHeader", "buildMegaMenu", "headerScript"],
};

// =============================================================================
// Styles
// =============================================================================

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ul { list-style: none; }

  /* ── Story canvas ─────────────────────────────────────────────────────── */
  .story-canvas {
    min-height: 100vh;
    background: linear-gradient(160deg, var(--color-forest-green) 0%, #0b191a 100%);
    position: relative;
  }

  .story-canvas__content {
    padding: calc(74px + var(--sp-64)) var(--sp-64) var(--sp-96);
    max-width: 900px;
    margin: 0 auto;
  }

  .story-canvas__heading {
    font-family: var(--font-serif);
    font-size: 56px;
    font-weight: var(--fw-regular);
    color: var(--color-white);
    line-height: 1.15;
    margin-bottom: var(--sp-24);
  }

  .story-canvas__body {
    font-family: var(--font-sans);
    font-size: var(--text-body);
    color: rgba(255,255,255,0.65);
    line-height: 1.65;
    max-width: 600px;
  }

  /* ── Site header ──────────────────────────────────────────────────────── */
  .site-header {
    position: fixed;
    top: var(--sp-16); left: 0; right: 0;
    z-index: 200;
    padding: var(--sp-8) var(--sp-64);
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  /* ── Pill base ────────────────────────────────────────────────────────── */
  .header__pill {
    background: rgba(11, 25, 26, 0.40);
    border: 1px solid rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border-radius: var(--radius-l);
    display: flex;
    align-items: center;
  }

  /* ── Left pill ────────────────────────────────────────────────────────── */
  .header__left {
    padding: var(--sp-8);
    gap: 0;
  }

  .header__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
    padding: 0 var(--sp-8);
    outline: none;
    border-radius: var(--radius-s);
  }

  .header__logo:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }

  .header__logo svg {
    width: 33px;
    height: auto;
    display: block;
  }

  /* ── Desktop nav ──────────────────────────────────────────────────────── */
  .header__nav {
    display: flex;
    align-items: center;
  }

  .header__nav-link {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-4);
    padding: var(--sp-8) var(--sp-16);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-regular);
    color: var(--color-white);
    text-decoration: none;
    border-radius: var(--radius-l);
    transition: background var(--duration-fast) var(--ease-out);
    white-space: nowrap;
    outline: none;
  }

  .header__nav-link:hover { background: rgba(255, 255, 255, 0.12); }

  .header__nav-link:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .header__nav-chevron {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    opacity: 0.70;
    transition: transform var(--duration-fast) var(--ease-out);
  }

  /* ── Desktop nav dropdown ─────────────────────────────────────────────── */
  .header__nav-item {
    position: relative;
  }

  .header__nav-item.is-open .header__nav-chevron {
    transform: rotate(180deg);
  }

  .header__nav-link {
    background: none;
    border: none;
    cursor: pointer;
  }

  .header__dropdown::before {
    content: '';
    position: absolute;
    top: calc(-1 * var(--sp-8));
    left: 0;
    right: 0;
    height: var(--sp-8);
  }

  .header__dropdown {
    position: absolute;
    top: calc(100% + var(--sp-8));
    left: 0;
    min-width: 220px;
    background: var(--color-white);
    border-radius: var(--radius-xs);
    box-shadow: var(--shadow-lg);
    padding: var(--sp-8);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4px);
    transition: opacity var(--duration-fast) var(--ease-out),
                visibility var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
    z-index: 50;
  }

  .header__nav-item.is-open .header__dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .header__dropdown-link {
    display: flex;
    align-items: center;
    padding: var(--sp-8) var(--sp-12);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-regular);
    color: var(--color-charcoal);
    text-decoration: none;
    border-radius: var(--radius-xs);
    transition: background var(--duration-fast) var(--ease-out),
                color var(--duration-fast) var(--ease-out);
    outline: none;
    white-space: nowrap;
  }

  .header__dropdown-link:hover {
    background: var(--color-charcoal-10);
    color: var(--color-charcoal);
  }

  .header__dropdown-link:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  /* ── Right pill ───────────────────────────────────────────────────────── */
  .header__right {
    padding: var(--sp-8) var(--sp-16);
    gap: var(--sp-16);
    display: flex;
    align-items: center;
  }

  .header__apply {
    display: inline-flex;
    align-items: center;
    padding: var(--sp-8) var(--sp-16);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-regular);
    color: var(--color-white);
    text-decoration: none;
    border-radius: var(--radius-l);
    transition: background var(--duration-fast) var(--ease-out);
    white-space: nowrap;
    outline: none;
  }

  .header__apply:hover { background: rgba(255, 255, 255, 0.12); }

  .header__apply:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .header__pill-divider {
    width: 1px;
    height: 16px;
    background: var(--color-white);
    opacity: 0.40;
    flex-shrink: 0;
    border-radius: 999px;
  }

  .header__icon-btn {
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    border-radius: var(--radius-l);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    cursor: pointer;
    transition: background var(--duration-fast) var(--ease-out);
    flex-shrink: 0;
    padding: 0;
    outline: none;
  }

  .header__icon-btn:hover { background: rgba(255, 255, 255, 0.12); }

  .header__icon-btn:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .header__icon-btn:active { transform: scale(0.98); }

  /* ── Mega menu ────────────────────────────────────────────────────────── */
  .mega-menu {
    position: fixed;
    inset: 0;
    z-index: 300;
    background: var(--color-charcoal);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
    transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),
                visibility 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .mega-menu.is-open {
    opacity: 1;
    visibility: visible;
  }

  /* ── Mega menu sticky bar ─────────────────────────────────────────────── */
  .mega-menu__bar {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--color-charcoal);
    height: 74px;
    padding: 0 var(--sp-64);
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-shrink: 0;
    border-bottom: 1px solid var(--color-charcoal-90, rgba(255,255,255,0.08));
  }

  .mega-menu__bar .header__pill {
    align-items: center;
    border: none;
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .mega-menu__bar .header__left {
    padding: var(--sp-8) var(--sp-16);
  }

  /* ── Mega menu 3-col body ─────────────────────────────────────────────── */
  .mega-menu__body {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--sp-32);
    max-width: var(--grid-max, 1312px);
    width: 100%;
    margin: 0 auto;
    padding: var(--sp-48) var(--sp-64) var(--sp-64);
    align-items: start;
  }

  /* ── Back button (mobile only) ────────────────────────────────────────── */
  .mega-menu__back {
    display: none;
  }

  /* ── Col 1: Primary links ─────────────────────────────────────────────── */
  .mega-menu__primary {
    display: flex;
    flex-direction: column;
    gap: var(--sp-32);
  }

  .mega-menu__plink {
    font-family: var(--font-serif);
    font-size: 40px;
    font-weight: var(--fw-regular);
    line-height: 1.3;
    letter-spacing: -0.08px;
    color: var(--color-white);
    opacity: 0.6;
    text-decoration: none;
    display: block;
    padding: var(--sp-4) 0 var(--sp-4) var(--sp-24);
    border-left: 4px solid transparent;
    transition: opacity var(--duration-fast) var(--ease-out),
                border-left-color var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .mega-menu__plink:hover { opacity: 0.8; }

  .mega-menu__plink.is-active {
    opacity: 1;
    border-left-color: var(--color-zingy-yellow);
  }

  .mega-menu__plink:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
    border-radius: 2px;
  }

  /* ── Col 2: Sub-nav panels ────────────────────────────────────────────── */
  .mega-menu__panels {
    position: relative;
  }

  .mega-menu__panel {
    display: none;
    flex-direction: column;
    gap: var(--sp-32);
  }

  .mega-menu__panel.is-active {
    display: flex;
  }

  .mega-menu__panel-intro {
    display: flex;
    flex-direction: column;
    gap: var(--sp-16);
  }

  .mega-menu__panel-title {
    font-family: var(--font-sans);
    font-size: 32px;
    font-weight: var(--fw-semibold);
    line-height: 1.3;
    color: var(--color-white);
  }

  .mega-menu__panel-desc {
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-regular);
    line-height: 1.65;
    color: rgba(157, 163, 163, 1);
  }

  /* ── Col 3: View more details standout link ───────────────────────────── */
  .mega-menu__detail-cta {
    display: inline-flex;
    align-items: center;
    gap: var(--sp-8);
    color: var(--color-zingy-yellow);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-semibold);
    text-decoration: none;
    border-radius: var(--radius-s);
    outline: none;
    transition: opacity var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
  }

  .mega-menu__detail-cta:hover {
    opacity: 0.8;
  }

  .mega-menu__detail-cta:hover svg {
    transform: translateX(6px);
  }

  .mega-menu__detail-cta:active {
    transform: scale(0.98);
  }

  .mega-menu__detail-cta:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }

  .mega-menu__detail-cta svg {
    flex-shrink: 0;
    transition: transform var(--duration-fast) var(--ease-out);
  }

  .mega-menu__subnav {
    display: flex;
    flex-direction: column;
  }

  .mega-menu__slink {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-16);
    padding: var(--sp-16);
    border-top: 1px solid rgba(255,255,255,0.08);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    border-left: 4px solid transparent;
    font-family: var(--font-sans);
    font-size: var(--text-h4, 1.0625rem);
    font-weight: var(--fw-semibold);
    line-height: 1.3;
    color: var(--color-white);
    text-decoration: none;
    opacity: 0.6;
    transition: opacity var(--duration-fast) var(--ease-out),
                background var(--duration-fast) var(--ease-out),
                border-left-color var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .mega-menu__slink:hover {
    opacity: 0.85;
    background: rgba(255, 255, 255, 0.04);
  }

  .mega-menu__slink.is-active {
    opacity: 1;
    background: rgba(255, 255, 255, 0.05);
    border-left-color: var(--color-zingy-yellow);
  }

  .mega-menu__slink:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .mega-menu__slink-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform var(--duration-fast) var(--ease-out);
  }

  .mega-menu__slink.is-active .mega-menu__slink-icon {
    transform: translateX(2px);
  }

  /* ── Col 3: Detail panels ─────────────────────────────────────────────── */
  .mega-menu__details {
    position: relative;
  }

  .mega-menu__detail {
    display: none;
    flex-direction: column;
    gap: var(--sp-24);
  }

  .mega-menu__detail.is-active {
    display: flex;
  }

  .mega-menu__courselist {
    display: flex;
    flex-direction: column;
  }

  .mega-menu__clink {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sp-16);
    padding: var(--sp-8) 0;
    border-top: 1px solid rgba(255,255,255,0.08);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-semibold);
    line-height: 1.3;
    color: var(--color-white);
    text-decoration: none;
    opacity: 0.6;
    transition: opacity var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .mega-menu__clink:hover { opacity: 1; }

  .mega-menu__clink:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .mega-menu__clink-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform var(--duration-fast) var(--ease-out);
  }

  .mega-menu__clink:hover .mega-menu__clink-icon {
    transform: translateX(2px);
  }

  /* ── Responsive: Tablet (≤ 1023px) ───────────────────────────────────── */
  @media (max-width: 1023px) {
    .site-header {
      padding: var(--sp-16) var(--sp-32);
    }

    .mega-menu__bar {
      padding: 0 var(--sp-32);
    }

    .mega-menu__body {
      padding: var(--sp-48) var(--sp-32) var(--sp-64);
      gap: var(--sp-24);
    }

    .mega-menu__plink {
      font-size: 32px;
    }
  }

  /* ── Responsive: Mobile (≤ 768px) ────────────────────────────────────── */
  @media (max-width: 768px) {
    /* Header */
    .site-header {
      padding: var(--sp-8) var(--sp-16);
    }

    .header__left {
      padding: var(--sp-8);
    }

    .header__nav {
      display: none;
    }

    .header__apply {
      display: none;
    }

    /* Hide the first divider in right pill on mobile */
    .header__right .header__pill-divider:first-of-type {
      display: none;
    }

    /* Mega menu bar */
    .mega-menu__bar {
      padding: 0 var(--sp-16);
      height: auto;
      min-height: 56px;
    }

    .mega-menu__bar .header__left {
      padding: var(--sp-8);
    }

    .mega-menu__bar .header__apply {
      display: none;
    }

    .mega-menu__bar .header__right .header__pill-divider:nth-child(2) {
      display: none;
    }

    /* Mega menu body: single column */
    .mega-menu__body {
      display: flex;
      flex-direction: column;
      padding: var(--sp-48) var(--sp-16);
      gap: 0;
    }

    /* Primary links */
    .mega-menu__primary {
      gap: var(--sp-32);
      width: 100%;
    }

    .mega-menu__plink {
      font-size: 28px;
      letter-spacing: -0.056px;
    }

    /* Sub-nav panels hidden — shown as inline accordion */
    .mega-menu__panels {
      display: none;
    }

    .mega-menu__inline-panel {
      margin-top: calc(-1 * var(--sp-32));
      padding-left: 20px;
      margin-bottom: 0;
    }

    .mega-menu__inline-panel .mega-menu__panel.is-active {
      display: flex;
      flex-direction: column;
      gap: var(--sp-32);
      padding-top: var(--sp-16);
    }

    .mega-menu__inline-panel .mega-menu__panel-intro {
      display: none;
    }

    .mega-menu__inline-panel .mega-menu__subnav {
      border-left: none;
      width: 100%;
    }

    .mega-menu__inline-panel .mega-menu__slink {
      border-left: 4px solid transparent;
    }

    /* Detail panels hidden until sub-link clicked */
    .mega-menu__details {
      display: none;
    }

    /* Detail view: hide primary, show details */
    .mega-menu--detail-view .mega-menu__primary {
      display: none;
    }

    .mega-menu--detail-view .mega-menu__details {
      display: flex;
      flex-direction: column;
      gap: var(--sp-24);
    }

    .mega-menu--detail-view .mega-menu__clink {
      padding: var(--sp-16) 0;
    }

    /* Back button */
    .mega-menu--detail-view .mega-menu__back {
      display: flex;
      align-items: center;
      gap: var(--sp-8);
      margin-bottom: var(--sp-32);
      font-family: var(--font-sans);
      font-size: var(--text-body);
      font-weight: var(--fw-semibold);
      color: var(--color-white);
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      transition: opacity var(--duration-fast) var(--ease-out);
      outline: none;
    }

    .mega-menu--detail-view .mega-menu__back:hover { opacity: 0.7; }

    .mega-menu--detail-view .mega-menu__back:focus-visible {
      outline: 2px solid var(--color-powdered-blue);
      outline-offset: 4px;
    }
  }
</style>`;

// =============================================================================
// HTML builders
// =============================================================================

const d = data.default;

/** Chevron icon */
const chevron = `<svg class="mega-menu__slink-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><polyline points="9 18 15 12 9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/** Arrow icon */
const arrow = `<svg class="mega-menu__clink-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function buildHeader() {
  const sectionMap = {};
  d.nav_sections.forEach(s => { sectionMap[s.id] = s; });

  const navLinks = d.nav_links.map(link => {
    const section = sectionMap[link.panel];
    const dropdownLinks = section
      ? section.sub_links.map(sl =>
          `<a href="${sl.href}" class="header__dropdown-link">${sl.label}</a>`
        ).join('')
      : '';
    return `
    <div class="header__nav-item">
      <button class="header__nav-link"
              aria-expanded="false"
              aria-haspopup="true"
              data-dropdown="${link.panel}">
        ${link.label}
        <svg class="header__nav-chevron" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      ${section ? `<div class="header__dropdown" role="region" aria-label="${link.label} menu">${dropdownLinks}</div>` : ''}
    </div>`;
  }).join('');

  return `
    <header class="site-header" aria-label="Site header">
      <div class="header__pill header__left">
        <a href="${d.logo_href}" class="header__logo" aria-label="${d.logo_alt}">
          ${logoSvg}
        </a>
        <nav class="header__nav" aria-label="Primary navigation">
          ${navLinks}
        </nav>
      </div>
      <div class="header__pill header__right">
        <a href="${d.apply_href}" class="header__apply">${d.apply_label}</a>
        <div class="header__pill-divider" aria-hidden="true"></div>
        <button class="header__icon-btn header__search-btn" aria-label="Search" type="button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </button>
        <div class="header__pill-divider" aria-hidden="true"></div>
        <button id="mega-menu-open" class="header__icon-btn"
                aria-label="Open navigation menu"
                aria-expanded="false" aria-controls="mega-menu" type="button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </header>`;
}

function buildPrimaryLinks() {
  return d.nav_sections.map(s =>
    `<a href="#" class="mega-menu__plink" data-target="${s.id}">${s.label}</a>`
  ).join('\n      ');
}

function buildPanels() {
  return d.nav_sections.map(section => {
    const subLinks = section.sub_links.map(sl => {
      const hasDetail = sl.detail && sl.detail.length > 0;
      return `
          <a href="${sl.href}" class="mega-menu__slink"${hasDetail ? ` data-detail="${sl.detail}"` : ''}>
            ${sl.label}
            ${hasDetail ? chevron : ''}
          </a>`;
    }).join('');

    return `
      <div id="${section.id}" class="mega-menu__panel">
        <div class="mega-menu__panel-intro">
          <h3 class="mega-menu__panel-title">${section.title}</h3>
          <p class="mega-menu__panel-desc">${section.description}</p>
        </div>
        <nav class="mega-menu__subnav" aria-label="${section.label}">
          ${subLinks}
        </nav>
      </div>`;
  }).join('');
}

function buildDetails() {
  return d.detail_panels.map(detail => {
    const links = detail.links.map(l =>
      `<a href="${l.href}" class="mega-menu__clink">${l.label}${arrow}</a>`
    ).join('\n          ');

    return `
      <div id="${detail.id}" class="mega-menu__detail">
        <div class="mega-menu__panel-intro">
          <h3 class="mega-menu__panel-title">${detail.title}</h3>
          <p class="mega-menu__panel-desc">${detail.description}</p>
          <a href="#" class="mega-menu__detail-cta">
            View more details
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
        <nav class="mega-menu__courselist" aria-label="${detail.title}">
          ${links}
        </nav>
      </div>`;
  }).join('');
}

function buildMegaMenu() {
  return `
    <div id="mega-menu" class="mega-menu"
         role="dialog" aria-modal="true"
         aria-label="Navigation menu" aria-hidden="true">

      <!-- Sticky bar -->
      <div class="mega-menu__bar">
        <div class="header__pill header__left">
          <a href="${d.logo_href}" class="header__logo" aria-label="${d.logo_alt}">
            ${logoSvg}
          </a>
        </div>
        <div class="header__pill header__right">
          <a href="${d.apply_href}" class="header__apply">${d.apply_label}</a>
          <div class="header__pill-divider" aria-hidden="true"></div>
          <button class="header__icon-btn" aria-label="Search" type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <div class="header__pill-divider" aria-hidden="true"></div>
          <button id="mega-menu-close" class="header__icon-btn"
                  aria-label="Close navigation menu" type="button">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- 3-column body -->
      <div class="mega-menu__body">

        <!-- Back button: mobile detail view -->
        <button class="mega-menu__back" aria-label="Back to main menu" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to main menu
        </button>

        <!-- Col 1: Primary nav -->
        <nav class="mega-menu__primary" aria-label="Main navigation sections">
          ${buildPrimaryLinks()}
        </nav>

        <!-- Col 2: Sub-nav panels -->
        <div class="mega-menu__panels">
          ${buildPanels()}
        </div>

        <!-- Col 3: Detail panels -->
        <div class="mega-menu__details">
          ${buildDetails()}
        </div>

      </div>
    </div>`;
}

// =============================================================================
// JS (inlined — mirrors header.js for Storybook self-containment)
// =============================================================================

const script = `
<script>
(function () {
  var menu     = document.getElementById('mega-menu');
  var openBtn  = document.getElementById('mega-menu-open');
  var closeBtn = document.getElementById('mega-menu-close');
  if (!menu || !openBtn || !closeBtn) return;

  var panelsContainer = menu.querySelector('.mega-menu__panels');
  var backBtn         = menu.querySelector('.mega-menu__back');
  var primaryLinks    = Array.from(menu.querySelectorAll('.mega-menu__plink'));
  var panels          = Array.from(menu.querySelectorAll('.mega-menu__panel'));
  var subLinks        = Array.from(menu.querySelectorAll('.mega-menu__slink'));
  var details         = Array.from(menu.querySelectorAll('.mega-menu__detail'));

  var FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusable() {
    return Array.from(menu.querySelectorAll(FOCUSABLE)).filter(function(el) {
      return el.offsetParent !== null;
    });
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    var focusable = getFocusable();
    if (!focusable.length) return;
    var first = focusable[0];
    var last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  function isMobile() { return window.innerWidth <= 768; }

  function restoreInlinePanel() {
    var ip = menu.querySelector('.mega-menu__inline-panel');
    if (!ip) return;
    var moved = ip.querySelector('.mega-menu__panel');
    if (moved) {
      moved.classList.remove('is-active');
      if (panelsContainer) panelsContainer.appendChild(moved);
    }
    ip.remove();
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') { closeMenu(); return; }
    trapFocus(e);
  }

  function openMenu() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeydown);
    closeBtn.focus();
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    menu.classList.remove('mega-menu--detail-view');
    menu.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleKeydown);
    openBtn.focus();
    restoreInlinePanel();
    primaryLinks.forEach(function(l) { l.classList.remove('is-active'); });
    panels.forEach(function(p) { p.classList.remove('is-active'); });
    subLinks.forEach(function(l) { l.classList.remove('is-active'); });
    details.forEach(function(d) { d.classList.remove('is-active'); });
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  function switchPanel(link) {
    var targetId = link.getAttribute('data-target');
    primaryLinks.forEach(function(l) { l.classList.remove('is-active'); });
    link.classList.add('is-active');
    panels.forEach(function(p) { p.classList.remove('is-active'); });
    subLinks.forEach(function(l) { l.classList.remove('is-active'); });
    details.forEach(function(d) { d.classList.remove('is-active'); });
    var target = document.getElementById(targetId);
    if (target) target.classList.add('is-active');
  }

  function switchPanelMobile(link) {
    var targetId      = link.getAttribute('data-target');
    var alreadyActive = link.classList.contains('is-active');
    restoreInlinePanel();
    primaryLinks.forEach(function(l) { l.classList.remove('is-active'); });
    if (alreadyActive) return;
    link.classList.add('is-active');
    var target = document.getElementById(targetId);
    if (target && panelsContainer) {
      panels.forEach(function(p) { p.classList.remove('is-active'); });
      target.classList.add('is-active');
      var ip = document.createElement('div');
      ip.className = 'mega-menu__inline-panel';
      ip.appendChild(target);
      link.parentNode.insertBefore(ip, link.nextSibling);
    }
  }

  primaryLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() { if (!isMobile()) switchPanel(link); });
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (isMobile()) switchPanelMobile(link);
      else switchPanel(link);
    });
  });

  function switchDetail(slink) {
    var detailId    = slink.getAttribute('data-detail');
    var parentPanel = slink.closest('.mega-menu__panel');
    if (parentPanel) {
      parentPanel.querySelectorAll('.mega-menu__slink').forEach(function(l) { l.classList.remove('is-active'); });
    }
    slink.classList.add('is-active');
    details.forEach(function(d) { d.classList.remove('is-active'); });
    var detail = document.getElementById(detailId);
    if (detail) detail.classList.add('is-active');
    if (isMobile()) menu.classList.add('mega-menu--detail-view');
  }

  subLinks.forEach(function(slink) {
    var detailId = slink.getAttribute('data-detail');
    if (!detailId) return;
    slink.addEventListener('mouseenter', function() { if (!isMobile()) switchDetail(slink); });
    slink.addEventListener('click', function(e) {
      e.preventDefault();
      switchDetail(slink);
    });
  });

  if (backBtn) {
    backBtn.addEventListener('click', function() {
      menu.classList.remove('mega-menu--detail-view');
    });
  }

  // ── Desktop nav dropdowns ──────────────────────────────────────────────
  var navItems = Array.from(document.querySelectorAll('.header__nav-item'));

  function closeAllDropdowns() {
    navItems.forEach(function(item) {
      item.classList.remove('is-open');
      var btn = item.querySelector('.header__nav-link');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  navItems.forEach(function(item) {
    var btn = item.querySelector('.header__nav-link');
    if (!btn) return;
    var dropdown = item.querySelector('.header__dropdown');

    item.addEventListener('mouseenter', function() {
      if (window.innerWidth <= 768) return;
      closeAllDropdowns();
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    });

    item.addEventListener('mouseleave', function() {
      if (window.innerWidth <= 768) return;
      item.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var isOpen = item.classList.contains('is-open');
      closeAllDropdowns();
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    if (!dropdown) return;

    btn.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        var first = dropdown.querySelector('.header__dropdown-link');
        if (first) first.focus();
      }
    });

    var dLinks = Array.from(dropdown.querySelectorAll('.header__dropdown-link'));
    dLinks.forEach(function(dLink, i) {
      dLink.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (dLinks[i + 1]) dLinks[i + 1].focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (i === 0) btn.focus();
          else if (dLinks[i - 1]) dLinks[i - 1].focus();
        } else if (e.key === 'Escape') {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      });
    });
  });

  document.addEventListener('click', closeAllDropdowns);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeAllDropdowns();
  });
})();
<\/script>`;

// =============================================================================
// Named exports — consumed by templates/pages that embed this component
// =============================================================================

export { styles as headerStyles, buildHeader, buildMegaMenu, script as headerScript };

// =============================================================================
// STORIES
// =============================================================================

/**
 * Default — full desktop layout
 * Dark background simulates how the header appears floating over page content.
 */
export const Default = () => `
  ${styles}
  <div class="story-canvas">
    ${buildHeader()}
    ${buildMegaMenu()}
    <div class="story-canvas__content">
      <h1 class="story-canvas__heading">
        Pursue your<br>passion in London.
      </h1>
      <p class="story-canvas__body">
        The header floats above page content with a frosted-glass pill design.
        Click the hamburger <strong style="color:white">☰</strong> to open the
        mega menu, or hover the primary nav links to explore the panel behaviour.
        Resize the viewport below 768 px to see the mobile layout.
      </p>
    </div>
  </div>
  ${script}
`;

/**
 * Mega Menu Open — pre-opened state with Study panel active for documentation
 */
export const MegaMenuOpen = () => `
  ${styles}
  <style>
    /* Pre-open the menu and Study panel for documentation */
    .mega-menu { opacity: 1 !important; visibility: visible !important; }
    #panel-study { display: flex !important; }
    .mega-menu__plink[data-target="panel-study"] {
      opacity: 1 !important;
      border-left-color: var(--color-zingy-yellow) !important;
    }
    #detail-ug { display: flex !important; }
    .mega-menu__slink[data-detail="detail-ug"] {
      opacity: 1 !important;
      background: rgba(255,255,255,0.05) !important;
      border-left-color: var(--color-zingy-yellow) !important;
    }
  </style>
  <div class="story-canvas">
    ${buildHeader()}
    ${buildMegaMenu()}
  </div>
  ${script}
`;

MegaMenuOpen.storyName = "Mega Menu — Open (Study)";
