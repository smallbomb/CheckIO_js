// https://js.checkio.org/mission/cipher-map/


const rotateccw = function (matrix) {
  let s = "";
  let newarr = [];
  for (let j = 0; j < matrix.length; j++) {
    for (let i = matrix.length - 1; i >= 0; i--) s += matrix[i].charAt(j);
    newarr.push(s);
    s = "";
  }
  return newarr;
}

function recallPassword(grille, password) {
  let passwd = "";
  for (let round = 0 ; round < 4; round++) {
    grille.map((rows, i) => rows.split("").map((e, j) => {
      if (e === 'X') passwd += password[i][j];
    }));
    grille = rotateccw(grille);
  }
  return passwd;
}

console.log(recallPassword(['X...',
                            '..X.',
                            'X..X',
                            '....'],
                           ['itdf',
                            'gdce',
                            'aton',
                            'qrdi']));
console.log(recallPassword(['....',
                            'X..X',
                            '.X..',
                            '...X'],
                            ['xhwc',
                             'rsqx',
                             'xqzz',
                             'fyzr']));


// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(recallPassword(['X...',
//          '..X.',
//          'X..X',
//          '....'],
//         ['itdf',
//          'gdce',
//          'aton',
//          'qrdi']), 'icantforgetiddqd', "First Example");
//     assert.equal(recallPassword(['....',
//          'X..X',
//          '.X..',
//          '...X'],
//         ['xhwc',
//          'rsqx',
//          'xqzz',
//          'fyzr']), 'rxqrwsfzxqxzhczy', "Second Example");
//     console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }
