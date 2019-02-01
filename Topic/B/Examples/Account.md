---
title: Topic B - Accounting Example
---
# Account

This simple class also illustrates fields. This example includes a driver.

* Data Attributes of the Account class:
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
