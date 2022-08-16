// 1. Solution would return undefined if array was empty.

// function first (array) {
//   return array[0];
// }

// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

// 2.

// function first (array) {
//   return array[array.length - 1];
// }

// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

// 3. 

// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// energy.shift();
// energy.push('geothermal');

// console.log(energy);

// 4. 

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// console.log(alphabet.split(''));

// 5. 

// let scores = [96, 47, 113, 89, 100, 102];
// let count = 0;

// scores.forEach(num => {
//   if (num >= 100 ) {
//     count += 1;
//   }
// })

// console.log (count);


// 6. 

// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// // Solution with nested teration methods
// vocabulary.forEach(array => {
//   array.forEach(word => {
//     console.log(word);
//   })
// })

// // Solution with nested loops
// for (i = 0; i < vocabulary.length; i += 1) {
//   for (j = 0; j < vocabulary[i].length; j += 1) {
//     console.log(vocabulary[i][j]);
//   }
// }

// 7. Output will be false. For JavaScript to consider 
//    objects (like arrays) to be equal the operands must 
//    reference the same place in the memory.

// 8. 

// function filter(input) {
//   if (Array.isArray(input)) {
//     // some code
//   }
// }

// 9. 

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

// function contains (string, array) {
//   for (i = 0; i < array.length; i += 1) {
//     if (string === array[i]) {
//       console.log(`Iteration #${i}`)
//       return true;
//     }
//   }
//   return false;
// }

// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false


// 10.

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// let passcodeString = passcode.join('-');

// console.log(passcodeString);

// 10b. 

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// let passcodeString = passcode.join().replaceAll(',', '');

// console.log(passcodeString);


// 11. 

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

for (i = 0; i < groceryList.length;) {
  console.log(groceryList.shift()); 
}

console.log(groceryList);
