(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{581:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"topic-c-–-starting-classes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topic-c-–-starting-classes","aria-hidden":"true"}},[e._v("#")]),e._v(" Topic C – Starting Classes")]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("This topic introduces some of the basic syntax and grammar surrounding Object-Oriented Programming in C#. The following keywords are introduced. (Note that additional keywords from previous topics may also be present.)")]),e._v(" "),s("p",[e._v("• private"),s("br"),e._v("\n• this"),s("br"),e._v("\n• bool"),s("br"),e._v("\n• true"),s("br"),e._v("\n• false"),s("br"),e._v("\n• DateTime")]),e._v(" "),s("p",[e._v("This topic will also introduce the following grammars, syntax and language constructs. (Note that additional concepts from previous topics may also be present.)")]),e._v(" "),s("p",[e._v("• Private fields (encapsulation)"),s("br"),e._v("\n• Public properties (encapsulation)"),s("br"),e._v("\n• Constructor syntax"),s("br"),e._v("\n• Object instantiation with parameterized constructors"),s("br"),e._v("\n• Overriding the Object's ToString() method")]),e._v(" "),s("h3",{attrs:{id:"daily-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#daily-logs","aria-hidden":"true"}},[e._v("#")]),e._v(" Daily LOGs")]),e._v(" "),s("p",[e._v("The following daily LOGs are covered in this package.")]),e._v(" "),s("h4",{attrs:{id:"oop-basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oop-basics","aria-hidden":"true"}},[e._v("#")]),e._v(" OOP Basics")]),e._v(" "),s("p",[e._v('• Define the term "encapsulation" as used in OOP'),s("br"),e._v("\n• Explain why encapsulation is a good design principle"),s("br"),e._v("\n• Define the term “access specifier” and identify where it occurs in the code for a class"),s("br"),e._v("\n• List the two access specifiers that are used in this course"),s("br"),e._v("\n• Describe the difference between “private” and “public” members of a class"),s("br"),e._v('\n• Describe the concepts of "properties" as used in OOP'),s("br"),e._v('\n• Define the term "backing store" as it applies to properties and fields'),s("br"),e._v("\n• Describe and explain the purpose and function of a constructor for a class"),s("br"),e._v("\n• Describe the syntax of a class constructor"),s("br"),e._v("\n• Identify when a class constructor is “called”"),s("br"),e._v('\n• Define the term "class scope" as used in OOP'),s("br"),e._v('\n• Define the term "local scope" as used in OOP'),s("br"),e._v('\n• Define the term "state" as applied to objects used in OOP'),s("br"),e._v("\n• Define the term “override” as used in OOP"),s("br"),e._v("\n• Explain the purpose and function of the ToString() method and why we sometimes want to change its default behaviour when we create classes"),s("br"),e._v("\n• Create simple class diagrams to represent classes")]),e._v(" "),s("h4",{attrs:{id:"general-programming-concepts-and-terms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-programming-concepts-and-terms","aria-hidden":"true"}},[e._v("#")]),e._v(" General Programming Concepts and Terms")]),e._v(" "),s("p",[e._v("• List three levels of scope")]),e._v(" "),s("h2",{attrs:{id:"code-samples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-samples","aria-hidden":"true"}},[e._v("#")]),e._v(" Code Samples")]),e._v(" "),s("p",[e._v("The following examples are used to illustrate this topic.")]),e._v(" "),s("ol",[s("li",[e._v('Person - This simple class illustrates and introduces the idea of encapsulation (private fields with public properties). This example does not have a constructor. This example includes a driver. The driver is also used to illustrate how, with only fields & getter/setter methods, an object can be in an "unknown" (and invalid) state as soon as it is created; this idea is introduced to show the need for a constructor, and opens the discussion of the idea of a "default constructor".')]),e._v(" "),s("li",[e._v('Account - This simple class also illustrates encapsulation, but with some of the fields being read-only. This necessitates the presence of a constructor. This example includes a driver which shows that a class is in a "known state" as soon as it is created.')]),e._v(" "),s("li",[e._v("Student - This class reinforces the idea of encapsulation and constructors. It also introduces the idea of overloading the default toString() method that every class inherits from the Object class. This example includes a driver with multiple objects, showing how the use of constructors makes it easier to create many objects in a few lines of code.")]),e._v(" "),s("li",[e._v('Employee + Company - These are other classes similar to the Person and Student classes, but the Employee class uses Auto-Implemented properties (new since C# 3.0). Lastly, these classes "share" a driver, illustrating the fact that any given "program" typically uses more than one class.')])]),e._v(" "),s("p",[e._v("The following class diagrams detail the design of these examples.")]),e._v(" "),s("h3",{attrs:{id:"person"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#person","aria-hidden":"true"}},[e._v("#")]),e._v(" Person")]),e._v(" "),s("p",[e._v('This simple class illustrates and introduces the idea of encapsulation (private fields with public properties). This example does not have a constructor. This example includes a driver. The driver is also used to illustrate how, with only fields & getter/setter methods, an object can be in an "unknown" (and invalid) state as soon as it is created; this idea is introduced to show the need for a constructor, and opens the discussion of the idea of a "default constructor".')]),e._v(" "),s("p",[s("img",{attrs:{src:"C-Person.png",alt:"Person Class Diagram"}})]),e._v(" "),s("h3",{attrs:{id:"account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account","aria-hidden":"true"}},[e._v("#")]),e._v(" Account")]),e._v(" "),s("p",[e._v('This simple class also illustrates encapsulation, but with some of the fields being read-only. This necessitates the presence of a constructor. This example includes a driver which shows that a class is in a "known state" as soon as it is created.')]),e._v(" "),s("p",[s("img",{attrs:{src:"C-Account.png",alt:"Account Class Diagram"}})]),e._v(" "),s("h3",{attrs:{id:"student"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#student","aria-hidden":"true"}},[e._v("#")]),e._v(" Student")]),e._v(" "),s("p",[e._v("This class reinforces the idea of encapsulation and constructors. It also introduces the idea of overloading the default ToString() method that every class inherits from the Object class. This example includes a driver with multiple objects, showing how the use of constructors makes it easier to create many objects in a few lines of code.")]),e._v(" "),s("p",[s("img",{attrs:{src:"C-Student.png",alt:"Student Class Diagram"}})]),e._v(" "),s("h3",{attrs:{id:"company-and-employee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#company-and-employee","aria-hidden":"true"}},[e._v("#")]),e._v(" Company and Employee")]),e._v(" "),s("p",[e._v('These are other classes similar to the Person and Student classes, but the Employee class uses Auto-Implemented properties (new since C# 3.0). Lastly, these classes "share" a driver, illustrating the fact that any given "program" typically uses more than one class.')]),e._v(" "),s("p",[s("img",{attrs:{src:"C-Company.png",alt:"Company Class Diagram"}})]),e._v(" "),s("p",[s("img",{attrs:{src:"C-Employee.png",alt:"Employee Class Diagram"}})]),e._v(" "),s("h2",{attrs:{id:"practice-exercises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#practice-exercises","aria-hidden":"true"}},[e._v("#")]),e._v(" Practice Exercises")]),e._v(" "),s("ul",[s("li",[e._v("Person - Extend the Person class to include a constructor.")]),e._v(" "),s("li",[e._v("Account – Extend the Account class from the example to include more information. Specifically, include an AccountType:String, BankName:String, BranchNumber:Integer, and InstitutionNumber:Integer.")]),e._v(" "),s("li",[e._v("CanadianAddress - This class represents an address for some place in Canada.")]),e._v(" "),s("li",[e._v("Course - This class represents a post-secondary course with a theory (exam) and a lab portion.")]),e._v(" "),s("li",[e._v("ExamResult - This class represents the results of an exam for a student.")]),e._v(" "),s("li",[e._v("LabResult - This class represents the results of an lab for a student.")])]),e._v(" "),s("h3",{attrs:{id:"person-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#person-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Person")]),e._v(" "),s("p",[e._v("This simple class illustrates and introduces the idea of encapsulation (private fields with public properties). This example uses a constructor for ensuring the state of an object when it is instantiated (created).")]),e._v(" "),s("p",[e._v("Extend the Person class from the example to include a constructor that takes in a first and last name as well as an age in the parameter list.")]),e._v(" "),s("p",[s("img",{attrs:{src:"C-Person-2.png",alt:"Person Class Diagram"}})]),e._v(" "),s("h3",{attrs:{id:"account-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Account")]),e._v(" "),s("p",[e._v("Extend the Account class from the example to include more information.")]),e._v(" "),s("p",[s("strong",[e._v("Problem Statement:")])]),e._v(" "),s("p",[e._v("Extend the Account class from the example to include more information. Specifically, include an AccountType:String, BankName:String, BranchNumber:Integer, and InstitutionNumber:Integer. Base your solution on the following class diagram.")]),e._v(" "),s("p",[s("img",{attrs:{src:"C-Account-2.png",alt:"Account Class Diagram"}})]),e._v(" "),s("p",[e._v("Also modify the driver to make use of the added information.")]),e._v(" "),s("p",[s("em",[e._v("Notes")])]),e._v(" "),s("p",[e._v('The branch number and the institution number together make up the Transit Number for a bank. "The bank transit number is 8 digits long. This is divided into a 5 digit branch number and 3 digit institution code, for example 10000-200." (See http://en.wikipedia.org/wikiSort_code)'),s("br"),e._v("\nFor more information on bank accounts and transit numbers in Canada, see http://en.wikipedia.org/wiki/Routing_transit_number#Canadian_transit_number.")]),e._v(" "),s("h3",{attrs:{id:"canadianaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canadianaddress","aria-hidden":"true"}},[e._v("#")]),e._v(" CanadianAddress")]),e._v(" "),s("p",[e._v("This class represents an address for some place in Canada.")]),e._v(" "),s("p",[s("strong",[e._v("Problem Statement:")])]),e._v(" "),s("p",[e._v("Create the CanadianAddress class so that it can represent the majority of possible addresses that some place may have in Canada. Design the class to use auto-implemented properties as specified in this class diagram. No constructor is required for this class.")]),e._v(" "),s("p",[s("img",{attrs:{src:"C-CanadianAddress.png",alt:"CanadianAddress Class Diagram"}})]),e._v(" "),s("p",[e._v("Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this namespace. In the driver, create two instances of the CanadianAddress class that represent your current address as well as the address of your school (use hard-coded data).")]),e._v(" "),s("h3",{attrs:{id:"course"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#course","aria-hidden":"true"}},[e._v("#")]),e._v(" Course")]),e._v(" "),s("p",[e._v("This class represents a post-secondary course with a theory (exam) and a lab portion.")]),e._v(" "),s("p",[s("strong",[e._v("Problem Statement:")])]),e._v(" "),s("p",[e._v('Create the Course class so that it represents a post-secondary course. Design the class to have auto-implemented properties and a constructor as specified in this class diagram. Note that the auto-implemented properties should have their "set" implementations marked as private.')]),e._v(" "),s("p",[s("img",{attrs:{src:"C-Course.png",alt:"Course Class Diagram"}})]),e._v(" "),s("p",[e._v("Also create a driver for testing this class; you may use any name for your driver as long as it is not already mentioned in this namespace. In the driver, instantiate all of the first term classes you are taking and populate those objects with data (use hard-coded data).")]),e._v(" "),s("h3",{attrs:{id:"labresult"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#labresult","aria-hidden":"true"}},[e._v("#")]),e._v(" LabResult")]),e._v(" "),s("p",[e._v("This class represents the results of a lab for a student.")]),e._v(" "),s("p",[s("strong",[e._v("Problem Statement:")])]),e._v(" "),s("p",[e._v("Create the LabResult class so that it represents the results of a lab submitted by a student. Design the class to have the fields, properties, and constructor as specified in this document. Also create a ToString() method that describes the information in any given instance of this class.")]),e._v(" "),s("p",[e._v('Use an auto-implemented property for the MarksEarned; use fields as the "backing store" for all other properties.')]),e._v(" "),s("p",[e._v('Note that the following properties should not have "set" implementations: TotalMarks, LabNumber, LabWeight, and StudentId.')]),e._v(" "),s("p",[s("img",{attrs:{src:"C-LabResult.png",alt:"LabResult Class Diagram"}})]),e._v(" "),s("p",[e._v("Here are some XML comments to describe the ToString( ) method.")]),e._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{attrs:{class:"token comment"}},[e._v("/// <summary>")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// This method overrides the default ToString() method to display ")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// more meaningful information about this object.")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// </summary>")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// <returns>A string displaying the StudentId, MarksEarned, and ")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// TotalMarks.</returns>")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// <remarks>")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// A call to this method (such as <c>Lab4.ToString()</c>) ")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// would produce the following result:")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// <code>The student (200702694) received 24.5/35 for this lab.</code>")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("/// </remarks>")]),e._v("\n")])])]),s("p",[e._v("Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this namespace. In the driver, instantiate all of the labs you have submitted to date in any course and populate those objects with data (use hard-coded data); if you haven't had any labs as of yet, then make up some data.")]),e._v(" "),s("h3",{attrs:{id:"examresult"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examresult","aria-hidden":"true"}},[e._v("#")]),e._v(" ExamResult")]),e._v(" "),s("p",[e._v("This class represents the results of an exam for a student.")]),e._v(" "),s("p",[s("strong",[e._v("Problem Statement:")])]),e._v(" "),s("p",[e._v("Create the ExamResult class so that it represents the results of an exam written by a student. Design the class to have the properties and constructors as specified in this document. (Note that there are two constructors for this class.) Also create a ToString( ) method that describes the information in any given instance of this class.")]),e._v(" "),s("p",[e._v('Use auto-implemented properties for the entire class. Note that only the following properties should have private "set" implementations: TotalMarks, ExamName, ExamWeight, and StudentId.')]),e._v(" "),s("p",[s("img",{attrs:{src:"C-ExamResult.png",alt:"ExamResult Class Diagram"}})]),e._v(" "),s("p",[e._v("Also create a driver for testing this class; you may use any name for the driver as long as it is not already mentioned in this namespace. In the driver, instantiate all of the exams you have taken to date in this course and populate those objects with data (use hard-coded data); if you need to, you may create fake data for the driver.")])])}],!1,null,null,null);r.options.__file="topic-C.md";t.default=r.exports}}]);