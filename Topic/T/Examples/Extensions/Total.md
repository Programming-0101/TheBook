---
title: Total
---
# Total

```csharp
public static class TotalExtensions
{
    public static int Total<TSource>(this IEnumerable<TSource> source,
                                     Func<TSource, int> selector)
    {
        int result = 0;
        foreach (var item in source)
            result += selector(item);
        return result;
    }
}
```
