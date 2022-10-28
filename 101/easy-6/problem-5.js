// Question
// =============================================================================
// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: number
// Output: number

// Explicit requirements:
// - Invert the sign of a number and return

// Implicit requirements:
// - If input is 0, return negative zero

// Examples
// ---------------------------------------------------------
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

// Datastructure
// ---------------------------------------------------------
// Numbers

// Algorithm
// ---------------------------------------------------------
// Start 'negative', set 'num'
//  If 1 / num equals negative infinity return 0
//  Else if num < 0 return num * -1
//  Else return num

// Code
// ---------------------------------------------------------
// Initial
// function negative(num) {
//   if (1 / num === +Infinity) return -0;
//   if (num > 0) return num * -1;
//   return num;
// }

// Simplified
// function negative(num) {
//   if (1 / num > 0) return num * -1;
//   return num;
// }

// Simplified further
const negative = num => 1 / num > 0 ? num * -1 : num;


// console.log(-0 < 0)   // false
// console.log(-0 > 0)   // false
// console.log(-0 * -0)  // 0
// console.log(0 * -0)   // -0
// console.log(0 * -0)   // -0
// console.log(-0 === 0) // true

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


// Thoughts / improvements
// ---------------------------------------------------------



