/**
 * Search component behaviour.
 *
 * @param {HTMLElement} el - The `.search` root element.
 *
 * Clears the native search cancel button appearance cross-browser,
 * and reflects focus state onto the field wrapper so the outer border
 * can be styled without relying on :has() (limited browser support).
 */
export function initSearch(el) {
  const field = el.querySelector('.search__field');
  const input = el.querySelector('.search__input');

  if (!field || !input) return;

  input.addEventListener('focus', () => field.classList.add('is-focused'));
  input.addEventListener('blur',  () => field.classList.remove('is-focused'));
}
