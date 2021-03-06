---
title: Topical Examples
sidebar: false
---
# Topical Examples and Practice Exercises

In order to provide a smooth, gradual appoach to learning how to program in a OOP-First approach, I've laid out a comprehensive set of code sample and practice questions organized in a topical fashion.

For programming tools, I recommend starting with [Visual Studio Code](https://code.visualstudio.com). It's a simple-to-use (yet sophisticated and powerful) text editor. Read my [quick overview](VSCode.md) for more information on your options for programming tools.

## OOP Essentials

I've long asserted that **classes and objects are *fundamental* to programming** in C#. In fact, if you treat objects as the *most* fundamental part (right up there with the notion of [variables, values and data types](/Teach/chapter1.md), all the remaining fundamentals fall into their natural usage.

These first topics get the user into writing classes with fields, properties, constructors, and methods. After starting with `static` members in [**Topic A**](A/), we move quickly to instance members in topics [**B**](B/) and [**C**](C/) and what it means to "new up" an object based on a class.

- [A](A/) - Starting Classes ()
- [B](B/) - Starting Classes ()
- [C](C/) - Starting Classes ()

## Testing Your Code

[**Topic D**](D/) introduces an approach to testing that doesn't rely on constantly creating drivers to perform manual testing. It's not that manual testing is "bad", but too much focus on these drivers often takes away from the *real* interesting parts of programming. In place of manual testing, I'll present to you *automated unit tests* as a better way to see if our code is working the way it's supposed to.

- [D](D/) - Testing and Debugging

## C# - In Context

The remaining fundamentals are covered in topics E through M. The focus here is mostly about "doing math" and **flow-control** statements, but additional concepts such as enumerations, composition, and arrays are also introduced. These examples present all the fundamentals within the context of working with objects, rather than being isolated and shown in a purely "procedural" fashion.

- [E](E/) - Expressions and Math
- [F](F/) - If/Else Structures
- [G](G/) - Raising Exceptions
- [H](H/) - Case Structures
- [I](I/) - Enumerations and Composition
- [J](J/) - Looping Structures
- [K](K/) - Looping and Collections
- [L](L/) - Arrays - Not Sorted
- [M](M/) - Sorting and Collections

## Other Fundamental Considerations

Once you have Classes/Objects and Flow-Control under your belt, it's time to take a look at building on those fundamentals. The role of modularization and utility classes, as well as performing file input/ouput and dealing with exceptions is explored with some simple examples.

- [N](N/) - Modularization and Utility Classes
- [O](O/) - File I/O
- [P](P/) - Exception Handling

## Algorithms and Building on OOP

- [Q](Q/) - Simple Algorithms
- [R](R/) - Inheritance
- [S](S/) - Solid Principles
- [T](T/) - Other Types (`struct`, `interface`, `delegate`, Generics, Extension Methods)
- [U](u/) - Operator Overloading

----

## Class\Topic Chart

<topic-types></topic-types>

> In the following table, **E** stands for a code *Example* and **P** stands for a *Practice* problem that you can attempt on your own.

### Class Fundamentals

| Class \ Topic | [A](A/) | [B](B/) | [C](C/) | [D](D/) |
|:--------------|:-------:|:-------:|:-------:|:-------:|
| Account | | [E](B/Examples/Account.md)/[P](B/Practice/Account.md) | [E](C/Examples/Account.md)/[P](C/Practice/Account.md) | [E](D/Examples/Account.md) |
| AnsweringMachine | [P](A/Practice/AnsweringMachine.md) | [P](B/Practice/AnsweringMachine.md) | | |
| CanadianAddress | | [P](B/Practice/CanadianAddress.md) | [P](C/Practice/CanadianAddress.md) | [P](D/Practice/CanadianAddress.md) |
| Comments | [E](A/Examples/Comments.md) | [E](B/Examples/Comments.md) | | |
| Company | | [E](B/Examples/Employee.md) | [E](B/Examples/Company.md) | [E](D/Examples/Company.md) |
| Course | | [P](B/Practice/Course.md) | [P](C/Practice/Course.md) | [P](D/Practice/Course.md) |
| Employee | | [E](B/Examples/Employee.md) | [E](C/Examples/Company.md) | [E](D/Examples/Company.md) |
| ExamResult | | [P](B/Practice/ExamResult.md) | [P](C/Practice/ExamResult.md) | [P](D/Practice/ExamResult.md) |
| HelloWorld | [E](A/Examples/HelloWorld.md) | | | |
| LabResult | | [P](B/Practice/LabResult.md) | [P](C/Practice/LabResult.md) | [P](D/Practice/LabResult.md) |
| Nothingness | [E](A/Examples/Nothingness.md) | | | |
| OuterSpace | [P](A/Practice/OuterSpace.md) | | | |
| Person | | [E](B/Examples/Person.md) | [E](C/Examples/Person.md)/[P](C/Practice/Person.md) | [E](D/Examples/Person.md)/[P](D/Practice/Person.md) |
| Salutation | [P](A/Practice/Salutation.md) | [E](B/Examples/Salutation.md) | | |
| Student | | [E](B/Examples/Student.md) | [E](C/Examples/Student.md) | [E](D/Examples/Student.md) |

### Math and Decision Structures

| Class \ Topic | [E](E/) | [F](F/) | [G](G/) | [H](H/) |
|:--------------|:-------:|:-------:|:-------:|:-------:|
| Account       |  |  |  |  |
| Calculator    |  |  |  |  |
| Person        |  |  |  |  |
| ElapsedTime   |  |  |  |  |
| ResolveExpressions |  |  |  |  |
| Circle        |  |  |  |  |
| Square        |  |  |  |  |
| Fraction      |  |  |  |  |
| Angle         |  |  |  |  |
| StockItem     |  |  |  |  |

### Enums & Looping Structures

| Class \ Topic | [I](I/) | [J](J/) | [K](K/) |
|:--------------|:-------:|:-------:|:-------:|

### Arrays

| Class \ Topic | [L](L/) | [M](M/) |
|:--------------|:-------:|:-------:|

<!--
[E](/Examples/.md "Example")
[P](/Practice/.md "Practice")
-->
