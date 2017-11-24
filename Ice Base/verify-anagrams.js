// https://js.checkio.org/mission/verify-anagrams/

function verifyAnagrams(first_word, second_word) {
  if (first_word.replace(/ /g, "").toLowerCase().split("").sort().join("") === second_word.replace(/ /g, "").toLowerCase().split("").sort().join(""))
    return true;
  return false;
}

console.log(verifyAnagrams("Programming", "Gram Ring Mop"));
console.log(verifyAnagrams("Hello", "Ole Oh"));
console.log(verifyAnagrams("Kyoto", "Tokyo"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(verifyAnagrams("Programming", "Gram Ring Mop"), true, "Gram of code");
//   assert.equal(verifyAnagrams("Hello", "Ole Oh"), false, "Hello! Ole Oh!");
//   assert.equal(verifyAnagrams("Kyoto", "Tokyo"), true, "The global warming crisis of 3002");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }