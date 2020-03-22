(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{439:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"a-starting-with-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-starting-with-classes"}},[t._v("#")]),t._v(" A - Starting With Classes")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Overview & Logs")]),t._v(" "),a("p",[t._v("We are covering a "),a("em",[t._v("lot")]),t._v(" of material here as we introduce OOP programming. That's because we're assuming you've never written any code before. If you want a quick bullet-list of the the keywords and topics covered, see the "),a("RouterLink",{attrs:{to:"/Topic/A/Overview.html"}},[a("strong",[t._v("Overview")])]),t._v(". If you want to check yourself on what you're learning, run through the "),a("RouterLink",{attrs:{to:"/Topic/A/LOGs.html"}},[a("strong",[t._v("Learning Outcome Guide")])]),t._v(" for this topic. You can also jump to the code in "),a("RouterLink",{attrs:{to:"/Topic/A/Examples/"}},[a("strong",[t._v("Examples")])]),t._v(" or "),a("RouterLink",{attrs:{to:"/Topic/A/Practice/"}},[a("strong",[t._v("Practice")])]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"what-is-a-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-class"}},[t._v("#")]),t._v(" What is a Class?")]),t._v(" "),a("p",[t._v('"A '),a("em",[t._v("computer program")]),t._v(" is a "),a("strong",[t._v("set of instructions")]),t._v(" for manipulating "),a("strong",[t._v("information")]),t._v('." In the world of '),a("em",[t._v("Object Oriented Programming")]),t._v(" (OOP), the main focus is on the "),a("em",[t._v("information")]),t._v(" part of this definition.")]),t._v(" "),a("p",[t._v("The first thing we do with information is to "),a("em",[t._v("classify")]),t._v(" it. And it's from this starting point that we encounter a central keyword in C#.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v("\n")])])]),a("p",[t._v("The code we write "),a("em",[t._v("declares")]),t._v(' what things are (information) and how things behave (instructions). These are called "statements", and the first statement we\'ll examine is the '),a("strong",[t._v("class delcaration statement")]),t._v(". The description of this statement is summarized in the "),a("RouterLink",{attrs:{to:"/Teach/chapter1-7.html#class-definition"}},[t._v("simplified C# grammar")]),t._v(", but here we will look at the simplest possible example.")],1),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nothingness")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("While this is the simplest possible example, it turns out to also be the most useless ("),a("em",[t._v("hint: think of what we called it")]),t._v("). Don't worry, we'll get to better things soon.")]),t._v(" "),a("p",[t._v("I snuck in another C# keyword while you were looking:")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("public")]),t._v(' keyword is an "Access Modifier", but for now just think of it as saying that other parts of our code will be able to access it and use it freely.')]),t._v(" "),a("p",[t._v('A class describes something of interest to our program. Describing things of interest to our program is referred to as "Modeling", and is a big part of '),a("em",[t._v("Object Oriented Design")]),t._v(" (OOD).")]),t._v(" "),a("p",[t._v("Let's take another look at that first class we created.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Nothingness")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The words "),a("code",[t._v("public")]),t._v(" and "),a("code",[t._v("class")]),t._v(" are "),a("em",[t._v("keywords")]),t._v(" - they are built into the C# programming languge. But the "),a("em",[t._v("name")]),t._v(" of the class - "),a("code",[t._v("Nothingness")]),t._v(" - something we made up ourselves. When we declare a class, we have to give it a name; we call that a "),a("strong",[t._v("class name")]),t._v(" because it "),a("em",[t._v("identifies")]),t._v(" the class.")]),t._v(" "),a("p",[t._v("The curly braces "),a("code",[t._v("{ }")]),t._v(' act to "group" what "belongs to" or is "inside of" the class. It\'s like the set operators in math - everything inside the curly braces of the class definition are '),a("em",[t._v("members")]),t._v(" of that class.")]),t._v(" "),a("p",[t._v('Remember how I said that a class is a "blueprint"? The name of the class can be thought of as the name of the blueprint. I also said we were "classifying" information. Our class (blueprint) is a kind (or '),a("em",[t._v("type")]),t._v(") of information. When we declare a class, we are "),a("strong",[t._v("defining a data type")]),t._v(" for our program.")]),t._v(" "),a("p",[t._v("The C# programming language comes with a set of built-in data types as well. Two examples are "),a("code",[t._v("string")]),t._v(" and "),a("code",[t._v("int")]),t._v(". The names "),a("code",[t._v("string")]),t._v(" and "),a("code",[t._v("int")]),t._v(' are keywords of the language, and as such are already defined for us. The built-in data types are "primitive" in nature - they represent the common and '),a("em",[t._v("simple")]),t._v(" types of information that programs typically use. The class data types we declare for ourselves, on the other hand, are "),a("em",[t._v("complex")]),t._v(" in nature.")]),t._v(" "),a("h2",{attrs:{id:"better-than-nothing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#better-than-nothing"}},[t._v("#")]),t._v(" Better Than Nothing")]),t._v(" "),a("p",[t._v("Now it's time to see the traditional introductory program "),a("strong",[t._v("Hello World")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Program")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Our class name is called "),a("code",[t._v("Program")]),t._v(", and it has something inside of it: A "),a("strong",[t._v("method declaration")]),t._v('. A method is a "'),a("em",[t._v("set of instructions")]),t._v('". The highlighted lines in the sample above is a method called '),a("code",[t._v("Main")]),t._v(". That's the traditional name given to the place where the program begins (it's the \"main entry point\" of the program). It's the method that's called by the operating system when it runs your program.")]),t._v(" "),a("p",[t._v('All methods follow the same grammar; it\'s the grammar rules of the programming language that determine "what things are". Take a moment to peek at the structure of '),a("RouterLink",{attrs:{to:"/Teach/chapter1-7.html#method-declarations"}},[t._v("Method Declarations")]),t._v(" before you continue on.")],1),t._v(" "),a("p",[t._v("Inside of my Main method is a "),a("RouterLink",{attrs:{to:"/Teach/chapter1-7.html#method-calls"}},[a("strong",[t._v("method call")])]),t._v(" to the "),a("code",[t._v("WriteLine()")]),t._v(" method of the "),a("code",[t._v("Console")]),t._v(" class.")],1),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Program")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The difference between a method "),a("em",[t._v("declaration")]),t._v(" and a method "),a("em",[t._v("call")]),t._v(" is that the declaration "),a("em",[t._v("defines")]),t._v(" a set of instructions while a method call "),a("em",[t._v("invokes")]),t._v(' the method. "Invoking" simply means that we\'re telling the computer to '),a("em",[t._v("run")]),t._v(" (or "),a("em",[t._v("execute")]),t._v(") the instructions contained in that method.")]),t._v(" "),a("p",[t._v("Let's break down that line of code.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("        Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("First of all, the whole line is a single "),a("em",[t._v("instruction")]),t._v(" or "),a("RouterLink",{attrs:{to:"/Teach/chapter1-7.html#program-statements-and-statement-blocks"}},[a("em",[t._v("program statement")])]),t._v(". Program statements end with a semicolon ("),a("code",[t._v(";")]),t._v(') in much the same way that the end of a sentence in English is indicated by a period. In English, a sentence conveys a "complete thought"; in the same way, a program statement is a "complete '),a("em",[t._v("instruction")]),t._v('".')],1),t._v(" "),a("p",[t._v("The instruction begins with "),a("code",[t._v("Console")]),t._v(', which is the name of a class. The "dot operator" ('),a("code",[t._v(".")]),t._v(') indicates that we want to go "into" that '),a("code",[t._v("Console")]),t._v(' class. The formal name of the "dot operator" is the '),a("strong",[a("em",[t._v("Member Access")]),t._v(" Operator")]),t._v(". Right after that dot operator is the name of a method in that class: "),a("code",[t._v("WriteLine")]),t._v(". We know it's a "),a("em",[t._v("member")]),t._v(" of the class because it appears after the dot operator, and we know that it's a "),a("em",[t._v("method name")]),t._v(" because right after the name we have a pair of parenthesis.")]),t._v(" "),a("p",[t._v("In fact, the grammar of the method call is so precise, we can easily deduce that the "),a("em",[t._v("declaration")]),t._v(" of that method would look something like this.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Console")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Something exists here to actually display the text")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"todo-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo-notes"}},[t._v("#")]),t._v(" TODO Notes")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" StartHere\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Program")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Display the text "Hello World!"')]),t._v("\n            Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Display a blank line")]),t._v("\n            Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"let-s-start-coding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-start-coding"}},[t._v("#")]),t._v(" Let's Start Coding")]),t._v(" "),a("h2",{attrs:{id:"avoiding-collisions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avoiding-collisions"}},[t._v("#")]),t._v(" Avoiding Collisions")]),t._v(" "),a("p",[t._v("Given the notion that C# lets us define our own data types, imagine what would happen if we wanted two classes")])])}),[],!1,null,null,null);s.default=n.exports}}]);