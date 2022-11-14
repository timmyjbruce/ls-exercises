// Question
// =============================================================================
// Tri-Angles A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees). Acute: All three
// angles are less than 90 degrees. Obtuse: One angle is greater than 90
// degrees. To be a valid triangle, the sum of the angles must be exactly 180
// degrees, and every angle must be greater than 0. If either of these
// conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments are
// in degrees.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: 3 x numbers
// Output: string

// Explicit requirements:
// - Output the respecitve string given the follwoing conditions
//  - If one arg is equal to 90, output 'right'
//  - If all args don't equal 180, or one arg equals zero, return 'invalid'
//  - If all three args are less than 90 return 'acute'
//  - If one arg is greater than 90, return obtuse
//  - Args are in degrees and integers

// Implicit requirements:
// - No additional

// Examples
// ---------------------------------------------------------
// triangle(60, 70, 50);       // "acute"
// triangle(30, 90, 60);       // "right"
// triangle(120, 50, 10);      // "obtuse"
// triangle(0, 90, 90);        // "invalid"
// triangle(50, 50, 50);       // "invalid"

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Start 'triangle', set 'a', 'b', 'c'
// Set angles to [a, b, c];

// If a + b + c doesnt equal 180 , or angles includes 0, return 'invalid'
// Else if array includes a value of 90 return 'right'
// Else if no array element is greater that 90 return 'acute'
// Else return 'obtuse'


// Code
// ---------------------------------------------------------
function triangle(a, b, c) {
  let angles = [a, b, c];

  if (a + b + c !== 180 || angles.includes(0)) return 'invalid';
  else if (angles.includes(90)) return 'right';
  else if (angles.every(num => num < 90)) return 'acute';
  else return 'obtuse';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"



// Thoughts / improvements
// ---------------------------------------------------------



