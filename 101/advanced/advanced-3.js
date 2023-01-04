// Question
// =============================================================================
// Transpose MxN Matrix

// In the previous exercise, you wrote a function that transposed a 3x3 matrix
// represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices.
// Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works
// with any MxN matrix with at least one row and one column.



// PEDAC
// =============================================================================

// Prior questions solution satisfies this one


// Problem
// ---------------------------------------------------------
// Input:
// Output:

// Explicit requirements:
// -

// Implicit requirements:
// -

// Examples
// ---------------------------------------------------------


// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------


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

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]


// Thoughts / improvements
// ---------------------------------------------------------



