# Topic E – Expressions and Math

## Overview

This topic introduces concepts surrounding the use of arithmetic expressions and common Math library routines.

This topic will introduce the following grammars, syntax and language constructs. (Note that additional concepts from previous topics may also be present.)

* Arithmetic expressions
* Assignment statements
* Automatic type conversion and casting
* Integer division
* String concatenation
* Math library routines and constants (such as Random, Square Root, and π)

This topic will also take a deeper look at the distinctive aspects of variables, values and data types as well as demonstrate the use of overloaded constructors. This is also the first foray into creating classes that actually "do something" – these classes not only maintain state but also provide methods to generate other information besides that which is stored in a class' fields.

### LOGs

#### OOP Basics

* Explain how method overloading is applied to constructors

#### General Programming Concepts and Terms

* Name at least three kinds of program statements commonly seen in all high-level programming languages
* Distinguish between Variables, Values and Data Types
* List the five basic rules governing variables, values and data types
* List the intrinsic (built-in) data types in C#
* Explain what is meant by the phrase "type extensibility"
* Define the terms Reference Type and Value Type as they apply to data types in C#
* Define the term Identifier
* Create and initialize variables in C#
* Explain what is meant by the terms "scope" and "lifetime" as they apply to variables
* Describe what is meant by the term "expression"
* Explain the difference between program statements and expressions as well as how the two relate to each other
* List the three general sets of operators in C#
* Describe the two basic rules of using arithmetic operators that every compiler must follow.
* Use the arithmetic operators to create arithmetic expressions
* Explain what is meant by "integer division" and how that can be useful in solving particular problems regarding numbers.
* Explain the purpose of the modulus (%) operator.
* List and describe how to use the various assignment operators in C#
* Explain the difference between binary and unary operators
* Demonstrate understanding of operator precedence and how to override the default precedence of the arithmetic operators
* Summarize and distinguish the rules for automatic type conversion involving arithmetic operators and the assignment operator
* Determine the final data type for expressions involving mixed data types and type conversion
* Describe "type casting" and explain how to use it appropriately.
* Compare and contrast the prefix and postfix behaviour of the unary arithmetic operators
* Identify and explain how to use the common Math library routines (for Power, Square Root, Absolute, random numbers, pi, trigonometry, and the various types of rounding)
* Use Math rounding methods with arithmetic expressions to round real numbers to a specific precision
* Create random whole number values within a specific range
* Use type casting appropriately in C#
* Create constants in C#
* Explain how arithmetic operations affect character values in C#
* List the most common math functions of the Math class
* Demonstrate how to use the various Math functions in simple programs
* List and describe the commonly used fields and methods of the String class
* Demonstrate how to use "String Arithmetic" (concatenation)
* List the equivalent "wrapper" classes for each of the primitive types. 

## Code Samples

The following examples are used to illustrate this topic. 

1. Calculator – This class introduces simple arithmetic operations, demonstrating simple addition and multiplication.
2. Person - This adaptation of the person class changes the previous design by replacing the age field with a "read-only" field for the person's birth date. The approximate age of the person is then calculated based on the current date and the birth date. 
3. Account - This class illustrates simple addition and calculation by allowing deposits and withdrawals. Note that changes to the balance can now only be made through deposits and withdrawals; the balance is now "read-only". 
4. ElapsedTime – This class demonstrates overloaded constructors and introduces the concepts of operator precedence and integer division.
5. ResolveExpressions – This class is used in conjuncture with several sample expressions that illustrate operator precedence and automatic type conversion.
6. Circle - This class represents a simple circle of a specified diameter. The radius, area and circumference are calculated. 
7. Square - This class represents a simple square with a specified length for its side. The area and perimeter are calculated. 
8. Fraction - This class represents a fraction as a numerator and denominator. It provides the double equivalent of the fraction's value as well as a string representation that uses the numerator and denominator. It demonstrates type casting and the integer division issue. 
9. Angle - This class represents an angle and provides the value in the following units: degrees, radians and grads. It also gives a simple example of unicode characters (for degrees). 
10. StockItem - This class represents an item that is part of an inventory. The item has an item name, a cost and a profit margin (which can be positive or negative). By using the profit margin, it can derive the price of the item. This example illustrates rounding. 
11. Die - This class represents a single six-sided die. This example is used to illustrate random number generation and casting. 
12. ParkingCounter - This class represents a simple counter to monitor whether a parking lot is full or not; it tracks vehicles entering and leaving the parking lot and allows the counter to be reset when the lot is full or empty. This class illustrates increment and decrement operators and/or the assignment increment or assignment decrement operators. 
13. QuadradicEquation - This class is used to solve for the two possible values of a quadratic formula where quadradic equals zero. This sample illustrates order of operations and parentheses.

### Calculator

This class introduces simple arithmetic operations, demonstrating simple addition and multiplication.

**Problem Statement**

Write the code that will act as a calculator for doing math. This first version must be a working prototype; as a prototype, it does not have to support all of the features of the final product. 

The solution must meet the following requirements:

* Should add two whole numbers.
* Should multiply two whole numbers.

Use the following class diagram when creating your solution. Since this class does not have properties or fields, make the methods static.

![Calculator Class Diagram](E-Calculator.png)

```csharp
public class Calculator
{
    public static int Add(int firstNumber, int secondNumber)
    {
        return firstNumber + secondNumber;
    }

    public static int Multiply(int firstNumber, int secondNumber)
    {
        return firstNumber * secondNumber;
    }
}
```

### Person

This adaptation of the person class changes the previous design by replacing the age field with a "read-only" field for the person's birth date. The approximate age of the person is then calculated based on the current date and the birth date. 

**Problem Statement**

Write the code that will represent a person with a first and last name and a date of birth.
The solution must meet the following requirements (new requirements are in **bold**):
* Should get and set the first and last name
* **Should get the birth date**
* **Should get the person's approximate age (which is the age that the person will turn to in the current year)**
* **Should get the person's initials**
* Should override ToString() to get the person's full name (as first name then last name)

Use the following class diagram when creating your solution.

![Person Class Diagram](E-Person.png)
 
```csharp
public class Person
{
    public string FirstName { get; set; }

    public string LastName { get; set; }

    public DateTime BirthDate { get; private set; }

    public int Age
    {
        get
        {
            int currentAge = 0;
            currentAge = DateTime.Today.Year - BirthDate.Year;
            return currentAge;
        }
    }
    public Person(string firstName, string lastName, DateTime birthDate)
    {
        FirstName = firstName;
        LastName = lastName;
        BirthDate = birthDate;
    }


    public override string ToString()
    {
        return FirstName + " " + LastName;
    }

    public string Initials
    {
        get
        {
            return FirstName[0] + "." + LastName[0] + ".";
        }
    }
}
```

### Account

This class illustrates simple addition and calculation by allowing deposits and withdrawals. Note that changes to the balance can now only be made through deposits and withdrawals; the balance is now "read-only". 

**Problem Statement**

Write the code that will represent a simple bank account. 

The solution must meet the following requirements (new requirements are in **bold**):

* Should get the bank name, branch number, institution number, account number, balance, overdraft limit, and account type
* Should allow the overdraft limit to be set
* **Should support deposits and withdrawals**

Use the following class diagram when creating your solution.

![Account Class Diagram](E-Account.png)

```csharp
  public void Withdraw(double amount)
  {
      Balance -= amount;
  }

  public void Deposit(double amount)
  {
      Balance += amount;
  }
```

### ElapsedTime

This class demonstrates overloaded constructors and introduces the concepts of operator precedence and integer division.

**Problem Statement**

Write the code that will represent a period of elapsed time for a competitor in a marathon. It should be able to represent its information in two forms:

* Hours, minutes and seconds, and
* Total seconds. 

The solution must meet the following requirements:

* Should calculate the hours, minutes and seconds given the total seconds
* Should calculate the total seconds given the hours, minutes and seconds

Use the following class diagram when creating your solution.

![ElapsedTime Class Diagram](E-ElapsedTime.png)

```csharp
public class ElapsedTime
{
    public ElapsedTime(int hours, int minutes, int seconds)
    {
        TotalSeconds = hours * 60 * 60;
        TotalSeconds += minutes * 60;
        TotalSeconds += seconds;

        Hours = hours;
        Minutes = minutes;
        Seconds = seconds;
    }

    public ElapsedTime(int totalSeconds)
    {
        Hours = totalSeconds / (60 * 60);
        Minutes = (totalSeconds - Hours * 60 * 60) / 60;
        Seconds = totalSeconds - Hours * 60 * 60 - Minutes * 60;

        TotalSeconds = totalSeconds;
    }

    public int Hours { get; private set; }

    public int Minutes { get; private set; }

    public int Seconds { get; private set; }

    public int TotalSeconds { get; private set; }
}
```

### ResolveExpressions

This class is used in conjuncture with several sample expressions that illustrate operator precedence and automatic type conversion.

**Problem Statement**

Write the code that will provide the final value for the expressions in the following exercise (as a solution for a student's exercise).

***Expressions Exercise***

On a piece of paper, evaluate the following expressions to show the final value and the data type of the final value. Show the order in which the operations are evaluated.

1. 10.0 + 15 / 2 + 4.3
2. 8 / 5 + 1.25
3. 10.0 + 15.0 / 2 + 4.3
4. 3.0 * 4 / 6 + 6
5. 3.0 * (4 % 6) + 6
6. 3 * 4.0 / 6 + 6
7. 20.0 - 2 / 6 + 3
8. 10 + 17 % 3 + 4
9. (10 + 17) % 3 +4.0
10. 10 + 17 / 4.0 + 4

The solution for question 2 is provided as an example. Use the accompanying class diagram when creating your coded solution as proof of your final answers.

![](E-ExpressionResolutionBreakdown.png) ![](E-Resolve-Expressions.png)

```csharp
namespace Topic.E.Examples
{
    public class ResolveExpressions
    {
        public static double Sample1
        { get { return 10.0 + 15 / 2 + 4.3; } }

        public static double Sample3
        { get { return 10.0 + 15.0 / 2 + 4.3; } }

        public static double Sample4
        { get { return 3.0 * 4 / 6 + 6; } }

        public static double Sample5
        { get { return 3.0 * (4 % 6) + 6; } }

        public static double Sample6
        { get { return 3 * 4.0 / 6 + 6; } }

        public static double Sample7
        { get { return 20.0 - 2 / 6 + 3; } }

        public static int Sample8
        { get { return 10 + 17 % 3 + 4; } }

        public static double Sample9
        { get { return (10 + 17) % 3 + 4.0; } }

        public static double Sample10
        { get { return 10 + 17 / 4.0 + 4; } }
    }
}
```

### Circle

This class represents a simple circle of a specified diameter. The radius, area and circumference are calculated. 

**Problem Statement**

Write the code for the Circle class. The solution must meet the following requirements:

* Should get and set the diameter
* Should calculate the area, radius, and circumference

Use the following class diagram when creating your solution.

![Circle Class Diagram](E-Circle.png)
 
```csharp
using System;
namespace Topic.E.Examples
{
    public class Circle
    {
        public Circle(double diameter)
        {
            this.Diameter = diameter;
        }

        public double Diameter { get; set; }

        public double Radius
        { get { return Diameter / 2; } }

        public double Circumference
        { get { return Math.PI * Diameter; } }

        public double Area
        { get { return Math.PI * Radius * Radius; } }
    }
}
```

### Square

This class represents a simple square with a specified length for its side. The area and perimeter are calculated. 

**Problem Statement**

Write the code for the Square class. The solution must meet the following requirements:

* Should get and set the length of the side of the square
* Should calculate the area and perimeter

Use the following class diagram when creating your solution.

![Square Class Diagram](E-Square.png)

```csharp
namespace Topic.E.Examples
{
    public class Square
    {
        public Square(double side)
        {
            this.Side = side;
        }

        public double Side { get; set; }

        public double Area
        {
            get { return Side * Side; }
        }

        public double Perimeter
        {
            get { return Side * 4; }
        }
    }
}
```

### Fraction

This class represents a fraction as a numerator and denominator. It provides the double equivalent of the fraction's value as well as a string representation that uses the numerator and denominator. It demonstrates type casting and the integer division issue. 

**Problem Statement**

Write the code for the Fraction class. The solution must meet the following requirements:

* Should get the string representation of the fraction, as "____numerator____/____denominator____"
* Should get the numeric value of the fraction (as a real number)
* Should get the reciprocal of the fraction

Use the following class diagram when creating your solution.

![Fraction Class Diagram](E-Fraction.png)

```csharp
public class Fraction
{
    public int Numerator { get; private set; }

    public int Denominator { get; private set; }

    public Fraction(int numerator, int denominator)
    {
        Numerator = numerator;
        Denominator = denominator;
    }

    public Fraction Reciprocal
    {
        get { return new Fraction(Denominator, Numerator); }
    }

    public override string ToString()
    {
        string stringValue = "";
        stringValue += Numerator + "/" + Denominator;
        return stringValue;
    }

    public double ToDouble()
    {
        // The casting of numerator to a double helps
        // ensure that we don't lose any fractional
        // portion due to integer division.
        double value = (double)(Numerator) / Denominator;
        return value;
    }
}
```

### Angle

This class represents an angle and provides the value in the following units: degrees, radians and grads. It also gives a simple example of unicode characters (for degrees).

**Problem Statement**

Write the code for the Angle class. The solution must meet the following requirements:

* Should get and set the angle's value (in degrees)
* Should calculate the equivalent angle in Radians and Grads, using the following formulas:
* Radians = Degrees * (π / 180)
* Grads = Radians * (200 / π)
* Should override the ToString() method to return the angle in degrees, in the following format:
* degrees°
* The Unicode character for the degrees symbol (°) is '\u00B0'

Use the following class diagram when creating your solution.

![Angle Class Diagram](E-Angle.png)

```csharp
using System;
namespace Topic.E.Examples
{
    public class Angle
    {
        public Angle(double degrees)
        {
            this.Degrees = degrees;
        }

        public double Degrees { get; set; }

        public double Radians
        {
            get
            {
                double radians = Degrees * (Math.PI / 180);
                return radians;
            }
        }

        public double Grads
        {
            get
            {
                double grads = Radians * (200 / Math.PI);
                return grads;
            }
        }

        // http://unicode.org/notes/tn28/UTN28-PlainTextMath.pdf
        // Page 40 of the above reference for the degree symbol
        public override string ToString()
        {
            return Degrees.ToString() + '\u00B0';
        }
    }
}
```

### StockItem

This class represents an item that is part of an inventory. The item has an item name, a cost and a profit margin (which can be positive or negative). By using the profit margin, it can derive the price of the item. This example illustrates rounding.

**Problem Statement**

Write the code for the StockItem class. The solution must meet the following requirements:

* Should get and set the name, cost and profit margin of the stock item
* Should represent the profit margin as a percent; a value of 45 means 45%
* Should calculate the price of the item, to the nearest cent
* Use the rounding where values under a half-cent are rounded down and values greater than or equal to a half-cent are rounded up

Use the following class diagram when creating your solution.

![StockItem Class Diagram](E-StockItem.png)
 
```csharp
using System;
namespace Topic.E.Examples
{
    public class StockItem
    {
        public double Cost { get; set; }

        public double ProfitMargin { get; set; }

        public StockItem(string itemName, double cost, double profitMargin)
        {
            this.ItemName = itemName;
            this.Cost = cost;
            this.ProfitMargin = profitMargin;
        }

        public string ItemName { get; set; }

        public double Price
        {
            get
            {
                // Round to the nearest cent
                double price = Cost;
                price += Cost * (ProfitMargin / 100);
                return Math.Round(price * 100) / 100.0;
            }
        }
    }
}
```

### Die

This class represents a single six-sided die. This example is used to illustrate random number generation and casting.

**Problem Statement**

Write the code for the Die class. The solution must meet the following requirements:

* Should generate a random value from 1 to 6, when initially created and when re-rolled
* Should get the face value of the die

Use the following class diagram when creating your solution. Note that this uses the Random class as a private static field.

![Die Class Diagram](E-Die.png)

```csharp
using System;
namespace Topic.E.Examples
{
    public class Die
    {
        private static Random rnd = new Random();

        public Die()
        {
            Roll();
        }

        public int FaceValue { get; private set; }

        public void Roll()
        {
            FaceValue = rnd.Next(6000) % 6 + 1;
        }
    }
}
```

### ParkingCounter

This class represents a simple counter to monitor whether a parking lot is full or not; it tracks vehicles entering and leaving the parking lot and allows the counter to be reset when the lot is full or empty. This class illustrates increment and decrement operators and/or the assignment increment or assignment decrement operators.

**Problem Statement**

Write the code that will monitor vehicles entering and leaving a parking lot. The solution must meet the following requirements:

* Should track vehicles entering
* Should track vehicles leaving
* Should get total parking spots
* Should get open (empty) spots
* Should reset lot as full (that is, fill the parking lot)
* Should reset lot as empty (that is, clear all the parking spots of vehicles)

Use the following class diagram when creating your solution.

![ParkingCounter Class Diagram](E-ParkingCounter.png) 

```csharp
namespace Topic.E.Examples
{
    public class ParkingCounter
    {
        public int ParkingSpots { get; private set; }

        public int OpenSpots { get; private set; }

        public ParkingCounter(int parkingSpots)
        {
            this.ParkingSpots = parkingSpots;
            this.OpenSpots = parkingSpots;
        }

        public ParkingCounter(int parkingSpots, int numberOfCars)
        {
            this.ParkingSpots = parkingSpots;
            this.OpenSpots = this.ParkingSpots - numberOfCars;
        }

        public void Leave()
        {
            OpenSpots++;
        }

        public void Enter()
        {
            OpenSpots--;
        }

        public void ResetLotAsEmpty()
        {
            OpenSpots = ParkingSpots;
        }

        public void ResetLotAsFull()
        {
            OpenSpots = 0;
        }
    }
}
```

### QuadradicEquation

This class is used to solve for the two possible values of a quadratic formula where quadratic equals zero. It is based off of the following formula.

![](E-QuadraticFormula.png)

This sample illustrates order of operations and parentheses.

**Problem Statement**

Write the code that will represent a quadratic equation that has a higher and lower root. It is to use the Quadratic formula, which states:

For `ax^2 + bx + c = 0`$, the value of ***x*** is given by

![](E-QuadraticFormula.png)
 
More information on the quadratic formula can be found at http://www.purplemath.com/modules/quadform.htm.

The solution must meet the following requirements:

* Should get the lower root, using the quadratic formula
`x=(-b-√(b^2-4ac))/2a`$
* Should get the higher root, using the quadratic formula
`x=(-b+√(b^2-4ac))/2a`$
* Should overload the ToString() method to represent the quadratic formula showing the values for ***a***, ***b*** and ***c*** in the following format:
  ***____a____x2 + ____b____x + ____c____ = 0***
  For example, given the values of 1, 3 and -4 for ***a***, ***b*** and ***c*** respectively, the method should produce
  ***1x2 + 3x + -4 = 0***

Use the accompanying class diagram when creating your solution.

![QuadraticEquation Class Diagram](E-QuadradicEquation.png)

```csharp
using System;
namespace Topic.E.Examples
{
    public class QuadraticEquation
    {
        private int a;
        private int b;
        private int c;

        public QuadraticEquation(int a, int b, int c)
        {
            this.a = a;
            this.b = b;
            this.c = c;
        }

        public double LowerRoot
        {
            get
            {
                double value;
                value = (-b - Math.Sqrt(b * b - 4 * a * c)) / (2 * a);
                return value;
            }
        }

        public double HigherRoot
        {
            get
            {
                double value;
                value = (-b + Math.Sqrt(b * b - 4 * a * c)) / (2 * a);
                return value;
            }
        }


        public override string ToString()
        {
            return a.ToString() + "x^2 + " + b + "x + " + c + " = 0";
        }
    }
}
```

## Practice Exercises

* Calculator – This exercise expands on the original Calculator class to perform subtraction and division with integers.
* Fraction – This exercise expands on the original Fraction class to include methods that allow for adding, subtracting, multiplying, and dividing fractions.
* Square – This exercise expands on the original Square class to include a method that determines the diagonal of a square.
* Coordinate – ***Not Yet Implemented*** The Coordinate class represents a geographical co-ordinate for either longitude or latitude. A Coordinate's value can be expressed either as a real number or as degrees, minutes and seconds. It makes use of integer division and overloaded constructors.
* PaintEstimator – The PaintEstimator class is used to estimate the number of paint cans needed for painting a simple room (with or without a window). It makes use of a constant and the Math library; it also uses overloaded constructors.
* BulkItem – The BulkItem class represents products that are available in bulk and shows the cost of individual items. It makes use of rounding (to two decimal places).
* Die - This exercise expands on the original Die class to allow for creating a die of any number of sides, with a default of six sides. This means that there is an overloaded constructor. 
* RoundingCalculator – This exercise demonstrates rounding using separate methods for each level of rounding precision.
* GenericRoundingCalculator – This exercise demonstrates rounding to the nearest whole number of fractional number using a couple of "generic" methods.
* PeopleCounter – This simple class is used to count the number of people who have entered a store in a single day. It takes a simplistic approach, counting each person entering and leaving, estimating the number of people for the day by dividing the total count by two.
* ScoreCard – ***Not Yet Implemented*** This class represents a scorecard for tracking bowling scores frame by frame. It produces a final tally for the game, as well as the current score and the current frame. 
* Cylinder – The Cylinder class represents a cylindrical object whose height and radius is known. The class provides methods to calculate the volume and surface area.
* Cone – The Cone class represents a conical object whose height and base radius is known. The class provides methods to determine the volume and surface area with this information.
* GravityCalculator – The GravityCalculator provides static methods for determining an object's weight for the various planets in our solar system, given the equivalent weight as found on Earth.
* CurrencyCalculator – The CurrencyCalculator allows the conversion of US dollars to four other currencies, given the current exchange rate of those currencies.

For these exercises, compare your results with the unit tests for these classes.

### Calculator

This exercise expands on the original Calculator class to perform subtraction and division with integers.

**Problem Statement**

Write the code that will act as a calculator for doing math. This version is a follow-up on the previous prototype; now it should support subtraction and division.

The solution must meet the following requirements:

* Should add two whole numbers.
* Should multiply two whole numbers.
* Should subtract two whole numbers.
* Should divide two whole numbers.

Use the following class diagram when creating your solution.

![Calculator Class Diagram](E-Calculator-2.png)

### Fraction

This exercise expands on the original Fraction class to include methods that allow for adding, subtracting, multiplying, and dividing fractions.

**Problem Statement**

Write the code needed to expand the capabilities of the Fraction class. The class must now support the ability to add, subtract, multiply, and divide fractions as well as allow the individual numerator and denominator values to be seen. The solution must meet the following requirements:

* Should get the string representation of the fraction, as "numerator/denominator"
* Should get the numeric value of the fraction (as a real number)
* Should get the reciprocal of the fraction
* Should get the numerator and denominator
* Should add another fraction to its existing value
* Should subtract another fraction from its existing value
* Should multiply its existing value by another fraction
* Should divide its existing value by another fraction

As an assist, the following code can be used for the multiplication method.

```csharp
  public void multiplyBy(Fraction otherFraction)
  {
      this.numerator = this.numerator * otherFraction.numerator;
      this.denominator = this.denominator * otherFraction.denominator;
  }
```

Use the following class diagram when creating your solution.

![Fraction Class Diagram](E-Fraction-2.png)

### Square

This exercise expands on the original Square class to include a method that determines the diagonal of a square.

**Problem Statement**

Write the code needed to add the ability for a Square to determine the length of its diagonal. The solution must meet the following requirements:

* Should get and set the length of the side of the square.
* Should calculate the area, perimeter, and diagonal of the square.

Use the following class diagram when creating your solution.

![Square Class Diagram](E-Square-2.png)

### Coordinate

***Not Yet Implemented*** The Coordinate class represents a geographical co-ordinate for either longitude or latitude. A Coordinate's value can be expressed either as a real number or as degrees, minutes and seconds. It makes use of integer division and overloaded constructors.

**Problem Statement**

Write the code needed to represent a geographical co-ordinate for longitude and latitude. The solution must meet the following requirements:

* Should get the type of coordinate (such as "longitude" or "latitude")
* Given the hours, minutes and seconds, it
  * should calculate coordinate value as a real number
  * should get hours, minutes, and seconds
* Given the coordinate value as a real number, it
  * should calculate the hours, minutes and seconds
  * should get the coordinate value as a real number

Use the following class diagram when creating your solution.

![Coordinate Class Diagram](E-Coordinate.png)

### PaintEstimator

The PaintEstimator class is used to estimate the number of paint cans needed for painting a simple room (with or without a window). It makes use of a constant and the Math library; it also uses overloaded constructors.

**Problem Statement**

Write the code needed to help a painter to estimate the number of paint cans to paint simple rooms (with or without a window). The solution must meet the following requirements:

* Uses a constant value of 8.0 for the paint coverage. (8 square metres per can)
* Should get room height, width, and length
* Should get and set the window's width and height
* Should calculate the number of paint cans for the room and the window
* Should calculate the surface area to be painted
* The room's height, length and width should have a private set property.

Use the following class diagram when creating your solution.

![PaintEstimator Class Diagram](E-PaintEstimator.png)

## BulkItem

The BulkItem class represents products that are available in bulk and shows the cost of individual items. It makes use of rounding (to two decimal places).

**Problem Statement**

Write the code for the BulkItem class. The solution must meet the following requirements:

* Should get and set the cost and quantity of the bulk item
* Should calculate the cost for each item in the bulk item
* Should properly round values for currency (either the US or Canadian dollar)
* The Quantity property's set should be private.

Use the following class diagram when creating your solution.
 
### Die

This exercise expands on the original Die class to allow for creating a die of any number of sides, with a default of six sides. This means that there is an overloaded constructor. 

**Problem Statement**

Modify the Die class from the examples to support multi-sided die other than just the standard six sides. The solution must meet the following requirements (new requirements are in **bold**):

* The Sides and FaceValue properties' set should be private.
* Should generate a six-sided die by default
* Should get the number of sides of the die
* Should randomly generate each side (if rolled enough); for example, if the die has ten sides, it should eventually roll a 1, 2, 3, 4, 5 6, 7, 8, 9, and 10

Use the following class diagram when creating your solution.

![Die Class Diagram](E-Die-2.png)

### RoundingCalculator

This exercise demonstrates rounding using separate methods for each level of rounding precision.

**Problem Statement**

Write the code needed to provide rounding of various degrees of accuracy. The solution must meet the following requirements:

* All of the methods should be static.
* Should correctly round up to the nearest thousand
* Should correctly round down to the nearest thousand
* Should correctly round up to the nearest hundred
* Should correctly round down to the nearest hundred
* Should correctly round up to the nearest ten
* Should correctly round down to the nearest ten
* Should correctly round up to the nearest one
* Should correctly round down to the nearest one
* Should correctly round up to the nearest tenth
* Should correctly round down to the nearest tenth
* Should correctly round up to the nearest hundredth
* Should correctly round down to the nearest hundredth

Use the following class diagram when creating your solution.

![RoundingCalculator Class Diagram](E-RoundingCalculator.png)

### GenericRoundingCalculator

This exercise demonstrates rounding to the nearest whole number of fractional number using a couple of "generic" methods.

**Problem Statement**

Write the code needed to perform rounding to either whole numbers or fractions at a specified level of precision. The solution must meet the following requirements:

* All of the methods should be static.
* Should correctly round up or down to the nearest whole number, such as
  * the nearest thousand
  * the nearest hundred
  * the nearest ten
  * the nearest one
* Should correctly round up or down to the nearest fractional value, such as
  * the nearest tenth
  * the nearest hundredth

Use the following class diagram when creating your solution.

![GenericRoundingCalculator Class Diagram](E-GenericRoundingCalculator.png)

### PeopleCounter

This simple class is used to count the number of people who have entered a store in a single day. It takes a simplistic approach, counting each person entering and leaving, estimating the number of people for the day by dividing the total count by two.

**Problem Statement**

Write the code needed to track people entering and leaving a store. It must be able to estimate the number of people that have entered the store at the end of the day. The solution must meet the following requirements:

* The Count property should have a private set.
* Should default to having a count of zero people when first started up
* Should increment by one (that is, count a single person)
* Should increment by a specified quantity (for when a group of people enter)
* Should adequately estimate the number of people who entered the store, assuming that each person who enters also leaves the store
  * Each estimate should be rounded down; for example, if 15 people are counted, then the estimate should be for only 7 (not 7.5 or 8)

Use the following class diagram when creating your solution.

![PeopleCounter Class Diagram](E-PeopleCounter.png)

### ScoreCard

***Not Yet Implemented*** This class represents a scorecard for tracking bowling scores frame by frame. It produces a final tally for the game, as well as the current score and the current frame. 

**Problem Statement**

Write the code needed to.

The solution must meet the following requirements:

* Should

Use the following class diagram when creating your solution.


### Cylinder

The Cylinder class represents a cylindrical object whose height and radius is known. The class provides methods to calculate the volume and surface area.

**Problem Statement**

Write the code for the Cylinder class that meets the following requirements:

* The Radius and Height properties should have a private set.
* Should get the radius and the height
* Should calculate the volume and the surface area
  * `Volume of a Cylinder = pi * r^2 * h`$
  * `Surface Area of a Cylinder = 2 * pi * r^2 + 2 * pi * r * h`$

Use the following class diagram when creating your solution.

![Cylinder Class Diagram](E-Cylinder.png)

### Cone

The Cone class represents a conical object whose height and base radius is known. The class provides methods to determine the volume and surface area with this information.

**Problem Statement**

Write the code for the Cone class that meets the following requirements:

* The Radius and Height properties should have a private set.
* Should get the radius and the height
* Should calculate the volume and the surface area
  * `Volume of a Cone = 1/3 * pi * r^2 * h`$
  * `Surface Area of a Cone = pi * r^2 + pi * r * sqrt(r^2 + h^2)`$

Note that the portion `sqrt(r^2 + h^2)`$ is known as the slant height.

Use the following class diagram when creating your solution.

![Cone Class Diagram](E-Cone.png)

### GravityCalculator

The GravityCalculator provides static methods for determining an object's weight for the various planets in our solar system, given the equivalent weight as found on Earth.

**Problem Statement**

Write the code needed to convert Earth weights to their equivalent for the other planets in our solar system. The solution must meet the following requirements:

* All the methods should be static.
* Should convert a weight in Earth kilograms to their equivalent weight on
  * Mercury
  * Venus
  * Mars
  * Jupiter
  * Saturn
  * Uranus
  * Neptune
* For information on equivalent weights among the planets, see these URLS.
  * NinePlanets.org
  * http://www.serve.com/chunter/index/info/aweigh.html

Use the following class diagram when creating your solution.

![GravityCalculator Class Diagram](E-GravityCalculator.png)

### CurrencyCalculator

The CurrencyCalculator allows the conversion of US dollars to four other currencies, given the current exchange rate of those currencies.

**Problem Statement**

A currency exchange store at the international airport needs a program to convert from US dollars to four other currencies: Canadian dollar, Euro, Japanese Yen, and the Great Britain Pound. The store uses a set exchange rate for each currency as established at the start of the day. Write the code for a class called CurrencyCalculator to meet this need. The solution must meet the following requirements:

* Should correctly convert US dollars to the 
  * British Pound (GBP)
  * Canadian Dollar (CAD)
  * Euro (EUR)
  * Japanese Yen (JPY)
* Should use the correct level of precision when making the exchange; each currency uses a different number of significant digits:
  * CAD, GBP and EUR use two digits
  * JPY uses three digits

To illustrate the possible exchange rates, please refer to the following images.

![Currency exchange rates sourced from http://www.x-rates.com](E-CurrencyExchange.png)

![](E-CurrencyAmericanDollar.png)

Use the following class diagram when creating your solution.

![CurrencyCalculator Class Diagram](E-CurrencyCalculator.png)

As a starter, you can use the following code to begin creating your class.

```csharp
public class CurrencyCalculator
{
    // The following are multipliers to convert the
    // US dollar to different currencies.
    /* The multiplier to convert US dollars to Canadian dollars. */
    private double _ToCanadian;  // CAD - Canadian Dollar
    /* The multiplier to convert US dollars to the Euro. */
    private double _ToEuro;      // EUR - Euro
    /* The multiplier to convert US dollars to the Japanese Yen. */
    private double _ToYen;       // JPY - Japanese Yen
    /* The multiplier to convert US dollars to the British Pound. */
    private double _ToPound;     // GBP - Great Britain Pound
    
    /* The number of significant digits for the Canadian dollar.
     * The unit for portions of a dollar is the Cent. */
    private static int _CadDigits = 2; // Cents
    /* The number of significant digits for the Euro.
     * The unit for portions of a dollar is the Cent. */
    private static int _EuroDigits = 2; // Cents
    /* The number of significant digits for the Japanese Yen.
     * The unit for 1/100<sup>th</sup> portions of the Yen is the Sen,
     * while each 1/1000<sup>th</sup> is known as a Rin. */
    private static int _YenDigits = 3; // 1/100 is sen, 1/1000 is rin
    /* The number of significant digits for the British Pound.
     * The unit for portions of a Pound is the Pence (or P). */
    private static int _PoundDigits = 2; // Pence (or p)
    
    /*
     * This constructor initializes a CurrencyCalculator object
     * by taking the supplied parameter values and storing
     * them in the fields of this instance of the class.
     */
    public CurrencyCalculator(double toCanadian, double toEuro, double toYen,
            double toPound)
    {
        // Your code goes here...
    }

    /* ************** Methods **************** */
    // Your code goes here...
}
```
