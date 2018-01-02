// https://js.checkio.org/mission/node-subnetworks/

function subnetworks(net, crushes) {
  let endpoint = {};
  net.map(e => {
    endpoint[e[0]] = true;
    endpoint[e[1]] = true;
  });
  net = net.filter(e => !(crushes.includes(e[0]) || crushes.includes(e[1]))); // remove cite from net(adj)
  crushes.map(e => delete endpoint[e]); // remove cite from endpoint
  return Object.keys(endpoint).length - net.length; // remain endpoint count - remain adj count
}

console.log(subnetworks([
  ['A', 'B'],
  ['B', 'C'],
  ['C', 'D']
], ['B']));
console.log(subnetworks([
  ['A', 'B'],
  ['A', 'C'],
  ['A', 'D'],
  ['D', 'F']
], ['A']));
console.log(subnetworks([
  ['A', 'B'],
  ['B', 'C'],
  ['C', 'D']
], ['C', 'D']));


// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(subnetworks([
//     ['A', 'B'],
//     ['B', 'C'],
//     ['C', 'D']
//   ], ['B']), 2, "First")
//   assert.equal(subnetworks([
//     ['A', 'B'],
//     ['A', 'C'],
//     ['A', 'D'],
//     ['D', 'F']
//   ], ['A']), 3, "Second")
//   assert.equal(subnetworks([
//     ['A', 'B'],
//     ['B', 'C'],
//     ['C', 'D']
//   ], ['C', 'D']), 1, "Third")
//   console.log("Done! Check button is waiting for you!");
// }