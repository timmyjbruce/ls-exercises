// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: 1 number
// Output: 2 numbers, hours before and after midnight

// Explicit requirements:
// - Write two functions
// - One to calculate mins befroe midnight, one after
// - Return range should be 0 - 1439 inclusive

// Implicit requirements:
// - Consider using one function as a helper function for other
// - 

// Examples
// ---------------------------------------------------------
// console.log(afterMidnight('00:00'))  // 0
// console.log(beforeMidnight('00:00')) // 0
// console.log(afterMidnight('12:34'))  // 754
// console.log(beforeMidnight('12:34')) // 686
// console.log(afterMidnight('24:00'))  // 0
// console.log(beforeMidnight('24:00')) // 0

// Datastructure
// ---------------------------------------------------------
// Strings and numbers


// Algorithm
// ---------------------------------------------------------
// Set 'HOURS_IN_DAY' to 24
// Set 'MINUTES_IN_HOUR to 60

// Start 'afterMidnight', set 'time'
// Set hours to first two digits of time string, covnerted to integer
// Set mins to last two digits of time string, converted to integer

// Return (hours * MINUTES_IN_HOUR) + minutes

// Start 'beforeMidnight, set 'minutes'
// Return (HOURS_IN_DAY * MINUTES_IN_HOUR) - minutes;

// Code
// ---------------------------------------------------------
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

function afterMidnight(time) {
  let hours = parseInt(time.slice(0,2));
  let mins = parseInt(time.slice(3));
  let allMinutes = (hours * MINUTES_IN_HOUR) + mins;
  return allMinutes === 1440 ? 0 : allMinutes;
}

function beforeMidnight(time) {
  let minutes = afterMidnight(time);
  return minutes === 0 ? 0 : (HOURS_IN_DAY * MINUTES_IN_HOUR) - minutes;
}

console.log(afterMidnight('00:00'))  // 0
console.log(beforeMidnight('00:00')) // 0
console.log(afterMidnight('12:34'))  // 754
console.log(beforeMidnight('12:34')) // 686
console.log(afterMidnight('24:00'))  // 0
console.log(beforeMidnight('24:00')) // 0

// Thoughts / improvements
// ---------------------------------------------------------



