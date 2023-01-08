// Question
// =============================================================================
// Random Recipe Generator

// One bored and hungry evening we decided to randomly generate recipes. We
// can't wait to see the first suggestions, but JavaScript raises a TypeError,
// telling us that dishName.join is not a function. What is wrong?

// Code:

// Picks n random elements from an array,
// and returns a new array with those elements.

// function random(array, n) {
//   if (n === undefined) {
//     n = 1;
//   }

//   let elements = array.slice();
//   let randomElements = [];

//   while (n > 0 && elements.length > 0) {
//     let randomIndex = Math.floor(Math.random() * elements.length);
//     let randomElement = elements[randomIndex];

//     randomElements.push(randomElement);
//     elements.splice(randomIndex, 1);
//     n--;
//   }

//   return randomElements;
// }

// // Ingredients

// let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
//   'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

// let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
//   'poppy seed', 'cumin'];

// let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// // Name

// let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
// let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
// let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

// let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

// console.log('How about: ' + dishName.join(' '));
// console.log('You need: ' + dish.join(', '));



// Solution (correct)
// =============================================================================
// The dishName variable is a string, join is an array method only.

// The dish variable on line 56 will have a similar problem. Arrays have been
// coerced into strings during it's assignment, and therefore join will raise an
// error there too. Items in this list are also missing spaces.

// Both variables can be 'joined' with spaces by using a template literal
// instead of concatenation with the addition operator.

// The dish variable would also benefit from the return value of the random
// function being 'pre-joined'.


function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements.join(', ');
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = `${random(adjective)} ${random(firstNoun)} ${random(secondNoun)}`;
let dish = `${random(ingredients, 3)}, ${random(spices, 2)}, ${random(extras, 1)}`;

console.log('How about: ' + dishName);
console.log('You need: ' + dish);