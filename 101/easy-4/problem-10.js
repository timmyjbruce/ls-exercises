// Question
// =============================================================================
// Given a string of words separated by spaces, write a function that swaps the
// first and last letters of every word.

// You may assume that every word contains at least one letter, and that the
// string will always contain at least one word. You may also assume that each
// string contains nothing but words and spaces, and that there are no leading,
// trailing, or repeated spaces.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Swap first and last letters of each word
// - There are not leading or trailing spaces
// - Every word contains at least one character

// Implicit requirements:
// - Must work for single word strings
// - Must work for single character strings
// - Words delimited by spaces

// Examples
// ---------------------------------------------------------
// swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
// swap('Abcde');                          // "ebcdA"
// swap('a');                              // "a"

// Datastructure
// ---------------------------------------------------------
// Arrays to store individual words

// Algorithm
// ---------------------------------------------------------
// Start 'swap', set param 'string'
// Set 'swappedwords' to an empty array
// Split string into array of words
// Iterate through array
// - Set 'firstLetter' to first char of string
// - Remove the first char of string
// - Set 'lastLetter' to last char of string, 
// - Return string without last char
// - Send last + string + first to swappedWords array
// Return swappedWords array as string

// Code
// ---------------------------------------------------------

// Initial version
// function swap(string) {
  
//   let swappedWords = [];

//   string.split(' ').map(word =>{
//     if (word.length === 1) {
//       swappedWords.push(word)
//     } else {
//     let firstLetter = word[0];
//     word = word.slice(1);
    
//     let lastLetter = word[word.length - 1];
//     word = word.slice(0, -1);

//     swappedWords.push(lastLetter + word + firstLetter);
//     }

    
//   });
//   return swappedWords.join(' ');12
// }

// Simplified versions
function swap(string) {
  let swappedWords = [];

  string.split(' ').map(word =>{
    let firstLetter = word[0];
    word = word.slice(1);
    let lastLetter = word[word.length - 1] || ''; 

    swappedWords.push(lastLetter + word.slice(0, -1) + firstLetter);  
  });
  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

// Further exploration
// ---------------------------------------------------------

// Solution already uses the map method