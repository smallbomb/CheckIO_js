// https://js.checkio.org/mission/radiation-search/

function addgroup(data, num, row, col, group) {
  if (data[row] && data[row][col] && data[row][col].group === 0 && data[row][col].value === num) {
    data[row][col].group = group;
    return addgroup(data, num, row-1, col, group) 
    + addgroup(data, num, row+1, col, group) 
    + addgroup(data, num, row, col-1, group) 
    + addgroup(data, num, row, col+1, group) 
    + 1 ;
  }
  return 0;
}

function radiationSearch(data) {
  // group 0 was not set, 1~n group number
  let group = 0;
  let max = 0, maxc = 0;
  data = data.map(_ => _.map(e => { return { value: e, group: 0 } }))
  data.map((_, row, arr) => _.map((e, col) => {
    if (arr[row][col].group === 0) {
      group++;
      let group_count = addgroup(arr, arr[row][col].value, row, col, group);
      if (group_count > max)[max, maxc] = [group_count, arr[row][col].value];
    }
  }));
  return [max, maxc];
}

// console.log(radiationSearch([[1, 2, 3, 4, 5],
//                              [1, 1, 1, 2, 3],
//                              [1, 1, 1, 2, 2],
//                              [1, 2, 2, 2, 1],
//                              [1, 1, 1, 1, 1]]));
console.log(radiationSearch([[2, 1, 2, 2, 2, 4],
                             [2, 5, 2, 2, 2, 2],
                             [2, 5, 4, 2, 2, 2],
                             [2, 5, 2, 2, 4, 2],
                             [2, 4, 2, 2, 2, 2],
                             [2, 2, 4, 4, 2, 2]]));
// var assert = require('assert');

// if (!global.is_checking) {
//     assert.deepEqual(radiationSearch([
//         [1, 2, 3, 4, 5],
//         [1, 1, 1, 2, 3],
//         [1, 1, 1, 2, 2],
//         [1, 2, 2, 2, 1],
//         [1, 1, 1, 1, 1]
//     ]), [14, 1], "14 of 1");
//     assert.deepEqual(radiationSearch([
//         [2, 1, 2, 2, 2, 4],
//         [2, 5, 2, 2, 2, 2],
//         [2, 5, 4, 2, 2, 2],
//         [2, 5, 2, 2, 4, 2],
//         [2, 4, 2, 2, 2, 2],
//         [2, 2, 4, 4, 2, 2]
//     ]), [19, 2], "19 of 2");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }
