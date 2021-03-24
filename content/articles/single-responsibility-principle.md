---
title: Single responsibility principle
publishDate: 2021-03-24T10:09:49.643Z
info:
  title: The Single responsibility principle
  description: The single responsibility principle (SRP) states that a software
    component must have only one responsibility.
  summary: The single responsibility principle (SRP) states that a software
    component (in general, a class) must have only one responsibility. The fact
    that the class has a sole responsibility means that it is in charge of doing
    just one concrete thing, and as a consequence of that, we can conclude that
    it must have only one reason to change.
  feature: post_feature/code-tutorials.svg
  author:
    firstName: Gary
    lastName: Woodfine
    github: garywoodfine
  keywords:
    - "single responsibility principle "
twitter:
  title: The Single responsibility principle
  description: The single responsibility principle (SRP) states that a software
    component must have only one responsibility.
  site: geekiam1
  username: gary_woodfine
  cardImage:
    image: code-tutorials.png
    alt: The Single responsibility principle
tags:
  - patterns
  - practices
  - clean
  - architecture
---
The ***Single Responsibility Principle (SRP)*** states that a software component must have only one responsibility. The fact that the class has a sole responsibility means that it is in charge of doing just one concrete thing, and as a consequence of that, we can conclude that it must have only one reason to change. 

> A class should have only one reason to change.

One way to determine if your class is in breach of the Single Responsibility Principle if you find methods that are mutually exclusive and do not relate to each other, they are the different responsibilities that have to be broken down into smaller classes.

The key point to keep in mind, is that small succinct classes are optimal.

### Problem Domain

The primary objective behind the Single Responsibility Principle is to try to avoid creating objects and classes that have too many responsibilities, grouping different behaviours and unrelated functionality thus making classes harder to maintain and change.


### Benefits
1. **Reduces Code Complexity**
The code in a class is focused satisfying a particular functionality, which reduces the complexity.

2. **Improved readability, maintainability and extensibility**
Each class and method have single functionality and therefore easy to read and understand.

3. **Improved Testability**
Easier and more efficient to write Unit tests

4. **Reusability**
By ensuring classes and methods focus on achieving one thing it is easier to re-use the methods.

5. **Reduced coupling**
classes are less dependent on each other. 





