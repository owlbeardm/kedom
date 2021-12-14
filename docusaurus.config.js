const math = require('remark-math');
const katex = require('rehype-katex');
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Kedôm",
  tagline: "Kedôm setting",
  url: "https://kedom.owlbeardm.com/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "owlbeardm", // Usually your GitHub org/user name.
  projectName: "kedom", // Usually your repo name.
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",
      disableSwitch: false,
    },
    navbar: {
      title: "Kedôm",
      logo: {
        alt: "My Site Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          type: "doc",
          docId: "index",
          position: "left",
          label: "Docs",
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/owlbeardm",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "OwlbearDM",
              href: "https://owlbeardm.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kedôm, OwlbearDM.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    "@docusaurus/plugin-ideal-image",
    require.resolve('docusaurus-lunr-search')
  ],
};
