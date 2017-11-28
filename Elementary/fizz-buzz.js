// https://js.checkio.org/mission/fizz-buzz/

function fizzBuzz(data) {
  let ret = "";
  if (data % 3 === 0) ret += "Fizz "
  if (data % 5 === 0) ret += "Buzz"
  return ret.trim() || data + "" 
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(6));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
//     assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
//     assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
//     assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }
