// https://js.checkio.org/mission/roman-numerals/

// ****Reference author wolfmother***
function romanNumerals(number) {
  return "I".repeat(number)
    .replace(/I{1000}/g, 'M')
    .replace(/I{900}/g, 'CM')
    .replace(/I{500}/g, 'D')
    .replace(/I{400}/g, 'CD')
    .replace(/I{100}/g, 'C')
    .replace(/I{90}/g, 'XC')
    .replace(/I{50}/g, 'L')
    .replace(/I{40}/g, 'XL')
    .replace(/I{10}/g, 'X')
    .replace(/I{9}/g, 'IX')
    .replace(/I{5}/g, 'V')
    .replace(/I{4}/g, 'IV')
}

console.log(romanNumerals(6));
console.log(romanNumerals(76));
console.log(romanNumerals(499));
console.log(romanNumerals(3888));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(romanNumerals(6), 'VI', "First");
//   assert.equal(romanNumerals(76), 'LXXVI', "Second");
//   assert.equal(romanNumerals(499), 'CDXCIX', "Third");
//   assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
//   console.log("Done! Go Check!");
// }