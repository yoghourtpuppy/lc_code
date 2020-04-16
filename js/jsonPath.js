function getValue(obj, path) {
  if(typeof path !== 'string') {
    return;
  }

  const strArr = path.split('.');
  strArr
  function helper(result) {
    if(strArr.length === 0) return result;

    const first = strArr.shift();
    if(!result) return undefined;

    if(first.indexOf('[') > -1) {
      const splitedFirst = first.split(/[\[\]]/).filter(i => i!=='');
      const arrayIndexes = splitedFirst.slice(1);
      result = result[splitedFirst[0]];

      for(let index of arrayIndexes) {
        if(!Array.isArray(result)) return undefined;
        result = result[index];
      }
    } else {
      result = result[first];
    }

    return helper(result);
  }

  return helper(obj);
}

const obj = { 'x': [{ 'y': { 'z': 100 } }] };

const value = getValue(obj, 'x[0]'); // 100
console.log(value);