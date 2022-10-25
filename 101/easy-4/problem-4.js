// Question
// =============================================================================
// Write a function that returns true if the string passed as an argument is a
// palindrome, or false otherwise. A palindrome reads the same forwards and
// backwards. For this problem, the case matters and all characters matter.



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: boolean

// Explicit requirements:
// - Check if string is the same forwards and backwards
// - Case matters

// Implicit requirements:
// - Strings can have odd or even character length

// Examples
// ---------------------------------------------------------
// isPalindrome('madam');
// isPalindrome('Madam');
// isPalindrome("madam i'm adam");
// isPalindrome('356653');

// Datastructure
// ---------------------------------------------------------
// None, strings only

// Algorithm
// ---------------------------------------------------------
// Start program 'isPalindrome' with param 'string' 
// Set palindrome variable to true; 
// Check first character against last character
// - Set 'count' to 0
// - If string first character does not equal last character set palindrome to
//   false & break loop
// - While count is  than string length divided by two rounded repeat. 
// Return palindrome


// Code
// ---------------------------------------------------------

// Intial version per alogrithm
// function isPalindrome(string) {
//   let checkVal = true;
//   for (let i = 0; i <= Math.ceil(string.length / 2); i++) {
//     if (string[i] !== string[string.length - 1 - i]) {
//       checkVal = false;
//     }
//   }
//   return checkVal;
// }

// Simplified
function isPalindrome(str) {
  for (let i = 0; i <= Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));



// Thoughts / improvements
// ---------------------------------------------------------

// The launchschool version is much more compact using array methods to do the
// ehavy lifting. Altough I suspect my version is a bit more perfomant.

