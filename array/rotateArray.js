function rotLeft(a, d) {
  let len = a.length;
  if(len === 0 || len === d) return a;
  a.unshift(...a.splice(d, len));
  return a;
}

function rotLeft1(a, d) {
  let len = a.length;
  if(len === 0 || len === d) return a;
  reverse(a, 0, len-1);
  reverse(a, 0, d-1);
  reverse(a, d, len-1);
  return a;
}

function reverse(arr, start, end) {
  let temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}