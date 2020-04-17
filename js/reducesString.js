function reduceString(str) {
  if(!str || str.length === 0) {
    return;
  }
  let map = new Map();
  for(let char of str) {
    if(map.has(char)) {
      map.set(char, (map.get(char)+1));
    } else {
      map.set(char, 1);
    }
  }
  const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let res = '';
  sortedMap.forEach((entry)=>res+=entry[0]);
  return res;
}

const res = reduceString('hello world');
console.log(res);