import "../../main.scss";
import data from "./listing.json";

const render = ({ sidebar_content, main_content }) => `
<div style="background:var(--color-off-white);padding:var(--sp-32) 0;font-family:var(--font-sans)">
  <div class="layout-container">
    <div class="layout-listing">
      <aside class="layout-listing__sidebar">${sidebar_content}</aside>
      <div class="layout-listing__main">${main_content}</div>
    </div>
  </div>
</div>`;

export default {
  title: "Layouts/Listing",
  render,
};

export const Default = { args: data.default };
