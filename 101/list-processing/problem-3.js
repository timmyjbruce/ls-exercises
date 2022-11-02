// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array of numbers x 2
// Output: Array of numbers

// Explicit requirements:
// - Returned array should be sorted lowest to highest
// - 

// Implicit requirements:
// - None

// Examples
// ---------------------------------------------------------
// multiplyAllPairs([2, 4], [4, 3, 1, 2]);  // [2, 4, 4, 6, 8, 8, 12, 16]

// Datastructure
// ---------------------------------------------------------
// Arrays to hold product values and return

// Algorithm
// ---------------------------------------------------------
// Start 'multiplyAllPairs', set 'arrayA, arrayB'
// Set newArray to an empty array
// Iterate over arrayA
// For each element in arrayA, iterate over elements in arrayB
// Multiply elements of arrayB with each element of arrayB
// Send each result to newArray

// Code
// ---------------------------------------------------------

function multiplyAllPairs(arrayA, arrayB) {
  let newArray = [];

  arrayA.forEach(numA => {
    arrayB.forEach(numB => {
      newArray.push(numA * numB);
    });
  });
  return newArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));  // [2, 4, 4, 6, 8, 8, 12, 16]


// Thoughts / improvements
// ---------------------------------------------------------



