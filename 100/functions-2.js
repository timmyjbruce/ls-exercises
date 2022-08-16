// 1. 

// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// greet('Salutations'); // logs: Salutations, world!

// console.log(greet());              // should log: Hello, world!
// console.log(greet(undefined));    
     

// 2. 

// function greet(greeting = 'Hello', recepient = 'world') {
//   console.log(greeting + ', ' + recepient + '!');
// }

// console.log(greet());                                // logs: Hello, world!
// console.log(greet('Salutations'));                   // logs: Salutations, world!
// console.log(greet('Good morning', 'Launch School')); // logs: Good morning, Launch School!

// 3. 

// function greet() {
//   console.log(`${greeting()}, ${recipient()}!`);
// }

// function greet2() {
//   console.log(greeting() + ', ' + recipient() + '!');
// }


// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// greet();
// greet2();

// 4. 
// bmi = weightInKilograms / heightInMeters**2;

// function calculateBMI (height, weight) {
//   return Math.round(((weight / (height / 100) ** 2) + Number.EPSILON) * 100) / 100;
// }

// console.log(calculateBMI(180, 80)); // "24.69"

// 5. 

// Solution with stacked conditionals

// function catAge (years) {
//   let calculateCatAge = 0;
//   if (years === 0) {
//     calculateCatAge = 0;
//   } 
//   if (years >= 1) {
//     calculateCatAge += 15;
//   }
//   if (years >= 2) {
//     calculateCatAge += 9;
//     calculateCatAge += (years - 2) * 4;
//   }
//   return calculateCatAge;
// }

// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32

// Solution with switch, not as easily readable as LS version

// function catAge2 (years) {
//   let calculateCatAge = 0;

//   switch (true) {
//     case (years >= 2) : calculateCatAge += 9 + (years - 2) * 4;
//     case (years >= 1) : calculateCatAge += 15;
//   }
//   return calculateCatAge;
// }

// console.log(catAge2(0)); // 0
// console.log(catAge2(1)); // 15
// console.log(catAge2(2)); // 24
// console.log(catAge2(3)); // 28
// console.log(catAge2(4)); // 32

// 6. 

// function removeLastChar (string) { 
//  return string.slice(0, string.length - 1)
// }

// console.log(removeLastChar('ciao!')); // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'

// 7. 

// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) => {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }

// console.log(sentence('like', 'birds'));

// 8.

let initGame = () => {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);