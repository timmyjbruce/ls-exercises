// Question
// =============================================================================



// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Skiping most of PEDAC as very similar to prior problem

// Examples
// ---------------------------------------------------------

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
// wordSizes('');                                            // {}


// Datastructure
// ---------------------------------------------------------


// Algorithm
// ---------------------------------------------------------
// START exisiting function
// Regex removed non alphanumeric or space charatcters from srting
// Continue with function from prior exercise

// Code
// ---------------------------------------------------------

function wordSizes(string) {
    if (string === '') {
      return {};
    }

  string = string.replaceAll(/[^A-Za-z0-9 ]/g, '');
  let sizes = {};
  
  string.split(' ').map(word => {
    let index = word.length;
    sizes[index] = sizes[index] ? sizes[index] += 1 : 1;
  })
  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}


// Thoughts / improvements
// ---------------------------------------------------------
// LS solution using an interesting approach to identify alphabet characters


