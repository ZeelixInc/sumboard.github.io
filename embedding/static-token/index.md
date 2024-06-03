# Embed dashboard with a static token parameter
This method is commonly used when you need to offer the same dashboard to multiple users within your application while ensuring each user accesses only their personalized data.

Token type filters are typically initialized on the backend as parameters and should not be transmitted from the frontend. Below is an example demonstrating how to implement filters during token generation:
```js
const user: FilterUnknown['values'] = [
  {
    value: 'user-uuid',
    label: 'FirstName, LastName',
  }
];

const params: FiltersValues = { user };

const token = sign({ st, params }, companySecretKey);
```
In this example, we define a user filter with a single value of "user-uuid" and a label of "FirstName, LastName". Subsequently, we create a <code>params</code> object containing the user filter and utilize the <code>sign</code> method from the <code>jsonwebtoken</code> package to generate a token incorporating the <code>params</code> object. 

Upon utilizing this token to embed a Sumboard dashboard, the user filter will automatically be applied to the dashboard, ensuring personalized data for each user.

:::warning
Take care to ensure the security of your token, especially when passing sensitive data in the params object.
:::