// Question 
// Write a function that takes one integer argument, which may be
// positive, negative, or zero. This method returns true if the number's
// absolute value is odd. You may assume that the argument is a valid integer
// value.

// PEDAC

// Problem:
// Input: Number
// Output: Boolean, if true
// Other def: Absolute value = distance of number to 0 (remove negative sign)

// Examples: See below

// Data structure: NA

// Algorithm:
// Make number positive
// If remainder = 1 return true, else false

// Code:

function isOdd (num) {
  return (Math.abs(num) % 2 === 1);
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
