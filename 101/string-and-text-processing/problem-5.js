// Question
// =============================================================================
// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// changed to lowercase. Leave all other characters unchanged.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Invert case of alphabet characters

// Implicit requirements:
// - non alphabet characters left alone

// Examples
// ---------------------------------------------------------
// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

// Datastructure
// ---------------------------------------------------------
// Strings only

// Algorithm
// ---------------------------------------------------------
// Start 'swapCase', set 'string'
// Set 'swappedString', set to empty string.
// Loop through characters the string
// If character is within a-z, then convert to uppercase & add to swappedString
// Else if within A-Z, convert to lowercase & add to swappedString
// Return swapped string

// Code
// ---------------------------------------------------------
// Intial as per algorithim
function swapCase(string) {
  let swappedString = '';

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx]; 
    if (char === ' ') swappedString += char;
    else if (/[a-z]/.test(char)) swappedString += char.toUpperCase();
    else if (/[A-Z]/.test(char)) swappedString += char.toLowerCase();
  }
  return swappedString;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


// Thoughts / improvements
// ---------------------------------------------------------
// Unsure why I need the addtional, assume something to do with the regex
// search. Wil return to this and work it out.
