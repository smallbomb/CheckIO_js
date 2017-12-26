// https://js.checkio.org/mission/bigger-together/

function biggerTogether(ints) {
  // Returns difference between the largest and smallest values
  // that can be obtained by concatenating the integers together.
  ints = ints.map(e => e.toString());
  let big = ints.sort((a, b) => (b + a) - (a + b)).reduce((pre, cur) => pre + cur);
  let small = ints.sort((a, b) => (a + b) - (b + a)).reduce((pre, cur) => pre + cur);
  return big - small;
}

console.log(biggerTogether([1, 2, 3, 4]));
console.log(biggerTogether([1, 2, 3, 4, 11, 12]));
console.log(biggerTogether([0, 1]));
console.log(biggerTogether([100]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(biggerTogether([1, 2, 3, 4]), 3087, "4321 - 1234 = 3087")
//   assert.equal(biggerTogether([1, 2, 3, 4, 11, 12]), 32099877, "43212111 - 11112234 = 32099877")
//   assert.equal(biggerTogether([0, 1]), 9, "10 - 01 = 9")
//   assert.equal(biggerTogether([100]), 0, "100 - 100 = 0")
//   console.log("Done! I feel like you good enough to click Check");
// }