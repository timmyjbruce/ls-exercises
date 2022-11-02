// Question
// =============================================================================
// Write a function that takes an array of strings and returns an array of the
// same string values, but with all vowels (a, e, i, o, u) removed. 


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array
// Output: Array

// Explicit requirements:
// - Remove all vowels from elements in input array and return array

// Implicit requirements:
// - Arrays have one or more elements
// - Vowel only elements should be empty elements in returned array

// Examples
// ---------------------------------------------------------
// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

// Datastructure
// ---------------------------------------------------------
// Array to hold new strings

// Algorithm
// ---------------------------------------------------------
// Start 'removeVowels', set 'array'
// Iterate over strings in array
// Set each string to a vowelsess version
// - Use regex to identify vowels, replace with empty string
// Return array

// Code
// ---------------------------------------------------------

// Using regex
const removeVowels = array => array.map(string => {
  return string.replaceAll(/[aeiouAEIOU]/g, '')
});


// Using 
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

