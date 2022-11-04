// Question
// =============================================================================
// Search Word (Part 1)

// Write a function that takes two arguments, a word and a string of text, and
// returns an integer representing the number of times the word appears in the
// text.

// You may assume that the word and text inputs will always be provided, and
// that all word breaks are spaces. Thus, some words will include punctuation
// such as periods and commas. Also assume that the search is case-insensitive.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: stringA(word), stringB(text)
// Output: number (integer)

// Explicit requirements:
// - Count occurences of stringA in stringB, ignoring case.
// - Words delimited by spaces

// Implicit requirements:
// -

// Examples
// ---------------------------------------------------------
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// searchWord('sed', text);      // 3

// Datastructure
// ---------------------------------------------------------
// Array to hold word values

// Algorithm
// ---------------------------------------------------------
// Start 'searchWord', set 'word', 'string'
// Set 'count' to 0
// Convert string to lowercase
// Convert string into array, seperating elements at string space characters
// Iterate through each 'currentWord' in the array
// If word strictly equals current word
// Increment count
// Return count

// Code
// ---------------------------------------------------------
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// As per alogrithm
function searchWord(word, string) {
  let count = 0;
  
  string
  .toLowerCase()
  .split(' ')
  .forEach(currentWord => {
    if (word === currentWord) count += 1;
  });
  return count;
}

// Using reduce
function searchWord(word, text) {
  return text
  .toLowerCase()
  .split(' ')
  .reduce((sum, ele) => ele === word ? sum += 1 : sum, 0);
}
console.log(searchWord('sed', text));      // 3



// Thoughts / improvements
// ---------------------------------------------------------
// LS solution uses regex



// Further exploration
// ---------------------------------------------------------
// Refactoring LS solution to match any substring, not only a word and adding in
// valdation for missing args


// Regex aspects need revisiting

function searchWordAlt(word, text) {
  if (word === undefined || text === undefined) {
    console.log('Argument/s missing!')
  }

  const regex = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

console.log(searchWordAlt('qui', text));      // should return 4, NOT 13



//