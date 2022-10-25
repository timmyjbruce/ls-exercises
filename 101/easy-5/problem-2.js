// Question
// =============================================================================
// Write a function that takes two arrays as arguments and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates in
// the original arrays. You may assume that both arguments will always be
// arrays.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Arrays x 2
// Output: Array

// Explicit requirements:
// - Return an array that combines values of both arrays into single array
// - No duplicate values
// - No validation required, arguments are always an array

// Implicit requirements:
// - Elements of second array should be sent to first array, unless element
//   already exists in first array
// - Should avoid mutating the caller
// - First array can be returned

// Examples
// ---------------------------------------------------------
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// Datastructure
// ---------------------------------------------------------
// Arrays

// Algorithm
// ---------------------------------------------------------
// Start 'union', set 'array1' & 'array2'
// Set 'unified' to be a copy of array1
// Check each element array2
// If element does not exist in unified, push that value to unified
// Return unified

// Code
// ---------------------------------------------------------
// Initial function
// function union(array1, array2) {
//   let unified = array1.slice();
//   array2.map(el => {
//     if(!unified.includes(el)) {
//       unified.push(el);
//     }
//   });
//   return unified
// }

// Simplified, could one-line it but affects readability
const union = (array1, array2) => {
  return array1.concat(array2.filter(element => {
    return !array1.includes(element)
  }));
}
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// Thoughts / improvements
// ---------------------------------------------------------
// The LS version made used of the rest parameter to allow for 1+ arguments.
// Need to look for opporunites to practive this.


