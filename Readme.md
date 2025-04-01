## 1. Introduction to JavaScript
- [1.1 Exploring JavaScript](#11-exploring-javascript)
- [1.2 Hello World](#12-hello-world)
- [1.3 A Tour of JavaScript](#13-a-tour-of-javascript)
- [1.4 Example: Character Frequency Histograms](#14-example-character-frequency-histograms)
- [1.5 Summary](#15-summary)

## 2. Lexical Structure
- [2.1 The Text of a JavaScript Program](#21-the-text-of-a-javascript-program)
- [2.2 Comments](#22-comments)
- [2.3 Literals](#23-literals)
- [2.4 Identifiers and Reserved Words](#24-identifiers-and-reserved-words)
  - [2.4.1 Reserved Words](#241-reserved-words)
- [2.5 Unicode](#25-unicode)
  - [2.5.1 Unicode Escape Sequences](#251-unicode-escape-sequences)
  - [2.5.2 Unicode Normalization](#252-unicode-normalization)
- [2.6 Optional Semicolons](#26-optional-semicolons)
- [2.7 Summary](#27-summary)

## 3. Types, Values, and Variables
- [3.1 Overview and Definitions](#31-overview-and-definitions)
- [3.2 Numbers](#32-numbers)
  - [3.2.1 Integer Literals](#321-integer-literals)
  - [3.2.2 Floating-Point Literals](#322-floating-point-literals)
  - [3.2.3 Arithmetic in JavaScript](#323-arithmetic-in-javascript)
  - [3.2.4 Binary Floating-Point and Rounding Errors](#324-binary-floating-point-and-rounding-errors)
  - [3.2.5 Arbitrary Precision Integers with BigInt](#325-arbitrary-precision-integers-with-bigint)
  - [3.2.6 Dates and Times](#326-dates-and-times)
- [3.3 Text](#33-text)
  - [3.3.1 String Literals](#331-string-literals)
  - [3.3.2 Escape Sequences in String Literals](#332-escape-sequences-in-string-literals)
  - [3.3.3 Working with Strings](#333-working-with-strings)
  - [3.3.4 Template Literals](#334-template-literals)
  - [3.3.5 Pattern Matching](#335-pattern-matching)
- [3.4 Boolean Values](#34-boolean-values)
- [3.5 null and undefined](#35-null-and-undefined)
- [3.6 Symbols](#36-symbols)
- [3.7 The Global Object](#37-the-global-object)
- [3.8 Immutable Primitive Values and Mutable Object References](#38-immutable-primitive-values-and-mutable-object-references)
- [3.9 Type Conversions](#39-type-conversions)
  - [3.9.1 Conversions and Equality](#391-conversions-and-equality)
  - [3.9.2 Explicit Conversions](#392-explicit-conversions)
  - [3.9.3 Object to Primitive Conversions](#393-object-to-primitive-conversions)
- [3.10 Variable Declaration and Assignment](#310-variable-declaration-and-assignment)
  - [3.10.1 Declarations with let and const](#3101-declarations-with-let-and-const)
  - [3.10.2 Variable Declarations with var](#3102-variable-declarations-with-var)
  - [3.10.3 Destructuring Assignment](#3103-destructuring-assignment)
- [3.11 Summary](#311-summary)

## 4. Expressions and Operators
- [4.1 Primary Expressions](#41-primary-expressions)
- [4.2 Object and Array Initializers](#42-object-and-array-initializers)
- [4.3 Function Definition Expressions](#43-function-definition-expressions)
- [4.4 Property Access Expressions](#44-property-access-expressions)
  - [4.4.1 Conditional Property Access](#441-conditional-property-access)
- [4.5 Invocation Expressions](#45-invocation-expressions)
  - [4.5.1 Conditional Invocation](#451-conditional-invocation)
- [4.6 Object Creation Expressions](#46-object-creation-expressions)
- [4.7 Operator Overview](#47-operator-overview)
  - [4.7.1 Number of Operands](#471-number-of-operands)
  - [4.7.2 Operand and Result Type](#472-operand-and-result-type)
  - [4.7.3 Operator Side Effects](#473-operator-side-effects)
  - [4.7.4 Operator Precedence](#474-operator-precedence)
  - [4.7.5 Operator Associativity](#475-operator-associativity)
  - [4.7.6 Order of Evaluation](#476-order-of-evaluation)
- [4.8 Arithmetic Expressions](#48-arithmetic-expressions)
  - [4.8.1 The + Operator](#481-the-operator)
  - [4.8.2 Unary Arithmetic Operators](#482-unary-arithmetic-operators)
  - [4.8.3 Bitwise Operators](#483-bitwise-operators)
- [4.9 Relational Expressions](#49-relational-expressions)
  - [4.9.1 Equality and Inequality Operators](#491-equality-and-inequality-operators)
  - [4.9.2 Comparison Operators](#492-comparison-operators)
  - [4.9.3 The in Operator](#493-the-in-operator)
  - [4.9.4 The instanceof Operator](#494-the-instanceof-operator)
- [4.10 Logical Expressions](#410-logical-expressions)
  - [4.10.1 Logical AND (&&)](#4101-logical-and)
  - [4.10.2 Logical OR (||)](#4102-logical-or)
  - [4.10.3 Logical NOT (!)](#4103-logical-not)
- [4.11 Assignment Expressions](#411-assignment-expressions)
  - [4.11.1 Assignment with Operation](#4111-assignment-with-operation)
- [4.12 Evaluation Expressions](#412-evaluation-expressions)
  - [4.12.1 eval()](#4121-eval)
  - [4.12.2 Global eval()](#4122-global-eval)
  - [4.12.3 Strict eval()](#4123-strict-eval)
- [4.13 Miscellaneous Operators](#413-miscellaneous-operators)
  - [4.13.1 The Conditional Operator (?)](#4131-the-conditional-operator)
  - [4.13.2 First-Defined (??)](#4132-first-defined)
  - [4.13.3 The typeof Operator](#4133-the-typeof-operator)
  - [4.13.4 The delete Operator](#4134-the-delete-operator)
  - [4.13.5 The await Operator](#4135-the-await-operator)
  - [4.13.6 The void Operator](#4136-the-void-operator)
  - [4.13.7 The comma Operator (,)](#4137-the-comma-operator)
- [4.14 Summary](#414-summary)

## 5. Statements
- [5.1 Expression Statements](#51-expression-statements)
- [5.2 Compound and Empty Statements](#52-compound-and-empty-statements)
- [5.3 Conditionals](#53-conditionals)
  - [5.3.1 if](#531-if)
  - [5.3.2 else if](#532-else-if)
  - [5.3.3 switch](#533-switch)
- [5.4 Loops](#54-loops)
  - [5.4.1 while](#541-while)
  - [5.4.2 do/while](#542-dowhile)
  - [5.4.3 for](#543-for)
  - [5.4.4 for/of](#544-forof)
  - [5.4.5 for/in](#545-forin)
- [5.5 Jumps](#55-jumps)
  - [5.5.1 Labeled Statements](#551-labeled-statements)
  - [5.5.2 break](#552-break)
  - [5.5.3 continue](#553-continue)
  - [5.5.4 return](#554-return)
  - [5.5.5 yield](#555-yield)
  - [5.5.6 throw](#556-throw)
  - [5.5.7 try/catch/finally](#557-trycatchfinally)
- [5.6 Miscellaneous Statements](#56-miscellaneous-statements)
  - [5.6.1 with](#561-with)
  - [5.6.2 debugger](#562-debugger)
  - [5.6.3 “use strict”](#563-use-strict)
- [5.7 Declarations](#57-declarations)
  - [5.7.1 const, let, and var](#571-const-let-and-var)
  - [5.7.2 function](#572-function)
  - [5.7.3 class](#573-class)
  - [5.7.4 import and export](#574-import-and-export)
- [5.8 Summary of JavaScript Statements](#58-summary-of-javascript-statements)

## 6. Objects
- [6.1 Introduction to Objects](#61-introduction-to-objects)
- [6.2 Creating Objects](#62-creating-objects)
  - [6.2.1 Object Literals](#621-object-literals)
  - [6.2.2 Creating Objects with new](#622-creating-objects-with-new)
  - [6.2.3 Prototypes](#623-prototypes)
  - [6.2.4 Object.create()](#624-objectcreate)
- [6.3 Querying and Setting Properties](#63-querying-and-setting-properties)
  - [6.3.1 Objects As Associative Arrays](#631-objects-as-associative-arrays)
  - [6.3.2 Inheritance](#632-inheritance)
  - [6.3.3 Property Access Errors](#633-property-access-errors)
- [6.4 Deleting Properties](#64-deleting-properties)
- [6.5 Testing Properties](#65-testing-properties)
- [6.6 Enumerating Properties](#66-enumerating-properties)
  - [6.6.1 Property Enumeration Order](#661-property-enumeration-order)
- [6.7 Extending Objects](#67-extending-objects)
- [6.8 Serializing Objects](#68-serializing-objects)
- [6.9 Object Methods](#69-object-methods)
  - [6.9.1 The toString() Method](#691-the-tostring-method)
  - [6.9.2 The toLocaleString() Method](#692-the-tolocalestring-method)
  - [6.9.3 The valueOf() Method](#693-the-valueof-method)
  - [6.9.4 The toJSON() Method](#694-the-tojson-method)
- [6.10 Extended Object Literal Syntax](#610-extended-object-literal-syntax)
  - [6.10.1 Shorthand Properties](#6101-shorthand-properties)
  - [6.10.2 Computed Property Names](#6102-computed-property-names)
  - [6.10.3 Symbols as Property Names](#6103-symbols-as-property-names)
  - [6.10.4 Spread Operator](#6104-spread-operator)
  - [6.10.5 Shorthand Methods](#6105-shorthand-methods)
  - [6.10.6 Property Getters and Setters](#6106-property-getters-and-setters)
- [6.11 Summary](#611-summary)


7.  [Arrays]()

    [7.1 Creating Arrays]()

    [7.1.1 Array Literals]()

    [7.1.2 The Spread Operator]()

    [7.1.3 The Array() Constructor]()

    [7.1.4 Array.of()]()

    [7.1.5 Array.from()]()

    [7.2 Reading and Writing Array Elements]()

    [7.3 Sparse Arrays]()

    [7.4 Array Length]()

    [7.5 Adding and Deleting Array Elements]()

    [7.6 Iterating Arrays]()

    [7.7 Multidimensional Arrays]()

    [7.8 Array Methods]()

    [7.8.1 Array Iterator Methods]()

    [7.8.2 Flattening arrays with flat() and flatMap()]()

    [7.8.3 Adding arrays with concat()]()

    [7.8.4 Stacks and Queues with push(), pop(), shift(), and unshift()]()

    [7.8.5 Subarrays with slice(), splice(), fill(), and copyWithin()]()

    [7.8.6 Array Searching and Sorting Methods]()

    [7.8.7 Array to String Conversions]()

    [7.8.8 Static Array Functions]()

    [7.9 Array-Like Objects]()

    [7.10 Strings as Arrays]()

    [7.11 Summary]()

8.  [Functions]()

    [8.1 Defining Functions]()

    [8.1.1 Function Declarations]()

    [8.1.2 Function Expressions]()

    [8.1.3 Arrow Functions]()

    [8.1.4 Nested Functions]()

    [8.2 Invoking Functions]()

    [8.2.1 Function Invocation]()

    [8.2.2 Method Invocation]()

    [8.2.3 Constructor Invocation]()

    [8.2.4 Indirect Invocation]()

    [8.2.5 Implicit Function Invocation]()

    [8.3 Function Arguments and Parameters]()

    [8.3.1 Optional Parameters and Defaults]()

    [8.3.2 Rest Parameters and Variable-Length Argument Lists]()

    [8.3.3 The Arguments Object]()

    [8.3.4 The Spread Operator for Function Calls]()

    [8.3.5 Destructuring Function Arguments into Parameters]()

    [8.3.6 Argument Types]()

    [8.4 Functions as Values]()

    [8.4.1 Defining Your Own Function Properties]()

    [8.5 Functions as Namespaces]()

    [8.6 Closures]()

    [8.7 Function Properties, Methods, and Constructor]()

    [8.7.1 The length Property]()

    [8.7.2 The name Property]()

    [8.7.3 The prototype Property]()

    [8.7.4 The call() and apply() Methods]()

    [8.7.5 The bind() Method]()

    [8.7.6 The toString() Method]()

    [8.7.7 The Function() Constructor]()

    [8.8 Functional Programming]()

    [8.8.1 Processing Arrays with Functions]()

    [8.8.2 Higher-Order Functions]()

    [8.8.3 Partial Application of Functions]()

    [8.8.4 Memoization]()

    [8.9 Summary]()

9.  [Classes]()

    [9.1 Classes and Prototypes]()

    [9.2 Classes and Constructors]()

    [9.2.1 Constructors, Class Identity, and instanceof]()

    [9.2.2 The constructor Property]()

    [9.3 Classes with the class Keyword]()

    [9.3.1 Static Methods]()

    [9.3.2 Getters, Setters, and other Method Forms]()

    [9.3.3 Public, Private, and Static Fields]()

    [9.3.4 Example: A Complex Number Class]()

    [9.4 Adding Methods to Existing Classes]()

    [9.5 Subclasses]()

    [9.5.1 Subclasses and Prototypes]()

    [9.5.2 Subclasses with extends and super]()

    [9.5.3 Delegation Instead of Inheritance]()

    [9.5.4 Class Hierarchies and Abstract Classes]()

    [9.6 Summary]()

10. [Modules]()

    [10.1 Modules with Classes, Objects, and Closures]()

    [10.1.1 Automating Closure-Based Modularity]()

    [10.2 Modules in Node]()

    [10.2.1 Node Exports]()

    [10.2.2 Node Imports]()

    [10.2.3 Node-Style Modules on the Web]()

    [10.3 Modules in ES6]()

    [10.3.1 ES6 Exports]()

    [10.3.2 ES6 Imports]()

    [10.3.3 Imports and Exports with Renaming]()

    [10.3.4 Re-Exports]()

    [10.3.5 JavaScript Modules on the Web]()

    [10.3.6 Dynamic Imports with import()]()

    [10.3.7 import.meta.url]()

    [10.4 Summary]()

11. [The JavaScript Standard Library]()

    [11.1 Sets and Maps]()

    [11.1.1 The Set Class]()

    [11.1.2 The Map Class]()

    [11.1.3 WeakMap and WeakSet]()

    [11.2 Typed Arrays and Binary Data]()

    [11.2.1 Typed Array Types]()

    [11.2.2 Creating Typed Arrays]()

    [11.2.3 Using Typed Arrays]()

    [11.2.4 Typed Array Methods and Properties]()

    [11.2.5 DataView and Endianness]()

    [11.3 Pattern Matching with Regular Expressions]()

    [11.3.1 Defining Regular Expressions]()

    [11.3.2 String Methods for Pattern Matching]()

    [11.3.3 The RegExp Class]()

    [11.4 Dates and Times]()

    [11.4.1 Timestamps]()

    [11.4.2 Date Arithmetic]()

    [11.4.3 Formatting and Parsing Date Strings]()

    [11.5 Error Classes]()

    [11.6 JSON Serialization and Parsing]()

    [11.6.1 JSON Customizations]()

    [11.7 The Internationalization API]()

    [11.7.1 Formatting Numbers]()

    [11.7.2 Formatting Dates and Times]()

    [11.7.3 Comparing Strings]()

    [11.8 The Console API]()

    [11.8.1 Formatted Output with Console]()

    [11.9 URL APIs]()

    [11.9.1 Legacy URL Functions]()

    [11.10 Timers]()

    [11.11 Summary]()

12. [Iterators and Generators]()

    [12.1 How Iterators Work]()

    [12.2 Implementing Iterable Objects]()

    [12.2.1 “Closing” an Iterator: The Return Method]()

    [12.3 Generators]()

    [12.3.1 Generator Examples]()

    [12.3.2 yield\* and Recursive Generators]()

    [12.4 Advanced Generator Features]()

    [12.4.1 The Return Value of a Generator Function]()

    [12.4.2 The Value of a yield Expression]()

    [12.4.3 The return() and throw() Methods of a Generator]()

    [12.4.4 A Final Note About Generators]()

    [12.5 Summary]()

13. [Asynchronous JavaScript]()

    [13.1 Asynchronous Programming with Callbacks]()

    [13.1.1 Timers]()

    [13.1.2 Events]()

    [13.1.3 Network Events]()

    [13.1.4 Callbacks and Events in Node]()

    [13.2 Promises]()

    [13.2.1 Using Promises]()

    [13.2.2 Chaining Promises]()

    [13.2.3 Resolving Promises]()

    [13.2.4 More on Promises and Errors]()

    [13.2.5 Promises in Parallel]()

    [13.2.6 Making Promises]()

    [13.2.7 Promises in Sequence]()

    [13.3 async and await]()

    [13.3.1 await Expressions]()

    [13.3.2 async Functions]()

    [13.3.3 Awaiting Multiple Promises]()

    [13.3.4 Implementation Details]()

    [13.4 Asynchronous Iteration]()

    [13.4.1 The for/await Loop]()

    [13.4.2 Asynchronous Iterators]()

    [13.4.3 Asynchronous Generators]()

    [13.4.4 Implementing Asynchronous Iterators]()

    [13.5 Summary]()

14. [Metaprogramming]()

    [14.1 Property Attributes]()

    [14.2 Object Extensibility]()

    [14.3 The prototype Attribute]()

    [14.4 Well-Known Symbols]()

    [14.4.1 Symbol.iterator and Symbol.asyncIterator]()

    [14.4.2 Symbol.hasInstance]()

    [14.4.3 Symbol.toStringTag]()

    [14.4.4 Symbol.species]()

    [14.4.5 Symbol.isConcatSpreadable]()

    [14.4.6 Pattern-Matching Symbols]()

    [14.4.7 Symbol.toPrimitive]()

    [14.4.8 Symbol.unscopables]()

    [14.5 Template Tags]()

    [14.6 The Reflect API]()

    [14.7 Proxy Objects]()

    [14.7.1 Proxy Invariants]()

    [14.8 Summary]()

15. [JavaScript in Web Browsers]()

    [15.1 Web Programming Basics]()

    [15.1.1 JavaScript in HTML <script> Tags]()

    [15.1.2 The Document Object Model]()

    [15.1.3 The Global Object in Web Browsers]()

    [15.1.4 Scripts Share a Namespace]()

    [15.1.5 Execution of JavaScript Programs]()

    [15.1.6 Program Input and Output]()

    [15.1.7 Program Errors]()

    [15.1.8 The Web Security Model]()

    [15.2 Events]()

    [15.2.1 Event Categories]()

    [15.2.2 Registering Event Handlers]()

    [15.2.3 Event Handler Invocation]()

    [15.2.4 Event Propagation]()

    [15.2.5 Event Cancellation]()

    [15.2.6 Dispatching Custom Events]()

    [15.3 Scripting Documents]()

    [15.3.1 Selecting Document Elements]()

    [15.3.2 Document Structure and Traversal]()

    [15.3.3 Attributes]()

    [15.3.4 Element Content]()

    [15.3.5 Creating, Inserting, and Deleting Nodes]()

    [15.3.6 Example: Generating a Table of Contents]()

    [15.4 Scripting CSS]()

    [15.4.1 CSS Classes]()

    [15.4.2 Inline Styles]()

    [15.4.3 Computed Styles]()

    [15.4.4 Scripting Stylesheets]()

    [15.4.5 CSS Animations and Events]()

    [15.5 Document Geometry and Scrolling]()

    [15.5.1 Document Coordinates and Viewport Coordinates]()

    [15.5.2 Querying the Geometry of an Element]()

    [15.5.3 Determining the Element at a Point]()

    [15.5.4 Scrolling]()

    [15.5.5 Viewport Size, Content Size, and Scroll Position]()

    [15.6 Web Components]()

    [15.6.1 Using Web Components]()

    [15.6.2 HTML Templates]()

    [15.6.3 Custom Elements]()

    [15.6.4 Shadow DOM]()

    [15.6.5 Example: a <search-box> Web Component]()

    [15.7 SVG: Scalable Vector Graphics]()

    [15.7.1 SVG in HTML]()

    [15.7.2 Scripting SVG]()

    [15.7.3 Creating SVG Images with JavaScript]()

    [15.8 Graphics in a <canvas>]()

    [15.8.1 Paths and Polygons]()

    [15.8.2 Canvas Dimensions and Coordinates]()

    [15.8.3 Graphics Attributes]()

        [15.8.4 Canvas Drawing Operations]()

        [15.8.5 Coordinate System Transforms]()

        [15.8.6 Clipping]()

        [15.8.7 Pixel Manipulation]()

    [15.9 Audio APIs]()

        [15.9.1 The Audio() Constructor]()

        [15.9.2 The WebAudio API]()

    [15.10 Location, Navigation, and History]()

        [15.10.1 Loading New Documents]()

        [15.10.2 Browsing History]()

        [15.10.3 History Management with hashchange Events]()

        [15.10.4 History Management with pushState()]

    [15.11 Networking]()

        [15.11.1 fetch()]

        [15.11.2 Server-Sent Events]()

        [15.11.3 WebSockets]()

    [15.12 Storage]()

        [15.12.1 localStorage and sessionStorage]()

        [15.12.2 Cookies]()

        [15.12.3 IndexedDB]()

    [15.13 Worker Threads and Messaging]()

        [15.13.1 Worker Objects]()

        [15.13.2 The Global Object in Workers]()

        [15.13.3 Importing Code into a Worker]()

        [15.13.4 Worker Execution Model]()

        [15.13.5 postMessage(), MessagePorts, and MessageChannels]()

        [15.13.6 Cross-Origin Messaging with postMessage()]

    [15.14 Example: The Mandelbrot Set]()

    [15.15 Summary and Suggestions for Further Reading]()

        [15.15.1 HTML and CSS]()

        [15.15.2 Performance]()

        [15.15.3 Security]()

        [15.15.4 WebAssembly]()

        [15.15.5 More Document and Window Features]()

        [15.15.6 Events]()

        [15.15.7 Progressive Web Apps and Service Workers]()

        [15.15.8 Mobile Device APIs]()

        [15.15.9 Binary APIs]()

        [15.15.10 Media APIs]()

        [15.15.11 Cryptography and Related APIs]()

16. [Server-Side JavaScript with Node]()

    [16.1 Node Programming Basics]()

        [16.1.1 Console Output]()

        [16.1.2 Command-Line Arguments and Environment Variables]()

        [16.1.3 Program Life Cycle]()

        [16.1.4 Node Modules]()

        [16.1.5 The Node Package Manager]()

    [16.2 Node Is Asynchronous by Default]()

    [16.3 Buffers]()

    [16.4 Events and EventEmitter]()

    [16.5 Streams]()

        [16.5.1 Pipes]()

        [16.5.2 Asynchronous Iteration]()

        [16.5.3 Writing to Streams and Handling Backpressure]()

        [16.5.4 Reading Streams with Events]()

    [16.6 Process, CPU, and Operating System Details]()

    [16.7 Working with Files]()

        [16.7.1 Paths, File Descriptors, and FileHandles]()

        [16.7.2 Reading Files]()

        [16.7.3 Writing Files]()

        [16.7.4 File Operations]()

        [16.7.5 File Metadata]()

        [16.7.6 Working with Directories]()

    [16.8 HTTP Clients and Servers]()

    [16.9 Non-HTTP Network Servers and Clients]()

    [16.10 Working with Child Processes]()

        [16.10.1 execSync() and execFileSync()]

        [16.10.2 exec() and execFile()]

        [16.10.3 spawn()]

        [16.10.4 fork()]

    [16.11 Worker Threads]()

        [16.11.1 Creating Workers and Passing Messages]()

        [16.11.2 The Worker Execution Environment]()

        [16.11.3 Communication Channels and MessagePorts]()

        [16.11.4 Transferring MessagePorts and Typed Arrays]()

        [16.11.5 Sharing Typed Arrays Between Threads]()

    [16.12 Summary]()

17. [JavaScript Tools and Extensions]()

    [17.1 Linting with ESLint]()

    [17.2 JavaScript Formatting with Prettier]()

    [17.3 Unit Testing with Jest]()

    [17.4 Package Management with npm]()

    [17.5 Code Bundling]()

    [17.6 Transpilation with Babel]()

    [17.7 JSX: Markup Expressions in JavaScript]()

    [17.8 Type Checking with Flow]()

        [17.8.1 Installing and Running Flow]()

        [17.8.2 Using Type Annotations]()

        [17.8.3 Class Types]()

        [17.8.4 Object Types]()

        [17.8.5 Type Aliases]()

        [17.8.6 Array Types]()

        [17.8.7 Other Parameterized Types]()

        [17.8.8 Read-Only Types]()

        [17.8.9 Function Types]()

        [17.8.10 Union Types]()

        [17.8.11 Enumerated Types and Discriminated Unions]()

    [17.9 Summary]()
