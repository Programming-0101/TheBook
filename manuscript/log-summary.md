# Learning Outcome Guide Review

Learning Outcome Guides (LOGs) are an excellent tool for instructors in the classroom and for students when they are reviewing their notes for each class. A Learning Outcome Guide is simply a list of specific things that the student (or reader, in this case) should be able to do or understand as a result of learning the material. LOGs give the learner the ability to self-check their progress ("Can I do *X*?").

This appendix provides a shortened review of what each learning outcome is all about. For instructors, it provides a quick summary of the intent of the LOG. For students, it provides the answers. :)

## Topic A - Starting Classes

### OOP Basics
Define the term "class" as used in OOP
: A class is a template that acts as the basis for creating objects and describes a) What it “looks like”, and b) How it “works”. 

Explain the purpose of classes in computer programs
: Classes allow programmers to define their own complex data types, complete with their own internal data (fields) and behaviours (methods).

Describe the primary keywords used in declaring a class
: public/private – identifies whether the class is visible to other code; public means all other code can see this class, while private means 
: class – declares that this is a class definition (tells the compiler to interpret this as a new “classification” or “kind” of data type; that is, a complex ) 

Define the term "method" and give an example
: A method is a set of instructions that manipulate information. 

Create simple classes with methods only 
: Demonstrate your ability to meet this learning outcome guide by completing the related assignments.

Explain what is meant by "overloading"
: Overloading describes creating more than one method with the same method name (but different parameters) in the same class. Overloaded methods allow for alternate ways to perform the same general behaviour of an object or a class.

Describe the syntax of a method declaration (aka, method implementation)
: …

Explain how classes with identical names can be distinguished from each other 
: Different classes can have identical names provided that they exist in different namespaces. (Namespaces help to prevent a “collision” or confusion on the part of a compiler when confronted with two or more classes with the same name.)

### General Programming Concepts and Terms

Define the term "keyword" as it applies to programming languages
: A keyword is a special command or instruction that is part of (that is, built in to, or “intrinsic” to) a programming language. Keywords are “reserved” words, meaning that they cannot be used for other purposes, such as being a name of a class, a variable, or a method.

Define the term "identifier" as it applies to programming languages
: An identifier is a programmer-supplied name for some item, either a class name, a field or local variable, or a method.

Define the term "program statement" and identify how the computer recognizes a program statement
: A program statement is combination of keywords, identifiers, punctuation, and/or literal values that, together, represent a single “instruction” or “command” that a compiler can translate into executable code.

Define the term “syntax” as it applies to programming languages.
: Syntax refers to the rules of a programming language that define how to combine keywords, identifiers, literal values, and other symbols to create specific instructions for a computer program.

Identify the entry point for every computer program
: Every computer program must supply a method called “main” as the method that the operating system will call (execute) to begin running the program.

Perform simple output to the console using System.Console
: Demonstrate your ability to meet this learning outcome guide by completing the related assignments.

Identify the basic structure of a simple C# program
: A C# program must consist of at least one class and have a single “main” method as the program’s entry point. Typically, a C# program will consist of a “driver” (the class that has the main method) and other classes used to represent objects (data) in the program.

Explain what is meant by a "driver"
: A “driver” is a method or set of methods that “run” or control the execution of a program; it’s responsibility is to direct and maintain the “lifetime” of a program, and makes use of classes and objects to achieve the purpose of the program. Every driver begins its execution in a method called “main” (which is the name given for the entry point for every computer program).

Explain what is meant by a “case-sensitive” programming language
: A case-sensitive language is one  where the compiler regards “identical” words as different if they differ only in their case. In other words, a case-sensitive language will regard two identifiers are distinct if the only difference is whether they are spelled with upper- or lower-case characters. For example, HelloWorld and Helloworld will be regarded as different because one has a capital “W” and the other has a lower-case “w”.

Explain what is meant by a "strongly-typed" programming language
: A “strongly-typed” programming language is one that requires all variables or objects to always match or conform to whatever data type they were originally declared as. Some programming languages (such as C#Script) allow variables or objects to “change” their data type whenever a programmer wishes to use it for other purposes; strongly-typed languages do not allow variables to “change” the type of data they can store. Strongly-typed programming languages provide better security and make it more difficult for programmers to inadvertently corrupt, mangle or expose important data.

Explain what "string concatenation" is and how it works
: String concatenation is where two or more strings are “combined” to create a longer string; this is represented in C# by “adding” strings together. For example, given two literal strings whose values are “One” and “word”, the result of “One” + “word” would be the string “Oneword”.

Define and distinguish the terms “argument” and “parameter”
: A parameter is a variable declared in the parameter list of a method declaration; parameters are used to hold or capture information (values) that are sent or passed into the method. An argument is some value (either a literal value, a value stored in a variable, or some other value that comes from an “expression”) that is sent (passed) into a method; arguments appear in the syntax of method calls.

Use single-line, multi-line and XML comments as a means of documenting code
: Demonstrate your ability to meet this learning outcome guide by completing the related assignments.

List the four pieces of information to include in comments at the top of every source file
: The file name, author, creation date, and purpose of the file.

### Intro to IDEs

Define the term "IDE" as it relates to software development tools
: The acronym “IDE” stands for “Integrated Development Environment”. An IDE brings together separate,  but complementary, software development tools that aide developers in creating computer programs. For example, most IDEs bring a sophisticated text editor together with file management tools, a compiler, a debugger, and a program execution environment, as well as other useful tools.

Define the terms "project" and "solution"
: A solution is a folder in which one or more projects can be managed and “kept together”; it is the “area” in which a developer can create projects. A project is as set of classes designed to achieve a particular purpose; a project may represent a complete program in and of itself, or may be a single component of a larger, more complex computer program.

Identify the various parts of the IDE (Integrated Development Environment) used in this course
: [-- image here --]

Create a new project in the IDE for this course
: Demonstrate your ability to meet this learning outcome guide by completing the related assignments.

Create new source files in the IDE for this course
: Demonstrate your ability to meet this learning outcome guide by completing the related assignments.

Add existing files to a project
: Demonstrate your ability to meet this learning outcome guide by completing the related assignments.

## Topic B - Starting Classes

### OOP Basics

Define the term "object" as used in OOP
: An object is an instance of a class.
: Each object has its own “state” (values) for its fields, and all objects based on any given class are distinct from each other. The internal values (state)for an object’s fields can be changed independently of other objects of the same class.

Describe the syntax of static and non-static method declarations
: Static methods are “shared” by all instances (objects) of a class, and can be called without even having to have an instance of the method’s class.
: Non-static methods, on the other hand, can only be called for a given object (instance of a class) and will “act on” (or “act on behalf of”) that object (and any other objects are not affected by the given object’s method call).

Compare and contrast the syntax for method declarations (implementations) vs. method calls (for both static and non-static methods)
: …

Define the term "field" as used in OOP and give an example
: A field is a variable that belongs to a class and is shared by all the methods of a class. 
  `private static int sharedCount; // a static field`
  `private String name; // an instance field`

Compare and contrast instance and class members, for both methods and fields
: Static methods are shared by all instances of a class, and can be called independently from instances of a class, whereas instance methods can only be called if you have an object (an instance of a class).
: Static fields are shared by and fully accessible to all methods, but non-static fields, also called “instance” fields, are only shared by other non-static methods. In the following example, the first field is a static fields and the second is an instance field.

Identify the "member access operator" and explain it's purpose
: The member access operator (also called the “dot” operator) is the period. It is used to access a field or method of an object or a class.

Create (instantiate) objects
: Demonstrate your ability to meet this learning outcome guide by completing the related assignments.

Distinguish between classes and objects in OOP
: A class is merely a “template” for creating objects and describes a) what the object will “look like” (that is, what fields or data it will contain) and b) how the object works (that is, what methods can be called and what those methods will do).

Explain what is meant by the phrase “type extensibility” and how classes represent “complex” data types in OOP
: “Type extensibility” is where a programming language allows developers to create or design their own “data types”.
: All programming languages support the “simplistic” data types (for numeric information, such as whole and real numbers, as well as simple text or character representation). These simple data types are intrinsic (“build into”) the programming language. A language that supports “type extensions” simply allows the programmer to create or design new data types; these new types are typically “complex” types made up of zero or more other (either simple or complex) data types.

### General Programming Concepts and Terms

List the three categories of simple information
: Textual, numeric, and conceptual

Define the term "intrinsic data type"
: An “intrinsic data type” is one that is built into the programming language.

Explain what an assignment statement is and how it works
: An assignment statement is an instruction to the computer to store a value into a specific variable (or object). The variable (or object) is placed on the left-hand side of the equals sign, and the value to be stored in the object is placed on the right-hand side of the equals sign.
: The left-hand side of an assignment statement must be a single variable, whereas the right-hand side can be any expression as long as the resulting value of the expression is the same (or compatible) data type as the variable on the left-hand side.

Compare and contrast the three categories of simple information with the complex types of information which classes represent
: Simple information is either textual (such as a name), numeric (such as a total or count), or “conceptual” (that is, representing a more “abstract” value that is neither textual or numeric). An example of a textual type in C# is the char type. An example of a numeric type in C# is the double type. An example of a “conceptual” type is the boolean type. A variable whose type is one of the simple types can only hold a single, simple value at any given time.
: Complex types of information can be constructed from many simple types or from simple and complex types. A “class” is used to describe or define what the complex type looks like and how it works.  Complex types are the basis for creating objects, and while any given “object variable” can only reference a single object, that object may consist of many distinct “values”, each one being stored in a field that is “hidden” (or “encapsulated”) inside the object.

Explain the advantages of using classes and objects instead of only using intrinsic data types
: By using objects, the programmer is no longer limited to having to only deal with simple values. By designing and using complex types (classes), the programmer is able to create complex programs using less code in a way that is simpler and more reliable than if the programmer were only allowed to use the simple types built into the programming language.

## Topic C - Starting Classes

###  

## Topic D - Debugging and Testing

### 

## Topic E - Expressions and Math

### 

## Topic F - If-Else Structures

### 
