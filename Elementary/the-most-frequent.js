// https://js.checkio.org/mission/the-most-frequent/

function mostFrequent(data) {
  let words = {};
  for (const word of data) {
    words[word] = (words[word] | 0) + 1;
  }
  return Object.keys(words).reduce((a, b) => words[a] >= words[b] ? a : b);
}

console.log(mostFrequent([
  'a', 'b', 'c',
  'a', 'b',
  'a'
]));
console.log(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']));


// var assert = require('assert');

// if (!global.is_checking) {
//   console.log('Example:')
//   console.log(mostFrequent([
//     'a', 'b', 'c',
//     'a', 'b',
//     'a'
//   ]))

//   assert.equal(mostFrequent([
//     'a', 'b', 'c',
//     'a', 'b',
//     'a'
//   ]), 'a')
//   assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }