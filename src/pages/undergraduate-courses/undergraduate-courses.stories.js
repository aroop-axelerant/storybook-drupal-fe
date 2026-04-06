import data from "./undergraduate-courses.json";
import ugMeta from "../../templates/undergraduate-courses/undergraduate-courses.stories.js";

export default {
  title: "Pages/Undergraduate Courses",
  render: ugMeta.render,
  parameters: { layout: "fullscreen" },
};

export const Default = { args: data.default };
