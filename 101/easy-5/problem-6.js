// Question
// =============================================================================
// Write a function that takes an array of integers as input, multiplies all of
// the integers together, divides the result by the number of entries in the
// array, and returns the result as a string with the value rounded to three
// decimal places.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: array
// Output: string

// Explicit requirements:
// - Get product of all element
// - Divide if by array length
// - Round to three decimal places
// - Return as string

// Implicit requirements:
// - String should inlcude '0' out to three dp

// Examples
// ---------------------------------------------------------
// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// Datastructure
// ---------------------------------------------------------
// None, numbers

// Algorithm
// ---------------------------------------------------------
// Start 'multiplicativeAverage', set 'arr'
// Set 'num' to product of array elements, divide by length
// Round num to 2sf and convert to string, pad end if needed
// Return num

// Code
// ---------------------------------------------------------
function multiplicativeAverage(array) {
  let num = array.reduce((a, b) => a * b);
  num /= array.length;
  return num.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"


// Thoughts / improvements
// ---------------------------------------------------------
// None. LS solution uses a loop, unsure which approach is better.


