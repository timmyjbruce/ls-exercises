// Question
// =============================================================================
// Write a program that solicits six numbers from the user and logs a message
// that describes whether the sixth number appears among the first five numbers.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Six numbers
// Output: Sentence

// Explicit requirements:
// - Prompt for and retrieve six numbers from user
// - Return a string, contain num6, confirming if it appears amongst the first 5

// Implicit requirements:
// - Need to compare as numbers not strings

// Examples
// ---------------------------------------------------------
// TBC

// Datastructure
// ---------------------------------------------------------
// Arrays to hold numbers, though might be able to get away with swith.

// Algorithm
// ---------------------------------------------------------
// Start program
// Initialise readline-sync
// Set 'num1' through 'num6' as user suppliec numbers
// - Start 'getNumArray', with param count
// - Prompt user for num x
// - Set num to value
// - Convert from string to num
// - Repeat
// - Return array of nums
// - Set each variables to respective num
// Compare num1 - num5 to see if they are equal to num6
// If equal return string explaining
// Else return string explainig not founf


// Code
// ---------------------------------------------------------
// const readlineSync = require('readline-sync');

// let [n1, n2, n3, n4, n5, n6 ] = getNumArray(6);

// switch (n6) {
//   case n1:
//   case n2:
//   case n3:
//   case n4:
//   case n5: 
//     console.log(`The number ${n6} appears in ${n1},${n2},${n3},${n4},${n5}`);
//     break;
//   default:
//     console.log(`The number ${n6} does not appear in ${n1},${n2},${n3},${n4},${n5}`);
// }

// function getNumArray(count) {
//   let numArray = [];

//   for (let num = 1; num <= count; num++) {
//     numArray.push(parseInt(readlineSync.question(`Enter number ${num}: `)));
//   }
//   return numArray;
// }


// Shorter version
const readlineSync = require('readline-sync');

let nums = getNumArray(6);
let lastNum = nums.splice(nums.length - 1);

nums.includes(lastNum) 
  ? console.log(`The number ${lastNum} appears in ${nums}`)
  : console.log(`The number ${lastNum} does not appear in ${nums}`);


function getNumArray(count) {
  let numArray = [];
  for (let num = 1; num <= count; num++) {
    numArray.push(parseInt(readlineSync.question(`Enter number ${num}: `)));
  }
  return numArray;
}

// Further exploration
// ---------------------------------------------------------

// // Rewrite this to use 'some'
// function isIncluded(arr, val) {
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (arr[idx] > val) {
//       return true;
//     }
//   }

//   return false;
// }

// Rewritten
// function isIncluded(arr, val) {
//   return arr.some((element) => element > val);
// }