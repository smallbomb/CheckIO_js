// https://js.checkio.org/mission/first-word/

function firstWord(a) {
  return a.match(/[a-zA-Z']+/)[0];
}

console.log(firstWord("Hello world"));
console.log(firstWord(" a word "));
console.log(firstWord("don't touch it"));
console.log(firstWord("greetings, friends"));
console.log(firstWord("... and so on ..."));
console.log(firstWord("hi"));

// var assert = require('assert');

// if (!global.is_checking) {
//   console.log('Example:')
//   console.log(firstWord("Hello world"))

//   // These "asserts" using for self-checking and not for auto-testing
  // assert.equal(firstWord("Hello world"), "Hello")
  // assert.equal(firstWord(" a word "), "a")
  // assert.equal(firstWord("don't touch it"), "don't")
  // assert.equal(firstWord("greetings, friends"), "greetings")
  // assert.equal(firstWord("... and so on ..."), "and")
  // assert.equal(firstWord("hi"), "hi")
//   console.log("Coding complete? Click 'Check' to earn cool rewards!");
// }