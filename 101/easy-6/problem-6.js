// Question
// =============================================================================


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: Array

// Explicit requirements:
// - Produce an array containing numbers from 1 - num
// 

// Implicit requirements:
// -

// Examples
// ---------------------------------------------------------
// sequence(5); // [1, 2, 3, 4, 5] 
// sequence(3); // [1, 2, 3] 
// sequence(1); // [1] 

// Datastructure
// ---------------------------------------------------------
// Array to store and return incrementing numbers

// Algorithm
// ---------------------------------------------------------
// Start 'sequence', set 'num'
// Create an array with lenght  of num + 1
// Get array keys as array
// Remove first key (0)
// Return array

// ** Alt solution **
// Start 'sequence', set 'num'
// Set array to empty array
// While num is greater or equal to 1
// - Add num to array
// Return array

// ** Also **
// Consider rest operator
// Simple recursive?

// Code
// ---------------------------------------------------------
// Per intitial algo
function sequence(num) {
  let array = [];
  while (num >= 1) {
    array.unshift(num);
    num--
  }
  return array;
}

// With some google help for array generation
// function sequence(num) {
//   return Array.from((Array(num + 1).keys())).slice(1);
// }

console.log(sequence(5)); // [1, 2, 3, 4, 5] 
console.log(sequence(3)); // [1, 2, 3] 
console.log(sequence(1)); // [1] 

// Thoughts / improvements
// ---------------------------------------------------------



