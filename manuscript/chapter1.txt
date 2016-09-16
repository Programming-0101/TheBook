# What is a Computer Program

## Introduction

What is a computer program? A computer program is basically a set of instructions for manipulating information. To be of any value, the information used by a computer program must have a way to get into the program (input) and get out of the program (output). That may sound too simplistic, but ultimately it is entirely accurate; even the most sophisticated computer program can do nothing more than process information (albeit, in a very fast and efficient way), and no matter how cool the program looks, if there is no way to put information into it and get information out of it then it’s not of much use to anyone.

The most familiar kind of input and output (or I/O) in a computer program comes from the user. Textual information is entered (input) from the user via the keyboard and displayed (output) to the user via the monitor. Other means of user I/O can include computer mice, microphones, speakers, printers, fax machines, Braille readers, touch screens, stylus, etc.

Besides handling user I/O, computer programs can also do file or database I/O. Computer files and databases allow information to be persistent. Information is said to be persistent when it can be stored outside of the computer program and later retrieved for further processing. The combination of a) user I/O, b) fast and accurate processing, and c) persistent information storage is what makes computer programs so useful.

## Variables, Values and Data Types

### It's All About Information

Since computer programs are all about handling information, it is important to understand something about the different kinds of information programs deal with. Essentially, most information falls into one of the following categories:

- Numeric information (e.g.: a person's age or the price of a vehicle)
- Textual information (e.g.: the title of a book)
- Conceptual information (e.g.: truth - whether a statement is considered true or false)

These different kinds of information can be said to be primitive. They represent the most basic kind of data that today's computer programs have to deal with. These three kinds of information can be further subdivided into fundamental data types:

|=========================|=======================================================|
| Category of Information |	Basic Data Types                                      |
|=========================|=======================================================|
| Numeric                 | Integer - whole numbers                               |
|                         |-------------------------------------------------------|
|                         | Real - numbers with fractional components             |
|                         |-------------------------------------------------------|
|                         | Currency - numbers representing monetary values       |
|-------------------------|-------------------------------------------------------|
| Textual                 | Character - a single letter or symbol                 |
|                         |-------------------------------------------------------|
|                         | String - a set of characters (with or without spaces) |
|-------------------------|-------------------------------------------------------|
| Conceptual              | Boolean - true/false, yes/no, on/off                  |
|=========================|=======================================================|

Any meaningful handling of information requires the understanding of three related (but distinct) concepts: variables, values, and data types.

In order for a computer program to manipulate information, it needs a way to hold or refer to information. This is the concept of a variable. A variable is a name or identifier used to refer to a single piece of information. It acts like a container that allows a program to refer to a piece of information indirectly, without being dependent on the exact content of that information. One analogy is that a variable is like a cup: a cup can be used to hold different kinds of liquids (water, juice, or even motor oil). The cup is independent of the liquid (the cup can even be empty), but it provides an effective way of working with a liquid (for example, measuring the amount of water used in a recipe).

Besides the idea of a variable that can hold information, there is the concept of a value. Unlike a variable (which is only used to refer to a piece of information), a value is the specific information contained in a variable. Returning to the previous analogy of a cup, a value is like the specific liquid inside the cup (variable). What does a particular cup hold? Is it water or motor oil? The cup is not what's really important; what's important is what is in the cup (especially if you are making a recipe!).

The final concept is one that has already been alluded to: the idea of a data type. A data type refers to the kind of information that a variable can hold. For example, the kind of material that a cup is designed to hold is a liquid. The description "liquid" is a description of the type of content that the cup can hold. A plate, on the other hand, is designed to hold a different kind of material - something that is solid (such as a steak or chicken cordon bleu). More specifically, the "data type" that a plate is intended to hold is "food" and steak would qualify as a type of food while motor oil would not. Notice that the concept of data type (e.g.: "food") can be applied to both the variable (plate) and the value (steak).

This brings up an important consideration: The data type of a variable should be appropriate for the kind of information the variable is intended to hold. There is a close relationship between variables, values and data types, even though those three ideas refer to different things. Cups are used to hold liquids; plates are used to hold food; and a balloon is used to hold a gas. It would be entirely inappropriate (if not impossible) to use a balloon to hold a piece of cake! Using these analogies, the concepts of variable, value and data type can be clearly distinguished:

Variable	Value	Data Type
Cup	Orange Juice	Liquid
Plate	Black Forest Cake	Food
Balloon	Helium	Gas

Returning to the way these concepts are used in a computer program, the following table gives some examples of variables and values for the data types fundamental to most high-level programming languages.

Variable	Value	Data Type
Age	25	Integer
PI	3.14159	Real
Cost	$4.95	Currency
Gender	'M'	Character
Title	"Computer Basics 101"	String
Success	True	Boolean
Rules About Variables, Values and Data Types

It has been stated that while variables, values and data types are distinct concepts, they are closely related. This close association between these concepts allows us to work with and manipulate information. Before we can begin working with these concepts in a simple program, however, we need to establish some basic rules about how to work with variables, values and data types.

The first rule has already been alluded to in the previous section: The data type of a value must match the data type of the variable that stores the value. This rule is closely related to a second rule: A variable and its data type must be declared before the variable can be used. Whenever a variable name is first identified in a computer program, the data type of the variable must be declared. Stating, or declaring, what the data type of a variable is will allow a computer program to know two things:

- How much computer memory must be set aside for the variable's value.
- How to interpret a value stored in a variable.

A variable cannot be used until it is declared, and once a variable's data type has been identified it can only hold values that match that data type. For example, if a variable called Status has been declared as a character, then it can only hold a character value (such as 'T' or '5'). Any attempt to store a value of a different type (such as "Temporary") in Status would produce an error in the computer program.

A third rule that is related to the second is that once a variable's data type has been declared, its data type cannot be changed. This is because a variable's data type tells the computer how to interpret the variable's value (e.g.: is it a character or a number?), and any attempt to change the data type would result in a misinterpretation of the previously stored value.

Another rule is that each primitive variable in a computer program can only hold a single value at any given moment in time. The reason for this rule is so that the computer knows what value to supply when a variable is used in the program. In fact, when a primitive variable's data type is declared, the computer sets aside enough memory to store only one value - no more! If a new value is stored in the variable, then any previously stored value is lost. This also gives an advantage to the programmer - it is easier to plan for and test a computer program if you can predict what value will be stored in the variable. Since a variable can only hold one value at a time, it is not unusual for a computer program to use many variables.

Notice that this last rule applies to variables with primitive data types. Often, computer programs allow the creation of more complex data types, such as classes and arrays. The rule of a variable storing only one value changes slightly for these complex types. In the case of classes, one variable whose type is based on a class can only store one object (even though the object might be complex and hold many values). Likewise, a variable that refers to an array can only refer to one array (even though arrays can hold many values). These complex data types will be discussed in a later lesson.

Lastly, in order for a computer program to distinguish one variable from another, each variable (in a given scope) must have a distinct name. If two variables were given identical names, then the computer would not be able to tell which variable to use in a given calculation. By giving each variable a different name, it is easier for both the computer and the programmer to keep track of which ones to use.

Notice, however, the qualification to this rule: in a given scope. In general, scope refers to the context in which a variable is used. If two variables are used in two different contexts, then it is permissible to use the same variable name because the computer uses the different contexts to tell them apart (similar to how two people can have the same first name but be distinguished from each other if they have different last names). An obvious (and trivial) example of this is if a variable called Age is used in two different computer programs, then the computer can tell which variable to use because it knows which program it is currently running. Usually, the term scope is used to refer to distinctly different contexts within the same computer program. The idea of scope will be discussed in more detail later. To begin with, most of the programs will be fairly simple and will only have one scope, so it is fair to simplify this rule as each variable must have a distinct name.

In summary, the basic rules for variables, values and data types are:

- Any value stored in a variable must be of the same data type as the variable.
- Variables must be declared before they can be used.
- A variable's data type can only be declared once.
- Each primitive variable can only hold one value at a given time.
- Each variable must have a distinct name.

## Programming Languages and Coding Instructions

### Basic Data Manipulation

Through variables, a computer program has the ability to manipulate the values stored in those variables. This manipulation of stored information is accomplished by giving the computer specific instructions on what manipulations to perform.

#### Languages

The exact form that the instructions will take depends on the programming language that is used. These instructions are then examined by a special program (a compiler, an assembler, or an interpreter) and translated into machine language. Machine language consists of a series of ones (1) and zeros (0) which act as on and off switches in the computer's memory. These on and off switches change other information that is stored in memory, resulting in the manipulation of information.

The on and off switches in computer memory represent the flow of electricity through the computer. Millions and billions of these switches (also known as "gates" - no relation to Bill) are arranged on tiny computer chips in highly sophisticated patterns to allow for the organized flow of electricity. It is this organized flow of ones and zeros that allow us to use these machines for fast and efficient information processing.

Programming languages allow programmers to give instructions to a computer in a form that is more familiar to and easier to use by the programmer. Today's programming languages are known as high-level languages because they incorporate simple words with familiar meanings in English, such as if, else, while, do, and return. Low-level languages, such as Assembler, use more cryptic commands and are much closer to machine language, thereby making them harder for programmers to work with.

#### Doing the Math

High-level programming languages (such as C++, C#, and Visual Basic) make it relatively easy to manipulate the values of variables. Assignment statements tell the computer to store specific values into specific variables. Assignment statements are often used with expressions, which are combinations of variables, values, and/or operators (such as Arithmetic operators). It is through expressions and assignment statements that the bulk of a computer's work is done.

Expressions allow new values to be computed based on existing values. For example, if a variable called Cost has the value $5.95 and another variable called Markup has a value of 2.0, then a mathematical expression such as Cost * Markup can be used to create a new value - $11.90 (the Cost multiplied by the Markup value). Using this expression in an assignment statement, this resulting value of the expression can then be stored in another variable:

`Price = Cost * Markup`

All numeric information can be used with the common arithmetic operators of addition, subtraction, multiplication, and division. When combined to create complex expressions, the commonly accepted rules of mathematics are used to determine which operations should be used first (multiplication and division before addition and subtraction). The order of operations can be modified by using parentheses, as in regular mathematics.

Some arithmetic operations, such as calculating the remainder of a division operation, are only applicable to certain types of numeric information. Some languages supply a special symbol to represent these operations while other languages require the use of special library functions to perform the math. Complex arithmetic operations, such as calculating the sine of an angle, are typically done using library functions. Library functions are simply specialized routines or sets of instructions that can be called upon to do the required calculations.

The following chart summarizes key arithmetic operations and their corresponding symbols as used in the more common high-level programming languages. The chart also shows some of the more complex operations and the names of the library functions used to calculate them (for specific details on using functions, see the documentation for the corresponding language). In addition, the arithmetic operations are shown as they typically appear in logical problem-solving diagrams such as flowcharts.

Arithmetic Operation	Symbols / Function Calls
C++	C#	Jscript	Visual Basic	SQL	Flowcharting
Addition	+	+	+	+	+	+
Subtraction	-	-	-	-	-	-
Multiplication	*	*	*	*	*	X
Division	/	/	/	/	/	/
Remainder of Division	% [a]	%	%	Mod	MOD(Division Expression)	Remainder Of (Division Expression) or Mod
Square Root	sqrt( )	Math.Sqrt( )	sqrt( )	Sqr( )	SQR( )	Square Root Symbol
Exponential Notation (Power)	pow( )	Math.Pow( )	pow( )	^	POWER( )	 
Sine	sin( )	Math.Sin( )	sin( )	Sin( )	SIN( )	Sine( )
Cosine	cos( )	Math.Cos( )	cos( )	Cos( )	COS( )	Cosine( )
Tangent	tan( )	Math.Tan( )	tan( )	Tan( )	TAN( )	Tangent( )
Parenthesis (affects order of operation)	( )	( )	( )	( )	( )	( )
[a] (for integers only)

The only "arithmetic" operation that is typically applied to string data types is addition. The addition of two strings is usually interpreted as the concatenation (joining together) of the two string values into a single string value.

Besides performing assignment statements and expressions, programming languages have instructions that allow the program to control which instructions to perform and which ones to skip over. These control statements allow for performing mutually exclusive instructions (this or that) and for performing certain instructions repeatedly. High level languages also incorporate mechanisms to identify sets of instructions as particular groups or functions as well as ways to call these program-defined functions whenever they are needed.

## Summary

Information comes in various forms and programmers can create both simple and complex sets of instructions to manipulate that information. Successful computer programs combine the best techniques for user I/O, information processing, and persistent storage in order to meet the needs of individuals and businesses. Grasping the basic concepts of computer programs – variables, values, data types, I/O, assignments and expressions, and control statements – is fundamental to the efficient and effective development of computer software.
