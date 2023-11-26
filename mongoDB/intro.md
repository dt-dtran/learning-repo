# Intro to MongoDB

## Why MongoDB?

1. Salability
2. Resilience
3. Speed of development
4. Privacy and security

## NoSQL and Document Model

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

An index is a data structure that improves the speed of data retrieval operations on a database table with some write and storage overhead.

- When you create an index on a table, the database creates a separate data structure that holds a subset of the data in the table, organized in a way that allows the database to quickly search and retrieve the data based on the values in one or more columns.

How indexes can improve the performance of your MongoDB application:

- Faster queries: When you perform a query on a collection, MongoDB must scan the entire collection to find the documents that match the query criteria. An index can be used to find the matching documents more quickly.
- Better sorting: When you sort the results of a query, an index can be used to avoid the need for an in-memory sort, which can be slow and resource-intensive.
- Improved write performance: Creating indexes can slow down write operations, properly designed indexes can improve write performance by reducing the amount of time that MongoDB spends updating indexes.
