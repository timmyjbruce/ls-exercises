// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Return string words in new string in reverse order

// Implicit requirements:
// - Empty string inputs return as empty

// Examples
// ---------------------------------------------------------
// reverseSentence('');
// reverseSentence('Hello World');
// reverseSentence('Reverse these words');

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Start 'reverseSentence', set 'sentence'
// Split into array, reverse array, join elements
// Return array

// Code
// ---------------------------------------------------------
function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));


// Buggy solution
// ---------------------------------------------------------
// Solution is missing the 


