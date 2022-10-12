// Question 
// =============================================================================
// Log all even numbers from 1 to 99, inclusive, to the console, with each
// number on a separate line.


// PEDAC
// =============================================================================

// Problem 
// ---------------------------------------------------------
// Explicit requirements:
// - Log even numbers between 1-99,
// - Numbers on seperate lines

// Examples
// ---------------------------------------------------------
// Should log:
// 4
// 6
// ...
// 96
// 98

// Datastructure
// ---------------------------------------------------------
// Individual intergers

// Algorithm
// ---------------------------------------------------------
// Input: nothing
// Output: See examples

// Start of program
// Get start number
// If number is even log to console
// Repeat until end number reached

// Code
// ---------------------------------------------------------

// Solution:

for (let i = 2; i < 100; i += 2) console.log(i);

// or this which preserves the range (1-99) used in the question:

for (let i = 1; i < 100; i += 1) {
  if (i % 2 === 0) console.log(i);
}