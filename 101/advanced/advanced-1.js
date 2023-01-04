// Question
// =============================================================================
// Madlibs Revisited

// Let's build another program using madlibs. We made a similar program in the
// Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text "template" as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that text,
// and then returns it. You can build your lists of nouns, verbs, adjectives,
// and adverbs directly into your program. Your program should read this text
// and, for each line, place random words of the appropriate types into the text
// and return the result.

// The challenge of this program isn't just about writing your solution—it's
// about choosing the structure of the text templates. Choose the right way to
// structure your templates and this problem becomes much easier. Consequently,
// this exercise is a bit more open-ended since the input is also something that
// you'll define for yourself.



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Text template, string
// Output: Populated text template with adverbs adj, noune and verbs 

// Explicit requirements:
// - 

// Implicit requirements:
// - Preserve all punctuation in templates

// Examples
// ---------------------------------------------------------
// # Template 1:

// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// # Template 1 broken down:

// The adjective brown noun adverb\n verb the adjective yellow\n
// noun, who adverb verb his\n noun and looks around.

// # Template 2

// The "fox" "bites" the "dog"'s "tail".

// #Template 2 broken down:

// The noun adj the noun's noun.


// Datastructure
// ---------------------------------------------------------

// allWords:
//  adjectives: 'quick', 'lazy', 'sleepy', 'noisy', 'hungry';
//  nouns: 'fox', 'dog', 'head', 'leg', 'tail', 'cat';
//  verbs: 'jumps', 'lifts', 'bites', 'licks', 'pats';
//  adverbs: 'easily', 'lazily', 'noisily', 'excitedly';


// Algorithm
// ---------------------------------------------------------
// Start madlibs, set 'template' input
// Loop through the supplied template once for each subarray in words
// If a word matches the key name of the current array
// Replace the word with a random word from the array value
// Return the updated string

// Code
// ---------------------------------------------------------


let template1 = 
'The adjective brown noun adverb \nverb the adjective yellow' + 
'\nnoun, who adverb verb his \nnoun and looks around.\n'

let template2 = 'The noun verb the noun\'s noun.\n';

const WORDS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats']
}


function madlibs(template) {
  for(let wordType in WORDS) {    
    let count = template.split(wordType).length - 1;

    for (count; count > 0; count--) {
      template = template.replace(wordType, randomEle(WORDS[wordType]));
    }
  }
  return template;
}

function randomEle(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".

// Thoughts / improvements
// ---------------------------------------------------------



