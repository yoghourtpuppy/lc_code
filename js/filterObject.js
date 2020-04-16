const filter = (n) => n >= 0;

const filterObject = (filter, object) => {
  const filteredObj = {};
  for(let key in object) {
    const value = object[key];
    key
    value
    filteredObj
    if(typeof value === 'object') {
      let filteredValue = filterObject(filter, value);
      if(Object.keys(filteredValue).length > 0) {
        filteredObj[key] = filteredValue;
      }
    } else if(filter(value)) {
      filteredObj[key] = value;
    }
    filteredObj

  }
  return filteredObj;
}

const object1 = {
  a: 1,
  b: {
    c: 2,
    e: {
      h: 3,
      f: {
        g: -4,
      },
    }
  }
};

const res1 = filterObject(filter, object1);

const filterObject1 = (filter, object) => {
  const processObject = (filter, object) => {
    for(let key in object) {
      const value = object[key];

      if(typeof value === 'object') {
        let filteredValue = processObject(filter, value);
        if(Object.keys(filteredValue).length > 0) {
          object[key] = filteredValue;
        } else {
          delete object[key];
        }
      } else if(!filter(value)) {
        delete object[key];
      }
    }
    return object;
  }

  return processObject(filter, object);
}

const filterObject2 = (filter, object) => {
  for(let key in object) {
    const value = object[key];
    if(Array.isArray(value)){
      value
      if(value.length > 0) {
        for(item of value){
          item = filterObject2(filter, item);
          if(Object.keys(item).length === 0) {
            delete object[key];
          }
        }
      } else {
        delete object[key];
      }
    } else if(typeof value === 'object') {
      let filteredValue = filterObject2(filter, value);

      if(Object.keys(filteredValue).length > 0) {
        object[key] = filteredValue;
      } else {
        delete object[key];
      }
    } else if(!filter(value)) {
      delete object[key];
    }
  }
  return object;
}


const object = {
  a: [
    {
      k: {
        l: -1,
        m: -2
      },
    }
  ],
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  }
};

const res = filterObject2(filter, object);
console.log(res);
console.log(object);
