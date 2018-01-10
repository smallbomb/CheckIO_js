// https://js.checkio.org/mission/strange-curcuit/

function NextWalk(grid, direction, x, y) {
  let newdirection = direction;
  if (direction === "north") {
    y++;
    if (!grid[[x + 1, y]]) newdirection = "east"; // turn right
  }
  else if (direction === "east") {
    x++;
    if (!grid[[x, y - 1]]) newdirection = "south"; // turn right
  }
  else if (direction === "south") {
    y--;
    if (!grid[[x - 1, y]]) newdirection = "west"; // turn right
  }
  else if (direction === "west") {
    x--;
    if (!grid[[x, y + 1]]) newdirection = "north"; // turn right
  }

  return [x, y, newdirection];
}


function findDistance(first, second) {
  let grid = {};
  let direction = "north";
  let x = 0, first_x = 0, second_x = 0;
  let y = 0, first_y = 0, second_y = 0;
  for (let num = 1; num <= first || num <= second; num++) {
    if (num === first) [first_x, first_y] = [x, y];
    else if (num === second) [second_x, second_y] = [x, y];
    grid[[x, y]] = num;
    [x, y, direction] = NextWalk(grid, direction, x, y);
  }

  return Math.abs(second_x - first_x) + Math.abs(second_y - first_y);
}

console.log(findDistance(1, 9));
console.log(findDistance(9, 1));
console.log(findDistance(10, 25));
console.log(findDistance(5, 9));
console.log(findDistance(26, 31));
console.log(findDistance(50, 16));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(findDistance(1, 9), 2, "1st example");
//   assert.equal(findDistance(9, 1), 2, "2nd example");
//   assert.equal(findDistance(10, 25), 1, "3rd example");
//   assert.equal(findDistance(5, 9), 4, "4th example");
//   assert.equal(findDistance(26, 31), 5, "5th example");
//   assert.equal(findDistance(50, 16), 10, "6th example");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }