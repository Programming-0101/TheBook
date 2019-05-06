---
title: About Console I/O
---
# Interlude 1 - Console Input/Output

Console applications are often used as a means to learn how to program. In such applications, user input and output is solely text-based.

Sending text to the console is done through the `Console` class' `.Write()` and `.WriteLine()` methods. Simply pass some value into the those methods, and it will be displayed on the screen.

For example, try the following:

1. Create a C# console application named **UserIO**.
2. Modify the *Program.cs* file's `Main()` method to match the following.

```csharp
public static void Main(string[] args)
{
    System.Console.WriteLine("Hello World");
    System.Console.Write("The following text is output ");
    System.Console.Write("on the same line.");
    System.Console.WriteLine();
}
```

3. Run the program (press [[Ctrl]] + [[F5]]) and observe the output, which should look something like this:

```
Hello World
The following text is output on the same line.
Press any key to continue...
```

User input is performed by calling the `.ReadLine()` method, which will return a string. You use the method by storing the resulting user input into a variable. Modify your **UserIO** program above by adding the following lines to the end of the `Main()` method.

```csharp
    System.Console.Write("Type in your name and press [Enter]: ");
    string name = System.Console.ReadLine();
    System.Console.WriteLine("Hello " + name);
```

Asking the user to input enter information is referred to as "prompting" the user. The text output in the code `.Write("Type in your name and press [Enter]: ")` above is called the "user prompt". To complete the "prompting", a call to `.ReadLine()` will capture the user's input.

Notice also what we have done in the last line. We can take the user's input and concatenate it with the text `"Hello "` as we send it back out to the console. **String concatenation** is accomplished by "adding" strings together. The text `"Hello "` is a **string literal** while the `name` variable holds a string **value**. Thus, if the user entered "Dan" when prompted, the output would be

```
Hello Dan
```

An alternative to string concatenation is using the `string.Format()` method. The `.Format()` method works by including a "placeholder" in the string passed in as the first argument. Placeholders are written as a number inside of a set of curly braces. The number corresponds to the position of the arguments sent in after the first argument. Thus, we could have written that line as

```csharp
    System.Console.WriteLine(string.Format("Hello {0}", name));
```

Notice that the placeholder is `{0}`. The variable `name` is in the "zero-th" position after the literal text. You'll have an idea later on when we talk about arrays about why we start the number at 0 instead of 1.

The .`WriteLine()` method has a version that allows you to get the same result without calling `string.Format()`. Basically, this version makes use of the format method internally.

```csharp
    System.Console.WriteLine("Hello {0}", name);
```

Since version 6 of the C# programming language, a cleaner alternative to these formatting approaches is available. It's called [**string interpolation**](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated). Using string interpolation, the code could have been written as

```csharp
    System.Console.WriteLine($"Hello {name}");
```

String interpolation is indicated by the dollar sign immediately preceeding the literal string. This way of concatenating string values has the benefit of being easier to read and understand where variable values are being inserted into the text.
