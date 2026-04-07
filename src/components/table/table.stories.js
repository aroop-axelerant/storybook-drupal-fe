import "../../main.scss";
import data from "./table.json";

export default {
  title: "Components/Table",
};

// =============================================================================
// Styles
// =============================================================================

const styles = '';

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
