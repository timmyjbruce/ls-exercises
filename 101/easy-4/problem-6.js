// Question
// =============================================================================
// Write a function that returns true if its integer argument is palindromic, or
// false otherwise. A palindromic number reads the same forwards and backwards.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number, integer
// Output: Boolean

// Explicit requirements:
// - Assume input is alwasy an integer

// Implicit requirements:
// - Single digit numbers are palindromes

// Examples
// ---------------------------------------------------------
// isPalindromicNumber(34543);
// isPalindromicNumber(123210);
// isPalindromicNumber(22);
// isPalindromicNumber(5);


// Datastructure
// ---------------------------------------------------------
// Arrays

// Algorithm
// ---------------------------------------------------------
// Start 'isPalindromicNumber' function, set 'num'
// Convert num to string, and then to array of chars
// If reverse string equals string
// Return true
// Else return false

// Code
// ---------------------------------------------------------
function isPalindromicNumber(num) {
  num += '';
  return num === num.split('').reverse().join('');
}
console.log(isPalindromicNumber(34543)); // True
console.log(isPalindromicNumber(123210)); // False
console.log(isPalindromicNumber(22)); // True
console.log(isPalindromicNumber(5)); // True


// Additional question
// ---------------------------------------------------------
// The number constructor will remove any 0's padding the string.
console.log(String(0987654)); 

