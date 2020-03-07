function sockMerchant(n, ar) {
  if (ar === undefined || ar.lengh === 0) return 0;
  let count = 0;
  let map = new Map();

  ar.forEach((item)=> {
      if (map.has(item)) {
          if (map.get(item)) {
              map.set(item, false);
          } else {
              map.set(item, true);
              count++;
          }
      } else {
          map.set(item, false);
      }
  })

  return count;
}