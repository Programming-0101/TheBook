(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{646:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"topic-m-arrays-sorted"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic-m-arrays-sorted","aria-hidden":"true"}},[e._v("#")]),e._v(" Topic M - Arrays - Sorted")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The focus of this topic is sorting arrays and performing searches, inserts, and deletions from a sorted array.")]),e._v(" "),a("h3",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs","aria-hidden":"true"}},[e._v("#")]),e._v(" LOGs")]),e._v(" "),a("h2",{attrs:{id:"code-samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-samples","aria-hidden":"true"}},[e._v("#")]),e._v(" Code Samples")]),e._v(" "),a("ol",[a("li",[e._v("BranchVault - The BranchVault class manages safety deposit boxes. Each box has a unique number, and may be assigned to a particular account number. This class demonstrates the bubble sort and the binary search.")]),e._v(" "),a("li",[e._v("PhoneBook - The PhoneBook class provides simple management of an array of PhoneNumber objects. The PhoneBook allows for adding and retrieving phone numbers; it supports search for phone numbers by the telephone number or by a last name. The PhoneBook is initialized with a physical limit for the arrays, and the actual number of entries in the phone book is tracked as phone numbers are added to the phone book. The AddPhoneNumber() method demonstrates adding to an array that is to be sorted.")]),e._v(" "),a("li",[e._v("ClassList -The ClassList example maintains an array of students for a particular course by offering methods to add and remove students from a course. In addition, the ClassList ensures that students are not added to the course twice (based on the student’s Id). The internal array is of a fixed size (ClassList.CLASS_LIMIT) as well as the logical size of the array. If the ClassList is provided with an array of students in its constructor, that list is “copied” to the internal array of the ClassList object.")]),e._v(" "),a("li",[e._v("BankStatement - [Not Implemented - Sorting by Date] This class represents a bank statement for a BankAccount for a given month. The statement allows BankTransaction objects to be added, and performs deposits and withdrawals on the BankAccount. The statement reports the starting and ending balance and also summarizes the total amount deposited and withdrawn for the month.")])]),e._v(" "),a("h3",{attrs:{id:"branchvault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branchvault","aria-hidden":"true"}},[e._v("#")]),e._v(" BranchVault")]),e._v(" "),a("p",[e._v("The BranchVault class manages safety deposit boxes. Each box has a unique number, and may be assigned to a particular account number. This class demonstrates the bubble sort and the binary search. Code the following methods to complete this class.")]),e._v(" "),a("ul",[a("li",[e._v("SortBoxes() - This private method performs a bubble sort of the array of SafetyDepositBox objects. The boxes are to be sorted in ascending order according to their box number.")]),e._v(" "),a("li",[e._v("Find() - This public method performs a binary search of the SafetyDepositBox array for a particular box number. If the box number is not found, it returns a null.")])]),e._v(" "),a("h3",{attrs:{id:"phonebook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phonebook","aria-hidden":"true"}},[e._v("#")]),e._v(" PhoneBook")]),e._v(" "),a("p",[e._v("The PhoneBook class provides simple management of an array of PhoneNumber objects. The PhoneBook allows for adding and retrieving phone numbers; it supports search for phone numbers by the telephone number or by a last name. The PhoneBook is initialized with a physical limit for the arrays, and the actual number of entries in the phone book is tracked as phone numbers are added to the phone book. The AddPhoneNumber() method demonstrates adding to an array that is to be sorted. Code the following methods to complete this class.")]),e._v(" "),a("ul",[a("li",[e._v("BubbleSortByPhoneNumber() - This private method performs a bubble sort of the array of PhoneNumber objects. They are to be sorted in ascending order, based on the telephone number.")]),e._v(" "),a("li",[e._v("InsertSortedByPhoneNumber() - This private method will insert a PhoneNumber object into the array while preserving the sort order of the array (based on the array being sorted in ascending order by telephone number).")])]),e._v(" "),a("h3",{attrs:{id:"classlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classlist","aria-hidden":"true"}},[e._v("#")]),e._v(" ClassList")]),e._v(" "),a("p",[e._v("The ClassList example maintains an array of students for a particular course by offering methods to add and remove students from a course. In addition, the ClassList ensures that students are not added to the course twice (based on the student’s Id). The internal array is of a fixed size (ClassList.CLASS_LIMIT) as well as the logical size of the array. If the ClassList is provided with an array of students in its constructor, that list is “copied” to the internal array of the ClassList object (to ensure that the internal array has the appropriate physical size).")]),e._v(" "),a("p",[e._v("All of the Student objects in the ClassList are stored in a sorted array, based on the student Id. Code the following methods to complete this class.")]),e._v(" "),a("ul",[a("li",[e._v("AddInsertSortedByStudentId() - This private method is called by both the AddStudent method and the constructor. It adds a student to the class list while maintaining a sort order (sorted by student Id in ascending order).")]),e._v(" "),a("li",[e._v("FindStudent() - This public method performs a binary search of the array of Student objects. If the Student is found, this method will return that Student object, otherwise it will return null.")]),e._v(" "),a("li",[e._v("RemoveStudent() - This public method will remove a particular Student from the array, while maintaining the sort order of the array. If the Student is found, this method will return that Student object, otherwise it will return a null.")]),e._v(" "),a("li",[e._v("GetStudents() - This public method will generate and return a copy of the array of Student objects."),a("br"),e._v("\nSupporting Classes")])]),e._v(" "),a("h2",{attrs:{id:"practice-exercises"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#practice-exercises","aria-hidden":"true"}},[e._v("#")]),e._v(" Practice Exercises")]),e._v(" "),a("ol",[a("li",[e._v("PhoneBook - [Sorting by Name and Sorting by Phone Number] This extends the PhoneBook class by adding sorting by phone number and a binary search.")]),e._v(" "),a("li",[e._v("Registrar - [Sorting by ID] The Registrar class is responsible to support the enrollment of students. This class maintains the student body as a collection of Student objects. It supports the ability to find and remove students, switch students to another program, and get the number of students enrolled in a specific program.")]),e._v(" "),a("li",[e._v("CDLibrary - [Not Yet Implemented] This class manages a collection of CDs that are stored in alphabetical order. It supports searching the library for CDs based on the title.")])]),e._v(" "),a("h3",{attrs:{id:"phonebook-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phonebook-2","aria-hidden":"true"}},[e._v("#")]),e._v(" PhoneBook")]),e._v(" "),a("p",[e._v("Extend the PhoneBook class by adding sorting by name and a binary search when sorted by number.")]),e._v(" "),a("ul",[a("li",[e._v("FindPhoneNumberUsingBinarySearch() - This private method will do a binary search of the PhoneNumber array to find a PhoneNumber with a matching telephone number.")]),e._v(" "),a("li",[e._v("BubbleSortByLastNameThenFirstName() - This private method sorts the array by first name within last name, in ascending alphabetical order.")])]),e._v(" "),a("h3",{attrs:{id:"registrar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registrar","aria-hidden":"true"}},[e._v("#")]),e._v(" Registrar")]),e._v(" "),a("p",[e._v("[Sorting by ID] The Registrar class is responsible to support the enrolment of students. This class maintains the student body as an array of Student objects. It supports the ability to find and remove students, switch students to another program, and get the number of students enrolled in a specific program. Code the following methods to complete the Registrar class.")]),e._v(" "),a("ul",[a("li",[e._v("RemoveStudent() - This method must be modified to maintain the sort order when removing a student from the array.")])]),e._v(" "),a("h3",{attrs:{id:"cdlibrary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdlibrary","aria-hidden":"true"}},[e._v("#")]),e._v(" CDLibrary")]),e._v(" "),a("p",[a("em",[a("strong",[e._v("[Not Yet Implemented]")])])])])},[],!1,null,null,null);t.default=s.exports}}]);