// Question
// =============================================================================
// Write a function that takes one argument, a positive integer, and returns a
// string of alternating '1's and '0's, always starting with a '1'. The length
// of the string should match the given integer.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number, positive integer
// Output: String

// Explicit requirements:
// - String should consist of alternating 1's and 0's
// - Should be length of integer
// - Should start with 1

// Implicit requirements:
// No additional

// Examples
// ---------------------------------------------------------
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// Datastructure
// ---------------------------------------------------------
// None, only strings

// Algorithm
// ---------------------------------------------------------
// Create function 'stringy', with param 'number'
// Create variable count, set to 0
// Create a varable string set to ''
// While count is less than number
// - If count is odd add '1' to end of string
// - If count is even add '0' to end of string
// - Add 1 to count
// Return string

// Code
// ---------------------------------------------------------

// Initial function
function stringy(num) {
  let string = '';
  for (let count = 0; count < num; count++ ){
    count % 2 === 0 ? string += 1 : string += 0;
  }
  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

// Thoughts / improvements
// ---------------------------------------------------------


