---
title: What is the Sidecar container pattern
publishDate: 2021-04-07T21:09:26.815Z
info:
  title: What is the Sidecar container pattern
  description: Understanding Sidecar Container Pattern
  summary: Understanding Sidecar Container Pattern
  author:
    firstName: Gary
    lastName: Woodfine
    github: garywoodfine
  keywords:
    - Understanding Sidecar Container Pattern
  feature: post_feature/code-tutorials.svg
twitter:
  title: What is the Sidecar container pattern
  description: Understanding Sidecar Container Pattern
  site: geekiam1
  username: gary_woodfine
  cardImage:
    image: code-tutorials.png
    alt: Understanding Sidecar Container Pattern
tags:
  - linux
---
*Containerization* has become a major trend in software development as an alternative or companion to *virtualization.* It involves encapsulating or packaging up software code and all its dependencies so that it can run uniformly and consistently on any infrastructure. The technology has quickly matured and continues to evolve, resulting in measurable benefits for developers and operations teams as well as overall software infrastructure.

The concept of *containerization* and process isolation is decades old, but the emergence of the open source Docker Engine in 2013, an industry standard for containers with simple developer tools and a universal packaging approach, accelerated the adoption of this technology.

Containers are often referred to as “lightweight,” meaning they share the machine’s operating system kernel and do not require the overhead of associating an operating system within each application. Containers are inherently smaller in capacity than a Virtual Machine and require less start-up time, allowing far more containers to run on the same compute capacity as a single Virtual Machine. This drives higher server efficiencies and, in turn, reduces server and licensing costs.

Containers encapsulate an application as a single executable package of software that bundles application code together with all of the related configuration files, libraries, and dependencies required for it to run. Containerized applications are “isolated” in that they do not bundle in a copy of the operating system. Instead, an open source runtime engine (such as the Docker runtime engine) is installed on the host’s operating system and becomes the conduit for containers to share an operating system with other containers on the same computing system.

### What is Kubernetes

> Kubernetes is a portable, extensible, open-source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. 
>
> [kubernetes](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/ "What is kubernetes")

*Kubernetes* is an open-source container orchestration engine for automating deployment, scaling, and management of containerized applications. A **pod** is the basic building block of kubernetes application.

Kubernetes manages pods instead of containers and pods encapsulate containers. A pod may contain one or more containers, storage, IP addresses, and, options that govern how containers should run inside the pod.

Kubernetes caters for two different types of Pod configuration:

* Single Container pod
* Multi Container pod

### What are Pods
Pods are implemented using Linux isolation tenets such as groups and namespaces and can be generally thought of as a Logical Host Machine. Pods run one of more containers and these containers communicate with each other in the same ways that different processes on a Virtual Machine communicate.

In order for containers within two different Pods to communicate, they need to access the other Pod (and container) via its IP. By default, only containers running on the same Pod can use lower-level methods of communication, though it is possible to configure different Pods with the availability to talk to each other via host IPC.


#### Single Container Pods

A generally considered best practice approach is only to take a single container per pod approach, because this enables the best opportunities to scale different parts of your application separately well at the same time keeping things simple and enabling pods to start/run without issues.

#### Multi Container pods

Multi container pods are more complex but are useful in various scenarios:

* If there are multiple parts of your application that run in separate containers but are tightly coupled, you can run them both inside the same Pod to make communication and filesystem access seamless.

* When implementing the sidecar pattern, where utility containers are injected alongside your main application to handle logging, metrics, networking, or advanced functionality such as a Service Mesh and [Dapr -Distributed Application Runtime](https://garywoodfine.com/getting-started-with-net-core-microservices-with-dapr/ "Getting started with .net core microservices with dapr | Gary  Woodfine") 

### What are Side Car Containers

Side car container is a popular Multi Container pod pattern. They are typically containers that run along with the main container in a pod, extending and enhancing the functionality of the main container without changing it.

A sidecar is a pattern where a Pod contains another container in addition to the actual application container to be run. This additional container is the sidecar. Sidecars can be used for a number of different reasons. Some of the most popular uses for sidecars are monitoring, logging, and proxying.


