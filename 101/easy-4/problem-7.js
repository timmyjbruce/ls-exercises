// Question
// =============================================================================

// Write a function that takes an array of numbers and returns an array with the
// same number of elements, but with each element's value being the running
// total from the original array.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array
// Output: Array

// Explicit requirements:
// - Return an array of numbers where each number is the sum of preceeding
//   numbers in the array, inclusive.
// - 

// Implicit requirements:
// - Empty array inputs should return an empty array.
// - Array inputs with single elements should return the same array.

// Examples
// ---------------------------------------------------------
// runningTotal([2, 5, 13]); // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
// runningTotal([3]); // [3]
// runningTotal([]); // []

// Datastructure
// ---------------------------------------------------------
// Arrays


// Algorithm
// ---------------------------------------------------------
// Start 'runningTotal' set 'array'
// Set 'totalledArray' to empty array
// If totalled array equals array return array.
// Add each array element to the last element of totalledArray
// Add summed element as last element in totalledArray
// Return totalledArray


// Code
// ---------------------------------------------------------
// Initial version
function runningTotal(array) {
  let totalledArray = [];
  array.forEach(el => totalledArray.push(el + el[el.length -1]));
  return array;
}
console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []


// Thoughts / improvements
// ---------------------------------------------------------
// Works becasue forEach doesn't run on empty arrays. Initial was unsure of
// behaviour here

// Further exploration
// ---------------------------------------------------------
// Can swap in the map method to my current solution and it works fine. 

// The map method is well suited to problems where you need to access each
// individual array element but don't want to mutate the original array. 


