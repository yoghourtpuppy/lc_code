/*
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function longestSubarray(arr) {
  // Write your code here
  if (!arr && arr.length === 0) return;
  if (arr.length === 1) return 1;

  let left = 0, right = 1;
  let newLeft = 0;
  let min = arr[left];
  let max = arr[left];
  let length = 0;

  while (right < arr.length) {
    if (arr[right] !== arr[left] && newLeft === 0) {
      newLeft = right;
    }
    min = Math.min(arr[right], min);
    max = Math.max(arr[right], max);
    if (max - min >= 2) {
      length = Math.max(right - left, length);

      left = newLeft;
      right = left;
      min = arr[left];
      max = arr[left];
      newLeft = 0;
    } else {
      length = Math.max(right - left + 1, length);
    }
    right++;
  }

  return length;
}

console.log(longestSubarray([-1, -2, -1, 0, 0, 0, 1, 2, 2, 2, 2, 1]));