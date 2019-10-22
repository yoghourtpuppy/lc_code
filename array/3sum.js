// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  nums.sort((a,b) => a - b);

  let left, right;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 || nums[i] === nums[i-1]) {
      continue;
    }
    left = i + 1;
    right = nums.length - 1;

    while (left < right) {
      if (nums[i] * nums[right] > 0) break;
      var sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left++]);
        while (left < right && nums[right] === nums[right--]);
        left++;
        right--;
      } else if (sum < 0) {
        while (left < right && nums[left] === nums[++left]);
      } else {
        while (left < right && nums[right] === nums[--right]);
      }
    }
  }
  return result;
};

var input = [ -2, 1, 2, 1];
var res = threeSum(input);
console.log('result: ' + res);