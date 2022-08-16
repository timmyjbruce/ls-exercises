// 1. undefined

// 2. It will error, let and const aren't hoisted.

// 3. It will error, as let has block scope, therefore the mValue variable hasn;t been initialised as a globale var andthe log statement can't access it.

// 4. It will log 1 because the log statment is within the scope of the let variable.

// 5. Let variables have block scope, which means they can only accessed within the encapsultaitng code block.

// 6. Will log false. The variable on line 6 is a new shadow variable of the variable on line 2. Its scoped to the block and therefore can;t ba accessed by the log statement.

// 7. It'll log 1.

// 8. It'll log 2. The a parameter in the funnction on line 3, is not the same as the a variable on lin 1. The parameter is an un-intialised vairable with local scope to the function.
//    When the function is called the variable b is passed as an argument to the function and console is logged in the log statement.

// 9. Error, can't reassign a const variable.

// 10. {
//     firstName: 'Jane',
//     lastName: 'Doe'
//     }
// Objects are mutable even if declared with the const variable.