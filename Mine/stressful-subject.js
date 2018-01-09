// https://js.checkio.org/mission/stressful-subject/

function isStressful(subj) {
  let temp_str = subj.slice();
  if (!temp_str.match(/[a-z]/)) return true;
  if (temp_str.endsWith("!!!")) return true;
  temp_str = temp_str.replace(/[!\.-]/g, '');
  if (temp_str.match(/h+e+l+p+|a+s+a+p+|u+r+g+e+n+t+/i)) return true;
  return false;
}

console.log(isStressful("Hi"));
console.log(isStressful("I neeed HELP"));
console.log(isStressful("h!e!l!p"));
// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(isStressful("Hi"), false, "First")
//   assert.equal(isStressful("I neeed HELP"), true, "Second")
//   console.log("Done! Go Check it!");
// }