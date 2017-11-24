// https://js.checkio.org/mission/calls-home/

function totalCost(calls) {
  let everday_call_minutes = {};
  let totalCost = 0;
  calls.map(call => {
    let [date, time, calling_sec] = call.split(" ");
    everday_call_minutes[date] = (everday_call_minutes[date] | 0) + Math.ceil(calling_sec/60);
  });
  for (const key in everday_call_minutes) totalCost += everday_call_minutes[key] > 100 ? everday_call_minutes[key] * 2 - 100 : everday_call_minutes[key]; 
  return totalCost;
}

console.log(totalCost(["2014-01-01 01:12:13 181",
                       "2014-01-02 20:11:10 600",
                       "2014-01-03 01:12:13 6009",
                       "2014-01-03 12:13:55 200"]));
console.log(totalCost(["2014-02-05 01:00:00 1",
                       "2014-02-05 02:00:00 1",
                       "2014-02-05 03:00:00 1",
                       "2014-02-05 04:00:00 1"]));
console.log(totalCost(["2014-02-05 01:00:00 60",
                       "2014-02-05 02:00:00 60",
                       "2014-02-05 03:00:00 60",
                       "2014-02-05 04:00:00 6000"]));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(totalCost(["2014-01-01 01:12:13 181",
//     "2014-01-02 20:11:10 600",
//     "2014-01-03 01:12:13 6009",
//     "2014-01-03 12:13:55 200"
//   ]), 124, "Base example");
//   assert.equal(totalCost(["2014-02-05 01:00:00 1",
//     "2014-02-05 02:00:00 1",
//     "2014-02-05 03:00:00 1",
//     "2014-02-05 04:00:00 1"
//   ]), 4, "Short calls but money...");
//   assert.equal(totalCost(["2014-02-05 01:00:00 60",
//     "2014-02-05 02:00:00 60",
//     "2014-02-05 03:00:00 60",
//     "2014-02-05 04:00:00 6000"
//   ]), 106, "Precise calls");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }