// https://js.checkio.org/mission/stressful-subject/

function isStressful(subj) {
  if (!subj.match(/[a-z]/)) return true;
  if (subj.endsWith("!!!")) return true;
  if (subj.replace(/[!\.-]/g, '').match(/h+e+l+p+|a+s+a+p+|u+r+g+e+n+t+/i)) return true;
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