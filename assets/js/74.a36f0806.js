(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{332:function(t,a,s){t.exports=s.p+"assets/img/F-Account.6a827fd2.png"},528:function(t,a,s){"use strict";s.r(a);var n=s(22),e=Object(n.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"account"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#account","aria-hidden":"true"}},[t._v("#")]),t._v(" Account")]),t._v(" "),n("p",[t._v("This class illustrates simple if structure in handling withdrawals; withdrawals are only made when the amount does not exceed the balance and the overdraft. It also identifies if the account is overdrawn.")]),t._v(" "),n("p",[n("strong",[t._v("Problem Statement")])]),t._v(" "),n("p",[t._v("Write the code that will represent a simple bank account. The solution must meet the following requirements (new requirements are in bold):")]),t._v(" "),n("ul",[n("li",[t._v("Should get the bank name, branch number, institution number, account number, balance, overdraft limit, and account type and allow the overdraft limit to be set")]),t._v(" "),n("li",[t._v("Should support deposits")]),t._v(" "),n("li",[n("strong",[t._v("Should only support withdrawals if the amount does not exceed the sum of the balance and the overdraft limit")])]),t._v(" "),n("li",[n("strong",[t._v("Should identify if the account is overdrawn")])])]),t._v(" "),n("p",[t._v("Use the following class diagram when creating your solution.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(332),alt:"Account Class Diagram"}})]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Withdraw")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" amount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" Balance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" OverdraftLimit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          Balance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Balance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" amount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n          amount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" amount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" IsOverdrawn\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" overdrawn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Balance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              overdrawn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n              overdrawn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" overdrawn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);