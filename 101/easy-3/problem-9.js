// Question
// =============================================================================
// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string with all
// of the non-alphabetic characters replaced by spaces. If one or more
// non-alphabetic characters occur in a row, you should only have one space in
// the result (i.e., the result string should never have consecutive spaces).


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - non alphabetic characters should be replaced by spaces
// - duplicate non alphabetic characters should be replaced by single spaces

// Implicit requirements:
// - 'non-alphabetic' include numbers, punctuation & symbols

// Examples
// ---------------------------------------------------------
// cleanUp("---what's my +*& line?");    // " what s my line "

// Datastructure
// ---------------------------------------------------------
// Array to hold characters

// Algorithm
// ---------------------------------------------------------
// Start function cleanUp
// Given 'messy'
// Set 'clean' to a value of empty string
// Set aAZ to an array of char A-Z
// Set acceptedChars to itself plus an array of lower chars
// Seperate messy into array of characters
// Check each if character is included in acceptedChars
// If elment is add element to clean string
// Else If char is the same as the prior char skip
// Replace double spaces in clean with single
//  - Split to array
//  - If prior element equals last elemnt remove from array
// Return clean

// V2 using regex
// Start function cleanUp2
// Given string value for messy
// Set 'clean' to a value of empty string
// Split messy into array of characters
// Check each charater 
// If charater tested with regex A-Z a-z or \w is true
// Add character to string
// Clean up white spaces in string
// 

// Code
// ---------------------------------------------------------

let aAZ = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', ' ' ];
aAZ = aAZ.concat(aAZ, aAZ.map(el => el.toLowerCase()));


// V1  function with external array
function cleanUp (messy) {
  let clean = [];

  messy.split('').map((char) => {
    clean.push(aAZ.includes(char) ? char : ' ');
  });

  clean = clean.filter((el, idx, ar) => el + ar[idx - 1] === '  ' ? '' : el);
  return clean.join('')
}

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "


// V2 Using Regex

function cleanUp2 (messy) {
  let clean = '';
  let regex = /[A-Z]|[a-z]|\s/;
  
  messy.split('').map(char => {
    if (regex.test(char)) clean += char;
    else clean += ' '
  })
  return clean.replace(/  +/g, ' ');
}
console.log(cleanUp2("---what's my +*& line?"));    // " what s my line "


// Thoughts / improvements
// ---------------------------------------------------------

// The LS regex solution is nice and simple, the code block is one liner. I need
// to remember  to assess if arrays need to be made in a function. Eg if
// splitting and then rejoinng values I need to check if they really need to be
// split in the first place.
