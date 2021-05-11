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
In traditional data models, where reads and writes are in synchronization every now and then with databases, it becomes very necessary to maintain the “ACID” properties pertaining to the data. Here comes the role of CQRS which stands for “Command Query Responsibility Segregation” which specifies that different data models should be used to for updating the database and read from the database. Command and Query are two operations that stand for read and writes respectively.

Traditional operations such as CRUD – create, read, update and delete are mainstream operations carried out on databases regularly. But as our needs become more sophisticated, we turn on to new and efficient ways of working with data. By separating the command and query operations means that operations run on separate logical processes, probably on a separate hardware. A change initiated in a database routes to the command model for updating the database and then later the query model for reading from database.

The main use of “CQRS”model being using it in high-performance applications to scale read and write operations. Thus, every method should either be a command or be a query that performs separate actions but not both simultaneously.