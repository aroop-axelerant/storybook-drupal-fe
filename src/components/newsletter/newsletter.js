export function initNewsletter(el) {
  const form = el.querySelector('.newsletter__form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter__input');
    if (!input?.value) return;
    // Submission handled by Drupal webform integration.
    form.dispatchEvent(new CustomEvent('newsletter:submit', { bubbles: true, detail: { email: input.value } }));
  });
}
