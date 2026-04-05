export function initTagAccent(el) {
  const dismiss = el.querySelector('.tag__dismiss');
  if (dismiss) dismiss.addEventListener('click', () => el.remove());
}
