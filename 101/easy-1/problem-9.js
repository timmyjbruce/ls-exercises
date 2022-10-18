// Question
// =============================================================================
// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap
// year. Prior to 1752, they used the Julian Calendar. Under the Julian
// Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to
// determine leap years both before and after 1752. 


// PEDAC
// =============================================================================


// Problem
// ---------------------------------------------------------
// Explicit requirements:
//  - All years evenly divisble by 4 before and including 1752 are leap years

// Examples
// ---------------------------------------------------------
// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Given year
// If year is before 1752
//  - Check if year is evenly divisble by 
//  - Return boolean value
// If year is after 1752
//  - Run isGeorgianLeap function
//  - Return boolean value

// Code
// ---------------------------------------------------------

function isLeapYear (year) {
  if (year < 1752) return isJulianLeapYear(year);
  if (year >= 1752) return isGeorgianLeapYear(year);
}

function isGeorgianLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

function isJulianLeapYear(year) {
  return year % 4 ===0;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true


// Thoughts /improvements needed
// ---------------------------------------------------------
// Technically the question asked for a function (singular) but I find the use
// of two helper functions provides clear labels to each type of leap year.


// Further exploration
// ---------------------------------------------------------
// Interesting calender stuff:
// - It took 300 years for all countries now using the gregorian calendar to
//   make the switch!
// - There's was a popular myth circulated during covid that 8 years were lost
//   during the switch, but thats not the case.
// - That said, due to the need to realign the new calendar, in 1582 there were
//   '10 days that never existed'. The 5 to 14 October never actually happened!
//
// Calendars in Aotearoa (New Zealand): 
// Abel Tasman, the first European wouldn't discover the land until 1642, so the
// change wasn't noticed. At the time the Maori & Moriori were living there in
// isolation. The Maori had a basic calendaer called the Maramataka meaning
// 'Moon rotating'. The Maramataka took many different forms depending on the
// tribe and  held basic schedules for periods of the year best for planting and
// fishing, as well as the date of the new year, Matariki. Matariki is an
// important cultural day still celebrated in NZ.