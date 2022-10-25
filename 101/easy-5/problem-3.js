// Question
// =============================================================================
// Write a function that takes an array as an argument and returns an array that
// contains two elements, each of which is an array. Put the first half of the
// original array elements in the first element of the return value, and put the
// second half in the second element. If the original array contains an odd
// number of elements, place the middle element in the first half array.




// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array
// Output: Array with two sub arrays

// Explicit requirements:
// - Split supplied array into two nested subarrays
// - If an odd number of elements first array takes that larer amount
// 

// Implicit requirements:
// - If the supplied array is empty is should return an array with two empty
//   sub arrays.

// Examples
// ---------------------------------------------------------
// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

// Datastructure
// ---------------------------------------------------------
// Array with 2x nested arrays

// Algorithm
// ---------------------------------------------------------
// Start 'halvsies', set 'array'
// Set 'combined' as an empty array
// Set 'left' as a copy of supplied array
// Set 'right' as that latter portion of left, rounded down, mutating left
// Send left and right to halvies as elements 1 and 2
// Return combined

// Code
// ---------------------------------------------------------
// Initial function
function halvsies(array) {
  let left = array.slice();
  let right =left.splice(Math.ceil(array.length / 2));
  return [left, right];
}

// Simplified, if we don;t care about mutating the input array
function halvsies(array) {
  return [array.slice(), array.splice(Math.ceil(array.length / 2))];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

// Thoughts / improvements
// ---------------------------------------------------------

// 'Simplified version' is harder to understand.

