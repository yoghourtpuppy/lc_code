const filter = (n) => n >= 0;

const filterObject = (filter, object) => {
  if(Array.isArray(object)) {
    return object.map((item)=> {
      return filterObject(filter, item);
    }).filter((item)=>{
      return item && !(typeof item === 'object' && Object.keys(item).length === 0);
    });
  } else if(object !== null && typeof object === 'object') {
    return Object.keys(object).reduce((acc, key)=> {
      const filteredVal = filterObject(filter, object[key]);
      if(filteredVal && !(typeof filteredVal === 'object' && Object.keys(filteredVal).length === 0)) {
        acc[key] = filteredVal;
      }
      return acc;
    }, {});
  } else if (filter(object)) {
    return object;
  }
  return;
}

const object1 = {
  a: 1,
  b: {
    c: 2,
    e: [
      {
        f: {
        g: -4,
      }
    }
    ]
  }
};

const res1 = filterObject(filter, object1);
res1
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
