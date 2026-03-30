import courseData from "./course-details.json";
import courseDetailsMeta from "../../templates/course-details/course-details.stories.js";

export default {
  title: "Pages/Course Details",
  render: courseDetailsMeta.render,
  parameters: { layout: "fullscreen", backgrounds: { default: "off-white" } },
};

export const Default = { args: courseData.default };
