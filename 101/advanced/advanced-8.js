// Question
// =============================================================================
// Egyptian Fractions
// Write two functions: one that takes a Rational number as an argument, and
// returns an Array of the denominators that are part of an Egyptian Fraction
// representation of the number, and another that takes an Array of numbers in
// the same format, and calculates the resulting Rational number.


// PEDAC
// =============================================================================

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

// Experiments/notes from Fraction.js lib:
// https://www.npmjs.com/package/fraction.js

const Fraction = require('fraction.js');

// Decimal to fraction
let x = new Fraction(1.88);
let res = x.toFraction(true); // String "1 22/25"
// console.log(res)

// Accessing numerator and denominator of fraction
var f = new Fraction('1/2');
// console.log(f.n); // Numerator: 1
// console.log(f.d); // Denominator: 2

// Accessing numerator/denominator of decimal
let y = new Fraction(1.88);
// console.log(y.n); // Numerator: 1
// console.log(y.d); // Denominator: 2

// Subtracting fractions:
let z = new Fraction('1/2')
let a = new Fraction('1/4')
// console.log(new Fraction(z).sub(a).toString()) // 0.25
// console.log(new Fraction(z).sub(a).toFraction(true)) // String: '1/4'

// Compare fractions:
let b = new Fraction('1/2')
let c = new Fraction('1/4')
// console.log(new Fraction(b).compare(a)) // 0.25


// Greedy Algorithm for Finding Egyptian Fractions

// One of the simplest algorithms to understand for finding Egyptian fractions
// is the greedy algorithm. With this algorithm, one takes a fraction (a/b) and
// continues to subtract off the largest fraction (1/n) until he/she is left
// only with a set of Egyptian fractions.

// From: https://brilliant.org/wiki/egyptian-fractions/#:~:text=One%20of%20the%20simplest%20algorithms,a%20set%20of%20Egyptian%20fractions.


// Algorithm
// ---------------------------------------------------------
// Start 'egyptian' set 'rationalNum'
// Set denominators to empty array
// Set num to 'rationalNum' fraction

// Set count to 2
// While num is greater than zero
// Set unitFraction to 1/count
// If unitFraction is less than rationalNum
// - Set num to num minus unitFraction
// - Send denominator of unit fraction to denominators array
// - Increment count by 1

// Return denominators array



// Code
// ---------------------------------------------------------

function egyptian(frac) {
  let denominators = [];

  for (let count = 1; frac.n > 0; count++) {
    let unitFraction = new Fraction('1/' + count);
    let remainder = new Fraction(frac).sub(unitFraction);

    if (remainder.s > 0) {
      frac = remainder;
      denominators.push(unitFraction.d)
    }
  }  
  return denominators;
}

function unegyptian(array) {
  let sum = 0;

  for (let index = 0; index <= array.length; index++) {
    sum = new Fraction(sum).add(1, array[index]);
  }
  return (sum.n / sum.d) - 1;
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3



// Thoughts / improvements
// ---------------------------------------------------------



