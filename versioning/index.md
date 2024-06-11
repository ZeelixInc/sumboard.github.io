# Introduction
The versioning feature empowers product teams to effectively manage multiple environments, like development and production, and maintain control over dashboard updates.

By default, Sumboard creates two environments: staging and production. However, you have the flexibility to add as many additional environments as needed to suit your workflow.

## How versioning works:
1. **Data source setup**: You can add different data sources for each environment.
2. **Draft mode:** Dashboard configurations, such as chart positions, sizes, translations, filters, dashboard settings, and layouts, automatically transition to draft status when changes are made.
3. **Publishing:** Once changes are finalized, you can publish the new version, making it live and accessible to your customers.
3. **Switching environments:** Switch between different environments to update or test your dashboards.

:::info
The initial version features a single publish button for direct deployment to production. While environment tags are prepared in the backend and database, they are not yet implemented.
:::