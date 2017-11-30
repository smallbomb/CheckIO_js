// https://js.checkio.org/mission/digits-multiplication/

function digitsMultip(data) {
  return data.toString().split("")
             .map(Number)
             .reduce((total, digit) => digit ? total * digit : total + digit);
}

console.log(digitsMultip(123405));
console.log(digitsMultip(999));
console.log(digitsMultip(1000));
console.log(digitsMultip(1111));


// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(digitsMultip(123405), 120, "1st");
//   assert.equal(digitsMultip(999), 729, "2nd");
//   assert.equal(digitsMultip(1000), 1, "3rd");
//   assert.equal(digitsMultip(1111), 1, "4th");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }