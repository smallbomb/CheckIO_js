// https://js.checkio.org/mission/merge-intervals/

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

function mergeIntervals(intervals) {
  let set = new Set();
  for (const e of intervals) {
    for (let i = e[0]; i <= e[1]; i++)
      set.add(i);
  }
  return createIntervals(Array.from(set));
}

console.log(mergeIntervals([[1, 4], [2, 6], [8, 10], [12, 19]]));
console.log(mergeIntervals([[1, 12], [2, 3], [4, 7]]));
console.log(mergeIntervals([[1, 5], [6, 10],[10, 15], [17, 20]]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.deepEqual(mergeIntervals([[1, 4], [2, 6], [8, 10], [12, 19]]), [[1, 6], [8, 10], [12, 19]], "First")
//   assert.deepEqual(mergeIntervals([[1, 12], [2, 3], [4, 7]]), [[1, 12]], "Second")
//   assert.deepEqual(mergeIntervals([[1, 5], [6, 10],[10, 15], [17, 20]]), [[1, 15], [17, 20]], "Third")
//   console.log("Done! Go ahead and Check IT");
// }