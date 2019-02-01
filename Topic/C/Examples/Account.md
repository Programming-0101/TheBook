---
title: Topic C - Account Example
---
# Account

This simple class also illustrates encapsulation, but with one of the fields being read-only. This necessitates the presence of a constructor. This example includes a driver which shows that a class is in a "known state" as soon as it is created.

```csharp
public class Account
{
    private readonly int AccountNumber;
    private double _Balance;
    private double _OverdraftLimit;

    public double Balance
    {
        get { return _Balance; }
        set { _Balance = value; }
    }

    public double OverdraftLimit
    {
        get { return _OverdraftLimit; }
        set { _OverdraftLimit = value; }
    }

    public Account(int accountNumber, double balance, double overdraftLimit)
    {
        AccountNumber = accountNumber;
        Balance = balance;
        OverdraftLimit = overdraftLimit;
    }
}
```

```csharp
public static void Main(string[] args)
{
    Account savings = new Account(7654321, 100, 200);
    Console.WriteLine($"Account # {savings.AccountNumber} has a balance of ${savings.Balance}");
}
```
