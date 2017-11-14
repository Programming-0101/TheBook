---
---
# Person

This simple class illustrates and introduces the idea of fields (member variables) of a class. This example includes and introduces the idea of a driver. The driver also illustrates how a single class can be used to instantiate multiple, distinct objects.

*	Data Attributes of the Person class:
  * FirstName : String
  * LastName : String
  * Age : Integer

```csharp
namespace Topic.B.Examples
{
    public class Person
    {
        /// <summary>This is the first name of the person</summary>
        public string FirstName;
        /// <summary>This is the last name of the person</summary>
        public string LastName;
        /// <summary>This is the person's age</summary>
        public int Age;
    }
}
```

```csharp
namespace Topic.B.Examples
{
    public class DemoPerson
    {
        public static void Main(string[] args)
        {
            Person someGuy;
            someGuy = new Person();
            someGuy.FirstName = "Harry";
            someGuy.LastName = "Burns";
            someGuy.Age = 25;

            Person someGirl;
            someGirl = new Person();
            someGirl.FirstName = "Sally";
            someGirl.LastName = "Albright";
            someGirl.Age = 25;

            string fullName;

            fullName = someGuy.FirstName + " " + someGuy.LastName;
            System.Console.WriteLine("Hi. My name is " + fullName);

            fullName = someGirl.FirstName + " " + someGirl.LastName;
            System.Console.WriteLine("Hi" + someGuy.FirstName +
                               ". My name is " + fullName);
        }
    }
}
```
