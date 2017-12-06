// https://js.checkio.org/mission/broken-clock/

function brokenClock(startingTime, wrongTime, errorDescription) {
  let[offset, offset_type, at, everytime, everytime_tpye] = errorDescription.split(" ");
  offset = offset_type.includes("hour") ? +offset * 3600 : offset_type.includes("minute") ? +offset * 60 : +offset;
  everytime = everytime_tpye.includes("hour") ? +everytime * 3600 : everytime_tpye.includes("minute") ? +everytime * 60 : +everytime;
  
  startingTime = new Date("1970-01-01 " + startingTime).getTime()/1000;
  wrongTime = new Date("1970-01-01 " + wrongTime).getTime()/1000;

  let newdate = new Date((wrongTime - (offset * (wrongTime - startingTime) / (offset + everytime))) * 1000);

  let hours = "0" + newdate.getHours();
  let minutes = "0" + newdate.getMinutes();
  let seconds = "0" + newdate.getSeconds();
  let formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return [formattedTime];
}

console.log(brokenClock('00:00:00', '00:00:15', '+5 seconds at 10 seconds'));
console.log(brokenClock('06:10:00', '06:10:15', '-5 seconds at 10 seconds'));
console.log(brokenClock('13:00:00', '14:01:00', '+1 second at 1 minute'));
console.log(brokenClock('01:05:05', '04:05:05', '-1 hour at 2 hours'));
console.log(brokenClock('00:00:00', '00:00:30', '+2 seconds at 6 seconds'));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(brokenClock('00:00:00', '00:00:15', '+5 seconds at 10 seconds'), '00:00:10', "First example");
//   assert.equal(brokenClock('06:10:00', '06:10:15', '-5 seconds at 10 seconds'), '06:10:30', "Second example");
//   assert.equal(brokenClock('13:00:00', '14:01:00', '+1 second at 1 minute'), '14:00:00', "Third example");
//   assert.equal(brokenClock('01:05:05', '04:05:05', '-1 hour at 2 hours'), '07:05:05', "Fourth example");
//   assert.equal(brokenClock('00:00:00', '00:00:30', '+2 seconds at 6 seconds'), '00:00:22', "Fifth example");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }