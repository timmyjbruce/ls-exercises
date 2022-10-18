// Question
// =============================================================================
// Write a program that will ask for user's name. The program will then greet
// the user. If the user writes "name!" then the computer yells back to the
// user.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: string
// Output: string

// Explicit requirements:
// - Function must ask user for name
// - Function prints name
// - If input equals string 'name!' then output an additional message.

// Implicit requirements:
// - Must use readline sync library or similar

// Examples
// ---------------------------------------------------------
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Ask user for name
// Store users response in variable 'name'
// If last characer of name equals '!'
// - Concatenate message
// - Convert to uppercase
// - Log
// Else if name does not end with '!'
// - Log name extra text message

// Code
// ---------------------------------------------------------

// Initial version per algo

// let readlineSync = require('readline-sync');

// let name = readlineSync.question('What is your name? ');

// if (name[name.length - 1] === '!') {
//   console.log(('Hello ' + name + '. Why are we screaming?').toUpperCase())
// } else {
//   console.log('Hello ' + name + '.')
// }

// Simpler version

let readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ');

console.log(
  name.slice(-1) !== '!' 
    ? `Hello ${name}.` 
    : `HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`
);

// Thoughts /improvements needed
// ---------------------------------------------------------
// Missed the removal of the semicolon in the requirements gathering stage, and
// is therefore missing from the solution.


