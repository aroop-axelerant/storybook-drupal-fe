export function initTextArea(el) {
  // Auto-grow on input (optional enhancement).
  el.addEventListener('input', () => {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  });
}
