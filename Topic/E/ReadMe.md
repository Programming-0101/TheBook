---
title: (E) Expressions and Math
---
# Topic E – Expressions and Math

::: tip Overview & Logs
If you want a quick bullet-list of the the keywords and topics covered, see the [**Overview**](Overview.md). If you want to check yourself on what you're learning, run through the [**Learning Outcome Guide**](LOGs.md) for this topic. You can also jump to the code in [**Examples**](Examples/ReadMe.md) or [**Practice**](Practice/ReadMe.md).
:::

Doing math and writing code are not the same thing. Sure, there's overlap between math and coding, but there are a lot of significant (if under-recognized) differences.

For example, let's look at the humble equal sign: `=`. In math, the equal sign means "both sides *are* the same". In coding, it *never* means that! In coding, the equal sign is called the **assignment operator** and it's purpose is to *store* information.

That's not the only difference in regards to the equal sign. Note that there is a left-hand side (*lh*) of the equal sign, and a right-hand side (*rh*) of the equal sign. In math, you can have any kind of expression on the left-hand side and the right-hand side. In C#, the item on the left-hand of an equal sign *must* be a variable (because that is the *target* of the *assignment operation*).

![Math != Coding](Math-vs-Coding.png)

Then there's the notion of multiple equations in math. Take the following equations, for example:

```math
a^2 + b^2 = c^2
a = 3
b = 4
```

In regular math, these equations "co-exist". That is, they can be listed in any order and together they provide the basis for calculating the value of `c`.
