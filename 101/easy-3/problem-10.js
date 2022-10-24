// Question
// =============================================================================
// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and ends
// with 'st', 'nd', 'rd', or 'th' as appropriate for that number.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: String

// Explicit requirements:
// - Output must omit the first last 2 digits and include relevant suffix attached
// - New centuries begin in years that stat with 01

// Implicit requirements:
// - Suffix is depandant on the last digit
// - If input is 2 digits in length it will always be the first century
// - The century value is one yeat greater
// - If the second to last digit is a 1 the suffix is always 'th'

// Examples
// ---------------------------------------------------------
// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

// Datastructure
// ---------------------------------------------------------
let ob = { 
  1 : 'st',
  2 : 'nd',
  3 : 'rd',
  4 : 'th',
  5 : 'th',
  6 : 'th',
  7 : 'th',
  8 : 'th',
  8 : 'th',
  0 : 'th'
}

// Algorithm
// ---------------------------------------------------------
// Start century with parameter 'year'
// Set suffix to array with suffix matching index
// Set 'century' to year / 100, rounded down, plus 1
// Convert century to a string
// Get the last character of century and add to end of century
// - If the last charater is greater than 4, return the first value
// Return century

// Code
// ---------------------------------------------------------
function century(year) {
  const SUFFIXES = ['th', 'st', 'nd', 'rd']

  let centuries = Math.ceil(year / 100) + '';
  let century = centuries[centuries.length - 1]
  let millenium = centuries[centuries.length - 2];
  
  if (millenium === '1' || century > 3) {
    return centuries + SUFFIXES[0];
  }
  return centuries + SUFFIXES[century];
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"




// Thoughts / improvements
// ---------------------------------------------------------