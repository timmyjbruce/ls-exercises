// Question
// =============================================================================
// Write a function that takes a non-empty string argument and returns the
// middle character(s) of the string. If the string has an odd length, you
// should return exactly one character. If the string has an even length, you
// should return exactly two characters.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String, non empty
// Output: String

// Explicit requirements:
// - Return string should contain middle character/s
// - One character if even , two if odd

// Implicit requirements:
// - Spaces are treated as characters


// Examples
// ---------------------------------------------------------
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// Datastructure
// ---------------------------------------------------------
// Arrays to hold characters

// Algorithm
// ---------------------------------------------------------
// Start 'centerOf', set 'string'
// Set arr to and array of individual string characters
// Set count to strings length / 2, -1, rounded down
// While count is > 0
// Remove start and end elements froms arr
// Return joined arr

//** Alernative
// Start 'centerOf', set 'string'
// Set 'middle' to string.lenght rounded down -1
// If string is even
// - Slice middle two characters
// Else
// - Slice middle character
// Return the sliced value


// Launch
// 012345

// abcde
// 01234

// Code
// ---------------------------------------------------------
function centerOf(string) {
  let arr = string.split('');
  let count = Math.floor((string.length / 2));

  count += arr.length % 2 === 1 ? 1 : 0;

  while (count > 1) {
    arr.pop();
    arr.shift();
    count -= 1;
  }
  return arr.join('');
}

function centerOf(string) {
  let middle = Math.ceil((string.length / 2) - 1);
  let isEven = string.length % 2 === 0;

  return string.slice(middle, (isEven ? middle + 2 : middle + 1));
}
// Thoughts / improvements
// ---------------------------------------------------------

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

