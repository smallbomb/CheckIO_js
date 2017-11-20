// https://js.checkio.org/mission/friendly-number/

function friendlyNumber(number, { base = 1000, decimals = 0, suffix = '', powers = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'] } = {}) {
  let count = 0;
  for (; Math.abs(number) >= base && count < powers.length - 1; number /= base) count++;
  let ret = decimals ? number.toFixed(decimals) : number > 0 ? Math.floor(number) : Math.round(number);
  return ret + powers[count] + suffix;
} 
console.log(friendlyNumber(255000000000,{"powers":["","k","M"]}));
console.log(friendlyNumber(10240));
console.log(friendlyNumber(12341234, {decimals: 1}));
console.log(friendlyNumber(12461, {decimals: 1}));
console.log(friendlyNumber(1024000000, {base: 1024, suffix: 'iB'}));


// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(friendlyNumber(102), '102', "102");
//   assert.equal(friendlyNumber(10240), '10k', "10k");
//   assert.equal(friendlyNumber(12341234, {decimals: 1}), '12.3M', "12.3M");
//   assert.equal(friendlyNumber(12461, {decimals: 1}), '12.5k', "12.5k");
//   assert.equal(friendlyNumber(1024000000, {base: 1024, suffix: 'iB'}), '976MiB', "976MiB");
//   console.log("Tests and earn cool rewards!");
// }