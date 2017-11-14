---
title: TBA
---
# ClassList

The ClassList example maintains an array of students for a particular course by offering methods to add and remove students from a course. In addition, the ClassList ensures that students are not added to the course twice (based on the student’s Id). The internal array is of a fixed size (ClassList.CLASS_LIMIT) as well as the logical size of the array. If the ClassList is provided with an array of students in its constructor, that list is “copied” to the internal array of the ClassList object (to ensure that the internal array has the appropriate physical size).

All of the Student objects in the ClassList are stored in a sorted array, based on the student Id. Code the following methods to complete this class.

* AddInsertSortedByStudentId() - This private method is called by both the AddStudent method and the constructor. It adds a student to the class list while maintaining a sort order (sorted by student Id in ascending order).
* FindStudent() - This public method performs a binary search of the array of Student objects. If the Student is found, this method will return that Student object, otherwise it will return null.
* RemoveStudent() - This public method will remove a particular Student from the array, while maintaining the sort order of the array. If the Student is found, this method will return that Student object, otherwise it will return a null.
* GetStudents() - This public method will generate and return a copy of the array of Student objects.
Supporting Classes 
