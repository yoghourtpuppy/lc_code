
const deepClone = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item)=> {
      return deepClone(item);
    });
  } else if (obj !== null && typeof(obj) === "object") {
    // let objCopy = {};

    // for (const key in obj) {
    //   objCopy[key] = deepClone(obj[key]);
    // }
    // return objCopy;
    Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepClone(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}

const testObj = {
  a: null,
  b: {
    c: 'c',
    d: {
      e: [
        {foo: '1'}
      ]
    }
  }
}

var cloned = deepClone(testObj);
console.log(cloned);
console.log(testObj);
cloned.b.d.e[0].foo = 2
console.log(testObj.b.d.e);

var a = [{a:'1'}, {b:{c:'2'}}, 'f'];
var b = [...a];
b[0].a = '2'
a
b