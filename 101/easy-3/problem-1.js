// Question
// =============================================================================
// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - If input string contains a consecutive duplicate, return string should
//   return single char instead

// Implicit requirements:
// - Empty strings should return empty strings
// - Strings of single or multiple chars of same type should be returned.
// - Spaces count as characters
// - No validation needed as its a specific 

// Examples
// ---------------------------------------------------------
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// Datastructure
// ---------------------------------------------------------
// Arrays to hold character strings

// Algorithm
// ---------------------------------------------------------
// Create a function called 'crunch' with a paramater of 'string'
// Create variable 'crunchedString' with value of empty string
// Split string to ana arrya and assign to a variable called stingArray 
// Check each element of string
// Push element to crunchedString unless it is equal to the prior element
// Join array crunchedString and return it

// Code
// ---------------------------------------------------------
// Initial version
// function crunch(string) {
//   let crunchedString = '';
//   let stringArray = string.split('');

//   for (let i = 0; i < stringArray.length; i++){
//     if (stringArray[i] !== stringArray[i - 1]) {
//       crunchedString += stringArray[i];
//     }
//   }
//   return crunchedString;
// }

//Shorter version
const crunch = string => {
  string = string.split('').filter((element, index, array) => {
    return element !== array[index - 1];
  }, '');
  return string.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


// Thoughts / improvements
// ---------------------------------------------------------
// No need to split it out as an array, string indexes can be targeted for a
// simpler more compact function.÷