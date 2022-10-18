// Question
// =============================================================================
// Using the multiply() function from the "Multiplying Two Numbers" problem,
// write a function that computes the square of its argument (the square is the
// result of multiplying a number by itself).

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Skipped PEDAC for this one

// Examples
// ---------------------------------------------------------


// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------


// Code
// ---------------------------------------------------------
// const square = num => num * num;

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// Miss-interpreted question as using the prior function as a basis for the
// next. Not using the function itself.


// Further exploration

const multiply = (num1, num2) => num1 * num2;

function power(number, power) {
  let numPow = 1;
  for (let i = 0; i < power; i++) {
    numPow = multiply(numPow, number);
  }
  return numPow;
}

console.log(power(5, 5) === 3125); // logs true