// https://js.checkio.org/mission/node-disconnected-users/

function dfs(g, node, destination) {
  if (g[node].v) return false;

  g[node].v = true;
  let neighbors = g[node] ? g[node].n : undefined;
  for (var key in neighbors) {
    if (neighbors[key] === destination) return true; // find it!!
    if (dfs(g, neighbors[key], destination) === true) return true; 
    // if not find it, continue
  }
  return false;
  
}

function IsAdj(net, source, destination) {
  var graph = {};
  let neighbors = [];
  net.map(n => {
    graph[n[0]] = graph[n[0]] ? graph[n[0]] : { v: false, n: [] };
    graph[n[0]].n.push(n[1]);

    graph[n[1]] = graph[n[1]] ? graph[n[1]] : { v: false, n: [] };
    graph[n[1]].n.push(n[0]);
  });
  
  if (graph[source]) // maybe empty
    return dfs(graph, source, destination);
  else 
    return false;
}

function disconnectedUsers(net, users, source, crushes) {
  for (const user in users) { // add network list A <=> A, B <=> B, C <=> C ...
    net.push([user, user]);
  }
  net = net.filter(e => !(crushes.includes(e[0]) || crushes.includes(e[1]))); // remove cite from net(adj)
  
  let cost = 0;
  for (const destination in users) {
    cost += IsAdj(net, source, destination) ? 0 : users[destination];
  }
  return cost;
}

console.log(disconnectedUsers([
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D']
  ], {
    'A': 10,
    'B': 20,
    'C': 30,
    'D': 40
  },
  'A', ['C']));
console.log(disconnectedUsers([
    ['A', 'B'],
    ['B', 'D'],
    ['A', 'C'],
    ['C', 'D']
  ], {
    'A': 10,
    'B': 0,
    'C': 0,
    'D': 40
  },
  'A', ['B']));
console.log(disconnectedUsers([
    ['A', 'B'],
    ['A', 'C'],
    ['A', 'D'],
    ['A', 'E'],
    ['A', 'F']
  ], {
    'A': 10,
    'B': 10,
    'C': 10,
    'D': 10,
    'E': 10,
    'F': 10
  },
  'C', ['A']));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(disconnectedUsers([
//       ['A', 'B'],
//       ['B', 'C'],
//       ['C', 'D']
//     ], {
//       'A': 10,
//       'B': 20,
//       'C': 30,
//       'D': 40
//     },
//     'A', ['C']), 70, "First")
//   assert.equal(disconnectedUsers([
//       ['A', 'B'],
//       ['B', 'D'],
//       ['A', 'C'],
//       ['C', 'D']
//     ], {
//       'A': 10,
//       'B': 0,
//       'C': 0,
//       'D': 40
//     },
//     'A', ['B']), 0, "Second")
//   assert.equal(disconnectedUsers([
//       ['A', 'B'],
//       ['A', 'C'],
//       ['A', 'D'],
//       ['A', 'E'],
//       ['A', 'F']
//     ], {
//       'A': 10,
//       'B': 10,
//       'C': 10,
//       'D': 10,
//       'E': 10,
//       'F': 10
//     },
//     'C', ['A']), 50, "Thirt")
//   console.log("Coding complete? Click 'Check' NOW!");
// }