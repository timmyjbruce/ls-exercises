// Question
// =============================================================================
// Bubble sort question: https://launchschool.com/exercises/b648e695


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array
// Output: Array

// Explicit requirements:
// - Iterate through given array comparing two element at a time
// - Swap or not based on comparison
// - Re iteration array until no swap are made

// Implicit requirements:
// - Array should sort numerically and alphabetically as well (1st char only)
// - 

// Examples
// ---------------------------------------------------------
// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


// Datastructure
// ---------------------------------------------------------
// Arrays to hold values

// ['a', 'b', 'c', 'd', 'e', 'f']

// Swapping 'c' & 'd'
// swappedVal = 'c'
// start = ['a','b','d']
// end = ['e','f']

// Swapping 'a' & 'b'
// swappedVal = 'a'
// start = ['b']
// end = ['c','d','e','f']

// Swapping 'e' & 'f'
// swappedVal = 'e'
// start = ['a','b','c','d','f']
// end = []


// Algorithm
// ---------------------------------------------------------
// Start 'bubbleSort', set 'arr'
// Set 'lastSort' to an empty arr
// Set 'currentSort' to an empty arr

// While a string version of current sort is not equal to a string version of
// last sort

// Loop over the array as many times as the length of the array - 1
// Let 'elementA' equal an element in the array
// Let elementB equal the following element in the array
// If elementA is greater than elementB:
// Set lastSort to currentSort
// Set current sort swapElements

// Start 'swap elements', set indexA, indexB 
// Set swappedVal the value of indexA, removing it from array
// Set arrStart to the remaining array
// Set arrEnd to the second half of array by cutting at end of indexA


// Code
// ---------------------------------------------------------
function bubbleSort(arr) {
  let previous = [];

  while(previous.join('') !== arr.join('')) {
    previous = arr.slice();

    for (let idx = 0; idx < arr.length - 1; idx++) {
      let [eleA, eleB] = [arr[idx], arr[idx + 1]];
      if(eleA > eleB) swapElements(idx, idx + 1, arr);
    }
  }
}

function swapElements(a, b, arr) {
  let swappedVal = arr[a];
  arr.splice(a, 1);

  let end = arr.splice(b) || [];
  arr.push(swappedVal, ...end)
}


// let array1 = [5, 3];   // [3, 5]
// bubbleSort(array1);
// console.log(array1);  

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


// Thoughts / improvements
// ---------------------------------------------------------



