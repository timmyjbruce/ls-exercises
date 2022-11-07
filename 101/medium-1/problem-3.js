// Question
// =============================================================================
// Rotation (Part 3)

// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called the
// maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum
// rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.


735291
352917
329175
321759
321597
321579



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: Number

// Explicit requirements:
// - Iterat through the array from right to left and move each digit to the end
//   of the array
// - Do this once for each digit in the number

// Implicit requirements:
// - Single numbers should return the same number
// - Any leading zeros in the returned number should be dropped

// Examples
// ---------------------------------------------------------
// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845


// Datastructure
// ---------------------------------------------------------

// Order of rotation visualised
// 1. |7|35291 
// 2. 3|5|2917  
// 3. 32|9|175 
// 4. 321|7|59
// 5. 3215|9|7
// 6. 32157|9| 


// Algorithm
// ---------------------------------------------------------
// Start 'maxRotation', set 'num'
// Set count to the length of num
// Run a loop count times
// - Each cycle passed num  rotateRightmostDigits
// - Let num equal the returned *string*
// Covert to number return, removing any leading zeros in the process

// Note:
// - Convert to a number at the end of maxRotation, not parseInt, to avoid
//   issues with leading zeros being removed too early

// Code
// ---------------------------------------------------------

function maxRotation(num) {
  let count = String(num).length;

  while (count >= 1){
    num = rotateRightmostDigits(num, count);
    count -= 1;
  }
  return parseInt(num);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

function rotateRightmostDigits(num, position) { 
  let index = position * -1;
  let array = [...String(num)];

  return array.concat(
            array.splice(index, 1)
            )
            .join('');
}

// Thoughts / improvements
// ---------------------------------------------------------
