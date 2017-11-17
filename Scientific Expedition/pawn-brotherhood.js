// https://js.checkio.org/mission/pawn-brotherhood/

function safePawns(data) {
  let count = 0;
  data.map(Pawn => {
    let backPawn1 = String.fromCharCode(Pawn.charCodeAt(0) + 1) + (Pawn[1] - 1);
    let backPawn2 = String.fromCharCode(Pawn.charCodeAt(0) - 1) + (Pawn[1] - 1);
    if (data.indexOf(backPawn1) >= 0 || data.indexOf(backPawn2) >= 0)
      count++;
  });
  return count;
}

console.log(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]));
console.log(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
//   assert.equal(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }