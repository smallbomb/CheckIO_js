// https://js.checkio.org/mission/network-attack/

function capture(data) {
  let node = {};
  let stack = [];
  stack.push(0);
  node[0] = 0;
  while (stack.length) {
    let n = stack.pop();
    for (let i = 0; i < data[n].length; i++) {
      if (n !== i && data[n][i] === 1) {
        if (!node[i] || node[i] > node[n] + data[i][i]) {
          node[i] = node[n] + data[i][i];
          stack.push(i);
        }
      }
    }
  }
  return node[Object.keys(node).reduce(function (a, b) { return node[a] > node[b] ? a : b })];
}

console.log(capture([
  [0, 1, 0, 1, 0, 1],
  [1, 8, 1, 0, 0, 0],
  [0, 1, 2, 0, 0, 1],
  [1, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 3, 1],
  [1, 0, 1, 0, 1, 2]
]));

console.log(capture([
  [0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 0, 0],
  [0, 1, 2, 0, 0, 1],
  [1, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 3, 1],
  [1, 0, 1, 0, 1, 2]
]));

console.log(capture([
  [0, 1, 1],
  [1, 9, 1],
  [1, 1, 9]
]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(capture([
//     [0, 1, 0, 1, 0, 1],
//     [1, 8, 1, 0, 0, 0],
//     [0, 1, 2, 0, 0, 1],
//     [1, 0, 0, 1, 1, 0],
//     [0, 0, 0, 1, 3, 1],
//     [1, 0, 1, 0, 1, 2]
//   ]), 8, "Base example");
//   assert.equal(capture([
//     [0, 1, 0, 1, 0, 1],
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 2, 0, 0, 1],
//     [1, 0, 0, 1, 1, 0],
//     [0, 0, 0, 1, 3, 1],
//     [1, 0, 1, 0, 1, 2]
//   ]), 4, "Low security");
//   assert.equal(capture([
//     [0, 1, 1],
//     [1, 9, 1],
//     [1, 1, 9]
//   ]), 9, "Small");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }