export function initInputField(el) {
  // Validation state toggling handled by the parent form's submit handler.
  // Call setError(el, message) / clearError(el) from form init.
}
export function setError(el, message) {
  el.classList.add('input--error');
  el.setAttribute('aria-invalid', 'true');
  const msg = el.closest('.form-group')?.querySelector('.form-error-msg');
  if (msg) msg.textContent = message;
}
export function clearError(el) {
  el.classList.remove('input--error');
  el.removeAttribute('aria-invalid');
}
