function maximumToys(prices, k) {
  let sortedPrices = prices.sort((a, b)=> {
      return a-b;
  });
  let total = 0;
  let count = 0;
sortedPrices
  for(let i=0; i<sortedPrices.length; i++) {
      if (total + sortedPrices[i] > k) {
          break;
      } else {
          total+=sortedPrices[i];
          count++;
      }
  }
  return count;
}

console.log(maximumToys([1,2,3,4], 7));