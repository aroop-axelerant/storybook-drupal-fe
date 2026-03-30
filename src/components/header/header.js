export function initHeader(el) {
  // Scrolled state
  const onScroll = () => {
    el.classList.toggle('site-header--scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}
