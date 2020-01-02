---
title: (R) Inheritance
---
# Topic R - Inheritance

## Keywords and Operators

- `object`
- `protected`
- `:`
- `is`
- `as`
- `base`
- `this` (previously introduced, but expanded upon here)

## LOGs

Define the term "inheritance" as it relates to object-oriented probramming
: Inheritance (sometimes called *class-based inheritance*) is a programming technique whereby one class uses another class as its "base" and thereby gains all the information (fields/properties) and behaviours (constructors and methods) of the base class as though it were its own members.

Identify the default base class of all types in C#
: The `object` keyword is the default base class when no base class is specified.

Define the term subclass
: A subclass is a class that inherits *from* a base class.

Define and describe the relationship between the terms "base class", "superclass" and "supertype"
: All of the terms identify the class that is being inherited.

Describe the syntax that is used to perform class-based inheritance
: In the class declaration, a colon `:` is used after the name of the class and before the name of the base class. For example:
: ```csharp
: public class SubClass : BaseClass
: {
:   // SubClass members
: }
: ```

Identify the base class and the subclass when using class-based inheritance

Describe what is meant by a "class heirarchy"

List the benefits of inheritance

Distinguish between inheritance and composition

Explain what is meant by an "is-a" relationship between classes

Distinguish between the `private`, `protected` and `public` access modifiers on members of a class

Use and explain the purpose of the `is` operator in regard to types

Explain how constructors interact between the subclass and base class

Describe what is meant by the phrase "constructor chaining"

Describe the order in which constructors are run when using constructor chaining

----

## Examples

- [ ] `AbstractUnitOfMeasure`

  ```csharp
  public abstract class AbstractUnitOfMeasure
  {
    public virtual double Value { get; protected set; }
  }

  public abstract class MetricSystem : AbstractUnitOfMeasure
  {

  }

  public class Metric : LinearMeasure
  {

  }


  public enum Medium { Length, Temperature, Mass, Time }
  public enum Dimension { One = 1, Two, Three }
  ```
