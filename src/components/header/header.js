/**
 * Header / Mega-menu component behaviour.
 *
 * @param {HTMLElement} el - The `.site-header` root element.
 *
 * Expects a sibling `#mega-menu` element in the DOM.
 *
 * Desktop (> 768px)
 *   - Primary links activate sub-panels on mouseenter + click
 *   - Sub-links activate detail panels on mouseenter + click
 *
 * Mobile (≤ 768px)
 *   - Primary links expand an inline accordion panel on click (toggle)
 *   - Sub-links switch to a full-screen detail view with a Back button
 */
export function initHeader(el) {
  const menu    = document.getElementById('mega-menu');
  const openBtn = document.getElementById('mega-menu-open');
  const closeBtn = document.getElementById('mega-menu-close');

  if (!menu || !openBtn || !closeBtn) return;

  const panelsContainer = menu.querySelector('.mega-menu__panels');
  const backBtn         = menu.querySelector('.mega-menu__back');
  const primaryLinks    = Array.from(menu.querySelectorAll('.mega-menu__plink'));
  const panels          = Array.from(menu.querySelectorAll('.mega-menu__panel'));
  const subLinks        = Array.from(menu.querySelectorAll('.mega-menu__slink'));
  const details         = Array.from(menu.querySelectorAll('.mega-menu__detail'));

  // ── Focusable elements for focus-trap ──────────────────────────────────────
  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusable() {
    return Array.from(menu.querySelectorAll(FOCUSABLE)).filter(
      el => !el.closest('[aria-hidden="true"]') && el.offsetParent !== null
    );
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // ── Mobile detection ───────────────────────────────────────────────────────
  function isMobile() { return window.innerWidth <= 1279; }

  // ── Inline panel management (mobile accordion) ─────────────────────────────
  function restoreInlinePanel() {
    const ip = menu.querySelector('.mega-menu__inline-panel');
    if (!ip) return;
    ip.classList.add('is-closing');
    ip.addEventListener('animationend', function () {
      const moved = ip.querySelector('.mega-menu__panel');
      if (moved) {
        moved.classList.remove('is-active');
        if (panelsContainer) panelsContainer.appendChild(moved);
      }
      ip.remove();
    }, { once: true });
  }

  // ── Open / close ───────────────────────────────────────────────────────────
  function openMenu() {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeydown);
    closeBtn.focus();
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    menu.classList.remove('mega-menu--detail-view');
    menu.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleKeydown);
    openBtn.focus();
    restoreInlinePanel();
    primaryLinks.forEach(l => l.classList.remove('is-active'));
    panels.forEach(p => p.classList.remove('is-active'));
    subLinks.forEach(l => l.classList.remove('is-active'));
    details.forEach(d => d.classList.remove('is-active'));
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') { closeMenu(); return; }
    trapFocus(e);
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // ── Primary link panel switching ───────────────────────────────────────────
  function switchPanel(link) {
    const targetId = link.getAttribute('data-target');
    primaryLinks.forEach(l => l.classList.remove('is-active'));
    link.classList.add('is-active');
    panels.forEach(p => p.classList.remove('is-active'));
    subLinks.forEach(l => l.classList.remove('is-active'));
    details.forEach(d => d.classList.remove('is-active'));
    const target = document.getElementById(targetId);
    if (target) target.classList.add('is-active');
  }

  function switchPanelMobile(link) {
    const targetId      = link.getAttribute('data-target');
    const alreadyActive = link.classList.contains('is-active');
    restoreInlinePanel();
    primaryLinks.forEach(l => l.classList.remove('is-active'));
    if (alreadyActive) return; // toggle off
    link.classList.add('is-active');
    const target = document.getElementById(targetId);
    if (target && panelsContainer) {
      panels.forEach(p => p.classList.remove('is-active'));
      target.classList.add('is-active');
      const ip = document.createElement('div');
      ip.className = 'mega-menu__inline-panel';
      ip.appendChild(target);
      link.parentNode.insertBefore(ip, link.nextSibling);
    }
  }

  primaryLinks.forEach(link => {
    link.addEventListener('mouseenter', () => { if (!isMobile()) switchPanel(link); });
    link.addEventListener('click', e => {
      e.preventDefault();
      if (isMobile()) switchPanelMobile(link);
      else switchPanel(link);
    });
  });

  // ── Sub-link detail switching ──────────────────────────────────────────────
  function switchDetail(slink) {
    const detailId   = slink.getAttribute('data-detail');
    const parentPanel = slink.closest('.mega-menu__panel');
    if (parentPanel) {
      parentPanel.querySelectorAll('.mega-menu__slink').forEach(l => l.classList.remove('is-active'));
    }
    slink.classList.add('is-active');
    details.forEach(d => d.classList.remove('is-active'));
    const detail = document.getElementById(detailId);
    if (detail) detail.classList.add('is-active');
    if (isMobile()) menu.classList.add('mega-menu--detail-view');
  }

  subLinks.forEach(slink => {
    const hasDetail = slink.hasAttribute('data-detail') && slink.getAttribute('data-detail');
    if (!hasDetail) return;
    slink.addEventListener('mouseenter', () => { if (!isMobile()) switchDetail(slink); });
    slink.addEventListener('click', e => {
      e.preventDefault();
      switchDetail(slink);
    });
  });

  // ── Back button (mobile detail view) ──────────────────────────────────────
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      menu.classList.remove('mega-menu--detail-view');
      subLinks.forEach(l => l.classList.remove('is-active'));
      details.forEach(d => d.classList.remove('is-active'));
    });
  }

  // ── Desktop nav dropdowns ──────────────────────────────────────────────────
  const navItems = Array.from(document.querySelectorAll('.header__nav-item'));

  function closeAllDropdowns() {
    navItems.forEach(item => {
      item.classList.remove('is-open');
      const btn = item.querySelector('.header__nav-link');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  navItems.forEach(item => {
    const btn = item.querySelector('.header__nav-link');
    if (!btn) return;
    const dropdown = item.querySelector('.header__dropdown');

    item.addEventListener('mouseenter', () => {
      if (isMobile()) return;
      closeAllDropdowns();
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    });

    item.addEventListener('mouseleave', () => {
      if (isMobile()) return;
      item.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = item.classList.contains('is-open');
      closeAllDropdowns();
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    if (!dropdown) return;

    btn.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        const first = dropdown.querySelector('.header__dropdown-link');
        if (first) first.focus();
      }
    });

    const dLinks = Array.from(dropdown.querySelectorAll('.header__dropdown-link'));
    dLinks.forEach((dLink, i) => {
      dLink.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (dLinks[i + 1]) dLinks[i + 1].focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (i === 0) btn.focus();
          else if (dLinks[i - 1]) dLinks[i - 1].focus();
        } else if (e.key === 'Escape') {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      });
    });
  });

  document.addEventListener('click', closeAllDropdowns);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllDropdowns();
  });
}
