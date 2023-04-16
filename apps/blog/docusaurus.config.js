// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Trong Nghia Blog",
  tagline:
    "Evaluating a developer's ability by lines of code is akin to measuring aircraft building progress solely by weight",
  favicon: "img/favicon.ico",
  url: "https://trongnghia.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Trong Nghia",
        logo: {
          alt: "N flash",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Cheat sheet",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/nghianguyen119/from-gears-to-code",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Cheat sheet",
            items: [
              {
                label: "Language comparison",
                to: "/docs/languages-cheat-sheet",
              },
            ],
          },
          {
            title: "Blog",
            items: [
              {
                label: "Languages",
                to: "https://trongnghia.vercal.app",
              },
              {
                label: "Programming Paradigms",
                to: "https://trongnghia.vercal.app",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Multiple themes web app structure",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/nghianguyen119",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} trongnghia`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
