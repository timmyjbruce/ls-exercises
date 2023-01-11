// Question
// =============================================================================
// Range

// We are assigned the task to implement a range function that returns an array
// of integers beginning and ending with specified start and end numbers. When
// only a single argument is provided, that argument should be used as the
// ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error
// saying Maximum call stack size exceeded? Can you fix the code, so it runs
// without error and satisfies the requirements?


// function range(start, end = -1) {
//   let range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// function range(end) {
//   return range(0, end);
// }

// // Examples

// console.log(range(10, 20));
// console.log(range(5));


// Solutions (correct)
// =============================================================================
// There are two seperate functions, they need different names. Currently the
// second 'range' function is being called twice. In both instances the function
// is creating and infinite recurring loop as is calls itself within the function body.

function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function rangeEnd(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(rangeEnd(5));



// Alternatively
// If the name needs to be consistent than a single function could be created:

function rangeAlt(start, end) {
  let range = [];

  if (start !== undefined && end === undefined) {
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(rangeAlt(10, 20));
console.log(rangeAlt(5));


// Further exploration
// =============================================================================
// There are two reasons why the following is not a working solution. Can you
// spot them?

// function range(start, end) {
//   if (!end) {
//     start = 0;
//     end = start;
//   }

// Reason 1:
// The solution assumes if end it undefined, then start won't be defined.

// Reason 2: 
// The solution will set both start and end to 0 (reassignment is in reverse
// order) 