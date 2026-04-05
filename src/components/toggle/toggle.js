export function initToggle(el) {
  el.addEventListener('click', () => {
    const checked = el.getAttribute('aria-checked') === 'true';
    el.setAttribute('aria-checked', String(!checked));
    el.style.background = !checked ? 'var(--color-action-primary)' : 'var(--color-charcoal-20)';
    const thumb = el.querySelector('.toggle__thumb');
    if (thumb) thumb.style.transform = !checked ? 'translateX(20px)' : '';
  });
}
