// https://js.checkio.org/mission/verify-anagrams/

function housePassword(data) {
  if (data.length >= 10 && data.match(/[a-z]/g) && data.match(/[A-Z]/g) && data.match(/[0-9]/g))
    return true;
  return false;
}

console.log(housePassword("A1213pokl"));
console.log(housePassword("bAse730onE4"));
console.log(housePassword("asasasasasasasaas"));
console.log(housePassword("QWERTYqwerty"));
console.log(housePassword("123456123456"));
console.log(housePassword("QwErTy911poqqqq"));

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(housePassword("A1213pokl"), false, "1st example");
//     assert.equal(housePassword("bAse730onE4"), true, "2nd example");
//     assert.equal(housePassword("asasasasasasasaas"), false, "3rd example");
//     assert.equal(housePassword("QWERTYqwerty"), false, "4th example");
//     assert.equal(housePassword("123456123456"), false, "5th example");
//     assert.equal(housePassword("QwErTy911poqqqq"), true, "6th example");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }