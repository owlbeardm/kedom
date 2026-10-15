import { path } from '@vuepress/utils' 
import { viteBundler } from '@vuepress/bundler-vite'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Kedôm",
  description: "A description of the fantasy world of Kedom.",

  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap",
      },
    ],
  ],

  theme,
  bundler: viteBundler({
      viteOptions: {},
      vuePluginOptions: {},
  }),
  plugins: [
      registerComponentsPlugin({
          componentsDir: path.resolve(__dirname, './components'),
      }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
