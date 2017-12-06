// https://js.checkio.org/mission/counting-tiles/

function countingTiles(radius) {
  let solid = 0;
  let partial = 0;
  for (let x = 1; x <= Math.ceil(radius); x++) {
    for (let y = Math.ceil(radius); y > 0; y--) {
      if (Math.sqrt(x * x + y * y) <= radius) {
        solid += y;
        break;
      }
      else if (Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1)) <= radius) {
        partial++;
      }
    }
  }
  return [solid * 4, partial * 4];
}

console.log(countingTiles(2));
console.log(countingTiles(3));
console.log(countingTiles(2.1));
console.log(countingTiles(2.5));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.deepEqual(countingTiles(2), [4, 12], "N=2");
//   assert.deepEqual(countingTiles(3), [16, 20], "N=3");
//   assert.deepEqual(countingTiles(2.1), [4, 20], "N=2.1");
//   assert.deepEqual(countingTiles(2.5), [12, 20], "N=2.5");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }