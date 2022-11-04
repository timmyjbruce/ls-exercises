// Question
// =============================================================================
// Rotation (Part 1)

// Write a function that rotates an array by moving the first element to the end
// of the array. Do not modify the original array.

// If the input is not an array, return undefined. If the input is an empty
// array, return an empty array. Review the test cases below, then implement the
// solution accordingly.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array 
// Output: Array

// Explicit requirements:
// - The first element of the array is moved to the end
// - If the argument is not an array return undefined

// Implicit requirements:
// - If array has one element return same array structure
// - Returned array should be a new array (not a mutated supplied array)
// - Elements in array can hold any value
// - Not worrying about sparse arrays

// Examples
// ---------------------------------------------------------
// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined

// // the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// Datastructure
// ---------------------------------------------------------
// Array

// Algorithm
// ---------------------------------------------------------
// Start 'rotateArray' , set 'array'
// If datatype of argument is not equal to 'array' return undefined
// Set 'rotatedArray' to a be shallow copy of array
// Add first element of rotatedArray to the end of rotatedArray
// Removed the first element of rotated array
// Return rotatedArray

// **Alt solution**
// Start 'rotateArray' , set 'array'
// If datatype of argument is not equal to 'array' return undefined
// Make a copy of the array and increment through
// If the final element of the array, set it to the first element
// Set the next element in the array to the current element

// Return array

// Code
// ---------------------------------------------------------
function rotateArray(array) {
  if (typeof array !== typeof []) return undefined;

  let rotated = array.slice();
  rotated.push(rotated[0]);
  rotated.shift();

  return rotated;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


// Thoughts / improvements
// ---------------------------------------------------------
// Solution doesn't validate the array well enough. An arrays datatype is object
// so relying on the typeof keword is not a good approach here.

// Using the concat method is a good solution too as it returns a copy.