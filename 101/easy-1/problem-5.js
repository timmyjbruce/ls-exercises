// Question
// =============================================================================
// Create a simple tip calculator. The program should prompt for a bill amount
// and a tip rate. The program must compute the tip, and then log both the tip
// and the total amount of the bill to the console. You can ignore input
// validation and assume that the user will enter numbers.

// PEDAC
// =============================================================================


// Problem
// ---------------------------------------------------------
// Explicit requirements:
// - Readline prompts must be used
// - Inputs 2 numbers
// - Total amount and tip logged to console

// Implicit requirements
// - Answers are given inline to question text
// - Fixed point notation of 2dp is used
// - Output is a string spanning two lines

// Examples
// ---------------------------------------------------------
// UI example:
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

// Datastructure
// ---------------------------------------------------------
// None

// Algorithm
// ---------------------------------------------------------
// Get bill value:
//  - Ask user for bill value
//  - Get value and assign to a variable billInitial
//  - Convert string value to number
// Get tip %:
//  - Ask user for tipPercent %
//  - Get value and assign to a variable tipAmount
//  - Convert string value to number
//  - Divide vlaue by 100 to convert % to decimal
// Calculate tip amount
//  - Assign tipPercent * billInitial to varible tip
// Calculate bill amount
//  - Assign tip + bill initial to variale billFinal
// Concatenate & report final string result to user

// Code
// ---------------------------------------------------------
let readlineSync = require('readline-sync');

let billInitial = parseInt(readlineSync.question('What is the bill? '));
let tipPercent = parseInt(readlineSync.question('What is the tip percentage? '));

tipPercent /= 100;

let tip = billInitial * tipPercent;
let billFinal = tip + billInitial;

console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${billFinal.toFixed(2)}`);

// Thoughts /improvements needed

// Consider more test cases relevant to the usage scenario. Here I should have
// used parseFloat instead of parseInt as its likely someone will need to input
// a float.