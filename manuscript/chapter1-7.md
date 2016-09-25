# A Simplified C# Grammar

> A language **grammar** is a set of small rules that can be combined to produce a **syntax**.

The many small rules in the C# programming language is its ***grammar***. These rules specify the accepted way to write C# code. Individually, each rule in itself is not enough to produce complete working code. Instead, the rules are like building blocks, offering various ways to assemble or construct your code.

Take, for example, some of the grammar around **variable declarations** and **program statements**. A simplified grammar for declaring a variable in C# would look like this:

> ***  dataType variableName***

We would have to supply both a data type and a variable name to declare a variable. Thus, if we wanted to store a whole number to represent a count, we could use the `int` keyword and write the following:

`  int count`

By itself, this variable declaration is not enough to produce a complete instruction in C#. We have to combine the *variable declaration* grammar with the grammar for a *program statement* in order to make a single instruction telling the computer to create the variable. In general, a program statement must be a statement that ends with a semicolon (`;`). In other words, the *program statement* grammar requires the semicolon as "punctuation", much in the same way that English sentences must end in a period. Thus, our completed syntax for creating a variable would be

`  int count;`

The formal grammar for C# is actually quite large and complex. In fact, the grammars for most programming languages are so complex that they require another "language" to describe the grammar. An early and fairly standard language or means to express grammars is the **Bakus-Naur Form**, or *BNF*.

For our purposes, we will present a much more *simplified* grammar. You can think of it as a modified BNF. The following sections express much of the grammar we will encounter as we begin our Objects-First introduction to C#. Check the appendix for the complete set of simplified C# grammar used in this book.

## Common Grammar Elements

Program Statements

* Variable Declarations
* Assignment Statements
* Expressions
* Namespaces

## Classes and Class Members

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
: `[accessModifier]` is either `public`{format: csharp} or `internal`{format:csharp}. If no access modifier is provided, then the default modifier is `internal`{format:csharp}.
: `ClassName` is the programmer-supplied name for the class (in TitleCase format)
: `FieldDeclarations`, `PropertyDeclarations`, `Constructors` and `MethodDeclarations` are all optional and can appear in any order.
  See the related grammars below to see how they are defined.

### Field Declarations

```csharp
[accessModifier] [static] dataType _FieldName [= constantExpression];
```

A **Field Declaration** identifies a *static* or *instance* member variable of the class where
: `[accessModifier]` is either `public`{format: csharp}, `private`{format: csharp}, `protected`{format: csharp}, or `internal`{format:csharp}. If no access modifier is provided, then the default modifier is `private`{format:csharp}.
: `[static]`{format:csharp} is an optional keyword. If present, the field is *shared* among all instances of the class. If absent (which is the common case) then the field is an *instance* member and one is created every time an object based on the class is created.
: `dataType` is any built-in data type or the name of a programmer-defined data type.
: `_FieldName` is a the name you give to the member variable. By convention, private fields are given an underscore as a prefix to the name.
: `constantExpression` is an optional expression that generates data whose value can be determined at compile time. Being a constant expression does *not* mean that the field is a constant, only that the initial value stored in the field is a constant and can be known at compile time *before* the program runs.

### Property Declarations

Properties are a kind of cross between methods and fields. On one hand, they are used in the same way that fields are. When you want to assign (or **set**) a value to a property, you place the property on the left side of the assignment operator. When you want to use (or **get**) the properties value, you simply reference the property name just as you would a field name.

Internally, however, the **get** and **set** operations are like the bodies of a method, where you can place instructions to retrieve or change the data in the class or object.

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
: `[accessModifier]` is either `public`{format: csharp}, `private`{format: csharp}, `protected`{format: csharp}, or `internal`{format:csharp}. If no access modifier is provided, then the default modifier is `private`{format:csharp}.
: `[static]`{format:csharp} is an optional keyword. If present, the Property is *shared* among all instances of the class. If absent (which is the common case) then the Property is an *instance* member and one is created every time an object based on the class is created.
: `dataType` is any built-in data type or the name of a programmer-defined data type.
: `PropertyName` is a the name you give to the member property. By convention, private Property are given an underscore as a prefix to the name.
: `Body of getter` is a set of instructions that must ultimately return a value of the same data type as the property.
: `Body of the setter` is a set of instructions that can process incoming data that is in the `value`{format:csharp} keyword. A typical implementation will store that data into the property's backing store.

### Autoimplemented Property

Autoimplemented properties are properties where the compiler takes care of the getter and setter implementations and also supplies a hidden field as the **backing store** for the property. The default get implementation is to retrieve the value from the backing store while the default set implementation is to place a value into the backing store.

```csharp
[accessModifier] [static] dataType PropertyName { get; set; }
```

A **Property Declaration** identifies a *static* or *instance* member of the class where
: `[accessModifier]` is either `public`{format: csharp}, `private`{format: csharp}, `protected`{format: csharp}, or `internal`{format:csharp}. If no access modifier is provided, then the default modifier is `private`{format:csharp}.
: `[static]`{format:csharp} is an optional keyword. If present, the Property is *shared* among all instances of the class. If absent (which is the common case) then the Property is an *instance* member and is tied to a specific created every time an object based on the class is created.
: `dataType` is any built-in data type or the name of a programmer-defined data type.
: `PropertyName` is a the name you give to the member property. By convention, private Property are given an underscore as a prefix to the name.

### Constructors

TBA

### Method Declarations

TBA

## Flow-Control Statements

* If-Else
* Case
* For and Foreach
* While and Do-While
