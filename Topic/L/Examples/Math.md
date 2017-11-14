---
---
# Math

This sample leverages the existing calculation of a number in the Fibonacci sequence to generate the sequence itself. The sequence is returned as an array of integers.

* FibonacciSequence(Length : Integer) - This method generates the sequence of Fibonacci numbers to a specific length in the sequence; the results are returned as an array of integers. If the specified length is negative, throw an exception.

```csharp
    public static int[] FibonacciSequence(int length)
    {
        int[] fib = new int[0];
        if (length >= 1)
        {
            fib = new int[length];
            for (int index = 0; index < length; index++)
                fib[index] = FibonacciNumber(index + 1);
        }
        return fib;
    }
```
