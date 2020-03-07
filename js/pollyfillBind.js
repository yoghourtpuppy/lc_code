let name = {
  firstName: "Qing",
  lastName: "Chen",
};

let printName = function() {console.log(this.firstName + ' ' + this.lastName)};

Function.prototype.myBind = function(...args) {
  let obj = this;
  let funcArgs = args.slice(1);
  return function(...params) {
    obj.apply(args[0], [...funcArgs, ...params]);
  }
}

let printMyName = printName.myBind(name);
printMyName();
