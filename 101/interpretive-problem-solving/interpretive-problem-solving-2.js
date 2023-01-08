// Question
// =============================================================================
// Diamonds

// Write a function that displays a four-pointed diamond in an nxn grid, where n
// is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: number
// Output: None
// Sideeffect: Logging a series of console.log statements

// Explicit requirements:
// - Log a series of console.log statements
// - Each row consists of a combination of spaces and asteriks

// Implicit requirements:
// - The number of each relates to the row count
// - The top half of the rows (minus the middle row) is a mirror image of the
//   bottom half.

// Examples
// ---------------------------------------------------------
// diamond(1);
// // logs
// *

// diamond(3);
// // logs
//  *
// ***
//  *

// diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// Datastructure
// ---------------------------------------------------------
// Array to hold one (top) half of row strings.

// Algorithm
// ---------------------------------------------------------
// Start diamond, set 'size'
// Set an array a elements with a number value of 1 through to size

// Iterate over the array and transform each number value into a row string
// - Iterate over each element
// - Set each 'numSpaces' to size minus the value of each element / 2
// - Set each 'numStars' to size minus numSpaces
// - Replace each element with the respective number of spaces and stars 

// Start logElements, set 'array'
// Iterate over the array logging each element to the console.
// Iterate over the array reversed, minus the first element logging each element to the console.


// Code
// ---------------------------------------------------------
function diamond(size) {
  let top = [];
  let middle = ['*'.repeat(size)];

  for (let index = 0; index + 1 < size; index += 2){
    let stars = '*'.repeat(index + 1);
    let spaces =' '.repeat((size - stars.length) / 2);

    top.push(spaces + stars + spaces)
  }
  let diamond = top.concat(middle, top.slice().reverse());
  
  diamond.forEach(ele => console.log(ele))
}
  
  // diamondTop.forEach((ele, idx) => {
  //   let stars = '*'.repeat(ele + 1);
  //   let spaces =' '.repeat((size - stars.length) / 2);

  //   diamondTop[idx] = spaces + stars + spaces;
  // });
  // let diamond = diamondTop.concat(['*'.repeat(size)], diamondTop.reverse());

  // diamond.forEach(ele => console.log(ele))



diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// Thoughts / improvements
// ---------------------------------------------------------



