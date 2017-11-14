---
---
# Basic Swapping Principles

The following is a method demonstrating a simple swap of two items within a single method.

```csharp
private static void SimpleSwap()
{
    // A simple swap
    string varA = "Matt";
    string varB = "Mallory";

    Console.WriteLine($"Attempting to swap {varA} and {varB}.");

    // The following will NOT work
    varA = varB;
    varB = varA;
    Console.WriteLine($"Results: {varA} and {varB}");

    // Reset & try again
    varA = "Matt";
    varB = "Mallory";

    Console.WriteLine($"Second attempt to swap {varA} and {varB}.");

    // A temporary variable is required.
    string temp;
    temp = varA;
    varA = varB;
    varB = temp;
    Console.WriteLine($"Results: {varA} and {varB}");
}
```

### Swapping With Reference variables

The following is a demo of trying to use a method to swap two variables. For a method swap to work, you need to pass in the variables by reference (the `ref` keyword).

```csharp
private static void DemoSwapMethods()
{
    // Variable setup
    string varA = "Matt";
    string varB = "Mallory";

    Console.WriteLine($"Attempting to swap {varA} and {varB}.");
    BadSwap(varA, varB);
    Console.WriteLine($"Results of BadSwap method: {varA} and {varB}");
    GoodSwap(ref varA, ref varB);
    Console.WriteLine($"Results of GoodSwap method: {varA} and {varB}");
}

private static void BadSwap(string a, string b)
{
    // DON'T use this method...
    string temp;
    temp = a;
    a = b;
    b = temp;
}

private static void GoodSwap(ref string a, ref string b)
{
    string temp;
    temp = a;
    a = b;
    b = temp;
}
```

This is true not only for built-in data types (int, string, etc.), but for classes as well. Take, for example, this simple class called `Person`.

```csharp
public class Person
{
    public string Name { get; set; }
    public Person(string name)
    {
        Name = name;
    }
    public override string ToString()
    {
        return "My name is " + Name;
    }
}
```

When swapping two whole objects in a separate method, we would need to pass those objects by reference.

```csharp
private static void DemoObjectSwapMethods()
{
    // Variable setup
    Person varA = new Person("Matt");
    Person varB = new Person("Mallory");

    Console.WriteLine($"Attempting to swap {varA} and {varB}.");
    BadObjectSwap(varA, varB);
    Console.WriteLine($"Results of BadSwap method: {varA} and {varB}");
    GoodObjectSwap(ref varA, ref varB);
    Console.WriteLine($"Results of GoodSwap method: {varA} and {varB}");
}

private static void BadObjectSwap(Person a, Person b)
{
    // Only the local variables are swapped
    Person temp;
    temp = a;
    a = b;
    b = temp;
}

private static void GoodObjectSwap(ref Person a, ref Person b)
{
    Person temp;
    temp = a;
    a = b;
    b = temp;
}
```

### Array Element Swapping

The following is a demo of swapping two elements in an array by using a method. Note that there is no need for a `ref` keyword in the parameters; that is because an array variable is a *reference* type, and any changes to that reference variable's members (the elements in the array) will affect the variable passed in. Therefore, when you pass an array to a method you are effectively sending in the whole array.

```csharp
private static void DemoArrayElementSwap()
{
    string[] studioC_CastMembers = { "Whitney Call", "Mallory Everton", "Jason Gray", "Matt Meese", "Adam Berg", "Stacey Harkey", "Natalie Madsen", "Stephen Meek", "James Perry", "Jeremy Warner" };
    Console.WriteLine($"Going to swap {studioC_CastMembers[0]} and {studioC_CastMembers[1]}");
    SwapElements(studioC_CastMembers, 0, 1);
    Console.WriteLine($"Results of array swap: {studioC_CastMembers[0]} and {studioC_CastMembers[1]}");
}

private static void SwapElements(string[] theArray, int indexA, int indexB)
{
    string temp;
    temp = theArray[indexA];
    theArray[indexA] = theArray[indexB];
    theArray[indexB] = temp;
}
```
