# RoundingStrategy

```csharp
public delegate double RoundingStrategy(double);

public interface IApproximate
{
    RoundingStrategy Rounding { get; }
}

public double NearestPenny(double)
```
