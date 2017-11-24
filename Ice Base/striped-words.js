// https://js.checkio.org/mission/striped-words/

// Vowels -- A E I O U Y
// Consonants -- B C D F G H J K L M N P Q R S T V W X Z

function stripedWords(text) {
  let count = 0;
  text = text.toLowerCase().split(/[^a-zA-z0-9]/);
  text.forEach(word => {
    if (word.length < 2) return;
    else if (word.match(/[0-9]/g) || word.match(/[aeiouy]{2}/g) || word.match(/[bcdfghjklmnpqrstvwxz]{2}/g)) return;
    else count++;  
  });
  return count;
}

console.log(stripedWords("My name is ..."));
console.log(stripedWords("Hello world"));
console.log(stripedWords("A quantity of striped words."));
console.log(stripedWords("Dog,cat,mouse,bird.Human."));
console.log(stripedWords("1st 2a ab3er root rate"));

// var assert = require('assert');

// if (!global.is_checking) {
//   assert.equal(stripedWords("My name is ..."), 3, "All words are striped");
//   assert.equal(stripedWords("Hello world"), 0, "No one");
//   assert.equal(stripedWords("A quantity of striped words."), 1, "Only of");
//   assert.equal(stripedWords("Dog,cat,mouse,bird.Human."), 3, "Dog, cat and human");
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }