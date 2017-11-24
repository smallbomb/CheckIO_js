// https://js.checkio.org/mission/letter-queue/

function letterQueue(commands) {
  let queue = [];
  commands.forEach(Commands => {
    let [command, arg] = Commands.split(" ");
    switch(command) {
      case "PUSH":
        queue.push(arg);
        break;
      case "POP":
        queue.shift();
        break;
      default:
        break;
    }
  });
  return queue.join("");
}

console.log(letterQueue(["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]));
console.log(letterQueue(["POP", "POP"]));
console.log(letterQueue(["PUSH H", "PUSH I"]));
console.log(letterQueue([]));
// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(letterQueue(["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]), "DOT", "dot example");
//     assert.equal(letterQueue(["POP", "POP"]), "", "Pop, Pop, empty");
//     assert.equal(letterQueue(["PUSH H", "PUSH I"]), "HI", "Hi!");
//     assert.equal(letterQueue([]), "", "Nothing");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }
