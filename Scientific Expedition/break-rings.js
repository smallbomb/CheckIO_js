// https://js.checkio.org/mission/break-rings/

// by author Sim0000  
function breakRings(rings) {
  function removeRing(rings, ring) {
    var result = []
    for (var r of rings) {
      if (r[0] != ring && r[1] != ring) result.push(r)
    }
    return result
  }
  if (rings.length == 0) return 0
  var n0 = breakRings(removeRing(rings, rings[0][0])) + 1
  var n1 = breakRings(removeRing(rings, rings[0][1])) + 1
  return Math.min(n0, n1)
}

console.log(breakRings([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [4, 6]]));
console.log(breakRings([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]));
console.log(breakRings([[5, 6], [4, 5], [3, 4], [3, 2], [2, 1], [1, 6]]));
console.log(breakRings([[8, 9], [1, 9], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 7]]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(breakRings([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [4, 6]]), 3, "Example");
//   assert.equal(breakRings([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]), 3, "All to all");
//   assert.equal(breakRings([[5, 6], [4, 5], [3, 4], [3, 2], [2, 1], [1, 6]]), 3, "Chain");
//   assert.equal(breakRings([[8, 9], [1, 9], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [8, 7]]), 5, "Long chain");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }