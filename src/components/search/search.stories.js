import "../../../scss/main.scss";
import data from "./search.json";

export default {
  title: "Components/Form/Search",
};

// =============================================================================
// Styles
// =============================================================================

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── Story canvas ─────────────────────────────────────────────────────── */
  .story-canvas {
    min-height: 100vh;
    background: var(--color-off-white);
    padding: var(--sp-64) var(--sp-32);
    font-family: var(--font-sans);
    display: flex;
    flex-direction: column;
    gap: var(--sp-48);
    align-items: flex-start;
  }

  /* Visually hidden but available to screen readers */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .search {
    width: 100%;
    max-width: 560px;
  }

  /* ── Field wrapper ────────────────────────────────────────────────────── */
  .search__field {
    display: flex;
    align-items: center;
    background: var(--color-white);
    border: 2px solid var(--color-charcoal-20);
    border-radius: var(--radius-l);
    padding: 0 var(--sp-8) 0 var(--sp-16);
    gap: var(--sp-8);
    transition: border-color var(--duration-fast) var(--ease-out),
                box-shadow var(--duration-fast) var(--ease-out);
  }

  .search__field:hover:not(.search__field--disabled) {
    border-color: var(--color-charcoal-40);
  }

  .search__field.is-focused {
    border-color: var(--color-action-primary);
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .search__field--disabled {
    background: var(--color-charcoal-10);
    border-color: var(--color-charcoal-20);
    cursor: not-allowed;
  }

  /* ── Search icon ──────────────────────────────────────────────────────── */
  .search__icon {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: var(--color-charcoal-40);
  }

  .search__field.is-focused .search__icon {
    color: var(--color-action-primary);
  }

  .search__field--disabled .search__icon {
    color: var(--color-charcoal-30);
  }

  /* ── Input ────────────────────────────────────────────────────────────── */
  .search__input {
    flex: 1;
    min-width: 0;
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-regular);
    line-height: var(--lh-body);
    color: var(--color-charcoal);
    background: transparent;
    border: none;
    outline: none;
    padding: var(--sp-12) 0;
    appearance: none;
    -webkit-appearance: none;
  }

  /* Remove native search cancel button */
  .search__input::-webkit-search-cancel-button,
  .search__input::-webkit-search-decoration {
    -webkit-appearance: none;
    display: none;
  }

  .search__input::placeholder {
    color: var(--color-charcoal-40);
  }

  .search__input:disabled {
    color: var(--color-charcoal-40);
    cursor: not-allowed;
  }

  /* ── Submit button ────────────────────────────────────────────────────── */
  .search__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    background: var(--color-zingy-yellow);
    color: var(--color-charcoal);
    border: none;
    border-radius: var(--radius-l);
    cursor: pointer;
    transition: background var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .search__submit:hover:not(:disabled) {
    background: var(--color-zingy-yellow-50);
  }

  .search__submit:active:not(:disabled) {
    transform: scale(0.96);
  }

  .search__submit:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 2px;
  }

  .search__submit:disabled {
    background: var(--color-charcoal-20);
    cursor: not-allowed;
  }
</style>`;

// =============================================================================
// HTML builder
// =============================================================================

function buildSearch({ id, label, placeholder, value = '', disabled = false, button_label }) {
  return `
    <div class="search">
      <label class="search__label sr-only" for="${id}">${label}</label>
      <div class="search__field${disabled ? ' search__field--disabled' : ''}">
        <span class="search__icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </span>
        <input
          class="search__input"
          id="${id}"
          type="search"
          name="search"
          placeholder="${placeholder}"
          ${value ? `value="${value}"` : ''}
          ${disabled ? 'disabled' : ''}
          autocomplete="off"
          spellcheck="false"
        >
        <button class="search__submit" type="submit"
                aria-label="${button_label}"
                ${disabled ? 'disabled' : ''}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>`;
}

// =============================================================================
// Inline script — focus class relay (mirrors search.js)
// =============================================================================

const script = `
<script>
(function () {
  document.querySelectorAll('.search__input').forEach(function (input) {
    var field = input.closest('.search__field');
    if (!field) return;
    input.addEventListener('focus', function () { field.classList.add('is-focused'); });
    input.addEventListener('blur',  function () { field.classList.remove('is-focused'); });
  });
})();
<\/script>`;

// =============================================================================
// Stories
// =============================================================================

const d = data.default;
const v = data.variants;

export const Default = () => `
  ${styles}
  <div class="story-canvas">
    ${buildSearch(d)}
  </div>
  ${script}
`;

export const Filled = () => `
  ${styles}
  <div class="story-canvas">
    ${buildSearch(v.filled)}
  </div>
  ${script}
`;

export const Disabled = () => `
  ${styles}
  <div class="story-canvas">
    ${buildSearch(v.disabled)}
  </div>
`;
