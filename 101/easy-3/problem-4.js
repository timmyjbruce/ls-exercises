// Question
// =============================================================================
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
// such that the first two numbers are 1 by definition, and each subsequent
// number is the sum of the two previous numbers. Fibonacci numbers often appear
// in mathematics and nature.

// Computationally, the Fibonacci series is a simple series, but the results
// grow at an incredibly rapid rate. For example, the 100th Fibonacci number is
// 354,224,848,179,261,915,075—that's enormous, especially considering that it
// takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci
// number that has the number of digits specified by the argument. (The first
// Fibonacci number has an index of 1.)


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number 
// Output: Number (index)

// Explicit requirements:
// - Return value is the index of first value in fib sequence the matches the
//   length of provided num.
// - Will need to use BigInt numbers to represent fib sequence.

// Implicit requirements:
// - Will need to generate a fib sequence

// Examples
// ---------------------------------------------------------
// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// Datastructure
// ---------------------------------------------------------
// Array to hold fib sequence

// Algorithm
// ---------------------------------------------------------
// Create a function 'findFibonacciIndexByLength' with parameter 'num'
// Set 'fibSeq' to and array containing 0, 1
// While the length of the last element of fibSeq is less than num
// Add the two prior values in fibSeq to each other and add to fibSeq

// Code
// ---------------------------------------------------------
function findFibonacciIndexByLength(num) {
  let fibSeq = [0n, 1n]
  let index = 1n;

  while (fibSeq[index].toString().length < num) {
    fibSeq.push(fibSeq[index] + fibSeq[index - 1n]);
    index++
  }
  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// Thoughts / improvements
// ---------------------------------------------------------



// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input:
// Output:

// Explicit requirements:
// -

// Implicit requirements:
// -

// Examples
// ---------------------------------------------------------


// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------


// Code
// ---------------------------------------------------------


// Thoughts / improvements
// ---------------------------------------------------------



