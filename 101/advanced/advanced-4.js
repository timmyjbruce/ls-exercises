// Question
// =============================================================================
// Rotating Matrix

// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by
// 90-degrees as described above, and returns the result as a new matrix. The
// function should not mutate the original matrix.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array of sub arrays (matrix)
// Output: Araay of sub arrays 

// Explicit requirements:
// - Values in the matrix must be 'rotate' 90 degrees to the right
// - Must work with non-square matrixes

// Implicit requirements:
// -

// Examples
// ---------------------------------------------------------
// This matrix:
// 3  4  1
// 9  7  5

// Should become:
// 9  3
// 7  4
// 5  1

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Start rotate90, set 'matrix'
// Set rotatedMatrix to empty arr
// Set reversedMatrix to the matrix with the subarrays in reverse order
// Iterate through sub arrays, setting each as 'subArr'
// Iterate through subArrs setting element and index repspectively
// Push each element to the respective subarray in rotatedMatrix
// Return newMatrix


// Code
// ---------------------------------------------------------

function rotate90(matrix) {
  let reversedMatrix = matrix.slice().reverse();
  let rotatedMatrix = [];

  reversedMatrix.forEach(subArr => {
    subArr.forEach((ele, index) => {
      rotatedMatrix[index] = rotatedMatrix[index] || [];
      rotatedMatrix[index].push(ele);
    });
  });
  return rotatedMatrix;
}


let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// Thoughts / improvements
// ---------------------------------------------------------



