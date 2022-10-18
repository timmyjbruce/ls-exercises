// Question
// =============================================================================
// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next, you're
// going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2,
// 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. Your function should do this the old-fashioned way and
// construct the string by analyzing and manipulating the number.




// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String of numbers
// Output: Number

// Explicit requirements:
// - Must output a string version of the argument passed to it
// - Can't use common methods or use an expression with an empty string
// - String will be a non-negative integer

// Implicit requirements:
// None

// Examples
// ---------------------------------------------------------
// integerToString(4321);        // "4321"
// integerToString(0);           // "0"
// integerToString(5000);        // "5000"
// integerToString(1234567890);  // "1234567890"

// Datastructure
// ---------------------------------------------------------
// Arrays to hold converted characters

// Algorithm
// ---------------------------------------------------------
// Create a function called 'integerToString' with an parameter of 'number'
// Create  a empty string variable called numString
// Create an array of acceptable string values called acceptedNumStrings
// Send number to array as strings
// - Caluculate the numbers remainder when divided by 10 assign to variable 'count'
// - Non-strictly compare remainder to elements in acceptedNumStrings
// - If number similar, concatenate element to numString variable
// - Subtract remainder from number and divide by it by 10
// - Repeat above for each character in string
//   - When number is equal to 0 end loop
// Join and return string array

// Code
// ---------------------------------------------------------

function integerToString(num) {
  const VALIDNUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numString = '';
  do {
    numString = VALIDNUMS.find(string => string == num % 10) + numString;
    num = (num - (num % 10)) / 10
   } while (num > 0)

   return numString;
};

console.log(integerToString(0));           // "0"
console.log(integerToString(4321));        // "4321"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
