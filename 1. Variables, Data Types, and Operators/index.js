/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var varVariable = "Display var keyword"
var varVariable = "Updated var keyword"
console.log(varVariable) 

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let letVariable = "Display let keyword"
letVariable = "Updated let keyword"
console.log(letVariable) 

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const conVariable = "Display const keyword"
console.log(conVariable)
/*  
conVariable = "Updated const keyword"
console.log(conVariable)
// Reassigning the value of the variable in the const keyword produces an error
// Therefore the values in the keyword const can't reassigned
*/

// Checkpoint 1.1 What is the difference between var, let, and const?
/* 
    Answer: 
    var: The Traditional Variable Declaration: When using var, variables are function-scoped, 
    meaning they are accessible only within the function in which they are defined.

    let: Embracing Block-Level Scope: Variables declared with let are exclusively accessible within the 
    block they are defined in, whether it is a function, an if statement, or a loop.

    const: Immutable Variables: Once assigned a value, constants cannot be reassigned or modified. 

    Notes: var is like a global variable, unlike let
    var a
    console.log(a) // undefined 
    a = 10

    console.log(b) // error
    let b = 10
*/

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
let a = 10
let b = 5

// Addition
let sum = a + b // 15

// Subtraction
let difference = a - b // 5

// Multiplication
let product = a * b // 50

// Division
let quotient = a / b // 2

// Modulus (remainder)
let remainder = a % b // 0

// Increment 
let incrementA = ++a // a becomes 11

// Decrement
let decrementB = --b // b becomes 4

// Checkpoint 1.2 What operators did you use?
// Answer: Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%),
// Increment (++), Decrement (--)

// Your code here
console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)
console.log(remainder)
console.log(incrementA)
console.log(decrementB)


// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let firstName = "Adriel"
let lastName = "Groyon"

// String Concatenation
let fullName = firstName + " " + lastName

// String Length
let nameLength = fullName.length

// Accessing Characters
let firstChar = fullName[0] 
let lastChar = fullName[nameLength - 1]

// Substring 
let substring = fullName.substring(0, 3)

// String interpolation using template literals
let greeting = `Hello, ${fullName}!`

// Checkpoint 1.3 What operators did you use?
// Answer: String Concatenation, String Length, Accessing Characters, Substring, String interpolation

// Your code here
console.log(firstName)
console.log(lastName)
console.log(fullName)
console.log(nameLength)
console.log(firstChar)
console.log(lastChar)
console.log(substring)
console.log(greeting)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let c = true
let d = false

// AND (&&) Operator
let andResult = c && d

// OR (||) Operator
let orResult = c || d

// NOT (!) Operator
let notResultC = !c
let notResultD = !d

// Equality (==) Operator
let equalityResult = (c == d)

// Inequality (!=) Operator
let inequalityResult = (c != d)

// Strict Equality (===) Operator
let strictEqualityResult = (c === d)

// Strict Inequality (!==) Operator
let strictInequalityResult = (c !== d)

// Checkpoint 1.4 What operators did you use?
// Answer: AND (&&), OR (||), NOT (!), Equality (==), Inequality (!=), 
// Strict Equality (===), Strict Inequality (!==)


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
let x = 5
let y = 10

// Greater Than (>)
let greaterThanResult = x > y

// Less Than (<)
let lessThanResult = x < y

// Greater Than or Equal To (>=)
let greaThanOrEqualToResult = x >= y

// Less Than or Equal To (<=)
let lessThanOrEqualToResult = x <= y

// Equal To (==)
let eqaulToResult = x == y

// Not Equal To (!=)
let notEqualTo = x != y

// Strict Equal To (===)
let strictEqualToResult = x === y

// Strict Not Equal To (!==)
let strictNotEqualToResult = x !== y


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
let emptyArray = []
let booleanValue = false

// Using loose equality (==)
let looseEqualityResult1 = emptyArray == booleanValue
// Using strict equality (===)
let strictEqualityResult1 = emptyArray === booleanValue


