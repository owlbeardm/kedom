import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Kedôm",
  description: "A description of the fantasy world of Kedom.",


  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
