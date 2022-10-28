// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array of integers
// Output: Number

// Explicit requirements:
// - Sum all integers
// - Divied by array length
// - Round down
// - Integers always positive, array always populated

// Implicit requirements:
// - None

// Examples
// ---------------------------------------------------------
// average([1, 5, 87, 45, 8, 8]) // 25
// average([9, 47, 23, 95, 16, 52]) // 40

// Datastructure
// ---------------------------------------------------------
// Number to sum array

// Algorithm
// ---------------------------------------------------------
// Start 'average', set 'array'
// Sum integers in array, and divide by length of array
// Round to floor and return value

// Code
// ---------------------------------------------------------
// Per algorithm
// const average = arr => Math.floor(arr.reduce((a, b) => a + b) / arr.length);

// With loop
// function average(arr) {
//   let sum = 0;

//   for (let num of arr) {
//     sum += num;
//   }
//   return Math.floor(sum / arr.length);
// }

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40

// Further exploration
// ---------------------------------------------------------

// Solve with the forEach method
function average(arr) {
  let sum = 0;

  arr.forEach(el => sum += el);
  return Math.floor(sum / arr.length);
}