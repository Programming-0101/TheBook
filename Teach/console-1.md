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

```text
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

```text
Hello Dan
```
