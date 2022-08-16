// 1.

// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// student.courses;

// console.log(student.locker);


// 2. 

// jane.location.country;


// 3. 

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido.age = 32;
// fido['favourite food'] = 'pizza';

// console.log(fido);


// 4. 

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet (name) {
//     return 'Hej, ' + name + '!';
//   }
// };

// console.log(jane.greet('Bobby')); // Hej, Bobby!


// 5. In snippet 1, the newly assigned property will be: prefix : 'Pacific'. Without bracket notation JS will ignore the variable on line 2. 
//    In snippet 2, the newly assigned prop will be Indian : 'Pacific' 

// 6. On line 11 the conditional statement references the property of the the object and returns the value as an operand.
//    The value of the true property is false, so the condition evaluates as false, and the log statment is never run.


// 7.

// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// keys = Object.keys(vehicle);

// console.log(keys);


// 8. 

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// nestedPerson = Object.entries(person);

// console.log(nestedPerson);

// 9.

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]; 
// let object = {}

// for (i = 0; i < nestedArray.length; i += 1) {
//   object[nestedArray[i][0]] = nestedArray[i][1];
// }

// console.log(object);

// 10. 

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false