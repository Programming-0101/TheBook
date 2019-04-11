---
title: Learn the ABCs
---
::: warning NOTE
This is an ALPHA Early Release of this book.
:::

# The ABCs of Programming with Objects

> An "Objects-First" Introduction to Programming

Learning how to program is a journey into thinking about *things* and how to *manipulate* them. This book aims at offering a way to teach programming ***starting with* OOP**, rather than tacking it on at the end. Through numerous simple examples, and a focus on the *things* first, this book will guide the student (and the teacher) through all the concepts needed to get started in programming with Objects.

The essence of this OOP-First approach are seen in what I call the "ABCs of Classes and Objects". From these first three topics I move to the "traditional" concerns of programming, all the while placing them within their most natural context: ***Objects***.

::: tip Code-Focused
What follows is a set of articles describing the foundations of OOP programming. But all of this is just "theory" without [good samples](../Topic/ReadMe.md). Keep reading to get the fundamentals, and feel free to jump right into [**The Code**](../Topic/ReadMe.md) for some hands-on samples.
:::

## Topic A

This topic is the first of a three-part introduction to object-oriented programming. The focus of this first part is to introduce classes and methods. This topic does not go beyond the use of static methods in a class.

### Introduction

The purpose of this topic is to introduce the class as the central piece of modern computer programs. A computer program is "a set of instructions for manipulating information." Notice the two key elements of a computer program: Instructions and Information. A class is a kind of template that groups together data (information) and instructions for manipulating that data.

Manipulating information is done through something called "methods". A method is basically a set of instructions that has an overall name (method name). Methods cannot exist on their own; methods must exist in a "context", and the context for all methods is the class. Methods are where programmers tell a computer "what to do."

Every computer program has one important method that is the entry point or starting point for running the program: main. The main method must be publicly available in order for the operating system to be able to run the program.

## Topic B

The focus of this second part is to show how classes act as templates for creating objects. This topic limits itself to showing a) how to create (instantiate) objects using classes and b) how classes can be used to describe what an object "looks like".

### Introduction

The purpose of this topic is to show how classes don’t just "contain" methods: Classes act as templates for defining complex types of information (objects). In fact, a class can almost be thought of as a "mini-program", because a class brings together the two key elements of every program: Instructions and Information. With classes, we can create objects that do what we want them to.

The class is the basic building block for creating objects. As a template, a class describes
a) What an object "looks like" (that is, what information is inside the object), and
b) How an object "works" (that is, what instructions an object can perform on data).

This topic focuses on the first part – describing what an object "looks like" – by introducing fields and exploring the idea of object state.

## Topic C

The focus of this third part is to show the concepts of encapsulation and information hiding as well as good object design by creating private fields and introducing public getters/setters and constructors.

### Introduction

The purpose of this topic is to highlight how a major responsibility of every class is to "protect" the data within the class. This is done by designing classes that only use private fields and that "expose" access to the values of those fields through getter and setter methods. Getters and setters provide a way for the programmer to control access to fields in an object and to ensure that the fields are "used correctly".

(Note: Later topics will address how to write code that tests the values coming through the setters’ parameters to ensure that only "acceptable" values are allowed into an object’s fields.)

This topic also covers the important role of constructors in ensuring that objects have a "stable state" at the moment that they are created. In other words, constructors are responsible to ensure that all of the fields in an object are filled with "meaningful" values. A constructor also forces other code to supply required information when creating (instantiating) an object based on that class. Constructors are the "first line of defense" for ensuring that objects are created properly.
