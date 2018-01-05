// https://js.checkio.org/mission/wrong-family/

// Reference author: RoyRacer
function ck_stranger(tree) {
  let family_member = new Set();
  let tree_temp = tree.slice();

  let [father, son] = tree_temp.shift();
  family_member.add(father);
  family_member.add(son);
  for (let run = 0; tree_temp.length !== 0 && run < tree_temp.length;) {
    [father, son] = tree_temp.shift();
    if (family_member.has(father) || family_member.has(son)) {
      family_member.add(father);
      family_member.add(son);
      run = 0;
    }
    else if (!family_member.has(father) && !family_member.has(son)) {
      tree_temp.push([father, son]);
      run++;
    }
  }

  return tree_temp.length === 0 ? false : true;
}

function isFamily(tree) {
  if (ck_stranger(tree))
    return false;

  for (const [father, son] of tree) {
    let times = 0;
    let brothers = [];

    // TEST 1: SON CAN ONLY HAVE ONE FATHER    
    for (const [ck_father, ck_son] of tree) {
      if (son === ck_son && father != ck_father)
        return false;
    }

    // TEST 2: SON CANNOT BE A FATHER TO THEIR OWN FATHER
    for (const [ck_father, ck_son] of tree) {
      if (son === ck_father && father === ck_son)
        return false;
      if (father === ck_father && son != ck_son)
        brothers.push(ck_son)
    }

    // TEST 3: SON CANNOT BE THE FATHER OF THEIR BROTHER
    for (const brother of brothers) {
      for (const [ck_father, ck_son] of tree) {
        if (brother === ck_son && son === ck_father) {
          return false;
        }
      }
    }

    // // TEST 4: NOT A STRANGER
    // /**
    //  ** have a issue: [A->B], [A->C], [B->D], [X->Y], [Y-Z]. two group stranger!?
    //  **/
    // for (let r4 in tree) {
    //   if (tree.length > 1) {
    //     if (father === tree[r4][0] || father === tree[r4][1]) { times++ }
    //     else if (son === tree[r4][0] || son === tree[r4][1]) { times++ }
    //   }
    // }
    // if (tree.length > 1 && times <= 1) { errors++ }
  }

  return true;
}

console.log(isFamily([
  ['Logan', 'Mike']
]));
console.log(isFamily([
  ['Logan', 'Mike'],
  ['Logan', 'Jack']
]));
console.log(isFamily([
  ['Logan', 'Mike'],
  ['Logan', 'Jack'],
  ['Mike', 'Alexander']
]));
console.log(isFamily([
  ['Logan', 'Mike'],
  ['Logan', 'Jack'],
  ['Mike', 'Logan']
]));
console.log(isFamily([
  ['Logan', 'Mike'],
  ['Logan', 'Jack'],
  ['Mike', 'Jack']
]));
console.log(isFamily([
  ['Logan', 'William'],
  ['Logan', 'Jack'],
  ['Mike', 'Alexander']
]));
console.log(isFamily([
  ["Logan", "William"],
  ["Mike", "Alexander"],
  ["William", "Alexander"]
]));
console.log(isFamily([
  ['Logan', 'Mike'],
  ['Alexander', 'Jack'],
  ['Jack', 'Logan']
]));
console.log(isFamily([
  ['A', 'B'],
  ['A', 'C'],
  ['C', 'D'],
  ['D', 'E'],
  ['X', 'Y'],
  ['X', 'Z']
])); // should be false
console.log(isFamily([
  ['F', 'G'],
  ['E', 'F'],
  ['D', 'E'],
  ['C', 'D'],
  ['B', 'C'],
  ['A', 'B']
])); // true

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(isFamily([
//     ['Logan', 'Mike']
//   ]), true, 'One father, one son');
//   assert.equal(isFamily([
//     ['Logan', 'Mike'],
//     ['Logan', 'Jack']
//   ]), true, 'Two sons');
//   assert.equal(isFamily([
//     ['Logan', 'Mike'],
//     ['Logan', 'Jack'],
//     ['Mike', 'Alexander']
//   ]), true, 'Grandfather');
//   assert.equal(isFamily([
//     ['Logan', 'Mike'],
//     ['Logan', 'Jack'],
//     ['Mike', 'Logan']
//   ]), false, 'Can you be a father for your father?');
//   assert.equal(isFamily([
//     ['Logan', 'Mike'],
//     ['Logan', 'Jack'],
//     ['Mike', 'Jack']
//   ]), false, 'Can you be a father for your brather?');
//   assert.equal(isFamily([
//     ['Logan', 'William'],
//     ['Logan', 'Jack'],
//     ['Mike', 'Alexander']
//   ]), false, 'Looks like Mike is stranger in Logan\'s family');
//   console.log("Looks like you know everything. It is time for 'Check'!");
// }
