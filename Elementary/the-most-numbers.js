// https://js.checkio.org/mission/most-numbers/

function mostNumbers(...numbers) {
  return numbers.length ? Math.max(...numbers) - Math.min(...numbers) : 0;
}
console.log(mostNumbers(1, 2, 3));
console.log(mostNumbers(5, -5));
console.log(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5) * 1000));
console.log(mostNumbers());

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(mostNumbers(1, 2, 3), 2, "3-1=2");
//   assert.equal(mostNumbers(5, -5), 10, "5-(-5)=10");
//   assert.equal(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5) * 1000), 12400, "10.2-(-2.2)=12.4");
//   assert.equal(mostNumbers(), 0, "Empty");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }