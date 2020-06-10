---
title: Examples
---
# Code Samples

The following examples are used to illustrate this topic.

1. [Person](Person.md) - This simple class illustrates and introduces the idea of encapsulation (private fields with public properties). This example does not have a constructor. This example includes a driver. The driver is also used to illustrate how, with only fields & getter/setter methods, an object can be in an "unknown" (and invalid) state as soon as it is created; this idea is introduced to show the need for a constructor, and opens the discussion of the idea of a "default constructor".
2. [Account](Account.md) - This simple class also illustrates encapsulation, but with some of the fields being read-only. This necessitates the presence of a constructor. This example includes a driver which shows that a class is in a "known state" as soon as it is created.
3. [Student](Student.md) - This class reinforces the idea of encapsulation and constructors. It also introduces the idea of overloading the default `.ToString()` method that every class inherits from the Object class. This example includes a driver with multiple objects, showing how the use of constructors makes it easier to create many objects in a few lines of code.
4. [Employee + Company](Company.md) - These are other classes similar to the Person and Student classes, but the Employee class uses Auto-Implemented properties (available since C# 3.0). Lastly, these classes "share" a driver, illustrating the fact that any given "program" typically uses more than one class.
