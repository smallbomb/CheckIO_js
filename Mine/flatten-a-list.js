// https://js.checkio.org/mission/flatten-list/

function flatList(array) {
  let result = [];
  array.forEach(e => {
    if (Array.isArray(e))
      result = result.concat(flatList(e));
    else
      result.push(e);
  });

  return result;
}

console.log(flatList([1, 2, 3]));
console.log(flatList([1, [2, 2, 2], 4]));
console.log(flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]));
console.log(flatList([-1, [1, [-2], 1], -1]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(flatList([1, 2, 3]), [1, 2, 3], "First");
//   assert.equal(flatList([1, [2, 2, 2], 4]), [1, 2, 2, 2, 4], "Second");
//   assert.equal(flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]), [2, 4, 5, 6, 6, 6, 6, 6, 7], "Third");
//   assert.equal(flatList([-1, [1, [-2], 1], -1]), [-1, 1, -2, 1, -1], "Four");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }