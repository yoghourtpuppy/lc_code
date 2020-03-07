function hourglassSum(arr) {
  if (arr.length === 0) return 0;
  let max = Number.NEGATIVE_INFINITY;
  let sum;

  for(let n=0; n<=3; n++){
      for (let m=0; m<=3; m++) {
          sum = arr[n][m] + arr[n][m+1] + arr[n][m+2] + arr[n+1][m+1] + arr[n+2][m] + arr[n+2][m+1] + arr[n+2][m+2];
          max = sum > max ? sum : max;
      }
  }

  return max;
}