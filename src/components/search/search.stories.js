import "../../main.scss";
import data from "./search.json";

export default {
  title: "Components/Form/Search",
};

// =============================================================================
// Styles
// =============================================================================

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
  <div class="sb-canvas">
    ${buildSearch(d)}
  </div>
  ${script}
`;

export const Filled = () => `
  <div class="sb-canvas">
    ${buildSearch(v.filled)}
  </div>
  ${script}
`;

export const Disabled = () => `
  <div class="sb-canvas">
    ${buildSearch(v.disabled)}
  </div>
`;
