// Question
// =============================================================================
// Build a program that asks the user to enter the length and width of a room in
// meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Explicit requirements:
// - Collect length value in meters
// - Collect width values in meters
// - Log area calulation in width & meters
// - Use specified float for conversion
// - No need for validation
// - User readline.sync

// Implicit requirements:
// - Use readline library
// - Area = height x width
// - Always show 2 figures after calcuated numbers

// Examples
// ---------------------------------------------------------
// h = 10, w = 20  ->  area in meters = 200.00 &  area in feet = 2152.78
// h = 1.6, w = 2.9  ->  area in meters = 4.64 &  area in feet = 49.94
// h = 7, w = 10  ->  area in meters = 70.00 &  area in feet = 753.47

// UI examples:
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// Datastructure
// ---------------------------------------------------------
// None

// Algorithm
// ---------------------------------------------------------
// - Get unit type meters / feet
    // - Ask user are they working in 1). meters or 2) feet.
    // - Get answer and assign to units variable
// - Get values
//    - Ask for length input in meters
//    - Get length and assign to heightMeters
//    - Ask for width input in meters
//    - Get width and assign to widthMeters
// - If user prefers meters squared then:
//    - Calulate area & assign to areaMeters
//    - Calcutale area of ft squared
// - If user prefers ft squared do opposite
// - Round results to 2 x significant figures
  //  - Multiply result by 100
  //  - Round result
  //  - Divide reuslt by 100
// - Report result
//    - Merge areaMeters + areaFeet with explanatory string.
//    - Report string to user

// Code
// ---------------------------------------------------------

let readlineSync = require('readline-sync');
const SQUARE_METERS_TO_SQUARE_FEET = 10.7639;

console.log('Are you working in:\n1) meters 2) feet');
let units = parseInt(readlineSync.prompt(''));

console.log('Enter the length of the room:');
let lenght = parseInt(readlineSync.prompt(''));

console.log('Enter the width of the room:');
let width = parseInt(readlineSync.prompt(''));

let areaMeters;
let areaFeet;

if (units === 1) {
  areaMeters = lenght * width;
  areaFeet = areaMeters * SQUARE_METERS_TO_SQUARE_FEET;
} else if (units === 2) {
  areaFeet = lenght * width;
  areaMeters = areaFeet / SQUARE_METERS_TO_SQUARE_FEET;
}

areaMeters = (Math.round(areaMeters * 100) / 100).toFixed(2);
areaFeet = (Math.round(areaFeet * 100) / 100).toFixed(2);

console.log(`The area of the room is ${areaMeters} square meters or ${areaFeet} square feet.`)