// Question
// =============================================================================
// Merge Sorted Lists

// Write a function that takes two sorted arrays as arguments and returns a new
// array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Two arrays (seperate args)
// Output: Single array

// Explicit requirements:
// - Outpput array is sequietiall sorted
// - Output array must be built one element at a time from seperate arrays

// Implicit requirements:
// - Must still work if one array is empty

// Examples
// ---------------------------------------------------------
// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]

// Datastructure
// ---------------------------------------------------------

// Algorithm
// ---------------------------------------------------------
// Start merge, set arr1, and arr2
// Set mergedArr to an empty array
// Sort arr1 and arr2
// Set count to num of elelments across both arrays
// While the count it greater than 0
// If first element of arr1, is larger that the first ele of arr2
// Remove the first val of arr1, sending the value to mergedArr
// Else do the same with arr2
// Reduce the count by 1
// Return mergedArr

// Code
// ---------------------------------------------------------

function merge(arr1, arr2) {
  let [copyArr1, copyArr2] = [arr1.slice(), arr2.slice()];
  let mergedArr = [];
  let count = arr1.length + arr2.length;

  while (count > 0){
    let [arr1Min, arr2Min] = [Math.min(...copyArr1), Math.min(...copyArr2)]

    if (arr1Min < arr2Min) {
      mergedArr.push(copyArr1.splice(copyArr1.indexOf(arr1Min), 1));
    } else {
      mergedArr.push(copyArr2.splice(copyArr2.indexOf(arr2Min), 1));
    }
    count -= 1;
  }
  return mergedArr.flat();
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// Thoughts / improvements
// ---------------------------------------------------------



