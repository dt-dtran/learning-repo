# Snowflake

Snowflake’s Data Cloud is powered by an advanced data platform provided as a self-managed service. Snowflake enables data storage, processing, and analytic solutions that are faster and easier to use.

<details>
<summary>Snowflake is a true self-managed service, meaning:</summary>
<br>

- There is no hardware (virtual or physical) to select, install, configure, or manage.

- There is virtually no software to install, configure, or manage.

- Ongoing maintenance, management, upgrades, and tuning are handled by Snowflake.

Snowflake runs completely on cloud infrastructure.

</details>

<details>
<summary>Snowflake components:</summary>
<br>

- The INFORMATION_SCHEMA schema holds a collection of views. The INFORMATION_SCHEMA schema cannot be deleted (dropped), renamed, or moved.

- The PUBLIC schema is created empty and you can fill it with tables, views and other things over time. The PUBLIC schema can be dropped, renamed, or moved at any time.

- Processing queries using “virtual warehouses”: Each virtual warehouse is an independent compute cluster that does not share compute resources with other virtual warehouses. As a result, each virtual warehouse has no impact on the performance of other virtual warehouses.

</details>
