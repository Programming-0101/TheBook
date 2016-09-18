# Topic A - Starting Classes

## Overview

This topic introduces some of the basic syntax and grammar surrounding Object-Oriented Programming in C#. The following C# keywords are introduced.

* public 
* class 
* static
* string 
* void 
* return 
* namespace

This topic will also introduce the following grammars, syntax and language constructs:

* Simple class declaration syntax (no members) 
* Simple class declaration syntax (with static methods) 
* Method overloading 
* Method declaration syntax (class methods, with the static keyword) 
* Parameter declaration (variable declaration) syntax 
* Class (static) method call syntax (with and without arguments) 
* main function (entry point of program) 
* Console output 
* Simple string concatenation  
* C# as a case-sensitive language 
* Single-line, multi-line and XML comments 

### LOGs

At the end of this topic, you should be able to ...

#### OOP Basics

* Define the term "class" as used in OOP 
* Explain the purpose of classes in computer programs 
* Describe the primary keywords used in declaring a class 
* Define the term "method" and give an example 
* Create simple classes with methods only 
* Explain what is meant by "overloading" 
* Describe the syntax of a method declaration (aka, method implementation)
* Explain how classes with identical names can be distinguished from each other 

#### General Programming Concepts and Terms

* Define the term "keyword" as it applies to programming languages 
* Define the term "identifier" as it applies to programming languages 
* Define the term "program statement" and identify how the computer recognizes a program statement 
* Define the term “syntax” as it applies to programming languages
* Identify the entry point for every computer program 
* Perform simple output to the console using System.Console 
* Identify the basic structure of a simple C# program 
* Explain what is meant by a "driver" 
* Explain what is meant by a “case-sensitive” programming language
* Explain what is meant by a "strongly-typed" programming language 
* Explain what "string concatenation" is and how it works  
* Define and distinguish the terms “argument” and “parameter”
* Use single-line, multi-line and XML comments as a means of documenting code 
* List the four pieces of information to include in comments at the top of every source file 

#### Intro to IDEs

* Define the term "IDE" as it relates to software development tools 
* Define the terms "project" and "solution" 
* Identify the various parts of the IDE (Integrated Development Environment) used in this course 
* Create a new project in the IDE for this course 
* Create new source files in the IDE for this course 
* Add existing files to a project 

## Code Samples

The following examples are used to illustrate this topic.

1. Nothingness - This class represents the absolute minimum code required to code a class. Even though it's not a very "useful" class, it does provide and introduction to the ideas of classes, keywords and identifiers. 
2. HelloWorld - This adaptation of the classic "Hello World" program illustrates static methods. This example includes and introduces the concept of a "driver". 
3. Comments - This class is not really "functional", but is intended to illustrate the basic types of comments allowed in the programming language.

---

### Nothingness

This class represents the absolute minimum code required to code a class. Even though it's not a very "useful" class, it does provide and introduction to the ideas of classes, keywords and identifiers.

```csharp
namespace Topic.A.Examples
{
    public class Nothingness
    {

    }
}
```

---

### HelloWorld

This adaptation of the classic "Hello World" program illustrates static methods. This example includes and introduces the concept of a "driver".

```csharp
namespace Topic.A.Examples
{
    public class Salutation // Define a class called "Salutation"
    {
        public static string Greeting()
        {
            return "Hello World!";
        } // end of Greeting()

        public static string Greeting(string name)
        {
            return "Hello " + name;
        } // end of Greeting(string)

        public static string Farewell()
        {
            return "So long!";
        } // end of Farewell()
    } // end of Salutation class
}
```

```csharp
namespace Topic.A.Examples
{
    public class HelloWorld_Driver
    {
        public static void Main(string[] args)
        {
            System.Console.WriteLine(Salutation.Greeting());
            System.Console.WriteLine(Salutation.Greeting("Bob"));
            System.Console.WriteLine(); // print a blank line
            System.Console.WriteLine(Salutation.Farewell());
        }
    }
}
```

---

### Comments

This class is not really "functional", but is intended to illustrate the basic types of comments allowed in the programming language.

```csharp
/*
 * File:    Comments.cs
 * Author:  Dan Gilleland
 * Date:    2010
 * Purpose: To illustrate multi-line, single-line, and XML comments.
 *          This is a multi-line comment.
 */
namespace Topic.A.Examples
{
    /// <summary>
    /// Comments illustrates multi-line, single-line, and XML comments.
    /// </summary>
    /// <remarks>
    /// This class is a stand-alone class used to illustrate comments.
    /// This particular XML comment is "attached" to the class as
    /// a whole, while other XML comments are for fields or methods
    /// in the class (a few methods and fields have been included for
    /// illustration purposes).
    /// [Author: Dan Gilleland]
    /// </remarks>
    public class Comments
    {
        /// <summary>
        /// This is a method of <see cref="Comments"/>
        /// </summary>
        /// <returns>This method returns a string.</returns>
        public static string SimpleMethod()
        {
            return "Hello World!"; // "Hello World!" is a literal string value
        } // end of SimpleMethod()

        /// <summary>
        /// This is a one-sentence description of the method.
        /// </summary>
        /// <param name="name">This is where I describe the purpose of this parameter</param>
        /// <returns>Here I describe what information is returned from this method.</returns>
        /// <remarks>
        /// This method has a single parameter.
        /// </remarks>
        public static int MethodWithParameter(string name)
        {
            return name.Length; // This is a single-line comment (must be end of physical line)
        } // end of MethodWithParameter(string)
    } // end of Comments class
}
```

## Practice Exercises

* OuterSpace – This class is the simplest possible class (and, coincidentally, one of the most useless).
* AnsweringMachine – The AnsweringMachine class provides a method to give an answer to an incoming phone call.
  Driver – This class is the driver for the AnsweringMachine class.
* Salutation – This is the Salutation class that was previously demonstrated.
  HelloWorld_Driver – This class is the driver for the Salutation class.

### OuterSpace

This class is the simplest possible class (and, coincidentally, one of the most useless). 

**Problem Statement:**

Create a class called OuterSpace. This class has no members at all (it is empty, like outer space). Add a multi-line comment at the beginning that should include your full name as the author of the class. Also make an XML comment for the class as a whole.

### AnsweringMachine

The AnsweringMachine class provides a method to give an answer to an incoming phone call. 

**Problem Statement:**

Create the AnsweringMachine class so that it can provide a default answer for an incoming phone call as well as a customizable answer. The methods should be named answer and they should return a String. There should be two methods in total, and both of them should be declared as static. The actual content of the default message can be whatever you choose, while the customizable method will receive a single String argument that has the name of the person receiving the message. Also create a driver that demonstrates the AnsweringMachine in a Console environment. 

Use the following details to guide your solution. 

*Method Detail*

* `public static string Answer()`
  Provides a standard default message for the answering machine. 

  **Returns:**
  A String that instructs the caller to leave a message.
* `public static string Answer(string name)`
  Provides a customizable message for the answering machine.

  To use this method, supply a person's name, and this name will be incorporated into the message that is returned. For example,
  `System.Console.WriteLine(AnsweringMachine.Answer("Bob");`

  **Parameters:**
  `name` - A String that is the name of the person being called.
  **Returns:**
  A String that instructs the caller to leave a message for the person with the supplied name.

### Salutation and HelloWorld_Driver

In each of the single-line comments above a line of code, enter a phrase or sentence in English that describes what is done in that line of code.

**Salutation**

```csharp
// Instructions: Enter comments in each blank to describe the following code
// _____________________________________________________
namespace Topic.A.Exercises
{

    // _____________________________________________________________________
    public class Salutation
    {
        // _________________________________________________________________
        public static string Greeting()
        {
            // _____________________________________________________________
            return "Hello World!";
        } // end of Greeting()

        // _________________________________________________________________
        public static string Greeting(string name)
        {
            // _____________________________________________________________
            return "Hello " + name;
        } // end of Greeting(string)

        // _________________________________________________________________
        public static string Farewell()
        {
            // _____________________________________________________________
            return "So long!";
        } // end of Farewell()
    } // end of Salutation class
}
```

**HelloWorld_Driver**

```csharp
// Instructions: Enter comments in each blank to describe the following code
// _____________________________________________________
namespace Topic.A.Exercises
{
    // _____________________________________________________
    public class HelloWorld_Driver
    {
        // __________________________________________________________________
        public static void main(string[] args)
        {
            // ______________________________________________________________
            System.Console.WriteLine(Salutation.Greeting());
            // ______________________________________________________________
            System.Console.WriteLine(Salutation.Greeting("Bob"));
            // ______________________________________________________________
            System.Console.WriteLine(); // print a blank line
            // ______________________________________________________________
            System.Console.WriteLine(Salutation.Farewell());
        }
    }
}
```

