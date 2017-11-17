// https://js.checkio.org/mission/long-repeat/

function longRepeat(line) {
  if (line.length === 0) return 0;
  return Math.max(...line.match(/(.)\1*/g).map(e => {return e.length}));
}

console.log(longRepeat('ddvvrwwwrggg'));
console.log(longRepeat('abababaab'));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(longRepeat('sdsffffse'), 4, "First")
//   assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
//   console.log('"Run" is good. How is "Check"?');
// }