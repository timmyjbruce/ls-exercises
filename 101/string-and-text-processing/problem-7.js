// Question
// =============================================================================
// Modify the function from the previous exercise so it ignores non-alphabetic
// characters when determining whether it should uppercase or lowercase each
// letter. The non-alphabetic characters should still be included in the return
// value; they just don't count when toggling the desired case.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String
// Output: String

// Explicit requirements:
// - Apply capitalisation to every second non-alphabetic character
// - Ignore non-alphabetic characters when determining every second
// - Include non-aplhabetic characters in the return

// Implicit requirements:
// - 'Non alphabetic' includes, numbers, puntuation, and whitespace characters
// - All non capitalised alphabetic characetrs should be lowercase

// Examples
// ---------------------------------------------------------
// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// Datastructure
// ---------------------------------------------------------
// Array to hold values?

// Algorithm
// ---------------------------------------------------------
// Start 'staggeredCase', set 'string'
// Set 'count' to 0
// Set array to string lowercase, split into array of characters

// Iterate through the string
// - If count is an odd number && alphabetic
//   - Capitalise char 
// If count is aplhabetic
//  - Increment count
// Else, continue incrementation
//

// Code
// ---------------------------------------------------------

function staggeredCase(string) {
  let alphaCount = 0;

  return [...string.toLowerCase()].map((char) => {
      let isAlpha = char > 'A' && char < 'z';
      
      if (isAlpha) {
        if (alphaCount % 2 === 0) char = char.toUpperCase();
        alphaCount += 1;
      }
      return char;
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!", false));
console.log(staggeredCase("ALL CAPS", false));
console.log(staggeredCase("ignore 77 the 444 numbers", false));

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);


// Further exploration
// ---------------------------------------------------------


// Solution owes thanks to Eddie Pearce below, as initially I didn't understand
// the further exploration question wording

function staggeredCase(string, alphaOnly = true) {
  let alphaCount = 0;

  return [...string.toLowerCase()].map((char) => {
      let isAlpha = char > 'A' && char < 'z';
      
      if (isAlpha) {
        if (alphaCount % 2 === 0) char = char.toUpperCase();
        if (alphaOnly) alphaCount += 1;
      }
      if (!alphaOnly) alphaCount += 1;
      return char;
    })
    .join("");
}