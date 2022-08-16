// 1. ####### 

// let string = "These aren't the droids you're looking for.";

// console.log(string.lengthnode )

// 2. ####### 

// let string = 'confetti floating everywhere';

// console.log(string.toUpperCase());

// 3. ####### 

// function repeat (repetitions, string) {
//   let newString = '';
//   for (i = 1; i <= repetitions; i += 1 ) {
//     newString += string;
//   }
//   return newString;
// }

// console.log(repeat(3, 'ha')); // 'hahaha'

// 4. ####### 

// let string = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

// console.log(string);


// 5. #######

// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';

// let stringCheck = string1.toLowerCase() == string2.toLowerCase();

// console.log(stringCheck);


// 6. #######

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// console.log(byteSequence.includes('x'));


// 7. #######

// function isBlank (string) {
//   if (string.length === 0){
//     return true;
//   } else {
//     return false;
//   }
// } 

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true

// 8. 

// function isBlank(string) {
//   return string.length === 0 && string.trim().length === 0;
// }

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true

// 9. 

let string = 'launch school tech & talk';

let array = string.split(' ');

let capitalisedString = '';

for (i = 0; i < array.length; i += 1) {
  let capitalWord = array[i].replace(array[i][0], array[i][0].toUpperCase());
  capitalisedString += ' ' + capitalWord;
}

console.log(capitalisedString);