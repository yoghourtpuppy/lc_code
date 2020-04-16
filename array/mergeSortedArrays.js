function mergeSortedArrays(arr1, arr2) {
  if(arr1.length === 0) {
    return arr2;
  }

  if(arr2.length === 0) {
    return arr1;
  }
  let res = [];
  // merge
  let i = 0, j = 0, k = 0;

  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      res[k] = arr1[i];
      i++;
      k++;
    } else {
      res[k] = arr2[j];
      j++;
      k++;
    }
  }
  while(i < arr1.length) {
    res[k] = arr1[i];
    k++;
  }
  while(j < arr2.length) {
    res[k] = arr2[j];
    j++;
    k++;
  }
  return res;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const res = mergeSortedArrays(arr1, arr2);
console.log(res);