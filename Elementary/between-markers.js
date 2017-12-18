// https://js.checkio.org/mission/between-markers/

function betweenMarkers(text, begin, end) {
  let head = text.includes(begin) ? text.indexOf(begin) + begin.length : 0;
  let tail = text.includes(end) ? text.lastIndexOf(end) : text.length;
  return text.slice(head, tail);
}

console.log(betweenMarkers('What is >apple<', '>', '<'));
console.log(betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"));
console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'));
console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'));
console.log(betweenMarkers('No hi', '[b]', '[/b]'));
console.log(betweenMarkers('No <hi>', '>', '<'));

// var assert = require('assert');

// if (!global.is_checking) {
//   console.log('Example:')
//   console.log(betweenMarkers())

//   assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apples')
//   assert.equal(betweenMarkers("<head><title>My new site</title></head>",
//     "<title>", "</title>"), 'My new site')
//   assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
//   assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
//   assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
//   assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }