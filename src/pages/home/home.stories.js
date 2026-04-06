import data from "./home.json";
import homeMeta from "../../templates/home/home.stories.js";

export default {
  title: "Pages/Home",
  render: homeMeta.render,
  parameters: { layout: "fullscreen" },
};

export const Default = { args: data.default };
