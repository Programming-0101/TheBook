# Topic B – Starting Classes

## Overview

This topic introduces some of the basic syntax and grammar surrounding Object-Oriented Programming in Java. The following keywords are introduced. (Note that additional keywords from previous topics may also be present.)

* new 
* char 
* int 
* double 

This topic will also introduce the following grammars, syntax and language constructs. (Note that additional concepts from previous topics may also be present.)

* Method declaration syntax (instance methods) 
* Object instantiation 
* Instance method call syntax (with and without arguments) 
* Class Field declaration syntax (member variables) 
* Assignment statement syntax 
* Accessing public fields in objects (storing & retrieving values) 

Note that this package introduces the distinction between static and non-static methods. Static methods, also known as "class methods", are identified by the keyword static and must be qualified by the class name; for example, in the following method call Salutation is the name of the class and Greeting is a static method of that class.
`Salutation.Greeting()`

Non-static methods, also known as "instance methods", are identified by the absence of the static keyword and must be called by using an instance of the class (that is, an object). An example of calling an instance method would be
`app.Greeting()`
where the app is an instance of the Salutation class.

### LOGs

At the end of this topic, you should be able to ...

#### OOP Basics 
 
* Define the term "object" as used in OOP 
* Describe the syntax of static and non-static method declarations
* Compare and contrast the syntax for method declarations (implementations) vs. method calls (for both static and non-static methods) 
* Define the term "field" as used in OOP and give an example 
* Compare and contrast instance and class members, for both methods and fields 
* Identify the "member access operator" and explain it's purpose 
* Create (instantiate) objects 
* Distinguish between classes and objects in OOP
* Explain what is meant by the phrase “type extensibility” and how classes represent “complex” data types in OOP

#### General Programming Concepts and Terms

* List the three categories of simple information 
* Define the term "intrinsic data type" 
* Explain what an assignment statement is and how it works 
* Compare and contrast the three categories of simple information with the complex types of information which classes represent 
* Explain the advantages of using classes and objects instead of only using intrinsic data types 

## Code Samples

The following examples are used to illustrate this topic. 

1.	Salutation - This adaptation of the classic "Hello World" program illustrates instance methods. This example includes and introduces the concept of a "driver" and the idea of creating (instantiating) an object based on a class. 
2.	Person - This simple class illustrates and introduces the idea of fields (member variables) of a class. This example includes and introduces the idea of a driver. The driver also illustrates how a single class can be used to instantiate multiple, distinct objects. 
3.	Account - This simple class also illustrates fields. This example includes a driver. 
4.	Comments - This class continues the illustration of the kinds of comments allowed in the programming language. This class builds on the previous example by showing comments for fields as well as methods. 
5.	Student - This class introduces a slightly more complex class by offering more fields. This example includes two drivers. By using two drivers, this illustrates that separate "programs" can share/use the same class definition. 
a.	The first driver is a simple "test driver" to ensure that the class is "working". This introduces the student to the idea that it is necessary to "test" or prove that the code we are creating is valid. 
b.	The second driver illustrates how the a single class can act as the basis for creating many distinct objects.
6.	Employee + Company - These are other classes similar to the Person and Student classes. These classes, however, "share" a driver, illustrating the fact that any given "program" typically uses more than one class. In addition, this driver introduces the ToString() and Parse() methods of the DateTime class.

---

### Salutation & Driver

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

---

### Person

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

---

### Account

This simple class also illustrates fields. This example includes a driver.
*	Data Attributes of the Account class:
  * AccountNumber : Integer
  * Balance : Real
  * OverdraftLimit : Double

```csharp
namespace Topic.B.Examples
{
    public class Account
    {
        public int AccountNumber;
        public double Balance;
        public double OverdraftLimit;
    }
}
```

```csharp
namespace Topic.B.Examples
{
    public class DemoAccountDriver
    {
        public static void Main(string[] args)
        {
            Account myAccount; // declares a reference variable to an Account object
            myAccount = new Account(); // creates the Account object.

            myAccount.Balance = 500000.00;
            myAccount.OverdraftLimit = 1000000.00;
            myAccount.AccountNumber = 123456;
        }
    }
}
```

---

### Comments

This class continues the illustration of the kinds of comments allowed in the programming language. This class builds on the previous example by showing comments for fields as well as methods.

```csharp
/*
 * File:    Comments.cs
 * Author:  Dan Gilleland
 * Date:    2010
 * Purpose: To illustrate multi-line, single-line, and XML comments.
 *          This is a multi-line comment.
 */
namespace Topic.B.Examples
{
    /// <summary>
    /// Comments illustrates multi-line, single-line, and XML comments.
    /// </summary>
    /// <remarks>
    /// This class is a stand-alone class used to illustrate comments.
    /// This particular XML comment is "attached" to the class as
    /// a whole, while other XML comments are for fields or methods
    /// in the class (a few methods and fields have been included for
    /// illustration purposes).
    /// </remarks>
    public class Comments
    {
        /// <summary>
        /// Here is a simple integer variable that is pre-set to the value 5.
        /// </summary>
        /// <remarks>
        /// This is an instance member (non-static) of the class.
        /// </remarks>
        private int _five = 5;

        /// <summary>
        /// Here is a whole number that is pre-set to the value 0.
        /// </summary>
        /// <remarks>
        /// This field is a static member of the class.
        /// </remarks>
        private static int _instanceCounter = 0;

        /// <summary>
        /// Here is a real number that is pre-set to the value 3.14159.
        /// </summary>
        /// <remarks>
        /// This field is a constant member of the class.
        /// </remarks>
        private const  double _PI = 3.14159;

        /* ****************** Methods ******************** */
        /// <summary>
        /// This is a method of <see cref="Comments"/>
        /// </summary>
        /// <returns>This method returns a string.</returns>
        public static string SimpleMethod()
        {
            return "Hello World!";
        } // end of SimpleMethod()

        /// <summary>
        /// This is a one-sentence description of the method.
        /// </summary>
        /// <param name="name">This is where I describe the purpose of this parameter</param>
        /// <returns>Here I describe what information is returned from this method.</returns>
        /// <remarks>
        /// This method has a single parameter.
        /// </remarks>
        public static int MethodWithParameter(string name)
        {
            return name.Length;
        } // end of MethodWithParameter(string)
    } // end of Comments class
}
```

---

### Student

The Student class introduces a slightly more complex example by offering more fields.

*	Data Attributes of the Student class:
  * Name : String
  * Gender : Character
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
        public char Gender;                 // Gender can be 'M' or 'F'
        public int StudentId;               // The school-provided student ID
        public string Program;              // The course program; e.g.: "CST"
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
            bob.Gender = 'M';
            bob.Program = "CST";
            bob.StudentId = 200765789;
            bob.GradePointAverage = 6.76;

            mary.Name = "Mary McTavishski";
            mary.Gender = 'F';
            mary.Program = "CST";
            mary.StudentId = 200765790;
            mary.GradePointAverage = 5.76;

            joe.Name = "Joe Jetson";
            joe.Gender = 'M';
            joe.Program = "CST";
            joe.StudentId = 200765792;
            joe.GradePointAverage = 4.66;

            susan.Name = "Susan Orlando";
            susan.Gender = 'F';
            susan.Program = "CST";
            susan.StudentId = 200765795;
            susan.GradePointAverage = 8.54;

            frank.Name = "Frank Smith";
            frank.Gender = 'M';
            frank.Program = "CST";
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

---

### Employee & Company

The Employee and Company classes are similar to the Person and Student classes.

*	Data Attributes of the Employee class:
  * FirstName : String
  * LastName : String
  * SocialInsuranceNumber : Integer
  * YearlySalary : Real
  * EmploymentStartDate : Date
  * Gender : Character

```csharp
using System;
namespace Topic.B.Examples
{
    public class Employee
    {
        public string FirstName;
        public string LastName;
        public int SocialInsuranceNumber;
        public double YearlySalary;
        public DateTime EmploymentStartDate;
        public char Gender;
    }
}
```

*	Data Attributes of the Company class:
  * Name : String
  * City : String
  * IsIncorporated : Boolean
  * BusinessStartDate : Date
  * NumberOfEmployees : Integer
  * GrossIncomeToDate : Real

```csharp
using System;
namespace Topic.B.Examples
{
    public class Company
    {
        public string Name;
        public string City;
        public bool IsIncorporated;
        public DateTime BusinessStartDate;
        public int NumberOfEmployess;
        public double GrossIncomeToDate;
    }
}
```

In the following driver, the Employee and Company classes are both being used, illustrating the fact that any given "program" typically uses more than one class. In addition, this driver introduces the overloaded ToString() method in the DateTime class to improve the output of displaying dates and the Parse() method to convert a string representation of a date to an actual DateTime instance.

```csharp
using System;
namespace Topic.B.Examples
{
    public class DemoCompanyAndEmployee
    {
        public static void Main(string[] args)
        {
            Company Acme = new Company();
            Employee Salesman = new Employee();
            Employee Shipper = new Employee();

            // Set the company's information
            Acme.Name = "Acme International";
            Acme.City = "Edmonton";
            Acme.BusinessStartDate = new DateTime(); // new Date() defaults to the current date
            Acme.IsIncorporated = false;
            Acme.NumberOfEmployess = 2;
            Acme.GrossIncomeToDate = 2152368.52; // $ 2 million, plus change

            // Set the salesman's information
            Salesman.FirstName = "Wiley";
            Salesman.LastName = "Coyote";
            Salesman.Gender = 'M';
            Salesman.SocialInsuranceNumber = 123456789;
            Salesman.EmploymentStartDate = DateTime.Today;
            Salesman.YearlySalary = 45250.00;

            // Set the shipper's information
            Shipper.FirstName = "Road";
            Shipper.LastName = "Runner";
            Shipper.Gender = 'F';
            Shipper.SocialInsuranceNumber = 7777777;
            Shipper.EmploymentStartDate = DateTime.Parse("June 1, 2008");
            Shipper.YearlySalary = 54520.00;


            // Show the information
            System.Console.WriteLine("The information for the company:");
            System.Console.WriteLine(Acme.Name);
            System.Console.WriteLine(Acme.City);
            System.Console.WriteLine(Acme.BusinessStartDate);
            System.Console.WriteLine(Acme.IsIncorporated);
            System.Console.WriteLine(Acme.NumberOfEmployess);
            System.Console.WriteLine(Acme.GrossIncomeToDate);

            System.Console.WriteLine("The employee information: Salesman");
            System.Console.WriteLine(Salesman.FirstName);
            System.Console.WriteLine(Salesman.LastName);
            System.Console.WriteLine(Salesman.Gender);
            System.Console.WriteLine(Salesman.SocialInsuranceNumber);
            System.Console.WriteLine(Salesman.EmploymentStartDate);
            System.Console.WriteLine(Salesman.YearlySalary);

            System.Console.WriteLine("The employee information: Shipper");
            System.Console.WriteLine(Shipper.FirstName);
            System.Console.WriteLine(Shipper.LastName);
            System.Console.WriteLine(Shipper.Gender);
            System.Console.WriteLine(Shipper.SocialInsuranceNumber);
            System.Console.WriteLine(Shipper.EmploymentStartDate.ToString("MMMM d, yyyy"));
            System.Console.WriteLine(Shipper.YearlySalary);
        }
    }
}
```

## Practice Exercises

* AnsweringMachine - Create the AnsweringMachine class so that it can provide a default answer for an incoming phone call as well as a customizable answer.
* Account - Extend the Account class from the example to include more information. Specifically, include an AccountType:String, BankName:String, BranchNumber:Integer, and InstitutionNumber:Integer. 
* CanadianAddress - Create the CanadianAddress class so that it can represent the majority of possible addresses that some place may have in Canada.
* Course - Create the Course class so that it represents a post-secondary course.
* ExamResult - Create the ExamResult class so that it represents the results of an exam written by a student.
* LabResult - Create the labResult class so that it represents the results of a lab submitted by a student.

### AnsweringMachine

The AnsweringMachine class provides a method to give an answer to an incoming phone call.

**Problem Statement:**

Create the AnsweringMachine class so that it can provide a default answer for an incoming phone call as well as a customizable answer. The methods should be named answer and they should return a String. There should be two methods in total, and both of them should be declared as instance members (non-static). The actual content of the default message can be whatever you choose, while the customizable method will receive a single String argument that has the name of the person receiving the message. 

Also create a driver that demonstrates the AnsweringMachine in a Console environment

Create a driver for the AnsweringMachine class that creates an instance of the class and displays the results of calling the answer methods. 

### Account

Extend the Account class from the example to include more information.

**Problem Statement:**

Extend the Account class from the example to include more information. Specifically, include an AccountType:String, BankName:String, BranchNumber:Integer, and InstitutionNumber:Integer.

Also modify the driver to make use of the added information.

*Notes*

The branch number and the institution number together make up the Transit Number for a bank. "The bank transit number is 8 digits long. This is divided into a 5 digit branch number and 3 digit institution code, for example 10000-200." (See http://en.wikipedia.org/wikiSort_code)

For more information on bank accounts and transit numbers in Canada, see http://en.wikipedia.org/wiki/Routing_transit_number#Canadian_transit_number. 

### CanadianAddress

This class represents an address for some place in Canada. 

**Problem Statement:**

Create the CanadianAddress class so that it can represent the majority of possible addresses that some place may have in Canada. Design the class to have only public fields, as specified in this document.

* Data Attributes of the CanadianAddress class:
  * Street : String
  * Unit : String
  * City : String
  * Province : String
  * PostalCode : String
  * RuralRoute : String
  * BoxNumber : String

Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this package. In the driver, create instances of the CanadianAddress class that represent your current address as well as the address of your school (use hard-coded data). 

### Course

This class represents a post-secondary course with a theory (exam) and a lab portion. 

**Problem Statement:**

Create the Course class so that it represents a post-secondary course. Design the class to have only public fields, as specified in this document.

* Data Attributes of the Course class:
  * CourseName : String
  * CourseNumber : String
  * ExamCount : Integer
  * LabCount : Integer
  * ClassHours : Integer

Also create a driver for testing this class; you may use any name for your driver as long as it is not already mentioned in this package. In the driver, instantiate all of the first term classes you are taking and populate those objects with data (use hard-coded data). 

### ExamResult

This class represents the results of an exam for a student. 

**Problem Statement:**

Create the ExamResult class so that it represents the results of an exam written by a student. Design the class to have only public fields, as specified in this document.

* Data Attributes of the ExamResult class:
  * Name : String
  * TotalMarks : Integer
  * MarksEarned : Real
  * ExamWeight : Integer
  * StudentId : Integer

Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this package. In the driver, instantiate all of the exams you have taken to date in this course and populate those objects with data (use hard-coded data). 

### LabResult

This class represents the results of an lab for a student. 

**Problem Statement:**

Create the labResult class so that it represents the results of a lab submitted by a student. Design the class to have only public fields, as specified in this document. 

* Data Attributes of the LabResult class:
  * LabNumber : Integer
  * TotalMarks : Integer
  * MarksEarned : Real
  * LabWeight : Integer
  * StudentId : Integer

Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this package. In the driver, instantiate all of the labs you have submitted to date in this course and populate those objects with data (use hard-coded data).
