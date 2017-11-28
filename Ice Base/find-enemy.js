// https://js.checkio.org/mission/find-enemy/

function dircalc(x, y, e_x, e_y, dir) {
  let angel = 0;
  if ((e_x - x) % 2 === 0) {
    angel = +(Math.atan2(-1 * Math.sqrt(3) * (e_y - y), 1.5 * (e_x - x)) * 180 / Math.PI).toFixed(2);
  }
  else {
    if (x % 2 === 0) {
      angel = +(Math.atan2(-1 * Math.sqrt(3) * (e_y - (y + 0.5)), 1.5 * (e_x - x)) * 180 / Math.PI).toFixed(2);
    }
    else {
      angel = +(Math.atan2(-1 * Math.sqrt(3) * (e_y - (y - 0.5)), 1.5 * (e_x - x)) * 180 / Math.PI).toFixed(2);
    }
  }

  if (dir === "NE") angel += 60;
  else if (dir === "SE") angel += 120;
  else if (dir === "S") angel += 180;
  else if (dir === "SW") angel -= 120;
  else if (dir === "NW") angel -= 60;

  if (angel > 180) angel -= 360;
  else if (angel < -180) angel += 360;

  if (30 < angel && angel < 150) return "F";
  else if (-30 <= angel && angel <= 30) return "R";
  else if (-150 < angel && angel < -30) return "B";
  else return "L";
}

function deepcalc(x, y, e_x, e_y) {
  if ((e_x - x) % 2 === 0)
    return Math.abs(e_x - x) + (Math.abs(e_y - y) <= Math.abs(e_x - x) / 2 ? 0 : Math.abs(e_y - y) - Math.abs(e_x - x) / 2);
  else
    return Math.abs(e_x - x) + (Math.abs(e_y - y) < Math.ceil(Math.abs(e_x - x) / 2) ? 0 : Math.abs(e_y - y) - Math.floor(Math.abs(e_x - x) / 2));
}

function findEnemy(you, dir, enemy) {
  let [x, y] = [you.charCodeAt(0), +you.slice(1)];
  let [enemy_x, enemy_y] = [enemy.charCodeAt(0), +enemy.slice(1)];
  return [dircalc(x, y, enemy_x, enemy_y, dir), deepcalc(x, y, enemy_x, enemy_y)];
}

console.log(findEnemy('G5', 'N', 'G4'));
console.log(findEnemy('G5', 'N', 'I4'));
console.log(findEnemy('G5', 'N', 'J6'));
console.log(findEnemy('G5', 'N', 'G9'));
console.log(findEnemy('G5', 'N', 'B7'));
console.log(findEnemy('G5', 'N', 'A2'));
console.log(findEnemy('G3', 'NE', 'C5'));
console.log(findEnemy('H3', 'SW', 'E2'));
console.log(findEnemy('A4', 'S', 'M4'));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.deepEqual(findEnemy('G5', 'N', 'G4'), ['F', 1], "N-1");
//   assert.deepEqual(findEnemy('G5', 'N', 'I4'), ['R', 2], "NE-2");
//   assert.deepEqual(findEnemy('G5', 'N', 'J6'), ['R', 3], "SE-3");
//   assert.deepEqual(findEnemy('G5', 'N', 'G9'), ['B', 4], "S-4");
//   assert.deepEqual(findEnemy('G5', 'N', 'B7'), ['L', 5], "SW-5");
//   assert.deepEqual(findEnemy('G5', 'N', 'A2'), ['L', 6], "NW-6");
//   assert.deepEqual(findEnemy('G3', 'NE', 'C5'), ['B', 4], "[watch your six!]");
//   assert.deepEqual(findEnemy('H3', 'SW', 'E2'), ['R', 3], "right");
//   assert.deepEqual(findEnemy('A4', 'S', 'M4'), ['L', 12], "true left");
//   console.log("You are good to go!");
// }