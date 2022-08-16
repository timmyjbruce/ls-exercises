// 1. All falsy values
//    - 0
//    - -0
//    - null
//    - undefined
//    - -0n
//    - ''
//    Forgot NaN, & false

// 2. 
// Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

// let randomNumber = Math.round(Math.random());

// if (randomNumber === 1) {
//   console.log('Yes!');
// } else {
//   console.log('No.');
// }


// 3. 

// let randomNumber = Math.round(Math.random());

// randomNumber === 1 ? console.log('Yes!') : console.log('No.');

//console.log(randomNumber ? 'Yes!' : 'No.');  // more compact solution

// 4. 

// let weather = 'Dang hot!';

// if (weather === 'sunny') {
//   console.log("It's a beautiful day!")
// } else if (weather === 'rainy') {
//   console.log("Grab your umbrella.")
// } else (
//   console.log("Let's stay inside.")
// )


// 5. It will log 'neigh', 'tweet tweet' '*cricket*' as there is no break statement after any of the cases. 


// 6. 

// let weather = 'Dang hot!';

// switch (weather) {
//   case 'sunny' :
//     console.log("It's a beautiful day!");
//     break;
//   case 'rainy' :
//     console.log("Grab your umbrella.");
//     break;
//   case 'Dang hot!' :
//     console.log('Get the ice!');
//     break;
//   default :
//     console.log("Let's stay inside.");
// }

// 7. It will log 'Yes!' becasue the if statement is set to evaluate on true 'or' false.

// 8. It will log 'No...' becasue the if statement is set to evaluate on true 'and' false. 
//    Since only one condition is truthy its condition is evaluated as falsy, and else statement runs instead.

// 9. $3.99 will be logged to the console.

// 10. It will log boolean true to the console.
// Bonus Q. We don't need the brackets as '&&', is above '||' in operator precedence. // Incorrect - brain fart.