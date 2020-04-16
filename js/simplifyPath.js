/**
 * @param {string} path
 * @return {string}
 * Input: "/a/./b/../../c/"
 * Output: "/c"
 */
var simplifyPath = function (path) {
  const stack = [];
  const ops = path.split('/');

  ops.forEach((op, index) => {
    if (op === '..') {
      if (stack.length !== 0) {
        stack.pop();
      }
    } else if (op !== '' && op !== '.') {
      stack.push(op);
    }
  })
  return '/' + stack.join('/');
};