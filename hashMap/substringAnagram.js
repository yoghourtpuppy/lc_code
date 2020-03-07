function sherlockAndAnagrams(s) {
  let count = 0;
  for(let w=1; w < s.length; w++) {
      for(let i= 0; i< s.length-w; i++) {
          for(let j= 1; j< s.length-i; j++) {
              if(isAnagram(s.slice(i, i+w), s.slice(i+j, i+j+w))) {
                count++;
              }
          }
      }
  }
  return count;
}

function isAnagram(s1, s2) {
  let map = new Map();

  for(let i= 0; i< s1.length; i++) {
      if(map.has(s1[i])) {
          let count = map.get(s1[i]);
          map.set(s1[i], ++count);
      } else {
          map.set(s1[i], 1);
      }
  }
  for(let i= 0; i< s2.length; i++) {
      if(map.has(s2[i])) {
        let count = map.get(s2[i]);
        map.set(s2[i], --count);
      }
  }

  for(let value of map.values()) {
      if(value!==0) {
          return false;
      }
  }
  return true;
}
console.log(sherlockAndAnagrams('aa'));