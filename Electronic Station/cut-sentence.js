// https://js.checkio.org/mission/cut-sentence/

function cutSentence(line, length) {
  if (line.length < length) return line;
  let cutSentence = "";
  let lastindex = line.lastIndexOf(" ", length);
  return lastindex >= 0 ? line.slice(0, lastindex) + "..." : "...";

  // if (line.length > length) {
  //   return line.slice(0, length + 1).replace(/ *[^ ]*$/, '...');
  // }
  // else {
  //   return line;
  // }
}

console.log(cutSentence("Hi my name is Alex", 8));
console.log(cutSentence("Hi my name is Alex", 4));
console.log(cutSentence("Hi my name is Alex", 20));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(cutSentence("Hi my name is Alex", 8), "Hi my...", "First")
//   assert.equal(cutSentence("Hi my name is Alex", 4), "Hi...", "Second")
//   assert.equal(cutSentence("Hi my name is Alex", 20), "Hi my name is Alex", "Third")
//   console.log("Done! Do you like it? Go Check it!");
// }