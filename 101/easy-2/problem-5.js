// Question
// =============================================================================
// Write a program that prompts the user for two positive integers, and then
// prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power. Do not worry
// about validating the input.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Two positive intergers
// Output: Logged strings

// Explicit requirements:
// - No need for validation
// - Print
//    - Addition
//    - Subtraction
//    - Multuplication
//    - Division
//    - Remainder
//    - To power of
//  - Power 

// Implicit requirements:
// - Values & methods must be printed
// - Values & methods must be printed

// Examples
// ---------------------------------------------------------
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23

// Datastructure
// ---------------------------------------------------------
// None, is simple logging

// Algorithm
// ---------------------------------------------------------
// Get numbers, assign to variables
// Determine values and log values concatenated with explanatory text

// Code
// ---------------------------------------------------------
let readlineSync = require('readline-sync');

console.log('Enter the first number: ');
let num1 = parseInt(readlineSync.prompt(''));

console.log('Enter the second number: ');
let num2 = parseInt(readlineSync.prompt(''));

console.log(`${num1} + ${num2} = ${num1 + num2}
${num1} - ${num2} = ${num1 - num2}
${num1} * ${num2} = ${num1 * num2}
${num1} / ${num2} = ${Math.floor(num1 / num2)}
${num1} % ${num2} = ${num1 % num2}
${num1} * ${num2} = ${num1 ** num2}`);

// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23