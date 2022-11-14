// Question
// =============================================================================
// Sum Square - Square Sum

// Write a function that computes the difference between the square of the sum
// of the first count positive integers and the sum of the squares of the first
// count positive integers.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: Number

// Explicit requirements:
// - Sum all the interger squares between 1, and the given number
// - Sum all the numbers and square the sum
// - Subtract the summed squares from the sqared sum


// Implicit requirements:
// - Arg of 1, should return 0

// Examples
// ---------------------------------------------------------
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

// Datastructure
// ---------------------------------------------------------
// Just numbers

// Algorithm
// ---------------------------------------------------------
// Start sumSquareDifference, set 'num'
// Set summedSquares to 0
// Set squaredSum to 0
// Set count to 0
// While 'count' is less than or equal to num
// Square num and add to summedSquares
// Add num to squaredSum
// Add 1 to count

// Square squaredSum
// Return squaredSum - summedSquares

// Code
// ---------------------------------------------------------
// Initial as per algorithm
function sumSquareDifference(num) {
  let summedSquares = 0;
  let squaredSum = 0;

  for (num; num >= 0; num--) {
    summedSquares = summedSquares + (num**2);
    squaredSum += num;
  }
  squaredSum = squaredSum**2;
  return squaredSum - summedSquares; 
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

// Thoughts / improvements
// ---------------------------------------------------------



