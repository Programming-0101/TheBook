---
title: TBA
---
# Salutation and HelloWorld_Driver

In each of the single-line comments above a line of code, enter a phrase or sentence in English that describes what is done in that line of code.

**Salutation**

```csharp
// Instructions: Enter comments in each blank to describe the following code
// _____________________________________________________
namespace Topic.A.Exercises
{

    // _____________________________________________________________________
    public class Salutation
    {
        // _________________________________________________________________
        public static string Greeting()
        {
            // _____________________________________________________________
            return "Hello World!";
        } // end of Greeting()

        // _________________________________________________________________
        public static string Greeting(string name)
        {
            // _____________________________________________________________
            return "Hello " + name;
        } // end of Greeting(string)

        // _________________________________________________________________
        public static string Farewell()
        {
            // _____________________________________________________________
            return "So long!";
        } // end of Farewell()
    } // end of Salutation class
}
```

**HelloWorld_Driver**

```csharp
// Instructions: Enter comments in each blank to describe the following code
// _____________________________________________________
namespace Topic.A.Exercises
{
    // _____________________________________________________
    public class HelloWorld_Driver
    {
        // __________________________________________________________________
        public static void main(string[] args)
        {
            // ______________________________________________________________
            System.Console.WriteLine(Salutation.Greeting());
            // ______________________________________________________________
            System.Console.WriteLine(Salutation.Greeting("Bob"));
            // ______________________________________________________________
            System.Console.WriteLine(); // print a blank line
            // ______________________________________________________________
            System.Console.WriteLine(Salutation.Farewell());
        }
    }
}
```
