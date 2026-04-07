// Load the compiled design system CSS globally
import "../src/main.scss";

export const parameters = {
  options: {
    storySort: {
      order: ["Getting Started", "Foundation", "Components", "Layouts", "Templates", "Pages"],
    },
  },
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "off-white",
    values: [
      { name: "off-white", value: "#f9f2e8" },
      { name: "white",     value: "#ffffff" },
      { name: "charcoal",  value: "#0b191a" },
      { name: "forest-green", value: "#005b4b" },
    ],
  },
  viewport: {
    viewports: {
      mobile:  { name: "Mobile",  styles: { width: "375px",  height: "812px" } },
      tablet:  { name: "Tablet",  styles: { width: "1024px", height: "768px" } },
      desktop: { name: "Desktop", styles: { width: "1440px", height: "900px" } },
      wide:    { name: "Wide",    styles: { width: "1920px", height: "1080px" } },
    },
    defaultViewport: "desktop",
  },
};
