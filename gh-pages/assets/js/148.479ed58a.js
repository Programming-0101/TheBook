(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{214:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#account","aria-hidden":"true"}},[t._v("#")]),t._v(" Account")]),s("p",[t._v("This class illustrates simple if structure in handling withdrawals; withdrawals are only made when the amount does not exceed the balance and the overdraft. It also identifies if the account is overdrawn.")]),s("p",[s("strong",[t._v("Problem Statement")])]),s("p",[t._v("Write the code that will represent a simple bank account. The solution must meet the following requirements (new requirements are in bold):")]),s("ul",[s("li",[t._v("Should get the bank name, branch number, institution number, account number, balance, overdraft limit, and account type and allow the overdraft limit to be set")]),s("li",[t._v("Should support deposits")]),s("li",[s("strong",[t._v("Should only support withdrawals if the amount does not exceed the sum of the balance and the overdraft limit")])]),s("li",[s("strong",[t._v("Should identify if the account is overdrawn")])])]),s("p",[t._v("Use the following class diagram when creating your solution.")]),s("p",[s("img",{attrs:{src:"F-Account.png",alt:"Account Class Diagram"}})]),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("  "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("Withdraw")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("double")]),t._v(" amount"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount "),s("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" Balance "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" OverdraftLimit"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          Balance "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Balance "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" amount"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n          amount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" amount"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" IsOverdrawn\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" overdrawn"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Balance "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              overdrawn "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n              overdrawn "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" overdrawn"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);