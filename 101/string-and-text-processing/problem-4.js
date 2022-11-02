// Question
// =============================================================================
// Write a function that takes a string as an argument and returns that string
// with the first character of every word capitalized and all subsequent
// characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: string
// Output: string

// Explicit requirements:
// - Capitalise all words in output string
// - Letters that aren;t the first letter can be lowercased

// Implicit requirements:
// - Words with directly preceeding puncutation aren't capitalised
// - All leters that aren't first in a words are made lowercase


// Examples
// ---------------------------------------------------------
// wordCap('four score and seven');       // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

// Datastructure
// ---------------------------------------------------------
// Strings, to hold values, 
// or arrays to hold values to use string methods

// Algorithm
// ---------------------------------------------------------
// *** Version 1 ***
// Start 'wordCap', set 'string'
// Set string to an array of lowercase words from string, split at whitespace
// chars
// For each word in string
// Seperate the first letter of the word, capitialise it
// Add it to the rest of the word
// Return word to array
// Convert array to string and return

// Code
// ---------------------------------------------------------
function wordCap(string) {
  return string
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1)})
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// Thoughts / improvements
// ---------------------------------------------------------
// LS stacking of methods is a nice formatting