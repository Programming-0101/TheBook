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



## Avoiding Collisions

Given the notion that C# lets us define 