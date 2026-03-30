const path = require("path");

module.exports = {
  stories: [
    "../src/foundation/**/*.stories.@(js|mdx)",
    "../src/components/**/*.stories.@(js|mdx)",
    "../src/layouts/**/*.stories.@(js|mdx)",
    "../src/templates/**/*.stories.@(js|mdx)",
    "../src/pages/**/*.stories.@(js|mdx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
  ],
  framework: "@storybook/html-webpack5",

  webpackFinal: async (config) => {
    // SCSS loader
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    // Twig namespace aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/components"),
      "@layouts":    path.resolve(__dirname, "../src/layouts"),
      "@templates":  path.resolve(__dirname, "../src/templates"),
      "@pages":      path.resolve(__dirname, "../src/pages"),
    };

    return config;
  },

  // Responsive viewport presets matching Regents breakpoints
  parameters: {
    viewport: {
      viewports: {
        mobile:  { name: "Mobile",  styles: { width: "375px",  height: "812px" } },
        tablet:  { name: "Tablet",  styles: { width: "1024px", height: "768px" } },
        desktop: { name: "Desktop", styles: { width: "1440px", height: "900px" } },
        wide:    { name: "Wide",    styles: { width: "1920px", height: "1080px" } },
      },
      defaultViewport: "desktop",
    },
  },
};
