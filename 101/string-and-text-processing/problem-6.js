// Question
// =============================================================================
// Write a function that takes a string as an argument and returns that string
// with a staggered capitalization scheme. Every other character, starting from
// the first, should be capitalized and should be followed by a lowercase or
// non-alphabetic character. Non-alphabetic characters should not be changed,
// but should be counted as characters for determining when to switch between
// upper and lower case.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Return a version of the input string where every second character has the case inverted

// Implicit requirements:
// - Numbers are ignored
// - Only alphabetic characters are targeted
// - All charcters including spaces count towards the rhythm of the inversion

// Examples
// ---------------------------------------------------------
// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

// Datastructure
// ---------------------------------------------------------
// Arrays to hold character values

// Algorithm
// ---------------------------------------------------------
// Start 'staggeredCase', set 'string'
// Split string into an array of characters
// Loop through the array targeting every second element
// If the elements first index is within a - z, invert to uppercase
// If its uppercase, invert to lowercase
// Return array, with elements joined into a string

// Look at alt version using iteration method and odd indexes

// Code
// ---------------------------------------------------------

// Inital solution with for loop per alorithm
function staggeredCase(string) {
  string = string.split('');

  for (let idx = 0; idx < string.length; idx += 2) {
    if (string[idx] >= 'a' || string[idx] <= 'z'){
      string[idx] = string[idx].toUpperCase();
    } else if (string[idx] >= 'A' || string[idx] <= 'Z'){
      string[idx] = string[idx].toLowerCase();
    }
  }
  return string.join('');
}

// Simplifed version of above
function staggeredCase(string) {
  string = string.toLowerCase().split('');

  for (let idx = 0; idx < string.length; idx += 2) {
    string[idx] = string[idx].toUpperCase();
  }
  return string.join('');
}

// Solution using array iteration
function staggeredCase(string) {
  return string
  .toLowerCase()
  .split('')
  .map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } 
    return char;
  })
  .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

