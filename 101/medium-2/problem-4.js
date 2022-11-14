// Question
// =============================================================================
// Unlucky Days

// Some people believe that Fridays that fall on the 13th day of the month are
// unlucky days. Write a function that takes a year as an argument and returns
// the number of Friday the 13ths in that year. You may assume that the year is
// greater than 1752, which is when the United Kingdom adopted the modern
// Gregorian Calendar. You may also assume that the same calendar will remain in
// use for the foreseeable future.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number
// Output: Number

// Explicit requirements:
// - Calendar starts in 1752
// - In years since need to be able to caluclate how many friday the 13ths.
// - Need to locate days in the year that are fridays
// - need to locate days in the year that are 13ths of the month.
// - Need to compare values for overlaps and return the number of overlaps

// Implicit requirements:
// - What about leap years?
// - 

// Examples
// ---------------------------------------------------------
// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

// Datastructure
// ---------------------------------------------------------
// Array to hold day numbers that are 13ths
// Array to hold days that are Fridays
// Object to hold day counts for months


// Algorithm
// ---------------------------------------------------------
// Start 'fridayThe13ths', set 'year'
// Set 'daysInYear' to 365
// Set 'minYear' to 1752
// Set the 'startDay' to the year minus minYear X 365 + the amount of leapdays added.
// Set daysinMonths to an object with normal (non leap day counts), {month: num of days, etc}
// Set daysfridays to getFridays return value
// Set days13ths to get13ths return value

// Start 'getFridays', set 'day'
// While day is not equal to day + daysInYear 
// If day cleanly divdes by 5 add day value to 'fridays'
// Add 1 to day

// Start 'get13ths', set day
// Run checkLeap (do later)
// If year equals a leap year, add one day to 'feb' property (do later)
// Iterate through the values in days inYear
// Add thirteen + start day to each value, remove the end value, add the start value as 13 + .
// Return array

// Start findFriday13ths 
// Set count to zero
// Iterate through days daysInMonths
// If days13ths includes day add one to count.

// Return findFriday13ths retrun value


// Code
// ---------------------------------------------------------
const MIN_YEAR = 1752;
const DAY_OF_MONTH = 13;
const DAYS_IN_YEAR = 365;
const MONTH_START_DAY = [
  0, 32, 29, 32, 31, 32, 31, 32, 32, 31, 32, 31, 32
];



function fridayThe13ths(year) {
  let startDay = ((year - MIN_YEAR) * DAYS_IN_YEAR) + 1;
  let arrayFridays = getFridays(startDay);
  let array13ths = get13ths(startDay);
  let count = 0;

  arrayFridays.forEach((day) => {
    if (array13ths.includes(day)) count += 1;
  }, 0);

  return count;

  function getFridays(day) {
    let dayList = []; 
    for (let numDay = day; numDay !== day + DAYS_IN_YEAR; numDay += 1) {
      if (numDay % 7 === 0)dayList.push(numDay);
    }
    return dayList;
  }

  function get13ths(startDay) {
    return MONTH_START_DAY.map(val => val + DAY_OF_MONTH + startDay);
  }

}


// console.log(fridayThe13ths(1753));
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2


// Thoughts / improvements
// ---------------------------------------------------------



