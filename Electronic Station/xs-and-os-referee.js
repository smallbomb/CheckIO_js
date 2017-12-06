// https://js.checkio.org/mission/x-o-referee/

function xoReferee(data) {
  let winner = "D";
  winner = data[0][0] !== "." && data[0][0] === data[0][1] && data[0][0] === data[0][2] ? data[0][0] : winner;
  winner = data[1][0] !== "." && data[1][0] === data[1][1] && data[1][0] === data[1][2] ? data[1][0] : winner;
  winner = data[2][0] !== "." && data[2][0] === data[2][1] && data[2][0] === data[2][2] ? data[2][0] : winner;
  winner = data[0][0] !== "." && data[0][0] === data[1][0] && data[0][0] === data[2][0] ? data[0][0] : winner;
  winner = data[0][1] !== "." && data[0][1] === data[1][1] && data[0][1] === data[2][1] ? data[0][1] : winner;
  winner = data[0][2] !== "." && data[0][2] === data[1][2] && data[0][2] === data[2][2] ? data[0][2] : winner;

  winner = data[0][0] !== "." && data[0][0] === data[1][1] && data[0][0] === data[2][2] ? data[0][0] : winner;
  winner = data[0][2] !== "." && data[0][2] === data[1][1] && data[0][2] === data[2][0] ? data[0][2] : winner;
  return winner;
}

console.log(xoReferee(["X.O",
                       "XX.",
                       "XOO"]));
console.log(xoReferee(["OO.", 
                       "XOX",
                       "XOX"]));
console.log(xoReferee(["OOX", 
                       "XXO",
                       "OXX"]));
console.log(xoReferee(["O.X", 
                       "XX.", 
                       "XOO"]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(xoReferee([
//     "X.O",
//     "XX.",
//     "XOO"
//   ]), "X", "Xs wins");

//   assert.equal(xoReferee([
//     "OO.",
//     "XOX",
//     "XOX"
//   ]), "O", "Os wins");

//   assert.equal(xoReferee([
//     "OOX",
//     "XXO",
//     "OXX"
//   ]), "D", "Draw");

//   assert.equal(xoReferee([
//     "O.X",
//     "XX.",
//     "XOO"
//   ]), "X", "Xs wins again");

//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }