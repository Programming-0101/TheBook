(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{274:function(t,s,a){t.exports=a.p+"assets/img/F-ParkingCounter.c9eae7dd.png"},473:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"parkingcounter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parkingcounter","aria-hidden":"true"}},[t._v("#")]),t._v(" ParkingCounter")]),t._v(" "),n("p",[t._v("This class represents a simple counter to monitor whether a parking lot is full or not; it tracks vehicles entering and leaving the parking lot and allows the counter to be reset when the lot is full or empty. This class illustrates increment and decrement operators and/or the assignment increment or assignment decrement operators.")]),t._v(" "),n("p",[n("strong",[t._v("Problem Statement")])]),t._v(" "),n("p",[t._v("Write the code that will monitor vehicles entering and leaving a parking lot. The solution must meet the following requirements (new requirements are in bold):")]),t._v(" "),n("ul",[n("li",[t._v("Should track vehicles entering")]),t._v(" "),n("li",[t._v("Should track vehicles leaving")]),t._v(" "),n("li",[n("strong",[t._v("Should track the peak occupancy of the parking lot")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("The peak occupancy represents the highest number of cars in the parking lot at any one time")])])])]),t._v(" "),n("li",[t._v("Should get total parking spots")]),t._v(" "),n("li",[t._v("Should get open (empty) spots")]),t._v(" "),n("li",[t._v("Should reset lot as full (that is, fill the parking lot)")]),t._v(" "),n("li",[t._v("Should reset lot as empty (that is, clear all the parking spots of vehicles)")])]),t._v(" "),n("p",[t._v("Use the following class diagram when creating your solution.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(274),alt:""}})]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" PeakOccupancy "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParkingCounter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" parkingSpots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParkingSpots "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parkingSpots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OpenSpots "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parkingSpots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PeakOccupancy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParkingCounter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" parkingSpots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" numberOfCars"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParkingSpots "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parkingSpots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OpenSpots "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ParkingSpots "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" numberOfCars"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PeakOccupancy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numberOfCars"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        OpenSpots"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" numberOfCars "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ParkingSpots "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" OpenSpots"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numberOfCars "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" PeakOccupancy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            PeakOccupancy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" numberOfCars"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);