// Question
// =============================================================================
// Next Featured Number Higher than a Given Value

// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: NUmber

// Explicit requirements:
// - Output number is next number that in sequence after supplied number that:
//   - Is odd
//   - Is a multiple of 7
//   - Has no repeated digits
//   - Is below: 9876543201

// Implicit requirements:
// - Return values 9876543201 and over should return an error message

// Examples
// ---------------------------------------------------------
// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543186);   // 9876543201
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirements."

// Datastructure
// ---------------------------------------------------------
//

// Algorithm
// ---------------------------------------------------------

// Start featured, set num
// While num 
//  Set maxNum to 9876543201
//  Set num to num + 1
//  If num is greater than maxNum, return and log supplied message
//  If num % 2 is not equals to 0, continue the loop
//  If num % 7 not equal to 0, continue the loop
//  If checkDigitsUnique returns true, return num


// Start checkDigitsUnique, set num
// Set arr to an array of digits in num
// Set index to 0
// While index is les than arr's length
// If array contains more than 1 of the value stored at index, return false
// - Make a copy of the array
// - Remove the target index from array
// - Check if array still contains another element with the same value
// - If it does return false

// Return true


// Code
// ---------------------------------------------------------

// Initial function, per algorithm

function featured(num) {
  const MAX_NUM = 9876543201;
  if (num >= MAX_NUM) return 'There is no possible number that fulfills those requirements.';

  while (true) {
    num += 1;
    if (num % 2 !== 1 || num % 7 !== 0) continue;
    if (checkDigitsUnique(num)) return num;
  }
}

function checkDigitsUnique(num) {
  let arr = String(num).split('');

  for (let idx = 0; idx < arr.length; idx++) {
    let tempArr = arr.slice();
    tempArr.splice(idx, 1);
    if (tempArr.includes(arr[idx])) return false;
  }
  return true;
}




console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."



// Thoughts / improvements
// ---------------------------------------------------------



