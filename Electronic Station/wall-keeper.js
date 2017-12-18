// https://js.checkio.org/mission/wall-keeper/

// Reference: https://www.jaapsch.net/puzzles/lightsol.htm

/*
** Number the rows 1-5, the columns A-E.
**    a.For each light on row 1, press the button beneath it on row 2 to turn the light off. This way row 1 is completely unlit.
**    b.Repeat step a for rows 2-4, so that now you only have lights on row 5. This is usually called 'chasing the lights'.
**    c.If the light at A5 is on, press D1 and E1. 
**      If the light at B5 is on, press B1 and E1. 
**      If the light at C5 is on, press D1.
**    d.Repeat steps a-b, chasing the lights down and it will be magically solved.
*/

function LightOnOrOff(p, i, j) {
  let adj = [[i, j - 1], [i - 1, j], [i, j], [i + 1, j], [i, j + 1]];
  adj.forEach(e => {
    if (p[e[0]] && p[e[0]][e[1]] !== undefined)
      p[e[0]][e[1]] = 1 - p[e[0]][e[1]];
  });

}

function wallKeeper(on_panels) {
  let p = [];
  let answer = [];
  for (let i = 0; i < 5; i += 1) {
    let row = [];
    for (let j = 0; j < 5; j += 1)
      row.push(on_panels.indexOf(i * 5 + j + 1) > -1 ? 1 : 0);
    p.push(row);
  }
  while (p.some(row => row.some(e => e === 1))) {
    for (let i = 0; i < 4; i += 1) {
      let index = -1;
      while ((index = p[i].indexOf(1)) >= 0) {
        LightOnOrOff(p, i + 1, index);
        answer.push((i + 1) * 5 + index + 1);
      }
    }
    if (p[4][0] === 1) {
      LightOnOrOff(p, 0, 3); // D1
      LightOnOrOff(p, 0, 4); // E1
      answer.push(0 * 5 + 3 + 1);
      answer.push(0 * 5 + 4 + 1);
    }
    if (p[4][1] === 1) {
      LightOnOrOff(p, 0, 1); // B1
      LightOnOrOff(p, 0, 4); // E1
      answer.push(0 * 5 + 1 + 1);
      answer.push(0 * 5 + 4 + 1);
    }
    if (p[4][2] === 1) {
      LightOnOrOff(p, 0, 3); // D1
      answer.push(0 * 5 + 3 + 1);
    }
  }
  return answer;
}

console.log(wallKeeper([5, 7, 13, 14, 18]));
console.log(wallKeeper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]));

// var assert = require('assert');

// if (!global.is_checking) {

//   function checker(solution, on_panels) {
//     var answer = solution(on_panels);
//     var p = [];
//     for (var i = 0; i < 5; i += 1) {
//       var row = [];
//       for (var j = 0; j < 5; j += 1) {
//         row.push(on_panels.indexOf(i * 5 + j + 1) > -1 ? 1 : 0);
//       }
//       p.push(row);
//     }

//     answer.forEach(a => {
//       var r = Math.floor((a - 1) / p.length);
//       var c = (a - 1) % p[0].length;

//       p[r][c] = 1 - p[r][c];

//       if (r + 1 < 5)
//         p[r + 1][c] = 1 - p[r + 1][c];
//       if (r - 1 > -1)
//         p[r - 1][c] = 1 - p[r - 1][c];
//       if (c + 1 < 5)
//         p[r][c + 1] = 1 - p[r][c + 1];
//       if (c - 1 > -1)
//         p[r][c - 1] = 1 - p[r][c - 1];
//     });
//     var total = 0;
//     for (var k = 0; k < 5; k += 1) {
//       p[k].forEach(function (v) {
//         total += v
//       });
//     }
//     return total === 0;
//   }

//   assert.equal(checker(wallKeeper, [5, 7, 13, 14, 18]),
//     true, 'basic');

//   assert.equal(checker(wallKeeper, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//       11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
//     ]),
//     true, 'all_lights');

//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }