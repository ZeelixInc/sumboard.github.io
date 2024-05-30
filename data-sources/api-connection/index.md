# API data source connection

Http connections retrieves data from your HTTP API. It will constantly generate a temporary token once the previous one has expired. You need to specify following options:

* `refreshTokenUrl`
* `refreshToken`
* `token`

> Note: refresh token will be encrypted

Url for generating token should be through a POST request with body:
```json
{
    "refreshToken": "string"
}
```

And response body:
```json
{
    "token": "string"
}
```