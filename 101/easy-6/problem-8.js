// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Two numbers
// Output: Array

// Explicit requirements:
// - Return array of multiples of second argument
// - Array length should be equal to first arg
// - If first arg 0, array should return empyt

// Implicit requirements:
// - Negative second args should result in negative array elements

// Examples
// ---------------------------------------------------------
// sequence(5, 1);  // [1, 2, 3, 4, 5] 
// sequence(4, -7);  // [-7, -14, -21, -28] 
// sequence(3, 0);  // [0, 0, 0] 
// sequence(0, 10000000);  // [] 

// Datastructure
// ---------------------------------------------------------
// Array to hold incerementing values

// Algorithm
// ---------------------------------------------------------
// Start 'sequence', set 'count' & 'startNum'
// Set 'arr' to empty array
// While count is greater than
// Set 'last' equal to arr last index, or 0
// Push previous + startNum to arr
// Decrement count
// Return array

// Code
// ---------------------------------------------------------
function sequence(count, startNum) {
  let arr = [];
  for (count; count >= 1; count--) {
    arr.push(startNum + (arr[arr.length - 1] || 0) );
  }
  return arr;
}

// Alternative oslution using problem 6 answer.
function sequence(count, startNum) {
  let arr = [];

  for (count; count >= 1; count--) {
    arr.unshift(startNum * count);
  }
  return arr;
}

// More compact but relying on weirder behaviour with decrment operator
// function sequence(count, startNum) {
//   let arr = [];

//   while (count >= 1) {
//     arr.unshift(startNum * count--);
//   }
//   return arr;
// }


console.log(sequence(5, 1));  // [1, 2, 3, 4, 5] 
console.log(sequence(4, -7));  // [-7, -14, -21, -28] 
console.log(sequence(3, 0));  // [0, 0, 0] 
console.log(sequence(0, 10000000));  // [] 

// Thoughts / improvements
// ---------------------------------------------------------



