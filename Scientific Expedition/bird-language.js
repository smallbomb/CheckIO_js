// https://js.checkio.org/mission/bird-language/

const VOWELS = "aeiouy"

function translate(phrase){
  return phrase.replace(/([aeiouy])\1{2}/g, '$1') // hielalao
               .replace(/([^aeiouy ])[aeiouy]/g, '$1');
}

console.log(translate("hieeelalaooo"));
console.log(translate("hoooowe yyyooouuu duoooiiine"));
console.log(translate("aaa bo cy da eee fe"));
console.log(translate("sooooso aaaaaaaaa"));
// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(translate("hieeelalaooo"), "hello", "Hi!");
//     assert.equal(translate("hoooowe yyyooouuu duoooiiine"), "how you doin", "Joey?");
//     assert.equal(translate("aaa bo cy da eee fe"), "a b c d e f", "Alphabet");
//     assert.equal(translate("sooooso aaaaaaaaa"), "sos aaa", "Mayday, mayday");

//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }