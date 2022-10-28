// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array
// Output: Array

// Explicit requirements:
// - Reverse array elements without using the reverse() method
// - Function must mutate and output supplied array.

// Implicit requirements:
// - Arrays with zero elements should return as empty arrays

// Examples
// ---------------------------------------------------------
// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result);
// console.log(list);
// console.log(list === result);

// let list1 = [a, b, c];
// let result1 = reverse(list1);
// console.log(result1);
// console.log(list1);
// console.log(list1 === result1);

// let list2 = [];
// let result2 = reverse(list2);
// console.log(result2);
// console.log(list2);
// console.log(list2 === result2);

// Datastructure
// ---------------------------------------------------------
// Arrays

// Algorithm
// ---------------------------------------------------------
// Start 'reverse',set 'array'
// Set 'holderArr' to copy of array
// Set make array length 0
// Iterate over holderArr
// - Send each element to start of array
// Return array

// Code
// ---------------------------------------------------------
function reverse(arr) {
  let arrCopy = arr.slice();
  
  arr.length = 0;
  arrCopy.map(ele => arr.unshift(ele));
  return arr;
}



let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result);
console.log(list);
console.log(list === result);

let list1 = ['a', 'b', 'c'];
let result1 = reverse(list1);
console.log(result1);
console.log(list1);
console.log(list1 === result1);

let list2 = [];
let result2 = reverse(list2);
console.log(result2);
console.log(list2);
console.log(list2 === result2);


// Thoughts / improvements
// ---------------------------------------------------------
// LS solution is cool, however seems quite complex, compared to simply emptying
// array, and adding elements back in in reverse.


