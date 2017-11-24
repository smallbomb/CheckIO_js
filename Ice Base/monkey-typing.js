// https://js.checkio.org/mission/monkey-typing/

function countWords(text, words) {
  let count = 0;
  words.map(e => text.toLowerCase().indexOf(e) >= 0 ? count++ : undefined);
  return count;
}

console.log(countWords("How aresjfhdskfhskd you?", ["how", "are", "you", "hello"]));
console.log(countWords("Bananas, give me bananas!!!", ["banana", "bananas"]));
console.log(countWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", ["sum", "hamlet", "infinity", "anything"]));

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(countWords("How aresjfhdskfhskd you?", ["how", "are", "you", "hello"]), 3, "Example");
//     assert.equal(countWords("Bananas, give me bananas!!!", ["banana", "bananas"]), 2, "BANANAS!");
//     assert.equal(countWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", ["sum", "hamlet", "infinity", "anything"]), 1, "Weird text");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }