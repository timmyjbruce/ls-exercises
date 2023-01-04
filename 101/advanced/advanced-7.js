// Question
// =============================================================================
// Implement a binarySearch function that takes an array and a searchItem as
// arguments, and returns the index of the searchItem if found, or -1 otherwise.
// You may assume that the array argument will always be sorted.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array and search item (single val of any datatype)
// Output: Index of element on array, else -1

// Explicit requirements:
// - Find the mid-point list, if it less discrad that half (inclusive), or do
//   the inverse.
// - Retrieve the middle value from the data (assume truncation to integer) -->
//   'Eat a Lot'.
// - If the middle value is equal to 'Pizzeria', stop the search.
// - If the middle value is less than 'Pizzeria'
//    - Discard the lower half, including the middle value --> ['Apple Store',
//      'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
//    - Repeat the process from the top, using the upper half as the starting
//      data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge',
//      'Zooper'].

// Examples
// ---------------------------------------------------------
// See 'code' section

// Datastructure
// ---------------------------------------------------------
// Recording the original index through various splices:
// Index is a position from the start.
// Removaval of second half has no impact
// Only need to capture removal of first half


// Algorithm
// ---------------------------------------------------------
// Start binarySearch, set 'array' and 'search'
// Set searchArr to a copy of array
// While searchArr length is greater than 1
// Set midIndex to array length divided by 2, rounded up
// If the value at midIndex equals search, return midIndex
// If the value at midIndex is less than search
//  - Set searchArr to the values in the array from 0, to 1 index prior to midindex;
// If the value at midIndex is higher do the opposite

// If the value at the first index of searchArr equals search
// Return the index of that value in 'array' (the original)
// Else return -1

// Code
// ---------------------------------------------------------
function binarySearch(searchArray, search) {
  let array = searchArray.slice();
  let runningIndex = 0;

  while (array.length > 1) {
    let midIndex = Math.ceil(array.length / 2);
    
    if (array[midIndex] === search) return runningIndex + midIndex;
    else if (array[midIndex] > search) array.splice(midIndex);
    else {
      array.splice(0, midIndex);
      runningIndex += midIndex;  
    }
  }
  return array[0] === search ? runningIndex : -1;
}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

// Thoughts / improvements
// ---------------------------------------------------------



