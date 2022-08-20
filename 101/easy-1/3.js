// Question:
// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.


// Solution:

for (i = 2; i < 100; i += 2) {
  console.log(i)
}

// or this which preserves the range (1-99) from the question:

for (i = 1; i < 100; i += 1) {
  if (i % 2 === 0) console.log(i);
}