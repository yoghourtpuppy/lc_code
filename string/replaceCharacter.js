// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

// In one operation, you can choose any character of the string and change it to any other uppercase English character.

// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

// Note:
// Both the string's length and k will not exceed 104.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-repeating-character-replacement
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  var l = 0, r = 0;// sliding window
  var res = 0;
  var maxLen = 0;
  var countMap = Array(26).fill(0);

  while (r <  s.length) {
    var index = s.charCodeAt(r) - 'A'.charCodeAt(0);
    countMap[index]+=1;
    var count = countMap[index];
    console.log('count: '+count);

    var winLen = r - l + 1;
    maxLen = Math.max(count, maxLen);
    console.log('winlen: '+winLen);

    while (winLen - maxLen > k) {
      l++;
      countMap[index]-=1;
    }

    res = Math.max(res, r-l+1);
    console.log('res: '+res);
    r++;
  }

  return res;
};

const a = 'ABBBBBBACCA';
const r = characterReplacement(a, 2);

console.log('result: '+r);