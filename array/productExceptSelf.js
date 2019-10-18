// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let lastProduct = 1;
  let results = [...Array(nums.length)].map(num=>1); // Initiate an array filled with 1

  for (let i = 1; i < nums.length; i++) { // Start from 2nd item in array
    lastProduct *= nums[i-1];
    results[i] = lastProduct; // Store the product to the left at current index
  }

  lastProduct = 1;

  for (let i = nums.length - 2; i>=0; i--) { // Start from last but 1
    lastProduct *= nums[i+1]; // Calculate the right product
    results[i] *= lastProduct; // multiply the left (stored at current index) and right product
  }

  return results;
};