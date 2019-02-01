---
title: Topic B - Employee Example
---
# Employee & Company

The Employee and Company classes are similar to the Person and Student classes.

* Data Attributes of the Employee class:
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
