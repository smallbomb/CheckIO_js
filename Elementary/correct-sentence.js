// https://js.checkio.org/mission/correct-sentence

function correctSentence(text) {
  return text[0].toUpperCase() + text.substring(1) + (text[text.length - 1] === "." ? "" : ".");
}

console.log(correctSentence("greetings, friends"));
console.log(correctSentence("Greetings, friends"));
console.log(correctSentence("Greetings, friends."));
console.log(correctSentence("hi"));

// var assert = require('assert');

// if (!global.is_checking) {
//   console.log('Example:')
//   console.log(correctSentence("greetings, friends"))

//   // These "asserts" using for self-checking and not for auto-testing
  // assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
  // assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
  // assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
  // assert.equal(correctSentence("hi"), "Hi.")
//   console.log("Coding complete? Click 'Check' to earn cool rewards!");
// }