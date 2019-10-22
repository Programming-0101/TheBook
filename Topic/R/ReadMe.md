---
title: (R) Inheritance
---
# Topic R - Inheritance

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
