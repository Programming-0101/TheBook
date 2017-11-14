---
title: TBA
---
# AnsweringMachine

The AnsweringMachine class provides a method to give an answer to an incoming phone call. 

**Problem Statement:**

Create the AnsweringMachine class so that it can provide a default answer for an incoming phone call as well as a customizable answer. The methods should be named answer and they should return a String. There should be two methods in total, and both of them should be declared as static. The actual content of the default message can be whatever you choose, while the customizable method will receive a single String argument that has the name of the person receiving the message. Also create a driver that demonstrates the AnsweringMachine in a Console environment. 

Use the following details to guide your solution. 

*Method Detail*

* `public static string Answer()`
  Provides a standard default message for the answering machine. 

  **Returns:**
  A String that instructs the caller to leave a message.
* `public static string Answer(string name)`
  Provides a customizable message for the answering machine.

  To use this method, supply a person's name, and this name will be incorporated into the message that is returned. For example,
  `System.Console.WriteLine(AnsweringMachine.Answer("Bob");`

  **Parameters:**
  `name` - A String that is the name of the person being called.
  **Returns:**
  A String that instructs the caller to leave a message for the person with the supplied name.
