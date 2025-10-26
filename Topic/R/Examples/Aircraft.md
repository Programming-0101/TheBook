```csharp
public abstract class Aircraft
{
    public double Airspeed { get; protected set; }
    public double GroundSpeed { get; protected set; }
    public bool IsAirborne { get; protected set; }

    public abstract void TakeOff();
    public abstract void Land();
}
```

```csharp
public class Balloon : Aircraft
{
    public override void TakeOff()
    {
        Console.WriteLine("Increasing hot air");
        Console.WriteLine("Releasing Land Moorings");
        Console.WriteLine("Lift off!");
    }
    public override void Land()
    {
        Console.WriteLine("Releasing hot air");
        Console.WriteLine("Drop Landing Lines");
        Console.WriteLine("Land Moorings Secured");
    }
}
```

```csharp
public class Blimp : Aircraft
{
    public override void TakeOff()
    {
        Console.WriteLine("Start engines");
        Console.WriteLine("Adjust elevators");
        Console.WriteLine("Releasing Land Moorings");
        Console.WriteLine("Vent air from ballonets");
        Console.WriteLine("Lift off!");
    }
    public override void Land()
    {
        Console.WriteLine("Engage ballonet pumps");
        Console.WriteLine("Adjust Elevators");
        Console.WriteLine("Fill ballonets");
        Console.WriteLine("Drop Landing Lines");
        Console.WriteLine("Land Moorings Secured");
    }
}
```

```csharp
public class Airplane : Aircraft
{
    public override void TakeOff()
    {
        Console.WriteLine("Run checklist");
        Console.WriteLine("Taxi to runway");
        Console.WriteLine("Increase throttle; release brakes; trim flaps");
        Console.WriteLine("Pull back on yoke");
    }
    public override void Land()
    {
        Console.WriteLine("Lower flaps; lower landng gear");
        Console.WriteLine("Reduce airspeed");
        Console.WriteLine("Touchdown; yoke forward; engage brakes;");
        Console.WriteLine("Taxi off runway");
    }
}
```
