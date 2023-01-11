// Question
// =============================================================================
// Reserved Keywords

// We have been asked to implement a function that determines whether or not a
// given word is a reserved keyword. We wrote the isReserved function below
// along with some test cases, but we aren't seeing the expected result. Why
// not? Fix the code so that it behaves as intended.

// const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
//   'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
//   'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
//   'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
//   'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
//   'with', 'yield'];

// function isReserved(name) {
//   RESERVED_KEYWORDS.forEach(reserved => {
//     if (name === reserved) {
//       return true;
//     }
//   });

//   return false;
// }

// console.log(isReserved('monkey')); // false
// console.log(isReserved('patch'));  // false
// console.log(isReserved('switch')); // should be: true


// Solution (correct)
// =============================================================================
// The inner return statement only returns forEach's callback, not the
// isReserved function. Declaring a top-level variable and re-assginging (if
// true) and returning it, is one way to fix this


const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  let isReserved = false;

  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      isReserved = true;
    }
  });

  return isReserved;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true