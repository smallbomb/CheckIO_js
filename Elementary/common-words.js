// https://js.checkio.org/mission/common-words/

function commonWords(first, second) {
  return first.split(",")
              .filter(word => second.split(",").indexOf(word) >= 0)
              .sort()
              .join(",");
}

console.log(commonWords("hello,world", "hello,earth"));
console.log(commonWords("one,two,three", "four,five,six"));
console.log(commonWords("one,two,three", "four,five,one,two,six,three"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
//   assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
//   assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }