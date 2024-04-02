# Sql

Sql Connection are used to retrieve data from sql databases. You need to specify following options:

* `type` - database engine
* `host` - host of the server or cloud
* `port` - database host
* `user` - user database that will be used to run queries
* `password` - user's password

> Note: passwords will be encrypted

You can specify some additional options for different databases:

* `ssl`
* `trustServerCertificate` (mssql) 
* `connectionTimeout` (mssql)
* `connectTimeoutMS` (postgresql)

