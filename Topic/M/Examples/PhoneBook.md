---
title: TBA
---
# PhoneBook

The PhoneBook class provides simple management of an array of PhoneNumber objects. The PhoneBook allows for adding and retrieving phone numbers; it supports search for phone numbers by the telephone number or by a last name. The PhoneBook is initialized with a physical limit for the arrays, and the actual number of entries in the phone book is tracked as phone numbers are added to the phone book. The AddPhoneNumber() method demonstrates adding to an array that is to be sorted. Code the following methods to complete this class.

* BubbleSortByPhoneNumber() - This private method performs a bubble sort of the array of PhoneNumber objects. They are to be sorted in ascending order, based on the telephone number.
* InsertSortedByPhoneNumber() - This private method will insert a PhoneNumber object into the array while preserving the sort order of the array (based on the array being sorted in ascending order by telephone number).
