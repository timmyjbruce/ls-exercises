// Question
// =============================================================================
// Triangle Sides

// A triangle is classified as follows:

// Equilateral: All three sides are of equal length. Isosceles: Two sides are of
// equal length, while the third is different. Scalene: All three sides are of
// different lengths. To be a valid triangle, the sum of the lengths of the two
// shortest sides must be greater than the length of the longest side, and every
// side must have a length greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: 3x numbers, floats or integers
// Output: String

// Explicit requirements:
// - If lengths of the smallest numbers are not greater than the largest,
//   triangle is invalid
// - If all three numbers are equal, return 'equilateral'
// - If only two sides are equal return 'isosceles'
// - If none of the above conditions are met, return 'scalene'

// Implicit requirements:
// - 

// Examples
// ---------------------------------------------------------
// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

// Datastructure
// ---------------------------------------------------------
// None

// Algorithm
// ---------------------------------------------------------
// Start 'triangle', set 'side1', 'side2', 'side3'
// Set sides to an array with the three elements
// Sort the array elements lowest to highest
// Add the bottom two values

// If the bottom two values arn't biggger than the third element return 'invalid'
// Else if all there are equal, return 'equilateral'
// Else if sides filtered to match side1, or side2 is an array with 2 items, return 'isosceles'
// Else return 'scalene'

// Start, 'isoscelesCheck', set 'array'
// For each element in the array
// If the array can be filtered to a length of two of that element return true
// Else return false


// Code
// ---------------------------------------------------------


// Initial version, per alorithm

function triangle(side1, side2, side3) {
  let sides = [ side1, side2, side3 ].sort((a, b) => a - b);

  if (sides[0] + sides[1] <= sides[2]) return 'invalid';
  else if (side1 === side2 && side2 === side3) return 'equilateral';
  else if (isoscelesCheck(sides)) return 'isosceles';
  else return 'scalene'

  function isoscelesCheck(array) {
    let count = 0;

    array.forEach(num => {
      count = num === array[0] || num == array[1] 
        ? count += 1
        : count;
    });
    return count === 2;
  }
}

// Simplified
function triangle(side1, side2, side3) {
  let sides = [ side1, side2, side3 ].sort((a, b) => a - b);

  if (sides[0] + sides[1] <= sides[2]) return 'invalid';
  else if (side1 === side2 && side2 === side3) return 'equilateral';
  else if (sides.includes(sides.pop()) || sides.includes(sides.pop())) return 'isosceles';
  else return 'scalene'
}


// Simplified further
function triangle(a, b, c) {
  let sides = [ a, b, c ].sort((a, b) => a - b);

  if (sides[0] + sides[1] <= sides[2]) return 'invalid';
  else if (a === b && b === c) return 'equilateral';
  else if (sides.includes(sides.pop()) || sides[0] === sides[1]) return 'isosceles';
  else return 'scalene'
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"




// Thoughts / improvements
// ---------------------------------------------------------



