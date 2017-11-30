// https://js.checkio.org/mission/absolute-sorting/

function absoluteSorting(numbers) {
  return numbers.sort((a, b) => Math.abs(a) - Math.abs(b));
}

console.log(absoluteSorting([-20, -5, 10, 15]));
console.log(absoluteSorting([1, 2, 3, 0]));
console.log(absoluteSorting([-1, -2, -3, 0]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20], "Example");
//   assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3], "Positive numbers");
//   assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3], "Negative numbers");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }