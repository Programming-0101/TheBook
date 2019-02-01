---
title: Topic C - Company Example
---
# Company and Employee

These are other classes similar to the Person and Student classes, but the Employee class uses Auto-Implemented properties (available since C# 3.0). Lastly, these classes "share" a driver, illustrating the fact that any given "program" typically uses more than one class.

```csharp
public class Company
{
    public string Name { get; set; }
    public string City { get; set; }
    public bool IsIncorporated { get; set; }
    public DateTime BusinessStartDate { get; set; }
    public double GrossIncomeToDate { get; set; }

    public Company(string name,
                    string city,
                    bool isIncorporated,
                    DateTime businessStartDate,
                    double grossIncomeToDate)
    {
        Name = name;
        City = city;
        IsIncorporated = isIncorporated;
        BusinessStartDate = businessStartDate;
        GrossIncomeToDate = grossIncomeToDate;
    }
}
```

```csharp
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int SocialInsuranceNumber { get; set; }
        public double YearlySalary { get; set; }
        public DateTime EmploymentStartDate { get; set; }
        public char Gender { get; set; }

        public Employee(string firstName,
                        string lastName,
                        int socialInsuranceNumber,
                        double yearlySalary,
                        DateTime employmentStartDate,
                        char gender)
        {
            FirstName = firstName;
            LastName = lastName;
            SocialInsuranceNumber = socialInsuranceNumber;
            YearlySalary = yearlySalary;
            EmploymentStartDate = employmentStartDate;
            Gender = gender;
        }
    }
```

```csharp
public static void Main(string[] args)
{
    Company jdCompany = new Company("JD Consulting", "Edmonton", true, new DateTime(2012, 5, 15), 785646.45);
    Employee johnDoe = new Employee("John", "Doe", 123456789, 92500, new DateTime(2012, 5, 15), 'M');
    Employee analyst = new Employee("Anna", "Lyst", 112258899, 74500, new DateTime(2014, 7, 1), 'F');
    Employee student = new Employee("Stewart", "Dent", 314259876, 52000, new DateTime(2015, 5, 20), 'M');

    Console.WriteLine($"{jdCompany.Name} employs {johnDoe.FirstName}, {analyst.FirstName} and {student.FirstName}");
}
```
