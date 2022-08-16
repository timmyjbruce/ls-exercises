// 1. 

// function sum (num1, num2) {
//   return num + num;
// }

// sum(22, 10); // 32

// 2. Without a explicit return, function will implicitly return 'undefined'. 

// function eichQuote () {
//   console.log('Always bet on JavaScript.');
// } 

// 3. 

// function cite (author, quote) {
//   console.log(`${author} said: ${quote}`);
// } 

// 4.

// function numSquared (num) {
//   return num ** 2;
// }

// 5. 3 / 1 = 3 
//    6 / 2 = 3
//    9 / 3 = 3
//    ...
//    30 / 10 = 3

// 6. 

// function stringLengthCompare (string1, string2) {
//   if (string1.length === string2.length) {
//     return 0;
//   } else if (string1.length < string2.length) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

// 7. 

// function nameUpdate (name) {
//   return name.replace('Ruby', 'JavaScript');
// }
// nameUpdate('Captain Ruby');

// // or, without the function:

// let initialName = 'Captain Ruby';
// let hipName = initialName.replace('Ruby', 'JavaScript');

// // or, with reassignemnt

// let initialName = 'Captain Ruby';
// initialName = initialName.replace('Ruby', 'JavaScript');

// console.log(initialName);

// 8. 

// function greetInLang (locale) {
  //   const localeConvert = new Intl.DisplayNames([locale], { type: 'region' });
  //   return (localeConvert.of('US'));
  // }
  
  // console.log(greetInLang('af'));


// function greetInLocale (locale) {
//   switch (locale) {
//     case 'en' : 
//       return 'Hi!';
//       break;
//     case 'fr' : 
//       return 'Salut!';
//       break;
//     case 'de' : 
//       return 'Hallo!';
//       break;
//     case 'sv' : 
//       return 'Hej!';
//       break;
//     case 'af' : 
//       return 'Haai!';
//       break;
//   }
// }
// console.log(greetInLocale('fr'));

// 9.

// function extractLanguage (locale) {
//   return locale.slice(0, 2);
// }

// console.log(extractLanguage('en_US.UTF-8'));  // 'en'
// console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
// console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// 10.

// function extractLanguage (locale) {
//   return locale.slice(3, 5);
// }

// console.log(extractLanguage('en_US.UTF-8'));  // 'en'
// console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
// console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// // or

// function extractLanguage (locale) {
//   return locale.split('_')[1].split('.')[0];
// }

// console.log(extractLanguage('en_US.UTF-8'));  // 'en'
// console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
// console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// 11.

//  

function localGreet (locale) {
  let lang = locale.split('_')[0];
  let country = locale.split('_')[1].split('.')[0];
  
  switch (lang) {
      case 'en' : 
      switch (country) {
        case 'US' : return 'Hey!';
        case 'GB' : return 'Hello!';
        case 'AU' : return 'Howdy!';
      }
      case 'fr' : return 'Salut!';
      case 'de' : return 'Hallo!';
      case 'sv' : return 'Hej!';
      case 'af' : return 'Haai!';
    }
  }

  console.log(localGreet('en_US.UTF-8')); // 'Hey!'
  console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
  console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

  console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
  console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
  console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

