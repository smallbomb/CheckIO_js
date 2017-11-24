// https://js.checkio.org/mission/pangram/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function checkPangram(text) {
  text = text.toLowerCase();
  let obj = {};
  for (let i = 0; i < text.length; i ++) {
    if (text[i].match(/[a-z]/))
      obj[text.charCodeAt(i)] = true;
  }
  return Object.keys(obj).length === 26;
}

console.log(checkPangram("The quick brown fox jumps over the lazy dog."));
console.log(checkPangram("ABCDEF"));
console.log(checkPangram("Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!"));

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(checkPangram("The quick brown fox jumps over the lazy dog."), true, "brown fox");
//     assert.equal(checkPangram("ABCDEF"), false, "ABC");
//     assert.equal(checkPangram("Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!"), true, "Bored?");
//     console.log("If it is done - it is Done. Go Check is NOW!");
// }