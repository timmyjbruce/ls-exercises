// Question
// =============================================================================
// Transpose 3x3 Matrix

// Write a function that takes an array of arrays that represents a 3x3 matrix
// and returns the transpose of the matrix. You should implement the function on
// your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a
// new matrix and leave the input matrix array unchanged. 


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array of sub arrays
// Output: Array of sub arrays

// Explicit requirements:
// - Transpose the matrix represented by th sub arrays
// - Don't modify the original array

// Implicit requirements:
// - No additional

// Examples
// ---------------------------------------------------------

// Original matrix:
// [1, 5, 8],
// [4, 7, 2],
// [3, 9, 6]

// Transposed matrix:
// [1, 4, 3],
// [5, 7, 9],
// [8, 2, 6]

// Datastructure
// ---------------------------------------------------------
// Arrays

// Algorithm
// ---------------------------------------------------------
// Start transpose, set param matrix
// Set newMatrix to an empty arrat
// Iterate through the sub arrays capturing index of each sub array as 'yIndex'
// Iterate through each sub array captuing index of each element as 'xIndex'
// If an empty subarray at xIndex does not exist in newMatrix, create one
// Push each element to the respective subarray in newMatrix
// Return newMatrix

// Code
// ---------------------------------------------------------

function transpose(matrix) {
  let newMatrix = [];
  
  matrix.forEach(subArr => {
    subArr.forEach((ele, index) => {
      newMatrix[index] = newMatrix[index] || [];
      newMatrix[index].push(ele);
    });
  });
  return newMatrix;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]



// Thoughts / improvements
// ---------------------------------------------------------



