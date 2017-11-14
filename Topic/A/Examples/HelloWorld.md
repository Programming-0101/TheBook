---
---
# HelloWorld

This adaptation of the classic "Hello World" program illustrates static methods. This example includes and introduces the concept of a "driver".

```csharp
namespace Topic.A.Examples
{
    public class Salutation // Define a class called "Salutation"
    {
        public static string Greeting()
        {
            return "Hello World!";
        } // end of Greeting()

        public static string Greeting(string name)
        {
            return "Hello " + name;
        } // end of Greeting(string)

        public static string Farewell()
        {
            return "So long!";
        } // end of Farewell()
    } // end of Salutation class
}
```

```csharp
namespace Topic.A.Examples
{
    public class HelloWorld_Driver
    {
        public static void Main(string[] args)
        {
            System.Console.WriteLine(Salutation.Greeting());
            System.Console.WriteLine(Salutation.Greeting("Bob"));
            System.Console.WriteLine(); // print a blank line
            System.Console.WriteLine(Salutation.Farewell());
        }
    }
}
```
