// https://js.checkio.org/mission/triangle-angles/solve/

const IsTriangle = function (a, b, c) { 
  let max = Math.max(a, b, c);
  return a + b > max && a + c > max && b + c > max;
}
const degree = (a, b, c) => Math.round(Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 180 / Math.PI);

function triangleAngles(a, b, c){
  if (IsTriangle(a, b, c)) 
    return [degree(a, b, c), degree(b, c, a), degree(c, b, a)].sort((a, b) => a - b);
  return [0, 0, 0]
}

console.log(triangleAngles(5, 4, 3));
console.log(triangleAngles(3, 4, 5));
console.log(triangleAngles(2, 2, 5));


// var assert = require('assert');

// if (!global.is_checking) {
//   assert.deepEqual(triangleAngles(4, 4, 4), [60, 60, 60], "All sides are equal");
//   assert.deepEqual(triangleAngles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
//   assert.deepEqual(triangleAngles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }