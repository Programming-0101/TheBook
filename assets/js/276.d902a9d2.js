(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{608:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"topic-d-–-testing-and-debugging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topic-d-–-testing-and-debugging","aria-hidden":"true"}},[e._v("#")]),e._v(" Topic D – Testing and Debugging")]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("This topic introduces the concepts of testing and verifying that code is running correctly. Two approaches will be presented and compared: Ad-hoc test drivers and Unit Tests.")]),e._v(" "),s("p",[e._v('Test drivers that rely on user input/output are the traditional means of verifying that code runs properly. The biggest benefit of test drivers is that they provide quick "ad-hoc" tests and are simple to produce on any IDE. However, test drivers have some major downfalls.')]),e._v(" "),s("p",[e._v("Current programming techniques make use of Unit Tests. A unit test is a simple, isolated test of some part of a class. Unit tests provide a way to clearly show the success or failure of a particular section of code. Unit tests are a key part of Test Driven Development (TDD).")]),e._v(" "),s("p",[e._v("Regardless of whether the developer uses test drivers or unit tests, it is important to remember that the developer is still responsible to make sure that the tests (and thus, the test results) are valid. Improper use of test drivers and unit tests can lead to")]),e._v(" "),s("ul",[s("li",[e._v('"false positives" - indicating that something works when it really doesn\'t, and')]),e._v(" "),s("li",[e._v('"false negatives" - indicating that something is broken when it really isn\'t')])]),e._v(" "),s("p",[e._v("Note: For this course, students will be provided with unit tests and will not be expected to have to write their own unit tests. The unit tests supplied to students will use nUnit 2.5.7 which is already installed in the lab. To use these libraries at home, simply install nUnit 2.5.7 on your home computer.")]),e._v(" "),s("h3",{attrs:{id:"logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logs","aria-hidden":"true"}},[e._v("#")]),e._v(" LOGs")]),e._v(" "),s("p",[e._v("The following daily LOGs are covered in this package.")]),e._v(" "),s("h4",{attrs:{id:"general-programming-concepts-and-terms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-programming-concepts-and-terms","aria-hidden":"true"}},[e._v("#")]),e._v(" General Programming Concepts and Terms")]),e._v(" "),s("ul",[s("li",[e._v("Explain the role of testing as it applies to software development")]),e._v(" "),s("li",[e._v('Define and compare the terms "compile-time error" and "run-time error"')]),e._v(" "),s("li",[e._v('Define the term "test driver"')]),e._v(" "),s("li",[e._v("Create simple ad-hoc test drivers to test for run-time errors")]),e._v(" "),s("li",[e._v('Define the term "TDD"')]),e._v(" "),s("li",[e._v("Compare and contrast Test Drivers and Unit Tests")]),e._v(" "),s("li",[e._v('Define the terms "false positive" and "false negative"')]),e._v(" "),s("li",[e._v("List three downfalls of using Test Drivers")]),e._v(" "),s("li",[e._v("Identify four benefits of using Unit Tests")]),e._v(" "),s("li",[e._v("Add unit testing libraries and unit testing packages to existing programs")]),e._v(" "),s("li",[e._v("Use unit tests to validate the requirements of a class’ design and behaviour")]),e._v(" "),s("li",[e._v("Diagnose and correct software problems by using unit tests")])]),e._v(" "),s("h2",{attrs:{id:"code-samples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-samples","aria-hidden":"true"}},[e._v("#")]),e._v(" Code Samples")]),e._v(" "),s("p",[e._v("The following examples are used to illustrate this topic.")]),e._v(" "),s("ol",[s("li",[e._v("Person - This simple class was used to introduce the idea of encapsulation (private fields with public getters and setters). This example uses a constructor for ensuring the state of an object when it is instantiated (created). In this topic, it is used to demonstrate unit testing.")]),e._v(" "),s("li",[e._v("Account - This simple class also illustrates encapsulation, but with some of the fields being read-only. This class uses a constructor (which is also necessary for getting state into fields which do not have corresponding setter methods).")]),e._v(" "),s("li",[e._v("Student - This class reinforces the idea of encapsulation and constructors. It also demonstrates the idea of overloading the default ToString() method that every class inherits from the Object class.")]),e._v(" "),s("li",[e._v("Employee – The Employee class represents basic information about an employee of a company.")]),e._v(" "),s("li",[e._v('Company - These are other classes similar to the Person and Student classes. These classes, however, "share" a driver, illustrating the fact that any given "program" typically uses more than one class.')])]),e._v(" "),s("p",[e._v("Test Drivers (Console I/O)"),s("br"),e._v("\nTBA"),s("br"),e._v("\nUnit Tests (nUnit)"),s("br"),e._v('\nThe unit tests for these classes are included in the solution folder under the "Demos + Practice" folder. Simply double-click the NUnit Test Project (.nunit) and the tests will open in the NUnit GUI.')]),e._v(" "),s("h3",{attrs:{id:"person"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#person","aria-hidden":"true"}},[e._v("#")]),e._v(" Person")]),e._v(" "),s("p",[e._v("This simple class was used to introduce the idea of encapsulation (private fields with public getters and setters). This example uses a constructor for ensuring the state of an object when it is instantiated (created). In this topic, it is used to demonstrate unit testing. The following diagram represents the last design for the Person class, as completed in the exercises portion of the previous topic.")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-Person.png",alt:"Previous Person Class Diagram"}})]),e._v(" "),s("p",[e._v("The supplied unit tests check all of this previously documented behaviour, but they also check to see if the Person class has overridden the "),s("code",[e._v("ToString()")]),e._v(' method. Because this requirement is new, and has not yet been implemented, the unit tests show this as a "failed test." The following diagram is the design that the unit tests are evaluating.')]),e._v(" "),s("p",[s("img",{attrs:{src:"D-Person-1.png",alt:"Person Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Instantiate (build) from constructor")]),e._v(" "),s("li",[e._v("Get/Set First Name")]),e._v(" "),s("li",[e._v("Get/Set Last Name")]),e._v(" "),s("li",[e._v("Get/Set Age")]),e._v(" "),s("li",[e._v("[NOT-YET-IMPLEMENTED] Override ToString() to get the person’s full name (as first name then last name)"),s("br"),e._v(" "),s("strong",[e._v('The test for this method will report as "failed" because it has not yet been implemented.')])])]),e._v(" "),s("h3",{attrs:{id:"account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account","aria-hidden":"true"}},[e._v("#")]),e._v(" Account")]),e._v(" "),s("p",[e._v("This simple class also illustrates encapsulation, but with some of the fields being read-only. This class uses a constructor (which is also necessary for getting state into fields which do not have corresponding setter methods).")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-Account.png",alt:"Account Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Get Bank Name")]),e._v(" "),s("li",[e._v("Get Branch Number")]),e._v(" "),s("li",[e._v("Get Institution Number")]),e._v(" "),s("li",[e._v("Get Account Number")]),e._v(" "),s("li",[e._v("Get Account Type")]),e._v(" "),s("li",[e._v("Get/Set Balance")]),e._v(" "),s("li",[e._v("Get/Set Overdraft Limit")])]),e._v(" "),s("h3",{attrs:{id:"student"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#student","aria-hidden":"true"}},[e._v("#")]),e._v(" Student")]),e._v(" "),s("p",[e._v("This class reinforces the idea of encapsulation and constructors. It also demonstrates the idea of overloading the default ToString() method that every class inherits from the Object class.")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-Student.png",alt:"Student Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Get/Set Name")]),e._v(" "),s("li",[e._v("Get/Set Gender")]),e._v(" "),s("li",[e._v("Get/Set Student Id")]),e._v(" "),s("li",[e._v("Get/Set GPA")]),e._v(" "),s("li",[e._v("Get/Set Program")]),e._v(" "),s("li",[e._v("Get/Set Full-Time")]),e._v(" "),s("li",[e._v("Override ToString() to get the student’s ID and name")])]),e._v(" "),s("h3",{attrs:{id:"employee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#employee","aria-hidden":"true"}},[e._v("#")]),e._v(" Employee")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-Employee.png",alt:"Employee Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Get/Set First Name")]),e._v(" "),s("li",[e._v("Get/Set Last Name")]),e._v(" "),s("li",[e._v("Get/Set Gender")]),e._v(" "),s("li",[e._v("Get/Set Employment Date")]),e._v(" "),s("li",[e._v("Get/Set Salary")]),e._v(" "),s("li",[e._v("Get Social Insurance Number")])]),e._v(" "),s("h3",{attrs:{id:"company"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[e._v("#")]),e._v(" Company")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-Company.png",alt:"Company Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Get/Set Name")]),e._v(" "),s("li",[e._v("Get/Set City")]),e._v(" "),s("li",[e._v("Get/Set Incorporated")]),e._v(" "),s("li",[e._v("Get/Set Number of Employees")]),e._v(" "),s("li",[e._v("Get/Set Gross Income to Date")]),e._v(" "),s("li",[e._v("Get Business Start Date")])]),e._v(" "),s("h2",{attrs:{id:"practice-exercises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#practice-exercises","aria-hidden":"true"}},[e._v("#")]),e._v(" Practice Exercises")]),e._v(" "),s("ol",[s("li",[e._v("Person - This simple class was used to introduce the idea of encapsulation (private fields with public properties). This example uses a constructor for ensuring the state of an object when it is instantiated (created). It also demonstrates the overriding of the ToString() method inherited from the Object method.")]),e._v(" "),s("li",[e._v("CanadianAddress - This class represents an address for some place in Canada."),s("br"),e._v("\nUpdate this class to now include a constructor and to override the ToString() method.")]),e._v(" "),s("li",[e._v("Course - This class represents a post-secondary course with a theory (exam) and a lab portion.")]),e._v(" "),s("li",[e._v("ExamResult - This class represents the results of an exam for a student.")]),e._v(" "),s("li",[e._v("LabResult - This class represents the results of a lab for a student.")])]),e._v(" "),s("p",[e._v("For this exercise, take the code solutions you created in the previous topic and compare your results with the jUnit tests for these classes; check with your instructor to see where you can download the unit tests.")]),e._v(" "),s("h3",{attrs:{id:"person-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#person-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Person")]),e._v(" "),s("p",[e._v("This simple class was used to introduce the idea of encapsulation (private fields with public properties). This example uses a constructor for ensuring the state of an object when it is instantiated (created). It also demonstrates the overriding of the ToString() method inherited from the Object method.")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-Person-2.png",alt:"Person Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Instantiate (build) from constructor")]),e._v(" "),s("li",[e._v("Get/Set First Name")]),e._v(" "),s("li",[e._v("Get/Set Last Name")]),e._v(" "),s("li",[e._v("Get/Set Age")]),e._v(" "),s("li",[e._v("Override ToString() to get the person’s full name (as first name then last name)")])]),e._v(" "),s("h3",{attrs:{id:"canadianaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canadianaddress","aria-hidden":"true"}},[e._v("#")]),e._v(" CanadianAddress")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-CanadianAddress.png",alt:"CanadianAddress Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Instantiate (build) from Constructor")]),e._v(" "),s("li",[e._v("Get/Set: Street, Unit, City, Province, Postal Code, Rural Route, Box Number")]),e._v(" "),s("li",[e._v("Override ToString() to just show Street, City, Province, and Postal Code")])]),e._v(" "),s("h3",{attrs:{id:"course"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#course","aria-hidden":"true"}},[e._v("#")]),e._v(" Course")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-Course.png",alt:"Course Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Instantiate from Constructor")]),e._v(" "),s("li",[e._v("Get: Course Name, Course Number, Exam Count, Lab Count, Class Hours")])]),e._v(" "),s("h3",{attrs:{id:"examresult"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examresult","aria-hidden":"true"}},[e._v("#")]),e._v(" ExamResult")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-ExamResult.png",alt:"ExamResult Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Instantiate from Constructor")]),e._v(" "),s("li",[e._v("Get/Set: Marks Earned")]),e._v(" "),s("li",[e._v("Get: Name, Student Id, Total Marks, Exam Weight")]),e._v(" "),s("li",[e._v("Override ToString() to show"),s("br"),e._v('\n"The student (studentId) received earnedMarks/totalMarks for this examName exam."')])]),e._v(" "),s("h3",{attrs:{id:"labresult"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#labresult","aria-hidden":"true"}},[e._v("#")]),e._v(" LabResult")]),e._v(" "),s("p",[s("img",{attrs:{src:"D-LabResult.png",alt:"LabResult Class Diagram"}})]),e._v(" "),s("p",[e._v("Should…")]),e._v(" "),s("ul",[s("li",[e._v("Instantiate from Constructor")]),e._v(" "),s("li",[e._v("Get/Set: Marks Earned")]),e._v(" "),s("li",[e._v("Get: Lab Number, Student Id, Total Marks, Lab Weight")]),e._v(" "),s("li",[e._v("Override ToString() to show"),s("br"),e._v('\n"The student (studentId) received earnedMarks/totalMarks for this lab."')])])])},[],!1,null,null,null);r.options.__file="topic-D.md";t.default=r.exports}}]);