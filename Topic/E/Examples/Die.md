---
title: TBA
---
# Die

This class represents a single six-sided die. This example is used to illustrate random number generation and casting.

**Problem Statement**

Write the code for the Die class. The solution must meet the following requirements:

* Should Randomly Generate FaceValue Between 1 And 6 From Constructor
* Should Randomly Generate FaceValue Between 1 And 6 When Rolling

Use the following class diagram when creating your solution. Note that this uses the Random class as a private static field.

![Die Class Diagram](./E-Die.png)

```csharp
using System;
namespace Topic.E.Examples
{
    public class Die
    {
        private static Random rnd = new Random();

        public Die()
        {
            Roll();
        }

        public int FaceValue { get; private set; }

        public void Roll()
        {
            FaceValue = rnd.Next(1, 7);
        }
    }
}
```
