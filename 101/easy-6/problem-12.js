// Question
// =============================================================================
// Write a function that takes a string as an argument and returns true if all
// parentheses in the string are properly balanced, false otherwise. To be
// properly balanced, parentheses must occur in matching '(' and ')' pairs.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Boolean

// Explicit requirements:
// - If parenthesis are properly balanced, return true
// - Else false

// Implicit requirements:
// - Strings without parenthesis return true
// - Parethesis must be around the right way.

// Examples
// ---------------------------------------------------------
// isBalanced('What (is) this?');        // true
// isBalanced('What is) this?');         // false
// isBalanced('What (is this?');         // false 
// isBalanced('((What) (is this))?');    // true
// isBalanced('((What)) (is this))?');   // false
// isBalanced('Hey!');                   // true
// isBalanced(')Hey!(');                 // false
// isBalanced('What ((is)) this(?');     // false

// Datastructure
// ---------------------------------------------------------
// Arrays to store string characters

// Algorithm
// ---------------------------------------------------------
// Start 'isBalanced', set 'str'
// set 'parenthesisArr' to the parenthesis in the string as elements in an array.
// Set 'arrLength'

// If parenthesisArr length is odd return false
// Else while array length
// - Find open parenthesis in array
// - If next parenthesis in line is the same, 
// - Remove both  and copy array length to arrLength
// - Else if array length has not changed return false
// Return true

// Code
// ---------------------------------------------------------

// function isBalanced(str) {
//   let parenthesis = str.split('');
//   parenthesis = parenthesis.filter(char => char === ')' || char === '(' );
//   console.log(parenthesis)

//   if (parenthesis.length % 2 === 1) return false;
//   if (parenthesis.length === 0) return true;
  
//   for (let i = 1; i <= parenthesis.slice().length / 2; i++) {
//     let open = parenthesis[i - 1];
//     let closed = parenthesis[parenthesis.length - i];
//     console.log('open: ' + open)
//     console.log('closed: ' + closed)

//     if (open === '(' && closed === ')') {
//       continue;
//     } else return false;
//   }
//   return true;
// }


function isBalanced(str) {
  let parenthesis = filterParenthesisFromString(str);
  let count = parenthesis.length;

  if (count % 2 === 1) return false;
  if (count === 0) return true;
  
  while (parenthesis.length > 0) {
    parenthesis.map((ele, idx, arr) => {
      if (ele === '(' && arr[idx + 1] === ')') {
        parenthesis.splice(idx, 2);
      } else return false;
    });
  }
  return true;
}

function filterParenthesisFromString(str) {
  return str.split('').filter(char => char === ')' || char === '(' );
}
function matchAndRemove(array) {
  

}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false 
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is)) this(?'));     // false


// Thoughts / improvements
// ---------------------------------------------------------



