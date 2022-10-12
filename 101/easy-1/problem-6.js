// Question
// =============================================================================
// Write a program that asks the user to enter an integer greater than 0, then
// asks whether the user wants to determine the sum or the product of all
// numbers between 1 and the entered integer, inclusive.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Explicit requirements: 
//  - Collect and integer from user
//  - Collect a choice of sum or product calculation from user
//  - Calculate the sum or product respectively
//  - Report result of calculation to user

// Implicit requirements:
//  - Integer must be greater than 0
//  - Result is a string containing calculation
//  - Validation is required
// 
// Questions:
//  - What is the difference between the sum & product. // Times & multiply


// Examples
// ---------------------------------------------------------
// UI example 1:
// 
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
// 
// The sum of the integers between 1 and 5 is 15.

// UI example 2:
// 
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.


// Datastructure
// ---------------------------------------------------------
// Array for capturing list of intergers

// Algorithm
// ---------------------------------------------------------
// Get initial value
//  - Ask user for value
//  - Check if value is an integer / number
//  - Check if vlaue is above zero
//  - Get value and assign to variable num
//  - Convert string num to number
// Get calculation choice
//  - Ask user for choice
//  - Check if choice matches options
//  - Get choice and assign to calcType variable
//  - If calcType = 's' reassign it to 'sum' or else reassign it to 'product'
// Populate array with numbers
//  - Initialise empty array variable 'array'
//  - Assign 1 to variable count
//  - Add count to array
//  - Increment count
//  - Repeat until count equals num
// Calcuate
//  - Create a variable called calculation
//  - If choice equals 's' add all numbers in array and assign
//  - If choice equals 'p' multiply all numbers in array & assign
// Report result to user witin string explanation
//  - Create a variable operationType

// Code
// ---------------------------------------------------------

// Program ******************

let readlineSync = require('readline-sync');

let num = parseFloat(readlineSync.question('Please enter an integer greater than 0: '));
while (!Number.isInteger(num) || (num * -1) > 0) {
  num = readlineSync.question('Invalid selection, please try again: ');
}

let calcType = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
while (calcType !== 's' && calcType !== 'p') {
  calcType = readlineSync.question('Invalid selection, please try again xx: ');
}

calcType = calcType === 's' ? calcType = 'sum' : calcType = 'product';

console.log(`The ${calcType} of the integers between 1 and ${num} is ${calcSumOrProduct(num, calcType)}.`);

// Function ******************

function calcSumOrProduct (initialNumber, type) {
  let arrayNumbers = [];
  for (let i = 1; i <= initialNumber; i++) {
    arrayNumbers.push(i);
  }
  if (type === 'sum') {
    return arrayNumbers.reduce((a, b) => a + b, 0);
  } else {
    return arrayNumbers.reduce((a, b) => a * b, 1);
  }
};


// Thoughts /improvements needed
// ---------------------------------------------------------

// Different solution than LS answer but is more compact despite additional validation. And
// I don't believe any less clear despite that compactness.

// Skipped the 'Further Exploration' question as soltion already uses an array and reduce.