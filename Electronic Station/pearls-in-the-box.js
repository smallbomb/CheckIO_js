// https://js.checkio.org/mission/box-probability/

function boxProbability(marbles, step, pre_prob = 1) {
  return marbles.split("").reduce((prev, curr) => prev + (curr == "w"), 0);
  let w_Pearl = marbles.split("").filter(c => c === 'w').join("").length;
  let b_Pearl = marbles.length - w_Pearl;
  if (pre_prob === 0.00) 
    return 0;
  else if (step === 1)
    return pre_prob * w_Pearl / marbles.length;

  return boxProbability("w".repeat(w_Pearl ? w_Pearl-1 : 0) + "b".repeat(b_Pearl + 1), step-1, pre_prob * w_Pearl / marbles.length)
       + boxProbability("w".repeat(w_Pearl + 1) + "b".repeat(b_Pearl ? b_Pearl-1 : 0), step-1, pre_prob * b_Pearl / marbles.length);
}

console.log(boxProbability('bbw', 3));
console.log(boxProbability('wwb', 3));
console.log(boxProbability('www', 3));
console.log(boxProbability('bbbb', 1));
console.log(boxProbability('wwbb', 4));
console.log(boxProbability('bwbwbwb', 5));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(boxProbability('bbw', 3), 0.48, "First");
//   assert.equal(boxProbability('wwb', 3), 0.52, "Second");
//   assert.equal(boxProbability('www', 3), 0.56, "Third");
//   assert.equal(boxProbability('bbbb', 1), 0, "Fifth");
//   assert.equal(boxProbability('wwbb', 4), 0.5, "Sixth");
//   assert.equal(boxProbability('bwbwbwb', 5), 0.48, "Seventh");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }