// Question
// =============================================================================
// Write a function that takes a positive integer, n, as an argument and logs a
// right triangle whose sides each have n stars. The hypotenuse of the triangle
// (the diagonal side in the images below) should have one end at the lower-left
// of the triangle, and the other end at the upper-right.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number, posiitve integer
// Output: None specific, function logs multiple strings

// Explicit requirements:
// - Returns n incrementing rows of stars
// - Stars arespaced from right hand side. 

// Implicit requirements:
// - 0 is not a positive integer (maths def) so can ignore.

// Examples
// ---------------------------------------------------------
// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// Datastructure
// ---------------------------------------------------------
// None

// Algorithm
// ---------------------------------------------------------
// Create a function called 'triangle' with param 'num'
// Set value 'count' to 1
// While count is less than 0
// Log num - 1 amount of ' ' and count amount of '*'
// Subtract 1 from count

// Code
// ---------------------------------------------------------
function triangle(stars) {
  for (let count = 1; count <= stars; count++) {
    console.log(' '.repeat(stars - count) + '*'.repeat(count))
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// Thoughts / improvements
// ---------------------------------------------------------
