import homeData from "./home.json";
import homeMeta from "../../templates/home/home.stories.js";

export default {
  title: "Pages/Home",
  render: homeMeta.render,
  parameters: { layout: "fullscreen", backgrounds: { default: "off-white" } },
};

export const Default = { args: homeData.default };
