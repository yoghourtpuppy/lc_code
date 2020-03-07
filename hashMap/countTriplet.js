function countTriplets(arr, r) {
  let map = new Map();
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    let value = [arr[i], 0, 0];
    map.set(arr[i], value);
    if (arr[i]%r === 0 && map.has(arr[i]/r)) {
      console.log(arr[i])
      value = map.get(arr[i]/r);
      value[1] = arr[i];
      map.set(arr[i]/r, value);
    }
    if (arr[i]%(r*r) === 0 && map.has(arr[i]/r/r)) {
      console.log(arr[i])
      console.log(arr[i]/r/r)
      value = map.get(arr[i]/r/r);
      value[2] = arr[i];
      console.log(value)
      map.set(arr[i]/r/r, value);
      if(value[0]!==0 && value[1]!==0 && value[2]!==0 ) {
        sum++;
      }
    }

    value

  }

  return sum;
}

let res = countTriplets([1,3,9,9,27,81], 3);
res