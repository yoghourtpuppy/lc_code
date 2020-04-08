var jsOne =  (function() {
  var _item;
  return {
    getObject: function  () {
      if(!_item) {
        _item = new Object("I am the instance");
      }
      return _item;
    }
  }
})();

console.log(jsOne.getObject());
console.log(jsOne.getObject() === jsOne.getObject());

//es6
class Singleton {
  constructor(){
    if(!Singleton.instance){
      this.data = [];
      Singleton.instance = this;
    }

    return Singleton.instance;
  }
}

let first = new Singleton();
let second = new Singleton();
console.log(first===second);
