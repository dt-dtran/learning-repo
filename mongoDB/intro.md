# Intro to MongoDB

## Why MongoDB?

1. Salability
2. Resilience
3. Speed of development
4. Privacy and security

## NoSQL and Document Model

The ACID (Atomicity-Consistency-Isolation-Durability) model used in relational databases is too strict for NoSQL databases. The BASE principle offers more flexibility, choosing availability over consistency. It states that the states will eventually be consistent.

- BA = Basically Available
- S = Soft State
- E = Eventual Consistency

Documents have a flexible schema allowing for:

- changes to include new fields.
- support polymorphic documents.
  - documents in a collection are similiar but not identical.

Document objects are good for:

- e-commerce
- content management
- IoT and time-series data
- trading and payments
- gaming
- mobile apps
- real-time analytics
- AI

## Index

An <b>index </b>is a data structure that improves the speed of data retrieval operations on a database table with some write and storage overhead.

- When you create an index on a table, <i>the database creates a separate data structure that holds a subset of the data in the table</i>, organized in a way that allows the database to quickly search and retrieve the data based on the values in one or more columns.

How indexes can improve the performance of your MongoDB application:

- <b>Faster queries</b>: When you perform a query on a collection, MongoDB must scan the entire collection to find the documents that match the query criteria. An index can be used to find the matching documents more quickly.
- <b>Better sorting</b>: When you sort the results of a query, an index can be used to avoid the need for an in-memory sort, which can be slow and resource-intensive.
- <b>Improved write performance</b>: Creating indexes can slow down write operations, properly designed indexes can improve write performance by reducing the amount of time that MongoDB spends updating indexes.

## Connections

### Connection String:

<details>
<summary>Standard format </summary>

- used to connect to standalone clusters, replica sets, or sharded clsuters
  </details>
  <details>
  <summary>DNS seed list format </summary>
  NS server list provides more flexibility of deployment and the ability to change servers in rotation without reconfiguring clients
  </details>
  <details>
  <summary>Connection string parts </summary>

  - mongodb:// = required prefix for standalone connection string `mongodb+srv://`
  - host[:port] = where db instance is running `@specify a host name, IP address, or UNIX domain socket. MongoDB's default port number is 27017`
  - username:password@ = credentials clients attempts to authenticate with
  - ` ?<options>` = specific connection options (read / write)
  </details>

### Connection Type

<details>
<summary>Mongo Shell</summary>

```
MY_ATLAS_CONNECTION_STRING=$(atlas clusters connectionStrings describe myAtlasClusterEDU | sed "1 d")

mongosh -u myAtlasDBUser -p myatlas-001 $MY_ATLAS_CONNECTION_STRING
```

</details>

<details>
<summary>Mongo Compass</summary>
Provides an user interface (GUI) that allows users to query data, compose aggregation pipeline and analyze data.

<br>
Installation:

1. Double-click the .dmg file to open the disk image within the macOS Finder.
2. Drag the MongoDB Compass application to your Applications folder.
3. Eject the disk image.
4. From the Applications folder, double-click the Compass icon to start the application.

Connection:

- Copy connection string and add new connection via Compass.

</details>

<details>
<summary>From an application</summary>

Node:

- [Node Quickstart](https://www.mongodb.com/docs/drivers/node/current/)
- [Node Connection](index.js)

Python:

- PyMongo for synchronous Python applications
  - PyMongoArrow
    , a PyMongo extension for loading MongoDB query result sets as Apache Arrow tables
- Motor for asynchronous Python applications
- [Python QuickStart](https://www.mongodb.com/docs/drivers/python-drivers/)
</details>

### Connection Errors

<details>
<summary>Common Issues</summary>

- IP Address missing in Atlas
  - `MongoServerSelectionError: connection <monitor> to 34.239.188.169:27017 closed`
- Auth failed:
  - Check to confirm connection to the correct DB
  - Check username / pw are correct in connection string
  - Check if user has the right permission
  - `MongoServerSelectionError: connection <monitor> to 34.239.188.169:27017 closed`

</details>

## CRUD

$in operator selects all documents that have a field value equal to any of the values specified
$eq operators to find documents with a field an value
