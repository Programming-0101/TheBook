# C# - An Extensible Language

| **`Data Types`** | Value Types | Reference Types |
|-|--|--|
| **Intrinsic** (built into c#) | `int`, `char`, `bool`, `double` | `string`, arrays |
| **Programmer-Defined** | `enum`, `struct`, `record` | `class` |

----

## "Types" of Information

| Primitive | Complex |
| -- | -- |
| `int`, `char`, `bool`, `double`, `enum`, `string` | `struct`, `record`, `class` |

My own programmer-defined **primitive** type.

```csharp
public enum SkillLevel { Noob, Trainee, Competent, Guru }
```

My own programmer-defined **complex** type.

```csharp
public struct Programmer
{
    public SkillLevel Skill {get;set;}
    public string Language {get;set;}
    public double GetEstimate(int months)
    {
        // Calculate cost for the skill level & language
    }
}
```
