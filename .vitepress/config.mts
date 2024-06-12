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
      { text: "Go to Sumboard", link: "https://www.sumboard.io/" },
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
        text: "Data connections",
        items: [
          { text: "Introduction", link: "/data-sources/" },
          { text: "Database security", link: "/data-sources/database-security/" },
          { text: "Allow connections from Sumboard IP addresses", link: "/data-sources/allow-sumboard/" },
          { text: "API data source connection", link: "/data-sources/api-connection/" },
        ],
      },
      {
        text: "Dashboard editor",
        items: [
          { text: "Introduction", link: "/dashboard-editor/" },
          { text: "Query editor", link: "/dashboard-editor/query-editor/" },
          { text: "Chart configuration", link: "/dashboard-editor/chart-configs/" },
          { text: "Filters", link: "/dashboard-editor/filters/" },
          { text: "Localization", link: "/dashboard-editor/localization/index.md" },
          { text: "Dashboard settings", link: "/dashboard-editor/configuration/" },
          { text: "Caching", link: "/dashboard-editor/caching/" },
          { text: "Sharing and embedding", link: "/dashboard-editor/sharing/" },
        ],
      },
      {
        text: "Layouts",
        items: [
          { text: "Introduction", link: "/layouts/" },
          { text: "Desktop layout", link: "/layouts/desktop/" },
          { text: "PDF layout", link: "/layouts/pdf/" },
          { text: "Mobile layout", link: "/layouts/mobile/" },
        ],
      },
      {
        text: "Customer-facing features",
        items: [
          { text: "Introduction", link: "/customer-facing/" },
          { text: "Compare feature", link: "/customer-facing/compare/" },
          { text: "Reports", link: "/customer-facing/reports/" },
          { text: "Scheduling", link: "/customer-facing/schedules/" },
        ],
      },
      {
        text: "Filtering",
        items: [
          { text: "Introduction", link: "/filters/" },
          { text: "Default filters", link: "/filters/default/" },
          { text: "Custom filters", link: "/filters/custom/" },
          { text: "External filters", link: "/filters/external/" },
        ],
      },
      {
        text: "Embedding",
        items: [
          { text: "Installation", link: "/embedding/" },
          { text: "Back-end setup", link: "/embedding/backend/" },
          { text: "Simple embed", link: "/embedding/simple/" },
          { text: "Embed with static token parameter", link: "/embedding/static-token/" },
          { text: "Embed with your app filters", link: "/embedding/app-filters/" },
          { text: "Dashboard localization", link: "/embedding/localization/" },
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
        text: "Versioning",
        items: [
          { text: "Introduction", link: "/versioning/" },
        ],
      },
      {
        text: "Administration",
        items: [
          { text: "Workspace settings", link: "/administration/" },
          { text: "Users", link: "/administration/users/" },
          { text: "Dashboard themes", link: "/administration/customization/" },
          { text: "Notifications", link: "/administration/notifications/" },
          { text: "Export settings", link: "/administration/export/" },
          { text: "Profile settings", link: "/administration/profile/" },
        ],
      },
      {
        text: "Trust & Security",
        items: [
          { text: "Data privacy and security FAQ", link: "/trust-security/" },
          { text: "Privacy Policy", link: "https://www.sumboard.io/privacy-policy/" },
        ],
      },
      {
        text: "Legal",
        items: [
          { text: "Terms and conditions", link: "https://www.sumboard.io/terms-of-use/" },
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
