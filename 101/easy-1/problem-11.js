// Question
// =============================================================================
// Write a function that determines and returns the UTF-16 string value of a
// string passed in as an argument. The UTF-16 string value is the sum of the
// UTF-16 values of every character in the string. (You may use
// String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Inputs: String of words of single UTF code
// Outputs: Number

// Explicit requirements:
// - Must accept strings
// - Must sum indiviudual utf-16 values of each character 
// - Must return sum

// Implicit requirements:
// - Support single argument
// - Identifes utf character codes, and treats them as neede to retrieve utf-16
//   value
// - Must validate if not a string
// - Spaces included in strings
// - Empty string arguments must return 0

// Examples
// ---------------------------------------------------------
// utf16Value('Four score');         // 984
// utf16Value('Launch School');      // 1251
// utf16Value('a');                  // 97
// utf16Value('');                   // 0

// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// utf16Value(OMEGA);                  // 937
// utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

// Datastructure
// ---------------------------------------------------------
// Arrays to hold character values

// Algorithm
// ---------------------------------------------------------
// Given a string or character code
// Validate supplied argument is a string type
// Create variable sum
// For character in the string get unicode value and add to sum
// - Create variable i
// - While i equals less than the lenght og the string
// - Get the next substring value at the index of i
// - Convert it to utf-16 value
// - Add the value to sum
// Return sum

// Code
// ---------------------------------------------------------

// Initial version per algorithm

// function utf16Value(stringToSum) {
//   while (typeof stringToSum !== 'string') {
//     console.log('Supplied argument is not a string');
//     return;
//   }
//   let sum = 0;
//   for (let i = 0; i < stringToSum.length; i++) {
//     sum += stringToSum[i].charCodeAt(0);
//   }
//   return sum;

// }

// Shorter verion using reduce & split methods.
// Quite long line length, could break call back into code block.

function utf16Value(stringToSum) {
  return stringToSum.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
}

console.log(utf16Value('Four scor e'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811
