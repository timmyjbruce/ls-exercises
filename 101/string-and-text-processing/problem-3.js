// Question
// =============================================================================
// Write a function that takes a string and returns an object containing three
// properties: one representing the number of characters in the string that are
// lowercase letters, one representing the number of characters that are
// uppercase letters, and one representing the number of characters that are
// neither.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Object

// Explicit requirements:
// - Iterate through strings and log UC, LC, and other characers to an objcet

// Implicit requirements:
// - All values for 3x properties in object can be zero in final object

// Examples
// ---------------------------------------------------------
// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

// Datastructure
// ---------------------------------------------------------
// Start with an empty object with required properties, values set to 0

// Algorithm
// ---------------------------------------------------------
// Start 'letterCaseCount()', set 'strings'
// Set caseCount to an bject with required properties, values set to 0.
// Loop through string 
// Check characters case and add values to respective case
//  - Use regex to detect upper case and lowercase letters
//  - Other characters are any that arent matched 
// Return caseCount

// Code
// ---------------------------------------------------------
// Initial solution per alogrithm
function letterCaseCount(string) {
  let caseCount = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let idx = 0; idx < string.length; idx++) {
    if (/[a-z]/.test(string[idx])) {
      caseCount.lowercase += 1;
    } else if (/[A-Z]/.test(string[idx])) {
      caseCount.uppercase += 1;
    } else {
      caseCount.neither += 1;
    }
  }
  return caseCount;
}


function letterCaseCount(string) {
  let caseCount = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let idx = 0; idx < string.length; idx++) {
    if (/[a-z]/.test(string[idx])) {
      caseCount.lowercase += 1;
    } else if (/[A-Z]/.test(string[idx])) {
      caseCount.uppercase += 1;
    } else {
      caseCount.neither += 1;
    }
  }
  return caseCount;
}



console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

