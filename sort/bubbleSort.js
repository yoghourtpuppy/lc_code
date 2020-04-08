function countSwaps(a) {
  let swapCount = 0;
  for(let i = 0; i < a.length; i++) {
      for(let j = 0; j < a.length-1; j++) {
          if(a[j] > a[j+1]) {
              swapCount++;
              swap(a, j, j+1);
          }
      }
  }

  console.log("consolArray is sorted in "+ swapCount+" swaps.");
  a
  console.log("First Element: "+a[0]);
  console.log("Last Element: "+a[a.length-1]);
}
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
 countSwaps([5,4,3,2,1]);