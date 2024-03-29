import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/lore/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "Foundry",
    icon: "dice-d20",
    link: "https://foundry.owlbeardm.com/",
  },
]);
