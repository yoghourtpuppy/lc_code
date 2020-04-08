// Encoded message:
// I B C A L K A
// D R F C A E A
// G H O E L A D

function decoder(arr) {
  let resArr = [];
    let y = 0;
    let x = 0;
    let bit = 1;
    while(y < arr.length && y >= 0 && x < arr[y].length) {
      resArr.push(arr[y][x]);
      if(y === arr.length - 1) {
        bit = -1;
      } else if(y === 0) {
        bit = 1;
      }
      y += bit;
      x++;
    }
    return resArr.toString();
}

console.log(
  decoder([
    ["I", "B", "C", "A", "L", "K", "A"],
    ["D", "R", "F", "C", "A", "E", "A"],
    ["G", "H", "O", "E", "L", "A"]
  ])
);