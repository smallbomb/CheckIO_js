// https://js.checkio.org/mission/word-pattern/

function checkCommand(pattern, command) {
  let binary = pattern.toString(2);
  if(binary.length > command.length) return false;
  binary = "0".repeat(command.length - binary.length) + binary;
  let letter = "";
  command.split("").forEach(ch => {
    if (isNaN(ch))
      letter += "1";
    else
      letter += "0";
  });
  return binary === letter;
}

console.log(checkCommand(42, "12a0b3e4"));
console.log(checkCommand(101, "ab23b4zz"));
console.log(checkCommand(0, "478103487120470129"));
console.log(checkCommand(127, "Checkio"));
console.log(checkCommand(7, "Hello"));
console.log(checkCommand(8, "a"));
console.log(checkCommand(5, "H2O"));
console.log(checkCommand(42, "C2H5OH"));

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(checkCommand(42, "12a0b3e4"), true, "42 is the answer");
//     assert.equal(checkCommand(101, "ab23b4zz"), false, "one hundred plus one");
//     assert.equal(checkCommand(0, "478103487120470129"), true, "Any number");
//     assert.equal(checkCommand(127, "Checkio"), true, "Uppercase");
//     assert.equal(checkCommand(7, "Hello"), false, "Only full match");
//     assert.equal(checkCommand(8, "a"), false, "Too short command");
//     assert.equal(checkCommand(5, "H2O"), true, "Water");
//     assert.equal(checkCommand(42, "C2H5OH"), false, "Yep, this is not the Answer");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }