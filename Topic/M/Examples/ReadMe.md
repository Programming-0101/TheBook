---
title: Examples
---
# Code Samples

## Sorting and Arrays

1. [BranchVault](BranchVault.md) - The BranchVault class manages safety deposit boxes. Each box has a unique number, and may be assigned to a particular account number. This class demonstrates the bubble sort and the binary search.
2. [PhoneBook](PhoneBook.md) - The PhoneBook class provides simple management of an array of PhoneNumber objects. The PhoneBook allows for adding and retrieving phone numbers; it supports search for phone numbers by the telephone number or by a last name. The PhoneBook is initialized with a physical limit for the arrays, and the actual number of entries in the phone book is tracked as phone numbers are added to the phone book. The AddPhoneNumber() method demonstrates adding to an array that is to be sorted.
3. [ClassList](ClassList.md) -The ClassList example maintains an array of students for a particular course by offering methods to add and remove students from a course. In addition, the ClassList ensures that students are not added to the course twice (based on the student's Id). The internal array is of a fixed size (ClassList.CLASS_LIMIT) as well as the logical size of the array. If the ClassList is provided with an array of students in its constructor, that list is "copied" to the internal array of the ClassList object.
4. [BankStatement](BankStatement.md) - [Not Yet Implemented - Sorting by Date] This class represents a bank statement for a BankAccount for a given month. The statement allows BankTransaction objects to be added, and performs deposits and withdrawals on the BankAccount. The statement reports the starting and ending balance and also summarizes the total amount deposited and withdrawn for the month.

## Searching and Sorting Algorithms

1. Binary Search
1. Bubble Sort
1. Quick Sort
1. Sorting by multiple fields/properties
1. Others - Merge Sort, Insertion Sort, Heap Sort, Radix Sort, Shell Sort

## Sorting in .Net

1. LargePhoneBook
1. GradeBook - Sorting students by their letter grade, then by their name
