/**
 * Card component behaviour.
 * @param {HTMLElement} el - The `.card` root element.
 * Makes the entire card surface clickable via the primary heading link.
 */
export function initCard(el) {
  const link = el.querySelector('.card__heading-link, .card__heading a');
  if (!link) return;

  el.style.cursor = 'pointer';

  el.addEventListener('click', (e) => {
    if (e.target.closest('a, button')) return;
    link.click();
  });
}
