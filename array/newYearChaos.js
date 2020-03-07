function minimumBribes(q) {
  let len = q.length;
  if (len === 0) return 0;
  let count = 0;
  for(let i=0; i<len; i++) {
      if(q[i] - 1 - i >= 3) {
        return 'Too chaotic';
      }
      // TODO
    }
      return count;
}

console.log(minimumBribes([2,1,5,3,4]));