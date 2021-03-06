# A Simplified C# Grammar

> A language **grammar** is a set of small rules that can be combined to produce a **syntax**.

The many small rules in the C# programming language is its ***grammar***. These rules specify the accepted way to write C# code. Individually, each rule in itself is not enough to produce complete working code. Instead, the rules are like building blocks, offering various ways to assemble or construct your code.

Take, for example, some of the grammar around **variable declarations** and **program statements**. A simplified grammar for declaring a variable in C# would look like this:

```csharp
  dataType variableName
```

We would have to supply both a data type and a variable name to declare a variable. Thus, if we wanted to store a whole number to represent a count, we could use the `int` keyword and write the following:

`int count`

By itself, this variable declaration is not enough to produce a complete instruction in C#. We have to combine the *variable declaration* grammar with the grammar for a *program statement* in order to make a single instruction telling the computer to create the variable. In general, a program statement must be a statement that ends with a semicolon (`;`). In other words, the *program statement* grammar requires the semicolon as "punctuation", much in the same way that English sentences must end in a period. Thus, our completed syntax for creating a variable would be

`int count;`

The formal grammar for C# is actually quite large and complex. In fact, the grammars for most programming languages are so complex that they require another "language" to describe the grammar. An early and fairly standard language or means to express grammars is the **Bakus-Naur Form**, or *BNF*.

For our purposes, we will present a much more *simplified* grammar. The following sections express the bulk of the C# grammar used in this introduction to programming fundamentals in C#.

## Table of Contents

[[toc]]

## Common Grammar Elements

Most of the grammar rules in C# are quite short, defining the order of **keywords**, **identifiers** and **symbols**. In the following grammars, the use of square brackets (**`[]`**) indicate an optional part of the syntax for the grammar rule; those square brackets are *not* actual symbols in the final syntax of the grammar. With each of the rules is a very brief explanation. Later chapters will go into more depth and provide examples of how to use these grammars.

---

### Program Statements and Statement blocks

Individual instructions are known as **Program Statements**. The instructions can be short and simple, or they can be long an complex. In either case, the program statement must end in a semicolon (`;`). These individual instructions run sequentially, one after the other, so the order of individual instructions is important.

Besides individual instructions, we can group individual statements into **Statement Blocks**. A statement block is a set of zero or more program statements that are enclosed in a set of curly braces (`{ }`). Statement blocks are frequently used with **Flow Control Statements** (such as the `if` and `for` statements).

---

### Variable Declarations

Before a variable can be used, it must be *declared*. Declaring a variable tells the compiler to

* set aside room in memory to store information,
* treat that data as a specific data type, and
* refer to that information by the variable name

The grammar for declaring variables is as follows.

```csharp
dataType variableName [= expression] [, ...]
```

A **Variable Declaration** defines a new variable where
: `dataType` is any built-in or programmer-defined data type.
: `variableName` is an **identifier** (name) to represent a value
: an optional initial value may be assigned, as denoted by `[= expression]`, where `expression` is any valid C# expression whose final data type matches the variable's data type. When a variable is declared and initialized at the same time, it is called a **Variable Initialization**.
: additional variable names (with or without initial values) can be declared using a comma-separated list. All variables are of the same data type as the first variable in the list.

---

### Assignment Operation

```csharp
variableName assignmentOperator expression
```

**Assignment Operations** are operations where a value is assigned or stored in a variable.
: `variableName` is the name of the variable that will receive/store the value.
: `assignmentOperator` is one of the following:
  **`=`** Equals
  **`+=`** Plus-Equals
  **`-=`** Minus-Equals
  **`*=`** Multiply-Equals
  **`/=`** Divide-Equals
  **`%=`** Modulus-Equals
: `expression` is any valid C# expression whose final data type matches the variable's data type.
: An assignment operation is made into an **assignment statement** by adding a semicolon to the end of the operation. For example,
  `total = price * quantity;`

---

### Expressions

An **Expression** is any combination of *literal values*, *variable names*, *operators* (such as the arithmetic operators), and/or *method calls* (where the method returns a value). When an expression is processed by the computer, a single value is produced. This value can then be used in whatever operation the expressions occurs. For example, the value might be passed into a method as part of a method call, or it might be placed in a variable as part of an assignment statement.

---

### Namespace Declaration and Using Statements

```csharp
namespace Name
{
    // Classes, enumerations, or other programmer-defined data types
}
```

A **Namespace Declaration** groups ***programmer-defined*** data types where
: The `Name` of the namespace can be one or more dot-separated names. For example, the following are all valid names for namespaces.
  `System`
  `System.Collections`
  `MyGame`
  `MyGame.GameRules`

**Namespaces** are used to group classes and other programmer-defined data types into a single named group. The reason for grouping programmer-defined data types into namespaces is to prevent what are called "naming collisions". A naming collision is where two or more classes or other programmer-defined data types are given the same name. In other words, you cannot have two classes named `Circle` in the same namespace. However, if you place those two classes in different namespaces, then that is acceptable because the compiler will then be able to distinguish between the two classes based on the namespace they belong to.

Whenever a class or other data type is placed in a namespace, that namespace becomes part of the ***fully-qualified*** name of the data type. For example, if a class named `Circle` is placed in a namespace called `Geometry.Shapes`, then the fully qualified name of the class is `Geometry.Shapes.Circle`.

Namespaces allow us to isolate our classes and other data types into groups. All of the classes/data types in a given namespace can automatically reference each other. To reference or use data types in other namespaces, we must either use their fully-qualified names or *include* them through the **Using Statement**.

```csharp
using NamespaceName;
```

The using statement allows access to all the data types in referenced namespace. Using statements are typically placed at the beginning of a file. The `NamespaceName` is simply the complete name of the namespace that contains the classes or data types that we want to access.

There are additional forms of the using statement, giving us different means of including/using the members of a namespace.

```csharp
using Alias = NamespaceName.DataTypeName;
```

- Create an alternate name for a data type (A class name, enumeration, interface, etc.)

```csharp
using static NamespaceName.ClassName;
```

- Allows us to use the name of static members without the class name, as in

```csharp
using static System.Console;

   // Inside a method...
   WriteLine("Hello World");
```

---

## Classes and Class Members

As an object-oriented language, classes play a very prominent part of the code we write in C#. It is within classes, for example, that we place variables (also called *fields*) and methods (which are "*named* sets of instructions"). One of the first things that classes give us developers is a *context* or ***scope*** for the code that we write. Classes are also building blocks, acting as blueprints for new and complex data types that we as programmers can create as we develop richer and more complex computer programs. Classes permeate all the code that we write in C# and are so fundamental that you can't even write a "Hello World" program without them.

---

### Class Definition

```csharp
[accessModifier] class ClassName
{
  // FieldDeclarations
  // PropertyDeclarations
  // Constructors
  // MethodDeclarations
}
```

A **Class Definition** describes a new data type where
: `[accessModifier]` is either `public` or `internal`. If no access modifier is provided, then the default modifier is `internal`.
: `ClassName` is the programmer-supplied name for the class (in TitleCase format)
: `FieldDeclarations`, `PropertyDeclarations`, `Constructors` and `MethodDeclarations` are all optional and can appear in any order.
  See the related grammars below to see how they are defined.

---

### Field Declarations

```csharp
[accessModifier] [static] dataType _FieldName [= constantExpression];
```

A **Field Declaration** identifies a *static* or *instance* member variable of the class where
: `[accessModifier]` is either `public`, `private`, `protected`, or `internal`. If no access modifier is provided, then the default modifier is `private`.
: `[static]` is an optional keyword. If present, the field is *shared* among all instances of the class. If absent (which is the common case) then the field is an *instance* member and one is created every time an object based on the class is created.
: `dataType` is any built-in data type or the name of a programmer-defined data type.
: `_FieldName` is a the name you give to the member variable. By convention, private fields are given an underscore as a prefix to the name.
: `constantExpression` is an optional expression that generates data whose value can be determined at compile time. Being a constant expression does *not* mean that the field is a constant, only that the initial value stored in the field is a constant and can be known at compile time *before* the program runs.

---

### Property Declarations

Properties are a kind of cross between methods and fields. On one hand, they are used in the same way that fields are. When you want to assign (or **set**) a value to a property, you place the property on the left side of the assignment operator. When you want to use (or **get**) the properties value, you simply reference the property name just as you would a field name.

Internally, however, the **get** and **set** operations are like the bodies of a method, where you can place instructions to retrieve or change the data in the class or object. The technical term for the get and set portions of a property is *accessor*.[^1]

[^1]: See the Microsoft docs for [Restricting Accessor Accessibility](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/restricting-accessor-accessibility)

#### Explicitly Implemented Property

Explicitly implemented properties are properties where the programmer supplies the getter and setter implementations. The bodies of the getter and setter may reference a field (known as a **backing store**) that holds the actual information. In these cases, the property is working to provide a **controlled access** to the underlying field's data.

In other situations, a property may merely have a getter where the body of the getter *derives* or *calculates* a value to return from some other source, such as a calculation.

```csharp
[accessModifier] [static] dataType PropertyName
{
    get
    {
        // Body of getter
    }
    set
    {
        // Body of setter
    }
}
```

A **Property Declaration** identifies a *static* or *instance* member of the class where
: `[accessModifier]` is either `public`, `private`, `protected`, or `internal`. If no access modifier is provided, then the default modifier is `private`.
: `[static]` is an optional keyword. If present, the Property is *shared* among all instances of the class. If absent (which is the common case) then the Property is an *instance* member.
: `dataType` is any built-in data type or the name of a programmer-defined data type.
: `PropertyName` is a the name you give to the member property.
: `Body of getter` is a set of instructions that must ultimately return a value of the same data type as the property.
: `Body of the setter` is a set of instructions that can process incoming data that is in the `value` keyword. A typical implementation will store that data into the property's backing store.

### Auto-Implemented Property

Auto-Implemented properties are properties where the compiler takes care of the getter and setter implementations and also supplies a hidden field as the **backing store** for the property. The default get implementation is to retrieve the value from the backing store while the default set implementation is to place a value into the backing store.

```csharp
[accessModifier] [static] dataType PropertyName { get; set; }
```

A **Property Declaration** identifies a *static* or *instance* member of the class where
: `[accessModifier]` is either `public`, `private`, `protected`, or `internal`. If no access modifier is provided, then the default modifier is `private`.
: `[static]` is an optional keyword. If present, the Property is *shared* among all instances of the class. If absent (which is the common case) then the Property is an *instance* member.
: `dataType` is any built-in data type or the name of a programmer-defined data type.
: `PropertyName` is a the name you give to the member property.

---

### Method Declarations

```csharp
[accessModifier] [static] returnType MethodName(ParameterList)
{
    // body of method
}
```

A **Method Declaration** defines a *named* set of instructions.
: `[accessModifier]` is either `public`, `private`, `protected`, or `internal`. If no access modifier is provided, then the default modifier is `private`.
: `[static]` is an optional keyword. If present, the method is *shared* among all instances of the class. If absent (which is the common case) then the method is an *instance* member.
: `returnType` is any built-in data type or the name of a programmer-defined data type. The return type signifies the kind of information that the method will return. If the method does not return any information, then the keyword `void` is used as the return type.
: `MethodName` is a the name you give to the method.
: `ParameterList` is a comma-separated list of individual variable declarations.

---

### Constructors

```csharp
[accessModifier] ClassName(ParameterList)
{
    // body of constructor
}
```

A **Constructor** is a set of instructions used when **instantiating** (creating) an object.
: `[accessModifier]` is either `public`, `private`, `protected`, or `internal`. If no access modifier is provided, then the default modifier is `private`.
: `ClassName` - All constructors use the name of the class to which they belong as the name of the constructor.
: `ParameterList` is a comma-separated list of individual variable declarations.
: Classes never return any information - they are simply blocks of instructions used to set up the **initial state** of the object.

## Flow-Control Statements

Flow-Control Statements provide the procedural characteristics of the C# language. They are what provide the capabilities of ***alternative paths of logic*** (*If-Else* and *Case*) and ***repetition*** (*For*, *While* and their variants). They also provide the ability to "jump into" methods through *method calls*.

### Method Calls

While the [Method Declaration](#method-declarations) *defines a set of instructions*, those instructions only run when the method is *called* from somewhere. The operating system is responsible to call the `Main()` method, but after that, all method calls are the responsibility of our program. The grammar of a method call is as follows.

```csharp
[[ClassName | ObjectName].]MethodName(argumentList)
```

A **Method Call** is an [expression](#expressions) where
: `MethodName` is the programmer-defined name of the method,
: `argumentList` is a comma-separated list of values that correspond to the parameters of the [method declaration](#method-declarations),
: The method is preceded by either a `ClassName` (for `static` methods) or an `ObjectName` (aka: a *variable name*) that identifies *where* the method can be "found"; the **Member Access Operator** (aka: "dot" operator `.`) comes right after the `ClassName` or `ObjectName`. If the method declaration is in the same class as the method call, then the `ClassName`/`ObjectName` can be omitted.

When a method is an *instance* method (non-static) and is called without an `ObjectName`, the `this` keyword is implied. In other words, if the method call looks like

```csharp
Display("Some Text")
```

it is interpreted as

```csharp
this.Display("Some Text")
```

The **`this`** keyword simply means that the method declaration is in the same class as the method call and that it should be applied to the same instance (**`this` instance**) of the class.

----

### If-Else

```csharp
if(conditionalExpression)
   statementOrStatementBlock // true side
else
   statementOrStatementBlock // false side
```

The **if-else** provides **alternate paths of logic**, where
: `conditionalExpression` is an expression whose ultimate data type is a `bool`.
: `statementOrStatementBlock` is either a **single** statement or a **single** statement *block* (zero or more statements inside curly braces - `{ }`).
  - The statement/block after the `if` portion will run if the `conditionalStatement` results in a **`true`** value.
  - The statement/block after the `else` portion will run if the `conditionalStatement` results in a **`false`** value. The `else statementOrStatementBlock` portion is optional.

----

### Switch-Case

```csharp
switch(cardinalExpression)
{
   case matchingExpression1:
   statementOrStatementBlock
   break;
   case matchingExpression2:
   statementOrStatementBlock
   break;
   // ...additional case statements...
   default:
   statementOrStatementBlock
   break;
}
```

The **switch** provides **alternate paths of logic**, where
: `cardinalExpression` is an expression that produces a single value of any primitive data type (`int`, `double`, `char`, `string` or an `enum`).
: Each `matchingExpression` is a constant value whose data type matches the data type of the `cardinalExpression`. A match is determined by the value of the `cardinalExpression` being **equal to** the `matchingExpression`. The `break` indicates the end of the path of logic for the matching expression.
: `statementOrStatementBlock` is either a **single** statement or a **single** statement *block* (zero or more statements inside curly braces - `{ }`).
: The `default` block will execute if `cardinalExpression` did not match any of the listed matching expressions.

----

### For and For-Each

```csharp
for([initializations]; conditionalExpression; [incrementations])
   statementOrStatementBlock
```

The **for** provides **repetitive execution of code**, where
: `initializations` is a comma-separated set of variable initializations or assignments; the variables identified here should be ones used in the `conditionalExpression`. This portion is optional
: `conditionalExpression` is an expression whose ultimate data type is a `bool`. The `conditionalExpression` is evaluated at the beginning of the loop.
: `incrementations` is a comma-separated set of modifications to the variable(s) controlling the loop; the variables identified here should be ones used in the `conditionalExpression`. This portion is optional.
: `statementOrStatementBlock` is either a **single** statement or a **single** statement *block* (zero or more statements inside curly braces - `{ }`).
  - The `statementOrStatementBlock` will only execute as long as the `contitionalExpression` results in a **`true`** value.
  - The loop exits when the `conditionalStatement` results in a **`false`** value.

```csharp
foreach([dataType] variable in enumerableCollection)
   statementOrStatementBlock
```

The **for** provides **repetitive execution of code**, where the repetition occurs for each item in the `enumerableCollection`.
: `enumerableCollection` is any object that represents a collection of values (i.e.: supports `IEnumerable`).
: `variable` is an identifier to represent each item in the collection as it loops through the collection's items/elements.
: `dataType` declares the data type of the variable. This is optional, and when omitted the data type of `variable` is inferred from the `enumerableCollection`.

----

### While and Do-While

```csharp
while(conditionalExpression)
   statementOrStatementBlock
```

The **while** provides **repetitive execution of code**, where
: `conditionalExpression` is an expression whose ultimate data type is a `bool`. The `conditionalExpression` is evaluated at the beginning of the loop.
: `statementOrStatementBlock` is either a **single** statement or a **single** statement *block* (zero or more statements inside curly braces - `{ }`).
  - The `statementOrStatementBlock` will only execute as long as the `contitionalExpression` results in a **`true`** value.
  - The loop exits when the `conditionalStatement` results in a **`false`** value.

```csharp
do
   statementOrStatementBlock
while (conditionalExpression);
```

The **do-while** provides **repetitive execution of code**, where
: `conditionalExpression` is an expression whose ultimate data type is a `bool`. The `conditionalExpression` is evaluated at the end of the loop.
: `statementOrStatementBlock` is either a **single** statement or a **single** statement *block* (zero or more statements inside curly braces - `{ }`).
  - The `statementOrStatementBlock` will execute at least once and will keep on executing as long as the `contitionalExpression` results in a **`true`** value.
  - The loop exits when the `conditionalStatement` results in a **`false`** value.

----

## Objects, Classes and More


### Object Instantiation

```csharp
new ClassName(argList)
```

### Initializer Lists

```csharp
new ClassName
{
  initializerList
}
```

### Classes and Inheritance

```csharp
[accessModifier] class ClassName : BaseClassOrInterface[, InterfaceList]
{
  // ClassMembers
}
```

This grammar offers additional details over the earlier [**Class Definition**](#class-definition), where
: `BaseClassOrInterface` is the name of either another class or an [interface](#interface-declaration)
: `InterfaceList` is a comma-separated list of interface names

### Enum Declaration

**Enumerations** are programmer-defined *primitive* data types. They essentially represent a set of **named constants** that can be distinguished between each other.

```csharp
[accessModifier] enum EnumerationName
{
  EnumeratedNames
}
```

An **Enum Definition** describes a new data type where
: `[accessModifier]` is either `public` or `internal`. If no access modifier is provided, then the default modifier is `internal`.
: `EnumerationName` is the programmer-supplied name for the enum (in TitleCase format)
: `EnumeratedNames` is a comma-separated list of "named values" (with or without an assigned underlying value)

Each of the named values in the list of **`EnumeratedNames`** follows this grammar,

```csharp
NamedValue [= wholeNumber]
```

Named values are essentially similar to [variable declarations](#variable-declarations) where
: The `NamedValue` is an identifier (in either title case or all upper-case)
: An optional `wholeNumber` value is assigned to the named value

### Interface Declaration

```csharp
[accessModifier] interface InterfaceName [: Interface]
{
  // PropertySignatures
  // MethodSignatures
}
```

### Delegate

```csharp

```

### Event

```csharp

```
