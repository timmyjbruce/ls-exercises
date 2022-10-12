// Question
// =============================================================================
// Write a function that takes one integer argument, which may be
// positive, negative, or zero. This method returns true if the number's
// absolute value is odd. You may assume that the argument is a valid integer
// value.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Integer
// Output: Boolean true
// Other def: Absolute value = distance of number to 0 (remove negative sign)

// Questions: 
// What should be returned if not an integer. Assume no explict
// return, as is not specified.

// Examples
// ---------------------------------------------------------
// -1 -> true
// 2 -> (undefined)
// 23 -> true
// 0 -> false

// Datastructure
// ---------------------------------------------------------
// None

// Algorithm
// ---------------------------------------------------------
// Make number positive
// Calculate remainder when divied by 2
// If remainder = 1 return true

// Code
// ---------------------------------------------------------

function isOdd (num) {
  if (Math.abs(num) % 2 === 1) return true;
}

console.log(isOdd(-1)); // => true
console.log(isOdd(2)); // => (undefined)
console.log(isOdd(23)); // => true
console.log(isOdd(0)); // => (undefined)

