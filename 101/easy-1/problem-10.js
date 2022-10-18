// Question
// =============================================================================
// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. For instance, if the
// supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15
// + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Explicit requirements
// - Must be a function
// - Must determine values up to & including a given number
// - Must sum numbers divisble by 3 & 5
// - Returns a number
// 
// Implicit requirements
// - No vaidation required

// Examples
// ---------------------------------------------------------
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// Datastructure
// ---------------------------------------------------------
// Array to house the numbers between 1 and given

// Algorithm
// ---------------------------------------------------------
// Given a number
// Create a empty array variable
// Populate the array
// - Add a value of 1 as the first item of the array
// - Increment the number
// - If the number equals given number stop
// - Repeat
// Filter array to numbers divisible by 3 and 5 evenly
// Sum the values in the array


// Code
// ---------------------------------------------------------
// function multisum(number) {
//   let array = [];
//   for (let i = 1; i <= number; i++) {
//     array.push(i);
//   }
//   array =  array.filter(num => num % 3 === 0 || num % 5 === 0);
//   return array.reduce((a, b) => a + b, 0);
// }

// Shorter version
// Did some googling as currently over half of lines are in generating an array of 
// incrementing numbers, which seems like it should be simpler.

// Below uses an array constructor, with the array keys() method. Map is needed
// to mitigate the zero indexing. It's shorter in terms of lines but reads
// pretty awfully, prefer the original.

function multisum(number) {
  let array = Array.from(Array(number).keys()).map(n => n += 1);
  array = array.filter(num => num % 3 === 0 || num % 5 === 0);
  return array.reduce((a, b) => a + b, 0);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168