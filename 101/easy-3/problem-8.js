// Question
// =============================================================================
// Write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

// Tested values are all between 0 and 100. There is no need to check for
// negative values or values greater than 100.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: String

// Explicit requirements:
// - Return the average of three numbers as represent by a score range
// - No need to check if in integer
// - Input numbers will be between 0 and 100 inclusive 

// Implicit requirements:
// - Assume function should take 1, 2, or 3 parameters
// - Need to create an object storing grades and values

// Examples
// ---------------------------------------------------------
// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// Datastructure
// ---------------------------------------------------------
// Object, to store grades and respective values

// Algorithm
// ---------------------------------------------------------
// Start function getGrade
// Given 'num1' 'num2' 'num3'
// Set 'grades' to object containing grade(key) and lowest value
// Set grade average undefined
// for grade range (value)
// Set 'divisor' to 3
// If num1/2/3 are not supplied set value to zero
// - If num1/2/3 equal undefined
// - Set respective variable to 0
// - Lower divisor by 1 for each num set to undefined
// Find average of numbers
// Round average down to closest unit of 10
// If grade equals a value in grades object, return it
// Else if grade value equals 100, return 'A'
// Else return last key's value, 'F'

// Code
// ---------------------------------------------------------
function getGrade (score1, score2, score3) {
  let grades = ['F', 'D', 'C', 'B', 'A'];
  let scoreMean;
  let divisor = 3;

  if (score1 === undefined) {
    score1 = 0;
    divisor -= 1;
  } else if (score2 === undefined) {
    score2 = 0;
    divisor -= 1;
  } else if (score3 === undefined) {
    score3 = 0;
    divisor -= 1;
  }

  scoreMean = (score1 + score2 + score3) / divisor;
  scoreMean = Math.floor(scoreMean / 10) - 5;

  if (scoreMean === 5) return grades[grades.length - 1];
  if(scoreMean <= 0) return grades[0];
  return grades[scoreMean];

}

// Shorter version without conditional check
function getGrade (score1, score2, score3) {
  let grades = ['F', 'D', 'C', 'B', 'A'];
  let gradeAdjustment = 10 - grades.length;

  let scoreMean = (score1 + score2 + score3) / 3;
  let gradeIndex = Math.floor(scoreMean / 10) - gradeAdjustment;

  if (gradeIndex >= grades.length) return grades[grades.length - 1];
  if (gradeIndex <= 0) return grades[0];
  return grades[gradeIndex];

}


console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(50, 32, 21));    // "F"
console.log(getGrade(100, 100, 100));    // "A"
console.log(getGrade(0, 0, 0));    // "F"



// Thoughts / improvements
// ---------------------------------------------------------
// Was a clear use case for a switch missed. Need to review when to use a
// switch/not.