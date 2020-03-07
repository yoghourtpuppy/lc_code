function countingValleys(n, s) {
  if (n === 0) return 0;
  let count = 0;
  let arr = [0];
  [...s].forEach((char, index)=> {
      arr[index+1] = char === 'U' ? arr[index] + 1 : (char === 'D' ? arr[index] - 1 : 'invalid');

      if (arr[index+1] === 'invadli') return;

      if (arr[index] === 0 && arr[index + 1] === -1) {
          count++;
      }
  });

  return count;
}

console.log(10%3)