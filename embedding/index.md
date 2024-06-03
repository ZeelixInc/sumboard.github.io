# Installation
To embed Sumboard you you first need to install the Sumboard SDK. It's a powerful tool for creating and embedding interactive dashboards in your web applications. This documentation will guide you through the following processes: installation, front-end integration, back-end integration, and filter usage.

## Select your Sumboard embedding method
**Sumboard dashboards can be embedded in three ways**
- **Simple embed:** This method involves displaying a dashboard in your application exactly as it appears in the Sumboard Editor, without any predefined filters.
- **Embed dashboard with static token parameter:** This approach involves embedding a dashboard and filtering it using a parameter from your application. It's commonly used when you want to provide the same dashboard to multiple users, allowing each user to see their own data. This is typically achieved by sending a parameter such as <code>user_id</code> in the token.
- **Embed dashboard with your application filters:** This method gives you full control over the interactive filters for the dashboard. You can combine it with token parameters to offer users a personalized dashboard with their own data, along with full control over the filters they can apply.

## Installation
To install the Sumboard SDK, run the following command:
```sh
npm install @zeelix/sdk
```