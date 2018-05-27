(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{320:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"comments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#comments","aria-hidden":"true"}},[s._v("#")]),s._v(" Comments")]),n("p",[s._v("This class continues the illustration of the kinds of comments allowed in the programming language. This class builds on the previous example by showing comments for fields as well as methods.")]),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("/*\n * File:    Comments.cs\n * Author:  Dan Gilleland\n * Date:    2010\n * Purpose: To illustrate multi-line, single-line, and XML comments.\n *          This is a multi-line comment.\n */")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" Topic"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("B"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Examples\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// Comments illustrates multi-line, single-line, and XML comments.")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// <remarks>")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// This class is a stand-alone class used to illustrate comments.")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v('/// This particular XML comment is "attached" to the class as')]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// a whole, while other XML comments are for fields or methods")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// in the class (a few methods and fields have been included for")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// illustration purposes).")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("/// </remarks>")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[s._v("Comments")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// Here is a simple integer variable that is pre-set to the value 5.")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <remarks>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// This is an instance member (non-static) of the class.")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </remarks>")]),s._v("\n        "),n("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("int")]),s._v(" _five "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("5")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// Here is a whole number that is pre-set to the value 0.")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <remarks>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// This field is a static member of the class.")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </remarks>")]),s._v("\n        "),n("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("int")]),s._v(" _instanceCounter "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("0")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// Here is a real number that is pre-set to the value 3.14159.")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <remarks>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// This field is a constant member of the class.")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </remarks>")]),s._v("\n        "),n("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v("  "),n("span",{attrs:{class:"token keyword"}},[s._v("double")]),s._v(" _PI "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("3.14159")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/* ****************** Methods ******************** */")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v('/// This is a method of <see cref="Comments"/>')]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <returns>This method returns a string.</returns>")]),s._v("\n        "),n("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("SimpleMethod")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"Hello World!"')]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// end of SimpleMethod()")]),s._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// This is a one-sentence description of the method.")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </summary>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v('/// <param name="name">This is where I describe the purpose of this parameter</param>')]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <returns>Here I describe what information is returned from this method.</returns>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// <remarks>")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// This method has a single parameter.")]),s._v("\n        "),n("span",{attrs:{class:"token comment"}},[s._v("/// </remarks>")]),s._v("\n        "),n("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("MethodWithParameter")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token keyword"}},[s._v("string")]),s._v(" name"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" name"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Length"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// end of MethodWithParameter(string)")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{attrs:{class:"token comment"}},[s._v("// end of Comments class")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}],!1,null,null,null);t.default=e.exports}}]);