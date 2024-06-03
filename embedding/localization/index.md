# Dashboard localization
To provide your users with different language, timezone, and localization options, you can pass a `config` parameter when generating the token on the server side. 

Here is an example of how to implement this:
```ts
import { FiltersValues } from '@zeelix/types';
import { sign } from 'jsonwebtoken';

interface Config {
  timezone?: string,
  language?: string,
  columns?: {
    currency?: { locale: string },
    number?: { locale: string },
    date?: { locale: string },
  }
}

const st = '<DASHBOARD_SHARED_TOKEN>';

const companySecretKey = '<COMPANY_SECRET_KEY>';

const config: Config = {
  timezone: '+0200',
  language: 'en',
  columns: {
    currency: { locale: 'en' },
    number: { locale: 'en' },
    date: { locale: 'en' },
  }
};

const token = sign({ st, config }, companySecretKey);
```
## `Config` interface
The `Config` interface provides additional configuration options that can be passed during the initialization of the Sumboard token. This interface includes the following properties:
- `timezone` (optional): A string representing the timezone of the data displayed on the dashboard.
- `language` (optional): A string representing the language of the dashboard.
- `columns` (optional): An object containing configuration options for the currency, number, and date columns.

## `Columns` properties
The `columns` property of the `Config` interface includes the following sub-properties: 
- `currency` (optional): An object containing a `locale` string that represents the currency formatting to be used for columns containing currency data.
- `number` (optional): An object containing a `locale` string that represents the number formatting to be used for columns containing numerical data.
- `date` (optional): An object containing a `locale` string that represents the date formatting to be used for columns containing date data.