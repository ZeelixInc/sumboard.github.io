import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  title: "Docs",
  description: "Documentation",
  base: "/",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    fr: {
      label: "French",
      lang: "fr", // optional, will be added  as `lang` attribute on `html` tag
      link: "/fr/", // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Charts", link: "/charts/" },
      { text: "Dashboards", link: "/dashboards/" },
    ],

    sidebar: [
      {
        text: "Data Sources",
        items: [
          { text: "Overview", link: "/data-sources/" },
          { text: "SQL", link: "/data-sources/sql/" },
          { text: "Http", link: "/data-sources/http/" },
          { text: "MongoDb", link: "/data-sources/mongodb/" },
        ],
      },
      {
        text: "Dashboards",
        items: [
          { text: "Overview", link: "/dashboards/" },
          { text: "Links", link: "/dashboards/links/" },
          { text: "Configuration", link: "/dashboards/configuration/" },
          { text: "Filters", link: "/dashboards/filters/" },
        ],
      },
      {
        text: "Charts",
        items: [
          { text: "Overview", link: "/charts/" },
          { text: "Bar Chart", link: "/charts/bar/" },
          { text: "Line Chart", link: "/charts/line/" },
          { text: "Pie Chart", link: "/charts/pie/" },
          { text: "Doughnut Chart", link: "/charts/doughnut/" },
          { text: "Text Chart", link: "/charts/text/" },
          { text: "Image Chart", link: "/charts/image/" },
          { text: "Table Chart", link: "/charts/table/" },
          { text: "Transpose Table Chart", link: "/charts/table-transpose/" },
          { text: "Pivot Table Chart", link: "/charts/table-pivot/" },
          { text: "Configuration", link: "/charts/configuration/" },
        ],
      },
      {
        text: "Editor",
        items: [{ text: "Overview", link: "/editor/" }],
      },
      {
        text: "Reports",
        items: [{ text: "Overview", link: "/reports/" }],
      },
      {
        text: "Schedules",
        items: [{ text: "Overview", link: "/schedules/" }],
      },
      {
        text: "Settings",
        items: [
          { text: "Overview", link: "/settings/" },
          { text: "Templates", link: "/settings/templates/" },
          {
            text: "Configure Email Sender Address",
            link: "/settings/email-sender/",
          },
        ],
      },
    ],

    socialLinks: [],
  },
});

export default withMermaid({
  ...config,
  mermaid: {
    startOnLoad: true,
  },
});
