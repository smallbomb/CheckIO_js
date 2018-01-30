// https://js.checkio.org/mission/bigger-price/

function biggerPrice(limit, data) {
  return data.slice(0).sort((a, b) => b.price - a.price).slice(0, limit);
}

console.log(biggerPrice(2, [
  { "name": "bread", "price": 100 },
  { "name": "wine", "price": 138 },
  { "name": "meat", "price": 15 },
  { "name": "water", "price": 1 }
]));
console.log(biggerPrice(1, [
  { "name": "pen", "price": 5 },
  { "name": "whiteboard", "price": 170 }
]));

// var assert = require('assert');

// if (!global.is_checking) {
//   console.log('Example:')
//   console.log(biggerPrice(2, [
//     { "name": "bread", "price": 100 },
//     { "name": "wine", "price": 138 },
//     { "name": "meat", "price": 15 },
//     { "name": "water", "price": 1 }
//   ]))

//   assert.deepEqual(biggerPrice(2, [
//     { "name": "bread", "price": 100 },
//     { "name": "wine", "price": 138 },
//     { "name": "meat", "price": 15 },
//     { "name": "water", "price": 1 }
//   ]), [
//       { "name": "wine", "price": 138 },
//       { "name": "bread", "price": 100 }
//     ])
//   assert.deepEqual(biggerPrice(1, [
//     { "name": "pen", "price": 5 },
//     { "name": "whiteboard", "price": 170 }
//   ]), [{ "name": "whiteboard", "price": 170 }])
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }