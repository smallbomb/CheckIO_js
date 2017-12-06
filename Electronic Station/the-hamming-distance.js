// https://js.checkio.org/mission/hamming-distance/

function hammingDistance(n, m) {
  return (n ^ m).toString(2).replace(/0/g, '').length;
}

console.log(hammingDistance(117, 17));
console.log(hammingDistance(1, 2));
console.log(hammingDistance(16, 15));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(hammingDistance(117, 17), 3, "First example");
//   assert.equal(hammingDistance(1, 2), 2, "Second example");
//   assert.equal(hammingDistance(16, 15), 5, "Third example");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }