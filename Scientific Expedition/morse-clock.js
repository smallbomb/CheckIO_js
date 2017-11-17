// https://js.checkio.org/mission/morse-clock/

function morseClock(data) {
  let morseObj = [
    '....', // 0
    '...-', // 1
    '..-.', // 2
    '..--', // ...
    '.-..',
    '.-.-',
    '.--.',
    '.---',
    '-...',
    '-..-',
  ];
  let s = "24:34:34";
  return data.split(":")
             .map(e => ("0" + e).substr(-2))
             .join(":").split("")
             .map((e, i) => morseObj[e] && morseObj[e].substr("-" + s[i]) || ":")
             .join(" ");
}

console.log(morseClock("10:37:49"));
console.log(morseClock("21:34:56"));
console.log(morseClock("00:1:02"));
console.log(morseClock("23:59:59"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(morseClock("10:37:49"), ".- .... : .-- .--- : -.. -..-", "1st");
//   assert.equal(morseClock("21:34:56"), "-. ...- : .-- .-.. : -.- .--.", "2nd");
//   assert.equal(morseClock("00:1:02"), ".. .... : ... ...- : ... ..-.", "3rd");
//   assert.equal(morseClock("23:59:59"), "-. ..-- : -.- -..- : -.- -..-", "4th");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }