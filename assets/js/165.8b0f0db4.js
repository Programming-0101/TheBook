(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{463:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"memoryaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memoryaddress","aria-hidden":"true"}},[t._v("#")]),t._v(" MemoryAddress")]),t._v(" "),a("p",[t._v("This class represents a single memory address in both its base 10 and hexadecimal value.")]),t._v(" "),a("p",[a("strong",[t._v("Base ten")]),t._v(" is the common number system that we use in every day life. Base ten uses the digits 0-9 and the concept of the "),a("em",[t._v("position")]),t._v(" of a digit occupying some multiple of ten. Thus, for the number 129 there is a hundreds-position (10^2), a tens-position (10^1) and a ones-position (10^0).")]),t._v(" "),a("div",{staticClass:"language-plaintext extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("129 base 10\n||\\\n|\\ \\_ 10^0 * 9 =>   9\n| \\\n\\  \\_ 10^2 * 2 =>  20\n \\\n  \\\n   \\_ 10^3 * 1 => 100\n                 ====\n                  129\n")])])]),a("p",[t._v("Converting a value from one base to another (such as base-10 to base-16) involves thinking about the digit positions of the target base. Base 16 uses the digits 0-9 along with the letters A through F for the range of hex values zero to fifteen. Each digit position in a base-16 number can hold a value of 0 to F. Thus, a digit in the ones position is worth 1 times the digit. A two-digit hex value would have the sixteens-position (16^1) and a ones-position (16^0). A three-digit hex value would add onto that a two-hundred-and-fifty-sixth-position (16^2). For example, to convert the number 679 base 10 to a base 16, you would follow these steps.")]),t._v(" "),a("ul",[a("li",[t._v("Divide the original number by the two-hundred-and-fifty-sixth-position (16^2). Then use the remainder in calculating the next position (16^1). "),a("code",[t._v("\\include{longdiv} \\longdiv{679}{256}")]),t._v("$")]),t._v(" "),a("li",[t._v("Dividing the previous steps remainder (167) by 16 gives the result of 10, which is the hex-digit of "),a("code",[t._v("A")]),t._v(". "),a("code",[t._v("\\include{longdiv} \\longdiv{167}{16}")]),t._v("$")]),t._v(" "),a("li",[t._v("The remainder of that last step is the ones-position")]),t._v(" "),a("li",[t._v("Thus, the base-10 value 679 is "),a("code",[t._v("2B9")]),t._v(" in base-16.")])]),t._v(" "),a("div",{staticClass:"language-plaintext extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("2B9 base 16\n||\\\n|\\ \\_ 16^0 * 9  =>    9\n| \\\n\\  \\_ 16^2 * 11 =>  176\n \\\n  \\\n   \\_ 16^3 * 2  =>  512\n                   ====\n                    679 base 10\n")])])]),a("p",[t._v("The following class demonstrates a small memory address (up to four hexadecimal digits) as a "),a("code",[t._v("short")]),t._v(" and a string representation of hexadecimal.")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MemoryAddress")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("short")]),t._v(" Base10Value "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" HexValue\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" hex "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0x"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// A short number in hexadecimal ")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("// will be at most 4 digits")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("//    FFFF")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("//    ||||")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("//    |||- 16^0 =>    1")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("//    ||-- 16^1 =>   16")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("//    |--- 16^2 =>  256")]),t._v("\n                "),a("span",{attrs:{class:"token comment"}},[t._v("//    ---- 16^3 => 4096")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Base10Value"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" portion "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4096")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                hex "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ToHexDigit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("portion"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" portion"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                portion "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("256")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                hex "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ToHexDigit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("portion"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" portion"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                portion "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("16")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                hex "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ToHexDigit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("portion"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                portion "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("value")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("16")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                hex "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ToHexDigit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("portion"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" hex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("MemoryAddress")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("short")]),t._v(" address"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Base10Value "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" address"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ToHexDigit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" number"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" number"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("ToString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"A"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("11")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"B"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("12")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"C"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("13")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"D"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("14")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"E"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"F"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Should never happen...")]),t._v("\n                result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);e.options.__file="MemoryAddress.md";s.default=e.exports}}]);