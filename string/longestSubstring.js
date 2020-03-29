// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    var map = new Map();
    var l = 0, r = 0;
    var maxLen = 0;

    while (r < s.length) {
      if (map.has(s.charAt(r))) {
        l = map.get(s.charAt(r)) + 1;
        l
        r = l;
        map.clear();
      } else {
        maxLen = Math.max(maxLen, r-l+1);
        map.set(s.charAt(r), r);
        r++;
      }
    }
    return maxLen;
};

var s = 'avaf';
var res = lengthOfLongestSubstring(s);
console.log(res);

var lengthOfLongestSubstring1 = function(s) {
  let set = new Set();
  let longest = 0;
  let current = 0;
  for(let i = 0; i < s.length; i++) {
      set.clear();
      current = 0;
      for(let j = i; j < s.length && !set.has(s[j]); j++) {
          current++;
          longest = longest > current ? longest: current;
          set.add(s[i]);
      }

  }
  return longest;
};