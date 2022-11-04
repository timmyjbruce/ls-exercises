// Question
// =============================================================================
// How long are you?

// Write a function that takes a string as an argument and returns an array that
// contains every word from the string, with each word followed by a space and
// the word's length. If the argument is an empty string or if no argument is
// passed, the function should return an empty array.

// You may assume that every pair of words


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Array

// Explicit requirements:
// - If string is empty , or no args passed, function should return an empty array
// - Return array should contain each word concatenated with a space and its letter count

// Implicit requirements:
// - Punctuation includeded in words
// - Words are seperated by spaces

// Examples
// ---------------------------------------------------------
// wordLengths('cow sheep chicken');
// // ["cow 3", "sheep 5", "chicken 7"]

// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]

// wordLengths('');      // []
// wordLengths();        // []

// Datastructure
// ---------------------------------------------------------
// Arrays

// Algorithm
// ---------------------------------------------------------
// Start 'wordLengths', set 'string'
// Let lengthsArray equal an empty array
// 
// Split string into an an array of words
// Iterate through the array
// Add a space to each element lengthsString
// Add the length as a string each elements
// Return lengthsArray


// Code
// ---------------------------------------------------------

function wordLengths(string) {
  if (string === undefined || string === '') return [];
  return string.split(' ').map(word => word = `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []




// Thoughts / improvements
// ---------------------------------------------------------


