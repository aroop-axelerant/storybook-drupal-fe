import "../../../scss/main.scss";
import data from "./table.json";

export default {
  title: "Components/Table",
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
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: var(--sp-64) var(--sp-32);
  }

  /* ── Price table wrapper ──────────────────────────────────────────────── */
  .price-table {
    width: 100%;
    max-width: 760px;
    border-radius: var(--radius-m);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    background: var(--color-off-white);
  }

  /* ── Table reset ──────────────────────────────────────────────────────── */
  .price-table__table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  /* ── Header row ───────────────────────────────────────────────────────── */
  .price-table__th {
    background: var(--color-violet);
    color: var(--color-charcoal);
    font-family: var(--font-sans);
    font-size: var(--text-body-lg);
    font-weight: var(--fw-semibold);
    line-height: var(--lh-body-lg);
    text-align: left;
    padding: var(--sp-24) var(--sp-24);
    border-bottom: 1px solid var(--color-border);
  }

  /* Vertical divider between header cells */
  .price-table__th + .price-table__th {
    border-left: 1px solid var(--color-border);
  }

  /* ── Body rows ────────────────────────────────────────────────────────── */
  .price-table__row + .price-table__row .price-table__td {
    border-top: 1px solid var(--color-border);
  }

  .price-table__td {
    background: var(--color-white);
    color: var(--color-charcoal);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    font-weight: var(--fw-regular);
    line-height: var(--lh-body);
    text-align: left;
    padding: var(--sp-12) var(--sp-24);
  }

  /* Vertical divider between body cells */
  .price-table__td + .price-table__td {
    border-left: 1px solid var(--color-border);
  }
</style>`;

// =============================================================================
// HTML builder
// =============================================================================

const d = data.default;

function buildTable(columns, rows) {
  const headerCells = columns
    .map(col => `<th class="price-table__th" scope="col">${col}</th>`)
    .join('');

  const bodyRows = rows
    .map(row => {
      const cells = row.cells
        .map(cell => `<td class="price-table__td">${cell}</td>`)
        .join('');
      return `<tr class="price-table__row">${cells}</tr>`;
    })
    .join('');

  return `
    <div class="price-table">
      <table class="price-table__table">
        <thead class="price-table__head">
          <tr>${headerCells}</tr>
        </thead>
        <tbody class="price-table__body">
          ${bodyRows}
        </tbody>
      </table>
    </div>`;
}

// =============================================================================
// Stories
// =============================================================================

export const Default = () => `
  ${styles}
  <div class="story-canvas">
    ${buildTable(d.columns, d.rows)}
  </div>
`;

export const ThreeColumns = () => `
  ${styles}
  <div class="story-canvas">
    ${buildTable(
      ['Entry requirement', 'Sep 2025 / Jan 2026', 'Sep 2026 / Jan 2027'],
      [
        { cells: ['UK students',     '£1,000', '£1,500'] },
        { cells: ['Non-UK students', '£4,000', '£5,000'] },
        { cells: ['EU students',     '£2,500', '£3,000'] },
      ]
    )}
  </div>
`;

ThreeColumns.storyName = 'Three Columns';
