
const deepClone = (obj) => {
  if (typeof(obj) !== "object" || obj === null) {
    return obj;
  }

  let objCopy = {};

  for (const key in obj) {
    objCopy[key] = deepClone(obj[key]);
  }
  return objCopy;
}

const testObj = {
  a: 'a',
  b: {
    c: 'c',
    d: {
      e: 'e'
    }
  }
}

var cloned = deepClone(testObj);
console.log(cloned);
cloned.b.c = 'changed';
console.log(testObj);
console.log(cloned);

