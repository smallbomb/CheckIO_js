// https://js.checkio.org/mission/double-substring/

function doubleSubstring(line) {
  let maxlengh = 0;
  let str = "";
  for (let i = 0; i < line.length; i++) {
    str += line[i];
    if (line.includes(str, i + 1)) {
      continue;
    }
    else {
      maxlengh = str.length - 1 > maxlengh ? str.length - 1 : maxlengh;
      str = "";
    }
  }
  return maxlengh;
}

console.log(doubleSubstring('aaaa'));
console.log(doubleSubstring('abc'));
console.log(doubleSubstring('aghtfghkofgh'));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(doubleSubstring('aaaa'), 2, "First")
//   assert.equal(doubleSubstring('abc'), 0, "Second")
//   assert.equal(doubleSubstring('aghtfghkofgh'), 3, "Third")
//   console.log('"Run" is good. How is "Check"?');
// }