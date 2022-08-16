// 1. 

// 1a. underscores for variable names
// 1b. missing semi colons at the end of variables
// 1c. no camleCase for variable names
// 1d. no space after the 'while' keyword
// 1e. code block for while loop starts on on a new line. opening parenthesis should be on same line as while statement, with a space added
// 1f. too much indentation for the statments within the code block
// 1g. no space between addition operators and quote marks in cocatenation in lower statement.

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while(iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');


// 2b. null, undefined, Number, String, BigInt, Boolean

// 3. 

let maxVal = () => Number.MAX_VALUE;

//4. 

// 4 * 5 + 3 ** 2 / 10 = 20.9

// 5. 'A Number representing the milliseconds elapsed since the UNIX epoch.'

// 6. getFullYear() should be used, the getYear() method can return inconsistent resutls depending on the value passed to it.

// 7. join() accepts 1 argument. If no args are specified a comma is used. If more that one arg additionas are ignored.

// 8. Using the additiona operator, or with the concat() method.

// 9. Brackets added

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

// 10. lenght is a property no a method:

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}