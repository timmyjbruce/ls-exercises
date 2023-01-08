// Question
// =============================================================================
// 1000 Lights

// You have a bank of switches before you, numbered from 1 to count. Every
// switch is connected to exactly one light that is initially off. You walk down
// the row of switches and toggle every one of them, that is, you flip every
// switch. All the lights are now on. You walk back to the beginning of the row
// and start another pass. On this second pass, you toggle switches 2, 4, 6, and
// so on. Now, every other light is on. On the third pass, you go back to the
// beginning again, this time toggling switches 3, 6, 9, and so on. You continue
// to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after count passes.



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Number 
// Output: Output

// Explicit requirements:
// - Every pass of you must increase the amount of lights skipped by one
// - The max number of passes is count
// - The first pass all lights are switched on
// - The last pass only the last light is toggled

// Implicit requirements:
// - Switches are signified by numbers
// - Return array contains switch numbers in the on position only 


// Examples
// ---------------------------------------------------------
// function lightsOn(switches) {
//   // ...
// }

// lightsOn(5);        // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// Start lightsOn, set switches
// Set switches to empty array

// Set outerCount to 1
// While outercount in less than switches

// Set innerCount to 0
// While innerCount is less than switches
// If switch at the innerCount index is not initialised
// Initialise it with a value of 'on'
// Else set the switch at innerCount index to 'off'
// Increment innercount by the value of outerCount
// End loop

// Increment outerCount by 1

// Reduced the switches array to only include 'on' elements with on values
// Swap the 'on' values to the index postion of the element + 1

// Return switches


// Code
// ---------------------------------------------------------

function lightsOn(switchNum) {
  let switches = [];

  for (let count = 1; count <= switchNum; count++) {
    for (let index = 0; index <= switchNum; index += count) {
      
      switches[index] = switches[index] || 'off';
      
      let isOn = typeof switches[index] === 'number';
      if (isOn) switches[index] = 'off';
      else switches[index] = index;
    }
  }
  switches.shift()
  return switches.filter(ele => typeof ele === 'number');
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]



// Thoughts / improvements
// ---------------------------------------------------------



