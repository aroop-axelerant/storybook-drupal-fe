/**
 * CTA Banner component behaviour.
 * Handles email form submission, validation, and success/error state toggling.
 *
 * @param {HTMLElement} el - The root `.cta-banner` element.
 */
export function initCtaBanner(el) {
  const form   = el.querySelector('.cta-banner__form');
  const input  = el.querySelector('.cta-banner__input');
  const button = el.querySelector('.cta-banner__submit');

  if (!form || !input || !button) return;

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear prior states
    input.removeAttribute('aria-invalid');
    el.querySelector('.cta-banner__error')?.remove();
    el.querySelector('.cta-banner__success')?.remove();

    if (!emailRe.test(input.value.trim())) {
      input.setAttribute('aria-invalid', 'true');
      const msg = document.createElement('p');
      msg.className = 'cta-banner__error';
      msg.setAttribute('role', 'alert');
      msg.textContent = 'Please enter a valid email address.';
      form.after(msg);
      input.focus();
      return;
    }

    // Simulate success
    button.setAttribute('aria-busy', 'true');
    button.disabled = true;
    setTimeout(() => {
      button.setAttribute('aria-busy', 'false');
      button.disabled = false;
      form.style.display = 'none';
      const msg = document.createElement('p');
      msg.className = 'cta-banner__success';
      msg.setAttribute('role', 'status');
      msg.textContent = "You're subscribed! Check your inbox for a confirmation.";
      form.after(msg);
    }, 800);
  });
}
