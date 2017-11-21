// https://js.checkio.org/mission/long-non-repeat/

function nonRepeat(line) {
  let max_string = "";
  let tmp_s = "";
  for (let i = 0; i < line.length; i++) {
    for (let j = i; j < line.length && tmp_s.indexOf(line[j]) < 0; j++) tmp_s += line[j];
    if (tmp_s.length > max_string.length) max_string = tmp_s;
    tmp_s = "";
  }
  return max_string;
}

console.log(nonRepeat('aaaaa'));
console.log(nonRepeat('abdjwawk'));
console.log(nonRepeat('abcabcffab'));

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(nonRepeat('aaaaa'), 'a', "First")
//     assert.equal(nonRepeat('abdjwawk'), 'abdjw', "Second")
//     assert.equal(nonRepeat('abcabcffab'), 'abcf', "Third")
//     console.log('"Run" is good. How is "Check"?');
// }
