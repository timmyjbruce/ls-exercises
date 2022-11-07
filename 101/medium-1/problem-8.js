// Question
// =============================================================================
// Fibonacci Numbers (Procedural)

// In the previous exercise, we developed a recursive solution for computing the
// nth Fibonacci number. In a language that is not optimized for recursion, some
// (but not all) recursive functions can be extremely slow and may require
// massive quantities of memory and/or stack space. If you tested for bigger nth
// numbers, you might have noticed that getting the 50th fibonacci number
// already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or
// procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: Number

// Explicit requirements:
// - Calculate fibonaccti number sequence up to the given index
// - Return last calculated number

// Implicit requirements:
// - None

// Examples
// ---------------------------------------------------------
// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050

// Datastructure
// ---------------------------------------------------------
// Array will hold fibonacci count

// Algorithm
// ---------------------------------------------------------
// Start 'fibonacci', set 'nth'
// Set sequence to array with elements 0 and 1
// While nth is greater than 1
// Set 'lastIndex' to last index of array
// Add last + last - 1 to array
// Set Nth to Nth - 1
// Return arr

// Code
// ---------------------------------------------------------


// Thoughts / improvements
// ---------------------------------------------------------