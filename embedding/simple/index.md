# Simple dashboard embedding
Embed a simple dashboard into your application using the Sumboard SDK.

This code snippet initializes the Sumboard SDK and retrieves a token from your back-end server. Subsequently, it initializes the Sumboard dashboard by providing the token and the dashboard ID to the <code>init()</code> method of the SDK.
```js
import { Zeelix } from '@zeelix/sdk';

const sumboard = new Zeelix();

fetch('<https://your-backend.com/api/token>')
  .then<{ token: string }>((response) => response.json())
  .then(({ token }) => sumboard.init({ token, dashboardId: '<DASHBOARD_ID>' }));
```
Replace <code>https://your-backend.com/api/token</code> with the URL of your back-end's API endpoint responsible for token generation, and <code>DASHBOARD_ID</code> with the ID of the dashboard you wish to embed.

To display the dashboard within your application, insert a <code>div</code> element with the specified width and height, and assign the id attribute as <code>zeelix</code>:

```html
<div id="zeelix" style="width: 1000px;height: 500px;"></div>
```
## Demo
You can test this code in this [stackblitz demo](https://stackblitz.com/edit/zeelix-init?file=index.ts).
::: info
The demo uses a mock API to simulate fetching a token, and is for demonstration purposes only.
:::