// Question
// =============================================================================
// Rotation (Part 2)

// Write a function that rotates the last *count* digits of a *number*. To perform
// the rotation, move the first of the digits that you want to rotate to the end
// and shift the remaining digits to the left.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number and count, both number values
// Output: Number
 
// Explicit requirements:
// - Move the number at the specified index to the end of the number
// - Index value counts from the end of the number (not start)
// - Need to seperate digits into groups and move them around accordingly

// Implicit requirements:
// - Assume the count value will no exceed the number of digits in number

// Examples
// ---------------------------------------------------------
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

// rotateRightmostDigits(1234, 2);      // 1243
// rotateRightmostDigits(1234, 3);      // 1342

// Datastructure
// ---------------------------------------------------------
// Should be able to strings alone

// Algorithm
// ---------------------------------------------------------
// Start 'rotateRightmostDigits', set 'number', 'count'
// Convert number to a string value of itself
// Set index equal to the length of the number minus the count
// Set start to a the first part of string up to index
// Set end to a the end part of string after the index
// Return start + end + index, converted to a number


// ** Alternative ** 
// Start 'rotateRightmostDigits', set 'number', 'count'
// Concert number to string and then array of individual characters
// Let 'shifted' = Number element after is was destructvily removed from the array
// Add it to the end of the array
// Covert the array into a number and return



// Code
// ---------------------------------------------------------

// Initial approach as per algorithm - feels cumbersome
function rotateRightmostDigits(number, count) {
  number = String(number);
  let index = number.length - count;

  let start = number.slice(0, index) || '';
  let end = number.slice(index + 1) || '';
  let shifted = number[index] || '';

  return parseInt(start + end + shifted);

}

// Alternate
function rotateRightmostDigits(number, count) {
  array = String(number).split('');
  let shifted = array.splice(count * -1, 1);
  
  return parseInt(array.concat(shifted).join(''));
}


// Alternate shorter
function rotateRightmostDigits(num, position) { 
  let index = position * -1;
  let array = [...String(num)];

  return parseInt(
          array.concat(
            array.splice(index, 1)
            )
            .join('')
          );
}

// // Alternate clearer
// function rotateRightmostDigits(number, count) {
//   array = String(number).split('');
  
//   let shiftedNum = array.splice(count * -1, 1);
//   let shiftedArray = array.concat(shiftedNum);

//   return parseInt(shiftedArray.join(''));
// }


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// Thoughts / improvements
// ---------------------------------------------------------



// Question
// =============================================================================



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


// Algorithm
// ---------------------------------------------------------


// Code
// ---------------------------------------------------------


// Thoughts / improvements
// ---------------------------------------------------------



