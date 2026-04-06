const path = require("path");

module.exports = {
  stories: [
    "../src/docs/**/*.stories.@(js|mdx)",
    "../src/foundation/**/*.stories.@(js|mdx)",
    "../src/components/**/*.stories.@(js|mdx)",
    "../src/layouts/**/*.stories.@(js|mdx)",
    "../src/templates/**/*.stories.@(js|mdx)",
    "../src/pages/**/*.stories.@(js|mdx)",
  ],
  staticDirs: ["../src/assets"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
  ],
  framework: "@storybook/html-webpack5",

  // Allow YouTube iframes inside the Storybook story iframe
  viteFinal: undefined,
  devServer: {
    headers: {
      "Permissions-Policy": "autoplay=*, fullscreen=*",
      "Content-Security-Policy": "frame-src https://www.youtube-nocookie.com https://www.youtube.com 'self'",
    },
  },

  webpackFinal: async (config) => {
    // Pass autoplay permission to nested iframes via devServer headers
    config.devServer = {
      ...config.devServer,
      headers: {
        ...(config.devServer && config.devServer.headers),
        "Permissions-Policy": "autoplay=*, fullscreen=*",
        "Content-Security-Policy": "frame-src https://www.youtube-nocookie.com https://www.youtube.com 'self'",
      },
    };
    // SCSS loader with font handling
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            url: false, // Disable URL resolving for fonts - serve via staticDirs instead
          },
        },
        "sass-loader",
      ],
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
