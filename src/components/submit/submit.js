export function initSubmit(el) {
  const form = el.closest('form');
  if (!form) return;
  form.addEventListener('submit', () => {
    el.disabled = true;
    el.setAttribute('aria-busy', 'true');
    el.classList.add('submit-btn--loading');
  });
}
