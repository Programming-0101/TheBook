---
title: Starting Classes (Part A)
---
# A - Starting With Classes

::: tip Overview & Logs
We are coving a *lot* of material here as we introduce OOP programming. That's because we're assuming you've never written any code before. If you want a quick bullet-list of the the keywords and topics covered, see the [**Overview**](Overview.md). If you want to check yourself on what you're learning, run through the [**Learning Outcome Guide**](LOGs.md) for this topic.
:::

## What is a Class?

"A *computer program* is a **set of instructions** for manipulating **information**." In the world of *Object Oriented Programming* (OOP), the main focus is on the *information* part of this definition.

The first thing we do with information is to *classify* it. And it's from this starting point that we encounter a central keyword in C#.

```csharp
class
```

The code we write *declares* what things are (information) and how things behave (instructions). These are called "statements", and the first statement we'll examine is the **class delcaration statement**. The description of this statement is summarized in the [simplified C# grammar](../../Teach/chapter1-7.md#class-definition), but here we will look at the simplest possible example.

```csharp
public class Nothingness
{

}
```

While this is the simplest possible example, it turns out to also be the most useless (*hint: think of what we called it*). Don't worry, we'll get to better things soon.

I snuck in another C# keyword while you were looking:

```csharp
public
```

The `public` keyword is an "Access Modifier", but for now just think of it as saying that other parts of our code will be able to access it and use it freely.

A class describes something of interest to our program. Describing things of interest to our program is referred to as "Modeling", and is a big part of *Object Oriented Design* (OOD).

Let's take another look at that first class we created.

```csharp
public class Nothingness
{

}
```

The words `public` and `class` are *keywords* - they are built into the C# programming languge. But the *name* of the class - `Nothingness` - something we made up ourselves. When we declare a class, we have to give it a name; we call that a **class name** because it *identifies* the class.

The curly braces `{ }` act to "group" what "belongs to" or is "inside of" the class. It's like the set operators in math - everything inside the curly braces of the class definition are *members* of that class.

Remember how I said that a class is a "blueprint"? The name of the class can be thought of as the name of the blueprint. I also said we were "classifying" information. Our class (blueprint) is a kind (or *type*) of information. When we declare a class, we are **defining a data type** for our program.

The C# programming language comes with a set of built-in data types as well. Two examples are `string` and `int`. The names `string` and `int` are keywords of the language, and as such are already defined for us. The built-in data types are "primitive" in nature - they represent the common and *simple* types of information that programs typically use. The class data types we declare for ourselves, on the other hand, are *complex* in nature.

## Better Than Nothing

Now it's time to see the traditional introductory program **Hello World**.

```csharp{3-6}
public class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
```

Our class name is called `Program`, and it has something inside of it: A **method declaration**. A method is a "*set of instructions*".

----

## TODO Notes

- [ ] Create a program in VS Code
- [ ] Discuss the code (keywords)

```csharp
using System;

namespace StartHere
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

## Let's Start Coding

## Avoiding Collisions

Given the notion that C# lets us define our own data types, imagine what would 
