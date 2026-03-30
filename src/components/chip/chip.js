export function initChip(el) {
  const closeBtn = el.querySelector('.chip__close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => el.remove());
  }
}
