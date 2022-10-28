// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Repeat each character in the string, adjacent to itself and return the result

// Implicit requirements:
// - Includes spaces and punctuation
// - Empty strings should return and empty string

// Examples
// ---------------------------------------------------------
// console.log(repeater('Hello')) // 'HHeelloo'
// console.log(repeater('Good job!')) // 'GGoooodd  jjoobb!!'
// console.log(repeater('')) // ''

// Datastructure
// ---------------------------------------------------------
// Array to hold characters?

// Algorithm
// ---------------------------------------------------------
// Start 'repeater', set 'string'
// Set repeated to ''
// Loop through characters in string
// Send character to repeated, twice

// Code
// ---------------------------------------------------------

// Loop based
// const repeater = string => {
//   let repeated = '';
  
//   for (let i = 0; i < string.length; i++) {
//     repeated += string[i] + string[i];
//   }
//   return repeated;
// }

// Array method based
const repeater = string => string.split('').map(a => a + a). join('');


console.log(repeater('Hello')) // 'HHeelloo'
console.log(repeater('Good job!')) // 'GGoooodd  jjoobb!!'
console.log(repeater('')) // ''


