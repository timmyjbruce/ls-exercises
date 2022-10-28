// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: String

// Explicit requirements:
// - Negative values represent minuts before midnight
// - Postive values are minutes after midnight
// 
// Implicit requirements:
// - Even input numbers result in even minute values
// - Time is never a negative value
// - Need to large (multi day) numbers (could use remainder)
// - 24 hours in a day, 60 mins in hour

// Examples
// ---------------------------------------------------------
// console.log(timeOfDay(0) === '00:00');
// console.log(timeOfDay(-3) === '23:57');
// console.log(timeOfDay(35) === '00:35');
// console.log(timeOfDay(-1437) === '00:03');
// console.log(timeOfDay(3000) === '02:00');
// console.log(timeOfDay(800) === '13:20');
// console.log(timeOfDay(-4231) === '01:29');

// Datastructure
// ---------------------------------------------------------
// Numbers and strings

// Algorithm
// ---------------------------------------------------------
// Start 'timeOfDay' set 'num'
// set time = '';
// set 'HOURS_IN_DAY' to 24
// Set 'MINUTES_IN_HOUR to 60
// Set num to remainder of num / minutes in day
// Set 'hours' to num / MINUTES_IN_HOUR, rounded down
// Set 'minutes' to remainder of num / MINUTES_IN_HOUR

// If hours equal to negative
// Add value to 24
// Set hours to return value

// Concatenate hours & minutes to time, padding lengths to 2sf
// Return time

// Code
// ---------------------------------------------------------
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

function timeOfDay(num) {
  num = num % (MINUTES_IN_HOUR * HOURS_IN_DAY);
  let hours = Math.floor(num / MINUTES_IN_HOUR);
  let minutes = num % MINUTES_IN_HOUR;

  [hours, minutes] = convertIfNegative(hours, minutes);
  [hours, minutes] = formatTime(hours, minutes)

  return `${hours}:${minutes}`;
}

// Helper functions
function convertIfNegative(h, m) {
  return h < 0 ? [h += HOURS_IN_DAY, m += MINUTES_IN_HOUR] : [h, m];
}
function formatTime(...args) {
  return args.map(num => String(num).padStart(2, '0'));
}

console.log(timeOfDay(0) === '00:00');
console.log(timeOfDay(-3) === '23:57');
console.log(timeOfDay(35) === '00:35');
console.log(timeOfDay(-1437) === '00:03');
console.log(timeOfDay(3000) === '02:00');
console.log(timeOfDay(800) === '13:20');
console.log(timeOfDay(-4231) === '01:29');


// Further exploration
// ---------------------------------------------------------

// Returning at a later point

