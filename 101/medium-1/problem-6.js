// Question
// =============================================================================
// Word to Digit

// Write a function that takes a sentence string as an argument and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - If string contains a number word, replace it with the corresponding number

// Implicit requirements:
// - Only need to worry about single digit numbers(0-9)
// - 

// Examples
// ---------------------------------------------------------
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

// Datastructure
// ---------------------------------------------------------
// Should be able to keep to strings

// Algorithm
// ---------------------------------------------------------
// Start 'wordToDigit', set 'string'
// Set 'numWords' to an array of number words
// Iterate through each 'word' in the 'numwords' array 
// - If the string contains a matching word, replace it with the index of the word
// Return string

// Code
// ---------------------------------------------------------
function wordToDigit(string) {
  let numWords = [
    'zero', 'one', 'two', 'three', 'four', 
    'five', 'six', 'seven', 'eight', 'nine'
  ];

  numWords.forEach((word, idx) => {
    let regex = new RegExp(`${word}`, 'gi');
    string = string.replaceAll(regex, String(idx));
  })
  return string;
}

// Alternate array method focused solution
function wordToDigit(string) {
  let numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  return string
          .split(' ')
          .map((word) => {
              if (numWords.includes(word)) return numWords.indexOf(word);
              return word;
          })
          .join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// Thoughts / improvements
// ---------------------------------------------------------