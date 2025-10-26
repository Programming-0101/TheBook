---
title: Problem Solving - Primary Concerns
---
# Problem Solving

::: warning First Draft
This write-up is a first-draft. Expect it to be incomplete, riddled with bullet-points and to-do items, vague, and (in small ways) even incorrect. [YMMV](https://dictionary.cambridge.org/dictionary/english/ymmv).
:::

Software development is all about facing problems and coming up with solutions to those problems. Of course, our preferred medium of solutions is to create *computer programs* or *software*. But ***how*** do we create those solutions? How do we solve problems?

## Primary Concerns

Becoming "good" at solving problems is an ongoing exercise of knowing three things.

Know The Problem
: What is it that you are trying to solve? Do you understand the context of the problem? Being able to articulate what you are trying to achieve and the obstacles you are facing is the starting point.

Know The Language
: If you're creating a software solution, you are probably using some kind of programming language. The more articulate you are in that language, the better you will be in expressing your intent and getting the computer to "do what you want."

Know The Tools
: Nobody really uses just a plain text editor like *Notepad* anymore. Typically, developers work with some kind of IDE (*Integrated Development Environment*) - whether it be a full-GUI IDE like *Visual Studio* or a text-centric IDE like *Visual Studio Code*. These tools are typically quite powerful, and the better you understand how they work and what you can do with them, the better off you will be when it comes time to cut some code[^a].

[^a]: "Cutting code" is slang for "writing code".

These three practices are an ongoing area of growth for any and every developer. Get used to revisiting these basics often throughout your studies and your career.

### Understand the Problem

> - Asking Questions
> - Becoming Self-Aware of The Goal
>   - By "self-aware", I mean....
> - Divide and conquer
> - Listing Known Knowns and Known Unknowns

Being able to *articulate* what you are trying to achieve and the obstacles you are facing is the starting point. Why? Because articulating directly affects your ability to ***model*** the problem you are trying to solve. In fact, programming *is* modelling.

### Understand your Programming Language

> - Grammar of the Language
> - Capabilities of the Language
> - "World-view" of the Language (OOP for C#)!!!

### Get Familiar with your Tools

Even if you enjoy writing the code in a "simple" editor like [Visual Studio Code](https://code.visualstudio.com) or [Sublime](https://www.sublimetext.com/) or [Atom](https://github.blog/2022-06-08-sunsetting-atom/), those editors are filled with features that exist to improve your productivity. 

----

```yaml
---
title: Problem Solving - Big Picture
---
```

# A Big Picture of Problem Solving

> - preamble
> - Procedural Thinking - Input-Process-Output - Microscopic view
> - OOP Thinking - Effect on Modularization and Scale (breaking down larger/complex problems)
>   - More variables increases complexity - lots of moving parts
>   - Variable relationships lead to "object-like" associations
>   - Encapsulating complexity (of calculations and behaviours)

## What is an Algorithm?

Merriam-Webster defines an "Algorithm" broadly as "a step-by-step procedure for solving a problem or accomplishing some end." [^1]

[^1]: See [here](https://www.merriam-webster.com/dictionary/algorithm).

Behind every reusable algorithm is a pattern. Logic and Problem solving is, in part, an exercise of recognizing patterns that can contribute to the solution for a problem. Some of those patterns come in the form of formulas while other patterns are a series of steps that achieve a common task.

For example, the **User-Prompt Algorithm** has these general steps:

1. Present a message to the user about what information you are requesting.
1. Capture that information.
1. (Optional) Translate that information into a usable form.


## The Input-Process-Output Approach

A traditional approach to problem solving is what I call the Input-Process-Output approach. In short, this way of solving problems is to start with identifying the data that is being supplied (inputs) and the data that is expected at the end (outputs). Then, you try to figure out what steps (process) you need to do to transform the inputs into the outputs.

This process begins with **discovery**: Make a list of all the inputs and all the outputs, and put these lists in separate columns. You can start with identifying the inputs or identifying the outputs. In practice, it's common to jump between these two lists as you ask more questions and discover more information. The goal of this discovery phase is about gathering as much information as you can.

The next phase is to think about the **steps** you need to take to produce the desired outputs from the given inputs. A "step" can simply be thought of as some kind of manipulation or evaluation of the data. The steps might involve

- **Making calculations** - Are there any formulas you need to use? These can be simple or complex.
  - TODO: Link to detailed section
- **Making decisions** - Are there any mutually exclusive decisions you need to make based on the inputs or the results of calculations? This typically involves comparing your data in some way against other data or some requirement (such as a pre-determined "boundary condition").
  - TODO: Link to detailed section
- **Repetitive tasks** - Do any of the calculations or decisions need to be done repeatedly, as a way of "refining" the data? The interest here is on identifying steps that have to happen over and over again. This is referred to as "looping" over the steps. How will you know when you should stop the repetition? These are the exit conditions for the loop.
  - TODO: Link to detailed section

The input-process-output approach tends towards a procedural way of thinking about what needs to happen. That is, it gets you thinking about the ***steps*** that move you from your inputs to your outputs. You find yourself occupied with the question of ***how*** you make your transformations. Another characteristic of this approach is that it's quite favorable for (though not exclusive to) dealing with primitive information. The focus on *calculations*, *decisions* and *repetitions* is easier to do with simple data.

Overall, this level of problem solving focuses on the **flow-control** of your application. Every programming language needs flow-control at some point (even in Functional programming languages like F#). It's where you think about your:

- **Sequence** of steps - Are you doing them in the right order? When does order matter?
- **Alternative** paths of logic - These are the decisions around taking mutually-exclusive steps. Steps are mutually-exclusive when you find you want to do one *instead of* the other, depending on some condition.
- **Repetition** of steps - Do I need to perform certain steps over and over again? How do I know that I need to continue the repetition, or when will I know that I need to stop the repetition?

As you move through the topical samples in this site, you will encounter these flow-control statements in the form of `if`, `else`, `switch`, `do`, `while`, `for`, and `foreach` keywords in C#. Instead of examining these in isolation, however, I want to put these [in context](../Topic/ReadMe.md#c-in-context). And that leads me to talking about **the importance of *Objects***.

## Thing-King Is Essential[^1]

[^1]: "Thing-King" as a reference to the importance of Objects in understanding modern programming was coined by me, Dan Gilleland, on April 13, 2019. Maybe others also said it, but it came to me on its own and not through what I read. Who knows, maybe it will even catch on!

> Content is King - *(so says Bill Gates and others)*[^2]

[^2]: The WayBack Machine has a copy of the 1996 ["Content is King"](http://web.archive.org/web/20010126005200/http://www.microsoft.com/billgates/columns/1996essay/essay960103.asp) article, and it is also preserved and attributed to Bill Gates in a [blog post](https://www.craigbailey.net/content-is-king-by-bill-gates/) by Craig Baily, although [others](https://cognitiveseo.com/blog/216/the-content-monarchy-who-says-content-is-king-and-why/) [point](https://lgkmarketingcc.com/content-king-said-better/) out the phrase was earlier used by Sumner Redstone:

    > *Content is king. It is the meaning that counts. Form and technical considerations, though important, cannot substitute for content.*

### The Limits of Modularizing Procedures

----


## Advice From a Master

Many people assume that logic and problem solving is all about knowing how to answer questions. But *the real key to getting good at problem solving is knowing how to **ask** questions*.

In his book on mathematics titled [**"How to Solve It"**](https://read.amazon.ca/kp/embed?asin=B0073X0IOA&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_E9C9ECNP9T1J2156N7NV), G. Polya lays out an excellent summary of the kinds of questions to ask when trying to solve a problem. This summary is applicable to more than just math. In fact, the questions he urges his readers to ask themselves apply perfectly to computer programming!

### About the Problem...

Polya begins with the same directive mentioned above: "You have to understand the problem." To this, he suggests a series of questions and tasks that you can ask yourself about the problem.

> What is the unknown? What are the data? What is the condition? Is it possible to satisfy the condition? Is the condition sufficient to determine the unknown? Or is it insufficient? Or redundant? Or contradictory? Draw a figure. Introduce suitable notation. Separate the various parts of the condition. Can you write them down?

### About Your Plan...

Once you sense that you have a good understanding of the problem itself, Polya advises that you devise a plan to solve it.

> Find the connection between the data and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found. You should obtain eventually a plan of the solution.

Again, he lays out an extensive list of questions and advice to help you devise your plan. It's advisable to take time to mull over what he offers.

> Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem? Do you know a theorem that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solved before. Could you use it? Could you use its result? Could you use its method? Should you introduce some auxiliary element in order to make its use possible? Could you restate the problem? Could you restate it still differently? Go back to definitions. If you cannot solve the proposed problem try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the condition, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole condition? Have you taken into account all essential notions involved in the problem?

Here, Polya's advice is not meant to just give you some generic approach. Instead, he's trying to show you how to wrestle with the problem you're trying to solve. Yes, asking all these questions might feel like a real struggle, but you will be stronger in your thinking for having gone through it!

### About Your Implementation...

It's not enough to devise a plan to solve your problem. You have to carry it out! Here Polya states

> Carrying out your plan of the solution, check each step. Can you see clearly that the step is correct? Can you prove that it is correct?

Implementing your plan means trying it out. But that doesn't mean you have to do it all in one big chunk. Breaking your plan down into smaller pieces gives you smaller steps to implement. Coding something small is a lot easier than coding something big. This approach of "**divide and conquer** is the first thing you should try, and it tends to result in a cleaner solution.

Having said that, sometimes all the pieces you are trying to manage are tightly or subtly integrated with each other. In that case, you may have to just take a big chunk of your plan and "brute-force" implement it. That may mean writing some function or method that has dozens or hundreds of lines of code. True, the resulting code will not look pretty. But your goal should be to *just get it working*. Once you've achieved something that works, then you can revisit your code and refactor it into smaller pieces.

### About Your Solution...

Coming up with a working solution isn't the end of your efforts. You need to look back and reflect on the solution you obtained. Here, Polya advises the following.

> Can you check the result [outputs]? Can you check the argument [inputs]? Can you derive the result differently? Can you see it at a glance? Can you use the result, or the method, for some other problem?

Reflecting on your solution may lead you to an alternate way of solving the problem. It may also expose some weakness or insufficiency in your solution when presented with different inputs.

At the very least, you will be able to take forward what you've learned in this process and apply it to future problems you encounter.


