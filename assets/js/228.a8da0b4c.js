(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{561:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"studentfileadapter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#studentfileadapter","aria-hidden":"true"}},[t._v("#")]),t._v(" StudentFileAdapter")]),t._v(" "),a("p",[t._v("This reads a text file to fill a list of Student data.")]),t._v(" "),a("ul",[a("li",[t._v("Record Structure:"),a("br"),t._v("\na. Student Id : Integer"),a("br"),t._v("\nb. Name : String"),a("br"),t._v("\nc. Gender : GenderType")])]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("StudentFileAdapter")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token preprocessor property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("region")]),t._v(" Read from a file")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LoadList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" filePath"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FileFormat")]),t._v(" format"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("format "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" FileFormat"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CSV"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LoadList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CSVFileIO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LoadList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token generic-method"}},[a("span",{attrs:{class:"token function"}},[t._v("XMLFileIO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filePath"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LoadList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("CSVFileIO")]),t._v(" reader"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token generic-method"}},[a("span",{attrs:{class:"token function"}},[t._v("List")]),a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" lines "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" reader"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ReadAllLines")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" individualLine "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" lines"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// code specifics here..")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fields "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" individualLine"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("','")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Convert"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ToInt32")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fields"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fields"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token class-name"}},[t._v("GenderType")]),t._v(" gender "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GenderType"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("System"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Enum"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Parse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GenderType"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fields"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LoadList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XMLFileIO"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" reader"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" reader"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("LoadAll")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token preprocessor property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("endregion")])]),t._v("\n\n    "),a("span",{attrs:{class:"token preprocessor property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("region")]),t._v(" Write to a file")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("SaveList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" fileName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FileFormat")]),t._v(" format"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" append"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("format "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" FileFormat"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CSV"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("SaveList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CSVFileIO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" append"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("SaveList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token generic-method"}},[a("span",{attrs:{class:"token function"}},[t._v("XMLFileIO")]),a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileName"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" append"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("SaveList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("CSVFileIO")]),t._v(" writer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" append"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" lines "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token generic-method"}},[a("span",{attrs:{class:"token function"}},[t._v("List")]),a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" item "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            lines"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("Add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StudentId"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ToString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('","')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" item"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('","')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" item"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Gender"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ToString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        writer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("WriteAllLines")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lines"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" append"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("SaveList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XMLFileIO"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" writer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" List"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Student"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" append"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        writer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("SaveAll")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" append"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token preprocessor property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("endregion")])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);o.options.__file="StudentFileAdapter.md";s.default=o.exports}}]);