// Question
// =============================================================================

// Write a function that takes an array of integers between 0 and 19 and returns
// an array of those integers sorted based on the English word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
// twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Array of interers between  0 and 19
// Output: Array of interers between  0 and 19

// Explicit requirements:
// - Sort array based on alphapetical order of English versions of word

// Implicit requirements:
// - Zero is last in order
// - 

// Examples
// ---------------------------------------------------------
// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// > [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Datastructure
// ---------------------------------------------------------
// Array to hold sorted values order using index + 1 in algo?
// Or an object to store mapping of numbers to numbers

// Algorithm
// ---------------------------------------------------------
// Algo 1
// Set 'arrWords' to supplied words

// Start 'alphabeticNumberSort', set 'numArr'
// Set sortedNumArr to empty array.
// Iterate through numArr
// Set numWord to the element arrWords at index num + 1
// Set numWordPosition to the index of the num word in .....
// .... to complex & will end up with sparse array

// Algo 2
// Set 'arrWords' to supplied words
// Set 'arrWordsSorted to an a-z sorted array of arrayWords 

// Start 'alphabeticNumberSort', set 'numArr'
// Sort the numArr  a - b
// - Find the index of each number in arrWords sorted using
//    - Set 'a' to word at index of a + 1 in arrWords
//    - Set 'b' to word at index of b + in arrWords
// - Return sorted arr

// Code
// ---------------------------------------------------------

// Initial solution using array as provided

let arrWords = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

function alphabeticNumberSort(numArr) {
  return numArr.sort((a, b) => {
    [a, b] = [getSortedIndex(a), getSortedIndex(b)]
    return (a - b);
  });
}

function getSortedIndex(num) {
  return [...arrWords].sort().indexOf(arrWords[num])
}


// More streamlined solution

// let arrWords = [
//   8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0
// ];

// function alphabeticNumberSort(numArr) {
//   return numArr.sort((a, b) => {
//     [a, b] = [arrWords.indexOf(a), arrWords.indexOf(b)];
//     return (a - b);
//   });
// }

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// Thoughts / improvements
// ---------------------------------------------------------

// Could look at simpler version using comparsion operators in future.


