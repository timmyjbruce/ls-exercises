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
// Output: None, but statement looged to console

// Explicit requirement:
// - Log the longest sentence and word count to the console.
// - Words are flanked by spaces or sentence ending characters.
// - Sentences end in fluustops, exclamation marks of question marks.
// - Sentences must be unaltered

// Implicit requirement:
// - Logged statment is a concatenated string
//

// Examples
// ---------------------------------------------------------
// See code section

// Datastructure
// ---------------------------------------------------------
// Array to hold individual sentences

// Algorithm
// ---------------------------------------------------------
// Start longestSentence, set text

// Set 'sentences' to a the value of sentencesWithin, with an arg of 'text'
// Sort array, longest to shortest sentences
// Log first element of sentences array
// Run countWords on first element of sentences array
// Log number with concatenated strings

// Start sentencesWithin, set text
//  - Split text into sentences sperated by commas
//  - Iterate through each sentence and split any containing '!' 
//  - Flatten sentences array
//  - Iterate through each sentence and split any containing '?' 
//  - Flatten array
// Return array

// Start alt sentenceWithin version, set text
// - Set sentences to empty array
// - Set endChars to array with the 3x end chars
// - While text length greater than zero
// - Set nextIndexs to 
//    - iterate through endChars
//    - get index of next occurence of endChar
//    - reduce to array to lowest value thats not -1
// - Cut next sentence it from text at indexand push to sentences
// - Return sentences


// Start countWords, set text
// Set arr to an arr of words from text.
// Return length of array


// Code
// ---------------------------------------------------------

// function longestSentence(text) {
//   let sentences = sentencesWithin(text);
//   sentences.sort((a, b) => wordCount(b) - wordCount(a))

//   console.log(
//     `${sentences[0]}\nThe longest sentence has ` +
//     `${wordCount(sentences[0])} words.\n`
//   );
// }

// function sentencesWithin(text) {
//   let sentences = [];

//   while (text.length > 0) {
//     let sliceIndex = indexOfNextEndChar(text) + 1;
//     sentences.push(text.slice(0, sliceIndex).trim())
//     text = text.slice(sliceIndex)
//   }
//   return sentences;
// }

// function indexOfNextEndChar(text) {
//   const END_CHARS = ['.', '!', '?'];

//   let endCharIndexes = END_CHARS
//     .map(char => text.indexOf(char))
//     .sort((a, b) => a - b);

//   let nextIndex = endCharIndexes.find(ele => ele > 0);
//   return nextIndex;
// };

// function wordCount(sentence) {
//   return sentence.split(' ').length
// }


// Simplified version

function longestSentence(text) {
  let sentences = [];
  let regex = /[\.!?]/

  while (text.length > 0) {
    let indexNextEndChar = regex.exec(text).index + 1;
    sentences.push(text.slice(0, indexNextEndChar).trim());
    text = text.slice(indexNextEndChar);
  }

  sentences.sort((a, b) => numWords(b) - numWords(a));

  console.log(
    sentences[0] +
    `\nThe longest sentence has ${numWords(sentences[0])} words.\n`
  );
}

function numWords(sentence) {
  return sentence.split(' ').length
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

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.



// Thoughts / improvements
// ---------------------------------------------------------

// LS solution uses regex to a greater extent allowing for a more succint
// solution. 

