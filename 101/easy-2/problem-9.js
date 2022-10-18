// Question
// =============================================================================

// The parseInt() method converts a string of numeric characters (including an
// optional plus or minus sign) to an integer. The method takes 2 arguments
// where the first argument is the string we want to convert and the second
// argument should always be 10 for our purposes. parseInt() and the Number()
// method behave similarly. In this exercise, you will create a function that
// does the same thing.

// Write a function that takes a string of digits and returns the appropriate
// number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about
// invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in
// JavaScript, such as String() and Number(). Your function should do this the
// old-fashioned way and calculate the result by analyzing the characters in the
// string.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Number

// Explicit requirements:
// - Convert numerical string to number
// - Assume all characters will be numeric
// - Can't use standard functions
// - Analyse characters individually

// Implicit requirements:
// -

// Examples
// ---------------------------------------------------------

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

// Datastructure
// ---------------------------------------------------------
// Arrays to hold string's characters

// Algorithm
// ---------------------------------------------------------
// ** Simple algorithym using inplicit conversion ** 
// Create a function callled stringToInteger
// Given string called 'string'
// Multiply string by '1'
// Return string

// ** As asked for by question **
// Create a function callled stringToInteger
// Given string called 'string'
// Create array acceptedNumbers containing elements 1..10
// Create variable final num
// Seperate string characers into array
// Check each character is non-strictly equal to each element in acceptedNumbers
// If number is equal
// If its equal push number to finalNum
// Return finalNum

// Code
// ---------------------------------------------------------

// Simple version

const stringToInteger = string => string * 1;


// Version with individual character analysis, with implicit conversion

// function stringToInteger(string) {
//   let acceptedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let finalNum = '';

//   string.split('').map(element => {
//     acceptedNumbers.map(number => {
//       if (number == element) finalNum += element;
//     });
//   });
//   return finalNum * 1;
// };


// Version with individual character analysis, without implicit conversion

// function stringToInteger(string) {
//   let acceptedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let finalNum = 1;
//   let factor = 10 ** (string.length - 1);

//   string.split('').map(element => {
//     acceptedNumbers.map(number => {
//       if (number == element) {
//         finalNum += number * factor
//         factor /= 10;     
//       }
//     });
//   });
//   return finalNum - 1;
// };

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true


// Thoughts /improvements needed
// ---------------------------------------------------------
// Second version is quite complicated. Definitly ways to improve. Originall relied on 