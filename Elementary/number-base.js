// https://js.checkio.org/mission/number-radix/

function numberRadix(str_number, radix) {
  return parseInt(str_number, radix).toString(radix).toUpperCase() === str_number ? parseInt(str_number, radix) : -1;
}

console.log(numberRadix("ASD", 15));

console.log(numberRadix("AF", 16));
console.log(numberRadix("101", 2));
console.log(numberRadix("101", 5));
console.log(numberRadix("Z", 36));
console.log(numberRadix("AB", 10));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(numberRadix("AF", 16), 175, "Hex");
//   assert.equal(numberRadix("101", 2), 5, "Bin");
//   assert.equal(numberRadix("101", 5), 26, "5 base");
//   assert.equal(numberRadix("Z", 36), 35, "Z base");
//   assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }