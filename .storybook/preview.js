// Load the compiled design system CSS globally
import "../scss/main.scss";

export const parameters = {
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
};
