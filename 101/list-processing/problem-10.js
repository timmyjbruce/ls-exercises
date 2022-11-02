// Question
// =============================================================================
// Building on the previous exercise, write a function that returns true or
// false based on whether or not an inventory item is available. As before, the
// function takes two arguments: an inventory item and a list of transactions.
// The function should return true only if the sum of the quantity values of the
// item's transactions is greater than zero. Notice that there is a movement
// property in each transaction object. A movement value of 'out' will decrease
// the item's quantity.

// You may (and should) use the transactionsFor function from the previous
// exercise.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Object reference (string), key value (number)
// Output: Boolean

// Explicit requirements:
// - Need filter to item and sum quantity's factoring in/out (+/-)
// - If sum is > zero return true, otherwise return false
// - Should use transactions for from previous statement.

// Implicit requirements:
// - No addtional

// Examples
// ---------------------------------------------------------
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// isItemAvailable(101, transactions);     // false
// isItemAvailable(103, transactions);     // false
// isItemAvailable(105, transactions);     // true


// Datastructure
// ---------------------------------------------------------
// Arrays to hold filtered elements
// Numbers to hold sum

// Algorithm
// ---------------------------------------------------------
// Start 'isItemAvailable', set 'id' and 'transactions'
// Assign 'transactions' to filtered list of transactions using 'transactionsFor'
// Set 'stockLevel'

// Iterate through transactions
// Get movement value
// If movementValue is 'in' add quantity value to stock, otherwise subtract it
// Return stockLevel

// Code
// ---------------------------------------------------------
function isItemAvailable(id, listArr) {
  let stock = 0;

  transactionsFor(id, listArr).forEach(transact => { 
    let direction = transact.movement === 'in' ? 1 : -1;
    stock += transact.quantity * direction; 
  });
  return stock > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


function transactionsFor(id, listArr) {
  return listArr.filter(listItem => listItem.id === id);
}

// Thoughts / improvements
// ---------------------------------------------------------
// LS solution uses reduce is nice and compact, also use of simple conditional
// is much more readable.

