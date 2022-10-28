// Question
// =============================================================================
// Write a function that combines two arrays passed as arguments, and returns a
// new array that contains all elements from both array arguments, with each
// element taken in alternation.  

// You may assume that both input arrays are non-empty, and that they have the
// same number of elements.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: 2 arrays
// Output: 1 array, interleaved

// Explicit requirements:
// - Arrays are populated and identical in length
// - 

// Implicit requirements:
// - Elements at even indexes come from the first array.

// Examples
// ---------------------------------------------------------
// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// Datastructure
// ---------------------------------------------------------
// Arrays

// Algorithm
// ---------------------------------------------------------
// Start 'interleave', set 'arr1', 'arr2'
// Set arrCombined to an empty array
// Loop through arr1, send 1 value from arr1 & arr2 to arrCombined
// Return interleaved
// ---------------------------------------------------------

function interleave(arr1, arr2) {
  let arrCombined = [];
  
  for (let i = 0; i < arr1.length; i++) {
    arrCombined.push(arr1[i]);
    arrCombined.push(arr2[i]);
  }

  return arrCombined;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


// Thoughts / improvements
// ---------------------------------------------------------
// Push can take multiple arguments, can simplify probledm like this.


