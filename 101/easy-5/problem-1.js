// Question
// =============================================================================
// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to
// represent degrees, a single quote (') to represent minutes, and a double
// quote (") to represent seconds. There are 60 minutes in a degree, and 60
// seconds in a minute.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Floating point number 0 <= num <= 360
// Output: String

// Explicit requirements:
// - Convert number to degrees, minutes, seconds
// - There are 3600 seconds in 60 minutes
// - Output string needs to contain degree, ' & and " symbols, no spaces
// - Inputs of 360 can return 360°00'00" or 0°00'00"
// - Need to allow for long


// Implicit requirements:
// - Decimal portion of the number is what needs to be converted to seconds
// - Integer portion of number remains constant
// - If 0 is passed to number, return 0 for all values

// Examples
// ---------------------------------------------------------
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// Datastructure
// ---------------------------------------------------------
// Strings to hold concatenated values

// Algorithm
// ---------------------------------------------------------
// Start 'dms', set 'number'
// Set d to number rounded down
// Set m, set s to 00 
// If d is not equal to number
// - Set 'ms' number minus d
// - Set ms to ms * 3600 
// - Set m to ms divided by 60
// - Set s to ms remainder 60, round down
// Return d + ° + m + ' + s + "

// Code
// ---------------------------------------------------------
function dms(num) {
  // let num = num * 1000000;
  let d = Math.floor(num);
  let m = s = '00';

  if (d !== num) {
    let ms = (num - d) * 3600;

    m = (ms / 60).toFixed(0).padStart(2, '0');
    s = (ms % 60).toFixed(0).padStart(2, '0');

  }

  return d + '°' + m + "'" + s + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"


// Thoughts / improvements
// ---------------------------------------------------------



