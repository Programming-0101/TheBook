---
title: Topic B - Student Example
---
# Student

The Student class introduces a slightly more complex example by offering more fields.

* Data Attributes of the Student class:
  * Name : String
  * Status : Character
  * StudentId : Integer
  * Program : String
  * GradePointAverage : Double
  * FullTime : Boolean

This example also includes two drivers. By using two drivers, this illustrates that separate "programs" can share/use the same class definition. 
The first driver is a simple "test driver" to ensure that the class is "working". This introduces the student to the idea that it is necessary to "test" or prove that the code we are creating is valid. 

The second driver illustrates how the a single class can act as the basis for creating many distinct objects.

```csharp
/**
 * Purpose: To illustrate 
 *          Highlights:
 *          - Keywords: char, int, double
 *          - Grammar: variable declaration (fields)
 *          - Other:
 *              - Instance members
 */
namespace Topic.B.Examples
{
    public class Student
    {
        public string Name;                 // The full name of the student
        public char Status;                 // Status can be 'C' for Current, 'G' for Graduate or 'W' for Withdrawn
        public int StudentId;               // The school-provided student ID
        public string Program;              // The course program; e.g.: "COMP"
        public double GradePointAverage;    // GPA is from 1.0 to 9.0
        public bool FullTime;               // If the student is enrolled full-time
    }
}
```

```csharp
/**
 * Purpose: To illustrate 
 *          Highlights:
 *          - Keywords: public, class, static, void, new
 *          - Grammar: 
 */
namespace Topic.B.Examples
{
    public class DemoStudentDriver
    {
        public static void Main(string[] args)
        {
            Student bob, mary, joe, susan, frank;
            bob = new Student();
            mary = new Student();
            joe = new Student();
            susan = new Student();
            frank = new Student();

            bob.Name = "Bob McNalley";
            bob.Status = 'C'; // Current
            bob.Program = "COMP";
            bob.StudentId = 200765789;
            bob.GradePointAverage = 6.76;

            mary.Name = "Mary McTavishski";
            mary.Gender = 'C'; //Current
            mary.Program = "COMP";
            mary.StudentId = 200765790;
            mary.GradePointAverage = 5.76;

            joe.Name = "Joe Jetson";
            joe.Gender = 'C'; // Current
            joe.Program = "COMP";
            joe.StudentId = 200765792;
            joe.GradePointAverage = 4.66;

            susan.Name = "Susan Orlando";
            susan.Gender = 'C'; // Current
            susan.Program = "COMP";
            susan.StudentId = 200765795;
            susan.GradePointAverage = 8.54;

            frank.Name = "Frank Smith";
            frank.Gender = 'C'; // Current
            frank.Program = "COMP";
            frank.StudentId = 200765797;
            frank.GradePointAverage = 8.52;

            displayStudentInformation(bob);
        }

        public static void displayStudentInformation(Student someStudent)
        {
            System.Console.WriteLine(someStudent.Name);
            System.Console.WriteLine(someStudent.Gender);
            System.Console.WriteLine(someStudent.Program);
            System.Console.WriteLine(someStudent.StudentId);
            System.Console.WriteLine(someStudent.GradePointAverage);
        }
    }
}
```
