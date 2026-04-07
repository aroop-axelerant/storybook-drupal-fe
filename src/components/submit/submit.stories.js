// Submit component documentation
import "../../main.scss";

export default {
  title: "Components/Form/Submit",
};

const statesTable = (rows) => `
  <div class="sb-table">
    <div class="sb-table__head sb-table__head--wide">
      <p class="sb-table__head-cell">State</p>
      <p class="sb-table__head-cell">Background</p>
      <p class="sb-table__head-cell">Properties</p>
    </div>
    ${rows.map(([state, swatch, token, props]) => `
      <div class="sb-table__row sb-table__row--wide">
        <p class="sb-table__state">${state}</p>
        <div class="sb-table__swatch-cell">
          <div class="sb-table__swatch sb-table__swatch--pill" style="background:${swatch}"></div>
          <code class="sb-table__token">${token}</code>
        </div>
        <p class="sb-table__props">${props}</p>
      </div>`).join('')}
  </div>`;

const iconCheck = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;

// ── Default Variant ────────────────────────────────────────────────────────────
export const Default = () => `
<div class="sb-canvas">
  <h1 class="sb-canvas__title">Submit</h1>
  <p class="sb-canvas__desc">Form submission button. Uses Primary button styling — <code>--color-action-primary</code> fill. A form should have exactly one submit action. Use a loading state to prevent duplicate submissions. Always use <code>type="submit"</code> inside a <code>&lt;form&gt;</code>.</p>

  <!-- Live components — all interactive states -->
  <div class="sb-card sb-card--padded">
    <p class="sb-label">Interactive states</p>
    <div class="sb-states-row">

      <!-- Default -->
      <div class="sb-state-item">
        <button type="submit" class="submit-btn">Submit Application</button>
        <span class="sb-state-caption">Default</span>
      </div>

      <!-- With icon -->
      <div class="sb-state-item">
        <button type="submit" class="submit-btn">Submit Application ${iconCheck}</button>
        <span class="sb-state-caption">With icon</span>
      </div>

      <!-- Loading -->
      <div class="sb-state-item">
        <button type="submit" class="submit-btn submit-btn--loading" disabled aria-busy="true" aria-label="Submitting application…">
          <span class="spinner"></span>
          Submitting…
        </button>
        <span class="sb-state-caption">Loading</span>
      </div>

      <!-- Disabled -->
      <div class="sb-state-item">
        <button type="submit" class="submit-btn" disabled>Submit Application</button>
        <span class="sb-state-caption">Disabled</span>
      </div>

    </div>
  </div>

  ${statesTable([
    ['Default',        'var(--color-action-primary)',       '--color-action-primary',       'bg: forest-green · color: white · radius: radius-l · padding: var(--sp-12) var(--sp-24)'],
    ['Hover',          'var(--color-action-primary-hover)', '--color-action-primary-hover',  'bg darkens to #004a3c · transition: var(--duration-fast) var(--ease-out)'],
    ['Focus',          'var(--color-action-primary)',       '--color-action-primary',        'outline: 2px solid powdered-blue · outline-offset: 4px (focus-visible)'],
    ['Active/Pressed', 'var(--color-action-primary)',       '--color-action-primary',        'transform: scale(0.98) · var(--duration-fast) var(--ease-out)'],
    ['Loading',        'var(--color-action-primary)',       '--color-action-primary',        'spinner visible · opacity: 0.8 · aria-busy: true · pointer-events: none'],
    ['Disabled',       'var(--color-charcoal-30)',          '--color-charcoal-30',           'bg: charcoal-30 · cursor: not-allowed · pointer-events: none · WCAG AA'],
  ])}
</div>`;
