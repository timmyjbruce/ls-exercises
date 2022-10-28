// Question
// =============================================================================
// Write a function that takes a positive integer as an argument and returns
// that number with its digits reversed.




// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: Number

// Explicit requirements:
// - Reverse the digigts of a number from LR to RL

// Implicit requirements:
// - Numbers that when reversed have leading zeros should be returned without them
// - Single digit numbers should return as the same number

// Examples
// ---------------------------------------------------------
// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1

// Datastructure
// ---------------------------------------------------------
// Arrays to hold values

// Algorithm
// ---------------------------------------------------------
// Start 'reverseNumber', set 'num'
// Convert num to string, string to array and reverse array
// Join string and convert on num
// Return

// ** Alternative** 
// Start 'reverseNumber', set 'num'
// Set numReversed
// Convert num as string
// Iterate through the string in reverse
// Add values to num reversed
// Return numReversed as a number (convert)

// Code
// ---------------------------------------------------------
// Initial solution
function reverseNumber(num) {
  return parseInt(String(num).split('').reverse().join(''));
}

// Alternative solution
function reverseNumber(num) {
  let numReversed = '';
  num = String(num);
  
  for (let i = num.length - 1; i >= 0; i--) {
    numReversed += num[i];
  }

  return parseInt(numReversed);
}

// Thoughts / improvements
// ---------------------------------------------------------

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1


