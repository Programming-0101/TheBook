(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{234:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"currencycalculator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#currencycalculator","aria-hidden":"true"}},[t._v("#")]),t._v(" CurrencyCalculator")]),a("p",[t._v("The CurrencyCalculator allows the conversion of US dollars to four other currencies, given the current exchange rate of those currencies.")]),a("p",[a("strong",[t._v("Problem Statement")])]),a("p",[t._v("A currency exchange store at the international airport needs a program to convert from US dollars to four other currencies: Canadian dollar, Euro, Japanese Yen, and the Great Britain Pound. The store uses a set exchange rate for each currency as established at the start of the day. Write the code for a class called CurrencyCalculator to meet this need. The solution must meet the following requirements:")]),a("ul",[a("li",[t._v("Should correctly convert US dollars to the\n"),a("ul",[a("li",[t._v("British Pound (GBP)")]),a("li",[t._v("Canadian Dollar (CAD)")]),a("li",[t._v("Euro (EUR)")]),a("li",[t._v("Japanese Yen (JPY)")])])]),a("li",[t._v("Should use the correct level of precision when making the exchange; each currency uses a different number of significant digits:\n"),a("ul",[a("li",[t._v("CAD, GBP and EUR use two digits")]),a("li",[t._v("JPY uses three digits")])])])]),a("p",[t._v("To illustrate the possible exchange rates, please refer to the following images.")]),a("p",[a("img",{attrs:{src:"E-CurrencyExchange.png",alt:"Currency exchange rates sourced from http://www.x-rates.com"}})]),a("p",[a("img",{attrs:{src:"E-CurrencyAmericanDollar.png",alt:""}})]),a("p",[t._v("Use the following class diagram when creating your solution.")]),a("p",[a("img",{attrs:{src:"E-CurrencyCalculator.png",alt:"CurrencyCalculator Class Diagram"}})]),a("p",[t._v("As a starter, you can use the following code to begin creating your class.")]),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CurrencyCalculator")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// The following are multipliers to convert the")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// US dollar to different currencies.")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* The multiplier to convert US dollars to Canadian dollars. */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" _ToCanadian"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// CAD - Canadian Dollar")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* The multiplier to convert US dollars to the Euro. */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" _ToEuro"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("// EUR - Euro")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* The multiplier to convert US dollars to the Japanese Yen. */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" _ToYen"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("// JPY - Japanese Yen")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* The multiplier to convert US dollars to the British Pound. */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" _ToPound"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("// GBP - Great Britain Pound")]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* The number of significant digits for the Canadian dollar.\n     * The unit for portions of a dollar is the Cent. */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" _CadDigits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Cents")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* The number of significant digits for the Euro.\n     * The unit for portions of a dollar is the Cent. */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" _EuroDigits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Cents")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* The number of significant digits for the Japanese Yen.\n     * The unit for 1/100<sup>th</sup> portions of the Yen is the Sen,\n     * while each 1/1000<sup>th</sup> is known as a Rin. */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" _YenDigits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 1/100 is sen, 1/1000 is rin")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* The number of significant digits for the British Pound.\n     * The unit for portions of a Pound is the Pence (or P). */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" _PoundDigits "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Pence (or p)")]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n     * This constructor initializes a CurrencyCalculator object\n     * by taking the supplied parameter values and storing\n     * them in the fields of this instance of the class.\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("CurrencyCalculator")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" toCanadian"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" toEuro"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" toYen"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" toPound"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// Your code goes here...")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/* ************** Methods **************** */")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// Your code goes here...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);