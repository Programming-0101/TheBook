---
title: Problem Solving
---
# Problem Solving

::: warning First Draft
This write-up is a first-draft. Expect it to be incomplete, riddled with bullet-points and to-do items, vague, and even incorrect. YMMV.
:::

Software development is all about facing problems and coming up with solutions to those problems. Of course, our preferred medium of solutions is to create *computer programs* or *software*. But ***how*** do we create those solutions? How do we solve problems?

## Primary Concerns

Becoming "good" at solving problems is an ongoing exercise of knowing three things.

Know The Problem
: What is it that you are trying to solve? Do you understand the context of the problem? Being able to articulate what you are trying to achieve and the obstacles you are facing is the starting point.

Know The Language
: If you're creating a software solution, you are probably using some kind of programming language. The more articulate you are in that language, the better you will be in expressing your intent and getting the computer to "do what you want."

Know The Tools
: Nobody really uses just a plain text editor anymore. Typically, developers work with some kind of IDE (*Integrated Development Environment*). These tools are typically quite powerful, and the better you understand how they work and what you can do with them, the better off you will be when it comes time to cut some code[^a].

[^a]: "Cutting code" is slang for "writing code".

### Understand the Problem

> Becoming Self-Aware of The Goal



### Understand your Programming Language

### Get Familiar with your Tools

Even if you enjoy writing the code in a "simple" editor like [Visual Studio Code](https://code.visualstudio.com) or [Atom](https://atom.io/) or [Sublime](https://www.sublimetext.com/), those editors are filled with features that exist to improve your productivity. 

----

## The Input-Process-Output Approach

A traditional approach to problem solving is what I call the Input-Process-Output approach. In short, this way of solving problems is to start with identifing the data that is being supplied (inputs) and the data that is expected at the end (outputs). Then, you try to figure out what steps (process) you need to do to transform the inputs into the outputs.

This process begins with **discovery**: Make a list of all the inputs and all the outputs, and put these lists in separate columns. You can start with identifying the inputs or identifying the outputs. In practice, it's common to jump between these two lists as you ask more questions and discover more information. The goal of this discovery phase is about gathering as much information as you can.

The next phase is to think about the **steps** you need to take to produce the desired outputs from the given inputs. A "step" can simply be thought of as some kind of manipulation or evaluation of the data. The steps might involve

- **Making calculations** - Are there any formulas you need to use? These can be simple or complex.
- **Making decisions** - Are there any mutually exclusive decisions you need to make based on the inputs or the results of calculations? This typically involves comparing your data in some way against other data or some requirement (such as a pre-determined "boundary condition").
- **Repetitive tasks** - Do any of the calculations or decisions need to be done repeatedly, as a way of "refining" the data? The interest here is on identifying steps that have to happen over and over again. This is referred to as "looping" over the steps. How will you know when you should stop the repetition? These are the exit conditions for the loop.

The input-process-output approach tends towards a procedural way of thinking about what needs to happen. That is, it gets you thinking about the ***steps*** that move you from your inputs to your outputs. You find yourself occupied with the question of ***how*** you make your transformations. Another characteristic of this approach is that it's quite favorable for (though not exclusive to) dealing with primitive information. The focus on *calculations*, *decisions* and *repetitions* is easier to do with simple data.

Overall, this level of problem solving focuses on the **flow-control** of your application. Every programming language needs flow-control at some point (even in Functional programming languages like F#). It's where you think about the

- **Sequence** of steps - Are you doing them in the right order? When does order matter?
- **Alternative** paths of logic - These are the decisions around taking mutually-exclusive steps. Steps are mutually-exclusive when you find you want to do one *instead of* the other, depending on some condition.
- **Repetition** of steps - Do I need to perform certain steps over and over again? How do I know that I need to continue the repetition, or when will I know that I need to stop the repetition?

As you move through the topical samples in this site, you will encounter these flow-control statements in the form of `if`, `else`, `switch`, `do`, `while`, `for`, and `foreach` keywords in C#. Instead of examining these in isolation, however, I want to put these [in context](../Topic/ReadMe.md#c-in-context). And that leads me to talking about **the importance of *Objects***.

----

## Thing-King Is Essential[^a]

[^a]: "Thing-King" as a reference to the importance of Objects in understanding modern programming was coined by me, Dan Gilleland, on April 13, 2019. Maybe others also said it, but it came to me on its own and not through what I read. Who knows, maybe it will even catch on!

> Content is King - *(so says Bill Gates and others)*[^b]


[^b]: The WayBack Machine has a copy of the 1996 ["Content is King"](http://web.archive.org/web/20010126005200/http://www.microsoft.com/billgates/columns/1996essay/essay960103.asp) article, and it is also preserved and attributed to Bill Gates in a [blog post](https://www.craigbailey.net/content-is-king-by-bill-gates/) by Craig Baily, although [others](https://cognitiveseo.com/blog/216/the-content-monarchy-who-says-content-is-king-and-why/) [point](https://lgkmarketingcc.com/content-king-said-better/) out the phrase was earlier used by Sumner Redstone.

    > *Content is king. It is the meaning that counts. Form and technical considerations, though important, cannot substitute for content.*


### The Limits of Modularizing Procedures

