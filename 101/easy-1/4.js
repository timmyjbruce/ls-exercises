// Question:
// Build a program that asks the user to enter the length and width of a room in
// meters, and then logs the area of the room to the console in both square
// meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.


// Code:

let readlineSync = require('readline-sync');
const FEET_TO_METERS = 10.7639;


console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();

console.log("Which units are you using? If meters type 'm' if feet type 'ft'");
let unit = readlineSync.prompt();


let areaMeters = length * width;
let areaFeet = areaMeters + FEET_TO_METERS;

let primaryArea = 
let secondaryArea = 
let unitWord = unit === 'm' ? 'meters' : 'feet';

console.log(`The size of the room is approx ${area} square ${unitWord()}.`);

// let unitWord = () => {
//   switch (unit) {
//     case 'm' :
//       area = length * width;
//       return 'meters';
      
//     case 'ft' :
//       area = length * width * FEET_TO_METERS;
//       return 'feet';
//   }
// }




