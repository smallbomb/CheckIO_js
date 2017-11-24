// https://js.checkio.org/mission/matrix-transpose/

function transposeMatrix(data) {
  let transpose_data = [];
  data.map(_ => _.map((e, j) => {
    transpose_data[j] = transpose_data[j] || [];
    transpose_data[j].push(e);
  }));
  return transpose_data;
}

console.log(transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transposeMatrix([[1, 4, 3], [8, 2, 6], [7, 8, 3], [4, 9, 6], [7, 8, 1]]));

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.deepEqual(transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]], "Square matrix");
//     assert.deepEqual(transposeMatrix([[1, 4, 3], [8, 2, 6], [7, 8, 3], [4, 9, 6], [7, 8, 1]]), [[1, 8, 7, 4, 7], [4, 2, 8, 9, 8], [3, 6, 3, 6, 1]], "Rectangle matrix");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }
