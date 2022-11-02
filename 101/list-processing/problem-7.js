// Question
// =============================================================================
// Write a function that takes an array of numbers and returns the sum of the
// sums of each leading subsequence in that array. Examine the examples to see
// what we mean. You may assume that the array always contains at least one
// number.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array
// Output: Number

// Explicit requirements:
// - Array always includes a number 

// Implicit requirements:
// - Each number in array sequence is mutliplied by the number by the length of
//   the array, minus the index of the number.
// - Individual numbers  should return the same number in an array

// Examples
// ---------------------------------------------------------
// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35

// Datastructure
// ---------------------------------------------------------
// Arrays to hold summed values 

// Algorithm
// ---------------------------------------------------------
// Start 'sumOfSums', set 'numArr'
// Set 'sumArr' to empty array
// Iterate over array
// Multuply each element by the length of the array, minus the numbers index val
// Push the product to sumArr
// Add all values in sumArr into one value and return it

// Code
// ---------------------------------------------------------

// Per algorithm
function sumOfSums(numArr) {
  let sum = 0;

  numArr.forEach((num, idx, arr) => {
    sum += num * (arr.length - idx)
  });
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


// Thoughts / improvements
// ---------------------------------------------------------



