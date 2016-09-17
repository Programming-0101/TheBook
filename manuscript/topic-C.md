# Topic C – Starting Classes

## Overview

This topic introduces some of the basic syntax and grammar surrounding Object-Oriented Programming in C#. The following keywords are introduced. (Note that additional keywords from previous topics may also be present.)

• private 
• this 
• bool
• true 
• false
• DateTime

This topic will also introduce the following grammars, syntax and language constructs. (Note that additional concepts from previous topics may also be present.) 

• Private fields (encapsulation) 
• Public properties (encapsulation) 
• Constructor syntax 
• Object instantiation with parameterized constructors 
• Overriding the Object's ToString() method

### Daily LOGs

The following daily LOGs are covered in this package. 

#### OOP Basics

• Define the term "encapsulation" as used in OOP 
• Explain why encapsulation is a good design principle 
• Define the term “access specifier” and identify where it occurs in the code for a class
• List the two access specifiers that are used in this course
• Describe the difference between “private” and “public” members of a class
• Describe the concepts of "properties" as used in OOP 
• Define the term "backing store" as it applies to properties and fields
• Describe and explain the purpose and function of a constructor for a class
• Describe the syntax of a class constructor
• Identify when a class constructor is “called”
• Define the term "class scope" as used in OOP 
• Define the term "local scope" as used in OOP 
• Define the term "state" as applied to objects used in OOP 
• Define the term “override” as used in OOP
• Explain the purpose and function of the ToString() method and why we sometimes want to change its default behaviour when we create classes  
• Create simple class diagrams to represent classes 

#### General Programming Concepts and Terms 

• List three levels of scope

## Code Samples

The following examples are used to illustrate this topic.

1. Person - This simple class illustrates and introduces the idea of encapsulation (private fields with public properties). This example does not have a constructor. This example includes a driver. The driver is also used to illustrate how, with only fields & getter/setter methods, an object can be in an "unknown" (and invalid) state as soon as it is created; this idea is introduced to show the need for a constructor, and opens the discussion of the idea of a "default constructor". 
2. Account - This simple class also illustrates encapsulation, but with some of the fields being read-only. This necessitates the presence of a constructor. This example includes a driver which shows that a class is in a "known state" as soon as it is created. 
3. Student - This class reinforces the idea of encapsulation and constructors. It also introduces the idea of overloading the default toString() method that every class inherits from the Object class. This example includes a driver with multiple objects, showing how the use of constructors makes it easier to create many objects in a few lines of code. 
4. Employee + Company - These are other classes similar to the Person and Student classes, but the Employee class uses Auto-Implemented properties (new since C# 3.0). Lastly, these classes "share" a driver, illustrating the fact that any given "program" typically uses more than one class.

The following class diagrams detail the design of these examples.

### Person

This simple class illustrates and introduces the idea of encapsulation (private fields with public properties). This example does not have a constructor. This example includes a driver. The driver is also used to illustrate how, with only fields & getter/setter methods, an object can be in an "unknown" (and invalid) state as soon as it is created; this idea is introduced to show the need for a constructor, and opens the discussion of the idea of a "default constructor".

! -tba-image-Person Class Diagram](C-Person.png)

### Account

This simple class also illustrates encapsulation, but with some of the fields being read-only. This necessitates the presence of a constructor. This example includes a driver which shows that a class is in a "known state" as soon as it is created.

! -tba-image-Account Class Diagram](C-Account.png)

### Student

This class reinforces the idea of encapsulation and constructors. It also introduces the idea of overloading the default ToString() method that every class inherits from the Object class. This example includes a driver with multiple objects, showing how the use of constructors makes it easier to create many objects in a few lines of code.

! -tba-image-Student Class Diagram](C-Student.png)

### Company and Employee

These are other classes similar to the Person and Student classes, but the Employee class uses Auto-Implemented properties (new since C# 3.0). Lastly, these classes "share" a driver, illustrating the fact that any given "program" typically uses more than one class.
 
! -tba-image-Company Class Diagram](C-Company.png)

! -tba-image-Employee Class Diagram](C-Employee.png) 

## Practice Exercises

* Person - Extend the Person class to include a constructor. 
* Account – Extend the Account class from the example to include more information. Specifically, include an AccountType:String, BankName:String, BranchNumber:Integer, and InstitutionNumber:Integer.
* CanadianAddress - This class represents an address for some place in Canada.
* Course - This class represents a post-secondary course with a theory (exam) and a lab portion.
* ExamResult - This class represents the results of an exam for a student.
* LabResult - This class represents the results of an lab for a student.

### Person

This simple class illustrates and introduces the idea of encapsulation (private fields with public properties). This example uses a constructor for ensuring the state of an object when it is instantiated (created).

Extend the Person class from the example to include a constructor that takes in a first and last name as well as an age in the parameter list.

! -tba-image-Person Class Diagram](C-Person-2.png)
 
### Account

Extend the Account class from the example to include more information.

**Problem Statement:**

Extend the Account class from the example to include more information. Specifically, include an AccountType:String, BankName:String, BranchNumber:Integer, and InstitutionNumber:Integer. Base your solution on the following class diagram.

! -tba-image-Account Class Diagram](C-Account-2.png)

Also modify the driver to make use of the added information.

*Notes*

The branch number and the institution number together make up the Transit Number for a bank. "The bank transit number is 8 digits long. This is divided into a 5 digit branch number and 3 digit institution code, for example 10000-200." (See http://en.wikipedia.org/wikiSort_code)
For more information on bank accounts and transit numbers in Canada, see http://en.wikipedia.org/wiki/Routing_transit_number#Canadian_transit_number.

### CanadianAddress

This class represents an address for some place in Canada. 

**Problem Statement:**

Create the CanadianAddress class so that it can represent the majority of possible addresses that some place may have in Canada. Design the class to use auto-implemented properties as specified in this class diagram. No constructor is required for this class.

! -tba-image-CanadianAddress Class Diagram](C-CanadianAddress.png)
 
Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this namespace. In the driver, create two instances of the CanadianAddress class that represent your current address as well as the address of your school (use hard-coded data). 

### Course

This class represents a post-secondary course with a theory (exam) and a lab portion. 

**Problem Statement:**

Create the Course class so that it represents a post-secondary course. Design the class to have auto-implemented properties and a constructor as specified in this class diagram. Note that the auto-implemented properties should have their "set" implementations marked as private.

! -tba-image-Course Class Diagram](C-Course.png)
 
Also create a driver for testing this class; you may use any name for your driver as long as it is not already mentioned in this namespace. In the driver, instantiate all of the first term classes you are taking and populate those objects with data (use hard-coded data). 

### LabResult

This class represents the results of a lab for a student. 

**Problem Statement:**

Create the LabResult class so that it represents the results of a lab submitted by a student. Design the class to have the fields, properties, and constructor as specified in this document. Also create a ToString() method that describes the information in any given instance of this class.

Use an auto-implemented property for the MarksEarned; use fields as the "backing store" for all other properties.

Note that the following properties should not have "set" implementations: TotalMarks, LabNumber, LabWeight, and StudentId. 

! -tba-image-LabResult Class Diagram](C-LabResult.png)

Here are some XML comments to describe the ToString( ) method.

```csharp
/// <summary>
/// This method overrides the default ToString() method to display 
/// more meaningful information about this object.
/// </summary>
/// <returns>A string displaying the StudentId, MarksEarned, and 
/// TotalMarks.</returns>
/// <remarks>
/// A call to this method (such as <c>Lab4.ToString()</c>) 
/// would produce the following result:
/// <code>The student (200702694) received 24.5/35 for this lab.</code>
/// </remarks>
```

Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this namespace. In the driver, instantiate all of the labs you have submitted to date in any course and populate those objects with data (use hard-coded data); if you haven't had any labs as of yet, then make up some data.


### ExamResult

This class represents the results of an exam for a student. 

**Problem Statement:**

Create the ExamResult class so that it represents the results of an exam written by a student. Design the class to have the properties and constructors as specified in this document. (Note that there are two constructors for this class.) Also create a ToString( ) method that describes the information in any given instance of this class.

Use auto-implemented properties for the entire class. Note that only the following properties should have private "set" implementations: TotalMarks, ExamName, ExamWeight, and StudentId.

! -tba-image-ExamResult Class Diagram](C-ExamResult.png)
 
Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this namespace. In the driver, instantiate all of the exams you have taken to date in this course and populate those objects with data (use hard-coded data); if you need to, you may create fake data for the driver. 

