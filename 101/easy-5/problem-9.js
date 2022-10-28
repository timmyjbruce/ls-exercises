// Question
// =============================================================================
// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of
// occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array
// Output: Strings logged to console

// Explicit requirements:
// - Count occurences of each element within same array
// - For each element return string with the amount of occurences
// - Count is case sensitive

// Implicit requirements:
// - None

// Examples
// ---------------------------------------------------------
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// Datastructure
// ---------------------------------------------------------
// Arrays (input)
// Object to store element(key) with count (value)

// Algorithm
// ---------------------------------------------------------
// Start 'countOccurrences', set 'array'
// Set 'elementCount' to an empty object
// Loop through each element of array, count instances in array, and send count 
// & element to object
//  - Loop through array
//  - Set count to 0
//  - Set 'key' to current element
//  - Iterate through array, incrementing count 
//    - If current element matches key
//    - Increment count
// Send key and count to elementCount
// Return elementCount

// Start 'logOccurences', set 'object'
// For each key in object
// Log concatednated string of key and value.

// Code
// ---------------------------------------------------------
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

// countOccurrences(vehicles);

// function countOccurrences(array) {
//   let elCounts = {};

//   for (let el of array) {
//     elCounts[el] = elCounts[el] || 0;
//     elCounts[el] += 1;
//   }
//   logOccurences(elCounts);
// }

// function logOccurences(object) {
//   for (let key in object) {
//     console.log(`${key} => ${object[key]}`);
//   }
// }

// Futher exploration
// ---------------------------------------------------------

// Try to solve the problem when words are case insensitive, e.g. "suv" and
// "SUV" represent the same vehicle type.


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);

function countOccurrences(array) {
  let elCounts = {};
  array = array.map(el => el.toLowerCase()); // Added this line here 

  for (let el of array) {
    elCounts[el] = elCounts[el] || 0;
    elCounts[el] += 1;
  }
  logOccurences(elCounts);
}

function logOccurences(object) {
  for (let key in object) {
    console.log(`${key} => ${object[key]}`);
  }
}