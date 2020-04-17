const deepMapKeys = (obj, f) => {
  if(Array.isArray(obj)) {
    return obj.map((arrItem)=> {
      return deepMapKeys(arrItem, f);
    });
  } else if(obj && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key)=> {
      const val = obj[key];
      acc[f(key)] = deepMapKeys(val, f);
      return acc;
    }, {});
  }
  return obj;
}

const testObject = {
  key2: [
    {
      baz: '2',
    },
    '3'
  ]
}
const t = {
  bar: {
    baz: '2'
  },
  foo: '1',
}

const res = deepMapKeys(testObject, key=>key.toUpperCase());
console.log(res);