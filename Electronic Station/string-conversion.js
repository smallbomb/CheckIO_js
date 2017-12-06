// https://js.checkio.org/mission/short-string-conversion/

function stepsToConvert(line1, line2) {
  let cost;
  if (line1.length === 0) return line2.length;
  if (line2.length === 0) return line1.length;
  /* test if last characters of the strings match */
  if (line1[line1.length - 1] === line2[line2.length - 1])
    cost = 0;
  else
    cost = 1;

  /* return minimum of delete char from line1, delete char from line2, and delete char from both */
  return Math.min(stepsToConvert(line1.slice(0, line1.length-1), line2) + 1,
                  stepsToConvert(line1, line2.slice(0, line2.length-1)) + 1,
                  stepsToConvert(line1.slice(0, line1.length-1), line2.slice(0, line2.length-1)) + cost);
}

console.log(stepsToConvert('line1', 'line1'));
console.log(stepsToConvert('line1', 'line2'));
console.log(stepsToConvert('line', 'line2'));
console.log(stepsToConvert('ine', 'line2'));
console.log(stepsToConvert('line1', '1enil'));
console.log(stepsToConvert('', ''));
console.log(stepsToConvert('l', ''));
console.log(stepsToConvert('', 'l'));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(stepsToConvert('line1', 'line1'), 0, "eq")
//   assert.equal(stepsToConvert('line1', 'line2'), 1, "2")
//   assert.equal(stepsToConvert('line', 'line2'), 1, "none to 2")
//   assert.equal(stepsToConvert('ine', 'line2'), 2, "need two more")
//   assert.equal(stepsToConvert('line1', '1enil'), 4, "everything is opposite")
//   assert.equal(stepsToConvert('', ''), 0, "two empty")
//   assert.equal(stepsToConvert('l', ''), 1, "one side")
//   assert.equal(stepsToConvert('', 'l'), 1, "another side")
//   console.log("You are good to go!");
// }