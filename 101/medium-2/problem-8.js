// Question
// =============================================================================
// Longest Sentence

// Write a program that prints the longest sentence in a string based on the
// number of words. Sentences may end with periods (.), exclamation points (!),
// or question marks (?). You should treat any sequence of characters that are
// not spaces or sentence-ending characters as a word. Thus, -- should count as
// a word. Log the longest sentence and its word count to the console. Pay
// attention to the expected output, and be sure you preserve the punctuation
// from the end of the sentence. Note that this problem is about manipulating
// and processing strings. As such, every detail about the string matters (e.g.,
// case, punctuation, tabs, spaces, etc.).


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: None
// Side effect: Log longest sentence and string containing word count to console

// Explicit requirements:
// - Find the longest sentence in a given string arg
// - Sentences end with ['.', '!', '?']
// - Any other characters are spaces, if not then words
// - All case and punctuation from original string should be preserved
// - Length is based on word count not char count

// Implicit requirements:
// - Second string to log: 'The longest sentence has XX words.'


// Examples
// ---------------------------------------------------------
// See code section

// Datastructure
// ---------------------------------------------------------
// Array of sentence elements containing subArrays of words eg:
// [[word, word], [word, word, word, word], etc]

// Array of chars to split on:
// ['.', '!', '?']

// Algorithm
// ---------------------------------------------------------
// Start 'longText', set 'string'
// Set 'splitChars' to array in above section
// Set 'sentences' and array with one empty subarray.
// Set sentence to empty string;

// Start splitWords
// - iterate through string chars
// - if char = space, push word characters from string start to snetences subArray
// - if char eqals a splitChar, send word to sentences as a new array


// Reduce sentences array to longest sentence
// Flatten array and convert to string with spaces, assign to 'sentecne'

// Log string
// Log explanatory sentence including array

// Code
// ---------------------------------------------------------

function longestSentence(string) {
  let splitChars = ['.', '!', '?'];
  let sentences = [[]];
  let longest = '';

  for (let idx = 0; idx < string.length - 1; idx++) {
    console.log('idx: ' + idx)
    let char = string[idx];
    let lastBreak = 0; 
    console.log('char: ' + char)
    if (char === ' ' || splitChars.includes(char)) {
      console.log('if statement passed')
      sentences[sentences.length - 1].push(string.split([lastBreak, idx]));
      console.log('Logged')
      lastBreak = idx + 1;
      if (splitChars.includes(char)) {
        sentences.push([]);
        lastBreak += 1;
      }
    }
  }
  console.log(sentences);
}



let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

// longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

// longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

// longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.


// Thoughts / improvements
// ---------------------------------------------------------



