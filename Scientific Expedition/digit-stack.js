// https://js.checkio.org/mission/digit-stack/

function digitStack(commands) {
  let total = 0;
  let stack = [];
  commands.forEach(Command => {
    let [command, arg] = Command.split(" ");
    switch(command) {
      case "PUSH":
        stack.push(+arg);
        break;
      case "POP":
        total += stack.pop() || 0;
        break;
      case "PEEK":
        total += stack[stack.length-1] || 0;
        break;
      default:
        break;
    }
  });
  return total;
}

console.log(digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK",
                        "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]));
console.log(digitStack(["POP", "POP"]));
console.log(digitStack(["PUSH 9", "PUSH 9", "POP"]));
console.log(digitStack([]));
// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK",
//                              "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]),
//                              8, "Example");
//     assert.equal(digitStack(["POP", "POP"]), 0, "pop, pop, zero");
//     assert.equal(digitStack(["PUSH 9", "PUSH 9", "POP"]), 9, "Push the button");
//     assert.equal(digitStack([]), 0, "Nothing");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }