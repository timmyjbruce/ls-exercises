// Question
// =============================================================================
// Write a function that takes a string consisting of zero or more space
// separated words and returns an object that shows the number of words of
// different sizes.

// Words consist of any sequence of non-space characters.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Object

// Explicit requirements:
// - Words are character groups seperated by spaces
// - Empty strings should return nothing.
// - Object is returned, key equals number value equals word count

// Implicit requirements:
// - Punctuation is included in the word it attaches to.

// Examples
// ---------------------------------------------------------
// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');     

// Datastructure
// ---------------------------------------------------------
// Array to store individual words
// Object to store and return values 

// Algorithm
// ---------------------------------------------------------
// START wordSizes, SET 'string'
// SET 'sizes' with no value
// Seperate string into array of words, spliting on spaces
// Iterate through array counting length of each element
// SET to sizes property to word key length, value count
//  - IF property exists add 1, 
//  - ELSE initialise as 1
// Return sizes

// Code
// ---------------------------------------------------------
function wordSizes(string) {
  if (string === '') {
    return string;
  }
  let sizes = {};
  
  string.split(' ').map(word => {
    sizes[word.length] ? sizes[word.length] += 1 : sizes[word.length] = 1;
  })
  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));     

// Thoughts / improvements
// ---------------------------------------------------------



