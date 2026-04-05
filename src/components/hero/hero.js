/**
 * Hero component behaviour.
 *
 * @param {HTMLElement} el - The `.hero` root element.
 *
 * - Reflects focus state onto the search field wrapper.
 * - Pauses the background video when the page is hidden (battery / a11y).
 * - Respects prefers-reduced-motion: pauses autoplay video on mount.
 */
export function initHero(el) {
  // ── Search field focus relay ───────────────────────────────────────────────
  const searchField = el.querySelector('.hero__search-field');
  const searchInput = el.querySelector('.hero__search-input');

  if (searchField && searchInput) {
    searchInput.addEventListener('focus', () => searchField.classList.add('is-focused'));
    searchInput.addEventListener('blur',  () => searchField.classList.remove('is-focused'));
  }

  // ── Background video ───────────────────────────────────────────────────────
  const video = el.querySelector('.hero__video');
  if (!video) return;

  // Respect reduced-motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    video.pause();
    video.removeAttribute('autoplay');
  }

  // Pause when tab is backgrounded
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else if (!prefersReduced) video.play();
  });
}
