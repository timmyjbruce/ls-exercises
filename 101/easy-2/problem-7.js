// Question
// =============================================================================
// The || operator returns a truthy value if either or both of its operands are
// truthy, a falsey value if both operands are falsey. The && operator returns a
// truthy value if both of its operands are truthy, and a falsey value if either
// operand is falsey. This works great until you need only one, but not both, of
// two conditions to be truthy: the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two
// arguments, and returns true if exactly one of its arguments is truthy, false
// otherwise. Note that we are looking for a boolean result instead of a
// truthy/falsy value as returned by || and &&.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: All values and datatypes
// Output: Boolean

// Explicit requirements:
// - Funciton is named xor
// - Return true if one argument is truthy, false otherwise.
// - returns boolean , not truthy or falsy value ()

// Implicit requirements:
// - No validation needed, all datatypes can be truthy/falsy so all are valid
// - Two identical values always returns false

// Examples
// ---------------------------------------------------------
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// Datastructure
// ---------------------------------------------------------
// None

// Algorithm
// ---------------------------------------------------------
// Given valueA & valueB
// Check if valueA is equal to valueB, if so return false
// Check if value A  but not value B is truthy
//  - Check if valueA is true & valueB is not true
//  - Check if valueB is true & valueA is not true
// Return above value

// Code
// ---------------------------------------------------------

// Initial version
// function xor(valueA, valueB) {
//   return valueA && !valueB || !valueA && valueB;
// }

// Shorter version
const xor = (valA, valB) => (valA && !valB) || (!valA && valB);

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);



console.log(xor(5, 0)); //  =>  True
console.log(xor(false, true)); //  =>  True
console.log(xor(1, 1)); //  =>  False
console.log(xor(true, true)); //  =>  False
console.log(xor('hello', '')); //  =>  True
console.log(xor('hello', -3)); //  =>  False
console.log(xor('0', 5)); //  =>  False
console.log(xor([], 5)); //  =>  False
console.log(xor({}, [])); //  =>  False
console.log(xor([], '')); //  =>  True
console.log(xor('0')); //  =>  True
console.log(xor(0)); //  =>  Undefined

