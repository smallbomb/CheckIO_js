// https://js.checkio.org/mission/reverse-roman-numerals/solve/

function reverseRoman(roman) {
  return roman
    .replace(/IV/g, "I".repeat(4))
    .replace(/IX/g, "I".repeat(9))
    .replace(/XL/g, "I".repeat(40))
    .replace(/XC/g, "I".repeat(90))
    .replace(/CD/g, "I".repeat(400))
    .replace(/CM/g, "I".repeat(900))
    .replace(/M/g, "I".repeat(1000))
    .replace(/D/g, "I".repeat(500))
    .replace(/C/g, "I".repeat(100))
    .replace(/L/g, "I".repeat(50))
    .replace(/X/g, "I".repeat(10))
    .replace(/V/g, "I".repeat(5)).length
}

console.log(reverseRoman('VI'));
console.log(reverseRoman('LXXVI'));
console.log(reverseRoman('CDXCIX'));
console.log(reverseRoman('MMMDCCCLXXXVIII'));
// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(reverseRoman('VI'), 6, "First")
//     assert.equal(reverseRoman('LXXVI'), 76, "Second")
//     assert.equal(reverseRoman('CDXCIX'), 499, "Third")
//     assert.equal(reverseRoman('MMMDCCCLXXXVIII'), 3888, "Forth")
//     console.log("Coding complete, Cesar? Click 'Check' to review your tests and earn cool rewards!");
// }