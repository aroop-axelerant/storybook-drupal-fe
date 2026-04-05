/**
 * Video component behaviour.
 * Opens a YouTube video in a modal on play button click.
 * Supports Escape key, focus trap, and close button.
 *
 * @param {HTMLElement} el - The root `.video` element.
 */
export function initVideo(el) {
  const playBtn  = el.querySelector('.video__play');
  const modal    = el.querySelector('.video__modal');
  const closeBtn = el.querySelector('.video__modal-close');
  const iframe   = el.querySelector('.video__iframe');

  if (!playBtn || !modal || !closeBtn || !iframe) return;

  const src = iframe.dataset.src;

  function openModal() {
    iframe.src = src + '?autoplay=1&rel=0';
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    iframe.src = '';
    modal.setAttribute('hidden', '');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    playBtn.focus();
  }

  playBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
  });

  // Focus trap inside modal
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = Array.from(modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.disabled);
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });
}
