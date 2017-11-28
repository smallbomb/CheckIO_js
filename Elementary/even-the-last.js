// https://js.checkio.org/mission/even-last/

function evenLast(data) {
  let result = 0;
  for (let i = 0; i < data.length; i += 2)
    result += data[i];
  return data.length === 0 ? 0 : result * data[data.length - 1];
}

console.log(evenLast([0, 1, 2, 3, 4, 5]));
console.log(evenLast([1, 3, 5]));
console.log(evenLast([6]));
console.log(evenLast([]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
//   assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
//   assert.equal(evenLast([6]), 36, "(6)*6=36");
//   assert.equal(evenLast([]), 0, "An empty array = 0");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }