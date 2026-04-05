/**
 * Tab component behaviour.
 * Handles click selection and keyboard navigation (arrow keys, Home, End).
 *
 * @param {HTMLElement} el - The root `.tab` element (role="tablist").
 */
export function initTab(el) {
  const tabs = Array.from(el.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  function activate(tab) {
    tabs.forEach((t) => {
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    tab.focus();
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activate(tab));

    tab.addEventListener('keydown', (e) => {
      const idx = tabs.indexOf(tab);
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        activate(tabs[(idx + 1) % tabs.length]);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        activate(tabs[(idx - 1 + tabs.length) % tabs.length]);
      } else if (e.key === 'Home') {
        e.preventDefault();
        activate(tabs[0]);
      } else if (e.key === 'End') {
        e.preventDefault();
        activate(tabs[tabs.length - 1]);
      }
    });
  });
}
