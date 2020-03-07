function jumpingOnClouds(c) {
  let len = c.length;
  if (len === 0) return;
  let i = 0;
  let count = 0;

  while(i < len) {
    if (i !== 0) count++;
    if (i < len - 2 && c[i+2] === 0) {
      i+=2;
    } else {
      i+=1;
    }
  }
  return count;
}

const r = jumpingOnClouds([0,1,0,0,0,0,1,0,0]);

