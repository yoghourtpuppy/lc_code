//sum(1)(2)(3)...(n) = 1 + 2 + 3 + ... n

const sum = (x) => {
  return (y) => {
    return y ? sum(x + y) : x;
  }
}

const sum0 = x => {
  return y => x + y;
}

sum1 = sum0(1);
sum1(2) == 3;