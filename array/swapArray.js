function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let len = arr.length;
  if (len === 0) return 0;
  let map = new Map();
  let count = 0;

  for (let i=0; i<len; i++) {
      map.set(arr[i], i);
  }
  map;
  for (let i=0; i < len; i++) {
      if (arr[i] !== i+1) {
          let index = map.get(i+1);
          swap(arr, i, index);
          map.set(arr[i], i);
          map.set(arr[index], index);
          count++;
      }
  }
  return count;
}

function swap(arr, src, tar) {
  let temp = arr[src];
  arr[src] = arr[tar];
  arr[tar] = temp;
}

console.log(minimumSwaps([4, 3, 1, 2]));