// Question
// =============================================================================
// In the previous exercise, you developed a function that converts simple
// numeric strings to integers. In this exercise, you're going to extend that
// function to work with signed numbers.

// Write a function that takes a string of digits and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the first
// character is a +, your function should return a positive number; if it is a
// -, your function should return a negative number. If there is no sign, return
// a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in
// JavaScript, such as parseInt() and Number(). You may, however, use the
// stringToInteger() function from the previous lesson.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Skipped PEDAC for this one as solution to prior problem solved almost all of
// this one.

// Examples
// ---------------------------------------------------------


// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------


// Code
// --------------------------------------------------------- 

const stringToSignedInteger = string => {
  return stringToInteger(string) * (string[0] === '-' ? -1 : 1);
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


function stringToInteger(stringInteger) {
  let acceptedNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let finalNum = '';

  stringInteger.split('').map(element => {
    acceptedNumbers.map(number => {
      if (number == element) finalNum += element;
    });
  });
  return finalNum * 1;
};