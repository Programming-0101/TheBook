# A Simplified C# Grammar

> A language **grammar** is a set of small rules that can be combined to produce a **syntax**.

The many small rules in the C# programming language is its ***grammar**. These rules specify the accepted way to write C# code. Individually, each rule in itself is not enough to produce complete working code. Instead, the rules are like building blocks, offering various ways to assemble or construct your code.

Take, for example, some of the grammar around **variable declarations** and **program statements**. A simplified grammar for declaring a variable in C# would look like this:
{blockquote}
***dataType variableName***
{/blockquote}
We would have to supply both a data type and a variable name to declare a variable. Thus, if we wanted to store a whole number to represent a count, we could use the `int` keyword and write the following:
{blockquote}
`int count`
{/blockquote}
By itself, this variable declaration is not enough to produce a complete instruction in C#. We have to combine the *variable declaration* grammar with the grammar for a *program statement* in order to make a single instruction telling the computer to create the variable. In general, a program statement must be a statement that ends with a semicolon (`;`). In other words, the *program statement* grammar requires the semicolon as "punctuation", much in the same way that English sentences must end in a period. Thus, our completed syntax for creating a variable would be
{blockquote}
`int count;`
{/blockquote} 

The formal grammar for C# is actually quite large and complex. In fact, the grammars for most programming languages are so complex that they require another "language" to describe the grammar. An early and fairly standard language or means to express grammars is the **Bakus-Naur Form**, or *BNF*.

For our purposes, we will present a much more *simplified* grammar. You can think of it as a modified BNF. The following sections express much of the grammar we will encounter as we begin our Objects-First introduction to C#. Check the appendix for the complete set of simplified C# grammar used in this book.

## Classes and Class Members



## Common Grammar Elements

* Program Statements
* Variable Declarations
* Assignment Statements
* Expressions
* Namespaces

## Flow-Control Statements

* If-Else
* Case
* For and Foreach
* While and Do-While
