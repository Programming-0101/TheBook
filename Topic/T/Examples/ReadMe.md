---
title: Examples
---
# Code Samples

1. Structs - the meter (m), the kilogram (kg), the second (s), the kelvin (K), the ampere (A), the mole (mol), and the candela (cd)
1. Interfaces
    - [Measurement Interfaces](Interfaces/Measurements.md)
1. Delegates
1. Generics
    - [Limited Collection](Generics/LimitedCollection.md) - A class that acts as a collection with an fixed upper-limit of items allowed in the collection. (supports `IEnumerable<T>`)
    - Dependency Injection Container <!-- see https://github.com/Sandboxed-Forks/classes/blob/master/csharp/labs/07_generics/after/Calculator/Container.cs -->
1. Extension Methods
    - [Total](Extensions/Total.md) -
    - [Deal + Hand](Extensions/Deal.md) -

----

> ## Idea Sandbox

```csharp
public interface IInstructable
{
    string Instructions { get; } // as Markdown
}

/*
- something about Transportable<T> where T : Container
    and you could use
    public interface ILimitedCapacity
    {
        public double MaxValue { get; }
        public string Unit { get; }
    }
    public interface IFillable
    {
        void Fill<T>(T content);
    }
    public interface IFillableWeight
    {
        double WeightEmpty { get; }
        double WeightFull { get; }
    }
    public abstract class Container : IFillable, IFillableWeight, ILimitedCapacity
    {
    }
    public class Transport<T> : ILimitedCapacity
    {

    }
*/
```
