(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{359:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"interlude-1-console-input-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interlude-1-console-input-output","aria-hidden":"true"}},[t._v("#")]),t._v(" Interlude 1 - Console Input/Output")]),t._v(" "),a("p",[t._v("Console applications are often used as a means to learn how to program. In such applications, user input and output is solely text-based.")]),t._v(" "),a("p",[t._v("Sending text to the console is done through the "),a("code",[t._v("Console")]),t._v(" class' "),a("code",[t._v(".Write()")]),t._v(" and "),a("code",[t._v(".WriteLine()")]),t._v(" methods. Simply pass some value into the those methods, and it will be displayed on the screen.")]),t._v(" "),a("p",[t._v("For example, try the following:")]),t._v(" "),a("ol",[a("li",[t._v("Create a C# console application named "),a("strong",[t._v("UserIO")]),t._v(".")]),t._v(" "),a("li",[t._v("Modify the "),a("em",[t._v("Program.cs")]),t._v(" file's "),a("code",[t._v("Main()")]),t._v(" method to match the following.")])]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Main")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"The following text is output "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"on the same line."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Run the program (press "),a("kbd",[t._v("Ctrl")]),t._v(" + "),a("kbd",[t._v("F5")]),t._v(") and observe the output, which should look something like this:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Hello World\nThe following text is output on the same line.\nPress any key to continue...\n")])])]),a("p",[t._v("User input is performed by calling the "),a("code",[t._v(".ReadLine()")]),t._v(" method, which will return a string. You use the method by storing the resulting user input into a variable. Modify your "),a("strong",[t._v("UserIO")]),t._v(" program above by adding the following lines to the end of the "),a("code",[t._v("Main()")]),t._v(" method.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Type in your name and press [Enter]: "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ReadLine")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v('Asking the user to input enter information is referred to as "prompting" the user. The text output in the code '),a("code",[t._v('.Write("Type in your name and press [Enter]: ")')]),t._v(' above is called the "user prompt". To complete the "prompting", a call to '),a("code",[t._v(".ReadLine()")]),t._v(" will capture the user's input.")]),t._v(" "),a("p",[t._v("Notice also what we have done in the last line. We can take the user's input and concatenate it with the text "),a("code",[t._v('"Hello "')]),t._v(" as we send it back out to the console. "),a("strong",[t._v("String concatenation")]),t._v(' is accomplished by "adding" strings together. The text '),a("code",[t._v('"Hello "')]),t._v(" is a "),a("strong",[t._v("string literal")]),t._v(" while the "),a("code",[t._v("name")]),t._v(" variable holds a string "),a("strong",[t._v("value")]),t._v('. Thus, if the user entered "Dan" when prompted, the output would be')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Hello Dan\n")])])]),a("p",[t._v("An alternative to string concatenation is using the "),a("code",[t._v("string.Format()")]),t._v(" method. The "),a("code",[t._v(".Format()")]),t._v(' method works by including a "placeholder" in the string passed in as the first argument. Placeholders are written as a number inside of a set of curly braces. The number corresponds to the position of the arguments sent in after the first argument. Thus, we could have written that line as')]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello {0}"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Notice that the placeholder is "),a("code",[t._v("{0}")]),t._v(". The variable "),a("code",[t._v("name")]),t._v(' is in the "zero-th" position after the literal text. You\'ll have an idea later on when we talk about arrays about why we start the number at 0 instead of 1.')]),t._v(" "),a("p",[t._v("The ."),a("code",[t._v("WriteLine()")]),t._v(" method has a version that allows you to get the same result without calling "),a("code",[t._v("string.Format()")]),t._v(". Basically, this version makes use of the format method internally.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello {0}"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Since version 6 of the C# programming language, a cleaner alternative to these formatting approaches is available. It's called "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("string interpolation")]),a("OutboundLink")],1),t._v(". Using string interpolation, the code could have been written as")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),a("span",{attrs:{class:"token string"}},[t._v('"Hello {name}"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("String interpolation is indicated by the dollar sign immediately preceeding the literal string. This way of concatenating string values has the benefit of being easier to read and understand where variable values are being inserted into the text.")])])},[],!1,null,null,null);e.options.__file="console-1.md";s.default=e.exports}}]);