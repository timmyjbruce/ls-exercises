// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input:
// Output:

// Explicit requirements:
// - All non-aplhanumeric characters should be ignored
// - Capitals should be ignored

// Implicit requirements:
// - None

// Examples
// ---------------------------------------------------------
// isRealPalindrome('madam'); // True
// isRealPalindrome('Madam'); // True
// isRealPalindrome("Madam I'm Adam"); // True
// isRealPalindrome('356553'); // True
// isRealPalindrome('356a653'); // True
// isRealPalindrome('123a321'); // False

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Start 'isRealPalindrome', set 'string'
// Convert string to lowercase
// Replace non-alphanumeric characters in string with empty characters
// Run string through isPalindrome
// Return output


// Code
// ---------------------------------------------------------

// Solution function

function isRealPalindrome(stringFull) {
  stringFull = stringFull.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
  return isPalindrome(stringFull);
}

console.log(isRealPalindrome('madam')); // True
console.log(isRealPalindrome('Madam')); // True
console.log(isRealPalindrome("Madam I'm Adam")); // True
console.log(isRealPalindrome('356653')); // True
console.log(isRealPalindrome('356a653')); // True
console.log(isRealPalindrome('123ab321')); // False


// Helper function (from previous exercise)

function isPalindrome(str) {
  for (let i = 0; i <= Math.ceil(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}


// Thoughts / improvements
// ---------------------------------------------------------
// Solution is pretty much inline with the LaunchSchool solution which is good
// as I couldn't see any way to simplify it further.


