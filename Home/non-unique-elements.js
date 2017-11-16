// https://js.checkio.org/mission/non-unique-elements/

function nonUniqueElements(data) {
  return data.filter((e, i, arr) => arr.indexOf(e) !== arr.lastIndexOf(e));
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([1, 2, 3, 4, 5]));
console.log(nonUniqueElements([5, 5, 5, 5, 5]));
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));

// var assert = require('assert');
// assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
// assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
// assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
// assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");