// Question
// =============================================================================
// Write a function that returns the next to last word in the String passed to
// it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input:String of 2 + words
// Output:String, containing second to last word of string

// Explicit requirements:
// - Words are 1+ non black characters

// Implicit requirements:
// - None

// Examples
// ---------------------------------------------------------
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Datastructure
// ---------------------------------------------------------
// Array to hold split strings

// Algorithm
// ---------------------------------------------------------
// For function 'penultimate'
// Given string argument for variable 'string'
// Assign 'string' to array of words from string
// Return second to last element in array 

// Code
// ---------------------------------------------------------

// Intial version:
// function penultimate (string){
//   string = string.split(' ');
//   return string[string.length - 2];
// }

// Simpler version 
function penultimate (string){
  return string.split(' ').slice(-2,-1).join('');
}

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true


// Further exploration 

// Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases
// need to be considered? How would you handle those edge cases without ignoring them? Write a
// function that returns the middle word of a phrase or sentence. It should handle all of the edge
// cases you thought of.

// Problem
// ---------------------------------------------------------
// Input:String of 2 + words
// Output:String, containing middle word of string

// Explicit requirements:
// - Words are 1+ non blank characters

// Implicit requirements:
// - If empty string input return empty string, return empty string
// - If input type not string return empty string
// - If one word in string return that
// - If even number of words in string, return middle two


// Examples
// ---------------------------------------------------------
// console.log(penultimate("Launch School is great!") === "School is"); // logs true
// console.log(penultimate("Launch School is really great!") === "is"); // logs true

// Datastructure
// ---------------------------------------------------------
// Array to hold split strings


// Algorithm
// ---------------------------------------------------------
// For function 'penultimate2'
// Given string argument for variable 'string' or string equals ''
// If datatype of string is not 'string' return ''
// Create variable 'words' with a value of empty string
// If odd number of items in aray of words
//  - Find middle word in string
//     - Index of middle word is array length / 2, rounded down
//     - Assign to 'words'
// If even number of items in array of words
//  - Find middle two words
//     - Index of middle two words equal length / 2 - 1, and +1
//     - Middle words cocatenated
//     - Assign to 'words'
// Return words


function middleWords (string){
  if (string === '' || typeof string !== 'string') return '';
  if (!string.includes(' ')) return string;
  
  let stringArray = string.split(' ');
  let words = '';

  if (stringArray.length % 2 === 1) {
    words += stringArray[Math.floor(stringArray.length / 2)];
  } else {
    let centerElement = stringArray.length / 2;
    words += stringArray[centerElement - 1] + ' ' + stringArray[centerElement]
  }  
  return words;
}

console.log(middleWords("Launch School is great!") === "School is"); // logs true
console.log(middleWords("Launch School is really great!") === "is"); // logs true
console.log(middleWords("Hi!") === "Hi!"); // logs true
console.log(middleWords("") === ""); // logs true
console.log(middleWords(3) === ""); // logs true