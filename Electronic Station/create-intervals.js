// https://js.checkio.org/mission/create-intervals

function createIntervals(data) {
  let ret = [];
  let start = undefined, end = undefined;
  data.sort((a, b) => a - b).map((e, i, arr) => {
    if (!start)
      start = e, end = e;
    if (arr[i + 1] && arr[i + 1] === e + 1)
      end = e + 1;
    else {
      ret.push([start, end]);
      start = undefined, end = undefined;
    }
  });
  return ret;
}

console.log(createIntervals([1, 2, 3, 4, 5, 7, 8, 12]));
console.log(createIntervals([1, 2, 3, 6, 7, 8, 4, 5]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.deepEqual(createIntervals([1, 2, 3, 4, 5, 7, 8, 12]), [[1, 5], [7, 8], [12, 12]], "First")
//   assert.deepEqual(createIntervals([1, 2, 3, 6, 7, 8, 4, 5]), [[1, 8]], "Second")
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }