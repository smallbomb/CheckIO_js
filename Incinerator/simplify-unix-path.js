// https://js.checkio.org/mission/simplify-unix-path/

function simplifyPath(path) {
  let stack = [];
  if (path[0] === '/') stack.push('');

  path = path.split("/").filter(e => e !== '.' && e !== '')
  for (const folder of path) {
    if (stack.length === 0 || folder !== ".." || stack[stack.length - 1] === "..") 
      stack.push(folder);
    else if (stack[stack.length - 1] !== '') 
      stack.pop();
  }
  return stack.join('/') || (stack.length ? "/" : ".");
}

// last slash is not important
console.log(simplifyPath('/a/'));

// double slash can be united in one
console.log(simplifyPath('/a//b/c'));

// double dot - go to previous folder
console.log(simplifyPath('dir/fol/../no'));
console.log(simplifyPath('dir/fol/../../no'));

// one dot means current dir
console.log(simplifyPath('/a/b/./ci'));
console.log(simplifyPath('vi/..'));
console.log(simplifyPath('./.'));

// you can't go deeper than root folder
console.log(simplifyPath('/for/../..'));
console.log(simplifyPath('/for/../../no/..'));

// not all double-dots can be simplyfied in related path
console.log(simplifyPath('for/../..'));
console.log(simplifyPath('../foo'));

// var assert = require('assert');

// if (!global.is_checking) {
//   // last slash is not important
//   assert.equal(simplifyPath('/a/'), '/a')

//   // double slash can be united in one
//   assert.equal(simplifyPath('/a//b/c'), '/a/b/c')

//   // double dot - go to previous folder
//   assert.equal(simplifyPath('dir/fol/../no'), 'dir/no')
//   assert.equal(simplifyPath('dir/fol/../../no'), 'no')

//   // one dot means current dir
//   assert.equal(simplifyPath('/a/b/./ci'), '/a/b/ci')
//   assert.equal(simplifyPath('vi/..'), '.')
//   assert.equal(simplifyPath('./.'), '.')

//   // you can't go deeper than root folder
//   assert.equal(simplifyPath('/for/../..'), '/')
//   assert.equal(simplifyPath('/for/../../no/..'), '/')

//   // not all double-dots can be simplyfied in related path
//   assert.equal(simplifyPath('for/../..'), '..')
//   assert.equal(simplifyPath('../foo'), '../foo')
//   console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
// }