// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Array of substrings

// Explicit requirements:
// - Output should order all substrings from index 0, onwards
// - Use previous exercises function

// Implicit requirements:

// - To get all substrings you should include subsrings from current index to
//   end of string while incrementing through string charcters

// Examples
// ---------------------------------------------------------
// substrings('abcde');

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Start substrings
// Set 'count' to 0
// Set allSubstrings to empty array
// While count is less than the length of string
// Set substring to the value of string start index 'count', end index length - 1
// Execute 'leadingSubstrings' with 'substring', and send results to allSubstrings
// Return allSubstrings

// Code
// ---------------------------------------------------------

function substrings(string) {
  let allSubstrings = [];

  for (let count = 0; count < string.length; count++) {
    let substring = string.slice(count, string.length);
    allSubstrings.push(...leadingSubstrings(substring));
  }
  return allSubstrings;
}

console.log(substrings('abcde'));


// Previous function

function leadingSubstrings(string) {
  let substrings = [];

  for (let count = 0; count < string.length; count++){
    substrings.push(string.slice(0, count + 1))
  }
  return substrings;
}



// Thoughts / improvements
// ---------------------------------------------------------
// Could omit the second argument in slice as with a single argument slice
// automatically returns the rest of the string


