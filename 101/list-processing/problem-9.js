// Question
// =============================================================================
// Write a function that takes two arguments, an inventory item ID and a list of
// transactions, and returns an array containing only the transactions for the
// specified inventory item.

// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: Object reference (string), key value (number)
// Output: Array

// Explicit requirements:
// - Get objects with property values with matching id values.
// - Return as and array of sub-objects, one for each matching property.

// Implicit requirements:
// - No other 

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

// transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// Datastructure
// ---------------------------------------------------------
// Array to store and return property values

// Algorithm
// ---------------------------------------------------------
// Start 'transactionsFor', set 'id' & 'listArr'
// Set filteredArr
// Iterate over array elements
// If elements id property has a value that matches id arg
// Push element to filterArr
// Return filteredArr

// ** Alternate **
// Start 'transactionsFor', set 'id' & 'listArr'
// Iterate over array elements
// If elements id property does not match id arg remove from listArr
// Return included elements


// Code
// ---------------------------------------------------------

// Initial version
function transactionsFor(id, listArr) {
  let transactions = [];
  
  listArr.forEach(listItem => {
    if (id === listItem.id) 
      transactions.push(listItem);
  });
  return transactions;
}

// Shorter version
function transactionsFor(id, listArr) {
  return listArr.filter(listItem => listItem.id === id);
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

console.log(transactionsFor(101, transactions));

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// Thoughts / improvements
// ---------------------------------------------------------



