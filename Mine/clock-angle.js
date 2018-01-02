// https://js.checkio.org/mission/clock-angle/

const angle_per_hour = 360 / 12;
const angle_per_minute = 360 / 60;
const hourhandangle_per_minute = angle_per_hour / 60;

function clockAngle(time) {
  let [hour, minute] = time.split(":");
  hour = hour % 12;
  return Math.min(Math.abs((hour * angle_per_hour + minute * hourhandangle_per_minute) - (minute * angle_per_minute)),
            360 - Math.abs((hour * angle_per_hour + minute * hourhandangle_per_minute) - (minute * angle_per_minute)));
}

console.log(clockAngle("02:30"));
console.log(clockAngle("13:42"));
console.log(clockAngle("01:42"));
console.log(clockAngle("01:43"));
console.log(clockAngle("00:00"));
console.log(clockAngle("12:01"));
console.log(clockAngle("18:00"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(clockAngle("02:30"), 105, "02:30");
//   assert.equal(clockAngle("13:42"), 159, "13:42");
//   assert.equal(clockAngle("01:42"), 159, "01:42");
//   assert.equal(clockAngle("01:43"), 153.5, "01:43");
//   assert.equal(clockAngle("00:00"), 0, "Zero");
//   assert.equal(clockAngle("12:01"), 5.5, "Little later");
//   assert.equal(clockAngle("18:00"), 180, "Opposite");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }