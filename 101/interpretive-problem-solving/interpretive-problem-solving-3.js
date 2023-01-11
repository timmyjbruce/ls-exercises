// Question
// =============================================================================
// Now I Know My ABCs 

// A collection of spelling blocks has two letters per block, as shown in this
// list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument and returns true if
// the word can be spelled using the set of blocks, false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String (single word)
// Output: Boolean

// Explicit requirements:
// - If string contains both characters in a string block, return false;
// - If string contains duplicate characters, return false
// - Ignore case

// Implicit requirements:
// -  None additional

// Examples
// ---------------------------------------------------------
// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// Datastructure
// ---------------------------------------------------------
// Array of sub arrays, to allow for direct access by array methods

// [
//   ['B', 'O']
//   ['X', 'K']
//   ['D', 'Q']
//   ['C', 'P']
//   ['G', 'T']
//   ['R', 'E']
//   ['F', 'S']
//   ['J', 'W']
//   ['H', 'U']
//   ['V', 'I']
//   ['L', 'Y']
//   ['Z', 'M']
// ]

// Algorithm
// ---------------------------------------------------------
// Start isBlockWord
// Set strArray to an array of characters from the string
// Set blocks to an array of blick sub arrays
// Iterate over each block in the blocks array
// If strArray includes every character in array return false

// Set blocks array to a flat array
// Count how many times each character in blocks appears in the array\
// Use regex to search the current array for the current 'block' character
// Return a count of occurences from that search
// If count is greater than 1 return false


// Return true

// Shorter algorithm

// Start isBlockWord
// Set strArray to an array of characters from the string
// Set blocks to an array of block sub arrays

// Iterate over each block in the blocks array
// If strArray includes every character in array return false
// Use regex to search the current array for the current 'block' characters
// If strArray includes a character in a block more than once
// Return flase



// Code
// ---------------------------------------------------------

const BLOCKS = [
  ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['G', 'T'], ['R', 'E'],
  ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']
];

function isBlockWord(string) {
  let blockWord = true;

  BLOCKS.forEach(block => {
    if (
      moreThanOneChar(block[0], string) || 
      moreThanOneChar(block[1], string) ||
      block.every(ele => string.split('').includes(ele))) {
        blockWord = false;
      }
    })
  return blockWord;
}

function moreThanOneChar(searchStr, string) {
  let regex = new RegExp(searchStr.toUpperCase(), 'g');
  return (string.match(regex) || []).length > 1;
  }

  
console.log(isBlockWord('BATCH'));   // true
console.log(isBlockWord('TT'));      // false
console.log(isBlockWord('BUTCH'));   // false
console.log(isBlockWord('jest'));    // true


// Thoughts / improvements
// ---------------------------------------------------------



