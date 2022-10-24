// Question
// =============================================================================
// A double number is an even-length number whose left-side digits are exactly
// the same as its right-side digits. For example, 44, 3333, 103103, and 7676
// are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied
// by two, unless the argument is a double number; otherwise, return the double
// number as-is.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: Number

// Explicit requirements:
// - If the number is not an even length number return it * 2
// - If the first haf of the number is equal to the second half return it * 2
// - If the first hald is equal to the second half return the number

// Implicit requirements:
// Two digit numbers with duplicate num characters are double doubles


// Examples
// ---------------------------------------------------------
// twice(37)     // 74
// twice(44)     // 44
// twice(334433) // 668866
// twice(444)    // 888
// twice(107)    // 214
// twice(103103) // 103103
// twice(3333)   // 3333
// twice(7676)   // 7676

// Datastructure
// ---------------------------------------------------------
// Arrays for number analysis

// Algorithm
// ---------------------------------------------------------
// Start function 'twice' with paramater 'num'
// Set numString as string version of num
// If num length is not even return num * 2
// Set 'half' to string of first half digits
// - Cut second half of string and return it
// If half is striclty equal to half return num
// Else return num * 2

// Code
// ---------------------------------------------------------
// function twice(num) {
//   let string = num.toString();
//   let length = string.length;
// if (string.length % 2 === 1) return num * 2;
  
//   let stringHalf1 = string.slice(0, length / 2);
//   let stringHalf2 = string.slice(length / 2);

//   return stringHalf1 === stringHalf2 ? num : num * 2; 

// }

// Simplified, no need for intitial if statement
function twice(num) {
  let string = num.toString();
  let halfLength = string.length / 2;
  
  let half1 = string.slice(0, halfLength);
  let half2 = string.slice(halfLength);

  return half1 === half2 ? num : num * 2; 

}


console.log(twice(37));     // 74
console.log(twice(44));     // 44
console.log(twice(334433)); // 668866
console.log(twice(444));    // 888
console.log(twice(107));    // 214
console.log(twice(103103)); // 103103
console.log(twice(3333));   // 3333
console.log(twice(7676));   // 7676

// Thoughts / improvements
// ---------------------------------------------------------


