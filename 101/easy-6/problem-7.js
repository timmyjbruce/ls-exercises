// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Swap word order and seperate with string and comma

// Implicit requirements:
// - None

// Examples
// ---------------------------------------------------------
// swapName('Joe Roberts') // 'Roberts, Joe'

// Datastructure
// ---------------------------------------------------------
// Strings only

// Algorithm
// ---------------------------------------------------------
// Start 'swapName' , set 'string'
// Split string to array
// Return concatenaed string of elements and spacer

// Code
// ---------------------------------------------------------
// Initial
// const swapName = str => str.split(' ')[1] + ', ' + str.split(' ')[0];

// More readably
// const swapName = str => {
//   let arr = str.split(' ');
//   return arr[1] + ', ' + arr[0];
// }

// More compactly
const swapName = name => {
  let [a, b] = name.split(' ');
  return `${b}, ${a}`;
}

console.log(swapName('Joe Roberts')); // 'Roberts, Joe'

// Thoughts / improvements
// ---------------------------------------------------------
// LS solution of using join() method with allows a nice one liner solution. 


// Further exploration
// ---------------------------------------------------------
// Refactor LS solution to include people with one or more middle names

// LS solution
// function swapNameEdit(name) {
//   return name.split('').reverse('').join()
// }

// Refactor
function swapNameRefactored(name) {
  let names = name.split(' ');
  return `${names.splice(-1)}, ${names.join(' ')}`;
}

console.log(swapNameRefactored('Joe Malcom Roberts')); // 'Roberts, Joe Malcom'