import data from "./courses.json";
import ugMeta from "../../templates/courses/courses.stories.js";

export default {
  title: "Pages/Undergraduate Courses",
  render: ugMeta.render,
  parameters: { layout: "fullscreen" },
};

export const Default = { args: data.default };
