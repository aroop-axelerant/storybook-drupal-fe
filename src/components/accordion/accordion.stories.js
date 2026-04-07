import "../../main.scss";

export default {
  title: "Components/Accordion",
};

// =============================================================================
// Helpers
// =============================================================================

function item({ id, question, answer, open = false, disabled = false }) {
  return `
    <div class="accordion__item${disabled ? " accordion__item--disabled" : ""}">
      <button
        class="accordion__trigger"
        id="trigger-${id}"
        aria-expanded="${open}"
        aria-controls="panel-${id}"
        onclick="
          var exp = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', String(!exp));
        "
        ${disabled ? 'disabled aria-disabled="true"' : ""}
      >
        <span class="accordion__question">${question}</span>
        <span class="accordion__icon" aria-hidden="true"></span>
      </button>
      <div
        class="accordion__panel"
        id="panel-${id}"
        role="region"
        aria-labelledby="trigger-${id}"
      >
        <div class="accordion__panel-inner">
          <p class="accordion__answer">${answer}</p>
        </div>
      </div>
    </div>`;
}

function statesTable(rows) {
  return `
    <table class="sb-table-el">
      <thead>
        <tr>
          <th>State</th>
          <th>Token</th>
          <th>Properties</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(([state, colorVar, token, props]) => `
          <tr>
            <td>${state}</td>
            <td>
              <span class="sb-table-el__swatch-cell">
                <span class="sb-table-el__swatch" style="background:${colorVar}"></span>
                <code class="sb-table-el__token">${token}</code>
              </span>
            </td>
            <td>${props}</td>
          </tr>`).join("")}
      </tbody>
    </table>`;
}

function section(title, content) {
  return `
    <div class="sb-section">
      <h3 class="sb-section-title">${title}</h3>
      ${content}
    </div>`;
}

// =============================================================================
// DATA
// =============================================================================

const q1 = { id: "acc-1", question: "How do I apply to Regent's University?", answer: "Applications are submitted through UCAS for undergraduate programmes. Visit our Apply page for step-by-step guidance, including personal statement tips and what to expect at interview." };
const q2 = { id: "acc-2", question: "What scholarships are available?", answer: "We offer a range of merit-based and need-based scholarships for both UK and international students. Visit the Scholarships page to explore eligibility criteria and application deadlines." };
const q3 = { id: "acc-3", question: "Can I visit the campus before applying?", answer: "Yes — we run Open Days throughout the year where you can tour the campus, meet academic staff, and get a feel for life at Regent's. Check our Events page for upcoming dates." };

// =============================================================================
// DEFAULT
// =============================================================================

export const Default = () => `
  <div class="sb-canvas" style="padding:var(--sp-32)">
    <div class="sb-canvas__inner">

      ${section("Live example", `
        <div class="sb-card sb-card--padded">
          <div class="accordion">
            ${item({ ...q1, open: true })}
            ${item(q2)}
            ${item(q3)}
          </div>
        </div>
      `)}

      ${section("States", `
        <div class="sb-card sb-card--padded" style="display:flex;flex-direction:column;gap:var(--sp-32)">

          <div>
            <p class="sb-state-label">Closed (default)</p>
            <div class="accordion">${item({ ...q2, id: "s-closed" })}</div>
          </div>

          <div>
            <p class="sb-state-label">Open / Expanded</p>
            <div class="accordion">${item({ ...q1, id: "s-open", open: true })}</div>
          </div>

          <div>
            <p class="sb-state-label">Hover</p>
            <style>.s-hover-trigger { color: var(--color-charcoal-60) !important; }</style>
            <div class="accordion">
              <div class="accordion__item">
                <button class="accordion__trigger s-hover-trigger" aria-expanded="false" aria-controls="s-hover-panel">
                  <span class="accordion__question">${q3.question}</span>
                  <span class="accordion__icon" aria-hidden="true"></span>
                </button>
                <div class="accordion__panel" id="s-hover-panel" role="region"></div>
              </div>
            </div>
          </div>

          <div>
            <p class="sb-state-label">Focus</p>
            <style>.s-focus-trigger { outline: 2px solid var(--color-powdered-blue) !important; outline-offset: 4px !important; border-radius: 2px; }</style>
            <div class="accordion">
              <div class="accordion__item">
                <button class="accordion__trigger s-focus-trigger" aria-expanded="false" aria-controls="s-focus-panel">
                  <span class="accordion__question">${q2.question}</span>
                  <span class="accordion__icon" aria-hidden="true"></span>
                </button>
                <div class="accordion__panel" id="s-focus-panel" role="region"></div>
              </div>
            </div>
          </div>

          <div>
            <p class="sb-state-label">Disabled</p>
            <div class="accordion">${item({ ...q3, id: "s-disabled", disabled: true })}</div>
          </div>

        </div>
      `)}

      ${section("Colour & property tokens", statesTable([
        ["Closed",        "var(--color-charcoal)",       "--color-charcoal",       "color: charcoal · font-weight: 600 · icon: + (pseudo-element) · divider: 1px solid --color-charcoal-20"],
        ["Open",          "var(--color-charcoal)",       "--color-charcoal",       "color: charcoal · icon morphs to × · panel expands · padding-bottom: var(--sp-24)"],
        ["Hover",         "var(--color-charcoal-60)",    "--color-charcoal-60",    "color: charcoal-60 · transition: var(--duration-fast) var(--ease-out)"],
        ["Focus",         "var(--color-powdered-blue)",  "--color-powdered-blue",  "outline: 2px solid --color-powdered-blue · outline-offset: 4px (focus-visible)"],
        ["Answer text",   "var(--color-charcoal-60)",    "--color-charcoal-60",    "font-weight: 400 · line-height: 1.6 · padding-bottom: var(--sp-24)"],
        ["Disabled",      "var(--color-charcoal-30)",    "--color-charcoal-30",    "color: charcoal-30 · cursor: not-allowed · pointer-events: none"],
        ["Divider",       "var(--color-charcoal-20)",    "--color-charcoal-20",    "border-top + border-bottom: 1px solid charcoal-20"],
      ]))}

    </div>
  </div>
`;
