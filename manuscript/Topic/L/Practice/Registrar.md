---
title: TBA
---
# Registrar

The Registrar class is responsible to support the enrolment of students. This class maintains the student body as a collection of Student objects. It supports the ability to find and remove students, switch students to another program, and get the number of students enrolled in a specific program.

The Registrar class is responsible to support the enrolment of students. This class maintains the student body as an array of Student objects. It supports the ability to find and remove students, switch students to another program, and get the number of students enrolled in a specific program. Code the following methods to complete the Registrar class.

* Add() – This method takes the supplied Person information as well as the program of study to create a new Student, adding them to the array of students in the student body. It returns the student Id for the new enrolment.
* FindStudent() – This method searches the student body for a student with a matching Id.
* RemoveStudent() – This method searches the student body for a student with a matching Id and removes them from the collection, if found.
* GetProgramEnrollment() – This method searches the array of students to find out how many are enrolled in a particular program. Validate the Program name before performing the search.
