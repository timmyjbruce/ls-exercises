// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Array

// Explicit requirements:
// - Input is a single string

// Implicit requirements:
// - Elements in return array is equal to string length
// - Array order is shortest to longest

// Examples
// ---------------------------------------------------------
// leadingSubstrings('abc')  //  ['a', 'ab', 'abc']
// leadingSubstrings('a')  //  ['a']
// leadingSubstrings('xyzzy')  //  ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Start 'leadingSubstrings', set 'string'
// Set 'substrings' to empty array
// Split string to an array
// Ireate over elements, adding current to previous, and addng to subsrings array
// Return 'substrings


// Alternate approach
// Loop over string once for each character in string
// Push a slice of the string to arrar on each incerement

// Alternate approach
// Set count to 0
// While count is less than 0

// Code
// ---------------------------------------------------------

// Initial approach

function leadingSubstrings(string) {
  let substrings = [];

  string.split('').reduce((substring, character) => {
    substrings.push(substring);
    return substring + character;
  });
  substrings.push(string);
  return substrings;
}

// Simpler approach with loop

function leadingSubstrings(string) {
  let substrings = [];

  for (let count = 0; count < string.length; count++){
    substrings.push(string.slice(0, count + 1))
  }
  return substrings;
}


// Another approach with while loop

// function leadingSubstrings(string) {
//   let arr = [string];

//   while (arr[0].length > 1) {
//     arr.unshift(arr[0].slice(0, -1));
//   }
//   return arr;
// }


console.log(leadingSubstrings('abc'));  //  ['a', 'ab', 'abc']
console.log(leadingSubstrings('a'));  //  ['a']
console.log(leadingSubstrings('xyzzy'));  //  ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

// Thoughts / improvements
// ---------------------------------------------------------



