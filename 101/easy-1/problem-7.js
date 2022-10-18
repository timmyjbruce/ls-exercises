// Question
// =============================================================================
// Write a function that takes two strings as arguments, determines the length
// of the two strings, and then returns the result of concatenating the shorter
// string, the longer string, and the shorter string once again. You may assume
// that the strings are of different lengths.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Explicit requirements
//  - Create a function, name unspecifed, 2x parameters
//  - Takes 2 x strings with always different lengths
//  - Function must determine lenght of both strings (not simply compare
//    lengths)
//  - Join short string to long string to short string
//  - Return concatenated string 
//
// Implicit requirements
//  - Validate inputs are strings, if not return message
//  - If one argument is an empty string function should return the argument
//    with the non-empty string 
//  - If both args a missing function should return empty string
//  - Strings can be supplied in any order eg short then long or long then short

// Examples
// ---------------------------------------------------------
// shortLongShort('abc', 'defgh'); -> "abcdefghabc"
// shortLongShort('abcde', 'fgh'); -> "fghabcdefgh"
// shortLongShort('', 'xyz');      -> "xyz"

// Datastructure
// ---------------------------------------------------------
// None, will use strings and integers

// Algorithm
// ---------------------------------------------------------
// Given stringA and stringB
// Validate string A & string B are strings
// Get length of stringA & assign to lenghtStringA
// Get length of stringB & assign to lenghtStringB
// Compare length of strings
// Assign shorter length string to string1
// Assign longer length string to string2
// Concatenate string1 with string2 then with string1 & return result

// Code
// ---------------------------------------------------------


// Initial version
// function shortLongShort(stringA, stringB) {
  
//   while ('string' !== typeof stringA || 'string' !== typeof stringB) {
//     console.log('Input is not a string');
//     return;
//   }
//   let lengthA = stringA.length;
//   let lengthB = stringB.length;

//   let string1 = lengthA < lengthB ? stringA : stringB;
//   let string2 = lengthA > lengthB ? stringA : stringB;

//   return string1 + string2 + string1;

// }


// More succint version, but unsure if inline with question
// ---------------------------------------------------------

function shortLongShort(stringA, stringB) {
  
  if (typeof stringA !== 'string' || typeof stringB !== 'string') {
    return console.log('Input is not a string');
  }
  let string1 = stringA.length < stringB.length ? stringA : stringB;
  let string2 = string1 === stringB ? stringA : stringB;

  return string1 + string2 + string1;

}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
console.log(shortLongShort(1, 'xyz'));
console.log(shortLongShort(1, 2));


// Thoughts /improvements needed
// ---------------------------------------------------------

// LS version is much easier to read. Function body is a condition with two
// return statements based on a comparison of length. Need to remeber to
// consider multiple returns statement within conditions.

// function shortLongShort(string1, string2) {
//   if (string1.length > string2.length) {
//     return string2 + string1 + string2;
//   } else {
//     return string1 + string2 + string1;
//   }
// }