# Glossary

## Data Engineering

<details>
<summary>Data Structure and Architecture</summary>
<br>

|      Term      | Definition                                                                                                                         |
| :------------: | :--------------------------------------------------------------------------------------------------------------------------------- |
|      Data      | **bold**                                                                                                                           |
|   Data Lake    | centralized repository that allows you to store all your structured and unstructured data at any scale                             |
| Data Warehouse | central repository of information that can be analyzed to make more informed decisions. It contains collection of data structures. |
|     Schema     | database blueprint determines what can be exist in the schema.                                                                     |

</details>

<details>
<summary>Data Principles</summary>
<br>

|       Term        | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|       Data        | **bold**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ACID transactions | Ensure database transactions are processed reliably. <li> **Atomicity**: commits a finish operation or rolls back to prior state if operation fails. This is important as in the case of an unwanted event (crash, power outage, mid-stream interuption), we can be sure of the state of the database. </li> <li>**Consistency**: changes made within a transaction are consistent with database constraints. This includes all rules, constraints, and triggers. If the data gets into an illegal state, the whole transaction fails. </li> <li>**Isolation**: all transactions run in an isolated environment. That enables running transactions concurrently because transactions don’t interfere with each other. </li> <li>**Durability**: once the transaction completes and changes are written to the database, they are persisted. This ensures that data within the system will persist even in the case of system failures like crashes or power outages.</li> |
| BASE transactions | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

</details>

<details>
<summary>Data Techniques</summary>
<br>

|     Term      | Definition                                                                                                                                                                                                                                                 |
| :-----------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  Clustering   | split data into several subsets. Each of these clusters consists of data objects with high inter-similarity and low intra-similarity                                                                                                                       |
|   Modeling    | process of organizing and mapping data using simplified diagrams, symbols, and text to represent data associations and flow                                                                                                                                |
| Normalization | set of formal rules to develop standardized, organized data, and eliminates data anomalies that cause difficulty for analysis. The clean data can then be easily grouped, understood, and interpreted. Without normalization, valuable data will go unused |

</details>
