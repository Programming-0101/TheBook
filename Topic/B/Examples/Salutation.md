---
title: Topic B - Salutation Example
---
# Salutation & Driver

This adaptation of the classic "Hello World" program illustrates instance methods. This example includes and introduces the concept of a "driver" and the idea of creating (instantiating) an object based on a class.

```csharp
/*
 * Purpose: To illustrate 
 *          - Keywords: public, class, return
 *          - Grammar: method declaration, parameter declaration, single line comments
 *          - Other:
 *              - string data type
 *              - method overloading
 *              - Instance members
 */
namespace Topic.B.Examples
{
    public class Salutation
    {
        public string Greeting()
        {
            return "Hello World!";
        }

        public string Greeting(string name)
        {
            return "Hello " + name;
        }
    }
}
```

```csharp
/*
 * Purpose: To illustrate 
 *          - Keywords: public, class, static, void, new
 *          - Grammar: variable (object) declaration, object instantiation, method declaration, method call, multi-line comments
 *          - Other:
 *              - main - the entry level of every program
 *              - console output (println)
 *              - Instance vs. Class methods
 *              - instance method call
 *              - instance method call with argument
 *              - (optional) array declaration - string[]
 */
namespace Topic.B.Examples
{

    public class HelloWorld_Driver
    {
        public static void Main(string[] args)
        {
            Salutation app = new Salutation();

            System.Console.WriteLine(app.Greeting());
            System.Console.WriteLine(app.Greeting("Bob"));
        }
    }
}
```
