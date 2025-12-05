import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ng-states-core",
  description:
    "Complete Nigerian states, LGAs, and location data for developers",

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API Reference", link: "/api/overview" },
      { text: "Examples", link: "/examples/basic" },
      {
        text: "v2.1.0",
        items: [
          {
            text: "Changelog",
            link: "https://github.com/eminisolomon/ng-states-core/releases",
          },
          { text: "Contributing", link: "/guide/contributing" },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Quick Start", link: "/guide/quick-start" },
          ],
        },
        {
          text: "Core Concepts",
          items: [
            { text: "States & Capitals", link: "/guide/states-capitals" },
            { text: "Geopolitical Zones", link: "/guide/geopolitical-zones" },
            { text: "LGAs & Towns", link: "/guide/lgas-towns" },
            { text: "Search & Filter", link: "/guide/search-filter" },
          ],
        },
        {
          text: "Advanced",
          items: [
            { text: "TypeScript Support", link: "/guide/typescript" },
            { text: "Data Sources", link: "/guide/data-sources" },
            { text: "Contributing", link: "/guide/contributing" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API Reference",
          items: [
            { text: "Overview", link: "/api/overview" },
            { text: "State Functions", link: "/api/states" },
            { text: "Search Functions", link: "/api/search" },
            { text: "Geopolitical Zones", link: "/api/zones" },
            { text: "Metadata Functions", link: "/api/metadata" },
            { text: "Type Definitions", link: "/api/types" },
          ],
        },
      ],
      "/examples/": [
        {
          text: "Examples",
          items: [
            { text: "Basic Usage", link: "/examples/basic" },
            { text: "React Integration", link: "/examples/react" },
            { text: "Vue Integration", link: "/examples/vue" },
            { text: "Next.js App", link: "/examples/nextjs" },
            { text: "Search & Filter", link: "/examples/search" },
            { text: "Map Integration", link: "/examples/maps" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/eminisolomon/ng-states-core",
      },
      { icon: "npm", link: "https://www.npmjs.com/package/ng-states-core" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 Solomon Olatunji",
    },

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/eminisolomon/ng-states-core/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
  },

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#008751" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: "ng-states-core" }],
  ],
});
