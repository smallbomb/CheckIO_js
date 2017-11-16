// https://js.checkio.org/mission/count-neighbours/

function countNeighbours(data, row, col) {
  let count = 0;
  for (let i = row - 1; i <= row + 1; i++)
    for (let j = col - 1; j <= col + 1; j++)
      if (!(i === row && j === col) && data[i] && data[i][j] === 1) 
        count++;
  return count;
}

console.log(countNeighbours([[1, 0, 0, 1, 0],
                             [0, 1, 0, 0, 0],
                             [0, 0, 1, 0, 1],
                             [1, 0, 0, 0, 0],
                             [0, 0, 1, 0, 0]], 1, 2));

console.log(countNeighbours([[1, 0, 0, 1, 0],
                             [0, 1, 0, 0, 0],
                             [0, 0, 1, 0, 1],
                             [1, 0, 0, 0, 0],
                             [0, 0, 1, 0, 0]], 0, 0));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(countNeighbours([[1, 0, 0, 1, 0],
//                                 [0, 1, 0, 0, 0],
//                                 [0, 0, 1, 0, 1],
//                                 [1, 0, 0, 0, 0],
//                                 [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");
//   assert.equal(countNeighbours([[1, 0, 0, 1, 0],
//                                 [0, 1, 0, 0, 0],
//                                 [0, 0, 1, 0, 1],
//                                 [1, 0, 0, 0, 0],
//                                 [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");
//   assert.equal(countNeighbours([[1, 1, 1],
//                                 [1, 1, 1],
//                                 [1, 1, 1]], 0, 2), 3, "Dense corner");
//   assert.equal(countNeighbours([[0, 0, 0],
//                                 [0, 1, 0],
//                                 [0, 0, 0]], 1, 1), 0, "Single");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }