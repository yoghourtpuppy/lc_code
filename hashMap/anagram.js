// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//   let hashmap = {};
//   for (let i = 0; i < s.length; i+=1) {
//     const char = s.charAt(i);// get char at i
//     const value = hashmap[char];
//     hashmap[char] = value === undefined ? 1 : hashmap[char] + 1; // hashmap value +1
//   }

//   for (let i = 0; i < t.length; i+=1) {
//     const char = t.charAt(i);
//     const value = hashmap[char];
//     if (value !== undefined) {
//       hashmap[char] -= 1; //hashmap value -1 if exist
//     }
//   }

//   for (key in hashmap) {
//     if (hashmap[key] !== undefined && hashmap[key] > 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const s = 'amams';
// const t = 'wamas';
// const res = isAnagram(s, t);
// console.log('result ' + res);

// The input string only conatins alphabets
var isAlphaAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let arr = [...Array(26)].map(x=>0); // Initiate an array with size 26 and all 0 values

  for (let i = 0; i < s.length; i+=1) {
    const index = s.charAt(i) - 'a'; // get char at i
    const value = arr[index];
    arr[index] += 1; // array value +1
  }

  for (let i = 0; i < t.length; i+=1) {
    const index = t.charAt(i) - 'a';
    arr[index] -= 1;

    if (arr[index] < 0) { // since two string has same length, once there's a charactor different, the value will be -1
      return false;
    }
  }
  return true;
}


const s = 'aaabbb';
const t = 'ab';
const res = isAlphaAnagram(s, t);
console.log('result is ' + res);