export function initInlineLink(el) {
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  el.addEventListener('mousedown',  () => { el.style.transform = 'scale(0.98)'; });
  el.addEventListener('mouseup',    () => { el.style.transform = ''; });
}
