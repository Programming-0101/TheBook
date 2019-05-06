(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{373:function(e,a,t){"use strict";t.r(a);var s=t(2),n=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"a-simplified-c-grammar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-simplified-c-grammar","aria-hidden":"true"}},[e._v("#")]),e._v(" A Simplified C# Grammar")]),e._v(" "),t("blockquote",[t("p",[e._v("A language "),t("strong",[e._v("grammar")]),e._v(" is a set of small rules that can be combined to produce a "),t("strong",[e._v("syntax")]),e._v(".")])]),e._v(" "),t("p",[e._v("The many small rules in the C# programming language is its "),t("em",[t("strong",[e._v("grammar")])]),e._v(". These rules specify the accepted way to write C# code. Individually, each rule in itself is not enough to produce complete working code. Instead, the rules are like building blocks, offering various ways to assemble or construct your code.")]),e._v(" "),t("p",[e._v("Take, for example, some of the grammar around "),t("strong",[e._v("variable declarations")]),e._v(" and "),t("strong",[e._v("program statements")]),e._v(". A simplified grammar for declaring a variable in C# would look like this:")]),e._v(" "),t("blockquote",[t("p",[e._v("***  dataType variableName***")])]),e._v(" "),t("p",[e._v("We would have to supply both a data type and a variable name to declare a variable. Thus, if we wanted to store a whole number to represent a count, we could use the "),t("code",[e._v("int")]),e._v(" keyword and write the following:")]),e._v(" "),t("p",[t("code",[e._v("int count")])]),e._v(" "),t("p",[e._v("By itself, this variable declaration is not enough to produce a complete instruction in C#. We have to combine the "),t("em",[e._v("variable declaration")]),e._v(" grammar with the grammar for a "),t("em",[e._v("program statement")]),e._v(" in order to make a single instruction telling the computer to create the variable. In general, a program statement must be a statement that ends with a semicolon ("),t("code",[e._v(";")]),e._v("). In other words, the "),t("em",[e._v("program statement")]),e._v(' grammar requires the semicolon as "punctuation", much in the same way that English sentences must end in a period. Thus, our completed syntax for creating a variable would be')]),e._v(" "),t("p",[t("code",[e._v("int count;")])]),e._v(" "),t("p",[e._v('The formal grammar for C# is actually quite large and complex. In fact, the grammars for most programming languages are so complex that they require another "language" to describe the grammar. An early and fairly standard language or means to express grammars is the '),t("strong",[e._v("Bakus-Naur Form")]),e._v(", or "),t("em",[e._v("BNF")]),e._v(".")]),e._v(" "),t("p",[e._v("For our purposes, we will present a much more "),t("em",[e._v("simplified")]),e._v(" grammar. The following sections express the bulk of the C# grammar used in this introduction to programming fundamentals in C#.")]),e._v(" "),t("h2",{attrs:{id:"common-grammar-elements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-grammar-elements","aria-hidden":"true"}},[e._v("#")]),e._v(" Common Grammar Elements")]),e._v(" "),t("p",[e._v("Most of the grammar rules in C# are quite short, defining the order of "),t("strong",[e._v("keywords")]),e._v(", "),t("strong",[e._v("identifiers")]),e._v(" and "),t("strong",[e._v("symbols")]),e._v(". In the following grammars, the use of square brackets ("),t("strong",[t("code",[e._v("[]")])]),e._v(") indicate an optional part of the syntax for the grammar rule; those square brackets are "),t("em",[e._v("not")]),e._v(" actual symbols in the final syntax of the grammar. With each of the rules is a very brief explanation. Later chapters will go into more depth and provide examples of how to use these grammars.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"program-statements-and-statement-blocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#program-statements-and-statement-blocks","aria-hidden":"true"}},[e._v("#")]),e._v(" Program Statements and Statement blocks")]),e._v(" "),t("p",[e._v("Individual instructions are known as "),t("strong",[e._v("Program Statements")]),e._v(". The instructions can be short and simple, or they can be long an complex. In either case, the program statement must end in a semicolon (😉. These individual instructions run sequentially, one after the other, so the order of individual instructions is important.")]),e._v(" "),t("p",[e._v("Besides individual instructions, we can group individual statements into "),t("strong",[e._v("Statement Blocks")]),e._v(". A statement block is a set of zero or more program statements that are enclosed in a set of curly braces ("),t("code",[e._v("{ }")]),e._v("). Statement blocks are frequently used with "),t("strong",[e._v("Flow Control Statements")]),e._v(" (such as the "),t("code",[e._v("if")]),e._v(" and "),t("code",[e._v("for")]),e._v(" statements).")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"variable-declarations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variable-declarations","aria-hidden":"true"}},[e._v("#")]),e._v(" Variable Declarations")]),e._v(" "),t("p",[e._v("Before a variable can be used, it must be "),t("em",[e._v("declared")]),e._v(". Declaring a variable tells the compiler to")]),e._v(" "),t("ul",[t("li",[e._v("set aside room in memory to store information,")]),e._v(" "),t("li",[e._v("treat that data as a specific data type, and")]),e._v(" "),t("li",[e._v("refer to that information by the variable name")])]),e._v(" "),t("p",[e._v("The grammar for declaring variables is as follows.")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[e._v("dataType variableName "),t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" expression"),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),t("p",[e._v("A "),t("strong",[e._v("Variable Declaration")]),e._v(" defines a new variable where\n: "),t("code",[e._v("dataType")]),e._v(" is any built-in or programmer-defined data type.\n: "),t("code",[e._v("variableName")]),e._v(" is\n: an optional initial value may be assigned, as denoted by "),t("code",[e._v("[= expression]")]),e._v(", where "),t("code",[e._v("expression")]),e._v(" is any valid C# expression whose final data type matches the variable's data type. When a variable is declared and initialized at the same time, it is called a "),t("strong",[e._v("Variable Initialization")]),e._v(".\n: additional variable names (with or without initial values) can be declared using a comma-separated list. All variables are of the same data type as the first variable in the list.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"assignment-operation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assignment-operation","aria-hidden":"true"}},[e._v("#")]),e._v(" Assignment Operation")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[e._v("variableName assignmentOperator expression\n")])])]),t("p",[t("strong",[e._v("Assignment Operations")]),e._v(" are operations where a value is assigned or stored in a variable.\n: "),t("code",[e._v("variableName")]),e._v(" is the name of the variable that will receive/store the value.\n: "),t("code",[e._v("assignmentOperator")]),e._v(" is one of the following:\n"),t("strong",[t("code",[e._v("=")])]),e._v(" Equals\n"),t("strong",[t("code",[e._v("+=")])]),e._v(" Plus-Equals\n"),t("strong",[t("code",[e._v("-=")])]),e._v(" Minus-Equals\n"),t("strong",[t("code",[e._v("*=")])]),e._v(" Multiply-Equals\n"),t("strong",[t("code",[e._v("/=")])]),e._v(" Divide-Equals\n"),t("strong",[t("code",[e._v("%=")])]),e._v(" Modulus-Equals\n: "),t("code",[e._v("expression")]),e._v(" is any valid C# expression whose final data type matches the variable's data type.\n: An assignment operation is made into an "),t("strong",[e._v("assignment statement")]),e._v(" by adding a semicolon to the end of the operation. For example,\n"),t("code",[e._v("total = price * quantity;")])]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"expressions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expressions","aria-hidden":"true"}},[e._v("#")]),e._v(" Expressions")]),e._v(" "),t("p",[e._v("An "),t("strong",[e._v("Expression")]),e._v(" is any combination of "),t("em",[e._v("literal values")]),e._v(", "),t("em",[e._v("variable names")]),e._v(", "),t("em",[e._v("operators")]),e._v(" (such as the arithmetic operators), and/or "),t("em",[e._v("method calls")]),e._v(" (where the method returns a value). When an expression is processed by the computer, a single value is produced. This value can then be used in whatever operation the expressions occurs. For example, the value might be passed into a method as part of a method call, or it might be placed in a variable as part of an assignment statement.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"namespace-declaration-and-using-statements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#namespace-declaration-and-using-statements","aria-hidden":"true"}},[e._v("#")]),e._v(" Namespace Declaration and Using Statements")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" Name\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{attrs:{class:"token comment"}},[e._v("// Classes, enumerations, or other programmer-defined data types")]),e._v("\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("A "),t("strong",[e._v("Namespace Declaration")]),e._v(" groups "),t("em",[t("strong",[e._v("programmer-defined")])]),e._v(" data types where\n: The "),t("code",[e._v("Name")]),e._v(" of the namespace can be one or more dot-separated names. For example, the following are all valid names for namespaces.\n"),t("code",[e._v("System")]),e._v(" "),t("code",[e._v("System.Collections")]),e._v(" "),t("code",[e._v("MyGame")]),e._v(" "),t("code",[e._v("MyGame.GameRules")])]),e._v(" "),t("p",[t("strong",[e._v("Namespaces")]),e._v(' are used to group classes and other programmer-defined data types into a single named group. The reason for grouping programmer-defined data types into namespaces is to prevent what are called "naming collisions". A naming collision is where two or more classes or other programmer-defined data types are given the same name. In other words, you cannot have two classes named '),t("code",[e._v("Circle")]),e._v(" in the same namespace. However, if you place those two classes in different namespaces, then that is acceptable because the compiler will then be able to distinguish between the two classes based on the namespace they belong to.")]),e._v(" "),t("p",[e._v("Whenever a class or other data type is placed in a namespace, that namespace becomes part of the "),t("em",[t("strong",[e._v("fully-qualified")])]),e._v(" name of the data type. For example, if a class named "),t("code",[e._v("Circle")]),e._v(" is placed in a namespace called "),t("code",[e._v("Geometry.Shapes")]),e._v(", then the fully qualified name of the class is "),t("code",[e._v("Geometry.Shapes.Circle")]),e._v(".")]),e._v(" "),t("p",[e._v("Namespaces allow us to isolate our classes and other data types into groups. All of the classes/data types in a given namespace can automatically reference each other. To reference or use data types in other namespaces, we must either use their fully-qualified names or "),t("em",[e._v("include")]),e._v(" them through the "),t("strong",[e._v("Using Statement")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[e._v("using")]),e._v(" NamespaceName"),t("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("The using statement allows access to all the data types in referenced namespace. Using statements are typically placed at the beginning of a file. The "),t("code",[e._v("NamespaceName")]),e._v(" is simply the complete name of the namespace that contains the classes or data types that we want to access.")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"classes-and-class-members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classes-and-class-members","aria-hidden":"true"}},[e._v("#")]),e._v(" Classes and Class Members")]),e._v(" "),t("p",[e._v("As an object-oriented language, classes play a very prominent part of the code we write in C#. It is within classes, for example, that we place variables (also called "),t("em",[e._v("fields")]),e._v(') and methods (which are "'),t("em",[e._v("named")]),e._v(' sets of instructions"). One of the first things that classes give us developers is a '),t("em",[e._v("context")]),e._v(" or "),t("em",[t("strong",[e._v("scope")])]),e._v(' for the code that we write. Classes are also building blocks, acting as blueprints for new and complex data types that we as programmers can create as we develop richer and more complex computer programs. Classes permeate all the code that we write in C# and are so fundamental that you can\'t even write a "Hello World" program without them.')]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"class-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-definition","aria-hidden":"true"}},[e._v("#")]),e._v(" Class Definition")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("accessModifier"),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{attrs:{class:"token class-name"}},[e._v("ClassName")]),e._v("\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{attrs:{class:"token comment"}},[e._v("// FieldDeclarations")]),e._v("\n  "),t("span",{attrs:{class:"token comment"}},[e._v("// PropertyDeclarations")]),e._v("\n  "),t("span",{attrs:{class:"token comment"}},[e._v("// Constructors")]),e._v("\n  "),t("span",{attrs:{class:"token comment"}},[e._v("// MethodDeclarations")]),e._v("\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("A "),t("strong",[e._v("Class Definition")]),e._v(" describes a new data type where\n: "),t("code",[e._v("[accessModifier]")]),e._v(" is either "),t("code",[e._v("public")]),e._v("{format: csharp} or "),t("code",[e._v("internal")]),e._v("{format:csharp}. If no access modifier is provided, then the default modifier is "),t("code",[e._v("internal")]),e._v("{format:csharp}.\n: "),t("code",[e._v("ClassName")]),e._v(" is the programmer-supplied name for the class (in TitleCase format)\n: "),t("code",[e._v("FieldDeclarations")]),e._v(", "),t("code",[e._v("PropertyDeclarations")]),e._v(", "),t("code",[e._v("Constructors")]),e._v(" and "),t("code",[e._v("MethodDeclarations")]),e._v(" are all optional and can appear in any order.\nSee the related grammars below to see how they are defined.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"field-declarations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#field-declarations","aria-hidden":"true"}},[e._v("#")]),e._v(" Field Declarations")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("accessModifier"),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{attrs:{class:"token keyword"}},[e._v("static")]),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" dataType _FieldName "),t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" constantExpression"),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("A "),t("strong",[e._v("Field Declaration")]),e._v(" identifies a "),t("em",[e._v("static")]),e._v(" or "),t("em",[e._v("instance")]),e._v(" member variable of the class where\n: "),t("code",[e._v("[accessModifier]")]),e._v(" is either "),t("code",[e._v("public")]),e._v("{format: csharp}, "),t("code",[e._v("private")]),e._v("{format: csharp}, "),t("code",[e._v("protected")]),e._v("{format: csharp}, or "),t("code",[e._v("internal")]),e._v("{format:csharp}. If no access modifier is provided, then the default modifier is "),t("code",[e._v("private")]),e._v("{format:csharp}.\n: "),t("code",[e._v("[static]")]),e._v("{format:csharp} is an optional keyword. If present, the field is "),t("em",[e._v("shared")]),e._v(" among all instances of the class. If absent (which is the common case) then the field is an "),t("em",[e._v("instance")]),e._v(" member and one is created every time an object based on the class is created.\n: "),t("code",[e._v("dataType")]),e._v(" is any built-in data type or the name of a programmer-defined data type.\n: "),t("code",[e._v("_FieldName")]),e._v(" is a the name you give to the member variable. By convention, private fields are given an underscore as a prefix to the name.\n: "),t("code",[e._v("constantExpression")]),e._v(" is an optional expression that generates data whose value can be determined at compile time. Being a constant expression does "),t("em",[e._v("not")]),e._v(" mean that the field is a constant, only that the initial value stored in the field is a constant and can be known at compile time "),t("em",[e._v("before")]),e._v(" the program runs.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"property-declarations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#property-declarations","aria-hidden":"true"}},[e._v("#")]),e._v(" Property Declarations")]),e._v(" "),t("p",[e._v("Properties are a kind of cross between methods and fields. On one hand, they are used in the same way that fields are. When you want to assign (or "),t("strong",[e._v("set")]),e._v(") a value to a property, you place the property on the left side of the assignment operator. When you want to use (or "),t("strong",[e._v("get")]),e._v(") the properties value, you simply reference the property name just as you would a field name.")]),e._v(" "),t("p",[e._v("Internally, however, the "),t("strong",[e._v("get")]),e._v(" and "),t("strong",[e._v("set")]),e._v(" operations are like the bodies of a method, where you can place instructions to retrieve or change the data in the class or object.")]),e._v(" "),t("h4",{attrs:{id:"explicitly-implemented-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explicitly-implemented-property","aria-hidden":"true"}},[e._v("#")]),e._v(" Explicitly Implemented Property")]),e._v(" "),t("p",[e._v("Explicitly implemented properties are properties where the programmer supplies the getter and setter implementations. The bodies of the getter and setter may reference a field (known as a "),t("strong",[e._v("backing store")]),e._v(") that holds the actual information. In these cases, the property is working to provide a "),t("strong",[e._v("controlled access")]),e._v(" to the underlying field's data.")]),e._v(" "),t("p",[e._v("In other situations, a property may merely have a getter where the body of the getter "),t("em",[e._v("derives")]),e._v(" or "),t("em",[e._v("calculates")]),e._v(" a value to return from some other source, such as a calculation.")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("accessModifier"),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{attrs:{class:"token keyword"}},[e._v("static")]),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" dataType PropertyName\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{attrs:{class:"token keyword"}},[e._v("get")]),e._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{attrs:{class:"token comment"}},[e._v("// Body of getter")]),e._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{attrs:{class:"token keyword"}},[e._v("set")]),e._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{attrs:{class:"token comment"}},[e._v("// Body of setter")]),e._v("\n    "),t("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("A "),t("strong",[e._v("Property Declaration")]),e._v(" identifies a "),t("em",[e._v("static")]),e._v(" or "),t("em",[e._v("instance")]),e._v(" member of the class where\n: "),t("code",[e._v("[accessModifier]")]),e._v(" is either "),t("code",[e._v("public")]),e._v("{format: csharp}, "),t("code",[e._v("private")]),e._v("{format: csharp}, "),t("code",[e._v("protected")]),e._v("{format: csharp}, or "),t("code",[e._v("internal")]),e._v("{format:csharp}. If no access modifier is provided, then the default modifier is "),t("code",[e._v("private")]),e._v("{format:csharp}.\n: "),t("code",[e._v("[static]")]),e._v("{format:csharp} is an optional keyword. If present, the Property is "),t("em",[e._v("shared")]),e._v(" among all instances of the class. If absent (which is the common case) then the Property is an "),t("em",[e._v("instance")]),e._v(" member.\n: "),t("code",[e._v("dataType")]),e._v(" is any built-in data type or the name of a programmer-defined data type.\n: "),t("code",[e._v("PropertyName")]),e._v(" is a the name you give to the member property.\n: "),t("code",[e._v("Body of getter")]),e._v(" is a set of instructions that must ultimately return a value of the same data type as the property.\n: "),t("code",[e._v("Body of the setter")]),e._v(" is a set of instructions that can process incoming data that is in the "),t("code",[e._v("value")]),e._v("{format:csharp} keyword. A typical implementation will store that data into the property's backing store.")]),e._v(" "),t("h3",{attrs:{id:"autoimplemented-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autoimplemented-property","aria-hidden":"true"}},[e._v("#")]),e._v(" Autoimplemented Property")]),e._v(" "),t("p",[e._v("Autoimplemented properties are properties where the compiler takes care of the getter and setter implementations and also supplies a hidden field as the "),t("strong",[e._v("backing store")]),e._v(" for the property. The default get implementation is to retrieve the value from the backing store while the default set implementation is to place a value into the backing store.")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("accessModifier"),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{attrs:{class:"token keyword"}},[e._v("static")]),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" dataType PropertyName "),t("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{attrs:{class:"token keyword"}},[e._v("get")]),t("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{attrs:{class:"token keyword"}},[e._v("set")]),t("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("A "),t("strong",[e._v("Property Declaration")]),e._v(" identifies a "),t("em",[e._v("static")]),e._v(" or "),t("em",[e._v("instance")]),e._v(" member of the class where\n: "),t("code",[e._v("[accessModifier]")]),e._v(" is either "),t("code",[e._v("public")]),e._v("{format: csharp}, "),t("code",[e._v("private")]),e._v("{format: csharp}, "),t("code",[e._v("protected")]),e._v("{format: csharp}, or "),t("code",[e._v("internal")]),e._v("{format:csharp}. If no access modifier is provided, then the default modifier is "),t("code",[e._v("private")]),e._v("{format:csharp}.\n: "),t("code",[e._v("[static]")]),e._v("{format:csharp} is an optional keyword. If present, the Property is "),t("em",[e._v("shared")]),e._v(" among all instances of the class. If absent (which is the common case) then the Property is an "),t("em",[e._v("instance")]),e._v(" member.\n: "),t("code",[e._v("dataType")]),e._v(" is any built-in data type or the name of a programmer-defined data type.\n: "),t("code",[e._v("PropertyName")]),e._v(" is a the name you give to the member property.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"method-declarations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-declarations","aria-hidden":"true"}},[e._v("#")]),e._v(" Method Declarations")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("accessModifier"),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{attrs:{class:"token keyword"}},[e._v("static")]),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" returnType "),t("span",{attrs:{class:"token function"}},[e._v("MethodName")]),t("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ParameterList"),t("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{attrs:{class:"token comment"}},[e._v("// body of method")]),e._v("\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("A "),t("strong",[e._v("Method Declaration")]),e._v(" defines a "),t("em",[e._v("named")]),e._v(" set of instructions.\n: "),t("code",[e._v("[accessModifier]")]),e._v(" is either "),t("code",[e._v("public")]),e._v("{format: csharp}, "),t("code",[e._v("private")]),e._v("{format: csharp}, "),t("code",[e._v("protected")]),e._v("{format: csharp}, or "),t("code",[e._v("internal")]),e._v("{format:csharp}. If no access modifier is provided, then the default modifier is "),t("code",[e._v("private")]),e._v("{format:csharp}.\n: "),t("code",[e._v("[static]")]),e._v("{format:csharp} is an optional keyword. If present, the method is "),t("em",[e._v("shared")]),e._v(" among all instances of the class. If absent (which is the common case) then the method is an "),t("em",[e._v("instance")]),e._v(" member.\n: "),t("code",[e._v("returnType")]),e._v(" is any built-in data type or the name of a programmer-defined data type. The return type signifies the kind of information that the method will return. If the method does not return any information, then the keyword "),t("code",[e._v("void")]),e._v(" is used as the return type.\n: "),t("code",[e._v("MethodName")]),e._v(" is a the name you give to the method.\n: "),t("code",[e._v("ParameterList")]),e._v(" is a comma-separated list of individual variable declarations.")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"constructors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constructors","aria-hidden":"true"}},[e._v("#")]),e._v(" Constructors")]),e._v(" "),t("div",{staticClass:"language-csharp extra-class"},[t("pre",{pre:!0,attrs:{class:"language-csharp"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[e._v("[")]),e._v("accessModifier"),t("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{attrs:{class:"token function"}},[e._v("ClassName")]),t("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ParameterList"),t("span",{attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{attrs:{class:"token comment"}},[e._v("// body of constructor")]),e._v("\n"),t("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("A "),t("strong",[e._v("Constructor")]),e._v(" is a set of instructions used when "),t("strong",[e._v("instantiating")]),e._v(" (creating) an object.\n: "),t("code",[e._v("[accessModifier]")]),e._v(" is either "),t("code",[e._v("public")]),e._v("{format: csharp}, "),t("code",[e._v("private")]),e._v("{format: csharp}, "),t("code",[e._v("protected")]),e._v("{format: csharp}, or "),t("code",[e._v("internal")]),e._v("{format:csharp}. If no access modifier is provided, then the default modifier is "),t("code",[e._v("private")]),e._v("{format:csharp}.\n: "),t("code",[e._v("ClassName")]),e._v(" - All constructors use the name of the class to which they belong as the name of the constructor.\n: "),t("code",[e._v("ParameterList")]),e._v(" is a comma-separated list of individual variable declarations.\n: Classes never return any information - they are simply blocks of instructions used to set up the "),t("strong",[e._v("initial state")]),e._v(" of the object.")]),e._v(" "),t("h2",{attrs:{id:"flow-control-statements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flow-control-statements","aria-hidden":"true"}},[e._v("#")]),e._v(" Flow-Control Statements")]),e._v(" "),t("ul",[t("li",[e._v("If-Else")]),e._v(" "),t("li",[e._v("Case")]),e._v(" "),t("li",[e._v("For and Foreach")]),e._v(" "),t("li",[e._v("While and Do-While")])])])},[],!1,null,null,null);n.options.__file="chapter1-7.md";a.default=n.exports}}]);