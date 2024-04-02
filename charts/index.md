# Charts

Chart is an individual unit of data representation in a dashboard that performs a query on configured data source. Chart queries can contain variables that will be replaced by passed filters.

> Example of sql query

```sql
SELECT
    {t.created_at:aggregation} AS period,
    COUNT(*) as nrOrders,
    sum(t.amount) / 100 as totalAmount
FROM
    orders
    INNER JOIN applications a on a.id = orders.application_id
    INNER JOIN transactions t on t.order_id = orders.id
WHERE
    { t.created_at :time_range }
GROUP BY 1 ORDER BY 1 LIMIT 5000;
```

> Example of API query

```url
https://example-api/v1/analytics/{:tokenFilter}/sales?{aggregation:aggregation}&{time_range:time_range}
```

> Example of MongoDb query

```json
{
  "collection": "orders",
  "projection": {
    "id": 1,
    "quantity": 1,
    "product_id": 1,
    "customer_id": 1,
    "created_at": 1
  },
  "filters": [
    {
      "$match": {
        "$and": [
          {
            "created_at": {
              "$gte": "{{time_range_from}}",
              "$lte": "{{time_range_to}}"
            }
          },
          { "product_id": "{{productId}}" }
        ]
      }
    },
    {
      "$lookup": {
        "from": "customers",
        "localField": "customer_id",
        "foreignField": "id",
        "as": "customer"
      }
    },
    {
      "$lookup": {
        "from": "products",
        "localField": "product_id",
        "foreignField": "id",
        "as": "product"
      }
    },
    {
      "$unwind": {
        "path": "$customer"
      }
    },
    {
      "$unwind": {
        "path": "$product"
      }
    }
  ],
  "sort": {
    "created_at": 1
  },
  "extract": {
    "id": ["id"],
    "quantity": ["quantity"],
    "product": ["product", "name"],
    "customer": ["customer", "name"],
    "createdAt": ["created_at"]
  }
}
```

Mongo query is an object with following properties:

- `collection` - collection to query
- `projection` - values to query that will be used in aggregations
- `filters` - mongodb aggregation documents
- `sort` - sorting by columns, it can have 0 values
- `extract` - final fields that will be used in dashboards

> Note that you can't set placeholders for filters that doesn't exists in dashboards

##### API response should have one of the following structure

```json
[
  [
    {
      "field1": "value1",
      "field2": "value2"
    }
  ]
]
```

##### or

```json
{
    "items": [
        [
            {
                "field1": "value1",
                "field2": "value2"
            }
        ]
    ],
    "filters"?: {
        "filter1": "filterLabel1",
        "filter2": "filterLabel2"
    }
}
```

> Chart can be one of the following types:

- [Bar](/charts/bar/)
- [Line](/charts/line/)
- [Pie](/charts/pie/)
- [Doughnut](/charts/doughnut/)
- [Text](/charts/text/)
- [Image](/charts/image/)
- [Table](/charts/table/)
- [Transpose Table](/charts/table-transpose/)
- [Pivot Table](/charts/table-pivot/)
