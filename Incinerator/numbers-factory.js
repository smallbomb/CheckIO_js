// https://js.checkio.org/mission/number-factory/

function numbersFactory(number) {
  let numarray = [];
  for (let i = 9; i >= 2;) {
    if (number % i === 0) {
      numarray.push(i);
      number /= i;
    }
    else
      i--;
  }
  return number === 1 ? +numarray.sort().join('') : 0;
}

console.log(numbersFactory(20));
console.log(numbersFactory(21));
console.log(numbersFactory(17));
console.log(numbersFactory(33));
console.log(numbersFactory(3125));
console.log(numbersFactory(9973));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(numbersFactory(20), 45);
//   assert.equal(numbersFactory(21), 37);
//   assert.equal(numbersFactory(17), 0);
//   assert.equal(numbersFactory(33), 0);
//   assert.equal(numbersFactory(3125), 55555);
//   assert.equal(numbersFactory(9973), 0);
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }