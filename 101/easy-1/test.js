let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(fruitObj) {
  
  let fruitArr = Object.keys(fruitObj);
  fruitArr = fruitArr.filter(fruit => fruitObj[fruit] === 'Fruit');

  let newObj = {}
  for (element of fruitArr ) {
    newObj[element] = 'Fruit'
  }
  return newObj;
}


// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }




// function doubleNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     numbers[counter] *= 2
//     counter += 1;
//   }
//   return numbers;
// }


function doubleNumbers(numbers) {
  let doubledNums = [];
  for (let count = 0; count < numbers.length; count++){
    if (numbers[count] % 2 === 0 ) {
      doubledNums.push(numbers[count]);
    } else {
      doubledNums.push(numbers[count] * 2);
    } 
  }
return doubledNums;
}

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers));

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

function multiply(numbers, factor) {
  let multiplied = [];
  for (let count = 0; count < numbers.length; count++) {
    multiplied.push(numbers[count] * factor)
  }
  return multiplied;
}