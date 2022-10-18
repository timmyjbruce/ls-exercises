// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Simplified PEDAC as repeats prior question heavily.

// Examples
// ---------------------------------------------------------
// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Given an integer
// If interger is 0, return 0
// If interger is positive, return integerToString with '+'
// If interger is negative, return integerToString with '-'

// Code
// ---------------------------------------------------------


function signedIntegerToString(integer) {
  if (integer === 0) return '0';
  else if (Math.sign(integer) === -1) return integerToString(integer);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));

function integerToString(num) {
  const VALIDNUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numString = '';
  do {
    numString = VALIDNUMS.find(string => string == num % 10) + numString;
    num = (num - (num % 10)) / 10
   } while (num > 0)

   return numString;
};