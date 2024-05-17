import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
      text: "Мир Кедома",
      icon: "scroll",
      link: "/lore/",
  }, {
    text: "Guide",
    icon: "book",
    prefix: "/guide/",
    children: [
      {
        text: "WWN",
        prefix: "rules/wwn/",
        children: ["tools/game-tables", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Pathfinder 2E",
        prefix: "rules/pathfinder_2e/",
        children: ["creating_foundry", "tools/game-tables"],
      },
    ],
  },
  {
    text: "Foundry",
    icon: "dice-d20",
    link: "https://foundry.owlbeardm.com/",
  },
]);
