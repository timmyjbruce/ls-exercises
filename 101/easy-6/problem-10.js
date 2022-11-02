// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Words in return string in same order
// - 5+ letter words have thier character order reversed
// - Words seperated by spaces

// Implicit requirements:
// - No addtitional

// Examples
// ---------------------------------------------------------
// reverseWords('Professional');
// reverseWords('Walk around the block');
// reverseWords('Launch School');

// Datastructure
// ---------------------------------------------------------
// Arrays to store individual words

// Algorithm
// ---------------------------------------------------------
// Start 'reverseWords', set 'string'
// Set array to words in string
// Iterate through array
// - If element length is equal to or greater than than 5
//  - Split into array of chars, revese and rejoin.
//  - Replace element in current array
// - Else 
//  - Keep element as-is
// Join arr elements into string, sperated by spaces and return


// Code
// ---------------------------------------------------------

function reverseWords(str) {
  const REVERSAL_LENGTH = 5;
  let arr = str.split(' ');

  arr = arr.map(ele => {
    return ele.length >= REVERSAL_LENGTH 
      ? reverse(ele)
      : ele;
  });
  return arr.join(' ');
}

function reverse(word) {
  return word.split('').reverse().join('')
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));


// Thoughts / improvements
// ---------------------------------------------------------
// Need to remember that if areas of a function are looking complex, its easy to
// break it out into a seperate function.


// Further exploration
// ---------------------------------------------------------
// Solution already uses the map function


