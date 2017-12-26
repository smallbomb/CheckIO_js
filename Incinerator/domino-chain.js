// https://js.checkio.org/mission/domino-chain/

function odd_endpoint(edges) {
  let odd_cnt = 0;
  let endpoint = 0;
  for (let i = 0; i <= 6; i++) {
    if (edges[i].reduce((a, b) => a + b) % 2 === 1) {
      odd_cnt++;
      endpoint = i;
    }
  }
  return [odd_cnt, endpoint];
}

function count_Eulerian_path(edges, endpoint) {
  if (edges.every(_ => _.every(e => e === 0))) return 1;

  let array = [];
  for (let nextpoint = 0; nextpoint < edges[endpoint].length; nextpoint++) {
    if (edges[endpoint][nextpoint] !== 0) {
      let nextedges = edges.map(_ => _.map(e => e));
      nextedges[endpoint][nextpoint] = 0;
      nextedges[nextpoint][endpoint] = 0;
      array.push(count_Eulerian_path(nextedges, nextpoint));
    }
  }
  return array.length ? array.reduce((a, b) => a + b) : 0;  
}

function dominoChain(tiles) {
  let edges = new Array(7); // 0,1,...,6 
  for (let i = 0 ; i <= 6; i++) 
    edges[i] = [0, 0, 0, 0, 0, 0, 0];
  tiles.split(", ").map(e => (edges[e[0]][e[2]] += 1, edges[e[2]][e[0]] += 1));
  
  let [odd_cnt, endpoint] = odd_endpoint(edges);
  if (odd_cnt === 0) { // circle
    let result = 0;
    for (let i = 0; i <= 6; i++) // calc every endpoint;
      result += count_Eulerian_path(edges, i);
    return result / 2; // because of circle 
  }
  else if (odd_cnt === 2) // isn't circle, just one time
    return count_Eulerian_path(edges, endpoint);
  else
    return 0;
}

console.log(dominoChain("0-2, 0-5, 1-5, 1-3, 5-5"));
console.log(dominoChain("1-5, 2-5, 3-5, 4-5, 3-4"));
console.log(dominoChain("0-5, 1-5, 2-5, 3-5, 4-5, 3-4"));
console.log(dominoChain("0-1, 0-2, 1-3, 1-2, 3-4, 2-4"));
console.log(dominoChain("0-1, 0-2, 1-3, 1-2, 3-4, 2-4, 3-0, 0-4"));
console.log(dominoChain("1-2, 2-2, 2-3, 3-3, 3-1"));
console.log(dominoChain("1-4, 3-4, 0-4, 0-5, 4-5, 2-4, 2-5"));
console.log(dominoChain("1-4, 1-5, 0-2, 1-6, 4-6, 4-5, 5-6"));
console.log(dominoChain("1-2, 2-3, 2-4, 3-4, 2-5, 2-6, 5-6"));
console.log(dominoChain("1-2, 2-3, 3-1, 4-5, 5-6, 6-4"));
console.log(dominoChain("1-2, 1-4, 1-5, 1-6, 1-1, 2-5, 4-6"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(dominoChain("0-2, 0-5, 1-5, 1-3, 5-5"), 1);
//   assert.equal(dominoChain("1-5, 2-5, 3-5, 4-5, 3-4"), 2);
//   assert.equal(dominoChain("0-5, 1-5, 2-5, 3-5, 4-5, 3-4"), 0);
//   assert.equal(dominoChain("0-1, 0-2, 1-3, 1-2, 3-4, 2-4"), 6);
//   assert.equal(dominoChain("0-1, 0-2, 1-3, 1-2, 3-4, 2-4, 3-0, 0-4"), 0);
//   assert.equal(dominoChain("1-2, 2-2, 2-3, 3-3, 3-1"), 5);
//   assert.equal(dominoChain("1-4, 3-4, 0-4, 0-5, 4-5, 2-4, 2-5"), 0);
//   assert.equal(dominoChain("1-4, 1-5, 0-2, 1-6, 4-6, 4-5, 5-6"), 0);
//   assert.equal(dominoChain("1-2, 2-3, 2-4, 3-4, 2-5, 2-6, 5-6"), 8);
//   assert.equal(dominoChain("1-2, 2-3, 3-1, 4-5, 5-6, 6-4"), 0);
//   assert.equal(dominoChain("1-2, 1-4, 1-5, 1-6, 1-1, 2-5, 4-6"), 28);
//   console.log("Basic tests passed.");
// }