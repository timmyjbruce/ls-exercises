// Question
// =============================================================================
// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 (inclusive).


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: None
// Output: Concatenated string

// Explicit requirements:
// - Randomly generate age and concatenate it into sentence
// - Log sentence to console
// - 20 >= age <=120

// Implicit requirements:
// - Years are are an integer

// Examples
// ---------------------------------------------------------
// Teddy is 69 years old!

// Datastructure
// ---------------------------------------------------------
// None.

// Algorithm
// ---------------------------------------------------------
// Start program
// Set 'age' to integer
// - Generate random number
// - Multiply * 100
// - Round to nearest integer
// - Add 20
// Return number in string

// Code
// ---------------------------------------------------------
let age = Math.round(Math.random() * 100) + 20;
console.log(`Teddy is ${age} years old!`);

// Thoughts / improvements
// ---------------------------------------------------------
// Technically, due to the rounding apporach this solution will suggest the age
// 20 and 120 about half as often as the other values. However it ultimately
// answers the question, and is succinct.


