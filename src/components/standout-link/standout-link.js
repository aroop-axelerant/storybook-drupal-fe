export function initStandoutLink(el) {
  const svg = el.querySelector('svg');
  el.addEventListener('mouseenter', () => { if (svg) svg.style.transform = 'translateX(6px)'; });
  el.addEventListener('mouseleave', () => { if (svg) svg.style.transform = ''; el.style.transform = ''; });
  el.addEventListener('mousedown',  () => { el.style.transform = 'scale(0.98)'; });
  el.addEventListener('mouseup',    () => { el.style.transform = ''; });
}
