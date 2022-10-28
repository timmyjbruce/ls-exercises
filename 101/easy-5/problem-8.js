// Question
// =============================================================================
// Write a function that takes one argument, a positive integer, and returns a
// list of the digits in the number.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: number, positive integer
// Output: array

// Explicit requirements:
// - Array should contain each digit as a number

// Implicit requirements:
// - Elements in array are numbers (not strings)
// - 

// Examples
// ---------------------------------------------------------

// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

// Datastructure
// ---------------------------------------------------------
// Array to store digits

// Algorithm
// ---------------------------------------------------------
// Start 'digitList', set 'num'
// Convert num to string
// Split string to array
// Convert each element in array to number uy multiplying by 1
// Return value

// Code
// ---------------------------------------------------------
// Intial
function digitList(num) {
  return String(num).split('').map(el => el * 1);
}
// One-lined
const digitList = num => String(num).split('').map(el => el * 1);

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]


// Thoughts / improvements
// ---------------------------------------------------------
// Probably should have used the parseInt function to convert back to a number.


