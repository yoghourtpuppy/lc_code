// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;
  let i = 0, j = height.length - 1;
  while(i < j) { // double pointers
    area = Math.max(area, Math.min(height[i], height[j]) * Math.abs(j-i)); // short bar as height
    if (height[i] < height[j]) { // Move short bar
      i++;
    } else {
      j--;
    }
  }
  return area;
};

const height = [5, 6, 3, 8];
const res = maxArea(height);

console.log(res.toString());