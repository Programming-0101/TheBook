# OOP As A Foundation #

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


```csharp
namespace Topic.A.Examples
{
    public class Nothingness
    {

    }
}
```

{class:"sample"}
![Nothingness](./code/samples/A.Nothingness.cs)

{class:"sample"}
![Salutation](code\samples\A.Salutation.cs)

![Hello World Driver](code\samples\A.HelloWorld_Driver.cs)

![Comments](https://raw.githubusercontent.com/Programming-0101/TheBook/master/manuscript/code/samples/A.Comments.cs)





