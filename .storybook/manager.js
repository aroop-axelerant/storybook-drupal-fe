import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Regent's University London",
    brandImage: "/graphics/brand/logo-full.svg",
    brandUrl:   "/",
    brandTarget: "_self",
  }),
});
