(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{327:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"interlude-1-console-input-output"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interlude-1-console-input-output","aria-hidden":"true"}},[t._v("#")]),t._v(" Interlude 1 - Console Input/Output")]),t._v(" "),n("p",[t._v("Console applications are often used as a means to learn how to program. In such applications, user input and output is solely text-based.")]),t._v(" "),n("p",[t._v("Sending text to the console is done through the "),n("code",[t._v("Console")]),t._v(" class' "),n("code",[t._v(".Write()")]),t._v(" and "),n("code",[t._v(".WriteLine()")]),t._v(" methods. Simply pass some value into the those methods, and it will be displayed on the screen.")]),t._v(" "),n("p",[t._v("For example, try the following:")]),t._v(" "),n("ol",[n("li",[t._v("Create a C# console application named "),n("strong",[t._v("UserIO")]),t._v(".")]),t._v(" "),n("li",[t._v("Modify the "),n("em",[t._v("Program.cs")]),t._v(" file's "),n("code",[t._v("Main()")]),t._v(" method to match the following.")])]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Main")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Write")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"The following text is output "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Write")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"on the same line."')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("Run the program (press "),n("kbd",[t._v("Ctrl")]),t._v(" + "),n("kbd",[t._v("F5")]),t._v(") and observe the output, which should look something like this:")])]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Hello World\nThe following text is output on the same line.\nPress any key to continue...\n")])])]),n("p",[t._v("User input is performed by calling the "),n("code",[t._v(".ReadLine()")]),t._v(" method, which will return a string. You use the method by storing the resulting user input into a variable. Modify your "),n("strong",[t._v("UserIO")]),t._v(" program above by adding the following lines to the end of the "),n("code",[t._v("Main()")]),t._v(" method.")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("    System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Write")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Type in your name and press [Enter]: "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" name "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ReadLine")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v('Asking the user to input enter information is referred to as "prompting" the user. The text output in the code '),n("code",[t._v('.Write("Type in your name and press [Enter]: ")')]),t._v(' above is called the "user prompt". To complete the "prompting", a call to '),n("code",[t._v(".ReadLine()")]),t._v(" will capture the user's input.")]),t._v(" "),n("p",[t._v("Notice also what we have done in the last line. We can take the user's input and concatenate it with the text "),n("code",[t._v('"Hello "')]),t._v(" as we send it back out to the console. "),n("strong",[t._v("String concatenation")]),t._v(' is accomplished by "adding" strings together. The text '),n("code",[t._v('"Hello "')]),t._v(" is a "),n("strong",[t._v("string literal")]),t._v(" while the "),n("code",[t._v("name")]),t._v(" variable holds a string "),n("strong",[t._v("value")]),t._v('. Thus, if the user entered "Dan" when prompted, the output would be')]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Hello Dan\n")])])])])}],!1,null,null,null);e.options.__file="console-1.md";s.default=e.exports}}]);