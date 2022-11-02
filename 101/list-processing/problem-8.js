// Question
// =============================================================================
// Write a function that takes a grocery list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains a
// fruit name and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times
// equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus,
// we return an array that contains 3 apples, 1 orange, and 2 bananas.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Two dimensional array with strings and numbers
// Output: One dimensional array strings

// Explicit requirements:
// - The number indicated in each sub array shows indicates how many times that
//   number should be added to the array

// Implicit requirements:
// - Assume sub arrays always containe a string and positive integer > 0

// Examples
// ---------------------------------------------------------
// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Datastructure
// ---------------------------------------------------------
// Arrays

// Algorithm
// ---------------------------------------------------------
// Start 'buyFruit', set 'twoDimenArr'
// Set 'oneDimenArr' to an empty arr
// Iterate through lineTotalArr
// For each sub array send the element in the 'oneDimenArr'
// Return oneDimenArr 

// Code
// ---------------------------------------------------------
function buyFruit(twoDimenArr) {
  let oneDimenArr = [];

  twoDimenArr.forEach(arr => {
    for (let i = 0; i < arr[1]; i++) {
      oneDimenArr.push(arr[0]);
    }
  });
  return oneDimenArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Thoughts / improvements
// ---------------------------------------------------------
// LS solution seems needlessly complex.
