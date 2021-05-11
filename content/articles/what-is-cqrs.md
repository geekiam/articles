---
title: what is cqrs
publishDate: 2021-05-11T07:39:13.641Z
info:
  title: What is CQRS
  feature: post_feature/code-tutorials.svg
  author:
    firstName: Gary
    lastName: Woodfine
    github: garywoodfine
  keywords:
    - what is cqrs
    - command query responsibility segregation
  summary: CQRS (*Command Query Responsibility Segregation*) specifies that
    different data models should be used to for updating the database and read
    from the database. Command and Query are two operations which infer read and
    write respectively
  description: specifies that different data models should be used to for updating
    the database and read from the database
twitter:
  title: What is CQRS
  description: CQRS (*Command Query Responsibility Segregation*) specifies that
    different data models should be used to for updating the database and read
    from the database. Command and Query are two operations which infer read and
    write respectively
  site: geekiam1
  username: gary_woodfine
  cardImage:
    image: code-tutorials.png
    alt: CQRS (*Command Query Responsibility Segregation*) specifies that different
      data models should be used to for updating the database and read from the
      database. Command and Query are two operations which infer read and write
      respectively
tags:
  - design patterns
  - architecture
---
Traditional Software Development data models, which appear to indicate or infer that reads and writes are in synchronization when it comes to interacting with the database, in order to maintain the **ACID**( *Atomicity, Consistency, Isolation, Durability*) properties pertaining to the data. 

ACID is a standard set of properties that guarantee that database transactions are processed reliably and is primarily concerned with how a database recovers from any failure that might occur while processing a transaction. Typically, an ACID-compliant DBMS (*Database Management System*) ensures that the data in the database remains accurate and consistent despite any such failures.

#### Atomicity
Atomicity guarantees that either all of the transaction succeeds or none of it does. You don’t get part of it succeeding and part of it not. If one part of the transaction fails, the whole transaction fails. With atomicity, it’s either *all or nothing*.

#### Consistency
This ensures that you guarantee that all data will be consistent. All data will be valid according to all defined rules, including any constraints, cascades, and triggers that have been applied on the database.

#### Isolation
Guarantees that all transactions will occur in isolation. No transaction will be affected by any other transaction. So a transaction cannot read data from any other transaction that has not yet completed.

#### Durability
Durability means that, once a transaction is committed, it will remain in the system – even if there’s a system crash immediately following the transaction. Any changes from the transaction must be stored permanently. If the system tells the user that the transaction has succeeded, the transaction must have, in fact, succeeded.


The ACID properties are designed as principles of **transaction-oriented database recovery**.

Here comes the role of CQRS which stands for “Command Query Responsibility Segregation” which specifies that different data models should be used to for updating the database and read from the database. Command and Query are two operations that stand for read and writes respectively.

Traditional operations such as CRUD – create, read, update and delete are mainstream operations carried out on databases regularly. But as our needs become more sophisticated, we turn on to new and efficient ways of working with data. By separating the command and query operations means that operations run on separate logical processes, probably on a separate hardware. A change initiated in a database routes to the command model for updating the database and then later the query model for reading from database.

The main use of “CQRS”model being using it in high-performance applications to scale read and write operations. Thus, every method should either be a command or be a query that performs separate actions but not both simultaneously.