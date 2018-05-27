(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{202:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"stockitem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stockitem","aria-hidden":"true"}},[t._v("#")]),t._v(" StockItem")]),a("p",[t._v("This class represents an item that is part of an inventory. The item has an item name, a cost and a profit margin (which can be positive or negative). By using the profit margin, it can derive the price of the item. The class can also report if the item is priced at or below cost.")]),a("p",[a("strong",[t._v("Problem Statement")])]),a("p",[t._v("Write the code for the StockItem class. The solution must meet the following requirements (new requirements are in "),a("strong",[t._v("bold")]),t._v("):")]),a("ul",[a("li",[t._v("Should get and set the name, cost and profit margin of the stock item")]),a("li",[t._v("Should represent the profit margin as a percent; a value of 45 means 45%")]),a("li",[t._v("Should calculate the price of the item, to the nearest cent\n"),a("ul",[a("li",[t._v("Use the rounding where values under a half-cent are rounded down and values greater than or equal to a half-cent are rounded up")])])]),a("li",[a("strong",[t._v("Should recognize when the stock item is priced at cost (that is, the profit margin is zero)")])]),a("li",[a("strong",[t._v("Should recognize when the stock item is priced below cost (that is, the profit margin is negative)")])])]),a("p",[t._v("Use the following class diagram when creating your solution.")]),a("p",[a("img",{attrs:{src:"F-StockItem.png",alt:"StockItem Class Diagram"}})]),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" IsPricedAtCost\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" atCost "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ProfitMargin "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              atCost "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" atCost"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" IsPricedBelowCost\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" belowCost"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ProfitMargin "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              belowCost "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n              belowCost "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" belowCost"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);