# Custom filters
Custom filters in Sumboard provide you with the flexibility to tailor your customers filtering needs according to specific data. Unlike default filters, which offer predefined options like time ranges or aggregations, custom filters allow you to define your own filtering criteria based on your unique data sets.

A custom filter presents as a dropdown UI with multi-select capabilities, allowing users to choose from a range of options to refine their data visualization. Custom filters are populated with values retrieved directly from your connected data sources.

To create and configure a custom filter you have to navigate to **Filters** section. Click on the **Add a filter** button.

![Custom filter](custom-filter.jpg)

In the modal that opens you have to specify:
* **Filter name**: Enter a descriptive name. It will be the filter label and it can be overriden on the dashboard level.
* **Filter type**: Choose the appropriate filter type.
* **Filter key**: Specify the filter key, which is used in the query to apply the filter to specific charts. This ensures that the aggregation filter is applied correctly to the data.
* **Data source**: Select the relevant data source from which you want to query the values.
* **Filter query**: Write a query to extract the values. Once the query is executed, the retrieved values will be available in a dropdown menu within the custom filter options. 
* **Default value**: Define the default values. These values determine the initial state of the filter when the dashboard is loaded. You can override the default value on the dashboard level if needed.