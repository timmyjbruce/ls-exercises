// Question
// =============================================================================
// Create a function that takes 2 arguments, an array and an object. The array
// will contain 2 or more elements that, when combined with adjoining spaces,
// will produce a person's name. The object will contain two keys, "title" and
// "occupation", and the appropriate values. Your function should return a
// greeting that uses the person's full name, and mentions the person's title.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array & Object
// Output: String

// Explicit requirements:
// - Function must take 2 arguments
// - Must return string of cocatenated keywords
// - Array contains 2+ keys, no max given
// - Object contains 2 keys

// Implicit requirements:
// - Object keys may not always be populated
// - Final string must cocatenate with other values

// Examples
// ---------------------------------------------------------
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// // logs Hello, John Q Doe! Nice to have a Master Plumber around.

// Datastructure
// ---------------------------------------------------------
// No additional objects or arrays. Strings to concatenated values

// Algorithm
// ---------------------------------------------------------
// Declare a function greetings with params 'name' & 'role'
// Given and array with value for param names
// Create variable named nameString and initialise as empty string
// For every value in array name, cocatenate that value to nameStr current value.
// Create variable roleString and initialise as empty string
// Given object 'role'
// Convert object values into array and cocatenate array elements to roleString 
// Cocatenate additional tex with variables
// Return new string

// Code
// ---------------------------------------------------------

// Initial version per algorithm

// function greetings (nameArray, roleObject) {
//   let name = '';
//   nameArray.map(word => name += word + ' ');
  
//   let role = '';
//   Object.values(roleObject).map(word => role += word + ' ');

//   return `Hello, ${name.trimEnd()}! Nice to have a ${role}around.`
// }


// More compact version, but less readable)
function greetings (nameArray, roleObject) {
  let name = nameArray.reduce((a, b) => a + ' ' + b, '');
  let role = Object.values(roleObject).reduce((a, b) => a + ' ' + b, '');

  return `Hello,${name}! Nice to have a${role} around.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


// Thoughts /improvements needed
// ---------------------------------------------------------
// Way overcomplicated it, Launchschool solution is much simpler. Need to avoid
// jumping to methods too soon and consider simpler lookups.