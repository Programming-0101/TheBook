---
title: Topic C - Student Example
---
# Student

This class reinforces the idea of encapsulation and constructors. It also introduces the idea of overloading the default ToString() method that every class inherits from the Object class. This example includes a driver with multiple objects, showing how the use of constructors makes it easier to create many objects in a few lines of code.

```csharp
public class Student
{
    public readonly string Name;
    public readonly char Status;
    public readonly int StudentId;
    public string _Program;
    public double _GradePointAverage;
    public bool _IsFullTime;

    public string Program
    {
        get { return ; }
        set { _Program = value; }
    }
    public double GradePointAverage
    {
        get { return ; }
        set { _GradePointAverage = value; }
    }
    public bool IsFullTime
    {
        get { return ; }
        set { _IsFullTime = value; }
    }

    public Student(string name,
                   char status,
                   int studentId,
                   string program,
                   double gradePointAverage,
                   bool isFullTime)
    {
        Name = name;
        Status = status;
        StudentId = studentId;
        Program = program;
        GradePointAverage = gradePointAverage;
        IsFullTime = isFullTime;
    }

    public override string ToString()
    {
        return $"({StudentId}) {Name}";
    }
}
```

```csharp
public static void Main(string[] args)
{
    Student jack = new Student("Jack Hill", 'M', 123456, "Programming 101", 3.72, true);
    Student jill = new Student("Jill Roland", 'F', 144721, "Programming 101", 3.80, true);

    Console.WriteLine($"{jack} has a GPA of {jack.GradePointAverage}");
    Console.WriteLine($"{jill} has a GPA of {jill.GradePointAverage}");
}
```
