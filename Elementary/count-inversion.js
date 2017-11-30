// https://js.checkio.org/mission/count-inversions/

function countInversion(sequence){
  return sequence.map((e, i, arr) => arr.slice(i).filter(e2 => e > e2).length)
                 .reduce((total, element) => total + element);
}

console.log(countInversion([1, 2, 5, 3, 4, 7, 6]));
console.log(countInversion([0, 1, 2, 3]));
console.log(countInversion([99, -99]));
console.log(countInversion([5, 3, 2, 1, 0]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
//   assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
//   assert.equal(countInversion([99, -99]), 1, "Two numbers");
//   assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }