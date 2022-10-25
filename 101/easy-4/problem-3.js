// Question
// =============================================================================
// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Strings via readline
// Output: String/s logged to console

// Explicit requirements:
// - Calculate year of retirement
// - Get current year

// Implicit requirements:
// - If input is not in years ask again for value in years (integer)
// 

// Examples
// ---------------------------------------------------------
// Console log:
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// Datastructure
// ---------------------------------------------------------
// None, strings

// Algorithm
// ---------------------------------------------------------
// START
// Ask user age
// Set 'age' & convert to number
// While age is not a valid number repeat question
// Ask user retirement age & convert to number
// Set 'ageRetire'
// While age is not a valid number repeat question
// Set 'currentYear' to the current year
// Set 'yearsToRetire' to ageRetire - age
// Set 'yearRetire' to current year + yearsToRetire
// Log strings with cocatenated with variables


// Code
// ---------------------------------------------------------

// const readlineSync = require('readline-sync');
// const CURRENT_YEAR = 2022;

// let age = parseInt(readlineSync.question('What is your age? '));
// while (!Number.isInteger(age)) {
//   age = parseInt(readlineSync.question('Please enter your age in years: '));
// }

// let ageRetire = parseInt(readlineSync.question('At what age would you like to retire? '));
// while (!Number.isInteger(ageRetire)) {
//   ageRetire = parseInt(readlineSync.question('Please enter your retirement age in years: '));
// }

// let yearsToGo = ageRetire - age;
// let yearRetire = CURRENT_YEAR + yearsToGo;

// console.log(`It's ${CURRENT_YEAR}. You will retire in ${yearRetire}.`)
// console.log(`You have only ${yearsToGo} years of work to go!`);



// Further exploration
// ---------------------------------------------------------

let readlineSync = require("readline-sync");

let currentAge = Number(readlineSync.question("What is your age?\n"));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire?\n")
);

let today = new Date();

let currentYear = today.getFullYear();

let workYearsToGo = retirementAge - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);


// Without the new keyword we get a TypeEror stating, 'today.getFullYear is not
// a function'. This is because without the 'new' keyword the value of 'today'
// is a string and the getFullYear method can't be called on a string. The new
// keyword is required to consruct a date object.