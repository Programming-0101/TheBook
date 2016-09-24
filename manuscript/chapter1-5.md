# The C# Language

C# (pronounced 'See-sharp') is a programming language developed by Microsoft and rooted in the earlier languages of C and C++. It is an Object-Oriented programming language that has evolved quite a bit over time, with each released version adding new features and capabilities to the language. At present, C# is in version 6.0 and version 7.0 is under development. Like every programming language, however, it must allow us to hold *information* and provide *sets of instructions* to manipulate that information.

***Data*** (information) is held inside of **variables**. The following keywords represent the commonly used built-in data types for the general categories of primitive information.

Category      | C# Data Type
--------------|--------------------------------------
Whole numbers | `int long short byte`{format: csharp}
Real numbers  | `double single float`{format: csharp}
--------------|--------------------------------------
Text          | `char string`{format: csharp}
--------------|--------------------------------------
Conceptual    | `boolean`{format: csharp}

***Instructions*** are always placed inside of **methods**. In fact, a method can be defined as *a named set of instructions*. Methods can never exist all on their own; they have to be placed inside of some kind of context (or **scope**), and they are typically placed inside of **classes**. Classes, themselves, are one of the main means by which we can declare *complex* data types (which, in turn, can be used to declare *objects* designed to hold and process sets of data).

Where are variables placed in our program? Variables can appear inside of **classes** (where they are sometimes called *member variables*) and inside of **methods** (where they are called *local variables*). As we will learn later, the location of the variable defines its *scope*, and that scope will determine when and where the variable can be used.

If you are beginning to imagine a lego-like structure to the C# programming language, then you are on the right track! We can code *classes* that hold *variables* and *methods*. The classes themselves are new *data types* which can be used for for creating *complex variables* (objects). This characteristic of providing keywords for primitive data types along with a means to combine them into more complex data types is called **type extensibility**. You can think of it in this way: primitive data types are like chemical *elements* in the periodic table, while complex data types (which we design ourselves) are like *molecules* made by combining elements. While this analogy has its limits in describing the nature of C#, it does provide a good starting point in understanding how the language is designed.

## The Main Method

Speaking of starting points, it's important to note that every computer program needs a place to *start*. When we run a computer program, we are telling the operating system (OS) to start running the instructions in the program. That's why every program needs a starting place - a place (*method*) where the computer can begin executing the program's *instructions*. For C# (like many other languages), that entry point is traditionally called the `Main()` method.

Let's look at an example. The following code is a complete program that performs a simple task - displaying the text "Hello World" in a console window.

![Hello World in C#](1.HelloWorld.cs)

The name of the class is `MyFirstProgram` and it contains only one method - `Main` - which is the starting point of the program. That method contains a single instruction telling the computer to display the text "Hello World" to the user.

Notice that besides the name of the class and the Main method, there are various keywords (in blue) and punctuation (such as curly braces `{ }`, parentheses `( )`, square brackets `[ ]`, semicolons `;` and "dot operators" `.`). All of these pieces have to be arranged according to the specific rules of the programming language. We call these rules the **grammar** and the arrangement of our code using the rules the **syntax**. You can learn more about some of the subtle distinctions between these two terms by searching online, but for now you can think of these words as being almost the same thing.

{cite: "Googlebot Answer", url: "https://www.google.ca/search?q=grammar+vs+syntax&oq=grammar+vs+syntax&aqs=chrome..69i57j0l5.3591j0j7&sourceid=chrome&ie=UTF-8"}
> **Syntax** is the study of sentences **and** their structure, **and** the constructions within sentences. **Syntax** tells us what goes where in a sentence. **Grammar** is the general term referring to the set of rules in a given language including **syntax** , morphology, while **syntax** studies sentence structures. Apr 3, 2013 - *by Googlebot*

## Order is important

The order in which we place our instructions within a method is important. All of the instructions are processed **sequentially** - one after the other. Look at this simple example:

![Price Calculation](1.PriceCalculation.cs)

In the main method are three lines of code (lines 5-7) which run sequentially. If I change the order of these instructions, then the program won't run correctly. In fact, changing the order might even violate part of the C# grammer, creating what's called a **syntax error**, and the computer won't be able to run the program at all!

Understanding the Grammar of a programming language is fundamental to knowing how that language works. Without that knowledge, our attempts to write code will quickly be filled with frustration. The next chapter examines the grammar of C#.

## Summary

We've covered a lot of ground so far, and all of it is fundamental to writing computer programs in C#. To recap, you should now know that

* Instructions are always placed inside **methods** (in fact, a method can be defined as a "set of instructions").
* Methods always appear inside of **classes** or similar structures.
* C# provides **keywords** for primitive **data types**. We use these keywords to declare **variables** which hold **values**.
* C# is an *extensible* language - allowing one to define new complex data types with their own information (variables) and instructions (methods) for processing that information.
