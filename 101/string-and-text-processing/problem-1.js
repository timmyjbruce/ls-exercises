// Question
// =============================================================================
// Write a function that takes a string argument and returns true if all of the
// alphabetic characters inside the string are uppercase; false otherwise.
// Ignore characters that are not alphabetic.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Output

// Explicit requirements:
// - If all alpabetic charcters are uppercase, return true
// - If not, return false

// Implicit requirements:
// - Spaces are ignored, or intrepted as uppercase
// - If string arg is empty it function returns false

// Questions
// - Does JS interpret spaces as upper or lowercase

// Examples
// ---------------------------------------------------------
// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

// Datastructure
// ---------------------------------------------------------
// Strings only

// Algorithm
// ---------------------------------------------------------
// Start 'isUppercase', set 'string'
// Set 'uppercase' to false
// Loop through charaters on string
// If character is uppercase set uppercase to true
// - Check if character is equalt to character made uppercase
// Else set to false true
// Return uppercase

// Code
// ---------------------------------------------------------

// Initial solution
function isUppercase(string) {
  let uppercase = true;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()){
     uppercase = true;
    } else {
      uppercase = false;
    }
  }
  return uppercase;
}

// Simplified with ternary statement
function isUppercase(string) {
  let uppercase = true;

  for (let i = 0; i < string.length; i++) {
    uppercase = string[i] === string[i].toUpperCase()
     ? true
     : false;
  }
  return uppercase;
}

// Simplified, removed variable
function isUppercase(string) {
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] !== string[idx].toUpperCase())
      return false;
  }
  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


// Thoughts / improvements
// ---------------------------------------------------------
// LS solution is much simpler here, it compares string to uppercase version of
// the same string. Earlier exploration at the alorithm stage into whether
// whitepsaces are in fact uppercase might have helped lead me to this solution. 