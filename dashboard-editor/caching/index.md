# Caching
Caching in Sumboard enhances performance by temporarily storing frequently accessed data. This reduces the need to fetch the same data repeatedly, resulting in faster load times and a more responsive user experience. **By default caching is disabled**.

## How it works:
* When a dashboard is accessed for the first time, Sumboard fetches the required data from the data source.
* The fetched data is then stored in the cache.
* For subsequent accesses, Sumboard retrieves the data from the cache instead of fetching it again from the data source.
* Cached data has an expiration time, after which it will be considered stale. Once the cache expires, Sumboard will fetch the data again from the data source and update the cache.
* You can configure caching settings to control how long data should be stored in the cache before it expires. Just adjust the cache timeout.