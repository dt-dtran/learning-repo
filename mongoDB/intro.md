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
