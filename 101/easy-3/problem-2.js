// Question
// =============================================================================
// Write a function that will take a short line of text, and write it to the
// console log within a box.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: Series of strings

// Explicit requirements:
// - Return lines 1,2,4 & 5, line lenght equals string lenght + 4
// - Return string with additional values

// Implicit requirements:
// - If string empty return same box with no values (should be 4 characters wide)

// Examples
// ---------------------------------------------------------
// logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// Datastructure
// ---------------------------------------------------------
// No structure just using strings

// Algorithm
// ---------------------------------------------------------
// Given a function called logInBox with param 'string'
// Create a variable called outerLines
// Assign a string made of '-' which has length 2 higher than string
// Add '+-' and '-+' to each end
// Create a variable called innerLines
// Assign a string made of '' which has length 2 higher than string
// Add '|' to each end
// Create a variable called centerLine
// Add string with '| ' & ' |' at each end respectively
// Log each variable to console on a newline

// Code
// ---------------------------------------------------------
// function logInBox(string) {
//   let outerLine = '+-' + '-'.repeat(string.length) + '-+';
//   let innerLine = '| ' + ' '.repeat(string.length) + ' |';
//   let centerLine = '| ' +  string + ' |';

//   console.log(outerLine);
//   console.log(innerLine);
//   console.log(centerLine);
//   console.log(innerLine);
//   console.log(outerLine);
// }

// logInBox('');
// logInBox('To boldly go where no one has gone before.');


// Further Exploration
// ---------------------------------------------------------
// Try word wrapping messages that are too long to fit, so that they appear on
// multiple lines but are still contained within the box. This isn't an easy
// problem, but it's doable with basic JavaScript.


// Algorithm
// ---------------------------------------------------------

// Given function wrapIt with paramaters, 'string' and 'lineLength 
// Find value of first space prior to lineLength and assign to variable lineBreak
// Replace character at lineBreak with newline character
// While string length is less than line length return string 
// Re assign lineBreak to next value 
// Repeat if length from lineBreak to end of line is greater a than linelenght
// Return string


// Code
// ---------------------------------------------------------

function wrapIt(lineLength, string ) {
  let lineBreakIndex = string.slice(0, lineLength).lastIndexOf(' ');
  let startPosition = 0;
  let lastLineLength = 0;
  
  while (string.slice(startPosition, lastLineLength).length - startPosition < lineLength) {
    string = string.slice(startPosition,lineBreakIndex) + '\n' + string.slice(lineBreakIndex + 1);
    lastLineLength = string.slice(startPosition,lineBreakIndex).length + 1;
    startPosition += lastLineLength;
  }
}


wrapIt(20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis mattis nisl, et ullamcorper leo. Maecenas commodo id lectus id volutpat. Sed eget ultrices elit. Vivamus pulvinar purus neque');
wrapIt(200, '');