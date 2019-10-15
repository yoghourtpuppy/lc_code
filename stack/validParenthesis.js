// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char); // push open parenthesis into stack
    } else if (stack[stack.length -1] === map[char]) {// if the close parenthesis match the one on top of stack
      stack.pop();
    } else {
      return false; // If no matching open one return false
    }
  }
  return stack.length ? false : true; // If the stack is not empty, meaning there's extra open ones, return false
};

var a = isValid('()');
console.log('result: '+a);