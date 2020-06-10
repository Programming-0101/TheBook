```csharp
public abstract class Aircraft
{
    public double Airspeed { get; protected set; }
    public double GroundSpeed { get; protected set; }
    public bool IsAirborne { get; protected set; }

    public abstract void TakeOff();
}
```
