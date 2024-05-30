import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  title: "Sumboard docs",
  description: "Sumboard is a low-code tool for embedding interactive analytics into B2B SaaS products.",
  base: "/",
  locales: {
    root: {
      label: "English",
      lang: "en",
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Changelog", link: "/*/" },
      { text: "Go to Sumboard ->", link: "https://www.sumboard.io/" },
    ],

    sidebar: [
      {
        text: "Getting started",
        items: [
          { text: "What is Sumboard", link: "/" },
          { text: "Connect your data", link: "/getting-started/connect-your-data/" },
          { text: "Create a dashboard", link: "/getting-started/create-dashboard/" },
          { text: "Query your data", link: "/getting-started/work-with-data/" },
          { text: "Share or embed", link: "/getting-started/share-embed/" },
        ],
      },
      {
        text: "Data Sources",
        items: [
          { text: "Introduction", link: "/data-sources/" },
          { text: "Allow connections from Sumboard IP addresses", link: "*" },
          { text: "Supported data sources", link: "*" },
          { text: "API connection", link: "/data-sources/api-connection/" },
          { text: "SQL", link: "/data-sources/sql/" },
          { text: "MongoDb", link: "/data-sources/mongodb/" },
        ],
      },
      {
        text: "Dashboards",
        items: [
          { text: "Introduction", link: "/dashboards/" },
          { text: "Create a dashboard", link: "*" },
          { text: "Charts", link: "*" },
          { text: "Chart configuration", link: "*" },
          { text: "Query editor", link: "*" },
          { text: "Filters", link: "/dashboards/filters/" },
          { text: "Dashboard localization", link: "*" },
          { text: "Dashboard settings", link: "/dashboards/configuration/" },
          { text: "Sharing", link: "/dashboards/links/" },
        ],
      },
      {
        text: "Layouts",
        items: [
          { text: "Introduction", link: "/dashboards/" },
          { text: "Desktop layout", link: "*" },
          { text: "PDF layout (soon)", link: "*" },
          { text: "Mobile layout (soon)", link: "*" },
        ],
      },
      {
        text: "Customer-facing features",
        items: [
          { text: "Introduction", link: "/dashboards/" },
          { text: "Interactivity", link: "*" },
          { text: "Filtering", link: "*" },
          { text: "Scheduling", link: "*" },
          { text: "Exporting", link: "*" },
        ],
      },
      {
        text: "Filtering",
        items: [
          { text: "Introduction", link: "/dashboards/" },
          { text: "Default filters", link: "*" },
          { text: "Custom filters", link: "*" },
          { text: "External filter", link: "*" },
        ],
      },
      {
        text: "Embedding",
        items: [
          { text: "Installation", link: "*" },
          { text: "Back-end setup", link: "*" },
          { text: "Dashboard embedding types", link: "*" },
          { text: "Dashboard localization", link: "*" },
          { text: "Multi-tenant custom filters", link: "*" },
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
        text: "Versioning (soon)",
        items: [
        ],
      },
      {
        text: "Administration",
        items: [
          { text: "Organization settings", link: "*" },
          { text: "Users", link: "*" },
          { text: "Dashboard themes", link: "*" },
          { text: "Notifications", link: "*" },
          { text: "Export settings", link: "*" },
          { text: "User settings", link: "*" },
        ],
      },
      {
        text: "Trust & Security",
        items: [
          { text: "Data privacy and security FAQ", link: "*" },
          { text: "Privacy Policy", link: "*" },
        ],
      },
      {
        text: "Legal",
        items: [
          { text: "Terms and conditions", link: "*" },
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
  head: [['link', { rel: 'icon', href: '/favicon.png' }]]
});
