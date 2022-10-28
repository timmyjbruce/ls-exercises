// Question
// =============================================================================
// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array that contains the product of each pair of
// numbers from the arguments that have the same index. You may assume that the
// arguments contain the same number of elements.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: 2 arrays
// Output: 1 array

// Explicit requirements:
// - Multiply like indexes across arrays
// - Return values in array of same length

// Implicit requirements:
// - None

// Examples
// ---------------------------------------------------------
// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// Datastructure
// ---------------------------------------------------------
// Array, to store products

// Algorithm
// ---------------------------------------------------------
// Start 'multiplyList', set 'arr1' & 'arr2'
// Multiply like indexes ot arr1, and arr2 and return a new array

// Code
// ---------------------------------------------------------
const multiplyList = (arr1, arr2) => arr1.map((el, index) => el * arr2[index]);

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

// Thoughts / improvements
// ---------------------------------------------------------
// None


