(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{519:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"topic-o-file-i-o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topic-o-file-i-o","aria-hidden":"true"}},[t._v("#")]),t._v(" Topic O - File I/O")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("All of the File I/O examples follow the same design pattern. This pattern is a form of what is called the Adapter Pattern. Each class has the following characteristics.")]),t._v(" "),s("p",[t._v("All of the text files used in this topic have their records delimited by carriage returns and their fields delimited by commas. File input is achieved through use of the Scanner class. The Scanner is also used to parse each record by specifying the use of the comma delimiter.")]),t._v(" "),s("p",[t._v("File Input/Output (IO) is all about using files for storing and retrieving data. These files exist “outside” of your program, and code is required to transfer the data between the file and the objects/variables in your program.")]),t._v(" "),s("p",[t._v("Data inside of files can be stored in either a binary or a text format. All of these examples will deal with text files. When using text files, the text itself needs to follow some pattern in order to distinguish the individual pieces of data from each other.")]),t._v(" "),s("p",[t._v("An old and traditional way of storing the text is to use a CSV (Comma-Separated Values) format. In this format, each row of information (also known as a “record” of data) is broken down into individual pieces of data by separating each piece (or “field”) by a comma. Rows are separated by a new line (or “carriage return”) marker. This format has had the advantage of being easy for humans to read and edit directly; it is also fairly flexible and programmers can easily adapt the form to fit the shape of the data they wish to store.")]),t._v(" "),s("p",[t._v("A more modern approach is to store the textual information in XML (eXtensible Markup Language) format. While also being human-readable and easy to format, XML has the advantage of making it easier for computer programs to read and save data that is both relational and complex. XML format uses “tags” (or “mark-up”) to wrap data. For example, if information on a person (“Bob Smith”) is stored in an XML file, it might look like this.")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Person")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FirstName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Bob"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("FirstName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("LastName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Smith"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("LastName")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Person")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("File Input/Output is best performed by having one class (or object) deal with formatting the data and a separate class to deal with directly accessing the file. In the following examples, the CSVFileIO and XMLFileIO classes read and write directly to the files, while the other classes (which end with “Adapter”) are concerned with determining the format of the data.")]),t._v(" "),s("h4",{attrs:{id:"csvfileio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csvfileio","aria-hidden":"true"}},[t._v("#")]),t._v(" CSVFileIO")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/// The CSVFileStorage class provides simple reading of all the lines of text of a CSV (Comma-Separated-Values) file.")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("CSVFileIO")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" FilePath "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/// Initializes a new instance of the CSVFileStorage class.")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("CSVFileIO")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" filePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        FilePath "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" filePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("ReadAllLines")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" lines "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token generic-method"}},[s("span",{attrs:{class:"token function"}},[t._v("List")]),s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("TextReader")]),t._v(" reader "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StreamReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FilePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" aSingleLine "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" reader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("ReadLine")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aSingleLine "),s("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                lines"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aSingleLine"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                aSingleLine "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" reader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("ReadLine")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" lines"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("WriteAllLines")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" lines"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" append"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("TextWriter")]),t._v(" writer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StreamWriter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FilePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" append"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" line "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" lines"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                writer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("WriteLine")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"xmlfileio"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xmlfileio","aria-hidden":"true"}},[t._v("#")]),t._v(" XMLFileIO")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/// <summary>")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/// The XMLFileIO class manages loading and saving any type to an XML file.")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/// </summary>")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("XMLFileIO")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" FilePath "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("XMLFileIO")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" filePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        FilePath "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" filePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("LoadAll")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token class-name"}},[t._v("XmlSerializer")]),t._v(" deserializer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("XmlSerializer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("TextReader")]),t._v(" textReader "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StreamReader")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FilePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            data "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("deserializer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Deserialize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textReader"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            textReader"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Close")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("SaveAll")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" append"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("append "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" File"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Exists")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FilePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" existingData "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("LoadAll")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            existingData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("AddRange")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            data "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" existingData"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" stream "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" File"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Open")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FilePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileMode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OpenOrCreate"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token class-name"}},[t._v("XmlSerializer")]),t._v(" serializer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("XmlSerializer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("TextWriter")]),t._v(" writer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StreamWriter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                serializer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Serialize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("writer"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                writer"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Close")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logs","aria-hidden":"true"}},[t._v("#")]),t._v(" LOGs")]),t._v(" "),s("ul",[s("li",[t._v("A constructor that takes a valid File object")]),t._v(" "),s("li",[t._v("A method called fill() that takes an array as the parameter and returns the number of entries created in the array from having read the file.")])])])}],!1,null,null,null);e.options.__file="ReadMe.md";a.default=e.exports}}]);