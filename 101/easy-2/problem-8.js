// Question
// =============================================================================
// Write a function that returns an Array that contains every other element of
// an Array that is passed in as an argument. The values in the returned list
// should be those values that are in the 1st, 3rd, 5th, and so on elements of
// the argument Array.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array
// Output: Array

// Explicit requirements:
// - Return and array containing elements at even indices

// Implicit requirements:
// - If the input is an empty array, return an empty array
// - If the input is and array with a single element return input array
// - Don't mutate the input array in the process

// Examples
// ---------------------------------------------------------
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// Datastructure
// ---------------------------------------------------------
// Arrays will be used to hold every other element

// Algorithm
// ---------------------------------------------------------
// Given an array called 'array'
// Create new variable called 'arrayReduced', initialise with an empty array
// Send elements with even indices within array to arrayReduced
//  - Make a copy of the array
//  - If remainder of elements index is equal to 0;
//  - Push element to arrayReduced
// Return arrayReduced

// Code
// ---------------------------------------------------------

// Full version as per alogrithm
// function oddities(array) {
//   let arrayReduced = [];
//     array.map(element => {
//     if (array.indexOf(element) % 2 === 0) {
//       arrayReduced.push(element);
//     }
//   });
//   return arrayReduced;
// }

// Simplified version
const oddities = array => array.filter((el , index) => index % 2 === 0);

// Version that returns odd indices
// const evens = array => array.filter((el , index) => index % 2 === 1);

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []