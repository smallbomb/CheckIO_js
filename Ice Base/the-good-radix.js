// https://js.checkio.org/mission/good-radix/

function goodRadix(number) {
  let number_arr = number.split("").map(ch => ch.match(/[A-Z]/) ? ch.charCodeAt(0) - 55 : parseInt(ch));
  let k = Math.max(...number_arr) + 1;
  for (; k < 37; k++) {
    let n = parseInt(number, k);
    if (n % (k - 1) === 0)
      return k;
  }
  return 0;
}

console.log(goodRadix("18"));
console.log(goodRadix("1010101011"));
console.log(goodRadix("222"));
console.log(goodRadix("A23B"));
console.log(goodRadix("IDDQD"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(goodRadix("18"), 10, "Simple decimal");
//   assert.equal(goodRadix("1010101011"), 2, "Any number is divisible by 1");
//   assert.equal(goodRadix("222"), 3, "3rd test");
//   assert.equal(goodRadix("A23B"), 14, "It's not a hex");
//   assert.equal(goodRadix("IDDQD"), 0, "k is not exist");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }