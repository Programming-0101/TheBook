---
title: (T) Other Types
---
# Topic T - Other Types

While the `class` keyword is typically used to declare new data types, there are other ways to create data types in C#.

The `struct` is different from the `class` in various ways. One of the more important to be aware of is that the data type for a `struct` is a ***value type*** (rather than a *reference type* as it is for classes). Here are some more significant differences (a more complete list can be found [here](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/structs)):

- A `struct` cannot have a parameterless constructor.
- A `struct` can be instantiated without a `new` operator.
- A `struct` cannot inherit from classes or other structs.
- A `struct` cannot be `null`.

- `struct`
- `interface`
- `delegate`
- Generics
- Extension Methods
