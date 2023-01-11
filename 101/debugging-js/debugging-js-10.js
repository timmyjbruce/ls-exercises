// Question
// =============================================================================
// Neutralizer

// We wrote a neutralize function that removes negative words from sentences.
// However, it fails to remove all of them. What exactly happens?



// Solution ()
// =============================================================================

// The array is being mutated during iteration casuing some negative words to be
// skipped. This happens becasue as words are removed from the array the index
// posiiton of all wards after that reduces. The forEach method is aware of this
// change.

function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.