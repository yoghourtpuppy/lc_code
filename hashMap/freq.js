function freqQuery(queries) {
  let map1 = new Map();
  let map2 = new Map();
  let res = [];
  let freq;
  let count;

  for (let query of queries) {
    switch (query[0]) {
      case 1:
        count = map1.get(query[1]) ? ++count : 1;
        map1.set(query[1], count);
        break;

      case 2:
        count = map1.get(query[1]);
        if (count > 0) {
          map1.set(query[1], --count);
        }
        break;

      case 3:
        let hasValue = false;
        for(let value of map1.values()) {
          if(value === query[1]) {
            res.push(1);
            hasValue = true;
            break;
          }
        }
        if(!hasValue) {
          res.push(0);
        }
        break;

      default:
        break;
    }
  }
  return res;
}
// 1 3
// 1 38
// 2 1
// 1 16
// 2 1
// 2 2
// 1 64
// 1 84
// 3 1
// 1 100
// 1 10
// 2 2
// 2 1
// 1 67
// 2 2
// 3 1
// 1 99
// 1 32
// 1 58
// 3 2
console.log(freqQuery([[1, 3], [1, 38], [2, 1], [1, 16], [2, 1], [2, 2], [1, 64], [1, 84], [3, 1], [1, 100], [1, 10], [2, 2], [2, 1], [1, 67],[2, 2], [3, 1], [1,99], [1, 32], [1, 58], [3,2]]));