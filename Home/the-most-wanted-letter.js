// https://js.checkio.org/mission/most-wanted-letter/

function mostWanted(data) {
  if (data.length === 0) return "";
  let count = {};
  data = data.toLowerCase().replace(/[^a-z]/g, '').split("").sort();
  data.forEach(e => count[e] = (count[e] | 0) + 1);  
  return Object.keys(count).reduce(function (a, b) { return count[a] >= count[b] ? a : b });
}

console.log(mostWanted("Hello World!"));
console.log(mostWanted("How do you do?"));
console.log(mostWanted("One"));
console.log(mostWanted("Oops!"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(mostWanted("Hello World!"), "l", "1st example");
//   assert.equal(mostWanted("How do you do?"), "o", "2nd example");
//   assert.equal(mostWanted("One"), "e", "3rd example");
//   assert.equal(mostWanted("Oops!"), "o", "4th example");
//   assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }