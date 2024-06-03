# Generating a Sumboard token
To generate a Sumboard token, create an endpoint on your backend that uses the company secret key and dashboard shared token to generate and return the token. 

Here's an example of how to generate a Sumboard token in a **Node.js** back-end:
```js
import { FiltersValues } from '@zeelix/types';
import { sign } from 'jsonwebtoken';

const st = '<DASHBOARD_SHARED_TOKEN>';
const companySecretKey = '<COMPANY_SECRET_KEY>';

const token = sign({ st }, companySecretKey);
```
Replace <code>DASHBOARD_SHARED_TOKEN</code> with your dashboard's shared token and <code>COMPANY_SECRET_KEY</code> with your company's secret key. Once you have the token, pass it to the Sumboard SDK's <code>init</code> method to initialize the SDK in your front-end application.