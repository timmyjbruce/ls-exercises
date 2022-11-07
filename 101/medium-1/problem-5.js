// Question
// =============================================================================
// Stack Machine Interpretation

// A stack is a list of values that grows and shrinks dynamically. A stack may
// be implemented as an Array that uses two Array methods: Array.prototype.push
// and Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of
// values. Each operation in the language operates on a register, which can be
// thought of as the current value. The register is not part of the stack. An
// operation that requires two values pops the topmost item from the stack
// (i.e., the operation removes the most recently pushed value from the stack),
// operates on the popped value and the register value, and stores the result
// back in the register.

// This sounds complex, but the behavior is straightforward and easy to walk
// through manually. Consider a MULT operation in a stack-and-register language.
// It removes the value from the stack, multiplies the removed stack value with
// the register value, then stores the result back in the register. For example,
// if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the
// stack) and a register value of 7, the MULT operation mutates the stack to [3,
// 6] (the 4 is removed), and the result of the multiplication, 28, is left in
// the register. If we do another MULT at this point, the stack is mutated to
// [3], and the register is left with the value 168.

// Write a function that implements a miniature stack-and-register-based
// programming language that has the following commands (also called operations
// or tokens):

// n : Place a value, n, in the register. Do not modify the stack. PUSH : Push
// the register value onto the stack. Leave the value in the register. ADD : Pop
// a value from the stack and add it to the register value, storing the result
// in the register. SUB : Pop a value from the stack and subtract it from the
// register value, storing the result in the register. MULT : Pop a value from
// the stack and multiply it by the register value, storing the result in the
// register. DIV : Pop a value from the stack and divide the register value by
// the popped stack value, storing the integer result back in the register.
// REMAINDER : Pop a value from the stack and divide the register value by the
// popped stack value, storing the integer remainder of the division back in the
// register. POP : Remove the topmost item from the stack and place it in the
// register. PRINT : Print the register value. All operations are integer
// operations (which is only important with DIV and REMAINDER).

// Programs will be supplied to your language function via a string argument.
// Your function may assume that all arguments are valid programs — i.e., they
// will not do anything like trying to pop a non-existent value from the stack,
// and they won't contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.


// PEDAC
// =============================================================================

// Problem
// ---------------------------------------------------------
// Input: String, containing commands as individual words
// Output: None

// Explicit requirements:
// - Take in a series of word commands contained in a single a string
// - Seperates the commands, and perform them in order
// - Stack and register intialise as empty arr / 0
// - Results of commands are always integers - round value as needed
// - No need to worry about invalid validation of program strings

// Implicit requirements:
// - Order of operations is right to left, re: words in string

// Examples
// ---------------------------------------------------------
// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

// Datastructure
// ---------------------------------------------------------

// n : set n to register
// PUSH : Copy register value to stack
// PRINT : Print the register value.

// ##Following commands remove stack val (pop) and:
// ADD : adds val to register
// SUB : subtracts val from register
// MULT : multiplies register by val
// DIV : divide register by val, **round result**
// REMAINDER : divide register by val, store remainder **round result**
// POP : Remove stack val and set it to register



// Algorithm
// ---------------------------------------------------------
// Start 'minilang', set 'program'
// Set 'commands', to words from program string
// Set 'register' to 0;
// Set 'stack' to []
// Iterate through commands
// At each iteration run specific operation as per data structure

// Code
// ---------------------------------------------------------
function minilang(program) {
  let commands = program.split(' ');
  let register = 0;
  let stack = [];

  commands.forEach(cmd => {
    if (!isNaN(parseInt(cmd))) return register = parseInt(cmd);
    switch (cmd) {
      case 'PRINT' : return console.log(register);
      case 'PUSH' : return stack.push(register);
      case 'MULT' : return register *= popCheck();
      case 'ADD' : return register += popCheck();
      case 'SUB' : return register -= popCheck();
      case 'DIV' : return register = Math.round(register / popCheck());
      case 'REMAINDER' :  return register = Math.round(register % popCheck());
      case 'POP' : return register = popCheck();
      default : console.log('Error: Invalid command');
    }
  });

  function popCheck() {
    if (stack.length === 0) return console.log('Error: Stack is empty');
    else return stack.pop();
  }
}

minilang('XF');
// 0

minilang('PRINT');
// 0

minilang('5 PRINT')
// // 5

minilang('5 PUSH POP POP')
// // 5

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


// Thoughts / improvements
// ---------------------------------------------------------