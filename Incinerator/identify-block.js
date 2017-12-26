// https://js.checkio.org/mission/identify-block/

const shape_T = {1: [[1, -1], [1, 0], [1, 1]], 2: [[1, -1], [1, 0], [2, 0]], 3:[[1, 0], [1, 1], [2, 0]], 4: [[0, 1], [0, 2], [1, 1]]};
const shape_L = {1: [[1, 0], [2, 0], [2, 1]], 2: [[1, -2], [1, -1], [1, 0]], 3:[[0, 1], [1, 1], [2, 1]], 4: [[0, 1], [0, 2], [1, 0]]};
const shape_I = {1: [[0, 1], [0, 2], [0, 3]], 2: [[1, 0], [2, 0], [3, 0]]};
const shape_J = {1: [[1, 0], [2, 0], [2, -1]], 2: [[0, 1], [0, 2], [1, 2]], 3:[[0, 1], [1, 0], [2, 0]], 4: [[1, 0], [1, 1], [1, 2]]};
const shape_O = {1: [[0, 1], [1, 0], [1, 1]]};
const shape_S = {1: [[0, 1], [1, 0], [1, -1]], 2: [[1, 0], [1, 1], [2, 1]]};
const shape_Z = {1: [[0, 1], [1, 1], [1, 2]], 2: [[1, 0], [1, -1], [2, -1]]};

const check_shape = (grids, target_shape) => { 
  let x0, y0;
  grids.map((_, i) => _.map((e, j) => (e === 1 && x0 === undefined && y0 === undefined) ? (x0 = i, y0 = j) : undefined));
  for (const key in target_shape) {
    if (target_shape[key].every(e => grids[x0 + e[0]] && grids[x0 + e[0]][y0 + e[1]] === 1))
      return true;
  }
  return false;
};

function identifyBlock(numbers) {
  /*
  grid(4x4):
  +--+--+--+--+
  |1 |2 |3 |4 |
  +--+--+--+--+
  |5 |6 |7 |8 |
  +--+--+--+--+
  |9 |10|11|12|
  +--+--+--+--+
  |13|14|15|16|
  +--+--+--+--+

  blocks(7 kinds):
  'I'  'J'  'L'  'O'  'S'  'T'  'Z'

   *    *   *    **    **  ***  **
   *    *   *    **   **    *    **
   *   **   **
   *

  */
  let grids = [];
  for (let i = 1 ; i <= 16; i++) {
    grids[Math.ceil(i / 4) - 1] ? undefined : grids[Math.ceil(i / 4) - 1] = [];
    grids[Math.ceil(i / 4) - 1][(i-1) % 4] = 0;
  }
  numbers.map(number => grids[Math.ceil(number / 4) - 1][(number - 1) % 4] = 1);

  if (check_shape(grids, shape_I)) return "I";
  else if (check_shape(grids, shape_J)) return "J";
  else if (check_shape(grids, shape_L)) return "L";
  else if (check_shape(grids, shape_O)) return "O";
  else if (check_shape(grids, shape_S)) return "S";
  else if (check_shape(grids, shape_T)) return "T";
  else if (check_shape(grids, shape_Z)) return "Z";
  else return null;
}

console.log(identifyBlock([10, 13, 14, 15]));
console.log(identifyBlock([1, 5, 9, 6]));
console.log(identifyBlock([2, 3, 7, 11]));
console.log(identifyBlock([4, 8, 12, 16]));
console.log(identifyBlock([3, 1, 5, 8]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(identifyBlock([10, 13, 14, 15]), 'T', 'T');
//   assert.equal(identifyBlock([1, 5, 9, 6]), 'T', 'T');
//   assert.equal(identifyBlock([2, 3, 7, 11]), 'L', 'L');
//   assert.equal(identifyBlock([4, 8, 12, 16]), 'I', 'I');
//   assert.equal(identifyBlock([3, 1, 5, 8]), null, 'null');
//   console.log('"Run" is good. How is "Check"?');
// }