// Question
// =============================================================================
// Madlibs is a simple game where you create a story template with "blanks" for
// words. You, or another player, then construct a list of words and place them
// into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb,
// and an adjective, and injects them into a story that you create.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Strings
// Output: String

// Explicit requirements:
// - Prompt & retrieve 4 x strings from user

// Implicit requirements:
// - Input must be a string
// - Converted to lowercase letters to make sense in sentence

// Examples
// ---------------------------------------------------------
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// Datastructure
// ---------------------------------------------------------
// None, strings only.

// Algorithm
// ---------------------------------------------------------
// Start program
// Initiate readline sync
// Set 'noun', 'verb', 'adjective', 'adverb' variables to a value
// - Start sub function 'getWord' with paramaters, 'wordType' 
// - Ask user for 'wordType'
// - Convert answer to lowercase
// - Set as value
// Concatenate values into sentence and return

// Sentence
// After hiding the painting in his 'noun' for two years, he grew 'adjective' and had to sell it in Florence. Afterwards he used the money to 'verb' very 'adverb'.


// Code
// ---------------------------------------------------------
const readlineSync = require('readline-sync');

let noun = getWord('noun');
let verb = getWord('verb');
let adjective = getWord('adjective');
let adverb = getWord('adverb');

function getWord(wordType) {
  return readlineSync.question(`Enter a ${wordType}: `).toLowerCase();
}

console.log(`After hiding the painting in his ${noun} for two years,\nhe grew ${adjective} and had to sell it in Florence. Afterwards\nhe used the money to ${verb} very ${adverb}.`)


// Thoughts / improvements
// ---------------------------------------------------------



// Question
// =============================================================================

