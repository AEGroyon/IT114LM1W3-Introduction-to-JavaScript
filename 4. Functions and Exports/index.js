/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Adriel Groyon'); 

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer:
// The main difference is the syntax and when they are defined. Function declarations are hoisted,
// meaning they are loaded before the script is executed. Function expressions are not hoisted. 

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width) {
    return length * width;
}

const area = calculateArea(5, 10);
console.log(`Area of the rectangle: ${area}`);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
// A callback function is a function passed as an argument to another function, which is then invoked inside the outer function.
// Example: Array.map(callbackFunction)

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

const modifyArray = function(array, modifierFunction) {
    return array.map(modifierFunction);
}

const modifiedNumbers = modifyArray(numbers, (number) => number + 1);
console.log(`Modified Numbers Array: ${modifiedNumbers}`);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
let num1 = 3;
let num2 = 5;
const mathUtils = require('./mathUtils');

console.log(`Sum of ${num1} and ${num2}: ${mathUtils.add(num1, num2)}`);
console.log(`Value of PI: ${mathUtils.PI}`);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
let string1 = 'radar';
let string2 = 'hello';
const isPalindrome = require('./isPalindrome'); // Import and call the isPalindrome method here

console.log(`Is '${string1}' a palindrome? ${isPalindrome(string1)}`);
console.log(`Is '${string2}' a palindrome? ${isPalindrome(string2)}`);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
// The require function is used in CommonJS, the module system in Node.js. It's synchronous and loads modules at runtime.
// module.exports is an object that the current module returns when it is required in another module.
// Import and export keywords are part of ES6 modules, which is asynchronous and works during the compile phase.
// Use import/export for modern development in most cases.
