function identify(x) {
  return function (y) {
    return x + y;
  };
}

identify(1)(2)

function liftf(func) {
  return function (x) {
    return function (y) {
      return func(x, y);
    };
  };
}
const curry = (func, x) => {
  return (y) => {
    return func(x, y);
  }
}

console.log(curry(add, 1)(2));

function add(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}
console.log(liftf(mult)(1)(2));

const inc = (x) => {
  return x + 1;
}

const twice = (func) => {
  return function(x) {
    return func(x, x);
  }
}

console.log(twice(add)(1));

function conposeu(func1, func2) {
  return function(x) {
    return func1(func2(x));
  }
}

function limit(func, limit) {
  return function() {
    if (limit > 0) {
      limit--;
      return func();
    }
  }
}

let addxy = limit(add, 2);

function from(start) {
  return function() {
    return start++;
  }
}
let indexf = from(0);

function fromTo(start, end) {
  return function() {
    if(end > 0) {
      end--;
      return start++;
    }
  }
}
let a = fromTo(1, 3);
console.log(a());
console.log(a());
console.log(a());
console.log(a());

const sae = (arr) => {
  if(Array.isArray(arr)) {
    const fun = arr[0];
    return fun(sae(arr[1]), sae(arr[2]));
  } else {
    return arr;
  }
}

console.log(sae([mult, 2, 3]));

const addg = (arg) => {
  const addMore = (next) => {
    if (!next) {
      return arg;
    }
    arg += next;
    return addMore;
  }
  if(arg) return addMore;
  return;
}
const liftg = (func) => {
  return (first) => {
    if (!first) return;
    return liftMore = (next) => {
      if(!next) return first;
      if (func) {
        first = func(first, next);
      }
      return liftMore;
    }
  }
}

console.log(liftg());

function processData(input) {
  //Enter your code here
  let arr = [...input];
  let arr1 = [];
  let arr2 = [];
  arr.forEach((val, index)=>{
      if(index % 2 === 0) {
          arr1.push(val);
      } else {
          arr2.push(val);
      }
  });
  console.log(arr1.join('') + ' ' + arr2.join(''));
}
processData('hacker');

const printRec = (num) => {
  if (num > 10) return;
  console.log(num++);
  setTimeout(() => {
    printRec(num);
  }, 1000);
}

printRec(1);