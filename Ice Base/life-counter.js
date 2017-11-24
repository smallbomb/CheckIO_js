// https://js.checkio.org/mission/life-counter/

function neighbours(key) {
  key = JSON.parse(key);
  let neighbours = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  return neighbours.map(c => "[" + (c[0] + key[0]) + "," + (c[1] + key[1]) + "]")
}

function nextCellStatus(lifeTracker) {
  let cells = {};
  for (let coordinate in lifeTracker) {
    for (let c of neighbours(coordinate))
      cells[c] = (cells[c] | 0) + 1;
  }
  return cells;
}

function StepOne(lifeTracker) {
  let nextLifeTracker = {};
  let cells = nextCellStatus(lifeTracker);
  for (let cell in cells) {
    let n = cells[cell];
    if (n === 3 || (n === 2 && lifeTracker[cell]))
      nextLifeTracker[cell] = "live";
  }
  return nextLifeTracker;
}

function lifeCounter(marbles, step) {
  let lifeTracker = {};
  marbles.map((_, row) => _.map((e, col) => { e === 1 ? lifeTracker["[" + row + "," + col + "]"] = "live" : undefined }));
  for (let i = 0; i < step; i++)
    lifeTracker = StepOne(lifeTracker);
  return Object.keys(lifeTracker).length;
}

console.log(lifeCounter([
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0]
], 4));
console.log(lifeCounter([
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0]], 15));

// var assert = require('assert');

// if (!global.is_checking) {
// assert.equal(lifeCounter([
//   [0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0, 0]
//   ], 4), 15, "Example");
//   assert.equal(lifeCounter([
//     [0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0, 0]
//   ], 15), 14, "Little later");
//   assert.equal(lifeCounter([
//     [0, 1, 0],
//     [0, 0, 1],
//     [1, 1, 1]
//   ], 50), 5, "Glider");
//   assert.equal(lifeCounter([
//     [1, 1, 0, 1, 1],
//     [1, 1, 0, 1, 1],
//     [0, 0, 0, 0, 0],
//     [1, 1, 0, 1, 1],
//     [1, 1, 0, 1, 1]
//   ], 100), 16, "Stones");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }