// https://js.checkio.org/mission/weak-point

function weakPoint(matrix) {
  let rows = [], cols = [];
  matrix.map((r, i) => r.map((e, j) => {
    rows[i] = (rows[i] | 0) + e;
    cols[j] = (cols[j] | 0) + e;
  }));
  return [rows.indexOf(Math.min(...rows)), cols.indexOf(Math.min(...cols))];
}

console.log(weakPoint([[7, 2, 7, 2, 8],
                       [2, 9, 4, 1, 7],
                       [3, 8, 6, 2, 4],
                       [2, 5, 2, 9, 1],
                       [6, 6, 5, 4, 5]]));
console.log(weakPoint([[7, 2, 4, 2, 8],
                       [2, 8, 1, 1, 7],
                       [3, 8, 6, 2, 4],
                       [2, 5, 2, 9, 1],
                       [6, 6, 5, 4, 5]]));

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
//                                 [2, 9, 4, 1, 7],
//                                 [3, 8, 6, 2, 4],
//                                 [2, 5, 2, 9, 1],
//                                 [6, 6, 5, 4, 5]]
//                                 ), [3, 3], "Example");
//     assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
//                                 [2, 8, 1, 1, 7],
//                                 [3, 8, 6, 2, 4],
//                                 [2, 5, 2, 9, 1],
//                                 [6, 6, 5, 4, 5]]
//                                 ), [1, 2], "Two weak point");
//     assert.deepEqual(weakPoint([[1, 1, 1],
//                                 [1, 1, 1],
//                                 [1, 1, 1]]
//                                 ), [0, 0], "Top left");
// }