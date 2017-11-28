// https://js.checkio.org/mission/secret-message/

function findMessage(data) {
  return data.replace(/[^A-Z]/g, "");
}

console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."));
console.log(findMessage("hello world!"));
console.log(findMessage("HELLO WORLD!!!"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
//   assert.equal(findMessage("hello world!"), "", "Nothing");
//   assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }