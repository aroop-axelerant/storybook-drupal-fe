/**
 * Accordion component behaviour.
 * Handles click toggling and keyboard navigation.
 * Multiple items can be open simultaneously by default.
 *
 * @param {HTMLElement} el - The root `.accordion` element.
 */
export function initAccordion(el) {
  const triggers = Array.from(el.querySelectorAll('.accordion__trigger'));

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
    });

    trigger.addEventListener('keydown', (e) => {
      const idx = triggers.indexOf(trigger);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        triggers[(idx + 1) % triggers.length].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        triggers[(idx - 1 + triggers.length) % triggers.length].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        triggers[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        triggers[triggers.length - 1].focus();
      }
    });
  });
}
