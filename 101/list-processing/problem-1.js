// Question
// =============================================================================
// Write a function that takes one argument, a positive integer, and returns the
// sum of its digits. Do this without using for, while, or do...while loops -
// instead, use a series of method calls to perform the sum.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: Number

// Explicit requirements:
// -

// Implicit requirements:
// -

// Examples
// ---------------------------------------------------------
// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Start 'sum' , set 'num'
// Convert num to string, 
// Split num into array where each char is an element
// Add each element to a final sum, converting to number before adding
// Return final sum

// Code
// ---------------------------------------------------------
// Intial per algorithm
function sum(number){
  return String(number).split('').reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45



