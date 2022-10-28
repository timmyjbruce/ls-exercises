// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Identify the constonants, double and return them

// Implicit requirements:
// - Numbers, spaces, punctuation and vowels remain a single char

// Examples
// ---------------------------------------------------------
// doubleConsonants('String');
// doubleConsonants('Hello-World');
// doubleConsonants('July 4th');
// doubleConsonants('');

// Datastructure
// ---------------------------------------------------------
// Strings

// Algorithm
// ---------------------------------------------------------
// Start 'doubleConsonants', set 'string'
// Set 'repeated'
// Loop through characters
// If char is a-zA-Z, but not equal to 'a', 'e', 'i', 'o', 'u' add to repeated x2
// Else add it to repeated x1
// Return repeated

// Code
// ---------------------------------------------------------
// For loop
// const doubleConsonants = string => {
//   let repeated = '';
  
//   for (let i = 0; i < string.length; i++) {
//     if (/[b-df-hj-np-tv-z]/.test(string[i].toLowerCase())) {
//       repeated += string[i];
//     }
//     repeated += string[i];
//     }
//   return repeated;
// };

// Mapped
const doubleConsonants = string => {
  const REGEX = /[b-df-hj-np-tv-z]/;
  
  return string.split('').map(char => {
    return REGEX.test(char) 
      ? char + char
      : char;
  }).join('');
}


console.log(doubleConsonants('String'));      // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));    // "JJuullyy 4tthh"
console.log(doubleConsonants(''));            //


// Thoughts / improvements
// ---------------------------------------------------------



