function twoStrings(s1, s2) {
  let set = new Set();
  for(let i=0; i < s1.length; i++) {
      set.add(s1[i]);
  }
set
  for(let i=0; i < s2.length; i++) {
      if(set.has(s2[i])) {
          return 'YES';
      }
  }

  return 'NO';
}

const a = twoStrings('hello', 'world');
