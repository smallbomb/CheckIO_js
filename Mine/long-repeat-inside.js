// https://js.checkio.org/mission/long-repeat-inside/

function repeatInside(line) {
  let longest_repeat_inside = "";
  for (let i = line.length; i > 0; i--) {
    let substr_repeat = line.slice(0, i).match(/(..*)\1+$/g) ? line.slice(0, i).match(/(..*)\1+$/g)[0] : ""; // get longest substrting repeat from last char
    if (substr_repeat.length >= longest_repeat_inside.length)
      longest_repeat_inside = substr_repeat;
  }
  return longest_repeat_inside;
}

console.log(repeatInside('aabbbbbbbbbbbbbbbb'));
console.log(repeatInside('abcdabcdabcdabcdabcd'));
console.log(repeatInside('aabbaabb'));

console.log(repeatInside('aaaaa'));
console.log(repeatInside('aabbff'));
console.log(repeatInside('aababcc'));
console.log(repeatInside('abc'));
console.log(repeatInside('abcabcabab'));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(repeatInside('aaaaa'), 'aaaaa', "First")
//   assert.equal(repeatInside('aabbff'), 'aa', "Second")
//   assert.equal(repeatInside('aababcc'), 'abab', "Third")
//   assert.equal(repeatInside('abc'), '', "Forth")
//   assert.equal(repeatInside('abcabcabab'), 'abcabc', "Fifth")
//   console.log('"Run" is good. How is "Check"?');
// }