// Question
// =============================================================================

// Write a function that returns a list of all palindromic substrings of a
// string. That is, each substring must consist of a sequence of characters that
// reads the same forward and backward. The substrings in the returned list
// should be sorted by their order of appearance in the input string. Duplicate
// substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous
// exercise.

// For the purpose of this exercise, you should consider all characters and pay
// attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
// are not. In addition, assume that single characters are not palindromes.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Palindromic substrings

// Explicit requirements:
// - Return a list of palindromic substrings
// - Palindromes must have more than one char, and be the same charcters and
//   case forwards and backwards 
// - 

// Implicit requirements:
// - If there are no palindromes the output shoudl be an empty array
// 

// Examples
// ---------------------------------------------------------

// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// Datastructure
// ---------------------------------------------------------
// Arrays to list palindromes

// Algorithm
// ---------------------------------------------------------
// Start 'palindromes', set 'string'
// Set 'substrings' to a list of substrings
// If string
// - Strings the same forward and backwards 
// - With more than one character


// Start 'isAPalindrome', set 'string'
// If string is the same forwards and backwards return true, else false

// Code
// ---------------------------------------------------------

function palindromes(string) {
  let substringList = substrings(string);
  return substringList.filter(ele => ele.length > 1 && isAPalindrome(ele));
}

function isAPalindrome(str) {
  return str.split('').reverse().join('') === str;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]


// Previous functions

function substrings(string) {
  let allSubstrings = [];

  for (let count = 0; count < string.length; count++) {
    let substring = string.slice(count, string.length);
    allSubstrings.push(...leadingSubstrings(substring));
  }
  return allSubstrings;
}
function leadingSubstrings(string) {
  let substrings = [];

  for (let count = 0; count < string.length; count++){
    substrings.push(string.slice(0, count + 1))
  }
  return substrings;
}



// Thoughts / improvements
// ---------------------------------------------------------



