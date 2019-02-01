---
title: A General-Purpose Driver
---
# Interlude 2 - A General-Purpose Driver

The following is a nice general-purpose console-based driver that can be used for the remaining topics.

```csharp
class Program
{
    #region Driver Method
    static void Main(string[] args)
    {
        string menuChoice;
        do
        {
            DisplayMenu();
            menuChoice = Console.ReadLine().ToUpper();
            ProcessMenuChoice(menuChoice);
        } while (menuChoice!="X");
    }
    #endregion

    #region General Purpose Methods
    private static void DisplayMenu()
    {
        Console.ForegroundColor = ConsoleColor.DarkGreen;

        Console.WriteLine("A) ");
        Console.WriteLine("B) ");
        Console.WriteLine("C) ");
        Console.WriteLine("X) ");
        Console.ResetColor();
        Console.Write("Select an option from the menu: ");
    }

    private static void ProcessMenuChoice(string choice)
    {
        switch(choice)
        {
            case "A":
                break;
            case "B":
                break;
            case "C":
                break;
            case "X":
                break;
            default:
                Console.ForegroundColor = ConsoleColor.DarkRed;
                Console.WriteLine("Invalid menu choice.");
                break;
        }
        Pause();
        Console.ResetColor();
    }

    private static void Pause()
    {
        Console.ForegroundColor = ConsoleColor.Gray;
        Console.WriteLine("\n\nPress any key to continue...");
        Console.ReadKey(true);
        Console.Clear();
    }
    #endregion

    #region Menu Processing Methods
    // TODO: Your specific menu processing methods.
    #endregion
}
```