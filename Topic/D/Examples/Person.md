---
title: TBA
---
# Person

This simple class was used to introduce the idea of encapsulation (private fields with public getters and setters). This example uses a constructor for ensuring the state of an object when it is instantiated (created). In this topic, it is used to demonstrate unit testing. The following diagram represents the last design for the Person class, as completed in the exercises portion of the previous topic.

![Previous Person Class Diagram](D-Person.png)

The supplied unit tests check all of this previously documented behaviour, but they also check to see if the Person class has overridden the `ToString()` method. Because this requirement is new, and has not yet been implemented, the unit tests show this as a "failed test." The following diagram is the design that the unit tests are evaluating.

![Person Class Diagram](D-Person-1.png)

Should…
* Instantiate (build) from constructor
* Get/Set First Name
* Get/Set Last Name
* Get/Set Age
* [NOT-YET-IMPLEMENTED] Override ToString() to get the person’s full name (as first name then last name)
  **The test for this method will report as "failed" because it has not yet been implemented.**
