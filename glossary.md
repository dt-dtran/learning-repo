# Glossary

## Programming

|  Term  | Definition                                                         |
| :----: | ------------------------------------------------------------------ |
| buffer | small chunck of data that is pass a bit at a time through a stream |
| steam  | start using data, before it has finished loading                   |

## System Architecture

<details>
<summary>Backend</summary>

|  Term  | Definition                                     |
| :----: | ---------------------------------------------- |
| server | simple computer that catches incoming request. |

</details>

<details>
<summary>Best Practices</summary>

|      Term       | Definition                                                                          |
| :-------------: | ----------------------------------------------------------------------------------- |
|   Reliability   | fault-tolerance, availability, and security.                                        |
|   Scalability   | ability to allow for a solution’s easy growth and concurrent development.           |
|   Testability   | clean, readable code that is continuously deployed after passing automated testing. |
| Maintainability | flexibility, enabling updates with minimum effort.                                  |

</details>

## Data Engineering

<details>
<summary>Data Structure and Architecture</summary>
<br>

|      Term      | Definition                                                                                                                         |
| :------------: | :--------------------------------------------------------------------------------------------------------------------------------- |
|  Data Catalog  | organized detailed metadata inventory of all data assets in an organization.                                                       |
|  Data Center   | a large group of networked computer servers and hardware to store application and data                                             |
|   Data Frame   | a data structure that organizes data into a 2-dimensional table of rows and columns                                                |
|   Data Lake    | centralized repository that allows you to store all your structured and unstructured data at any scale                             |
|   Data Mesh    | decentralized data architecture.                                                                                                   |
| Data Warehouse | central repository of information that can be analyzed to make more informed decisions. It contains collection of data structures. |
|    Dataset     | structured collection of individual but related items that can be accessed and processed as individually or as a unit.             |
|   Dummy Data   | mock data that has the same content and layout as real data in a testing environment.                                              |
|     Schema     | database blueprint determines what can be exist in the schema (properties and type).                                               |

</details>

<details>
<summary>Data Principles</summary>
<br>

|       Term        | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ACID transactions | Ensure database transactions are processed reliably. <li> **Atomicity**: commits a finish operation or rolls back to prior state if operation fails. This is important as in the case of an unwanted event (crash, power outage, mid-stream interuption), we can be sure of the state of the database. </li> <li>**Consistency**: changes made within a transaction are consistent with database constraints. This includes all rules, constraints, and triggers. If the data gets into an illegal state, the whole transaction fails. </li> <li>**Isolation**: all transactions run in an isolated environment. That enables running transactions concurrently because transactions don’t interfere with each other. </li> <li>**Durability**: once the transaction completes and changes are written to the database, they are persisted. This ensures that data within the system will persist even in the case of system failures like crashes or power outages.</li> |
| BASE transactions | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|        ELT        | Extract, Load, Transform                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|        ETL        | Extract, Transform, Load                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|    Replication    | process of storing your data in more than one location to improve data availability, reliability, redundancy, and accessibility.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

</details>

<details>
<summary>Data Techniques</summary>
<br>

|      Term      | Definition                                                                                                                                                                                                                                                 |
| :------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   Clustering   | split data into several subsets. Each of these clusters consists of data objects with high inter-similarity and low intra-similarity                                                                                                                       |
|   Extraction   | the process of collecting or retrieving data from a variety of sources for further data processing, storage or analysis elsewhere.                                                                                                                         |
|   Ingestion    | the process of transporting data from multiple sources into a centralized database, usually a data warehouse, where it can then be accessed and analyzed. This can be done in either a real-time stream or in batches.                                     |
|    Modeling    | process of organizing and mapping data using simplified diagrams, symbols, and text to represent data associations and flow                                                                                                                                |
|    Masking     | data security technique in which a dataset is copied but with sensitive data obfuscated.                                                                                                                                                                   |
|   Migration    | process of transferring internal data between different types of file formats, databases, or storage systems.                                                                                                                                              |
| Normalization  | set of formal rules to develop standardized, organized data, and eliminates data anomalies that cause difficulty for analysis. The clean data can then be easily grouped, understood, and interpreted. Without normalization, valuable data will go unused |
| Orchestration  | process of gathering, combining, and organizing data to make it available for data analysis tools.                                                                                                                                                         |
|    Pipeline    | series of steps required to move data from one system (source) to another (destination).                                                                                                                                                                   |
| Transformation | the process of converting the format, structure, or values of data to another, typically from the format of a source system into the required format of a destination system.                                                                              |

</details>

## Cloud

## Security

## Network
