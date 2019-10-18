// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};

  strs.forEach((str)=> {
    let sortedStr = str.split('').sort().join('')
    if (map[sortedStr]) {
      map[sortedStr].push(str);
    } else {
      map[sortedStr] = [str];
    }
  });

  let result = [];
  for (let key in map) {
    result.push(map[key]);
  }

  return result;
};

const input = ['a'];
console.log('result: ' + groupAnagrams(input));