// Question
// =============================================================================
// Seeing Stars

// Write a function that displays an 8-pointed star in an NxN grid, where N is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when N is 7).


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: None, side effect of a series of logged statements

// Explicit requirements:
// - Display an 8 pointed star
// - Min size on n is 7
// - At n7 star size is 7x7 in terms on console spaces
// - N is always an odd interger

// Implicit requirements:
// - Each row apart from center row has 3x stars
// - Spacing is distributed differently on first/last three rows
// - Space in between stars increases with each row up/down form center

// Examples
// ---------------------------------------------------------

// star(7);
// // logs
// *  *  *  -- s, 2, s, 2, s  --  2 space between - line 0
//  * * *   -- 1, s, 1, s, 1  --  1 space between - line 1
//   ***    -- 3, s, s, s, 3  --  0 space between - line 2
// *******
//   ***    -- 0 space between - line 0
//  * * *   -- 1 space between - line 1
// *  *  *  -- 2 space between - line 2

// star(9);
// // logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

// Datastructure
// ---------------------------------------------------------
// None, likely just loops to generate values to log.
// If not then arrays to store star 'line' strings, to be logged in order



// Algorithm
// ---------------------------------------------------------
// Start 'star', set 'num'
// Set centerNum to half of num, rounded up

// Set topCount to num - halfNum
// Set bottomCount to 0

// While topCount is less than 0
// topCount -= 1
// Run logStars with the topCount val as argument

// Log size number of stars

// While bottomCount < centerNum minus 1
// Run logStars with arg topCount
// bottom count += 1;


// Start logStars(spaceNum)
// Set spaceNum to spaceNum amount of spaces
// Set string star + spaceNum + star + spaceNum + star
// Set lengthDifference to num minus string.length
// Pad ends to string using legth difference
// Log string




// Code
// ---------------------------------------------------------

function star(num) {
  const CENTER_NUM = Math.ceil(num / 2);
  let topCount = num - CENTER_NUM - 1;
  let bottomCount = 0;

  for (topCount; topCount >= 0; topCount -= 1) {
    logStars(topCount, num)
  }
  console.log('*'.repeat(num))  // Log center row
  
  for (bottomCount; bottomCount < CENTER_NUM - 1; bottomCount += 1) {
    logStars(bottomCount, num)
  }
}

function logStars(spaceNum, num) {
  let spaces = ' '.repeat(spaceNum);
  let string = '*' + spaces + '*' + spaces + '*';

  let initialTargetLength = num - ((num - string.length) / 2);
  console.log(string.padStart(initialTargetLength).padEnd(num))
}


star(7);
star(9);

