// Question
// =============================================================================
// Lettercase Percentage Ratio

// Write a function that takes a string and returns an object containing the
// following three properties:

// - The percentage of characters in the string that are lowercase letters 
// - The percentage of characters that are uppercase letters 
// - The percentage of characters that are neither 

// You may assume that the string will always contain at least one character.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Object with three properties.

// Explicit requirements:
// - Need to calculate percentage total of each portion of characters
// - String will always have one character

// Implicit requirements:
// - Percentages accurate to 2DP
// - Percetages are string values with percetage sign
// - Object always contains 3 x percentages, even if some are 0.00

// Examples
// ---------------------------------------------------------
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Datastructure
// ---------------------------------------------------------
// Object with three properties

// Algorithm
// ---------------------------------------------------------
// Start 'letterPercentages', set, 'string'
// Set 'charCount' to an object with the three empty properties, each to zero
// Set 'percentUnit' to a 100 divided by the the strings length

// Iterate through the characters in the string
// For each char:
// If its between a-z, divide by length of string and add value to lowercase 
// Else if its between A-Z, divide by length of string and add value to uppercase 
// Else if its between A-Z, divide by length of string and add value to neither 

// Start 'toPercentages';
// Iterate over the properties in the charCount array
// Convert each property value to a round to 2dp
// Convert to a string
// Reassign each property to the new value
// End of function

// Return the charCount object from 'letterPercentages'



// Code
// ---------------------------------------------------------
function letterPercentages(string) {
  let charCount = { lowercase: 0, uppercase: 0, neither: 0 };
  let percentageUnit = 100 / string.length;

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];

    if (char > 'a' && char < 'z') charCount.lowercase += percentageUnit;
    else if (char > 'A' && char <'Z') charCount.uppercase += percentageUnit;
    else charCount.neither += percentageUnit;
  }
  numPropToPercent(charCount);
  return charCount;
};

function numPropToPercent(object) {
  for (let key in object) {
    object[key] = object[key].toFixed(2);
  }
  return object;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


// Thoughts / improvements
// ---------------------------------------------------------



